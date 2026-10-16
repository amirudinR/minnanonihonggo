import { canonical } from './normalize'
import { segmentAhli, type OpsiSegmentasi } from './segmentPartikel'
import type { SusunItem } from '../../types/bab'

/**
 * Logika murni latihan menyusun kalimat (tanpa React).
 *
 * Konsep: setiap soal punya `kata` = daftar UNIT kata (boleh mengandung spasi
 * internal, mis. "あの 方は"). `jawaban` = unit-unit itu DALAM URUTAN BENAR,
 * digabung dengan spasi tunggal. User menyusun index bank; koreksi membanding
 * urutan unit user vs urutan unit jawaban.
 *
 * Catatan: jangan memecah `jawaban` dengan split(' ') karena frasa seperti
 * "あの 方は" memang satu unit → akan terpecah salah. Bank = `item.kata` apa adanya.
 */

/** Bank kata untuk satu soal: `item.kata` diacak deterministik dari id+jawaban. */
export function bankUntuk(item: SusunItem): string[] {
  if (item.kata.length < 2) return [...item.kata]
  return acak(item.kata, hash(item.id + '|' + item.jawaban))
}

/** Hash string sederhana → angka (untuk seed acak deterministik). */
function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 2 ** 31
  return h || 1
}

/** Fisher–Yates dengan LCG ber-seed. Deterministik → index bank konsisten. */
export function acak<T>(arr: T[], seed?: number): T[] {
  const a = [...arr]
  let s = seed ?? Math.floor(Math.random() * 2 ** 31)
  const rnd = () => {
    s = (s * 1103515245 + 12345) % 2 ** 31
    return s / 2 ** 31
  }
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Urutan unit jawaban yang benar = pecah `jawaban` per spasi tunggal antar unit.
 *  Karena unit boleh punya spasi internal, kita TIDAK bisa split(' '). Sebagai
 *  gantinya: cari urutan `kata` yang menghasilkan `jawaban` (biasanya identitas
 *  dari penulis data). Praktisnya kita banding lewat kanonik+gabung. */
export function urutanBenar(item: SusunItem): string[] {
  // boleh ada kata duplikat → cari penempatan greedy yang cocok dengan `jawaban`
  const target = canonical(item.jawaban)
  const sisa = [...item.kata]
  const hasil: string[] = []
  let acc = ''
  while (sisa.length > 0) {
    let ketemu = false
    for (let i = 0; i < sisa.length; i++) {
      const coba = acc + canonical(sisa[i])
      if (target.startsWith(coba)) {
        hasil.push(sisa[i])
        acc = coba
        sisa.splice(i, 1)
        ketemu = true
        break
      }
    }
    if (!ketemu) break
  }
  return hasil.length === item.kata.length ? hasil : [...item.kata]
}

/** Urutan index → kalimat (unit digabung dengan spasi). */
export function susunKalimat(bank: string[], urutanIndex: number[]): string {
  return urutanIndex.map((i) => bank[i] ?? '').join(' ')
}

export type SusunLevel = 'tepat' | 'belum'

/** Koreksi: userKata (unit terpilih) vs urutan unit jawaban yang benar. */
export function koreksiSusun(userKata: string[], jawaban: string[]): SusunLevel {
  if (userKata.length === 0) return 'belum'
  if (userKata.length !== jawaban.length) return 'belum'
  const cocok = userKata.every((k, i) => canonical(k) === canonical(jawaban[i] ?? ''))
  return cocok ? 'tepat' : 'belum'
}

/** Cek jawaban tersimpan ("0,1,2" index) sudah benar untuk item ini. */
export function sudahBenar(item: SusunItem, value?: string): boolean {
  if (!value?.trim()) return false
  const urut = value
    .split(',')
    .map((x) => Number(x))
    .filter((n) => Number.isInteger(n) && n >= 0)
  const bank = bankUntuk(item)
  if (urut.length !== bank.length) return false
  return (
    koreksiSusun(
      urut.map((i) => bank[i] ?? ''),
      urutanBenar(item),
    ) === 'tepat'
  )
}

/** Skor latihan susun untuk kumpulan item. */
export function hitungSkorSusun(
  items: SusunItem[],
  answers: Record<string, string>,
  keyUntuk: (item: SusunItem) => string,
): { benar: number; total: number } {
  const benar = items.filter((it) => sudahBenar(it, answers[keyUntuk(it)])).length
  return { benar, total: items.length }
}

/* =================== MODE AHLI (partikel + verba dipecah) =================== */

/** Token halus mode ahli: unit benar → partikel & akhiran verba terpisah. */
export function tokenAhli(item: SusunItem, opsi?: OpsiSegmentasi): string[] {
  return segmentAhli(urutanBenar(item), opsi)
}

/** Bank mode ahli (acak deterministik → index jawaban selalu valid). */
export function bankAhli(item: SusunItem, opsi?: OpsiSegmentasi): string[] {
  const token = tokenAhli(item, opsi)
  if (token.length < 2) return token
  return acak(token, hash(item.id + '|ahli|' + item.jawaban))
}

/** Koreksi mode ahli: token user vs tokenjawaban yang benar. */
export function sudahBenarAhli(
  item: SusunItem,
  value: string | undefined,
  opsi?: OpsiSegmentasi,
): boolean {
  if (!value?.trim()) return false
  const urut = value
    .split(',')
    .map((x) => Number(x))
    .filter((n) => Number.isInteger(n) && n >= 0)
  const bank = bankAhli(item, opsi)
  if (urut.length !== bank.length) return false
  return (
    koreksiSusun(
      urut.map((i) => bank[i] ?? ''),
      tokenAhli(item, opsi),
    ) === 'tepat'
  )
}
