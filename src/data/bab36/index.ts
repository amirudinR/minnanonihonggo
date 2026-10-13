import type { Bab } from '@/types/bab'
import { kosakata } from './kosakata'
import { bunpou, catatanTataBahasa } from './bunpou'
import { reibun } from './reibun'
import { kaiwa } from './kaiwa'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { mondai } from './mondai'
import { susun } from './susun'

const bab36: Bab = {
  no: 36,
  topik: 'Berolah Raga Setiap Hari（ようにします／ように なります）',
  kosakata,
  bunpou,
  catatanTataBahasa,
  reibun,
  kaiwa,
  renshuuA,
  renshuuB,
  renshuuC,
  mondai,
  bunsho: [],
  susun,
}

export default bab36