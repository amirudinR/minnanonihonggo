/**
 * Partikel dasar — は / が / を dan varian partikel + は.
 * Partikel dasar & varian topik.
 *
 * Menambah partikel: tambahkan objek `Partikel` ke array di bawah.
 * INVARIAN (dijaga oleh `npm run validate:partikel`):
 *  - setiap `bab` WAJIB punya entri di `perBab`;
 *  - setiap `perBab[].bab` WAJIB ada di `bab[]`;
 *  - `bab[]` & `perBab[]` WAJIB terurut menaik.
 */

import type { Partikel } from '../tipe'

export const dasar: Partikel[] = [
  {
    bentuk: 'は',
    romaji: 'wa',
    fungsi: 'Penanda topik kalimat',
    penjelasan:
      'Partikel は menandai topik pembicaraan (yang dibicarakan). Ditulis は tetapi dibaca "wa". Topik yang sudah jelas dari konteks boleh dihilangkan.',
    contoh: [
      { jp: 'わたしは 学生です。', id: 'Saya (adalah) pelajar.' },
      { jp: 'これは 本です。', id: 'Ini buku.' },
    ],
    bab: [1, 8],
    kelompok: 'dasar',
    perBab: [
      {
        bab: 1,
        fungsi: 'Partikel topik',
        keterangan:
          'Partikel は menunjukkan bahwa kata sebelumnya adalah topik kalimat. Si pembicara memakai は untuk hal yang mau dibicarakannya, lalu menambahkan keterangan (penjelasan) tentang topik itu. [Perhatian] Partikel は dibaca wa.',
        contoh: [
          { jp: 'わたしは マイク・ミラーです。', id: 'Saya Mike Miller.' },
          { jp: 'わたしは 会社員です。', id: 'Saya pegawai perusahaan.' },
        ],
      },
      {
        bab: 8,
        fungsi: 'Topik pada kalimat kata sifat (KB は Kata Sifat)',
        keterangan:
          'Pola 「Kata Benda は Kata Sifat」 dipakai untuk menyatakan kondisi Kata Benda. は di sini menandai topik yang sedang dibicarakan, lalu Kata Sifat menjadi predikatnya (mis. ワット先生は 親切です).',
        contoh: [
          { jp: 'ワット先生は 親切です。', id: 'Bapak Watt baik hati.' },
          { jp: '富士山は 高いです。', id: 'Gunung Fuji tinggi.' },
        ],
      },
    ],
  },
  {
    bentuk: 'が',
    romaji: 'ga',
    fungsi: 'Penanda subjek',
    penjelasan:
      'Partikel が menandai subjek (pelaku), terutama untuk menonjolkan subjek yang belum diketahui (mis. jawaban atas だれ／なに). Bila subjek sudah menjadi topik, biasanya diganti は.',
    contoh: [
      { jp: 'だれが 来ますか。……ミラーさんが 来ます。', id: 'Siapa yang datang? ……Sdr. Miller yang datang.' },
      { jp: '部屋に 机が あります。', id: 'Di kamar ada meja.' },
    ],
    bab: [1, 8, 9, 10, 14, 20, 22, 23, 24, 25],
    kelompok: 'dasar',
    perBab: [
      {
        bab: 1,
        fungsi: 'Penanda subjek pada kalimat tanya',
        keterangan:
          'Partikel が menandai subjek, dipakai antara lain pada kalimat tanya だれ／どなた＋が (mis. あの 方は どなたですか). Subjek ditandai が ketika menanyakan/menegaskan siapa pelakunya, sedangkan は dipakai untuk topik yang sudah jelas.',
        contoh: [
          { jp: 'あの 方は どなたですか。', id: 'Siapakah orang itu?' },
        ],
      },
      {
        bab: 8,
        fungsi: 'Pertentangan paradoks (～が、～)',
        keterangan:
          'が menyambungkan kalimat yang menyatakan sebelum dan sesudah secara paradoksal. Dalam kalimat adjektival yang subjeknya sama, hal bernilai positif diletakkan di bagian depan, maka hal negatif di bagian belakangnya; sebaliknya, hal negatif diletakkan di bagian depan, maka hal positif di bagian belakangnya.',
        contoh: [
          { jp: '日本の 食べ物は おいしいですが、高いです。', id: 'Makanan Jepang enak, tetapi mahal.' },
        ],
      },
      {
        bab: 9,
        fungsi: 'Objek pada 好き／上手／わかります',
        keterangan:
          'Sebagian Kata Kerja atau Kata Sifat menunjukkan objek dengan partikel が (Kata Benda が あります／わかります；Kata Benda が 好きです／嫌いです／上手です／下手です).',
        contoh: [
          { jp: 'わたしは イタリア料理が 好きです。', id: 'Saya suka masakan Italia.' },
          { jp: 'わたしは 日本語が わかります。', id: 'Saya mengerti bahasa Jepang.' },
        ],
      },
      {
        bab: 10,
        fungsi: 'Subjek dalam keberadaan (あります／います)',
        keterangan:
          'あります dan います menyatakan keberadaan benda atau orang. Karena kalimat ini menggambarkan secara langsung keberadaan benda/orang, Kata Benda dibubuhkan partikel が (コンピューターが あります／男の 人が います).',
        contoh: [
          { jp: 'コンピューターが あります。', id: 'Ada komputer.' },
          { jp: '男の 人が います。', id: 'Ada orang laki-laki.' },
        ],
      },
      {
        bab: 14,
        fungsi: 'Subjek kejadian alam / objektif',
        keterangan:
          'Jika menyatakan suatu kejadian alam yang dirasakan dengan panca indera (mata, telinga dan lain-lain), atau menyampaikan peristiwa secara objektivitas, partikel が dipakai untuk subjek.',
        contoh: [
          { jp: '雨が 降って います。', id: 'Hujan turun.' },
          { jp: 'ミラーさんが いませんね。', id: 'Sdr. Miller tidak ada ya.' },
        ],
      },
      {
        bab: 20,
        fungsi: 'Partikel yang dihilangkan (bentuk biasa)',
        keterangan:
          'Dalam kalimat bentuk biasa, jika sudah dapat memahami hubungan dari konteks sebelum dan sesudahnya, partikel penutup を・へ・は・が adakalanya dihilangkan. Akan tetapi, partikel で、に、から、まで、と dan sebagainya tidak dihilangkan sebab konteksnya menjadi tidak jelas.',
        contoh: [
          { jp: 'ごはん[を] 食べる？', id: 'Mau makan?' },
          { jp: 'そこに はさみ[が] ある？', id: 'Di situ ada gunting?' },
        ],
      },
      {
        bab: 22,
        fungsi: 'Subjek di dalam anak kalimat',
        keterangan:
          'Subjek di dalam anak kalimat ditunjukan dengan partikel が.',
        contoh: [
          { jp: 'これは ミラーさんが 作った ケーキです。', id: 'Ini adalah kue yang dibuat oleh Sdr. Miller.' },
          { jp: 'これは ミラーさんが 住んでいた うちです。', id: 'Ini adalah rumah yang dihuni Sdr. Miller.' },
        ],
      },
      {
        bab: 23,
        fungsi: 'Subjek kalimat adjektival (objektif)',
        keterangan:
          'Partikel が menyatakan fenomena yang dirasakan pancaindera secara langsung, atau menyampaikan peristiwa secara objektivitas. Hal ini tidak sebatas kalimat verbal, adakalanya juga dipakai untuk kalimat adjektival.',
        contoh: [{ jp: '音が 小さいです。', id: 'Suaranya kecil.' }],
      },
      {
        bab: 24,
        fungsi: 'Subjek kalimat penjawab (「KB が くれました」)',
        keterangan:
          'Pada kalimat penjawab 「Kata Benda が くれました」, Kata Benda yang menjadi topik dapat dihilangkan karena sudah dipahami. Dalam kalimat ini orang yang memberi menjadi subjek maka dipakai が.',
        contoh: [{ jp: 'おいしい ワインですね。……ええ、[この ワインは] 佐藤さんが くれました。', id: 'Anggur yang enak ya. ……Ya, [anggur ini] Sdr. Sato yang berikan.' }],
      },
      {
        bab: 25,
        fungsi: 'Subjek anak kalimat syarat (たら／ても)',
        keterangan:
          'Sama halnya dengan ～てから, ～とき atau ～まえに, untuk ～たら dan ～ても subjek dalam anak kalimat ditunjuk dengan が.',
        contoh: [
          { jp: '友達が 約束の 時間に 来なかったら、どう しますか。', id: 'Kalau teman tidak datang pada waktu janji, bagaimana?' },
          { jp: '友達が 来る まえに、部屋を 掃除します。', id: 'Sebelum teman datang, membersihkan kamar.' },
        ],
      },
    ],
  },
  {
    bentuk: 'を',
    romaji: 'o',
    fungsi: 'Penanda objek langsung',
    penjelasan:
      'Partikel を menandai objek langsung (sasaran) kata kerja transitif. Ditulis を, dibaca "o". Juga dipakai bersama kata kerja gerak untuk menandai tempat yang dilalui atau ditinggalkan (mis. 公園を 散歩します — berjalan-jalan melewati taman; 家を 出ます — keluar dari rumah).',
    contoh: [
      { jp: 'ご飯を 食べます。', id: 'Makan nasi.' },
      { jp: '毎日 日本語を 勉強します。', id: 'Setiap hari belajar bahasa Jepang.' },
      { jp: '公園を 散歩します。', id: 'Berjalan-jalan (melewati) taman.' },
    ],
    bab: [6, 7, 16, 17, 23],
    kelompok: 'dasar',
    perBab: [
      {
        bab: 6,
        fungsi: 'Objek Kata Kerja Transitif',
        keterangan:
          'Objek dari Kata Kerja Transitif ditunjukkan oleh partikel を. [Perhatian] を hanya dipakai untuk menulis partikel saja. します juga disertai Kata Benda sebagai objek (サッカーを します, 仕事を します, 電話を します).',
        contoh: [
          { jp: 'ジュースを 飲みます。', id: 'Minum jus.' },
          { jp: '毎日 日本語を 勉強します。', id: 'Setiap hari belajar bahasa Jepang.' },
        ],
      },
      {
        bab: 7,
        fungsi: 'Objek pada KK memberi/menerima',
        keterangan:
          'Pada pola あげます／もらいます dan lain-lain, Kata Benda₂ (barang) ditandai partikel を sebagai objek, sedangkan orang yang diberi/diberikan ditandai に.',
        contoh: [
          { jp: '[わたしは] 木村さんに 花を あげました。', id: 'Saya memberikan Sdr. Kimura bunga.' },
          { jp: '[わたしは] 山田さんに 花を もらいました。', id: 'Saya mendapatkan bunga dari Sdr. Yamada.' },
        ],
      },
      {
        bab: 16,
        fungsi: 'Titik awal / keberangkatan',
        keterangan:
          'Kata Kerja でます, おります dan lain-lainnya digunakan bersama dengan partikel を。を ini menunjukkan titik awal atau titik keberangkatan.',
        contoh: [
          { jp: '7時に うちを 出ます。', id: 'Pada pukul tujuh keluar dari rumah.' },
          { jp: '梅田で 電車を 降りました。', id: 'Turun kereta rel listrik di Umeda.' },
        ],
      },
      {
        bab: 17,
        fungsi: 'Naik ke topik (を → は)',
        keterangan:
          'Jika menyatakan dengan objek langsung sebagai topik, maka partikel を dihilangkan kemudian membubuhkan partikel は, lalu diletakkan paling di depan dalam kalimat.',
        contoh: [
          { jp: '荷物は ここに 置かないで ください。', id: 'Barangnya jangan diletakkan di sini.' },
          { jp: '昼ごはんは 会社の 食堂で 食べます。', id: 'Makan siangnya makan di kantin perusahaan.' },
        ],
      },
      {
        bab: 23,
        fungsi: 'Tempat yang dilewati (gerakan berpindah)',
        keterangan:
          'を yang digunakan bersama Kata Kerja yang menunjukkan gerakan berpindah seperti さんぽします, わたります, あるきます dan lain-lainnya menunjukkan tempat yang dilewati orang atau benda.',
        contoh: [
          { jp: '公園を 散歩します。', id: 'Berjalan-jalan di taman.' },
          { jp: '道を 渡ります。', id: 'Menyeberangi jalan.' },
        ],
      },
    ],
  },
  {
    bentuk: 'では / には / とは',
    romaji: 'de wa / ni wa / to wa',
    fungsi: 'Partikel + は (topik)',
    penjelasan:
      'は dapat menempel pada partikel lain untuk menjadikannya topik: では (di/untuk…), には (di/pada…), とは (dengan/mengenai…). では juga sering dibaca "ja" dalam percakapan (じゃありません).',
    contoh: [
      { jp: '学校では 日本語を 勉強します。', id: 'Di sekolah (topik) belajar bahasa Jepang.' },
      { jp: '日本では 桜が きれいです。', id: 'Di Jepang, sakuranya indah.' },
    ],
    bab: [1, 3],
    kelompok: 'dasar',
    perBab: [
      {
        bab: 1,
        fungsi: 'Partikel + は (topik)',
        keterangan:
          'は dapat menempel pada partikel lain untuk menjadikannya topik: では (di/untuk…), には (di/pada…), とは (dengan/mengenai…). では juga sering dibaca "ja" (じゃありません).',
        contoh: [{ jp: '学校では 日本語を 勉強します。', id: 'Di sekolah (topik) belajar bahasa Jepang.' }],
      },
      {
        bab: 3,
        fungsi: 'Partikel + は (tempat)',
        keterangan:
          'は menempel pada penanda tempat (では／には) untuk menjadikan tempat sebagai topik kalimat (日本では 桜が きれいです).',
        contoh: [{ jp: '日本では 桜が きれいです。', id: 'Di Jepang, sakuranya indah.' }],
      },
    ],
  },
]
