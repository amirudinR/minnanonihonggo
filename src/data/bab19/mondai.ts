import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 — Dengarkan pertanyaan lalu jawab (4 soal).', instruksi: 'Mondai 1 — 4 soal. 聞いて 答えて ください。', audio: '/audio/bab19_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 — Dengarkan percakapan lalu tentukan benar (O) atau salah (X) (5 soal).', instruksi: 'Mondai 2 — 5 soal. 聞いて ○か ×で 答えて ください。', audio: '/audio/bab19_mondai2.mp3', kunciTersedia: false },
  {
    no: 3, jenis: 'jawaban_pendek',
    soal: '例：書きます →（ 書いた ）\n1) 行きます\n2) 働きます\n3) 泳ぎます\n4) 飲みます\n5) 遊びます\n6) 持ちます\n7) 買います\n8) 乗ります\n9) 消します\n10) 食べます\n11) 寝ます\n12) 見ます\n13) 降ります\n14) 散歩します\n15) 来ます',
    jawaban: '1) 行った 2) 働いた 3) 泳いだ 4) 飲んだ 5) 遊んだ 6) 持った 7) 買った 8) 乗った 9) 消した 10) 食べた 11) 寝た 12) 見た 13) 降りた 14) 散歩した 15) 来た',
    kunciTersedia: true,
  },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例：ミラーさんは 日本語（ が ）上手に なりました。\n1) 沖縄へ 行った こと（ ）ありますか。\n2) ことし 18歳（ ）なります。\n3) ホテルは 高いですから、友達の うち（ ）泊まります。\n4) たばこは 体（ ）よくないです。',
    jawaban: '1) が 2) に 3) に 4) に',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例：日本は 初めてですか。……いいえ、3年まえに、一度（ 来た ）ことが あります。\n語句: 掃除します / 来ます / 聞きます / 買い物に 行きます / かきます / 見ます / 行きます\n1) ミラーさん、行き方が わかりますか。……ええ、一度（ ）ことが ありますから、大丈夫です。\n2) 太郎君は うちの 仕事を 手伝いますか。……ええ、（ ）り、（ ）り しますよ。\n3) 趣味は 何ですか。……絵を（ ）り、音楽を（ ）り する ことです。\n4) 歌舞伎は おもしろいですか。……わたしは 歌舞伎を（ ）ことが ありませんから…。',
    jawaban: '1) 行った 2) 掃除した／買い物に 行った 3) かいた／聞いた 4) 見た',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例：（ 寒く ）なりましたね。エアコンを つけましょうか。\n語句: きれい / 暗い / 寒い / 雨 / 眠い\n1) 掃除しましたから、部屋が（ ）なりました。\n2) 日本は 冬 5時ごろ（ ）なります。\n3) おなかが いっぱいです。（ ）なりました。\n4) 朝は いい 天気でしたが、午後から（ ）なりました。',
    jawaban: '1) きれいに 2) 暗く 3) 眠く 4) 雨に',
    kunciTersedia: true,
  },
  {
    no: 7, jenis: 'jawaban_pendek',
    soal: '富士山\n富士山を 見た ことが ありますか。富士山は 3,776メートルで、日本で いちばん 高い 山です。静岡県と 山梨県の 間に あります。冬は 雪が 降って、白く なります。夏も 山の 上に 雪が あります。7月と 8月だけ 富士山に 登る ことが できます。山の 上に 郵便局が あって、手紙を 出したり、電話を かけたり する ことが できます。夏と 秋、いい 天気の 朝 富士山は 赤く なります。とても きれいですから、日本人は 写真を 撮ったり、絵を かいたり します。葛飾北斎の 赤い 富士山の 絵は 有名です。\n1) 富士山は 世界で いちばん 高い 山です。\n2) 夏は 富士山で 雪を 見る ことが できません。\n3) 富士山に 電話も 郵便局も あります。',
    jawaban: '1) × 2) × 3) ○',
    kunciTersedia: true,
  },
]
