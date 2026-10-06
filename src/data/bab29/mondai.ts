import type { MondaiItem } from '@/types/bab'

// Bab 29 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan; ikon telinga pada Honsatsu idx 50, cetak 32).
// Mondai 3-8 = 問題 3-8 (tertulis; Honsatsu idx 50-51, cetak 32-33).
// Catatan: cetakan MNN2 tidak mencantumkan kunci jawaban untuk 問題 1-8, sehingga
// `jawaban` pada soal tertulis disusun dari kaidah bab ini (deterministik).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________\n5) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab29_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab29_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Perhatikan contoh, lalu tulis kalimat seperti 例 dengan gambar yang tersedia.\n例: ボタンが 外れて います。\n1) [gambar: jendela/kusen dengan kaca yang pecah]\n2) [gambar: kantong 「スーパー」 yang robek]\n3) [gambar: pohon dengan dahan patah]\n4) [gambar: mobil berhenti di depan rumah]',
    jawaban: '1) ガラスが 割れて います。 2) スーパーが 破れて います。 3) 木が 折れて います。 4) 車が 止まって います。',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Lengkapi bagian kosong dengan bentuk ～ています.\n例: かぎが（ 掛かって ）いますから、入れません。\n1) 会議室の 電気が（　　　）いますから、会議は もう 終わったと 思います。\n2) エアコンが（　　　）いますから、涼しいです。\n3) 道が（　　　）いましたから、遅れました。\n4) この コートは ポケットが（　　　）いませんか。不便です。',
    jawaban: '1) 消えて 2) ついて 3) すいて 4) 入って',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Lengkapi bagian kosong dengan bentuk ～ています.\n例: この 袋は（ 破れて ）いますから、捨てましょう。\n1) 切手は あの 箱に（　　　）います。\n2) その ファクスは（　　　）いますから、使えませんでした。\n3) その コップは（　　　）いますよ。きれいな コップは あちらです。\n4) 美術館は（　　　）いましたから、ゆっくり 絵が 見られました。',
    jawaban: '1) 入って 2) 壊れて 3) 汚れて 4) 空いて',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Perhatikan contoh, lalu tuliskan kalimat kedua dengan ～てしまいました.\n例: 盆ごはんを 食べに 行きませんか。\n……この 仕事を（　　　）しまいますから、お先に どうぞ。\n1) 夏休みの 宿題は もう（　　　）しまいました。……ええ、全部 終わりました。\n2) 薬は ありますか。……いいえ、もう（　　　）でした。\n3) それは 図書館の 本ですか。……ええ、（　　　）しまいましたから、返しに 行きます。\n4) いっしょに 帰りませんか。……すみません。この 手紙を（　　　）しまいました。',
    jawaban: '1) やって 2) 使って 3) 貸して 4) 書いて',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Perhatikan contoh, lalu isi bagian kosong dengan ～てしまいました.\n例: 切符を 買いましたが、（ なくして ）しまいました。\n1) 10時の 約束でしたが、時間に（　　　）しまいました。\n2) 行き方を 教えてもらいましたが、道を（　　　）しまいました。\n3) 買い物から 帰ると、袋が（　　　）しまいました。\n4) 学生の とき、フランス語を 勉強しましたが、もう（　　　）しまいました。',
    jawaban: '1) 遅れて 2) まちがえて 3) 破れて 4) 忘れて',
    kunciTersedia: true,
  },
  {
    no: 8,
    jenis: 'mencocokkan',
    soal:
      '問題 8 - Baca teks 「窓で見た うち」 lalu beri tanda (○) atau (×).\n■ 窓で見た うち\n昨夜 神戸で 大きい 地震が ありました。今 わたしは 三宮駅の 前に います。駅の 建物は 壊れて、壁の 時計は 止まっています。時計の 針は 5時46分 を 指しています。地震が あった 時間です。電車は 動いて いません。古い ビルが 駅前の 広い 通りに 倒れています。倒れていない ビルも 窓の ガラスが 割れています。ビルの 中を 見ると、いろいろな 物が 壊れています。危ないですから、入る ことが できません。駅の 西の 方では 今も うちが 燃えています。\n1) (　　) 今 5時46分です。\n2) (　　) 駅の 建物は 壊れて しまいました。\n3) (　　) 電車で 神戸へ 来られます。\n4) (　　) ビルは 窓の ガラスが 割れたり、中の 物が 壊れたり しています。',
    jawaban: '1) ○ 2) ○ 3) × 4) ○',
    kunciTersedia: true,
  },
]