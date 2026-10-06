import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 - Dengarkan audio dan jawab pertanyaannya.', instruksi: 'Jawablah pertanyaan berdasarkan audio.', audio: '/audio/bab13_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 - Dengarkan percakapan dan pilih gambar/jawaban yang benar.', instruksi: 'Pilih jawaban yang benar (◯ atau ✕) berdasarkan audio.', audio: '/audio/bab13_mondai2.mp3', kunciTersedia: false },
  {
    no: 3, jenis: 'jawaban_pendek',
    soal: '例： 今 何（が） いちばん 欲しいですか。\n1) わたしは パソコン（ ） 欲しいです。\n2) 神戸へ パン（ ） 買い（ ） 行きます。\n3) わたしは 日本へ 美術（ ） 勉強（ ） 来ました。',
    jawaban: '1) が 2) を, に 3) の, に',
    kunciTersedia: true,
  },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例： 何か 飲み（ますか） → 何か 飲み（たいです）。\n1) カメラを 買い（ ） → カメラを 買い（ ）。\n2) どこへ 行き（ ） → どこへ 行き（ ）。\n3) だれに 会い（ ） → だれに 会い（ ）。',
    jawaban: '1) ますか, たいです 2) ますか, たいですか 3) ますか, たいですか',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例： 週末は どこかへ （行きましたか）。\n……はい、京都へ （行きました）。\n1) のどが 渇きましたから、何か （ ）。\n……ええ、そうですね。\n2) おなかが すきましたから、何か （ ）。\n……じゃ、食堂へ 行きましょう。',
    jawaban: '1) 飲みたいですね 2) 食べたいですね',
    kunciTersedia: true,
  }
]
