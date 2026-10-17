/**
 * Generate `src/data/meta.ts` — ringkasan bab untuk Home & TopNav.
 * Jalankan: `npm run gen:meta` (WAJIB dijalankan ulang bila data bab berubah).
 *
 * Tujuan: bundel AWAL tidak perlu memuat isi 50 bab. Home cuma butuh nomor,
 * topik, judul kaiwa, dan jumlah kosakata/bunpou. Data penuh dimuat per bab
 * lewat `src/data/load.ts` (code-split).
 *
 * Konsistensi dijaga oleh tes (`src/data/registry.test.ts`).
 */
import { readdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import type { Bab } from '../src/types/bab'
import { partikel } from '../src/data/partikel'
import { soalPartikel } from '../src/data/partikel-soal'

const here = dirname(fileURLToPath(import.meta.url))
const dataDir = join(here, '..', 'src', 'data')

const dirs = readdirSync(dataDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && /^bab\d+$/.test(e.name))
  .map((e) => e.name)
  .sort()

const babs: Bab[] = []
for (const d of dirs) {
  const mod = (await import(`../src/data/${d}/index.ts`)) as { default: Bab }
  babs.push(mod.default)
}
babs.sort((a, b) => a.no - b.no)

const baris = babs.map((b) => {
  const latihan = b.renshuuA.length + b.renshuuB.length + b.renshuuC.length
  return (
    `  { no: ${b.no}, topik: ${JSON.stringify(b.topik)},` +
    ` kaiwaJudul: ${JSON.stringify(b.kaiwa?.judul ?? '')},` +
    ` kosakata: ${b.kosakata.length}, bunpou: ${b.bunpou.length}, latihan: ${latihan} },`
  )
})

const isi = `/**
 * Ringkasan bab untuk daftar/indeks (Home & TopNav).
 *
 * ⚠️ FILE INI DI-GENERATE — JANGAN edit manual.
 * Regenerate: \`npm run gen:meta\` (wajib bila data bab berubah).
 * Konsistensi dijaga tes di \`src/data/registry.test.ts\`.
 *
 * Kenapa ada: supaya bundel awal tidak memuat isi 50 bab. Data penuh dimuat
 * per bab lewat \`src/data/load.ts\`.
 */

export interface BabMeta {
  no: number
  topik: string
  /** Judul kaiwa (untuk pencarian di Home). Kosong bila tak ada. */
  kaiwaJudul: string
  kosakata: number
  bunpou: number
  /** Jumlah butir renshuuA + renshuuB + renshuuC. */
  latihan: number
}

export const meta: BabMeta[] = [
${baris.join('\n')}
]

export const TOTAL_BAB = meta.length

export function getMeta(no: number): BabMeta | undefined {
  return meta.find((m) => m.no === no)
}

/** Jumlah entri data partikel (untuk kartu ringkas di Home). */
export const JUMLAH_PARTIKEL = ${partikel.length}
/** Jumlah soal ujian partikel (untuk kartu ringkas di Home). */
export const JUMLAH_SOAL_PARTIKEL = ${soalPartikel.length}
`

writeFileSync(join(dataDir, 'meta.ts'), isi)
console.log(`meta.ts ditulis: ${babs.length} bab · ${partikel.length} partikel · ${soalPartikel.length} soal`)
