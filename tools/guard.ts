/**
 * Cek ATURAN KERAS AGENTS.md (cepat, tanpa build). Jalankan: `npm run guard`
 * Direkomendasikan lewat: `npm run guard` (= validate + audit + guard).
 * Gagal = exit 1 agar tidak lulus "selesai" tanpa sadar.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

const DEP_UI = [
  '@tailwindcss/vite',
  'react',
  'react-dom',
  'react-router-dom',
  'tailwindcss',
  'zustand',
]
const DEP_DEV = [
  '@types/react',
  '@types/react-dom',
  '@vitejs/plugin-react',
  'tsx',
  'typescript',
  'vite',
  'vitest',
]

let gagal = 0
const lapor = (ok: boolean, pesan: string, detail: string[] = []) => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${pesan}`)
  if (!ok) gagal++
  detail.forEach((d) => console.log(`      ${d}`))
}

// 1. Tidak ada dependensi UI baru (AGENTS §1.2)
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
const baru = [
  ...Object.keys(pkg.dependencies ?? {}).filter((d) => !DEP_UI.includes(d)),
  ...Object.keys(pkg.devDependencies ?? {}).filter((d) => !DEP_DEV.includes(d)),
]
lapor(baru.length === 0, 'tidak ada dependensi UI/dependensi baru di luar allowlist', baru.map((b) => `+ ${b}`))

// 2. Tailwind v4 CSS-first: tidak boleh ada file config (AGENTS §1.3)
lapor(
  !existsSync(join(root, 'tailwind.config.js')) && !existsSync(join(root, 'postcss.config.js')),
  'tidak ada tailwind.config.js / postcss.config.js (Tailwind v4 CSS-first)',
)

// 3/4. Tema kertas: paper.css (entry) + seluruh modul src/styles/paper/*.
// Warna harus token (AGENTS §9) dan tidak boleh ada `transition` (dipindah ke motion.css).
const berkasPaper: { nama: string; isi: string }[] = [
  { nama: 'paper.css', isi: readFileSync(join(root, 'src', 'styles', 'paper.css'), 'utf8') },
]
const dirPaper = join(root, 'src', 'styles', 'paper')
if (existsSync(dirPaper)) {
  for (const f of readdirSync(dirPaper).filter((f) => f.endsWith('.css')).sort()) {
    berkasPaper.push({ nama: `paper/${f}`, isi: readFileSync(join(dirPaper, f), 'utf8') })
  }
}

const hex: string[] = []
const rgba: string[] = []
for (const { nama, isi } of berkasPaper) {
  for (const m of isi.matchAll(/[#][0-9a-fA-F]{3,8}\b/g)) hex.push(`${nama}: hex ${m[0]}`)
  for (const m of isi.matchAll(/rgba?\(([^)]*)\)/g)) {
    const isi2 = m[1].replace(/\s/g, '')
    // boleh: netral hitam alpha rendah (shadow) + token kanal RGB tema
    const boleh =
      isi2.startsWith('0,0,0,0.0') || isi2.startsWith('0,0,0,0.1') || isi2.startsWith('0,0,0,0.12') ||
      isi2.startsWith('0,0,0,0.15') || isi2.startsWith('0,0,0,0.2') || isi2.startsWith('var(--k-rgb-')
    if (!boleh) rgba.push(`${nama}: rgba(${m[1]})`)
  }
}
lapor(hex.length + rgba.length === 0, 'paper.css (+paper/*) hanya memakai token (bukan hex/rgba hardcode)', [...hex.slice(0, 6), ...rgba.slice(0, 6)])

// 4. tidak boleh ada transition di tema kertas (AGENTS §9)
const transisi = berkasPaper.filter((b) => /transition\s*:/.test(b.isi)).map((b) => b.nama)
lapor(transisi.length === 0, 'paper.css (+paper/*) tidak memuat transition (sudah di motion.css)', transisi)

// 5. HomePage: jumlah bab harus dinamis dari registry (AGENTS §9)
const home = readFileSync(join(root, 'src', 'pages', 'HomePage.tsx'), 'utf8')
lapor(
  !/TOTAL\s*=\s*25/.test(home) && /(meta|babs)\.(length|map)/.test(home),
  'HomePage memakai jumlah bab dinamis (meta.length), bukan TOTAL = 25',
)

// 5b. Kode aplikasi DILARANG impor `src/data/all` (eager glob = data 50 bab
//     masuk bundel; lihat catatan di src/data/index.ts).
const pelanggarAll: string[] = []
for (const dir of ['pages', 'features', 'components', 'store']) {
  const akar = join(root, 'src', dir)
  if (!existsSync(akar)) continue
  for (const f of readdirSync(akar, { recursive: true, encoding: 'utf8' })) {
    if (!/\.tsx?$/.test(f) || f.endsWith('.test.ts')) continue
    const isi = readFileSync(join(akar, f), 'utf8')
    if (/from '.*data\/all'/.test(isi)) pelanggarAll.push(`${dir}/${f}`)
  }
}
lapor(
  pelanggarAll.length === 0,
  'tidak ada kode aplikasi yang impor data/all (eager = data 50 bab ke bundel)',
  pelanggarAll.slice(0, 6),
)

// 6. Data: karakter rusak OCR (\ufffd) — '??' ditangani validator (AGENTS §3 #12-13)
const rusak: string[] = []
for (const d of readdirSync(join(root, 'src', 'data'), { withFileTypes: true })) {
  if (!d.isDirectory()) continue
  for (const f of readdirSync(join(root, 'src', 'data', d.name))) {
    const p = join(root, 'src', 'data', d.name, f)
    if (!statSync(p).isFile()) continue
    if (readFileSync(p, 'utf8').includes('\ufffd')) rusak.push(`${d.name}/${f}`)
  }
}
lapor(rusak.length === 0, 'tidak ada karakter rusak \ufffd di data', rusak.slice(0, 8))

// 7. Audio TIDAK boleh masuk git (AGENTS §1.1)
const tracked = runSilent('git ls-files public/audio')
lapor(tracked.trim() === '', 'public/audio tidak di-commit ke git', tracked.split('\n').filter(Boolean).slice(0, 5))

function runSilent(cmd: string): string {
  try {
    return execSync(cmd, { cwd: root, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] })
  } catch {
    return ''
  }
}

console.log(gagal === 0 ? '\nGUARD: semua aturan keras lolos' : `\nGUARD: ${gagal} aturan DILANGGAR`)
process.exit(gagal === 0 ? 0 : 1)
