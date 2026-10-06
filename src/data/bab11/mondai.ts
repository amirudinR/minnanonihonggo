import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 - Dengarkan audio dan jawab pertanyaannya.', instruksi: 'Jawablah pertanyaan berdasarkan audio.', audio: '/audio/bab11_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 - Dengarkan percakapan dan pilih gambar/jawaban yang benar.', instruksi: 'Pilih jawaban yang benar (◯ atau ✕) berdasarkan audio.', audio: '/audio/bab11_mondai2.mp3', kunciTersedia: false },
  { no: 3, jenis: 'mendengarkan', soal: 'Mondai 3 - Dengarkan dan isilah bagian yang kosong.', instruksi: 'Lengkapi kalimat berdasarkan audio.', audio: '/audio/bab11_mondai3.mp3', kunciTersedia: false },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例： 時計が （２つ） あります。\n1) 外国人の 先生が （ ） います。\n2) 自転車が （ ） あります。\n3) はがきを （ ） 買いました。',
    jawaban: '1) ３人 2) ２台 3) ５枚',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例： りんごを ３（つ） 食べました。\n1) 切手を 10（ ） 買いました。\n2) 毎日 １（ ） 日本語を 勉強します。\n3) 会社に 外国人が ５（ ） います。',
    jawaban: '1) 枚 2) 時間 3) 人',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例： １週間（に） １回 映画を 見ます。\n1) バス（ ） １時間 かかります。\n2) 休みは 日曜日（ ）です。\n3) ３かげつ（ ） 日本語を 勉強しました。',
    jawaban: '1) で 2) だけ 3) ぐらい',
    kunciTersedia: true,
  }
]
