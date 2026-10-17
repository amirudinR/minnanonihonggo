import type { Bab } from '@/types/bab'

/**
 * Semua bab dimuat SINKRON (eager glob).
 *
 * ⚠️ HANYA untuk TES / tooling yang memang perlu seluruh bab sinkron.
 * JANGAN diimpor dari kode aplikasi (`src/pages`, `src/features`, ...) —
 * itu akan membuat seluruh data 50 bab masuk ke bundel (lihat catatan di
 * `src/data/index.ts`). Aplikasi memakai `loadBab()` / `loadSemuaBab()`.
 * PENGECUALIAN: `src/data/kamus/index.ts` (memang butuh kosakata 50 bab) —
 * dan hanya fitur susun yang mengimpornya.
 */
const modules = import.meta.glob<{ default: Bab }>('./bab*/index.ts', {
  eager: true,
})

export const babs: Bab[] = Object.entries(modules)
  .map(([, m]) => m.default)
  .sort((a, b) => a.no - b.no)

export function getBab(no: number): Bab | undefined {
  return babs.find((b) => b.no === no)
}
