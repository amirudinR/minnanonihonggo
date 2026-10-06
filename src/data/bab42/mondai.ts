import type { MondaiItem } from '@/types/bab'

// Bab 42 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan, icon telinga pada Honsatsu idx 160).
// Mondai 3-7 = 問題 3-7 (tertulis; Honsatsu idx 160-161, cetak 142-143).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________\n5) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab42_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab42_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'pilihan_ganda',
    soal:
      '問題 3 - Pilih kata yang tepat dari kotak.\n例１：うちを（建てる）ために、貯金して います。\n例２：（健康の）ために、毎晩 早く 寝るように して います。\n1) 漢字を（　　　　　　）ために、本を たくさん 読みます。\n2) 音楽家に（　　　　　　）ために、ドイツへ 留学します。\n3) 世界の（　　　　　　）ために、いろいろな 会議が 行われて います。\n4) 父は（　　　　　　）ために、40年も 働きました。',
    pilihan: ['健康', '平和', '家族', '建てます', 'なります', '覚えます'],
    jawaban: '1) 覚えます 2) なります 3) 平和 4) 家族',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Perhatikan contoh, lalu tulis jawaban seperti 例 dengan gambar yang tersedia.\n例：瓶の ふたを 開けます → 栓抜きは 瓶の ふたを 開けるのに 使います。\n1) 電車の 時間を 調べます →\n2) 電話を かけます →\n3) 資料を 入れます →\n4) お湯を 沸かします →',
    jawaban:
      '1) 時刻表は 電車の 時間を 調べるのに 使います。 2) テレホンカードは 電話を かけるのに 使います。 3) ファイルは 資料を 入れるのに 使います。 4) やかんは お湯を 沸かすのに 使います。',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'pilihan_ganda',
    soal:
      '問題 5 - Pilih kata dari kotak.\n例：パソコンは（仕事に）必要です。\n1) テープレコーダーは 外国語の（　　　　　　）役に 立ちます。\n2) この ワインは（　　　　　　）使います。\n3) この 箱は 書類の（　　　　　　）いいです。\n4) 小さい 傘は（　　　　　　）便利です。',
    pilihan: ['旅行', '整理', '仕事', '勉強', '料理'],
    jawaban: '1) 勉強 2) 料理 3) 整理 4) 旅行',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'pilihan_ganda',
    soal:
      '問題 6 - Pilih ように atau ために.\n例：あしたまでに 届く（ように）、速達で 出して ください。\n1) 引っ越しの 荷物を 運ぶ（　　　　）、大きい 車を 借りました。\n2) 電話番号を 忘れない（　　　　）、メモして おいて ください。\n3) 5時に 帰れる（　　　　）、急いで 仕事を します。\n4) 冬休みに スキーに 行く（　　　　）、アルバイトを して います。',
    pilihan: ['ように', 'ために'],
    jawaban: '1) ために 2) ように 3) ように 4) ために',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Baca paragraf カップラーメンの 話, lalu beri tanda (○) atau (×).\n1) (　　) 安藤さんは カップラーメンを 輸出する ために、アメリカへ 行きました。\n2) (　　) カップラーメンは ある アメリカ人が 考えて 作りました。\n3) (　　) カップラーメンは なべが なくても、作れます。\n4) (　　) カップラーメンは 食べたら、カップを 捨てます。',
    jawaban: '1) × 2) × 3) ○ 4) ○',
    kunciTersedia: true,
  },
]
