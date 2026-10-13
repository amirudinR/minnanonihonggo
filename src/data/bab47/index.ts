import type { Bab } from '@/types/bab'
import { kosakata } from './kosakata'
import { bunpou, catatanTataBahasa } from './bunpou'
import { reibun } from './reibun'
import { kaiwa } from './kaiwa'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { mondai } from './mondai'
import { susun } from './susun'

const bab47: Bab = {
  no: 47,
  topik:
    'Menyampaikan informasi atau kesimpulan yang belum pasti berdasarkan sumber lain (「～そうです」, 「～ようです」, 「声／音／におい／味が します」, 伝聞「そうです」 dan perbedaan 「そうです」 vs 「ようです」)',
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

export default bab47
