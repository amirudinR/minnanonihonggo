import type { MondaiItem } from '@/types/bab'

// Bab 38 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan, ikon telinga pada Honsatsu idx 126).
// Mondai 3-7 = 問題 3-7 (tertulis; Honsatsu idx 126-127 = cetak 108-109).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________\n5) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab38_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab38_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Ubah kalimat berikut seperti 例 dengan ～のが／～のは／～のを.\n例：「わたしは 暇な とき よく 山に 登ります。」→ わたしは 山に 登るのが 好きです。\n1) 「この ケーキ、田中さんが 作ったんですか。おいしいですね。」→ 田中さんは ______________________ のが 上手です。\n2) 「これ、山田さんの レポートですか。名前が 書いて ありませんよ。」→ 山田さんは レポートに ______________________ のを 忘れました。\n3) 「池田さん、これは 古い 電話番号です。パワー電気の 番号は 変わりましたよ。」→ 池田さんは ______________________ のを 知りました。\n4) 「この 箱、重いですね。一人で は 持てませんね。」→ 一人で ______________________ のは 無理です。',
    jawaban:
      '1) 田中さんは この ケーキを 作った のが 上手です。 2) 山田さんは レポートに 名前を 書く のを 忘れました。 3) 池田さんは 古い 電話番号を 知りました。 4) 一人で この 箱を 持つ のは 無理です。',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Perhatikan contoh, lalu buat percakapan seperti 例 dengan memakai kata yang diberikan.\n例: あなたが 車を 運転して いたんですか。（妻）……いいえ。運転して いたのは 妻です。\n1) 店は 昼が いちばん 忙しいんですか。（夕方）……いいえ。______________________\n2) 木村さんは 東京で 生まれたんですか。（九州）……いいえ。______________________\n3) ほかに 何か とられましたか。（財布だけ）……いいえ。______________________\n4) 中国語と 韓国語と タイ語が 話せるんですか。（中国語だけ）……いいえ。______________________',
    jawaban:
      '1) いいえ。店が 閉まっている のは 夕方 からです。 2) いいえ。木村さんは 東京で 生まれた のでは ありません。 3) いいえ。財布を なくした のでは ありません。 4) いいえ。中国語と 韓国語と タイ語が 話せる のでは ありません。',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'pilihan_ganda',
    soal:
      '問題 5 - Pilih は atau が.\n例: 子ども（が）生まれます。\n1) 夜 遅くまで 仕事を するの（　　） 体に よくないです。\n2) カメラを 持って 来るの（　　） 忘れました。\n3) わたしは サッカーを 見るの（　　） 好きです。\n4) わたしが 初めて 日本へ 来たの（　　） 5年まえです。',
    pilihan: ['は', 'が'],
    jawaban: '1) が 2) を 3) が 4) が',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'pilihan_ganda',
    soal:
      '問題 6 - Pilih の atau こと.\n例: わたしの 趣味は 世界の 切手を 集める（の、こと）です。\n1) 課長に 連絡した（の、こと）は おとといです。\n2) 鈴木さんは ベトナム語を 話す（の、こと）が できます。\n3) 封筒に 自分の 名前を 書く（の、こと）を 忘れました。\n4) わたしは 母に しかられた（の、こと）が ありません。',
    pilihan: ['の', 'こと'],
    jawaban: '1) こと 2) こと 3) こと 4) の',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'mencocokkan',
    soal:
      "問題 7 - Baca teks しずかと あすか, lalu beri tanda (○) atau (×).\nしずかと あすかは 双子の 姉妹です。今 小学校5年生です。顔は ほんとうに よく 似ていますが，性格は ずいぶん 違います。姉の しずかは おとなしくて，優しい 女の子です。本を 読んだり 犬の 世話を したり するのが 好きです。特に 外国の 小説が 好きで，本を 読んでいると，時間が たつのを 忘れて しまいます。妹の あすかは 外で 遊ぶのが 大好きです。試験は いつも 50点ぐらいですが，走るのは クラスで いちばん 速いです。それに 男の 子と けんかしても，負けません。何か 買う ときも，よく 考えてから，買うのは しずかです。あすかは 欲しいと 思ったら，何でも すぐ 買います。同じ 両親から 同じ 日に 生まれて，同じ 家で 生活している 2人の 性格が こんなに 違うのは 不思議です。\n1) (　　) しずかと あすかは 顔も 性格も 似ている。\n2) (　　) しずかは 外国の 小説を 読むのが 好き。\n3) (　　) あすかは おとなしい 女の子。\n4) (　　) 欲しいと 思ったら、すぐ 買うのは あすか。",
    jawaban: '1) × 2) ○ 3) × 4) ○',
    kunciTersedia: true,
  },
]