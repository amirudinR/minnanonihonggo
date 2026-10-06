import type { MondaiItem } from '@/types/bab'

// Bab 47 — 問題 1-5. Honsatsu 第47課 idx 202-203 (cetak 184-185).
// Bab 47 punya 2 track audio (src/core/audio/manifest.ts + public/audio):
// bab47_mondai1.mp3 = 問題 1, bab47_mondai2.mp3 = 問題 2 (keduanya bertanda telinga).
// 問題 3-5 =ritten, tidak ada audio → kunciTersedia tetap true.
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab47_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab47_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Lengkapi bagian kosong dengan bentuk yang tepat dari kata dalam kotak.\n例: 母の 手紙に よると、うちの 犬が （死んだ）そうです。\n〔かわいです／生まれました／にぎやかです／死にました／男の 子です／遅れいます〕\n1) 祇園祭を 見た ことが ありますか。\n　…いいえ、ありませんが、とても （　　　　　）そうですね。\n2) さっき 田中さんから 電話が ありました。\n　電車の 事故で 30分ぐらい （　　　　　）そうです。\n3) 木村さんに 赤ちゃんが （　　　　　）そうです。\n　…それは よかったですね。どちらですか。\n　（　　　　　）そうです。とても （　　　　　）そうですよ。',
    jawaban:
      '1) にぎやか 2) 遅れ 3) 生まれ／男の 子／にぎやか （例）死にました',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Ubah bagian dalam kurung menjadi bentuk ictionary (い-形／な-形), lalu lengkapi kalimat.\n例: 外は 雪が 降っていて、（寒いです→ 寒）そうです。\n　天気予報に よると、あしたも （寒いです→ 寒い）そうです。\n1) カタログで 見ると、新しい 掃除機は （いいです→　　　）そうですが、使った 人の 話に よると、あまり （便利じゃ ありません→　　　）そうです。\n2) シュミットさんは 写真で 見ると、（怖い→　　　）そうですが、話して みると、とても （優しい 人です→　　　）そうです。\n3) 彼は 大きい 家が あって、（幸せです→　　　）そうですが、実は 仕事が うまく いかなくて、（困って います→　　　）そうです。',
    jawaban: '1) いい／便利 2) 怖い／優しい 3) 幸せ／困って （例）寒／寒い',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Perhatikan contoh, lalu pilih kata dari kotak yang tepat untuk melengkapi kalimat.\n例: 交差点に 人が 集まって います。事故が （あった）ようです。\n〔います／あります／来ます／古いです／カレーです／遅れます〕\n1) 事務所の 電気が 消えて います。だれも （　　）ようです。\n2) 玄関で 人の 声が しました。だれか （　　）ようです。\n3) いい においが します。きょうの 晩ごはんは （　　）ようです。\n4) この 牛乳は ちょっと 変な 味が します。（　　）ようです。',
    jawaban: '1) 消えて 2) います 3) カレー 4) 変 （例）あった',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Baca teks 長生きする ために berikut, lalu beri tanda (○) atau (×) pada pernyataan 1)-4).\n【長生きする ために】1996年の 日本人の 平均寿命は 女性が 83.59歳、男性が 77.01歳だそうです。男性と 比べて 女性の ほうが 6年以上も 長生きするのは どうしてでしょうか。ある 博士に よると、女性は 年を 取っても、明るい 色の 服を 着るので、脳が よく 働いて、ホルモンが 出るからだそうです。また、ある 化粧品会社の 調べに よると、女性は 化粧を している ときと していない ときでは、ずいぶん 変わるそうです。化粧を すると、声が 高く、大きく なり、相手の 目を よく 見て 話すように なるそうです。化粧は 人を 元気に するのです。男性も 長生きする ために、明るい 色の 服を 着て、化粧を してみたら、どうでしょう。\n1) (　　) 男性は 女性より 長生きします。\n2) (　　) 明るい 色の 服を 着ると、長生きできるようです。\n3) (　　) 女性は 化粧を すると、元気に なります。\n4) (　　) この 人は 男性も 化粧を した ほうが いいと 思っています。',
    jawaban: '1) × 2) ○ 3) ○ 4) ○',
    kunciTersedia: true,
  },
]
