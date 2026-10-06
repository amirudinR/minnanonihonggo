import type { MondaiItem } from '@/types/bab'

// Bab 30 punya 2 track mondai (lihat src/core/audio/manifest.ts).
// Mondai 1-2 = 問題 1-2 (mendengarkan; ikon telinga pada Honsatsu idx 58, cetak 40).
// Mondai 3-8 = 問題 3-8 (tertulis; Honsatsu idx 58-59, cetak 40-41).
// Catatan: cetakan MNN2 tidak mencantumkan kunci jawaban untuk 問題 1-8, sehingga
// `jawaban` pada soal tertulis disusun dari kaidah bab ini (deterministik).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________\n5) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab30_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu beri tanda (○) atau (×) pada pernyataan 1)-5).\n1) (　　)  2) (　　)  3) (　　)  4) (　　)  5) (　　)',
    instruksi:
      'Putar audio, lalu tentukan pernyataan mana yang sesuai dengan audio. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab30_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Perhatikan contoh, lalu jawab dengan bentuk ～てあります.\n例: 人形は どこですか。→ 本棚の 上に 飾って あります。\n1) テーブルの 上に 何が 置いて ありますか。\n2) ドアに 何が はって ありますか。\n3) カレンダーは どこに 掛けて ありますか。\n4) ごみ箱は どこですか。',
    jawaban:
      '1) 植物が 置いて あります。 2) 地図が はって あります。 3) 壁の 上に 掛けて あります。 4) ドアの そばの すみ（隅）に 置いて あります。',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'pilihan_ganda',
    soal:
      '問題 4 - Pilih kata dari kotak.\n例: 旅行の 予定は もう（ 連絡して ）あります。\n1) パーティーの 飲物は もう（　　　　　　）あります。\n2) 会議の 資料は もう（　　　　　　）あります。\n3) 家賃は もう（　　　　　　）あります。\n4) ホテルは もう（　　　　　　）あります。',
    pilihan: ['予約します', 'コピーします', '連絡します', '払います', '買います'],
    jawaban: '1) 予約して 2) コピーして 3) 払って 4) 予約して',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'pilihan_ganda',
    soal:
      '問題 5 - Pilih kata dari kotak.\n例: 旅行の まえに、フィルムを（ 買って ）おきます。\n1) 検索の まえに、（　　　　　　）おきます。\n2) 試験までに この 本を よく（　　　　　　）おきます。\n3) 山に 登る まえに、地図を（　　　　　　）おきます。\n4) 食事が 終わったら、台所を（　　　　　　）おきます。',
    pilihan: ['読みます', '見ます', '片づけます', '予約します', '買います'],
    jawaban: '1) 予約して 2) 読んで 3) 買って 4) 片づけて',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Perhatikan contoh, lalu tuliskan kalimat kedua dengan ～ておいて ください.\n例: テレビを 消しましょうか。……すみません。まだ 見て いますから、つけて おいて ください。\n1) 道具を 片づけましょうか。……すみません。まだ 使って いますから、そのままに ________。\n2) 野菜を 冷蔵庫に しまいましょうか。……洗ってから、しまいますから、そこに ________。\n3) 窓を 閉めても いいですか。……すみません。暑いですから、________。\n4) ラジオを 消しても いいですか。……ニュースの 時間ですから、________。',
    jawaban: '1) して おいて ください 2) 入れて おいて ください 3) 開けて おいて ください 4) つけて おいて ください',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'pilihan_ganda',
    soal:
      '問題 7 - Pilih bentuk yang tepat dari kotak.\n例: 壁に 鏡が 掛けて（います、あります、おきます）。（おきます）\n1) 部屋の 電気が 消えて（います、あります、おきます）から、田中さんは もう 寝たと 思います。\n2) 窓が 閉めて（いませんでした、ありませんでした、おきませんでした）よ。出かける ときは、閉めて ください。\n3) お花見の 日は みんなで 相談して（いて、あって、おいて）ください。\n4) はさみは どこですか。……引き出しに 入れて（います、あります、おきます）。',
    pilihan: ['います', 'あります', 'おきます', 'いませんでした', 'ありませんでした', 'おきませんでした', 'いて', 'あって', 'おいて'],
    jawaban: '1) います 2) いませんでした 3) おいて 4) あります',
    kunciTersedia: true,
  },
  {
    no: 8,
    jenis: 'mencocokkan',
    soal:
      '問題 8 - Baca teks 「夢で見た うち」 lalu beri tanda (○) atau (×).\n■ 夢で 見た うち\nわたしの 部屋の 壁に 丸くて、青い 月の 写真が はって あります。いつも ベッドに 入る まえに、写真を 見ます。ある 晩 夢を 見ました。わたしは 広い 部屋に いました。窓の 外に 地球が 見えました。「ここは 月の うちだ」と 思いました。うれしかったです。でも、よく 見ると、壁には 何も 掛けて ありません。テーブルや いすも ありません。何も 飾って ありません。わたしは「こんな うちは 嫌だ」と 大きい 声で 言いました。すると、目が 覚めました。わたしの 部屋には ベッドや 机が 置いて あります。壁に カレンダーも 掛けて あります。本棚に 好きな 本が いろいろ 並べて あります。夢で 見た うちより いいと 思いました。\n1) (　　) この 人の 部屋の 壁に 地球の 写真が はって あります。\n2) (　　) 月の うちの 部屋には 何も 置いて ありませんでした。\n3) (　　) この 人は 月の うちに 住みたいと 思いました。',
    jawaban: '1) × 2) ○ 3) ×',
    kunciTersedia: true,
  },
]