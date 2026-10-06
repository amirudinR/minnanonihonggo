import type { Bab } from '@/types/bab'
import { kosakata } from './kosakata'
import { bunpou, catatanTataBahasa } from './bunpou'
import { reibun } from './reibun'
import { kaiwa } from './kaiwa'
import { renshuuA, renshuuB, renshuuC } from './renshuu'
import { mondai } from './mondai'

// MNN2 第38課 — Honsatsu cetak 102-109 (idx 120-127), PDF Indonesia cetak 80-85 (idx 101-106).
const bab38: Bab = {
  no: 38,
  topik: '〜のは／〜のが, 〜のを 忘れました, dan Penegasan dengan の（Keterangan, Lokasi, dan Posisi）',
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
}

export default bab38