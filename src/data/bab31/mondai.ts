import type { MondaiItem } from '@/types/bab'

// Bab 31 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan; icon telinga pada Honsatsu idx 68 = hj_68, cetak 50).
// Mondai 3-7 = 問題 3-7 (tertulis; Honsatsu idx 68–69, cetak 50–51).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab31_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab31_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Ubah ます形 menjadi 意向形.\n例: 聞きます → 聞こう\n1) 急ぎます → ______\n2) 踊ります → ______\n3) 探します → ______\n4) 待ちます → ______\n5) 寝ます → ______\n6) 続けます → ______\n7) 決めます → ______\n8) 休憩します → ______\n9) 来ます → ______',
    jawaban:
      '1) いそごう 2) 踊ろう 3) さがそう 4) まとう 5) ねよう 6) つづけよう 7) きめよう 8) きゅうけいしよう 9) こよう',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Ubah kata kerja menjadi 意向形, lalu tulis ulang kalimat.\n例: 大学の 試験を（受けます→受けよう）と 思っています。\n1) パワー電気の パソコンを（買います→　　）と 思っています。\n2) 駅の 近くの ホテルを（予約します→　　）と 思っています。\n3) 来年 家を（建てます→　　）と 思っています。\n4) 日曜日は 教会へ（行きます→　　）と 思っています。',
    jawaban: '1) 買おう 2) 予約しよう 3) 建てよう 4) 行こう',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Lengkapi jawaban.\n例: 彼女と 結婚するんですか。……ええ、ことしの 秋に 結婚する つもりです。\n例2: きょうも 残業するんですか。……いいえ、きょうは ない つもりです。\n1) だれに 引越しを 手伝ってもらいますか。……会社の 人に __________\n2) 夏休みに 国へ 帰りますか。……いいえ、クリスマスまで __________\n3) あしたの 朝 何時ごろ 出かけますか。……そうですね。7時ごろ __________\n4) 旅行に 大きい カメラを 持って 行きますか。……いいえ、重いですから、__________',
    jawaban:
      '1) 会社の 人に 引っ越しの 手伝いを してもらいますか。……会社の 人に もらいます。 2) ……いいえ、クリスマスまで 帰りません。 3) ……そうですね。7時ごろ 出かけます。 4) ……いいえ、重いですから、持っては 行きません。',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Baca kotak 「4月の 予定」, lalu jawab dengan pola 「〜の 予定です」.\n【4月の 予定】1. (火) 会議 2:00〜4:00／2. (水) 出張（広島）／3. (木) ミラーさんに 会う／4. (金) ……／5. (土) お花見（上野公園）／6. (日) ……／7. (月) 会議\n例: きょう（4月1日）の 会議は 何時に 終わりますか。……4時に 終わる 予定です。\n1) 次の 会議は いつですか。……__________\n2) あした 何か 予定が ありますか。……__________\n3) いっ ミラーさんに 会いますか。……__________\n4) 土曜日 どこへ お花見に 行きますか。……__________',
    jawaban:
      '1) 木曜日の 予定です。 2) 水曜日に 出張する 予定です。 3) 木曜日に 会う 予定です。 4) 上野公園へ お花見に 行く 予定です。',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Baca teks 「田舎へ 帰って」, lalu jawab pertanyaan 1)-4).\n【田舎へ 帰って】わたしは 九州の 小さい 村で 生まれた。高校を 卒業して、東京へ 来てから、もう 10年に なる。今 本屋で 働いている。田舎に いた ときは、映画館も ないし、レストランも ないし、田舎の 生活は 嫌だと 思っていた。でも、最近 疲れた ときや 寂しい とき、よく 田舎の 青い 空や 緑の 山を 思い出す。目を 閉じると、友達と 泳いだ 川の 音が 聞こえる。わたしは 来年の 春、会社を やめて、田舎へ 帰ろうと 思っている。そして、都市の 子どもたちが 自由に 遊べる「山の 学校」を 作る つもりだ。東京には 世界中の 物が 集まっているが、ない 物が 一つだけ ある。それは 美しい 自然だ。わたしは 東京へ 来て、自然の すばらしさに 気が ついた。\n1) この 人は 今 どこに 住んでいますか。…\n2) この 人は どうして 田舎の 生活は 嫌だと 思いましたか。…\n3) この 人は 田舎へ 帰って、何を しますか。…\n4) 東京に ない 物は 何ですか。…',
    jawaban:
      '1) 東京に 住んでいます。 2) 映画館も レストランも なかったから。 3) 来年の 春、会社を やめて「山の 学校」を 作る つもりです。 4) 美しい 自然です。',
    kunciTersedia: true,
  },
]