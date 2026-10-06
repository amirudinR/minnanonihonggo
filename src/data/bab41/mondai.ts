import type { MondaiItem } from '@/types/bab'

// Bab 41 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = soal audio CD (問題 1-2 pada Honsatsu idx 152 / cetak 134).
// Mondai 3-7 = 問題 3-7 (tertulis, tanpa audio; 問題 7 = 読解「浦島太郎」).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________\n5) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab41_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab41_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'mencocokkan',
    soal:
      '問題 3 - Pilih kata yang tepat dari pilihan di dalam kurung.\n例：母の 誕生日に わたしは 母に 花を（くれました・あげました）。\n1) わたしは 松本さんに お祝いを（いただきました・くださいました）。\n2) 花に 水を（やる・くれる）のを 忘れました。\n3) 自転車が 壊れたので、兄に 修理して（くれました・もらいました）。\n4) 祖父は わたしたちに 昔の 話を して（あげました・くれました）。\n5) 課長は わたしを 迎えに 来て（くださいました・いただきました）。',
    jawaban: '1) いただきました 2) やる 3) もらいました 4) くれました 5) くださいました',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Isilah dengan kata yang tepat.\n例：冷蔵庫の 故障は 直りましたか。\n……ええ。電気屋が すぐ 見に 来て くれました。\n1) その 茶、図書館で 借りたんですか。\n……いいえ。課長が ＿＿＿＿＿＿ んです。\n2) ゆうべは タクシーで 帰ったんですか。\n……いいえ、部長に 車で ＿＿＿＿＿＿。\n3) おいしい ケーキですね。\n……ありがとう ございます。祖母が 作り方を ＿＿＿＿＿＿ んです。\n4) もう 箱根へは 行きましたか。\n……ええ。先週 先生が ＿＿＿＿＿＿。',
    jawaban:
      '1) 貸して くれた\n2) 送って いただきました（送ってもらいました）\n3) 教えて くれた\n4) 連れて 行って くださいました',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Buat permintaan halus dengan ～て くださいませんか.\n（見ます／説明します／取り替えます／かきます／手伝います）\n例：サイズが 合わないんですが、取り替えて くださいませんか。\n1) レポートを 書きたいんですが、ちょっと ＿＿＿＿＿＿。\n2) 荷物を 運ばなければ ならないんですが、＿＿＿＿＿＿。\n3) 日本語が よく わからないんですが、英語で ＿＿＿＿＿＿。\n4) 大使館へ 行きたいんですが、地図を ＿＿＿＿＿＿。',
    jawaban:
      '1) 見て くださいませんか\n2) 手伝って くださいませんか\n3) 説明して くださいませんか\n4) かいて くださいませんか',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'mencocokkan',
    soal:
      '問題 6 - Isilah dengan partikel に yang tepat.\n例：わたしは 友達（に）本を 貸して もらいました。\n1) 珍しい 指輪ですね。……ええ。誕生日に 姉（　）くれたんです。\n2) 息子さんは 本が 好きですね。\n……ええ。小さい とき、よく 息子（　）本を 読んで やりました。\n3) どうして 遅かったんですか。\n……知らない おばさん（　）駅まで 連れて 行って あげたんです。\n4) 娘さんは いつも 一人で 宿題を しますか。\n……いいえ。時々 わたし（　）娘の 宿題（　）見て やります。',
    jawaban: '1) が 2) に 3) を 4) が／を',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Bacalah teks 「浦島太郎〈日本の 昔話〉」 berikut, lalu jawab pertanyaan 1)-4).\n\n昔、ある 所に 浦島太郎と いう 若い 男が いました。ある 日 太郎は 子どもたちに いじめられて いる かめを 助けて やりました。かめは 「助けて いただいて、ありがとう ございます」と 言って、太郎を 海の 中の お城へ 連れて 行って くれました。\nそこには とても きれいで、優しい お姫様が いました。太郎は 毎日 楽しく 暮らして いましたが、うちへ 帰りたく なりました。帰る とき、お姫様は お土産に 箱を くれました。でも、絶対に 箱を 開けては いけないと 言いました。\n太郎は 陸へ 帰りましたが、どこにも うちは ありませんでした。道で 会った 人が 300年ぐらいまえに 浦島太郎 の うちが あったと 教えて くれました。太郎は 悲しく なって、お土産の 箱を 開けました。すると、中から 白い 煙が 出て、太郎は 髪が 真っ白な おじいさんに なりました。\n\n1) 太郎は どうして かめを 助けて やりましたか。……\n2) 太郎は かめと いっしょに どこへ 行きましたか。……\n3) 太郎は どのくらい 海の 中に いましたか。……\n4) お土産の 箱の 中身は 白い 煙でした。白い 煙は 何だと 思いますか。……',
    jawaban:
      '1) 子どもたちに いじめられて いる かめを 助けて やったからです。\n2) 海の 中の お城へ 行きました。\n3) 300年ぐらい いました。\n4) 年月（時間）だと思います。',
    kunciTersedia: true,
    konteks: [
      {
        judul: '浦島太郎〈日本の 昔話〉',
        teks: '昔、ある所に浦島太郎という若い男がいました。ある日太郎は子どもたちにいじめられているかめを助けてやりました。かめは「助けていただいて、ありがとうございます」と言って、太郎を海の中のお城へ連れて行ってくれました。\nそこにはとてもきれいで、優しいお姫様がいました。太郎は毎日楽しく暮らしていましたが、うちへ帰りたくなりました。帰るとき、お姫様はお土産に箱をくれました。でも、絶対に箱を開けてはいけないと言いました。\n太郎は陸へ帰りましたが、どこにもうちはありませんでした。道で会った人が300年ぐらいまえに浦島太郎のうちがあったと教えてくれました。太郎は悲しくなって、お土産の箱を開けました。すると、中から白い煙が出て、太郎は髪が真っ白なおじいさんになりました。',
      },
    ],
  },
]
