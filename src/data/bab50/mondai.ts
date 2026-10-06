import type { MondaiItem } from '@/types/bab'

// Bab 50 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = soal audio CD (問題 1-2 pada Honsatsu idx 226 / cetak 208).
// Mondai 3-6 = 問題 3-6 (tertulis, tanpa audio; 問題 6 = 読解「お礼の 手紙」).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________\n5) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab50_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab50_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Isilah dengan bentuk 謙譲語 yang tepat dari kotak.\n（案内します／送ります／紹介します／取り替えます／持ちます／連絡します）\n例1：お荷物、重そうですね。（お持ち）しましょう。\n例2：あしたは 京都を（ご案内）します。\n1) （　　）します。こちらは IMCの マイク・ミラーさんです。\n2) サイズが 合わない 場合は、（　　）ます。\n3) 車で 空港まで（　　）ます。\n4) 課長には 私が パーティーの 時間と 場所を（　　）ます。',
    jawaban:
      '1) ご紹介します\n2) お取り替えします\n3) お送りします\n4) お知らせします（ご連絡します）',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Isilah dengan bentuk yang tepat.\n例：いつ 東京へ いらっしゃいますか。……来週 参ります。\n1) あしたは お宅に いらっしゃいますか。……いいえ、＿＿＿＿＿＿。\n2) シュミットさんが ドイツへ 帰られたのを ご存じですか。\n……いいえ、＿＿＿＿＿＿。\n3) 何を 召し上がりますか。……サンドイッチを ＿＿＿＿＿＿。\n4) 来週は どなたが 発表なさいますか。……私が ＿＿＿＿＿＿。',
    jawaban:
      '1) 参りません\n2) 存じません\n3) いただきます\n4) いたします',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Perhatikan contoh, isilah dengan bentuk yang tepat (percakapan telepon).\n例：A：はい、IMCで ございます。\nB：田中と（申します）が、ミラーさんは（いらっしゃいます）か。\nA：ミラーは ただ今 出かけて（おります）が……。\nB：何時ごろ（戻ります）か。\nA：3時ごろ 戻ります。\nB：じゃ、3時ごろ もう 一度（電話します）。',
    jawaban:
      '「申します」／「いらっしゃいます」／「おります」／「戻ります」／「お電話します（電話いたします）」',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'mencocokkan',
    soal:
      '問題 6 - Bacalah teks 「お礼の 手紙」 berikut, lalu beri tanda (○) atau (×).\n\n［拝啓］\n今 ドイツは いろいろな 花が 咲いて、美しい 季節です。お元気で いらっしゃいますか。\n日本では ほんとうに お世話に なり、ありがとう ございました。日本での 2年は とても 速く 過ぎました。日本へ 行った ばかりの とき、わからない ことや 慣れない ことが 多くて、皆様に ご迷惑を おかけしましたが、ほんとうに 親切に して いただきました。おかげさまで 楽しく 仕事が できました。\nミュンヘンでは 日本の 経験を 生かして、新しい 仕事に チャレンジしたいと 思って おります。\nこちらには 有名な 美術館や 古い お城が あります。ぜひ 一度 いらっしゃって ください。森さんが お好きな ビールを ご用意して お待ちして おります。\nでは、また お会いできる 日を 楽しみに して おります。皆様にも どうぞ よろしく お伝え ください。\n　　　　　　　　　　　　　　　敬具\n　　　　　　　　　　　　　　　5月30日\n　　　　　　　　　　　　　　　　　　カール・シュミット\n森 正夫様\n\n1) (　　) これは シュミットさんが 日本で 書いた 手紙です。\n2) (　　) シュミットさんは 2年まえに ドイツへ 帰りました。\n3) (　　) シュミットさんは これから ミュンヘンで 仕事を します。\n4) (　　) シュミットさんは 森さんに また 会える 日を 楽しみに して います。',
    jawaban: '1) × 2) × 3) ○ 4) ○',
    kunciTersedia: true,
    konteks: [
      {
        judul: 'お礼の 手紙',
        teks: '［拝啓］\n今ドイツはいろいろな花が咲いて、美しい季節です。お元気でいらっしゃいますか。\n日本ではほんとうにお世話になり、ありがとうございました。日本での2年はとても速く過ぎました。日本へ行ったばかりのとき、わからないことや慣れないことが多くて、皆様にご迷惑をおかけしましたが、ほんとうに親切にしていただきました。おかげさまで楽しく仕事ができました。\nミュンヘンでは日本の経験を生かして、新しい仕事にチャレンジしたいと思っております。\nこちらには有名な美術館や古いお城があります。ぜひ一度いらっしゃってください。森さんがお好きなビールをご用意してお待ちしております。\nでは、またお会いできる日を楽しみにしております。皆様にもどうぞよろしくお伝えください。\n　　　　　　　　　　　　　　　敬具\n　　　　　　　　　　　　　　　5月30日\n　　　　　　　　　　　　　　　　　　カール・シュミット\n森正夫様',
      },
    ],
  },
]
