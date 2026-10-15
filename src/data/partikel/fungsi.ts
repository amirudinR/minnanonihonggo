/**
 * Fungsi turunan untuk halaman /partikel:
 *  - `babTerkait()`  → daftar nomor bab unik (untuk tombol pemilih bab).
 *  - `fungsiUntukBab(p, bab)` → keterangan partikel pada bab tertentu.
 *
 * Modul ini mengimpor SATU array gabungan `partikel` dari `./daftar` agar
 * tidak ada ketergantungan melingkar dengan `index.ts`.
 */

import { partikel } from './daftar'
import type { ContohPartikel, Partikel } from './tipe'

/** Semua nomor bab unik dari daftar partikel (terurut). */
export function babTerkait(): number[] {
  const set = new Set<number>()
  for (const p of partikel) for (const b of p.bab) set.add(b)
  return [...set].sort((a, b) => a - b)
}

/**
 * Fungsi satu partikel pada bab tertentu.
 * - `'semua'` → pakai fungsi/keterangan global partikel.
 * - nomor bab → pakai entri `perBab` bila ada; jika tidak, jatuh ke global
 *   (TIDAK mengarang) sambil menandai bahwa detail ada di materi bab itu.
 */
export function fungsiUntukBab(
  p: Partikel,
  bab: number | 'semua',
): { fungsi: string; keterangan: string; contoh: ContohPartikel[]; spesifik: boolean } {
  if (bab === 'semua') {
    return {
      fungsi: p.fungsi,
      keterangan: p.penjelasan,
      contoh: p.contoh,
      spesifik: false,
    }
  }
  const e = p.perBab?.find((x) => x.bab === bab)
  if (e) {
    return {
      fungsi: e.fungsi,
      keterangan: e.keterangan,
      contoh: e.contoh ?? p.contoh,
      spesifik: true,
    }
  }
  return {
    fungsi: p.fungsi,
    keterangan: `${p.penjelasan} (Detail di materi Bab ${bab}.)`,
    contoh: p.contoh,
    spesifik: false,
  }
}
