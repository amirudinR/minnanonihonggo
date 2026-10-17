import type { Bab } from '../../types/bab'
import { adaChoukai } from '../../core/audio/manifest'

export type BabSection = { id: string; short: string; label: string }

/**
 * Daftar bagian yang ADA di satu bab → dipakai untuk TOC & Progress Per-Bagian.
 * Urutannya menentukan urutan TOC. `bagian` & `coretan` selalu ikut.
 */
export function sectionsOf(bab: Bab): BabSection[] {
  const arr: BabSection[] = []
  if (bab.kosakata.length > 0) arr.push({ id: 'kosakata', short: 'Kosakata', label: 'Kosakata' })
  if (bab.bunpou.length > 0) arr.push({ id: 'bunpou', short: 'Bunpou', label: 'Bunpou' })
  if (bab.catatanTataBahasa?.length) arr.push({ id: 'catatan', short: 'Catatan', label: 'Catatan Tata Bahasa' })
  if (bab.reibun.length > 0) arr.push({ id: 'reibun', short: 'Reibun', label: 'Reibun' })
  if (bab.kaiwa) arr.push({ id: 'kaiwa', short: 'Kaiwa', label: 'Kaiwa' })
  if (bab.konteks?.length) arr.push({ id: 'konteks', short: 'Konteks', label: 'Konteks' })
  if (bab.susun?.length) arr.push({ id: 'susun', short: 'Menyusun', label: 'Menyusun Kalimat' })
  if (bab.renshuuA.length > 0) arr.push({ id: 'renshuuA', short: 'Latih A', label: 'Latih A' })
  if (bab.renshuuB.length > 0) arr.push({ id: 'renshuuB', short: 'Latih B', label: 'Latih B' })
  if (bab.renshuuC.length > 0) arr.push({ id: 'renshuuC', short: 'Latih C', label: 'Latih C' })
  if (bab.mondai.length > 0) arr.push({ id: 'mondai', short: 'Mondai', label: 'Mondai' })
  if (adaChoukai(bab.no)) arr.push({ id: 'choukai', short: 'Choukai', label: 'Choukai (聴解)' })
  if (bab.bunsho.length > 0) arr.push({ id: 'bunsho', short: 'Bunsho', label: 'Bunsho' })
  if (bab.rangkuman) arr.push({ id: 'rangkuman', short: 'Rangkuman', label: 'Rangkuman' })
  arr.push({ id: 'bagian', short: 'Progress', label: 'Progress Per-Bagian' })
  arr.push({ id: 'coretan', short: 'Coretan', label: 'Coretan' })
  return arr
}
