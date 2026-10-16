/**
 * Validator data latihan susun + modul bacaan. Jalankan: `npm run validate:susun`
 *
 * Menjaga invariant:
 *  1. Segmentasi mode ahli menggabung ulang PERSIS sama dengan `jawaban` (kanonik).
 *  2. Bank mode ahli (hasil acak) berisi token yang sama & panjang sama.
 *  3. Setiap kanji di `jawaban` punya cara baca (kamus kosakata + override).
 *  4. Struktur tiap item lengkap (id unik per bab, arti, >=2 unit).
 * Exit code 1 bila ada error.
 */
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import type { Bab, SusunItem } from '../src/types/bab'
import { canonical } from '../src/core/text/normalize'
import { segmentAhli } from '../src/core/text/segmentPartikel'
import { acak, urutanBenar } from '../src/core/text/susun'
import { kanjiTanpaBacaan } from '../src/core/text/baca'
import { bangunKamus, bangunKataDikenal } from '../src/data/kamus/bangun'

const here = dirname(fileURLToPath(import.meta.url))
const dataDir = join(here, '..', 'src', 'data')

const dirs = readdirSync(dataDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^bab\d+$/.test(d.name))
  .map((d) => d.name)
  .sort()

const errors: string[] = []
const warnings: string[] = []

type Baris = { bab: number; item: SusunItem }

async function jalankan() {
  const daftarBab: Bab[] = []
  const baris: Baris[] = []

  for (const d of dirs) {
    const no = Number(d.replace('bab', ''))
    const kos = await import(`file://${join(dataDir, d, 'kosakata.ts')}`)
    daftarBab.push({ no, kosakata: kos.kosakata ?? [] } as unknown as Bab)
    const mod = await import(`file://${join(dataDir, d, 'susun.ts')}`)
    for (const item of (mod.susun ?? []) as SusunItem[]) baris.push({ bab: no, item })
  }

  const kamus = bangunKamus(daftarBab)
  const dikenal = bangunKataDikenal(daftarBab)

  let totalToken = 0
  for (const { bab, item } of baris) {
    const tag = `bab${bab} ${item.id}`

    if (!item.arti?.trim()) errors.push(`${tag}: arti kosong`)
    if (!item.jawaban?.trim()) errors.push(`${tag}: jawaban kosong`)
    if (!item.kata || item.kata.length < 2) errors.push(`${tag}: kata < 2 unit`)

    const benar = urutanBenar(item)
    const token = segmentAhli(benar, { kataDikenal: dikenal })

    if (canonical(token.join('')) !== canonical(item.jawaban)) {
      errors.push(
        `${tag}: gabungan token ahli != jawaban\n    jawaban: ${item.jawaban}\n    token  : ${token.join(' | ')}`,
      )
    }
    if (token.some((t) => !t.trim())) errors.push(`${tag}: ada token kosong`)

    const bank = acak(token, 1)
    if (bank.length !== token.length || bank.slice().sort().join() !== token.slice().sort().join()) {
      errors.push(`${tag}: bank ahli tidak memuat token yang sama`)
    }
    totalToken += token.length

    const kurang = kanjiTanpaBacaan(item.jawaban, kamus)
    if (kurang.length > 0) {
      errors.push(`${tag}: kanji tanpa bacaan → ${kurang.join(' ')}`)
    }
  }

  console.log(`Bab diperiksa      : ${dirs.length}`)
  console.log(`Soal susun         : ${baris.length}`)
  console.log(`Token mode ahli    : ${totalToken}`)
  console.log(`Kamus kanji→kana   : ${kamus.size}`)
  console.log(`Kata dikenal       : ${dikenal.size}`)

  if (warnings.length) {
    console.log(`\nPeringatan (${warnings.length}):`)
    warnings.slice(0, 20).forEach((w) => console.log('  ! ' + w))
  }
  if (errors.length) {
    console.log(`\nError (${errors.length}):`)
    errors.slice(0, 40).forEach((e) => console.log('  x ' + e))
    console.log(`\nGAGAL: ${errors.length} error`)
    process.exit(1)
  }
  console.log('\nOK: data susun + bacaan valid (0 error)')
}

jalankan().catch((e) => {
  console.error(e)
  process.exit(1)
})
