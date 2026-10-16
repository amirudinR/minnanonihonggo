/**
 * Satu pintu modul kamus. Konsumen cukup: `import { KAMUS, KATA_DIKENAL } from '@/data/kamus'`.
 * (Validator Node memakai `bangunKamus`/`bangunKataDikenal` + enumerasi folder sendiri.)
 */
import { babs } from '../index'
import { bangunKamus, bangunKataDikenal, bangunArti } from './bangun'

export { bangunKamus, bangunKataDikenal, bangunArti } from './bangun'
export { OVERRIDE_BACA } from './override'

/** Kamus kanji → cara baca (kosakata 50 bab + override). */
export const KAMUS: ReadonlyMap<string, string> = bangunKamus(babs)

/** Kumpulan kata yang dianggap dikenal untuk segmentasi mode ahli. */
export const KATA_DIKENAL: ReadonlySet<string> = bangunKataDikenal(babs)

/** Peta kata → arti untuk panel keterangan. */
export const ARTI_KATA: ReadonlyMap<string, string> = bangunArti(babs)
