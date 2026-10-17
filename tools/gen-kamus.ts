/**
 * Generate `src/data/kamus/terbangun.ts` — kamus SIAP-PAKAI (kecil).
 * Jalankan: `npm run gen:kamus` (wajib bila kosakata bab / override berubah).
 *
 * Kenapa: kamus dibangun dari kosakata SEMUA bab. Kalau dihitung saat runtime,
 * modul kamus terpaksa mengimpor seluruh data bab → data 50 bab ikut ke bundel
 * (bahkan saat membuka satu bab). Dibekukan jadi data kecil = tetap sinkron,
 * tanpa menarik data bab.
 *
 * Konsistensi dijaga tes `src/data/kamus/kamus.test.ts`.
 */
import { readdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import type { Bab } from '../src/types/bab'
import { bangunArti, bangunKamus, bangunKataDikenal } from '../src/data/kamus/bangun'

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

const obj = (m: Map<string, string>) => JSON.stringify(Object.fromEntries(m))

const isi = `/**
 * DI-GENERATE oleh \`npm run gen:kamus\` — JANGAN edit manual.
 * Konsistensi dijaga tes \`src/data/kamus/kamus.test.ts\`.
 */

/** Kanji → cara baca (kana), termasuk OVERRIDE_BACA. */
export const BACA: Record<string, string> = ${obj(bangunKamus(babs))}

/** Kata (kana/kanji) yang dianggap dikenal (mode ahli). */
export const KENAL: string[] = ${JSON.stringify([...bangunKataDikenal(babs)].sort())}

/** Kata (kana/kanji) → arti Indonesia. */
export const ARTI: Record<string, string> = ${obj(bangunArti(babs))}
`

writeFileSync(join(dataDir, 'kamus', 'terbangun.ts'), isi)
console.log(
  `terbangun.ts ditulis: ${bangunKamus(babs).size} baca · ${bangunKataDikenal(babs).size} dikenal · ${bangunArti(babs).size} arti`,
)
