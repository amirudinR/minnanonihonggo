/**
 * Validator data partikel (/partikel).
 * Menjaga INVARIAN yang mudah rusak saat menambah/mengubah partikel:
 *
 *  1. Tidak ada `bentuk` duplikat.
 *  2. `bab[]` terurut menaik & tanpa duplikat.
 *  3. Setiap `bab` punya entri di `perBab` (agar tidak "fallback").
 *  4. Setiap `perBab[].bab` ada di `bab[]` (relasi dua arah).
 *  5. `perBab[]` terurut menaik & tanpa duplikat bab.
 *  6. `fungsi`/`keterangan` perBab tidak kosong.
 *  7. Tiap `contoh` punya `jp` & `id` tidak kosong.
 *  8. `bab` dalam rentang 1..50.
 *  9. Soal ujian (`partikel-soal.ts`): id unik, `jawaban` ada di `pilihan`,
 *     `pilihan` tanpa duplikat, soal memuat rumpang `___`, `bab` punya partikel.
 *
 * Jalankan: `npm run validate:partikel`
 */

import { partikel } from '../src/data/partikel'
import { soalPartikel } from '../src/data/partikel-soal'

let error = 0
const err = (m: string) => {
  console.error('  ✗ ' + m)
  error++
}

const BAB_MIN = 1
const BAB_MAX = 50

// ---- Partikel ----
const bentukSet = new Set<string>()
for (const p of partikel) {
  const tag = `[${p.bentuk}]`

  if (bentukSet.has(p.bentuk)) err(`${tag} bentuk duplikat`)
  bentukSet.add(p.bentuk)

  if (!p.fungsi?.trim()) err(`${tag} fungsi kosong`)
  if (!p.penjelasan?.trim()) err(`${tag} penjelasan kosong`)
  if (p.contoh.length === 0) err(`${tag} contoh global kosong`)

  // bab[] urut & unik
  const babSorted = [...p.bab].sort((a, b) => a - b)
  if (JSON.stringify(p.bab) !== JSON.stringify(babSorted)) err(`${tag} bab[] tidak terurut menaik`)
  if (new Set(p.bab).size !== p.bab.length) err(`${tag} bab[] ada duplikat`)
  for (const b of p.bab) {
    if (b < BAB_MIN || b > BAB_MAX) err(`${tag} bab ${b} di luar rentang ${BAB_MIN}..${BAB_MAX}`)
  }

  if (!p.perBab || p.perBab.length === 0) {
    err(`${tag} tidak punya perBab`)
    continue
  }

  // 3. setiap bab ada di perBab
  for (const b of p.bab) {
    if (!p.perBab.find((x) => x.bab === b)) err(`${tag} bab ${b} tidak punya entri perBab (akan fallback)`)
  }

  // 4 + 5. perBab ⊆ bab, urut, unik
  const perBabSorted = [...p.perBab].map((x) => x.bab).sort((a, b) => a - b)
  if (JSON.stringify(p.perBab.map((x) => x.bab)) !== JSON.stringify(perBabSorted)) {
    err(`${tag} perBab[] tidak terurut menaik`)
  }
  if (new Set(p.perBab.map((x) => x.bab)).size !== p.perBab.length) err(`${tag} perBab ada bab duplikat`)
  for (const pb of p.perBab) {
    if (!p.bab.includes(pb.bab)) err(`${tag} perBab.bab ${pb.bab} tidak ada di bab[]`)
    if (!pb.fungsi?.trim()) err(`${tag} perBab bab ${pb.bab} fungsi kosong`)
    if (!pb.keterangan?.trim()) err(`${tag} perBab bab ${pb.bab} keterangan kosong`)
    for (const c of pb.contoh ?? []) {
      if (!c.jp?.trim() || !c.id?.trim()) err(`${tag} perBab bab ${pb.bab} contoh jp/id kosong`)
    }
  }
}

// ---- Soal ujian ----
const babPartikel = new Set<number>()
for (const p of partikel) for (const b of p.bab) babPartikel.add(b)

const idSet = new Set<string>()
for (const s of soalPartikel) {
  const tag = `[soal ${s.id}]`
  if (idSet.has(s.id)) err(`${tag} id duplikat`)
  idSet.add(s.id)
  if (!s.pilihan.includes(s.jawaban)) err(`${tag} jawaban "${s.jawaban}" tidak ada di pilihan`)
  if (new Set(s.pilihan).size !== s.pilihan.length) err(`${tag} pilihan duplikat: ${s.pilihan.join(', ')}`)
  if (s.pilihan.length < 3) err(`${tag} pilihan < 3`)
  if (!s.soal.includes('___')) err(`${tag} soal tidak memuat rumpang ___`)
  if (!s.arti?.trim()) err(`${tag} arti kosong`)
  if (!babPartikel.has(s.bab)) err(`${tag} bab ${s.bab} tidak punya partikel terkait`)
}

// ---- Ringkasan ----
if (error > 0) {
  console.error(`\nVALIDATE PARTIKEL: ${error} error`)
  process.exit(1)
}
console.log(
  `VALIDATE PARTIKEL: OK — ${partikel.length} partikel, ${soalPartikel.length} soal, ${babPartikel.size} bab terwakili`,
)
