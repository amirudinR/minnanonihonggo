import type { MondaiItem } from '@/types/bab'

// Bab 46 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = soal audio CD (問題 1-2 pada Honsatsu idx 194 / cetak 176).
// Mondai 3-6 = 問題 3-6 (tertulis, tanpa audio; 問題 6 = 読解「電子図書館」).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab46_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab46_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Isilah dengan bentuk Kata Kerja yang tepat dari kurung.\n例：もう 昼ごはんを 食べましたか。\n……いいえ、今から（食べる）ところです。\n1) ワットさんは もう 出かけましたか。\n……はい、たった今（　　）ところです。\n2) コンサートは もう 始まりましたか。\n……これから（　　）ところですから、急いで ください。\n3) 火事の 原因は 調べましたか。\n……今（　　）ところです。\n4) 会議の 資料は もう コピーしましたか。\n……今 田中さんが（　　）ところなので、もう 少し 待って ください。',
    jawaban:
      '1) 出かけた\n2) 始まる\n3) 調べて いる\n4) コピーして いる',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Isilah dengan bentuk ～ばかりです.\n例：この パン、おいしそうですね。\n……ええ、さっき（焼いた）ばかりなんですよ。どうぞ 食べて ください。\n1) いつ 日本へ 来ましたか。\n……2週間まえに（　　）ばかりです。\n2) いい 車ですね。新しいんですか。\n……ええ、先週（　　）ばかりなんです。\n3) お子さんは おいくつですか。\n……1か月です。先月（　　）ばかりです。\n4) コーヒーは いかがですか。\n……いいえ、けっこうです。さっき（　　）ばかりですから。',
    jawaban:
      '1) 来た\n2) 買った\n3) 生まれた\n4) 飲んだ',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Isilah dengan kata yang tepat dari kotak.\n（必要です／おいしいです／医者です／わかります／着きます）\n例：タワポンさんは 2時に うちを 出ると 言って いましたから、3時ごろ ここに（着く）はずです。\n1) 田中さんに きのう うちの 地図を かいて 渡しましたから、道は（　　）はずです。\n2) 部長の 息子さんは（　　）はずです。\n3) あの レストランは 予約が（　　）はずです。\n4) この 料理は ミラーさんが 作りましたから、（　　）はずです。',
    jawaban:
      '1) わかる\n2) 医者\n3) 必要\n4) おいしい',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'mencocokkan',
    soal:
      '問題 6 - Bacalah teks 「電子図書館」 berikut, lalu beri tanda (○) atau (×).\n\n図書館は 知識の 宝庫です。いろいろな 情報が 集められて います。図書館へ 行けば、いつでも 必要な 本が 手に 入る はずです。しかし、図書館に 欲しい 本が ない ときや、調べに 行く 時間が ない ときが あります。そんな とき、電子図書館が 役に 立ちます。\n電子図書館は パソコンを 使って 図書館を 利用する システムです。例えば、キーワードや 本の 名前の 一部分を 入力すれば、欲しい 本が すぐ 調べられます。辞書 1冊が 2秒で 出せるし、図や 写真も 簡単に 見られます。出た ばかりの 新しい 本も すぐ 見られます。電子図書館なら、いつでも どこでも 利用できます。\n最近 人は 本を 読まなく なったと 言われて いますが、パソコンを 使って 図書館を 利用する 人が 増えるかも しれません。\n\n1) (　　) 図書館へ 行けば、いつでも 読みたい 本が 手に 入ります。\n2) (　　) 電子図書館は パソコンで 本を 探して、見る ことが できる システムです。\n3) (　　) 電子図書館で 本を 探す とき、その 本の 名前が 全部 わからなければ、見つけられません。\n4) (　　) 図書館が 休みの 日は 電子図書館が 使えません。',
    jawaban: '1) ○ 2) ○ 3) × 4) ×',
    kunciTersedia: true,
    konteks: [
      {
        judul: '電子図書館',
        teks: '図書館は知識の宝庫です。いろいろな情報が集められています。図書館へ行けば、いつでも必要な本が手に入るはずです。しかし、図書館に欲しい本がないときや、調べに行く時間がないときがあります。そんなとき、電子図書館が役に立ちます。\n電子図書館はパソコンを使って図書館を利用するシステムです。例えば、キーワードや本の名前の一部分を入力すれば、欲しい本がすぐ調べられます。辞書1冊が2秒で出せるし、図や写真も簡単に見られます。出たばかりの新しい本もすぐ見られます。電子図書館なら、いつでもどこでも利用できます。\n最近人は本を読まなくなったと言われていますが、パソコンを使って図書館を利用する人が増えるかもしれません。',
      },
    ],
  },
]
