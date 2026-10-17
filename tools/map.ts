/**
 * Peta kode + data untuk AI (dan manusia). Jalankan: `npm run map`
 * Menghasilkan `docs/AI-MAP.md`:
 *   1. Modul non-data (core/features/pages/store/styles/types) + deskripsi 1 baris
 *   2. Peta dependensi antar-modul (impor relatif & alias @/)
 *   3. Ringkasan jumlah item per bab (50 bab)
 * File sengaja di-generate (jangan edit manual; edit generatornya).
 */
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, relative } from 'node:path'
import type { Bab } from '../src/types/bab'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const srcDir = join(root, 'src')
const outFile = join(root, 'docs', 'AI-MAP.md')

/** Deskripsi = komentar blok pertama (/** ... *\/) atau baris komentar pertamadi file. */
function deskripsi(txt: string): string {
  const blok = txt.match(/\/\*\*([\s\S]*?)\*\//)
  if (blok) {
    const baris = blok[1]
      .split('\n')
      .map((l) => l.replace(/^\s*\*\s?/, '').trim())
      .filter((l) => l && !l.startsWith('@'))
    if (baris.length) return baris[0].replace(/\.$/, '')
  }
  const barisKomen = txt
    .split('\n')
    .find((l) => l.trim().startsWith('//') && !l.trim().startsWith('///'))
  if (barisKomen) return barisKomen.replace(/^\s*\/\/\s?/, '').trim().slice(0, 80)
  // Fallback: daftar simbol yang diekspor (berguna sebagai p benda navigasi).
  const ekspor = [
    ...new Set(
      [...txt.matchAll(/export\s+(?:default\s+)?(?:const|function|class|interface|type)\s+(\w+)/g)]
        .map((m) => m[1]),
    ),
  ]
  return ekspor.length ? `exports: ${ekspor.join(', ')}` : '—'
}

/** Kumpulkan semua file .ts/.tsx non-data + parse impornya. */
interface Modul {
  path: string // relatif dari root, pakai '/'
  lines: number
  desc: string
  imports: string[] // path relatif root, pakai '/'
}

function collect(dir: string): Modul[] {
  const out: Modul[] = []
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, ent.name)
    if (ent.isDirectory()) {
      // data/babNN dilewati (350+ file data, terlalu banyak; dirangkum di tabel)
      if (full === join(srcDir, 'data')) continue
      out.push(...collect(full))
      continue
    }
    if (!/\.tsx?$/.test(ent.name) || ent.name.endsWith('.d.ts') || ent.name.endsWith('.test.ts')) continue
    const txt = readFileSync(full, 'utf8')
    const imports: string[] = []
    const re = /from\s+'([^']+)'/g
    let m: RegExpExecArray | null
    while ((m = re.exec(txt))) {
      const spec = m[1]
      let target: string | null = null
      if (spec.startsWith('.')) {
        target = relative(root, join(dirname(full), spec)).replace(/\\/g, '/')
      } else if (spec.startsWith('@/')) {
        target = spec.slice(2)
      }
      if (target) {
        const kandidat = [target, `${target}.ts`, `${target}.tsx`, `${target}/index.ts`]
          .map((t) => join(root, t))
          .find((p) => existsSync(p) && statSync(p).isFile())
        if (kandidat) imports.push(relative(root, kandidat).replace(/\\/g, '/'))
      }
    }
    out.push({
      path: relative(root, full).replace(/\\/g, '/'),
      lines: txt.split('\n').length,
      desc: deskripsi(txt),
      imports: [...new Set(imports)].sort(),
    })
  }
  return out.sort((a, b) => a.path.localeCompare(b.path))
}

const moduls = collect(srcDir)

// --- dependensi (hanya antar-modul src non-data) ---
const namaModul = new Set(moduls.map((m) => m.path))
const edges: string[] = []
for (const m of moduls) {
  for (const imp of m.imports) {
    if (namaModul.has(imp)) edges.push(`${m.path} → ${imp}`)
  }
}
edges.sort()

// --- tabel per-bab ---
const babs: Bab[] = []
for (const d of readdirSync(join(srcDir, 'data'), { withFileTypes: true })) {
  if (!d.isDirectory() || !/^bab\d+$/.test(d.name)) continue
  if (!existsSync(join(srcDir, 'data', d.name, 'index.ts'))) continue
  const mod = (await import(`../src/data/${d.name}/index.ts`)) as { default: Bab }
  babs.push(mod.default)
}
babs.sort((a, b) => a.no - b.no)

const pad = (s: string | number, n: number) => String(s).padStart(n)
const tabel = babs.map((b) =>
  [
    pad(b.no, 3),
    pad(b.kosakata.length, 4),
    pad(b.bunpou.length, 4),
    pad(b.catatanTataBahasa?.length ?? 0, 4),
    pad(b.reibun.length, 4),
    pad(b.kaiwa?.dialog.length ?? 0, 4),
    pad(b.renshuuA.length, 3),
    pad(b.renshuuB.length, 3),
    pad(b.renshuuC.length, 3),
    pad(b.mondai.length, 4),
    pad(b.bunsho?.length ?? 0, 5),
    pad(b.konteks?.length ?? 0, 4),
  ].join(' '),
)

const md = `# PETA KODE & DATA — auto-generated oleh \`npm run map\`

> JANGAN edit manual. Ubah \`tools/map.ts\` lalu jalankan ulang.
> Aturan kerja lengkap: \`AGENTS.md\` · rencana: \`PLAN.md\` · checklist bab: \`docs/BAB-TEMPLATE.md\`

## 1. Modul (non-data)

| File | Baris | Deskripsi |
|---|---|---|
${moduls.map((m) => `| \`${m.path}\` | ${m.lines} | ${m.desc} |`).join('\n')}

## 2. Peta dependensi (impor antar modul src)

\`\`\`
${edges.length ? edges.join('\n') : '(tidak ada impor antar-modul)'}
\`\`\`

Catatan: \`src/data/index.ts\` memakai \`import.meta.glob\` → registry 50 bab otomatis (tidak terlihat sebagai edge statis).

## 3. Ringkasan data ${babs.length} bab

\`\`\`
bab | kos  bun  cat  rei  kai  rA  rB  rC  mon  bunS  kon
${'-'.repeat(62)}
${tabel.join('\n')}
\`\`\`

## 4. Perintah

| Perintah | Fungsi |
|---|---|
| \`npm run check\` | validate + typecheck (loop cepat) |
| \`npm run check:full\` | validate + typecheck + test + build (gerbang selesai) |
| \`npm run test\` | tes unit Vitest (core/* + snapshot data) |
| \`npm run verify\` | check:full + screenshot desktop/mobile + cek error boundary |
| \`npm run map\` | regenarate file ini |
| \`npm run find <kata>\` | cari di kode/data/docs, output terkelompok |
| \`npm run guard\` | validate + audit + aturan keras AGENTS.md |
| \`npm run add:bab <N>\` | scaffold folder bab baru dari checklist BAB-TEMPLATE |
| \`npm run validate\` | validasi data 50 bab |
| \`npm run audit\` | audit kelengkapan data |
`

mkdirSync(join(root, 'docs'), { recursive: true })
writeFileSync(outFile, md, 'utf8')
console.log(`AI-MAP.md ditulis: ${moduls.length} modul, ${edges.length} edge, ${babs.length} bab`)
