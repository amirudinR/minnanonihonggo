import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 — Dengarkan audio, lalu isi 1) sampai 5).', instruksi: '例を聞いて、同じように1)～5)を書きなさい。', audio: '/audio/bab06_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 — Isi ( ) sesuai audio (5 soal).', audio: '/audio/bab06_mondai2.mp3', kunciTersedia: false },
  {
    no: 3, jenis: 'jawaban_pendek',
    soal: '例: 電車（で）会社へ 行きます。\n1) 友達（ ）＿＿＿。\n2) 12時（ ）＿＿＿。\n3) デパート（ ）＿＿＿。\n4) ロビー（ ）＿＿＿。\n5) 8時（ ）＿＿＿ 9時（ ）＿＿＿。',
    instruksi: 'Lihat gambar, dengarkan CD lalu lengkapi kalimat (audio ada di bab06_mondai2; kunci gambar).',
    kunciTersedia: false,
  },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例: 毎晩（何時に、いつ、どこで）寝ますか。……11時に 寝ます。\n1) 日曜日（どこで、何を、何で）しますか。……テニスを します。\n2)（どこへ、どこで、いつ）その カメラを 買いましたか。……大阪デパートで 買いました。\n3) けさ（何を、何で、どこで）食べましたか。……何も 食べませんでした。\n4) おととい（どこで、だれに、何時に）会いましたか。……グプタさんに 会いました。',
    jawaban: '1) 何を 2) どこで 3) 何を 4) だれに',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例: おととい 東京へ（行きました、行きます）。\n1) きのうの 晩 手紙を（書きます、書きました）。\n2) 毎朝 新聞を（読みますか、読みましたか）。……いいえ、読みません。\n3) いっしょに 美術館へ（行きませんでしたか、行きませんか）。……ええ、（行きましょう、行きません）。\n4) あした 大阪城公園で 花見を（しました、します）。',
    jawaban: '1) 書きました 2) 読みますか 3) 行きませんか／行きましょう 4) します',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例1:（○）ミラーさんは 毎朝 コーヒーを 飲みます。\n例2:（×）ミラーさんは 毎朝 7時半に 起きます。\n1)（ ）ミラーさんは 朝ごはんを 食べません。\n2)（ ）ミラーさんは 月曜日から 金曜日まで 働きます。\n3)（ ）ミラーさんは 毎朝 英語の 新聞を 読みます。\n4)（ ）ミラーさんは 土曜日 どこも 行きません。',
    instruksi: 'Baca teks ミラーさんの 毎日, lalu tandai ○/× untuk tiap pernyataan.',
    jawaban: '1) × 2) ○ 3) × 4) ×',
    kunciTersedia: true,
  },
]
