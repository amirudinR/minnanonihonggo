import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 - Dengarkan audio dan jawab pertanyaannya.', instruksi: 'Jawablah pertanyaan berdasarkan audio.', audio: '/audio/bab07_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 - Dengarkan percakapan dan pilih gambar/jawaban yang benar.', instruksi: 'Pilih jawaban yang benar (◯ atau ✕) berdasarkan audio.', audio: '/audio/bab07_mondai2.mp3', kunciTersedia: false },
  { no: 3, jenis: 'mendengarkan', soal: 'Mondai 3 - Dengarkan dan isilah bagian yang kosong.', instruksi: 'Lengkapi kalimat berdasarkan audio.', audio: '/audio/bab07_mondai3.mp3', kunciTersedia: false },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例：友達に 本を 貸します。\n1) 学生に\n2) 先生に\n3) 家族に\n4) 父に\n5) 彼女に',
    jawaban: '1) 英語を 教えます。 2) じしょを 借ります。 3) プレゼントを 送ります。 4) 花を あげます。 5) 電話を かけます。',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例：これは イタリア（ の ） 靴です。\n1) わたしは はし（ ） ごはんを 食べます。\n2) ファクス（ ） レポートを 送りました。\n3) 「さようなら」は 英語（ ） 何ですか。\n4) わたしは きのう 彼女（ ） 手紙（ ） 書きました。\n5) わたしは 友達（ ） お土産（ ） もらいました。',
    jawaban: '1) で 2) で 3) で 4) に, を 5) に, を',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例：もう 昼ごはんを 食べましたか。……いいえ、まだです。\n　これから 食べます。いっしょに 食べませんか。\n1) もう 大阪城へ 行きましたか。……いいえ、（ ）。\n　日曜日 ミラーさんと（ ）。いっしょに（ ）。\n2) もう クリスマスカードを 書きましたか。……はい、（ ）。\n3) もう 荷物を 送りましたか。……いいえ、（ ）。\n　きょうの 午後（ ）。\n4) テレサちゃんは もう 寝ましたか。……はい、（ ）。',
    jawaban: '1) まだです, 行きます, 行きませんか 2) 書きました 3) まだです, 送ります 4) 寝ました',
    kunciTersedia: true,
  },
  {
    no: 7, jenis: 'jawaban_pendek',
    soal: '土曜日と 日曜日日\nけさ 図書館へ 行きました。図書館で 太郎君に 会いました。太郎君と いっしょに ビデオを 見ました。わたしは 旅行の 本を 借りました。\nあしたは 日曜日です。朝 旅行の 本を 読みます。午後 デパートへ 行きます。母の 誕生日の プレゼントを 買います。\n去年は 母に 花を あげました。ことしは 日本の 花の 本を あげます。\n1)（ ）きょうは 土曜日です。\n2)（ ）ミラーさんは けさ 太郎君と 図書館へ 行きました。\n3)（ ）ミラーさんは 図書館で 旅行の 本を 読みました。\n4)（ ）ミラーさんは ことしも お母さんに 花を あげます。',
    jawaban: '1) ○ 2) × 3) × 4) ×',
    kunciTersedia: true,
  }
]
