import type { MondaiItem } from '@/types/bab'

// Bab 43 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan, icon telinga pada Honsatsu idx 168, cetak 150).
// Mondai 3-6 = 問題 3-6 (tertulis; Honsatsu idx 168-169, cetak 150-151).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab43_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab43_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Perhatikan contoh, lalu tulis bentuk ～そうです pada garis jawaban.\n例：うしろの ポケットから ハンカチが （落ち）そうですよ。\n……あ、ほんとうだ。どうも。\n1) 荷物が 重くて、袋の ひもが （　　　）そうです。\n……じゃ、新しいのに 換えましょう。\n2) ビールが 足りなく （　　　）そうです。\n……じゃ、買いに 行きます。\n3) 急ぎましょう。時間に （　　　）そうですよ。\n……じゃ、タクシーで 行きましょう。\n4) ずいぶん 寒く なりましたね。\n……ええ、雪が （　　　）そうですね。',
    jawaban: '1) 切れ 2) なり 3) 足りな 4) 降り',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Perhatikan contoh, lalu tulis jawaban seperti 例.\n例1：どう したんですか。気分が （悪）そうですね。\n……ええ、ちょっと 疲れているんです。\n例2：（元気）そうですね。\n……ええ、スポーツを 始めてから、体の 調子が いいんです。\n1) わあ、（　　　）そうですね。ワンさんが 作ったんですか。\n……ええ、中国の 料理です。どうぞ。\n2) この お寺、ずいぶん （　　　）そうですね。いつ できたんですか。\n……500年ぐらいまえに 建てられました。\n3) この ひもは （　　　）そうですよ。\n……ああ、その ひもなら、なかなか 切れないでしょう。\n4) その かばん、旅行に （　　　）そうですね。\n……ええ、軽いし、ポケットも たくさん あるんです。',
    jawaban: '1) おいし 2) 昔 3) 丈夫 4) 便利',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Pilih kata dari kotak, lalu tulis kalimat ～て 来ます.\n例：郵便局へ 行きますが、何か 用事は ありませんか。\n……じゃ、60円の 切手を 5枚 （買って）来て ください。\n［ しまいます ／ 買います ／ 聞きます ／ 見ます ／ 呼びます ］\n1) 空港へ 行く バスの 乗り場は どこでしょうか。\n……さあ、あの 店で （　　　）来ましょう。\n2) 会議が 終わったから どうか、（　　　）来て ください。\n……はい、わかりました。\n3) 課長が ミラーさんを 捜していますよ。\n……教室に いると 思いますから、すぐ （　　　）来ます。\n4) ちょっと 休憩しませんか。\n……じゃ、コーヒーでも （　　　）来ましょう。',
    jawaban: '1) 買います 2) 呼びます 3) 見ます 4) 買います',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Baca 鈴木君の日記, lalu beri tanda (○) atau (×).\n【2月2日（日）】朝から 雪が 降っている。外は 寒そうだったので、1日 うちに いった。暇だったので、高橋に 電話して みたが、いなかった。スキーに 行っているのを 思い出した。\n【4月13日（日）】大学の 友達の 結婚式に 出た。そこで 渡辺あけみさんに 会った。すてきな 人だと 思った。\n【6月21日（土）】きょうも 朝から 雨だった。あけみさんの 誕生日の パーティーに 行った。帰るとき、「今度 二人で ドライブに 行きましょうか」と 言って みた。\n【11月17日（月）】きょう みんなに 「うれしそうだね」と 言われた。きのう あけみさんが 僕と 結婚すると 言って くれた。幸せだ。\n1) （　　）あけみさんは 鈴木君の 大学の ときの 友達です。\n2) （　　）6月20日は 雨でした。\n3) （　　）鈴木君は 11月16日に あけみさんと 結婚しました。',
    jawaban: '1) × 2) × 3) ○',
    kunciTersedia: true,
  },
]