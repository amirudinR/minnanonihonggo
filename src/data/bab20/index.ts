import type { Bab } from '@/types/bab'
import { bunpou, catatanTataBahasa } from './bunpou'
import { kaiwa } from './kaiwa'
import { kosakata } from './kosakata'
import { mondai } from './mondai'
import { susun } from './susun'
import { reibun } from './reibun'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { bunpouSoal } from './bunpouSoal'

export const bab20: Bab = {
  no: 20,
  topik: 'Bagaimana Kalau Pergi Bersama-sama?',
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

export default bab20
