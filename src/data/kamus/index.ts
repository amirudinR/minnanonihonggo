/**
 * Satu pintu modul kamus. Konsumen cukup: `import { KAMUS, KATA_DIKENAL } from '@/data/kamus'`.
 *
 * Kamus dibaca dari `./terbangun` (di-generate `npm run gen:kamus`) — BUKAN
 * dihitung dari data bab saat runtime. Kalau dihitung runtime, modul ini akan
 * mengimpor seluruh data 50 bab dan membuat satu bab pun mengunduh semuanya.
 *
 * Helper `bangun*` tetap diekspor untuk Node/tooling (mis. `validate:susun`).
 */
import { ARTI, BACA, KENAL } from './terbangun'

export { bangunKamus, bangunKataDikenal, bangunArti } from './bangun'
export { OVERRIDE_BACA } from './override'

/** Kamus kanji → cara baca (kosakata 50 bab + override). */
export const KAMUS: ReadonlyMap<string, string> = new Map(Object.entries(BACA))

/** Kumpulan kata yang dianggap dikenal untuk segmentasi mode ahli. */
export const KATA_DIKENAL: ReadonlySet<string> = new Set(KENAL)

/** Peta kata → arti untuk panel keterangan. */
export const ARTI_KATA: ReadonlyMap<string, string> = new Map(Object.entries(ARTI))
