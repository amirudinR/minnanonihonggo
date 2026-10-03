// Koreksi terjemahan (arti) — pencocokan "soft" berbasis kemiripan kata,
// tanpa menghukum sinonim / urutan kata.

const STOP = new Set([
  'yang', 'di', 'ke', 'dari', 'dan', 'atau', 'itu', 'ini', 'adalah', 'ialah',
  'saya', 'aku', 'kami', 'kita', 'anda', 'dia', 'mereka', 'nya', 'kah', 'lah',
  'a', 'an', 'the', 'is', 'am', 'are', 'of', 'to', 'in', 'on', 'at', 'my',
])

export function normalizeTerjemahan(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function kataKunci(s: string): string[] {
  return normalizeTerjemahan(s)
    .split(' ')
    .filter((w) => w.length >= 3 && !STOP.has(w))
}

export type TerjemahanLevel = 'tepat' | 'dekat' | 'belum'

/**
 * Bandingkan terjemahan user vs terjemahan buku memakai Jaccard + cakupan kata kunci.
 * - tepat : cakupan kata kunci >= 0.7 atau Jaccard >= 0.6
 * - dekat : cakupan >= 0.4
 * - belum : di bawah itu
 */
export function nilaiTerjemahan(
  user: string,
  expected: string,
): { level: TerjemahanLevel; skor: number } {
  const ku = kataKunci(user)
  const ke = kataKunci(expected)
  if (ku.length === 0 || ke.length === 0) return { level: 'belum', skor: 0 }

  const setE = new Set(ke)
  const cocok = ku.filter((w) => setE.has(w)).length
  const cakupan = cocok / ke.length

  const setU = new Set(ku)
  const gabungan = new Set([...setU, ...setE])
  const jaccard = gabungan.size === 0 ? 0 : cocok / gabungan.size

  const skor = Math.round(Math.max(cakupan, jaccard) * 100)

  let level: TerjemahanLevel = 'belum'
  if (cakupan >= 0.7 || jaccard >= 0.6) level = 'tepat'
  else if (cakupan >= 0.4) level = 'dekat'

  return { level, skor }
}
