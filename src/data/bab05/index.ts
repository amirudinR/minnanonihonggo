import type { Bab } from '@/types/bab'
import { kosakata } from './kosakata'
import { bunpou, catatanTataBahasa } from './bunpou'
import { reibun } from './reibun'
import { kaiwa } from './kaiwa'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { mondai } from './mondai'
import { susun } from './susun'
import { bunpouSoal } from './bunpouSoal'

const bab05: Bab = {
  no: 5,
  topik: 'Apakah Kereta Rel Listrik Ini Menuju Koshien?',
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
  bunpouSoal,
}

export default bab05
