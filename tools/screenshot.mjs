#!/usr/bin/env node
/**
 * Screenshot otomatis + cek error render (Chrome headless, tanpa dependensi).
 * Jalankan: `npm run verify` (setelah check:full) atau langsung:
 *   node tools/screenshot.mjs [--mobile] [--url http://localhost:5173/bab/34]
 *
 * - Desktop 1200px & mobile 390px (window-size; emulasi perangkat sungguhan
 *   butuh DevTools MCP — ini cukup untuk cek layout & runtime error).
 * - Cek DOM: "Unexpected Application Error" / "Maximum update depth" → exit 1.
 * - Tema: menyesuaikan setelan tersimpan di browser profile (default = tema
 *   sistem/terang). Cek tema gelap dengan klik ThemeToggle.
 */
import { spawnSync } from 'node:child_process'
import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const PROFILE = 'C:\\Users\\Amir\\AppData\\Local\\Temp\\opencode\\cr-prof'
const OUT = join(process.cwd(), 'tmp', 'shots')

const argv = process.argv.slice(2)
const isMobile = argv.includes('--mobile')
const urlArg = argv.find((a) => a.startsWith('http'))
const BASE = urlArg ? null : 'http://localhost:5173'

const HALAMAN = urlArg
  ? [['custom', urlArg]]
  : [
      ['home', `${BASE}/`],
      ['bab01', `${BASE}/bab/1`],
      ['bab34', `${BASE}/bab/34`],
    ]

const UKURAN = isMobile
  ? [['mobile', 390, 3000]]
  : [
      ['desktop', 1200, 3000],
      ['mobile', 390, 3000],
    ]

if (!existsSync(CHROME)) {
  console.error(`Chrome tidak ditemukan di ${CHROME}`)
  process.exit(2)
}
mkdirSync(OUT, { recursive: true })

// 0. Pastikan dev server hidup
try {
  const r = await fetch(BASE ?? urlArg, { method: 'GET' })
  if (!r.ok && r.status !== 404) throw new Error(String(r.status))
} catch {
  console.error('Dev server tidak jalan. Nyalakan dulu:  Start-Process npm.cmd -ArgumentList "run","dev" -WorkingDirectory "D:\\LPK\\mnn1"')
  process.exit(2)
}

const PENANDA_ERROR = ['Unexpected Application Error', 'Maximum update depth exceeded', 'Application error']
let gagal = 0
const ringkas = []

for (const [nama, url] of HALAMAN) {
  // 1. Cek DOM (sekali per halaman)
  const dom = spawnSync(
    CHROME,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      `--user-data-dir=${PROFILE}`,
      '--virtual-time-budget=6000',
      '--dump-dom',
      url,
    ],
    { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  )
  const html = dom.stdout ?? ''
  const kena = PENANDA_ERROR.filter((p) => html.includes(p))
  if (kena.length) {
    gagal++
    console.log(`FAIL  ${nama}: penanda error di DOM -> ${kena.join(', ')}`)
  } else {
    console.log(`PASS  ${nama}: DOM bersih (${(html.length / 1024).toFixed(0)} KB)`)
  }

  // 2. Screenshot per ukuran
  for (const [label, w, h] of UKURAN) {
    const out = join(OUT, `${nama}_${label}.png`)
    const res = spawnSync(
      CHROME,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        '--hide-scrollbars',
        `--user-data-dir=${PROFILE}`,
        `--window-size=${w},${h}`,
        '--virtual-time-budget=6000',
        `--screenshot=${out}`,
        url,
      ],
      { encoding: 'utf8' },
    )
    if (res.status === 0 && existsSync(out)) {
      ringkas.push(`${nama}/${label}`)
    } else {
      gagal++
      console.log(`FAIL  ${nama}/${label}: screenshot gagal`)
    }
  }
}

writeFileSync(join(OUT, 'ringkas.txt'), ringkas.join('\n') + '\n')
console.log(`\nScreenshot: ${ringkas.length} file -> tmp/shots/ (${ringkas.join(', ')})`)
console.log(gagal === 0 ? 'DOM: tidak ada error boundary / loop' : `GAGAL: ${gagal} masalah`)
process.exit(gagal === 0 ? 0 : 1)
