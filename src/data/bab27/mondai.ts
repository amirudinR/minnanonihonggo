import type { MondaiItem } from '@/types/bab'

// Bab 27 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = soal audio CD (問題 1-2 pada Honsatsu idx 34 / cetak 16).
// Mondai 3-8 = 問題 3-8 (tertulis, tanpa audio).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________\n5) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab27_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab27_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Tulis bentuk sopan (～ます) dan bentuk biasa (dictionary/裸形) dari setiap Kata Kerja Potensial.\n例：行きます｜行けます｜行ける\n1) 書きます｜＿＿＿＿｜＿＿＿＿\n2) 泳ぎます｜＿＿＿＿｜＿＿＿＿\n3) 話します｜＿＿＿＿｜＿＿＿＿\n4) 勝ちます｜＿＿＿＿｜＿＿＿＿\n5) 飲みます｜＿＿＿＿｜＿＿＿＿\n6) 帰ります｜＿＿＿＿｜＿＿＿＿\n7) 呼びます｜＿＿＿＿｜＿＿＿＿\n8) 買います｜＿＿＿＿｜＿＿＿＿\n9) 食べます｜＿＿＿＿｜＿＿＿＿\n10) 寝ます｜＿＿＿＿｜＿＿＿＿\n11) 降ります｜＿＿＿＿｜＿＿＿＿\n12) 来ます｜＿＿＿＿｜＿＿＿＿\n13) します｜＿＿＿＿｜＿＿＿＿',
    jawaban:
      '1) 書けます・書ける 2) 泳げます・泳げる 3) 话せます・話せる 4) 勝てます・勝てる 5) 飲めます・飲める 6) 帰れます・帰れる 7) 呼べます・呼べる 8) 買えます・買える 9) 食べられます・食べられる 10) 寝られます・寝られる 11) 降れます・降れる 12) 来られます・来られる 13) できます・できる',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Ubahlah kalimat berikut menjadi bentuk Kata Kerja Potensial.\n例：簡単な 日本料理を 作る ことができます → 簡単な 日本料理が 作れます。\n1) パソコンを 使う ことができます → ＿＿＿＿＿＿＿＿＿＿＿＿。\n2) カードで 払う ことができます → ＿＿＿＿＿＿＿＿＿＿＿＿。\n3) 日本人の 名前を すぐ 覚える ことが できません → ＿＿＿＿＿＿＿＿＿＿＿＿。\n4) 長い 休みを 取ることが できませんでした → ＿＿＿＿＿＿＿＿＿＿＿＿。',
    jawaban:
      '1) パソコンが 使えます。 2) カードが 払えます。 3) 日本人の 名前が すぐ 覚えられません。 4) 長い 休みが 取れませんでした。',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Jawablah dengan bentuk ～しか.\n例：テレビで 映画を 見ますか。（ニュース）……いいえ、ニュースしか 見ません。\n1) スポーツは 何でも できますか。（テニス）……＿＿＿＿＿＿＿＿。\n2) 土曜日も 休みますか。（日曜日）……＿＿＿＿＿＿＿＿。\n3) きのうは よく 疲れましたか。（少し）……＿＿＿＿＿＿＿＿。\n4) 外国人の 先生を みんな 知っていますか。（ワット先生）……＿＿＿＿＿＿＿＿。',
    jawaban:
      '1) いいえ、テニスしか できません。 2) いいえ、日曜日しか 休みません。 3) いいえ、少ししか 疲れませんでした。 4) ワット先生しか 知りません。',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Perhatikan contoh, lalu jawab dengan bentuk ～ませんか (bertanya-tanya atau menawarkan).\n例：本や 雑誌が 借りられますか。（本、雑誌）……本は 借りられますが、雑誌は 借りられません。\n1) 犬や 猫が 好きですか。（犬、猫）……＿＿＿＿＿＿＿＿＿＿＿＿。\n2) お酒は 何でも 飲めますか。（ビール、ワイン）……＿＿＿＿＿＿＿＿＿＿＿＿。\n3) 家族に 彼の ことを 話しましたか。（姉、両親）……＿＿＿＿＿＿＿＿＿＿＿＿。\n4) 富士山には いつでも 登れますか。（7月と 8月、9月から 6月まで）……＿＿＿＿＿＿＿＿＿＿＿＿。',
    jawaban:
      '1) 犬は 好きですけど、猫は 好きじゃありません。 2) ビールは 飲めますが、ワインは 飲めません。 3) 姉には 話しましたが、両親には 話していません。 4) 7月と 8月には 登れますが、9月から 6月までは 登れません。',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Isilah dengan bentuk Kata Kerja Potensial yang tepat.\n例：ミラーさんは 自分で うち（を）建てる ことが できます。\n1) 山の上（　）海（　）見えます。\n2) 電話番号（　）知っていますが、住所（　）知りません。\n3) 学校の 近く（　）パン工房（　）できます。\n4) 空港へ は 電車で 行けます。……ええ、バスで（　）行けますよ。',
    jawaban: '1) から／が 2) は／は 3) に／が 4) も',
    kunciTersedia: true,
  },
  {
    no: 8,
    jenis: 'mencocokkan',
    soal:
      '問題 8 - Baca teks 「ドラえもん」 berikut, lalu beri tanda (○) atau (×).\n\nこれは「ドラえもん」です。日本の 子どもたちは ドラえもんが 大好きです。漫画の 主人公で、猫の 形の ロボットです。ドラえもんは 不思議な ポケットを 待っていて、いろいろな 物が 出せます。例えば、「タケコプター」や「タイムテレビ」です。「タケコプター」を 頭に 付けると、自由に 空を 飛べます。「タイムテレビ」では 昔の 自分や 将来の 自分が 見られます。\nわたしが いちばん 欲しい 物は「どこでもドア」です。この ドアを 開けると、どこでも 行きたい 所へ 行けます。皆さん、もし ドラえもんに 会えたら、どんな 物を 出して もらいたいですか。\n\n1) (　　) ドラえもんは 動物です。\n2) (　　) ドラえもんは ポケットから 便利な 物を 出します。\n3) (　　) 空を 飛べたい とき、「タケコプター」に 乗ります。\n4) (　　) 「どこでもドア」が あったら、どこでも 行けます。',
    jawaban: '1) × 2) ○ 3) × 4) ○',
    kunciTersedia: true,
    konteks: [
      {
        judul: 'ドラえもん',
        teks: 'これは「ドラえもん」です。日本の子どもたちはドラえもんが大好きです。漫画の主人公で、猫の形のロボットです。ドラえもんは不思議なポケットを待っていて、いろいろな物が出せます。例えば、「タケコプター」や「タイムテレビ」です。「タケコプター」を頭に付けると、自由に空を飛べます。「タイムテレビ」では昔の自分や将来の自分が見られます。\nわたしが一番欲しい物は「どこでもドア」です。このドアを開けると、どこでも行きたい所へ行けます。皆さん、もしドラえもんに会えたら、どんな物を出してほしいですか。',
      },
    ],
  },
]
