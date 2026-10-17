/**
 * API data publik — RINGKAS & code-split.
 *
 * ⚠️ JANGAN pernah menaruh `import.meta.glob(..., { eager: true })` di sini.
 * Saat data 50 bab di-`eager`, semua modul bab jadi "terjangkau statis" →
 * Rollup menggabungnya jadi SATU chunk besar, sehingga membuka satu bab pun
 * mengunduh seluruh data 50 bab.
 *
 * - Ringkasan untuk daftar/indeks → `src/data/meta.ts` (kecil, eager).
 * - Isi bab → `loadBab()` / `loadSemuaBab()` (lazy, satu chunk per bab).
 * - Untuk TES/Node yang butuh semua bab sinkron → `src/data/all.ts`.
 */
export { meta, getMeta, TOTAL_BAB, JUMLAH_PARTIKEL, JUMLAH_SOAL_PARTIKEL } from './meta'
export type { BabMeta } from './meta'
export { loadBab, loadSemuaBab, nomorBabTersedia } from './load'
