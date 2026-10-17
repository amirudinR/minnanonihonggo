/**
 * Validator soal kuis tata bahasa (bunpouSoal). Jalankan: `npm run validate:bunpou`
 *
 * INVARIAN yang dijaga:
 *  1. `id` unik (dalam bab & global), `grup` = 'bunpou' | 'catatan'
 *  2. `no` merujuk pola yang ADA di `bunpou` (grup bunpou) / `catatanTataBahasa` (grup catatan)
 *  3. SETIAP pola punya TEPAT 5 soal (tidak lebih, tidak kurang)
 *  4. `soal` memuat rumpang "___"; `arti` tidak kosong
 *  5. `jawaban` ada di `pilihan`; `pilihan` = 4 opsi TANPA duplikat
 *  6. tidak ada karakter rusak (\ufffd / rentetan "??")
 *
 * Bab yang belum punya `bunpouSoal` DILEWATI (peluncuran bertahap) tapi dihitung
 * dan dilaporkan, supaya jelas berapa bab yang sudah selesai.
 */
import { readdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import type { Bab, SoalBunpou } from '../src/types/bab'

const here = dirname(fileURLToPath(import.meta.url))
const dataDir = join(here, '..', 'src', 'data')

// Argumen opsional = daftar nomor bab yang dicek saja, mis. `validate_bunpou.ts 6 7 8`
// (dipakai saat mengerjakan beberapa bab secara paralel).
const hanya = process.argv
  .slice(2)
  .map((a) => Number.parseInt(a, 10))
  .filter((n) => Number.isInteger(n) && n > 0)
const banking = (nama: string) => Number.parseInt(nama.replace(/\D/g, ''), 10)

const dirs = readdirSync(dataDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^bab\d+$/.test(d.name))
  .map((d) => d.name)
  .filter((d) => existsSync(join(dataDir, d, 'index.ts')))
  .filter((d) => hanya.length === 0 || hanya.includes(banking(d)))
  .sort()

const JML_PER_POLA = 5
const JML_PILIHAN = 4

type Masalah = { bab: number; pesan: string }
const masalah: Masalah[] = []
const rusak = (s: string) => s.includes('\ufffd') || /\?\?/.test(s)

/**
 * Kandidat "giveaway" = jawaban tercetak di luar rumpang sehingga bisa dijiplak.
 * Sisanya yang WAJAR (drill ubah-kalimat yang memang menampilkan kalimat sumber,
 * Q&A yang bentuk katanya beda, & 1 false positive `お願いします`) dijadikan baseline:
 * kalau jumlahnya melebihi baseline → ERROR (ada soal baru yang bocor jawabannya).
 */
const BASELINE_GIVEAWAY = 8
const giveaway: string[] = []

let sudah = 0
let totalSoal = 0
let totalPola = 0
const idGlobal = new Map<string, number>()

for (const dir of dirs) {
  const bab = ((await import(`../src/data/${dir}/index.ts`)) as { default: Bab }).default
  const soal = bab.bunpouSoal
  if (!soal) continue
  sudah++
  totalSoal += soal.length

  const polaBunpou = new Set(bab.bunpou.map((b) => b.no))
  const polaCatatan = new Set((bab.catatanTataBahasa ?? []).map((b) => b.no))

  // 1 + 5 + 6: per soal
  const idBab = new Set<string>()
  for (const s of soal as SoalBunpou[]) {
    const catat = (pesan: string) => masalah.push({ bab: bab.no, pesan: `${s.id}: ${pesan}` })

    if (idBab.has(s.id)) catat('id duplikat dalam bab ini')
    idBab.add(s.id)
    if (idGlobal.has(s.id)) catat(`id dipakai juga oleh bab ${idGlobal.get(s.id)}`)
    idGlobal.set(s.id, bab.no)

    if (s.grup !== 'bunpou' && s.grup !== 'catatan') catat(`grup tidak dikenal: ${s.grup}`)
    if (!Number.isInteger(s.no)) catat('no bukan bilangan bulat')

    // 2: rujukan pola
    const kumpulan = s.grup === 'catatan' ? polaCatatan : polaBunpou
    if (!kumpulan.has(s.no)) catat(`pola no ${s.no} tidak ada di ${s.grup}`)

    if (!s.soal.includes('___')) catat('soal tidak memuat rumpang "___"')
    if (!s.arti.trim()) catat('arti kosong')
    if (!s.jawaban.trim()) catat('jawaban kosong')

    if (!Array.isArray(s.pilihan) || s.pilihan.length !== JML_PILIHAN)
      catat(`pilihan harus ${JML_PILIHAN} opsi (sekarang ${s.pilihan?.length ?? 0})`)
    if (new Set(s.pilihan).size !== s.pilihan.length) catat(`pilihan ada duplikat: ${s.pilihan.join(' / ')}`)
    if (!s.pilihan.includes(s.jawaban)) catat(`jawaban "${s.jawaban}" tidak ada di pilihan`)

    for (const teks of [s.id, s.soal, s.arti, s.jawaban, ...s.pilihan])
      if (rusak(teks)) catat(`karakter rusak pada "${teks}"`)

    // 7: jawaban TIDAK boleh tercetak di luar rumpang (giveaway). Lihat AGENTS §3 #32.
    if (s.jawaban !== '（なし）' && s.jawaban.length >= 2) {
      const [kiri, kanan] = s.soal.split('___')
      for (const bagian of [kanan, kiri]) {
        if (!bagian) continue
        let i = bagian.indexOf(s.jawaban)
        while (i >= 0) {
          // `です` di dalam `ですか` = bentuk pertanyaan, bukan giveaway
          if (bagian[i + s.jawaban.length] !== 'か') {
            giveaway.push(`${s.id} | ${s.soal} → ${s.jawaban}`)
            break
          }
          i = bagian.indexOf(s.jawaban, i + 1)
        }
        if (giveaway[giveaway.length - 1]?.startsWith(`${s.id} `)) break
      }
    }
  }

  // 3: tepat 5 soal per pola
  for (const [grup, himpunan] of [
    ['bunpou', polaBunpou],
    ['catatan', polaCatatan],
  ] as const) {
    for (const no of himpunan) {
      const n = soal.filter((s) => s.grup === grup && s.no === no).length
      if (n !== JML_PER_POLA)
        masalah.push({ bab: bab.no, pesan: `${grup} no ${no}: ${n} soal (harus ${JML_PER_POLA})` })
    }
  }
  totalPola += polaBunpou.size + polaCatatan.size
}

// 7: giveaway melebihi baseline → masuk daftar masalah
console.log('validate:bunpou — invariant soal kuis tata bahasa')
console.log(`  bab ber-soal : ${sudah}/${dirs.length}  (sisanya belum dibuat → dilewati)`)
console.log(`  pola dicek   : ${totalPola} · soal : ${totalSoal}`)
console.log(`  kandidat giveaway : ${giveaway.length} (baseline ${BASELINE_GIVEAWAY})`)
if (giveaway.length > BASELINE_GIVEAWAY) {
  for (const g of giveaway) masalah.push({ bab: 0, pesan: `giveaway: ${g}` })
}

if (masalah.length === 0) {
  console.log('  OK — 0 masalah\n')
  process.exit(0)
}

const perBab = new Map<number, string[]>()
for (const m of masalah) {
  if (!perBab.has(m.bab)) perBab.set(m.bab, [])
  perBab.get(m.bab)!.push(m.pesan)
}
for (const [bab, list] of [...perBab.entries()].sort((a, b) => a[0] - b[0])) {
  console.error(`\nBab ${bab} (${list.length} masalah):`)
  for (const p of list) console.error(`  - ${p}`)
}
console.error(`\nGAGAL: ${masalah.length} masalah\n`)
process.exit(1)
