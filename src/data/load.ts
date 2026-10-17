import type { Bab } from '@/types/bab'

/**
 * Pemuat bab secara DINAMIS (code-split per bab).
 *
 * Kenapa: isi 50 bab = ±1,8 MiB (91% sumber). Kalau di-`eager`, seluruhnya ikut
 * bundel awal. Dengan `import.meta.glob` non-eager, Vite memecahnya jadi satu
 * chunk per bab yang baru diunduh saat dibuka.
 *
 * Ringkasan (untuk daftar/indeks) ada di `src/data/meta.ts` yang kecil.
 */
const modul = import.meta.glob<{ default: Bab }>('./bab*/index.ts')

/** Path modul bab → kunci glob (folder `bab01`..`bab50`). */
function kunci(no: number): string {
  return `./bab${String(no).padStart(2, '0')}/index.ts`
}

/** Muat satu bab. `undefined` bila bab itu tidak ada. */
export async function loadBab(no: number): Promise<Bab | undefined> {
  const muat = modul[kunci(no)]
  if (!muat) return undefined
  return (await muat()).default
}

/** Nomor semua bab yang tersedia di registry. */
export function nomorBabTersedia(): number[] {
  return Object.keys(modul)
    .map((k) => Number(k.match(/bab(\d+)/)?.[1] ?? 0))
    .filter((n) => n > 0)
    .sort((a, b) => a - b)
}

/**
 * Muat SEMUA bab (untuk halaman yang memang perlu seluruh data, mis. latihan
 * campuran). Tetap lewat dynamic import → tiap bab jadi chunk sendiri dan baru
 * diunduh saat halaman itu dibuka.
 */
export async function loadSemuaBab(): Promise<Bab[]> {
  const muat = Object.values(modul)
  const hasil = await Promise.all(muat.map((m) => m()))
  return hasil.map((m) => m.default).sort((a, b) => a.no - b.no)
}
