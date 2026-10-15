/**
 * Referensi partikel (助詞) — daftar statis untuk halaman /partikel.
 * Dipakai sebagai ringkasan belajar + sumber soal ujian.
 *
 * Struktur (dipecah agar modular — lihat AGENTS.md §3b):
 *  - `tipe.ts`        → interface (Partikel, FungsiBab, …) + KELOMPOK.
 *  - `daftar/*.ts`    → data partikel per kelompok.
 *  - `daftar/index.ts`→ gabungan 38 partikel (urutan tampil).
 *  - `fungsi.ts`      → babTerkait() & fungsiUntukBab().
 *
 * Modul ini HANYA re-export; import lama `from '../data/partikel'` tetap jalan.
 */

export type {
  ContohPartikel,
  FungsiBab,
  KelompokPartikel,
  Partikel,
} from './tipe'
export { KELOMPOK } from './tipe'
export { partikel } from './daftar'
export { babTerkait, fungsiUntukBab } from './fungsi'
