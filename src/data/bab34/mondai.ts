import type { MondaiItem } from '@/types/bab'

// 問題 (第34課, Honsatsu idx 92-93 / cetak 74-75) — transkripsi diverifikasi visual
// (render 1800px + zoom 400dpi). Struktur sesuai cetakan buku:
//   問題 1 = ikon telinga, 4 baris dikte (tanpa cetakan, tanpa kunci)
//   問題 2 = ikon telinga, 1)( ) … 5)( ) (tanpa cetakan, tanpa kunci)
//   問題 3-7 = tertulis (tanpa audio). Kunci 問題 5 & 6 diturunkan dari 例
//   (buku tidak mencetak kunci 問題 → kunci milik app, lihat PLAN.md §15).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio bab34_mondai1.mp3, lalu tuliskan apa yang Anda dengar pada garis jawaban 1)-4).\n' +
      '1) ________________________________________________\n' +
      '2) ________________________________________________\n' +
      '3) ________________________________________________\n' +
      '4) ________________________________________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Buku tidak mencetak kalimat soal maupun kunci jawaban.',
    audio: '/audio/bab34_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio bab34_mondai2.mp3, lalu beri tanda (〇) atau (×) pada pernyataan 1)-5).\n' +
      '1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan isi percakapan. Buku tidak mencetak pernyataan maupun kunci jawaban.',
    audio: '/audio/bab34_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Perhatikan contoh, lalu isi bagian (　) dan buatlah kalimat sesuai gambar dengan pola 「〜とおりに、〜」.\n' +
      '例：わたしが（説明した）とおりに、箱を 組み立てて ください。\n' +
      '1) わたしが（　　　）とおりに、＿＿＿＿＿＿＿＿。\n' +
      '2) 今から わたしが（　　　）とおりに、＿＿＿＿＿＿＿＿。\n' +
      '3) この（　　　）とおりに、＿＿＿＿＿＿＿＿。\n' +
      '4) （　　　）とおりに、＿＿＿＿＿＿＿＿。\n' +
      'Gambar (hls. 74): 例) 組み立て説明書どおりに箱を組める 1) 黒板の 手本を 写す 2) あいさつ（「こんにちは。」→「こんにちは。」） 3) はさみで 線に そって 切る 4) ボタンを「1→3→2→5」の 順に 押す',
    instruksi:
      'Lihat 4 gambar pada buku (halaman cetak 74), lalu kerjakan seperti contoh. Kunci jawaban tidak dicetak di buku.',
    kunciTersedia: false,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Perhatikan contoh, lalu buatlah kalimat sesuai gambar dengan kata hubung yang telah diberikan.\n' +
      '例：ジョギングを した あとで、シャワーを 浴びました。\n' +
      '1) ＿＿＿＿＿＿ あとで、＿＿＿＿＿＿＿＿。\n' +
      '2) ＿＿＿＿＿＿ から、＿＿＿＿＿＿＿＿。\n' +
      '3) ＿＿＿＿＿＿ あとで、＿＿＿＿＿＿＿＿。\n' +
      '4) ＿＿＿＿＿＿ まえに、＿＿＿＿＿＿＿＿。\n' +
      'Gambar (hls. 74): 例) ジョギング → シャワー 1) 食事 → コンサート 2) 散歩 → 地図（旅行） 3) 電話 → パンフレットを 読む 4) 暑そうに あおぐ → 布団で ねる',
    instruksi:
      'Perhatikan urutan gambar, lalu lengkapi dengan kata hubung yang diberikan (あとで／から／まえに). Kunci jawaban tidak dicetak di buku.',
    kunciTersedia: false,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Perhatikan contoh, lalu jawab dengan pola 「〜ないで、〜」.\n' +
      '例：あしたは 会社を 休みますか。（働きます）……いいえ、休まないで、働きます。\n' +
      '1) 週末は どこか 行きますか。（うちで 本を 読みます）……いいえ、＿＿＿＿＿＿＿＿。\n' +
      '2) ことしの 夏休みは 国へ 帰りますか。（北海道を 旅行します）……いいえ、＿＿＿＿＿＿＿＿。\n' +
      '3) デパートで 何か 買いましたか。（すぐ 帰りました）……いいえ、＿＿＿＿＿＿＿＿。\n' +
      '4) 日曜日は 出かけましたか。（レポートを まとめました）……いいえ、＿＿＿＿＿＿＿＿。',
    jawaban:
      '1) どこへも 行かないで、うちで 本を 読みます。\n' +
      '2) 国へ 帰らないで、北海道を 旅行します。\n' +
      '3) 何も 買わないで、すぐ 帰りました。\n' +
      '4) 出かけないで、レポートを まとめました。',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Pilih kata yang tepat dari dalam kurung.\n' +
      '例：朝ごはんを（食べて、食べないで）、食べながら 来ましたから、おなかが すきました。\n' +
      '1) 財布を（持って、持たないで、持ったら）出かけましたから、何も 買えませんでした。\n' +
      '2) みんなと（話して、話すと、話しながら）食事します。\n' +
      '3) ネクタイを（して、しながら、すると）パーティーに 出席します。\n' +
      '4) ボタンを（押しても、押して、押さないで）、お釣りが 出ません。',
    jawaban: '1) 持たないで 2) 話しながら 3) して 4) 押しても',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - 「親子どんぶりの 作り方」. Isi nomor pada gambar di buku sesuai 説明 di atasnya.\n' +
      '材料（1人分）: 鳥肉（50グラム）、卵（1個）、たまねぎ（1/4個）、調味料（しょうゆ、砂糖、酒）、ごはん\n' +
      '作り方:\n' +
      '1. 鳥肉、たまねぎを 切ります。 切り方は（1）の とおりです。\n' +
      '2. なべに 水と 調味料を 入れて、火に かけます。\n' +
      '3. 調味料が 熱く なったら、（1）の 材料を 入れて、煮ます。\n' +
      '4. 肉が 煮えたら、卵を 入れます。 卵を 入れた あとで、火を 消します。\n' +
      '5. 1分ぐらい あとで、どんぶりの ごはんの 上に 載せます。',
    instruksi:
      'Lihat gambar di buku (halaman cetak 75). Gambar pertama (切り方) sudah diberi nomor (1) sebagai contoh — tuliskan nomor yang sesuai untuk gambar lainnya.',
    kunciTersedia: false,
  },
]
