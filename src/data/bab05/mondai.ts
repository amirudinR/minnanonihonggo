import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 — Dengarkan audio, lalu isi 1) sampai 5).', instruksi: '例を聞いて、同じように1)～5)を書きなさい。', audio: '/audio/bab05_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 — Pilih gambar yang benar (場面 1, dan 日付).', audio: '/audio/bab05_mondai2.mp3', kunciTersedia: false },
  { no: 3, jenis: 'mendengarkan', soal: 'Mondai 3 — Isi ( ) sesuai audio (3 soal).', audio: '/audio/bab05_mondai3.mp3', kunciTersedia: false },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例: これは（だれ）の ノートですか。……カリナさんの ノートです。\n1)（ ）日本へ 来ましたか。……8月17日に 来ました。\n2)（ ）と 日本へ 来ましたか。……家族と 来ました。\n3) あした（ ）へ 行きますか。……どこも 行きません。\n4) すみません。京都まで（ ）ですか。……390円です。\n5)（ ）で 京都へ 行きますか。……電車で 行きます。\n6)（ ）に うちへ 帰りますか。……7時に 帰ります。\n7) 誕生日は（ ）（ ）ですか。……9月1日です。',
    jawaban: '1) いつ 2) だれ 3) どこ 4) いくら 5) 何 6) 何時 7) 何月／何日',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例: これ（は） 本です。\n1) わたしは ミラーです。 ことし（ ）4月（ ）アメリカ（ ）来ました。\n2) 毎日 電車（ ）会社（ ）行きます。\n3) きのう 9時半（ ）うち（ ）帰りました。\n4) けさ わたしは 松本さん（ ）ここ（ ）来ました。\n5) おととい どこ（ ）行きませんでした。\n6) あさって 一人（ ）デパート（ ）行きます。',
    jawaban: '1) ×／に／へ 2) で／へ 3) に／へ 4) と／へ 5) へも 6) で／へ',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例: サントスさんは おととい 新幹線で 東京へ 行きました。\n1) サントスさんは きのう ――。\n2) サントスさんは きょう ――。\n3) サントスさんは あしたの 午後 ――。\n4) サントスさんは あさって ――。\n5) サントスさんは 日曜日に ――。',
    instruksi: 'Lihat catatan tangan サントスさん（手帳）, lalu isi kalimat.',
    kunciTersedia: false,
  },
]
