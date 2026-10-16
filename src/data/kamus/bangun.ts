/**
 * Pembangun kamus dari data kosakata bab (bebas Vite/alias agar aman di tsx).
 * Dipakai runtime (`index.ts`) maupun validator (`tools/validate_susun.ts`).
 */
import type { Bab } from '../../types/bab'
import { OVERRIDE_BACA } from './override'

const KANA_CHAR = /[\u3040-\u309f]/
const KANJI_MURNI = /^[\u3400-\u9fff\u3005]+$/
const KANA_MURNI = /^[\u3040-\u309f]+$/

const bersih = (s: string) => s.replace(/[（(].*$/, '').trim()

/** Buang varian dalam tanda kurung dan tanda 〜 (mis. `〜人` → `人`). */
const norm = (s: string) =>
  s
    .split(/[（(]/)[0]
    .replace(/[〜～]/g, '')
    .trim()

/**
 * Pisahkan okurigana agar bacaan hanya untuk bagian kanji.
 * `行きます` + `いきます` → [`行`, `い`]; `お手洗い` + `おてあらい` → [`手洗`, `てあら`].
 */
export function tandingiBacaan(
  kanji: string,
  kana: string,
): [string, string] | null {
  let i = 0
  while (
    i < kanji.length &&
    i < kana.length &&
    KANA_CHAR.test(kanji[i]) &&
    kanji[i] === kana[i]
  ) {
    i++
  }
  let j = 0
  while (
    j < kanji.length - i &&
    j < kana.length - i &&
    KANA_CHAR.test(kanji[kanji.length - 1 - j]) &&
    kanji[kanji.length - 1 - j] === kana[kana.length - 1 - j]
  ) {
    j++
  }
  const kk = kanji.slice(i, kanji.length - j)
  const rr = kana.slice(i, kana.length - j)
  if (!kk || !rr) return null
  if (!KANJI_MURNI.test(kk) || !KANA_MURNI.test(rr)) return null
  return [kk, rr]
}

/** Kamus kanji → cara baca: otomatis dari kosakata + override manual. */
export function bangunKamus(babs: readonly Bab[]): Map<string, string> {
  const kamus = new Map<string, string>()
  for (const bab of babs) {
    for (const k of bab.kosakata ?? []) {
      if (!k.kanji || !k.kana) continue
      const hasil = tandingiBacaan(
        norm(k.kanji),
        norm(k.kana),
      )
      if (!hasil) continue
      if (!kamus.has(hasil[0])) kamus.set(hasil[0], hasil[1])
    }
  }
  for (const [kanji, kana] of Object.entries(OVERRIDE_BACA)) kamus.set(kanji, kana)
  return kamus
}

/** Kata (kana/kanji) yang dianggap "dikenal" oleh segmenter mode ahli. */
export function bangunKataDikenal(babs: readonly Bab[]): Set<string> {
  const set = new Set<string>()
  for (const bab of babs) {
    for (const k of bab.kosakata ?? []) {
      if (k.kana) set.add(bersih(k.kana))
      if (k.kanji) set.add(bersih(k.kanji))
    }
  }
  return set
}

/** Peta kata → arti Indonesia (kunci kana & kanji apa adanya). */
export function bangunArti(babs: readonly Bab[]): Map<string, string> {
  const peta = new Map<string, string>()
  for (const bab of babs) {
    for (const k of bab.kosakata ?? []) {
      if (!k.arti) continue
      if (k.kana && !peta.has(bersih(k.kana))) peta.set(bersih(k.kana), k.arti)
      if (k.kanji && !peta.has(bersih(k.kanji))) peta.set(bersih(k.kanji), k.arti)
    }
  }
  return peta
}
