import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 — Dengarkan audio, lalu isi 1) sampai 5).', instruksi: '例を聞いて、同じように1)～5)を書きなさい。', audio: '/audio/bab04_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 — Pilih ①/②/③ yang sesuai audio (時計).', audio: '/audio/bab04_mondai2.mp3', kunciTersedia: false },
  { no: 3, jenis: 'mendengarkan', soal: 'Mondai 3 — Isi ( ) sesuai audio (3 soal).', audio: '/audio/bab04_mondai3.mp3', kunciTersedia: false },
  { no: 4, jenis: 'mendengarkan', soal: 'Mondai 4 — Pilih yang benar dari kedua pilihan (8 soal).', audio: '/audio/bab04_mondai4.mp3', kunciTersedia: false },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例1: これは スイス（ の ）時計です。\n例2: 電話は どこ（ × ）ですか。\n1) 毎朝（ ）6時（ ）起きます。\n2) 美術館は 何時（ ）何時（ ）ですか。\n3) 今 何時（ ）ですか。\n4) 木曜日（ ）午後 病院は 休みです。\n5) 大学は 何時（ ）終わりますか。\n6) 銀行の 休みは 土曜日（ ）日曜日です。',
    jawaban: '1) ×／に 2) から／まで 3) × 4) の 5) に 6) と',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例: あの 人は（だれ）ですか。……ミラーさんです。\n1) 今（ ）ですか。……5時です。\n2) 佐藤さんの うちの 電話番号は（ ）ですか。……333の 4367です。\n3) きょうは（ ）ですか。……火曜日です。\n4) テレサちゃんは（ ）ですか。……9歳です。\n5) きのう（ ）まで 働きましたか。……9時まで 働きました。',
    jawaban: '1) 何時 2) 何番 3) 何曜日 4) 何歳 5) 何時',
    kunciTersedia: true,
  },
  {
    no: 7, jenis: 'jawaban_pendek',
    soal: '例: 毎日 9時から 5時まで（働きます、働きました）。\n1) きのう 10時に（寝ます、寝ました）。\n2) 毎日 昼 12時から 1時まで（休みます、休みました）。\n3) おとといの 晩 9時から 11時まで（勉強します、勉強しました）。\n4) 毎朝 何時に（起きます、起きました）か。\n5) あさっては 日曜日です。（働きません、働きませんでした）。',
    jawaban: '1) 寝ました 2) 休みます 3) 勉強しました 4) 起きます 5) 働きません',
    kunciTersedia: true,
  },
  {
    no: 8, jenis: 'jawaban_pendek',
    soal: '例: 今晩 勉強しますか。……はい、（勉強します）。\n1) おととい 休みましたか。……はい、（ ）。\n2) 日曜日 働きますか。……いいえ、（ ）。\n3) きのう 勉強しましたか。……いいえ、（ ）。\n4) 大学は 3時に 終わりますか。……はい、（ ）。',
    jawaban: '1) 休みました 2) 働きません 3) 勉強しませんでした 4) 終わります',
    kunciTersedia: true,
  },
]
