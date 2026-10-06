import type { MondaiItem } from '@/types/bab'

// Bab 37 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = soal audio CD (問題 1-2 pada Honsatsu idx 118 / cetak 100).
// Mondai 3-7 = 問題 3-7 (tertulis, tanpa audio; 問題 7 = 読解「眠り猫」).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab37_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab37_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Tulis bentuk pasif (受身) dari setiap Kata Kerja berikut.\n例：磨きます → 磨かれます\n1) 踏みます → 6) 褒めます →\n2) しかります → 7) 捨てます →\n3) 選びます → 8) 見ます →\n4) 汚します → 9) 連れて 来ます →\n5) 飼います → 10) 輸出します →\n11) 注意します →',
    jawaban:
      '1) 踏まれます 2) しかられます 3) 選ばれます 4) 汚されます 5) 飼われます 6) 褒められます 7) 捨てられます 8) 見られます 9) 連れて 来られます 10) 輸出されます 11) 注意されます',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Ubahlah menjadi kalimat pasif.\n例1：警官は わたしを 呼びました → わたしは 警官に 呼ばれました。\n例2：泥棒は わたしの かばんを とりました → わたしは 泥棒に かばんを とられました。\n1) 犬は わたしを かみました → ＿＿＿＿＿＿＿＿＿。\n2) 部長は わたしに 出張に ついて 聞きました → ＿＿＿＿＿＿＿＿＿。\n3) 先生は わたしの 名前を まちがえました → ＿＿＿＿＿＿＿＿＿。\n4) 子どもは わたしの 本を 汚しました → ＿＿＿＿＿＿＿＿＿。',
    jawaban:
      '1) わたしは 犬に かまれました。\n2) わたしは 部長に 出張に ついて 聞かれました。\n3) わたしは 先生に 名前を まちがえられました。\n4) わたしは 子どもに 本を 汚されました。',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Perhatikan gambar, lalu buat kalimat pasif.\n例：この 本は いろいろな ことばに 翻訳されて います。\n1) 顔は 中国や 東南アジアなどで 使われて います。\n2) 中国から お茶が 輸入されて います。\n3) この 工場で 毎月 テレビが 1,000台 造られて います。\n4) 米は 特に アジアで 食べられて います。',
    jawaban:
      '1) 漢字は 中国や 日本で 使われて います。\n2) 中国から お茶が 輸入されて います。\n3) この 工場で 毎月 テレビが 1,000台 造られて います。\n4) 米は 特に アジアで 食べられて います。',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'mencocokkan',
    soal:
      '問題 6 - Isilah dengan partikel yang tepat dari kotak.\n（が／に よって／を／に／で）\n例：父に 漫画の 本（を）捨てられました。\n1) わたしは 母（　）ことばの 使い方を 注意されました。\n2) 1964年に 東京で オリンピック（　）開かれました。\n3) この 服は 紙（　）作られて います。\n4) 電話は ベル（　）発明されました。',
    jawaban: '1) に 2) が 3) で 4) に よって',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'mencocokkan',
    soal:
      '問題 7 - Bacalah teks 「日光東照宮の 眠り猫」 berikut, lalu beri tanda (○) atau (×).\n\n日光の 東照宮は 17世紀の 初めに 建てられました。建物が 豪華で 有名ですが、建物の 中にも 有名な 彫刻や 絵が あります。その 中に 「眠り猫」が あります。これは 眠って いる 猫の 彫刻で、左甚五郎が 彫ったと 言われて います。彼は 若い ときから 彫刻が とても 上手でしたが、悪い 神間に 右手を 切られて しまいました。しかし、甚五郎は その あと 一生 懸命 頑張って、左手で 彫れるように なりました。それで 「左」甚五郎と 呼ばれました。東照宮には ねずみが 1匹も いません。甚五郎の 猫が いるからだと 言われて います。\n\n1) (　　) 日光の 東照宮は 200年まえに 建てられました。\n2) (　　) 東照宮の 絵の 中に 「眠り猫」が あります。\n3) (　　) 東照宮の 「眠り猫」は 左甚五郎に よって 作られました。\n4) (　　) 甚五郎は 右手を 切られてから、左手で 上手に 彫刻を 作りましたから、「左」甚五郎と 呼ばれました。',
    jawaban: '1) × 2) × 3) ○ 4) ○',
    kunciTersedia: true,
    konteks: [
      {
        judul: '日光東照宮の 眠り猫',
        teks: '日光の東照宮は17世紀の初めに建てられました。建物が豪華で有名ですが、建物の中にも有名な彫刻や絵があります。その中に「眠り猫」があります。これは眠っている猫の彫刻で、左甚五郎が彫ったと言われています。彼は若いときから彫刻がとても上手でしたが、悪い神間に右手を切られてしまいました。しかし、甚五郎はそのあと一生懸命頑張って、左手で彫れるようになりました。それで「左」甚五郎と呼ばれました。東照宮にはねずみが1匹もいません。甚五郎の猫がいるからだと言われています。',
      },
    ],
  },
]
