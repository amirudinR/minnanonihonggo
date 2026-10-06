import type { MondaiItem } from '@/types/bab'

// Bab 39 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan, ikon telinga pada Honsatsu idx 134).
// Mondai 3-7 = 問題 3-7 (tertulis; Honsatsu idx 134-135 = cetak 116-117).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab39_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab39_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'pilihan_ganda',
    soal:
      '問題 3 - Ubah bagian（　）menjadi bentuk て（て）、 lalu pilih kata dari kotak untuk mengisi garis.\nKotak: 安心しました／残念です／がっかりしました／うれしいです／びっくりしました\n例: 手紙を（読みました→ 読んで）、安心しました。\n1) 子どもが（生まれました→ 　　　）、＿＿＿＿＿＿＿＿。\n2) 彼女から 手紙が（来ません→ 　　　）、＿＿＿＿＿＿＿＿。\n3) 地震の ニュースを（聞きました→ 　　　）、＿＿＿＿＿＿＿＿。\n4) スピーチが 上手に（できませんでした→ 　　　）、＿＿＿＿＿＿＿＿。',
    pilihan: ['安心しました', '残念です', 'がっかりしました', 'うれしいです', 'びっくりしました'],
    jawaban: '1) 生まれましたから 2) 来ませんから 3) 聞きましたから 4) できませんでしたから → 1) 安心しました 2) がっかりしました 3) びっくりしました 4) 残念です',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Buat percakapan seperti 例 dengan memakai kata yang diberikan（ubah ke bentuk て（て））.\n例: あした ハイキングに 行けますか。……いいえ、都合が（悪いんです→ 悪くて）、行けません。\n1) 欲しい カメラが 買えましたか。……いいえ、（高かったです→ 　　　　　　）、＿＿＿＿＿＿＿＿＿＿。\n2) この コンピューターの 使い方が わかりますか。……いいえ、（複雑です→ 　　　　　　）、よく ＿＿＿＿＿＿＿＿＿＿。\n3) 毎晩 よく 寝られますか。……いいえ、車の 音が（うるさいです→ 　　　　　　）、あまり ＿＿＿＿＿＿＿＿＿＿。\n4) 日曜日の 運動会に 参加できましたか。……いいえ、（かぜです→ 　　　　　　）、＿＿＿＿＿＿＿＿＿＿。',
    jawaban:
      '1) 高くて、買えませんでした。 2) 複雑で、わかりませんでした。 3) うるさくて、寝られません。 4) かぜで、行けませんでした。',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      "問題 5 - Lihat gambar. Gunakan bentuk 〜て（て）、〜 untuk menjelaskan setiap gambar.\n例: 地震で うちが 壊れました。\n1) ______________________________。\n2) ______________________________。\n3) ______________________________。\n4) ______________________________。",
    instruksi:
      'Tulis satu kalimat untuk tiap gambar dengan pola 〜て（て）、〜. Buku tidak mencantumkan kunci jawaban.',
    kunciTersedia: false,
  },
  {
    no: 6,
    jenis: 'pilihan_ganda',
    soal:
      '問題 6 - Pilih kata dari kotak.\nKotak: 受けます／よくないです／あります／便利です／初めてです\n例: まだ 仕事が（ある）ので、先に 食事に 行ってください。\n1) 社員食堂は いつも 込んで いるし、味も（　　　　　　）ので、外の レストランで 食べています。\n2) 3月に 入学試験を（　　　　　　）ので、冬休みは 遊びに 行けません。\n3) 車より 電車の ほうが（　　　　　　）ので、電車で 行きます。\n4) 日本で 旅行に 行くのは（　　　　　　）ので、楽しみです。',
    pilihan: ['受けます', 'よくないです', 'あります', '便利です', '初めてです'],
    jawaban: '1) よくないです 2) あります 3) 便利です 4) 初めてです',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'mencocokkan',
    soal:
      '問題 7 - Baca teks 着物, lalu beri tanda (○) atau (×).\n昔、日本人は 大人も 子どもも みんな 毎日 着物を 着て 生活して いた。しかし、着物を 着るのは 難しいし、時間も かかって、大変だ。また 歩く ときや、仕事を する ときも、着物は 不便なので、みんな 洋服を 着るようになった。洋服は 着るのが 簡単だ。それに 日本人の 生活も 西洋化したので、着物より 洋服の ほうが 生活に 合う。今では 着物は 結婚式、葬式、成人式、正月 など 特別な 機会だけに 着る 物に なって しまった。\n1) (　　) 仕事の ときは 洋服より 着物の ほうが いい。\n2) (　　) 着物を 着るのは 簡単だ。\n3) (　　) 日本人の 生活は 西洋化したので、毎日の 生活では ほとんど 着物を 着ない。\n4) (　　) 結婚式や 正月には 着物を 着る 人が いる。',
    jawaban: '1) × 2) × 3) ○ 4) ○',
    kunciTersedia: true,
  },
]