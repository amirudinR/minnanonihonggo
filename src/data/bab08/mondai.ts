import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 - Dengarkan audio dan jawab pertanyaannya.', instruksi: 'Jawablah pertanyaan berdasarkan audio.', audio: '/audio/bab08_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 - Dengarkan percakapan dan pilih gambar/jawaban yang benar.', instruksi: 'Pilih jawaban yang benar (◯ atau ✕) berdasarkan audio.', audio: '/audio/bab08_mondai2.mp3', kunciTersedia: false },
  { no: 3, jenis: 'mendengarkan', soal: 'Mondai 3 - Dengarkan dan isilah bagian yang kosong.', instruksi: 'Lengkapi kalimat berdasarkan audio.', audio: '/audio/bab08_mondai3.mp3', kunciTersedia: false },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例： 日本の 食べ物は おいしいです（が）、高いです。\n1) 東京は にぎやかです（ ）、おもしろいです。\n2) わたしの 部屋は 狭いです（ ）、きれいです。\n3) ワットさんは いい 先生です（ ）、おもしろい 先生です。',
    jawaban: '1) そして 2) が 3) そして',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例： この 辞書は とても （いい）です。\n1) さくら大学は （ ） 有名な 大学じゃ ありません。\n2) この パソコンは 便利です。そして、（ ）です。\n3) きょうは （ ） 寒くないです。',
    jawaban: '1) あまり 2) とても いい 3) あまり',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例： （どんな） 映画を 見ましたか。\n……おもしろい 映画を 見ました。\n1) 日本の 生活は （ ）ですか。\n……楽しいです。\n2) ワットさんは （ ） 先生ですか。\n……親切な 先生です。\n3) 富士山は （ ）ですか。\n……高いです。',
    jawaban: '1) どう 2) どんな 3) どう',
    kunciTersedia: true,
  }
]
