import type { MondaiItem } from '@/types/bab'

// Bab 28 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = soal audio CD (問題 1-2 pada Honsatsu idx 42 / cetak 24).
// Mondai 3-7 = 問題 3-7 (tertulis, tanpa audio; 問題 7 = 読解).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab28_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab28_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Perhatikan gambar, lalu buat kalimat dengan ～ながら.\n例：アイスクリームを 食べながら 歩きます。\n1) ＿＿＿＿＿＿＿＿＿＿＿＿。\n2) ＿＿＿＿＿＿＿＿＿＿＿＿。\n3) ＿＿＿＿＿＿＿＿＿＿＿＿。\n4) ＿＿＿＿＿＿＿＿＿＿＿＿。',
    jawaban:
      '1) コーヒーを 飲みながら 新聞を 読みます。\n2) テレビを 見ながら ごはんを 食べます。\n3) 音楽を 聞きながら 勉強します。\n4) ラジオを 聞きながら ジョギングします。',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Isilah dengan kata yang tepat dari kotak.\n（起きます／買います／飲みます／食べます／歩きます／行きます／乗ります／泳ぎます／寝ます／ジョギングします）\n例：日曜日は いつも 9時ごろまで（寝て います）が、きょうは 用事が ありましたから、6時に（起きました）。\n1) 魚は いつも 近くの スーパーで（　　）が、きのうは 休みでしたから、ほかの 店へ（　　）。\n2) いつも 駅まで（　　）が、けさは 時間が ありませんでしたから、タクシーに（　　）\n3) 天気が いい 日は 毎朝（　　）が、雨の 日は プールで（　　）。\n4) 毎朝 パンを（　　）が、けさは コーヒーしか（　　）。',
    jawaban:
      '1) 買います／行きました\n2) 歩きます／乗りました\n3) ジョギングします／泳ぎます\n4) 食べます／飲みませんでした',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Isilah dengan kata sifat yang tepat dari kotak, lalu buat kalimat ～し.\n（おいしい／簡単／広い／軽い／優しい／安い／静か／頭が いい）\n例：あの レストランは（おいしい）し、（安い）し、それに サービスも いいです。\n1) この カメラは（　　）し、使い方も（　　）し、それに 安いです。\n2) わたしの マンションは（　　）し、（　　）し、それに 新しいです。\n3) 彼は（　　）し、（　　）し、それに 料理も 上手です。',
    jawaban:
      '1) 軽い／簡単\n2) 広い／静か\n3) 優しい／頭が いい',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'mencocokkan',
    soal:
      '問題 6 - Isilah dengan a/b/c/d yang tepat.\n（a. 学生に 人気が あります  b. ここに 引っ越ししたいです  c. きょうは 早く 帰ります  d. いつも この 店へ 来ます）\n例：コーヒーも おいしいし、サービスも いいし、（ d ）。\n1) 交通も 便利だし、静かだし、（　　）。\n2) 疲れたし、あしたは 早く 出かけなければ ならないし、（　　）。\n3) あの 先生は おもしろいし、熱心だし、（　　）。',
    jawaban: '1) b 2) c 3) a',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'mencocokkan',
    soal:
      '問題 7 - Bacalah pengumuman 「留学生パーティーの お知らせ」 berikut, lalu beri tanda (○) atau (×).\n\n日本の 学生と いっしょに パーティーを します。いろいろな 国の 料理を 食べながら 日本人と 友達に なりましょう。カラオケも あるし、ダンスも できるし、すてきな プレゼントも あります。皆さん、ぜひ 参加して ください。\n日にち 12月3日（土）午後 4時〜8時\n場所 さくら大学体育館\n※ パーティーは 無料です。\n\n1) (　　) この パーティーは 大学の 体育館で します。\n2) (　　) 参加する 人は お金を 払います。\n3) (　　) 日本料理を 作って、食べる パーティーです。\n4) (　　) カラオケや ダンスが できます。',
    jawaban: '1) ○ 2) × 3) × 4) ○',
    kunciTersedia: true,
    konteks: [
      {
        judul: '留学生パーティーの お知らせ',
        teks: '日本の学生といっしょにパーティーをします。いろいろな国の料理を食べながら日本人と友達になりましょう。カラオケもあるし、ダンスもできるし、すてきなプレゼントもあります。皆さん、ぜひ参加してください。\n日にち 12月3日（土）午後4時〜8時\n場所 さくら大学体育館\n※ パーティーは無料です。',
      },
    ],
  },
]
