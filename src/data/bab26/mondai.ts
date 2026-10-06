import type { MondaiItem } from '@/types/bab'

// Bab 26 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = soal audio CD (問題 1-2 pada Honsatsu idx 26).
// Mondai 3-5 = 問題 3-5 (tertulis, tanpa audio).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________\n5) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab26_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab26_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'pilihan_ganda',
    soal:
      '問題 3 - Pilih kata yang tepat dari kotak.\n例：あまり 食べませんね。気分が（悪いんです）か。\n1) 遅かったですね。何か（　　　　　　）か。\n2) いつも 車で 買い物に 行きますね。近くに スーパーは（　　　　　　）か。\n3) 時々 大阪弁を 使いますね。大阪で（　　　　　　）か。\n4) いつも 帽子を かぶっていますね。帽子が（　　　　　　）か。',
    pilihan: ['悪いです', '好きです', 'ありません', 'ありました', '生まれました'],
    jawaban: '1) 悪いです 2) ありません 3) ありました 4) あります',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Tulis ulang kalimat berikut dengan bentuk ～ます／～です.\n例：日本語が 上手ですね。どのくらい 勉強したんですか。 ……4年 勉強しました。\n1) いい ネクタイですね。＿＿＿＿＿＿＿＿。 ……エドヤストアで 買いました。\n2) テレサちゃん、誕生日 おめでとう ございます。＿＿＿＿＿＿＿＿。 ……10歳に なりました。\n3) カリナさんが 国へ 帰ると、寂しく なりますね。＿＿＿＿＿＿＿＿。 ……来月の 4日です。\n4) たくさん ビールを 買いましたね。きょうの パーティーは＿＿＿＿＿＿＿＿。 ……50人ぐらい 来ます。',
    jawaban:
      '1) いくら 買いましたか。 2) 何歳に なりましたか。 3) いつ 帰りますか。 4) どう なりますか。',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Perhatikan contoh, lalu tulis percakapan Anda sendiri.\n例1：どうして 遅れたんですか。……バスが なかなか 来なかったんです。\n例2：テレビを 見ませんか。……いいですよ。いつから 見ましょうか。',
    instruksi: 'Tulis percakapan Anda sendiri dengan pola ～んです / ～ていただけませんか.',
    kunciTersedia: false,
  },
]