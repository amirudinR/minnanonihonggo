import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 - Dengarkan audio dan jawab pertanyaannya.', instruksi: 'Jawablah pertanyaan berdasarkan audio.', audio: '/audio/bab09_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 - Dengarkan percakapan dan pilih gambar/jawaban yang benar.', instruksi: 'Pilih jawaban yang benar (◯ atau ✕) berdasarkan audio.', audio: '/audio/bab09_mondai2.mp3', kunciTersedia: false },
  {
    no: 3, jenis: 'jawaban_pendek',
    soal: '例： スポーツ（が） 好きですか。\n1) どんな 料理（ ） 好きですか。\n2) カリナさんは 絵（ ） 上手です。\n3) わたしは 日本語（ ） 少し わかります。',
    jawaban: '1) が 2) が 3) が',
    kunciTersedia: true,
  },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例： 辞書が （あります）か。\n1) ワットさんは パソコンが （ ）。\n2) わたしは 中国語が ぜんぜん （ ）。\n3) あした 約束が （ ）。',
    jawaban: '1) あります 2) わかりません 3) あります',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例： （どんな） 映画が 好きですか。\n1) （ ） 早く 帰りますか。\n……用事が ありますから。\n2) 英語が （ ） わかりますか。\n……だいたい わかります。\n3) けさ 朝ごはんを 食べましたか。\n……いいえ、（ ） 食べませんでした。',
    jawaban: '1) どうして 2) どのくらい 3) ぜんぜん',
    kunciTersedia: true,
  }
]
