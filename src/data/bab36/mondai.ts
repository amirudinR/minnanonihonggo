import type { MondaiItem } from '@/types/bab'

// Bab 36 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// 問題 1-2 = soal audio CD (ikon telinga, Honsatsu idx 110 / cetak 92).
// 問題 3-6 = tertulis (idx 110-111). 問題 7 = bacaan 読み物「乗り物の歴史」(idx 111) + pertanyaan  terbuka.
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal: '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab36_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal: '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab36_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Pilih kata yang tepat dari dalam kurung.\n例1：よく（聞こえる）ように、大きい 声で 話して ください。\n例2：病気に（ならない）ように、食べ物に 気をつけて います。\n' +
      '1) 50メートル（　　）ように、夏休みは できるだけ プールへ 練習しに 行こうと 思っています。\n2) 薬が（　　）ように、薬を 飲んで、ゆっくり 休みます。\n3) 気分が 悪く（　　）ように、船に 乗る まえに、薬を 飲んで おきます。\n4) 友達に 会う 約束を（　　）ように、手帳に 書いて おきます。',
    jawaban: '1) 泳げる 2) 飲みすぎない 3) ならない 4) 忘れない',
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Tulis ulang kalimat berikut dengan bentuk ～ように なりましたか.\n' +
      '例1：（ワープロを 打ちます→ ワープロが 打てる）ように なりましたか。……いいえ、まだ 打てるように なりました。\n' +
      '例2：（タンゴを 踊ります→ タンゴが 踊れる）ように なりましたか。……いいえ、まだ 踊れません。\n' +
      '1) （ショパンの 曲を 弾きます→ ＿＿＿＿＿＿）ように なりましたか。……いいえ、やっと ＿＿＿＿＿＿。\n' +
      '2) （日本語の 新聞を 読みます→ ＿＿＿＿＿＿）ように なりましたか。……いいえ、かなり ＿＿＿＿＿＿。\n' +
      '3) （パソコンで 図を かきます→ ＿＿＿＿＿＿）ように なりましたか。……いいえ、まだ ＿＿＿＿＿＿。\n' +
      '4) （料理を します→ ＿＿＿＿＿＿）ように なりましたか。……ええ。でも、まだ 簡単な 料理が ＿＿＿＿＿＿。',
    jawaban:
      '1) ショパンの 曲が 弾ける 2) 日本語の 新聞が 読める 3) パソコンで 図が かける 4) 料理が できる',
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Pilih kata yang tepat dari kotak.\n例：川の 水が 汚れましたから、魚が（いなく）なりました。\nKotak: 着られません／いません／出られません／見えません／読めません\n' +
      '1) 高い ビルが できましたから、山が（　　）なりました。\n2) 太りましたから、スーツが（　　）なりました。\n3) 足に けがを しましたから、試合に（　　）なりました。\n4) 最近 小さい 字が（　　）なりました。',
    jawaban: '1) 見えません 2) 着られません 3) 出られません 4) 読めません',
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Pilih kata yang tepat dari kotak.\n例1：試験の 時間に 絶対に（遅れない）ように してください。\n例2：毎日 朝ごはんを（食べる）ように しています。\nKotak: 食べます／貯金します／歩きます／磨きます／無理をします\n' +
      '1) 食事の あとで、必ず 歯を（　　）ように してください。\n2) 病気に なると、大変ですから、あまり（　　）ように してください。\n3) 毎月 2万円づつ（　　）ように しています。\n4) 夜 10時を 過ぎたら、あの 道は（　　）ように しています。',
    jawaban: '1) 磨きます 2) 無理をします 3) 貯金します 4) 歩きます',
  },
  {
    no: 7,
    jenis: 'mencocokkan',
    soal:
      '問題 7 - Baca 読み物「乗り物の歴史」, lalu jawab pertanyaannya.\n\n' +
      '昔は 遠い 所へも 歩いて 行きました。馬や 小さい 船は 使っていましたが、付ける 所は 少なくて、知っている 世界は 狭かったのです。\n' +
      '15世紀には、船で 遠く まで 行けるように なりました。ヨーロッパの 人は 船で 遠い 国へ 行って、珍しい 物を 持って 帰りました。\n' +
      '19世紀には 汽車と 汽船が できて、大勢の 人々 たくさんの 物が 運べるように なりました。外国へ 行く 人も 多く なりました。\n' +
      '1903年に ライト兄弟の 飛行機が 初めて 空を 飛びました。今は 大きくて、速くて、安全な 飛行機が 世界の 空を 飛んでいます。\n' +
      '次の 夢は 宇宙です。だれでも 宇宙へ 行けるように なるでしょうか。宇宙で 青い 地球を 見ながら 食事できるように なるかもしれません。\n\n' +
      '1) いつのころ 船で 遠く まで 行けるように なりましたか。……\n2) 汽車と 汽船が できて、どんな ことが できるように なりましたか。……\n3) いつ 飛行機が 初めて 空を 飛びましたか。……',
    instruksi:
      'Jawab pertanyaan dengan kalimat Anda sendiri. Kunci jawaban tidak disertakan (pertanyaan terbuka).',
    kunciTersedia: false,
  },
]