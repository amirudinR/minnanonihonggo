/**
 * Validator data bab. Jalankan: `npm run validate`
 * Memeriksa konsistensi struktur, jumlah audio, dsb. Exit code 1 bila ada error.
 *
 * Catatan: tidak memakai `src/data/index.ts` (yang bergantung pada
 * `import.meta.glob` milik Vite) — di sini kita enumerasi folder bab secara manual.
 */
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import type { Bab } from '../src/types/bab'
import { validasiSemua } from '../src/core/validation/schema'

const here = dirname(fileURLToPath(import.meta.url))
const dataDir = join(here, '..', 'src', 'data')

const babDirs = readdirSync(dataDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^bab\d+$/.test(d.name))
  .map((d) => d.name)
  .sort()

if (babDirs.length === 0) {
  console.error('Tidak ada folder bab ditemukan di src/data')
  process.exit(1)
}

const babs: Bab[] = []
for (const dir of babDirs) {
  const mod = (await import(`../src/data/${dir}/index.ts`)) as { default: Bab }
  babs.push(mod.default)
}
babs.sort((a, b) => a.no - b.no)

const hasil = validasiSemua(babs)

let errors = 0
let warnings = 0

for (const h of hasil) {
  if (h.errors.length === 0 && h.warnings.length === 0) {
    console.log(`\u2714 Bab ${h.bab}: OK`)
    continue
  }
  if (h.errors.length) {
    console.error(`\u2716 Bab ${h.bab} \u2014 ${h.errors.length} error:`)
    h.errors.forEach((e) => console.error(`    \u2022 ${e}`))
    errors += h.errors.length
  }
  if (h.warnings.length) {
    console.warn(`\u26A0 Bab ${h.bab} \u2014 ${h.warnings.length} warning:`)
    h.warnings.forEach((w) => console.warn(`    \u2022 ${w}`))
    warnings += h.warnings.length
  }
}

console.log(`\nTotal: ${babs.length} bab \u00B7 ${errors} error \u00B7 ${warnings} warning`)
process.exit(errors > 0 ? 1 : 0)
