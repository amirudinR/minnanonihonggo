import type { MondaiItem } from '@/types/bab'

// Bab 45 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan, ikon telinga pada Honsatsu idx 184).
// Mondai 3-7 = 問題 3-7 (tertulis; Honsatsu idx 184-185, hlm. cetak 166-167).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab45_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab45_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'pilihan_ganda',
    soal:
      '問題 3 - Ubah bagian dalam kurung menjadi bentuk 場合は、～, lalu pilih kalimat dari kotak.\n例: 予定が（変わりました→ 変わった）場合は、連絡して ください。\n〔連絡します／お金を 返します／警察の 許可を もらいます／係に 申し込みます／この ボタンで 調節します〕\n1) ここに 車を（止めます→　　　）場合は、　　　　　なければなりません。\n2) コピーの 手が（薄いです→　　　）場合は、　　　　　ください。\n3) コンサートが（中止です→　　　）場合は、　　　　　もらえません。\n4) お弁当が（必要です→　　　）場合は、　　　　　ください。',
    pilihan: ['連絡します', 'お金を 返します', '警察の 許可を もらいます', '係に 申し込みます', 'この ボタンで 調節します'],
    jawaban:
      '1) 止めた／この ボタンで 調節しなければ なりません 2) 薄い／係に 申し込みます 3) 中止の／お金を 返して 4) 必要の／警察の 許可を もらって',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Perhatikan contoh, lalu tulis ulang kalimat dengan bentuk のに.\n例: 一生懸命（練習しました→ 練習した）のに、負けて しまいました。\n1) また（読んでいません→　　　）のに、母が 雑誌を 捨てて しまいました。\n2) 結婚式に（招待されました→　　　）のに、都合が 悪くて、行けませんでした。\n3) もうすぐ（4月です→　　　）のに、なかなか 暖かく なりません。\n4)（寒いです→　　　）のに、子どもは 外で 遊んでいます。',
    jawaban:
      '1) 読んでいなかった 2) 招待された 3) 4月だった 4) 寒かった （例）練習した',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Perhatikan contoh, lalu lengkapi bagian kosong dengan bentuk る-형 / た-형.\n例: かぜは 治りましたか。……いいえ、毎日 薬を 飲んでいるのに、まだ 治りません。\n1) ミラーさんは 来ましたか。……いいえ、もうすぐ ＿＿＿＿＿のに、まだ 来ません。\n2) ことしも お祭りに 行きましたか。……いいえ、＿＿＿＿＿のに、雨で 中止しました。\n3) 忘年会の 飲み物は 足りましたか。……いいえ、＿＿＿＿＿のに、足りませんでした。\n4) 駅へ 行く 道は すぐ わかりましたか。……いいえ、＿＿＿＿＿のに、なかなか わかりませんでした。',
    jawaban: '1) 来る 2) 降った 3) 足りなかった 4) すぐ わかった',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Perhatikan contoh, lalu ubah bagian akhir kalimat menjadi bentuk回想形 (ます-형 lampau).\n例: おいしい 料理を 作って、待っていたのに、彼女は 来ませんでした。\n1) 6年も 英語を 勉強したのに、あまり ＿＿＿＿＿。\n2) あの レストランは 高いのに、あまり ＿＿＿＿＿。\n3) カメラを 持って、行ったのに、＿＿＿＿＿。\n4) この 洗濯機は 先週 修理したのに、＿＿＿＿＿。',
    jawaban: '1) 上手になりませんでした 2) 高くなかったです 3) 使いませんでした 4) 動きませんでした',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Baca teks 悩みの 相談 berikut, lalu beri tanda (○) atau (×) pada pernyataan 1)-4).\n【相談】僕の 悩みは 朝 起きれられない ことです。自覚まし時計が 3つも あるのに、起きられません。夜は 早く 寝るように していますが、朝 起きられるかどうか、心配で、なかなか 眠れません。隣の 部屋の 友達は「毎朝 君の 自覚ましで 目が 覚める」と言って いますが、僕は 気が つきません。気が ついても、止めて、また 寝て しまいます。どう したら いいですか。 （小川たけし 大学生）\n【回答】まず 寝る まえに、離して、おもしろくない 本を 読みましょう。すぐ 眠く なりますよ。それから 3つの 自覚まし時計は 違う 時間に 鳴るように、セットして、いろいろな 所に 置いて おきます。時計が 鳴ると、起きて、正めに 行かなければ ならないので、目が 覚めますよ。それでも だめな 場合は、隣の 友達に 起こして もらましょう。\n1) (　　) 小川君は 朝 隣の 部屋の 友達を 起こして あげます。\n2) (　　) 小川君は 夜 すぐ 眠って しまいます。\n3) (　　) 小川君は 自覚まし時計が 鳴るかどうか、心配です。\n4) (　　) 答える 人は 離して、おもしろくない 本を 読んだら、眠くなると 思っています。',
    jawaban: '1) × 2) × 3) ○ 4) ×',
    kunciTersedia: true,
  },
]
