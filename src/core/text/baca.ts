/**
 * Baca kanji → kana (untuk panel "Keterangan" latihan susun).
 * Murni & bebas React; kamus dikirim dari luar supaya modul ini aman di Node/tsx.
 */

/** Kamus kanji → cara baca (kana). */
export type Kamus = ReadonlyMap<string, string>

/** Satu deret kanji (termasuk 々). */
export const DERET_KANJI = /[\u3400-\u9fff\u3005]+/g
/** Satu deret katakana. */
export const DERET_KATAKANA = /[\u30a1-\u30ff\u31f0-\u31ffー]+/g

/** Baca satu deret kanji; null bila ada bagian yang belum punya bacaan. */
export function bacaDeret(deret: string, kamus: Kamus): string | null {
  let sisa = deret
  let hasil = ''
  while (sisa.length > 0) {
    let ketemu = ''
    for (let n = sisa.length; n >= 1; n--) {
      const kandidat = sisa.slice(0, n)
      if (kamus.has(kandidat)) {
        ketemu = kandidat
        break
      }
    }
    if (!ketemu) return null
    hasil += kamus.get(ketemu) ?? ''
    sisa = sisa.slice(ketemu.length)
  }
  return hasil
}

/** Seluruh kalimat ditulis ulang dalam hiragana (deret tak dikenal dibiarkan). */
export function keHiragana(teks: string, kamus: Kamus): string {
  return teks.replace(DERET_KANJI, (d) => bacaDeret(d, kamus) ?? d)
}

/** Deret kanji yang belum punya bacaan (dipakai validator). */
export function kanjiTanpaBacaan(teks: string, kamus: Kamus): string[] {
  const hasil: string[] = []
  for (const d of teks.match(DERET_KANJI) ?? []) {
    if (!bacaDeret(d, kamus)) hasil.push(d)
  }
  return [...new Set(hasil)]
}

/** Daftar kata katakana dalam kalimat (tanpa duplikat). */
export function katakanaDalam(teks: string): string[] {
  return [...new Set(teks.match(DERET_KATAKANA) ?? [])]
}

export interface BagianBaca {
  teks: string
  /** Cara baca (kana) — hanya ada untuk bagian ber-kanji. */
  baca?: string
}

export interface KataBaca {
  kata: string
  baca: string
  arti?: string
}

/**
 * Urai kata ber-kanji & kata katakana dalam kalimat untuk panel keterangan.
 * Urutan mengikuti kemunculan; duplikat dihilangkan.
 */
export function uraiKata(
  teks: string,
  kamus: Kamus,
  arti?: ReadonlyMap<string, string>,
): KataBaca[] {
  const hasil: KataBaca[] = []
  const sudah = new Set<string>()
  const tambah = (kata: string, baca: string) => {
    if (sudah.has(kata)) return
    sudah.add(kata)
    const a = arti?.get(kata)
    hasil.push({ kata, baca, ...(a ? { arti: a } : {}) })
  }
  for (const run of teks.match(DERET_KANJI) ?? []) {
    let sisa = run
    while (sisa.length > 0) {
      let ketemu = ''
      for (let n = sisa.length; n >= 1; n--) {
        const k = sisa.slice(0, n)
        if (kamus.has(k)) {
          ketemu = k
          break
        }
      }
      if (!ketemu) break
      tambah(ketemu, kamus.get(ketemu) ?? '')
      sisa = sisa.slice(ketemu.length)
    }
  }
  for (const kt of katakanaDalam(teks)) tambah(kt, kt)
  return hasil
}

/**
 * Pecah kalimat jadi bagian-bagian untuk render furigana (`<ruby>`).
 * Bagian ber-kanji mendapat `baca`; bagian lain apa adanya.
 */
export function bagianBaca(teks: string, kamus: Kamus): BagianBaca[] {
  const hasil: BagianBaca[] = []
  let posisi = 0
  DERET_KANJI.lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = DERET_KANJI.exec(teks)) !== null) {
    if (m.index > posisi) hasil.push({ teks: teks.slice(posisi, m.index) })
    const baca = bacaDeret(m[0], kamus)
    hasil.push(baca ? { teks: m[0], baca } : { teks: m[0] })
    posisi = m.index + m[0].length
  }
  if (posisi < teks.length) hasil.push({ teks: teks.slice(posisi) })
  return hasil
}
