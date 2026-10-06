import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 - Dengarkan audio dan jawab pertanyaannya.', instruksi: 'Jawablah pertanyaan berdasarkan audio.', audio: '/audio/bab10_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 - Dengarkan percakapan dan pilih gambar/jawaban yang benar.', instruksi: 'Pilih jawaban yang benar (◯ atau ✕) berdasarkan audio.', audio: '/audio/bab10_mondai2.mp3', kunciTersedia: false },
  { no: 3, jenis: 'mendengarkan', soal: 'Mondai 3 - Dengarkan dan isilah bagian yang kosong.', instruksi: 'Lengkapi kalimat berdasarkan audio.', audio: '/audio/bab10_mondai3.mp3', kunciTersedia: false },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例： あそこに 佐藤さんが （います）。\n1) 部屋に だれも （ ）。\n2) 冷蔵庫の 中に 何も （ ）。\n3) あそこに 車が （ ）。',
    jawaban: '1) いません 2) ありません 3) あります',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例： 机の 上（に） 写真が あります。\n1) 郵便局は 銀行（ ） 隣に あります。\n2) カリナさん（ ） 部屋に います。\n3) わたしの うちの 近く（ ） スーパーが あります。',
    jawaban: '1) の 2) は 3) に',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例： 箱の中に 手紙（や） 写真などが あります。\n1) 机の 上に 本（ ） 辞書が あります。\n2) かばんの 中に ペン（ ） ノート（ ）が あります。\n3) 部屋に ミラーさん（ ） サントスさんが います。',
    jawaban: '1) と 2) や, など 3) と',
    kunciTersedia: true,
  }
]
