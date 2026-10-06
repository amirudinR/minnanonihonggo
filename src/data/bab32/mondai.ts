import type { MondaiItem } from '@/types/bab'

// Bab 32 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan; icon telinga pada Honsatsu idx 76 = j_76, cetak 58).
// Mondai 3-7 = 問題 3-7 (tertulis; Honsatsu idx 76–77, cetak 58–59).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab32_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab32_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Pilih bentuk yang tepat agar kalimat menjadi wajar.\n例1: ちょっと 頭が 痛いです。……じや、ゆっくり 休んで ください。（休んだ。）ほうが いいですよ。\n例2: おとといから のどが 痛いです。……じや、大きい 声で（話さない）ほうが いいですよ。\n1) きのうから 熱が あるんです。……じや、あまり 無理を（　　）ほうが いいですよ。\n2) 連休に 九州へ 行きたいんですが…………じや、早く ホテルを（　　）ほうが いいですよ。\n3) おなかの 調子が よくないんです。……じや、冷たい 物は（　　）ほうが いいですよ。\n4) あした 大学の 入学試験なんです。……じや、今晩は 早く（　　）ほうが いいですよ。',
    jawaban:
      '1) しない 2) 予約した 3) 食べない 4) 寝た （例1 は「休んだ。」／例2 は「話さない」）',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Pilih bentuk でしょう yang tepat.\n例: ミラーさんは 来週の 練習に 来ますか。……ええ、（来る）でしょう。きょうは 残業が ない 日ですから。\n1) 山田さんは 中国語が 話せますか。……ええ、（　　）でしょう。中国に 3年 住んで いましたから。\n2) 午後の 野球の 試合は 無理でしょうか。……ええ、（　　）でしょう。こんなに 雨が 強いですから。\n3) この カレーは 辛くないですか。……いいえ、（　　）でしょう。小さい 子どもも 食べていますから。\n4) 部長は 土曜日 ゴルフですか。……いいえ、きっと（　　）でしょう。家族と 出かけると 言いましたから。',
    jawaban: '1) 話せる 2) できない 3) 辛くない 4) しない',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Pilih bentuk yang dapat dipakai untuk かも しれません.\n例: 今度の日曜日は（雨です→雨）かも しれません。\n1) 7時半の 電車に（間に合う→間に合わない）かも しれませんから、走りましょう。\n2) きょうは 寒い 天気ですから、富士山が（見えません→　　）かも しれません。\n3) 高橋さんは まだ 経験が 少ないですから、この 仕事は 少し（難しいです→難しい）かも しれません。\n4) 来週の 旅行は 電車で 行きますから、荷物が 多いと、（大変です→大変）かも しれません。',
    jawaban: '1) 間に合わない 2) 見えません 3) 難しい 4) 大変',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Pilih bentuk yang tepat.\n例: あしたは たびん（雨／雨だ）でしょう。\n1) ミラーさんは とても（まじめ、まじめだ、まじめ）です。\n2) これから だんだん 寒く（なる、なった、なって）でしょう。\n3) 田中さんは（会議室、会議室だ、会議室で）かも しれません。\n4) きょうは（残業しなければ なりません／残業しなければ ならない／なららない）かも しれません。',
    jawaban: '1) まじめ 2) なって 3) 会議室に 4) なららない',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'mencocokkan',
    soal:
      '問題 7 - Baca teks 「今月の 星占い」, lalu beri tanda (○) atau (×) pada pernyataan 1)-4).\n【今月の 星占い】牡牛座（4月21日 — 5月21日）\n☆仕事……何か 新しい 仕事を 始めると、成功するでしょう。でも、働きすぎに 気を つける ほうが いいでしょう。\n☆お金……今月は いくら お金を 使っても、困らないでしょう。宝くじを 買うと、当たるかも しれません。\n☆健康……東の 方へ 旅行したり、スポーツを したり すると、元気になります。でも、足の けがには 気を つけて ください。\n☆恋愛……一人で コンサートや 展覧会に 出かけると、いいでしょう。その とき 会った 人が 将来の 恋人に なるかも しれません。\n1) (　　) 新しい 仕事を 始めると、いいです。\n2) (　　) 宝くじを 買うと、お金持ちに なるかも しれません。\n3) (　　) スポーツを すると、足に けがを してしまいますから、スポーツを しない ほうが いい세요。\n4) (　　) 恋人と コンサートや 展覧会に 行った ほうが いです。',
    jawaban: '1) × 2) × 3) × 4) ×',
    kunciTersedia: true,
  },
]