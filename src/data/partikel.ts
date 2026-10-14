/**
 * Referensi partikel (助詞) — daftar statis untuk halaman /partikel.
 * Dipakai sebagai ringkasan belajar + sumber soal ujian.
 *
 * Aturan penulisan:
 * - `jp` = kalimat Jepang apa adanya (furigana tidak ditampilkan di sini).
 * - `id` = terjemahan Indonesia yang wajar.
 * - `bab` = nomor pelajaran MNN (I & II) tempat partikel ini diperkenalkan/dibahas.
 *   Diambil dari pemetaan pola bunpou tiap bab; bersifat "lihat bab" bukan hak paten.
 */

export interface ContohPartikel {
  /** kalimat Jepang */
  jp: string
  /** terjemahan Indonesia */
  id: string
}

/**
 * Fungsi/keterangan partikel pada satu bab tertentu.
 * Diturunkan dari materi bunpou bab bersangkutan (pola 文型 / catatan tata bahasa),
 * bukan teks baru yang dikarang. Lihat `perBab` di tiap partikel.
 */
export interface FungsiBab {
  /** nomor bab (harus anggota `bab` partikel ini) */
  bab: number
  /** fungsi singkat pada bab ini (judul panel) */
  fungsi: string
  /** keterangan lengkap pada bab ini (kalimat penjelas, bukan potongan 1 baris) */
  keterangan: string
  /** contoh khas bab ini (opsional; bila kosong pakai contoh global) */
  contoh?: ContohPartikel[]
}

export type KelompokPartikel =
  | 'dasar'
  | 'tempat-arah'
  | 'waktu'
  | 'penghubung'
  | 'akhir'
  | 'lanjutan'

export interface Partikel {
  /** bentuk partikel, mis. "は" */
  bentuk: string
  /** romaji, mis. "wa" */
  romaji: string
  /** fungsi singkat (judul kartu) */
  fungsi: string
  /** penjelasan detail (Indonesia) */
  penjelasan: string
  /** contoh pemakaian */
  contoh: ContohPartikel[]
  /** nomor bab MNN terkait */
  bab: number[]
  /** kelompok untuk filter */
  kelompok: KelompokPartikel
  /**
   * Keterangan partikel per bab. Bila diisi, kartu menampilkan keterangan
   * spesifik bab tsb (di samping keterangan global `penjelasan`).
   * Setiap `bab` di sini WAJIB anggota `bab` di atas.
   */
  perBab?: FungsiBab[]
}

export const partikel: Partikel[] = [
  {
    bentuk: 'は',
    romaji: 'wa',
    fungsi: 'Penanda topik kalimat',
    penjelasan:
      'は menandai topik pembicaraan (yang dibicarakan), bukan selalu subjek. Ditulis は tetapi dibaca "wa". Topik yang sudah jelas dari konteks boleh dihilangkan. Ketika は menempel pada kata lain yang sudah berpartikel (mis. では, には, とは), partikel asal bisa tetap terlihat.',
    contoh: [
      { jp: 'わたしは 学生です。', id: 'Saya (adalah) pelajar.' },
      { jp: 'これは 本です。', id: 'Ini buku.' },
      { jp: 'あの 人は 先生じゃ ありません。', id: 'Orang itu bukan guru.' },
    ],
    bab: [1],
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
    ],
  },
  {
    bentuk: 'が',
    romaji: 'ga',
    fungsi: 'Penanda subjek / penekanan',
    penjelasan:
      'が menandai subjek (pelaku). Dipakai untuk menonjolkan subjek yang belum diketahui — terutama jawaban atas だれ／なに — serta pada pola keberadaan あります／います, 好き／上手 (dengan が), dan anak kalimat. Bila subjek sudah menjadi topik, biasanya diganti は.',
    contoh: [
      { jp: 'だれが 来ますか。……ミラーさんが 来ます。', id: 'Siapa yang datang? ……Sdr. Miller yang datang.' },
      { jp: '部屋に 机が あります。', id: 'Di kamar ada meja.' },
      { jp: 'わたしは 日本語が わかります。', id: 'Saya mengerti bahasa Jepang.' },
    ],
    bab: [1, 9, 10, 14, 20],
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
      'を menandai objek langsung (sasaran) kata kerja transitif. Ditulis を, dibaca "o". Juga dipakai bersama kata kerja gerak untuk menandai tempat yang dilalui/ditinggalkan (mis. 公園を 散歩します — berjalan-jalan melewati taman; 家を 出ます — keluar dari rumah). Pada bab 17 ada pola menaikkan objek ke topik (を → は).',
    contoh: [
      { jp: 'ご飯を 食べます。', id: 'Makan nasi.' },
      { jp: '毎日 日本語を 勉強します。', id: 'Setiap hari belajar bahasa Jepang.' },
      { jp: '公園を 散歩します。', id: 'Berjalan-jalan (melewati) taman.' },
    ],
    bab: [6, 7, 17, 23],
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
    bentuk: 'に',
    romaji: 'ni',
    fungsi: 'Waktu / tempat ada / tujuan / penerima',
    penjelasan:
      'に punya banyak fungsi: (1) titik waktu (jam/tanggal: 6時に), (2) tempat keberadaan (あります／います: 駅に), (3) arah tujuan perpindahan (行きます: 日本に), (4) sasaran penerima (あげます／もらいます), (5) tujuan perpindahan gerak (mis. 買い物に行きます).',
    contoh: [
      { jp: '毎朝 6時に 起きます。', id: 'Setiap pagi bangun jam 6.' },
      { jp: '駅に います。', id: 'Berada di stasiun.' },
      { jp: '日本に 行きます。', id: 'Pergi ke Jepang.' },
      { jp: 'ミラーさんに 本を あげました。', id: 'Memberi buku kepada Sdr. Miller.' },
    ],
    bab: [4, 7, 10, 13, 15, 19, 21, 24],
    kelompok: 'tempat-arah',
    perBab: [
      {
        bab: 4,
        fungsi: 'Titik waktu',
        keterangan:
          'Setelah Kata Benda yang menunjukkan waktu, dibubuhkan partikel に untuk menyatakan waktu ketika melakukan sesuatu. Kata Benda waktu seperti きょう・あした・きのう・いま・まいにち tidak dibubuhkan に.',
        contoh: [{ jp: '毎朝 6時に 起きます。', id: 'Setiap pagi bangun jam 6.' }],
      },
      {
        bab: 7,
        fungsi: 'Penerima / pemberi (に)',
        keterangan:
          'Kata Kerja あげます, かします, おしえます menunjukkan memberi barang/informasi dan memerlukan lawan yang diberi → Kata Benda (orang) dibubuhkan partikel に. Sebaliknya もらいます, かります, ならいます menerima → orang yang memberikan juga dibubuhkan に. [Perhatian] Untuk pola ini から dapat menggantikan に, terutama bila lawannya organisasi (mis. 銀行から お金を 借りました).',
        contoh: [
          { jp: '[わたしは] 木村さんに 花を あげました。', id: 'Saya memberikan Sdr. Kimura bunga.' },
          { jp: '[わたしは] 山田さんに 花を もらいました。', id: 'Saya mendapatkan bunga dari Sdr. Yamada.' },
        ],
      },
      {
        bab: 10,
        fungsi: 'Tempat keberadaan',
        keterangan:
          'Untuk menyatakan keberadaan benda atau orang di suatu tempat, tempatnya dinyatakan dengan partikel に (mis. わたしの 部屋に 机が あります / 事務所に ミラーさんが います). Pada pola 「Kata Benda は tempat に あります／います」 Kata Benda di depan は adalah topik.',
        contoh: [
          { jp: 'わたしの 部屋に 机が あります。', id: 'Di kamar saya ada meja.' },
          { jp: '事務所に ミラーさんが います。', id: 'Di kantor ada Sdr. Miller.' },
        ],
      },
      {
        bab: 13,
        fungsi: 'Tujuan aksi (へ に)',
        keterangan:
          'Objek untuk aksi dari いきます, きます, かえります ditunjuk dengan に (mis. 神戸へ 買い物に 行きます). Untuk ～ます (かいものします, べんきょうします) dipakai bentuk Kata Benda に いきます／きます／かえります.',
        contoh: [
          { jp: '神戸へ 買い物に 行きます。', id: 'Pergi ke Kobe untuk belanja.' },
          { jp: '日本へ 美術の 勉強に 来ました。', id: 'Datang ke Jepang untuk belajar seni.' },
        ],
      },
      {
        bab: 15,
        fungsi: 'Tujuan aksi / tempat hasil aksi (に)',
        keterangan:
          'Partikel に digunakan bersama Kata Kerja seperti はいります, すわります, のります, のぼります, つきます, kemudian menunjukkan hasil melakukan aksi dan tempat subjek berada. に juga menunjukkan tempat Kata Benda₂ berada akibat melakukan aksi (ここに 車を 止めて ください).',
        contoh: [
          { jp: 'ここに 入っては いけません。', id: 'Tidak boleh masuk ke sini.' },
          { jp: 'ここに 住所を 書いて ください。', id: 'Tuliskan alamat di sini.' },
        ],
      },
      {
        bab: 19,
        fungsi: 'Perubahan kondisi (に なります)',
        keterangan:
          'なります menunjuk perubahan kondisi. Untuk Kata Sifat い → ～く、Kata Sifat な → ～に、Kata Benda dibubuhkan に (寒く なります／元気に なります／25歳に なります).',
        contoh: [
          { jp: '寒い → 寒く なります', id: 'menjadi dingin' },
          { jp: '元気[な] → 元気に なります', id: 'menjadi sehat' },
        ],
      },
      {
        bab: 21,
        fungsi: 'Lawan bicara yang mendengarkan',
        keterangan:
          'Lawan bicara yang mendengarkan ungkapan pembicara ditunjukan dengan partikel に (mis. 父に 留学したいと 言いました).',
        contoh: [{ jp: '父に 留学したいと 言いました。', id: 'Saya berkata pada ayah bahwa ingin belajar di luar negeri.' }],
      },
      {
        bab: 24,
        fungsi: 'Penerima pada ～て あげます／もらいます／くれます',
        keterangan:
          'Pada Kata Kerja Bentuk て あげます／もらいます, orang yang menerima/memberi kebaikan ditandai partikel に (mis. 木村さんに 本を 貸して あげました). Bila penerimanya わたし, biasanya dihilangkan.',
        contoh: [
          { jp: 'わたしは 木村さんに 本を 貸して あげました。', id: 'Saya meminjamkan Sdr. Kimura buku.' },
          { jp: 'わたしは 山田さんに 図書館の 電話番号を 教えて もらいました。', id: 'Saya diberi nomor telepon perpustakaan oleh Sdr. Yamada.' },
        ],
      },
    ],
  },
  {
    bentuk: 'へ',
    romaji: 'e',
    fungsi: 'Arah tujuan perpindahan',
    penjelasan:
      'へ menandai arah tujuan perpindahan (行きます／来ます／帰ります). Dibaca "e". Untuk arti "ke", へ sering bertukar peran dengan に; に lebih menekankan titik tujuan, へ lebih menekankan arah.',
    contoh: [
      { jp: '日本へ 行きます。', id: 'Pergi ke Jepang.' },
      { jp: '家へ 帰ります。', id: 'Pulang ke rumah.' },
    ],
    bab: [5, 13],
    kelompok: 'tempat-arah',
    perBab: [
      {
        bab: 5,
        fungsi: 'Arah tujuan perpindahan',
        keterangan:
          'Jika menunjukkan pindah, arah pindahnya dinyatakan dengan membubuhkan partikel へ. [Perhatian] Partikel へ diucapkan e.',
        contoh: [
          { jp: '京都へ 行きます。', id: 'Pergi ke Kyoto.' },
          { jp: '日本へ 来ました。', id: 'Datang ke Jepang.' },
          { jp: 'うちへ 帰ります。', id: 'Pulang ke rumah.' },
        ],
      },
      {
        bab: 13,
        fungsi: 'Arah tujuan (dengan に)',
        keterangan:
          'Objek untuk aksi dari いきます, きます, かえります ditunjuk dengan に. Untuk arah/tujuan, へ dan に dipakai berdampingan (神戸へ インド料理を 食べに 行きます).',
        contoh: [
          { jp: '神戸へ インド料理を 食べに 行きます。', id: 'Pergi makan masakan India ke Kobe.' },
          { jp: '神戸へ 買い物に 行きます。', id: 'Pergi ke Kobe untuk belanja.' },
        ],
      },
    ],
  },
  {
    bentuk: 'で',
    romaji: 'de',
    fungsi: 'Tempat tindakan / alat / sebab',
    penjelasan:
      'で menandai (1) tempat terjadinya tindakan (bukan keberadaan: 図書館で 勉強します), (2) alat/cara yang dipakai (電車で 行きます), (3) bahan (木で 作ります), (4) sebab/alasan (mis. かぜで 休みました).',
    contoh: [
      { jp: '図書館で 勉強します。', id: 'Belajar di perpustakaan.' },
      { jp: '電車で 行きます。', id: 'Pergi dengan kereta.' },
      { jp: 'かぜで 学校を 休みました。', id: 'Tidak masuk sekolah karena masuk angin.' },
    ],
    bab: [5, 6, 7, 18, 21],
    kelompok: 'tempat-arah',
    perBab: [
      {
        bab: 5,
        fungsi: 'Sarana / cara (kendaraan)',
        keterangan:
          'Partikel で menunjukkan sarana dan cara. Yang diikuti Kata Benda yang menunjukkan kendaraan adalah menunjukkan sarana transportasi. Jika pergi dengan jalan kaki digunakan あるいて, tetapi tidak dibubuhkan partikel で.',
        contoh: [
          { jp: '電車で 行きます。', id: 'Pergi dengan kereta rel listrik.' },
          { jp: 'タクシーで 来ました。', id: 'Datang dengan taksi.' },
        ],
      },
      {
        bab: 6,
        fungsi: 'Tempat melakukan aksi',
        keterangan:
          'Partikel で disertai Kata Benda yang menunjukkan tempat, kemudian menunjukkan tempat melakukan aksi.',
        contoh: [{ jp: '駅で 新聞を 買います。', id: 'Membeli surat kabar di stasiun.' }],
      },
      {
        bab: 7,
        fungsi: 'Alat / sarana / bahasa',
        keterangan:
          'Pada bagian ini mempelajari partikel で yang menunjukkan sarana dan cara (mis. alat dan bahasa yang dipakai untuk melakukan sesuatu).',
        contoh: [
          { jp: 'はしで 食べます。', id: 'Makan dengan sumpit.' },
          { jp: '日本語で レポートを 書きます。', id: 'Menulis laporan dalam bahasa Jepang.' },
        ],
      },
      {
        bab: 18,
        fungsi: 'Menjadi topik (KB で → では)',
        keterangan:
          'Kata Benda yang dibubuhkan で dijadikan topik, maka Kata Benda berbentuk Kata Benda では (mis. 日本では なかなか 馬を 見る ことが できません).',
        contoh: [{ jp: '日本では なかなか 馬を 見る ことが できません。', id: 'Di Jepang tidak mudah untuk melihat kuda.' }],
      },
      {
        bab: 21,
        fungsi: 'Tempat berlangsungnya adegan',
        keterangan: 'Sesuatu adegan yang dilakukan ditunjukan dengan partikel で (mis. 会議で 何か 意見を 言いましたか).',
        contoh: [{ jp: '会議で 何か 意見を 言いましたか。', id: 'Di dalam rapat, apakah mengutarakan suatu pendapat?' }],
      },
    ],
  },
  {
    bentuk: 'と',
    romaji: 'to',
    fungsi: 'Dan / bersama / isi kutipan',
    penjelasan:
      'と menyambung dua benda atau lebih (dan — daftar lengkap), menandai orang yang menemani (家族と 行きます), dan menandai isi kutipan/bilangan pada 言います・思います・書いてあります (～と 思います = saya pikir bahwa…).',
    contoh: [
      { jp: '本と ペンと ノートを 買いました。', id: 'Membeli buku, pena, dan buku catatan.' },
      { jp: '家族と 旅行します。', id: 'Bepergian bersama keluarga.' },
      { jp: '日本語は おもしろいと 思います。', id: 'Menurut saya bahasa Jepang menarik.' },
    ],
    bab: [4, 5, 21, 23],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 4,
        fungsi: 'Dan (menyambung benda setaraf)',
        keterangan:
          'Jika menyambung Kata Benda secara setaraf, Kata Benda disambung dengan と (daftar lengkap). Bandingkan dengan や yang hanya menyebut beberapa contoh.',
        contoh: [{ jp: '銀行の 休みは 土曜日と 日曜日です。', id: 'Hari libur bank adalah Sabtu dan Minggu.' }],
      },
      {
        bab: 5,
        fungsi: 'Bersama (orang/hewan yang menemani)',
        keterangan:
          'Jika melakukan sesuatu bersama orang (hewan) maka ditunjukkan dengan membubuhkan partikel と. Jika melakukan suatu aksi sendiri digunakan ひとりで. Dalam hal ini tidak menggunakan partikel と.',
        contoh: [
          { jp: '家族と 日本へ 来ました。', id: 'Datang ke Jepang bersama dengan keluarga.' },
          { jp: '一人で 東京へ 行きます。', id: 'Pergi ke Tokyo sendirian.' },
        ],
      },
      {
        bab: 21,
        fungsi: 'Isi pikiran / ucapan (と 思います／言います)',
        keterangan:
          'Isi pikiran dan keputusan ditunjukan dengan memakai partikel と (～と 思います). Isi ucapan juga ditunjukan dengan と: (1) kutipan langsung dimasukkan ke dalam kurung 「 」 tanpa diubah; (2) rangkuman isi memakai bentuk biasa sebelum と (～と 言いました).',
        contoh: [
          { jp: 'あした 雨が 降ると 思います。', id: 'Saya kira besok hujan turun.' },
          { jp: '寝る まえに、「お休みなさい」と 言います。', id: 'Sebelum tidur mengucapkan "Selamat tidur".' },
        ],
      },
      {
        bab: 23,
        fungsi: 'Akibat otomatis (～と、～)',
        keterangan:
          'と menyatakan jika suatu aksi atau kejadian di depan と terjadi, menyatakan secara pasti akibat terjadinya suatu keadaan, aksi, fenomena, dan kejadian yang diikuti kalimat pokok di belakangnya.',
        contoh: [
          { jp: 'この ボタンを 押すと、お釣りが 出ます。', id: 'Kalau tekan tombol ini, uang kembaliannya keluar.' },
          { jp: '右へ 曲がると、郵便局が あります。', id: 'Kalau belok ke kanan, ada kantor pos.' },
        ],
      },
    ],
  },
  {
    bentuk: 'も',
    romaji: 'mo',
    fungsi: 'Juga / bahkan',
    penjelasan:
      'も menggantikan は／が untuk menyatakan "juga". Dengan kalimat negatif berarti "tidak juga / pun tidak". Dapat menempel pada partikel lain (にも, でも, とも) untuk "juga ke/untuk…", dan pada kata tanya + bentuk positif/negatif berfungsi "pun/berapa pun".',
    contoh: [
      { jp: 'ミラーさんは 学生です。サントスさんも 学生です。', id: 'Sdr. Miller pelajar. Sdr. Santos juga pelajar.' },
      { jp: 'どこへも 行きません。', id: 'Tidak pergi ke mana pun.' },
    ],
    bab: [2, 3, 5, 30],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 2,
        fungsi: 'Juga',
        keterangan:
          'も digunakan apabila menyatakan predikatnya dianggap sama dengan predikat sebelumnya. Letaknya sama seperti は.',
        contoh: [{ jp: 'サントスさんも 会社員です。', id: 'Sdr. Santos juga pegawai perusahaan.' }],
      },
      {
        bab: 3,
        fungsi: 'Juga (tempat/tujuan)',
        keterangan:
          'も memakai pola yang sama dengan は untuk menyatakan "juga" (mis. ここにも あります = juga ada di sini).',
      },
      {
        bab: 5,
        fungsi: 'Menyangkal total (Kata Tanya + も + negatif)',
        keterangan:
          'Apabila ingin menyangkal hal yang ditanyakan oleh Kata Tanya secara total, pembentukan Kata Kerja negatif dengan membubuhkan partikel も pada Kata Tanya (どこ[へ]も 行きません = tidak pergi ke mana-mana).',
        contoh: [
          { jp: 'どこ[へ]も 行きません。', id: 'Tidak pergi ke mana-mana.' },
          { jp: '何も 食べません。', id: 'Tidak makan apa-apa.' },
          { jp: 'だれも 来ませんでした。', id: 'Tidak datang siapa-siapa.' },
        ],
      },
      {
        bab: 30,
        fungsi: 'Partikel + も (にも／でも／からも…)',
        keterangan:
          'Jika も digabung dengan Kata Benda yang dibubuhkan が atau を, maka が atau を dihapuskan. Jika selain kata bantu tersebut (mis. に, で, から, まで, と), dibubuhkan di belakangnya. へ boleh dihapuskan dan juga boleh tidak.',
        contoh: [
          { jp: 'ほかにも いろいろ あります。', id: 'Selain itu masih ada macam-macam.' },
          { jp: 'どこ[へ]も 行きません。', id: 'Tidak pergi ke mana-mana.' },
        ],
      },
    ],
  },
  {
    bentuk: 'の',
    romaji: 'no',
    fungsi: 'Kepemilikan / penghubung kata benda',
    penjelasan:
      'の menghubungkan dua kata benda: kepemilikan (milik siapa), kategori/atribut (コンピューターの 本 = buku (tentang) komputer), atau menjelaskan KB2 = KB1. Bisa menukar kata benda yang sudah disebut (ミラーさんのです = milik Sdr. Miller). Juga menggantikan が di dalam anak kalimat (私が作った → 私の作った).',
    contoh: [
      { jp: 'これは 私の 傘です。', id: 'Ini payung saya.' },
      { jp: 'コンピューターの 本です。', id: 'Buku (tentang) komputer.' },
      { jp: '(この傘は) ミラーさんのです。', id: '(Payung ini) milik Sdr. Miller.' },
    ],
    bab: [1, 2, 3, 18, 22, 34, 37, 38],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 1,
        fungsi: 'Penghubung KB₁ の KB₂',
        keterangan:
          'Jika Kata Benda₁ di depan menerangkan Kata Benda₂ di belakangnya, kedua Kata Benda disambung dengan の. Pada Pelajaran 1 Kata Benda₁ menunjukkan satu kesatuan Kata Benda₂ (mis. ミラーさんは IMC の 社員です).',
        contoh: [{ jp: 'ミラーさんは IMC の 社員です。', id: 'Sdr. Miller pegawai perusahaan IMC.' }],
      },
      {
        bab: 2,
        fungsi: 'Penjelas / kepemilikan / pengganti KB',
        keterangan:
          'Jika Kata Benda₁ menerangkan Kata Benda₂, disambung dengan の. (1) KB₁ menerangkan sesuatu dari KB₂ (これは コンピューターの 本です). (2) KB₁ menyatakan pemilik KB₂ (これは わたしの 本です). Kata の juga berfungsi sebagai pengganti Kata Benda yang telah disebut sebelumnya (ミラーさんのです = milik Sdr. Miller).',
        contoh: [
          { jp: 'これは コンピューターの 本です。', id: 'Ini buku komputer.' },
          { jp: 'これは わたしの 本です。', id: 'Ini buku saya.' },
        ],
      },
      {
        bab: 3,
        fungsi: 'Kepemilikan tempat/asosiasi',
        keterangan: 'の menyatakan kepemilikan tempat atau asosiasi (mis. デパートの 中).',
      },
      {
        bab: 22,
        fungsi: 'Menggantikan が di anak kalimat',
        keterangan:
          'の dapat menggantikan が di dalam anak kalimat yang menerangkan kata benda (私が作った → 私の作った). Catatan: subjek di dalam anak kalimat ditunjukan dengan partikel が.',
      },
      {
        bab: 18,
        fungsi: 'Penghubung KB の まえに',
        keterangan:
          'Di belakang Kata Benda membubuhkan の (mis. 食事の まえに、手を 洗います). Menggunakan Kata Benda yang bersifat aksi. [Perhatian] Di belakang Kata Keterangan Bilangan (jangka waktu) TIDAK membubuhkan の (1時間まえに).',
        contoh: [
          { jp: '食事の まえに、手を 洗います。', id: 'Sebelum makan mencuci tangan.' },
          { jp: '田中さんは 1時間まえに、出かけました。', id: 'Sdr. Tanaka telah keluar sejam yang lalu.' },
        ],
      },
      {
        bab: 34,
        fungsi: 'Sesuai dengan (とおりに)',
        keterangan:
          'とおり adalah Kata Benda, maka menyertai Kata Tunjuk seperti この/その/あの untuk menyatakan keadaan atau cara yang sama seperti ditunjuk Kata Tunjuk tersebut (Kata Benda の とおりに / Kata Kerja Bentuk た とおりに).',
        contoh: [
          { jp: '線の とおりに、紙を 切って ください。', id: 'Silakan menggunting kertas sesuai dengan garis!' },
          { jp: '説明書の とおりに、組み立てました。', id: '(Saya) memasang sesuai dengan petunjuk.' },
        ],
      },
      {
        bab: 37,
        fungsi: 'KB₁ の KB₂ (bahan/produk)',
        keterangan:
          'の menghubungkan dua Kata Benda, mis. menyebutkan bahan baku suatu barang (げんりょうの むぎ). Contoh lain: ペットの いぬ, むすこの ハンス.',
        contoh: [{ jp: 'ビールは 麦から 造られます。', id: 'Bir terbuat dari gandum.' }],
      },
      {
        bab: 38,
        fungsi: 'Pembentuk Kata Benda (nominalisasi)',
        keterangan:
          'の berfungsi membentuk Kata Benda dari bermacam-macam ekspresi (Kata Kerja, Kata Sifat, Kata Benda dalam bentuk biasa). Ekspresi yang terbentuk jadi Kata Benda dapat menjadi berbagai unsur, mis. 「Kata Kerja Bentuk Kamus の は ～です」 (topik), 「～の が 好きです」 (sasaran), 「～の を 忘れました／知って いますか」.',
        contoh: [
          { jp: 'テニスを するのは おもしろいです。', id: 'Bermain tenis menarik.' },
          { jp: 'わたしは 花を 育てるのが 好きです。', id: 'Saya suka memelihara bunga.' },
          { jp: '牛乳を 買うのを 忘れました。', id: 'Lupa membeli susu.' },
        ],
      },
    ],
  },
  {
    bentuk: 'から / まで',
    romaji: 'kara / made',
    fungsi: 'Dari / sampai',
    penjelasan:
      'から menandai titik awal (dari — waktu atau tempat), まで menandai titik akhir (sampai). Sering dipakai berpasangan (9時から 5時まで). から juga bisa berarti "karena" mengawali kalimat alasan (bab 9). Perlu dibedakan dengan までに (bab 17) yang berarti "paling lambat".',
    contoh: [
      { jp: '9時から 5時まで 働きます。', id: 'Bekerja dari jam 9 sampai jam 5.' },
      { jp: '駅から 家まで 歩きました。', id: 'Berjalan dari stasiun sampai rumah.' },
      { jp: '時間が ありませんから、タクシーで 行きます。', id: 'Karena tidak ada waktu, saya pergi naik taksi.' },
    ],
    bab: [4, 5, 9, 17, 37],
    kelompok: 'waktu',
    perBab: [
      {
        bab: 4,
        fungsi: 'Titik awal & akhir (waktu)',
        keterangan:
          'から menunjukkan titik permulaan waktu/tempat, sedangkan まで menunjukkan titik akhirnya. Sering dipakai berpasangan (9時から 5時まで 働きます). Kata Benda waktu seperti きょう、あした tidak dibubuhkan に.',
        contoh: [{ jp: '9時から 5時まで 働きます。', id: 'Bekerja dari jam 9 sampai jam 5.' }],
      },
      {
        bab: 5,
        fungsi: 'Titik awal & akhir (tempat)',
        keterangan:
          'から dan まで juga menandai titik permulaan dan akhir tempat (駅から 家まで 歩きました = berjalan dari stasiun sampai rumah).',
        contoh: [{ jp: '駅から 家まで 歩きました。', id: 'Berjalan dari stasiun sampai rumah.' }],
      },
      {
        bab: 9,
        fungsi: 'から = karena (alasan)',
        keterangan:
          'Hal yang dinyatakan di depan から merupakan alasan dari kalimat yang dinyatakan di belakangnya (～から、～). Digunakan juga untuk menyatakan suatu hal dan alasan dengan memasukkan ～から (mis. menjawab どうして…ですか。……～から).',
        contoh: [
          { jp: '時間が ありませんから、新聞を 読みません。', id: 'Karena tidak ada waktu, tidak membaca surat kabar.' },
        ],
      },
      {
        bab: 17,
        fungsi: 'まで = titik akhir aksi berkelanjutan (bandingkan までに)',
        keterangan:
          'Partikel まで yang dipelajari pada Pelajaran 4 menunjukkan titik akhir aksi yang sedang berlangsung (5時まで 働きます). Perlu hati-hati sebab bentuknya mirip dengan までに (batas waktu "paling lambat").',
        contoh: [{ jp: '5時まで 働きます。', id: 'Bekerja sampai pukul lima.' }],
      },
      {
        bab: 37,
        fungsi: 'から = bahan baku (pasif)',
        keterangan:
          'Jika membuat barang, bahan baku itu dinyatakan dengan から, dan bahan dinyatakan dengan で (ビールは 麦から 造られます / 昔 日本の 家は 木で 造られました).',
        contoh: [{ jp: 'ビールは 麦から 造られます。', id: 'Bir terbuat dari gandum.' }],
      },
    ],
  },
  {
    bentuk: 'や',
    romaji: 'ya',
    fungsi: 'Dan (contoh, tidak lengkap)',
    penjelasan:
      'や menyebutkan beberapa benda sebagai contoh (tidak semua) — "…dan … (antara lain)". Berbeda dengan と yang menyebut daftar lengkap.',
    contoh: [
      { jp: '箱の中に 手紙や 写真が あります。', id: 'Di dalam kotak ada surat dan foto (antara lain).' },
    ],
    bab: [10],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 10,
        fungsi: 'Menyebut beberapa hal setara (contoh)',
        keterangan:
          'Partikel や digunakan untuk menyebutkan beberapa (lebih dari dua) Kata Benda secara setara — mengambil beberapa hal saja yang mewakili. Berbeda dengan と yang menyebut semua Kata Benda secara setara. Sering dilanjutkan など.',
        contoh: [
          { jp: '箱の 中に 手紙や 写真が あります。', id: 'Di dalam kotak ada surat dan foto.' },
          { jp: '箱の 中に 手紙や 写真などが あります。', id: 'Di dalam kotak ada surat, foto dan lain-lainnya.' },
        ],
      },
    ],
  },
  {
    bentuk: 'だけ',
    romaji: 'dake',
    fungsi: 'Hanya',
    penjelasan:
      'だけ membatasi jumlah — "hanya/sebanyak itu saja". Menempel pada kata bantu bilangan atau kata benda.',
    contoh: [
      { jp: 'りんごを 一つだけ 買いました。', id: 'Membeli hanya satu apel.' },
    ],
    bab: [11],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 11,
        fungsi: 'Hanya (membatasi jumlah)',
        keterangan:
          'だけ diletakkan di belakang Kata Keterangan Bilangan atau Kata Benda, yang mempunyai arti tidak ada yang lebih dari itu atau tidak ada selain itu.',
        contoh: [
          { jp: 'パワー電気に 外国人の 社員が 1人 だけ います。', id: 'Di Power Elektronik hanya ada seorang pegawai orang asing.' },
          { jp: '休みは 日曜日だけです。', id: 'Hari libur hanya hari Minggu saja.' },
        ],
      },
    ],
  },
  {
    bentuk: 'しか ～ません',
    romaji: 'shika … masen',
    fungsi: 'Hanya (dengan negatif)',
    penjelasan:
      'しか selalu berpasangan dengan bentuk negatif dan berarti "hanya" dengan kesan "tidak lebih dari". Berbeda dengan だけ yang boleh dipakai dengan positif.',
    contoh: [
      { jp: 'ローマ字しか 書けません。', id: 'Hanya bisa menulis (huruf) romaji.' },
    ],
    bab: [27],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 27,
        fungsi: 'Hanya (wajib negatif)',
        keterangan:
          'しか dibubuhkan pada Kata Benda atau Kata Keterangan Bilangan, dan selalu digunakan dengan kata bentuk negatif. Mengangkat kata yang dibubuhkan しか, dan menyangkal semua kata yang lain. Jika dibubuhkan pada Kata Benda yang dibubuhkan が atau を, maka が atau を dihilangkan.',
        contoh: [
          { jp: 'ローマ字しか 書けません。', id: 'Hanya bisa menulis huruf latin saja.' },
          { jp: 'ローマ字だけ 書けます。', id: 'Bisa menulis huruf latin saja.' },
        ],
      },
    ],
  },
  {
    bentuk: 'より / ほど',
    romaji: 'yori / hodo',
    fungsi: 'Perbandingan',
    penjelasan:
      'より menandai pembanding: "lebih … daripada". ほど dipakai pada bentuk negatif: "tidak se-… (dengan)". Pola umum: A は B より [kata sifat] です；A は B ほど [kata sifat negatif] です.',
    contoh: [
      { jp: 'タイは 日本より 暑いです。', id: 'Thailand lebih panas daripada Jepang.' },
      { jp: '東京は 大阪ほど 暑くないです。', id: 'Tokyo tidak sepanas Osaka.' },
    ],
    bab: [12],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 12,
        fungsi: 'Perbandingan (より / の ほうが / ほど)',
        keterangan:
          'より menyatakan sifat/kondisi Kata Benda₁ dengan Kata Benda₂ sebagai patokan (「Kata Benda₁ は Kata Benda₂ より Kata Sifat です」= mobil ini lebih besar daripada mobil itu). Membandingkan dua benda memakai 「Kata Benda₁ と Kata Benda₂ と どちらが ～ですか ……～の ほうが ～です」. Bentuk negatif "tidak se-… " memakai ほど.',
        contoh: [
          { jp: 'この 車は あの 車より 大きいです。', id: 'Mobil ini lebih besar daripada mobil itu.' },
          { jp: 'サッカーと 野球と どちらが おもしろいですか。……サッカーの ほうが おもしろいです。', id: 'Yang mana lebih menarik, sepak bola atau baseball? ……Sepak bola yang lebih menarik.' },
        ],
      },
    ],
  },
  {
    bentuk: 'ながら',
    romaji: 'nagara',
    fungsi: 'Sambil (dua tindakan bersamaan)',
    penjelasan:
      'Kata Kerja (bentuk ます tanpa ます) + ながら + KK2 berarti melakukan dua hal bersamaan. Subjek kedua tindakan harus sama; tindakan utama ada di belakang.',
    contoh: [
      { jp: '音楽を 聞きながら 食事します。', id: 'Makan sambil mendengarkan musik.' },
    ],
    bab: [28],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 28,
        fungsi: 'Sambil (dua tindakan bersamaan)',
        keterangan:
          'Kata Kerja₁ (bentuk ます tanpa ます) + ながら + Kata Kerja₂ berarti melakukan dua hal bersamaan. Subjek kedua tindakan harus sama; tindakan utama ada di klausa belakang (Kata Kerja₂).',
        contoh: [{ jp: '音楽を 聞きながら 食事します。', id: 'Makan sambil mendengarkan musik.' }],
      },
    ],
  },
  {
    bentuk: 'ので',
    romaji: 'node',
    fungsi: 'Karena (sebab-akibat)',
    penjelasan:
      'ので menyatakan sebab dengan nuansa lembut/objektif: "karena…". Dipakai setelah bentuk biasa. Berbeda dengan から yang lebih tegas/subjektif.',
    contoh: [
      { jp: 'かぜを ひいたので、学校を 休みました。', id: 'Karena masuk angin, tidak masuk sekolah.' },
    ],
    bab: [39],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 39,
        fungsi: 'Karena (sebab-akibat, memperlembut)',
        keterangan:
          'Sama halnya dengan ～から (Pel.9), ～ので juga menyatakan sebab atau alasan. ので menyatakan hubungan sebab akibat, kemudian bersifat menjelaskan akibat yang dituntun oleh sebab, maka cocok untuk memperlembut ekspresi alasan meminta izin atau pengertian.',
        contoh: [{ jp: '日本語が わからないので、英語で 話して いただけませんか。', id: 'Karena tidak mengerti bahasa Jepang, tolong berbicara dalam bahasa Inggris.' }],
      },
    ],
  },
  {
    bentuk: 'のに',
    romaji: 'noni',
    fungsi: 'Walaupun (pertentangan)',
    penjelasan:
      'のに menyatakan pertentangan yang menyimpang dari harapan: "walaupun seharusnya…, ternyata …". Sering bernuansa heran/kecewa.',
    contoh: [
      { jp: '薬を 飲んだのに、まだ 熱が あります。', id: 'Walaupun sudah minum obat, masih demam.' },
    ],
    bab: [45],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 45,
        fungsi: 'Walaupun / padahal (pertentangan)',
        keterangan:
          'のに digunakan jika hal yang berbeda dengan dugaan sesungguhnya dari hal di bagian depan kalimat diletakkan di bagian belakang kalimat. Kebanyakan menjelaskan perasaan di luar dugaan atau ketidakpuasan. (Berbeda dengan が yang tidak menyatakan perasaan tsb, dan dengan ても yang paradoks secara prakiraan.)',
        contoh: [
          { jp: '約束を したのに、彼女は 来ませんでした。', id: 'Dia tidak datang padahal sudah berjanji.' },
          { jp: 'きょうは 日曜日なのに、働かなければ なりません。', id: 'Hari ini harus bekerja padahal hari Minggu.' },
        ],
      },
    ],
  },
  {
    bentuk: 'し',
    romaji: 'shi',
    fungsi: 'Penghubung alasan berderet',
    penjelasan:
      'Bentuk biasa + し dipakai untuk menyebut beberapa alasan/keadaan sekaligus: "…, dan juga …" (sering jadi "karena" bila jadi sebab).',
    contoh: [
      { jp: '地下鉄は 速いし、安いし、地下鉄で 行きましょう。', id: 'Kereta bawah tanah cepat dan juga murah, ayo pergi naik kereta bawah tanah.' },
    ],
    bab: [28],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 28,
        fungsi: 'Penghubung alasan/keadaan berderet',
        keterangan:
          'Bentuk Biasa + し dipakai untuk menyebut beberapa alasan/keadaan sekaligus: "…, dan juga …" (sering menjadi sebab). Pola: 「Bentuk Biasa し、Bentuk Biasa し、～」.',
        contoh: [
          { jp: '地下鉄は 速いし、安いし、地下鉄で 行きましょう。', id: 'Kereta bawah tanah cepat dan juga murah, ayo pergi naik kereta bawah tanah.' },
        ],
      },
    ],
  },
  {
    bentuk: 'ても / でも',
    romaji: 'temo / demo',
    fungsi: 'Walaupun',
    penjelasan:
      'Kata Kerja bentuk て + も (atau kata sifat/lain + ても／でも) berarti "walaupun…/meskipun…". Contoh umum: 雨が 降っても 行きます。',
    contoh: [
      { jp: '雨が 降っても 出かけます。', id: 'Walaupun turun hujan, (saya) pergi keluar.' },
    ],
    bab: [25],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 25,
        fungsi: 'Walaupun (persyaratan asumsi paradoks)',
        keterangan:
          'Ini menunjukkan persyaratan asumsi paradoks. Dengan kalimat yang disusul bentuk ても (mis. ～ても, ～なくても, ～くても, ～でも), ditunjukkan terjadinya hal yang biasanya dapat diduga di bawah persyaratan asumsi, atau tidak terjadinya hal yang biasanya dapat diduga.',
        contoh: [
          { jp: '雨が 降っても、洗濯します。', id: 'Walaupun hujan, mencuci pakaian.' },
          { jp: '安くても、わたしは グループ旅行が 嫌いです。', id: 'Walaupun murah, saya tidak suka tur rombongan.' },
        ],
      },
    ],
  },
  {
    bentuk: 'たら / ば / なら / と',
    romaji: 'tara / ba / nara / to',
    fungsi: 'Bentuk syarat (kalau…)',
    penjelasan:
      'Empat cara menyatakan syarat/kondisi: たら (bentuk た + ら), ば (kata kerja bentuk syarat), なら (setelah KB), dan と (konsekuensi otomatis). Masing-masing punya nuansa: と = akibat otomatis/pasti; たら = setelah/lalu; ば = syarat umum; なら = "kalau soal/mengenai".',
    contoh: [
      { jp: '安ければ 買います。', id: 'Kalau murah, (saya) beli.' },
      { jp: '国へ 帰ったら、医者に なります。', id: 'Kalau sudah pulang ke kampung halaman, akan jadi dokter.' },
      { jp: '春に なると、桜が 咲きます。', id: 'Kalau (bila) musim semi tiba, sakura bermekaran.' },
    ],
    bab: [23, 25, 35],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 23,
        fungsi: 'Ketika (～とき) & akibat pasti (～と)',
        keterangan:
          'とき menunjukan waktu terjadinya keadaan/aksi dalam kalimat pokok (mis. 図書館で 本を 借りる とき、カードが 要ります). と menyatakan akibat pasti bila aksi di depannya terjadi (この ボタンを 押すと、お釣りが 出ます).',
        contoh: [
          { jp: 'この ボタンを 押すと、お釣りが 出ます。', id: 'Kalau tekan tombol ini, uang kembaliannya keluar.' },
        ],
      },
      {
        bab: 25,
        fungsi: 'Syarat asumsi (～たら、～)',
        keterangan:
          'Menyatakan persyaratan asumsi dengan membubuhkan ら pada Bentuk Biasa Lampau Kata Kerja/Kata Sifat/Kata Benda, disusul kalimat pokok. Kalimat pokok dapat memakai ekspresi keinginan, harapan, ajakan, permohonan. [Perhatian] Di belakang ～と (kalimat pokok), ekspresi keinginan/harapan/ajakan/permohonan tidak dapat dipakai.',
        contoh: [
          { jp: 'お金が あったら、旅行します。', id: 'Kalau punya uang, berwisata.' },
          { jp: '暇だったら、手伝って ください。', id: 'Kalau sedang luang, tolong bantu saya.' },
        ],
      },
      {
        bab: 35,
        fungsi: 'Syarat ば／なら',
        keterangan:
          'ば membentuk syarat (ここを 押せば、ドアが 開きます). Kata Benda なら、～ dipakai bila merespon perkataan lawan bicara lalu memberi informasi mengenai hal tersebut (温泉なら、白馬が いいですよ). Bandingkan dengan ～と yang menyatakan akibat pasti.',
        contoh: [
          { jp: 'ここを 押せば、ドアが 開きます。', id: 'Jika menekan di sini, pintunya terbuka.' },
          { jp: '温泉なら、白馬が いいですよ。', id: 'Kalau permandian air panas, Hakuba yang bagus.' },
        ],
      },
    ],
  },
  {
    bentuk: 'ばかり',
    romaji: 'bakari',
    fungsi: 'Baru saja / hanya terus',
    penjelasan:
      'Kata Kerja bentuk た + ばかり = "baru saja". Kata Benda + ばかり = "penuh dengan / hanya… terus".',
    contoh: [
      { jp: '今 帰ったばかりです。', id: 'Baru saja pulang.' },
      { jp: '肉ばかり 食べています。', id: 'Dia hanya makan daging terus.' },
    ],
    bab: [46],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 46,
        fungsi: 'Baru saja (KK Bentuk た ばかりです)',
        keterangan:
          'Pola ini menyatakan perasaan si pembicara bahwa waktu belum lama setelah dilakukan aksi atau terjadi peristiwa. Tidak terpengaruh lama/singkatnya waktu sebenarnya, dapat digunakan jika lawan bicara merasa tidak lama — inilah bedanya dengan Kata Kerja Bentuk た ところです.',
        contoh: [
          { jp: 'さっき 昼ごはんを 食べたばかりです。', id: 'Tadi baru makan siang.' },
          { jp: '木村さんは 先月 この 会社に 入ったばかりです。', id: 'Sdr. Kimura baru masuk ke perusahaan ini bulan lalu.' },
        ],
      },
    ],
  },
  {
    bentuk: 'か',
    romaji: 'ka',
    fungsi: 'Penanda tanya / pilihan',
    penjelasan:
      'か di akhir kalimat membentuk kalimat tanya. Diletakkan di antara dua kata benda, か berarti "atau" (pilihan). Dengan kata tanya + か (mis. 何か, どこか) berarti "sesuatu/suatu tempat" yang tidak pasti.',
    contoh: [
      { jp: 'あなたは 学生ですか。', id: 'Apakah Anda pelajar?' },
      { jp: 'コーヒーか 紅茶を 飲みます。', id: 'Minum kopi atau teh.' },
      { jp: '何か 食べませんか。', id: 'Mau makan sesuatu?' },
    ],
    bab: [1, 6, 11, 13],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 1,
        fungsi: 'Penanda tanya',
        keterangan:
          'Partikel か menyatakan perasaan ketidakpastian atau heran si pembicara. Dengan memakai か pada akhir kalimat, dapat membuat kalimat tanya (intonasi naik di akhir).',
        contoh: [{ jp: 'ミラーさんは 会社員ですか。', id: 'Apakah Sdr. Miller pegawai perusahaan?' }],
      },
      {
        bab: 6,
        fungsi: 'Mendapat informasi baru (か di akhir)',
        keterangan:
          'か menyatakan hal untuk mendapatkan informasi baru yang belum diketahui lawan bicara sebelumnya, kemudian memahaminya. Sama dengan cara penggunaan か dari そうですか. (Juga dipakai pada ～ませんか ajakan.)',
        contoh: [{ jp: '日曜日 京都へ 行きました。……京都ですか。いいですね。', id: 'Hari Minggu yang lalu pergi ke Kyoto. ……Kyoto? Bagus ya.' }],
      },
      {
        bab: 11,
        fungsi: 'Menanyakan kuantitas (いくつ／なん＋KB)',
        keterangan:
          'いくつ digunakan untuk menanyakan kuantitas benda. なん + Kata Bantu Bilangan digunakan untuk menanyakan kuantitas benda yang dibubuhkan Kata Bantu Bilangan (mis. 何人, 何時間).',
        contoh: [
          { jp: 'みかんを いくつ 買いましたか。……8つ 買いました。', id: 'Membeli berapa buah jeruk? ……Membeli delapan buah.' },
          { jp: 'この 会社に 外国人が 何人 いますか。……5人 います。', id: 'Di perusahaan ini ada berapa orang asing? ……Ada lima orang.' },
        ],
      },
      {
        bab: 13,
        fungsi: 'どこか／何か (suatu tempat / sesuatu)',
        keterangan:
          'どこか berarti suatu tempat, dan なにか berarti sesuatu. Partikel へ atau を di belakang どこか atau なにか dapat dihilangkan.',
        contoh: [
          { jp: '冬休みは どこか[へ] 行きましたか。', id: 'Pada waktu liburan musim dingin pergi ke mana?' },
          { jp: 'のどが かわきましたから、何か[を] 飲みたいです。', id: 'Karena haus, ingin minum sesuatu.' },
        ],
      },
      {
        bab: 20,
        fungsi: 'か tidak dibubuhkan (bentuk biasa)',
        keterangan:
          'Dalam kalimat tanya dengan bentuk biasa, pada umumnya partikel か tidak dibubuhkan pada akhir kalimat, tetapi diungkapkan dengan nada yang naik seperti の(ん) atau の だ(ん).',
        contoh: [{ jp: 'コーヒーを 飲む？(↗)……うん、飲む。(↘)', id: 'Mau minum kopi? ……Ya, mau minum.' }],
      },
      {
        bab: 29,
        fungsi: 'どこかで／どこかに (か + で／に)',
        keterangan:
          'Kata Bantu へ dan を di belakang どこか dan なにか dapat dihilangkan, sedangkan Kata Bantu で dan に di belakang どこかで dan どこかに TIDAK dapat dihilangkan.',
        contoh: [
          { jp: 'どこかで 財布を なくして しまいました。', id: 'Entah di mana (saya) kehilangan dompet.' },
          { jp: 'どこかに 電話が ありますか。', id: 'Apakah ada telepon di suatu tempat?' },
        ],
      },
    ],
  },
  {
    bentuk: 'ね / よ',
    romaji: 'ne / yo',
    fungsi: 'Penegas akhir kalimat',
    penjelasan:
      'ね meminta persetujuan/simpati lawan bicara ("ya kan?"). よ memberi penegasan atau menyampaikan info baru ("lho/ya"). Keduanya tidak mengubah fakta kalimat, hanya nuansa percakapan.',
    contoh: [
      { jp: '今日は 寒いですね。', id: 'Hari ini dingin ya.' },
      { jp: 'あの 店は おいしいですよ。', id: 'Toko itu enak lho.' },
    ],
    bab: [3, 4, 5],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 3,
        fungsi: 'Penegas akhir kalimat (ね)',
        keterangan:
          'Partikel ね dibubuhkan pada akhir kalimat untuk mengharapkan persetujuan atau simpati lawan bicara. Tidak mengubah fakta kalimat, hanya nuansa percakapan.',
        contoh: [{ jp: '今日は 寒いですね。', id: 'Hari ini dingin ya.' }],
      },
      {
        bab: 4,
        fungsi: 'Penegas (ね di akhir)',
        keterangan:
          'Partikel ね dibubuhkan pada akhir kalimat, digunakan ketika mengharapkan persetujuan dari lawan bicara, menegaskan, atau menekankan.',
        contoh: [{ jp: '毎日 10時まで 勉強します。……大変ですね。', id: 'Setiap hari belajar sampai pukul sepuluh. ……O, berat ya.' }],
      },
      {
        bab: 5,
        fungsi: 'よ = memberi tahu hal baru',
        keterangan:
          'Partikel よ dibubuhkan pada akhir kalimat dan digunakan untuk memberitahukan suatu hal yang belum diketahui oleh lawan bicara, atau menyampaikan tanggapan dan pendapat si pembicara kepada lawan bicaranya.',
        contoh: [
          { jp: '次の「普通」ですよ。', id: 'Yang "Biasa" berikutnya.' },
          { jp: '北海道に 馬が たくさん いますよ。', id: 'Di Hokkaido ada banyak kuda.' },
        ],
      },
    ],
  },
  {
    bentuk: 'にも / でも (Partikel + も)',
    romaji: 'ni mo / de mo',
    fungsi: 'Juga pada partikel lain',
    penjelasan:
      'も dapat menempel pada partikel lain untuk menambah arti "juga": にも = "juga ke/untuk/di", でも = "juga dengan/di", とも = "juga bersama". Contoh umum pada pola bab 30.',
    contoh: [
      { jp: '日曜日にも 働きます。', id: 'Hari Minggu pun (juga) bekerja.' },
      { jp: 'デパートでも 買えます。', id: 'Bisa membeli juga di department store.' },
    ],
    bab: [30],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 30,
        fungsi: 'Partikel + も (にも／でも／とも…)',
        keterangan:
          'も dapat menempel pada partikel lain untuk menambah arti "juga": にも = "juga ke/untuk/di", でも = "juga dengan/di", とも = "juga bersama". Jika digabung dengan Kata Benda yang dibubuhkan が/を, maka が/を dihapuskan; untuk partikel lain (に, で, から, まで, と) dibubuhkan di belakangnya.',
        contoh: [
          { jp: '日曜日にも 働きます。', id: 'Hari Minggu pun (juga) bekerja.' },
          { jp: 'デパートでも 買えます。', id: 'Bisa membeli juga di department store.' },
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
  {
    bentuk: 'って',
    romaji: 'tte',
    fungsi: 'Topik/kutipan informal',
    penjelasan:
      'って adalah bentuk santai dari と (kutipan) atau は (topik) dalam percakapan. Sering muncul di bahasa lisan: 「〜って 何？」(〜 itu apa?); 「〜さんって だれ？」',
    contoh: [
      { jp: '田中さんって どんな 人ですか。', id: 'Orang yang bernama Tanaka itu orang seperti apa?' },
      { jp: 'これって 何ですか。', id: 'Ini apa ya?' },
    ],
    bab: [21],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 21,
        fungsi: 'Topik/kutipan informal (bentuk santai)',
        keterangan:
          'って adalah bentuk santai dari と (kutipan) atau は (topik) dalam percakapan: 「〜って 何？」(〜 itu apa?); 「〜さんって だれ？」.',
        contoh: [
          { jp: '田中さんって どんな 人ですか。', id: 'Orang yang bernama Tanaka itu orang seperti apa?' },
          { jp: 'これって 何ですか。', id: 'Ini apa ya?' },
        ],
      },
    ],
  },
  {
    bentuk: 'など',
    romaji: 'nado',
    fungsi: 'Dan lain-lain',
    penjelasan:
      'など berarti "dan lain-lain/semacam itu". Sering dipakai setelah contoh benda atau kegiatan. Bentuk santai: なんか.',
    contoh: [
      { jp: '果物は りんごや みかんなどを 食べます。', id: 'Buah, makan apel, jeruk, dan lain-lain.' },
    ],
    bab: [10],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 10,
        fungsi: 'Dan lain-lain (memperkirakan masih ada yang lain)',
        keterangan:
          'など dipakai untuk menyatakan bahwa masih ada Kata Benda lain yang tidak disebutkan secara jelas, dibubuhkan di belakang Kata Benda yang disebut terakhir (sering mengikuti や).',
        contoh: [
          { jp: '箱の 中に 手紙や 写真などが あります。', id: 'Di dalam kotak ada surat, foto dan lain-lainnya.' },
        ],
      },
    ],
  },
  {
    bentuk: 'とか',
    romaji: 'toka',
    fungsi: 'Contoh (santai)',
    penjelasan:
      'とか menyebutkan beberapa contoh secara santai ("…atau …"). Dipakai dalam percakapan untuk membuat daftar longgar.',
    contoh: [
      { jp: '週末は 映画を見るとか、買い物をします。', id: 'Akhir pekan menonton film, berbelanja, dan sebagainya.' },
    ],
    bab: [30],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 30,
        fungsi: 'Contoh (bahasa lisan, di belakang benda terakhir)',
        keterangan:
          'とか digunakan jika memberikan contoh seperti halnya や. とか, jika dibandingkan dengan や dalam bahasa lisan, dapat digunakan di belakang Kata Benda terakhir di antara yang disebutkan.',
        contoh: [{ jp: 'テニスとか 水泳とか……', id: 'Tenis, atau renang…' }],
      },
    ],
  },
  {
    bentuk: 'くらい / ぐらい',
    romaji: 'kurai / gurai',
    fungsi: 'Kira-kira / sekitar',
    penjelasan:
      'くらい/ぐらい menandai perkiraan jumlah atau waktu: "sekitar/kira-kira". Juga bisa berarti "sampai (sedemikian)" untuk menekankan derajat.',
    contoh: [
      { jp: '30分ぐらい かかります。', id: 'Butuh sekitar 30 menit.' },
      { jp: '10人ぐらい 来ました。', id: 'Sekitar 10 orang datang.' },
    ],
    bab: [11],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 11,
        fungsi: 'Perkiraan jumlah (kira-kira)',
        keterangan:
          'ぐらい mengikuti Kata Keterangan Bilangan dan menunjukkan perkiraan jumlah. (Untuk menanyakan lama waktu dipakai どのくらい.)',
        contoh: [
          { jp: '学校に 先生が 30人ぐらい います。', id: 'Di sekolah ada kira-kira tiga puluh orang guru.' },
          { jp: '15分ぐらい かかります。', id: 'Memerlukan waktu kira-kira lima belas menit.' },
        ],
      },
    ],
  },
  {
    bentuk: 'しか ～ない (Perhatian)',
    romaji: 'shika ... nai',
    fungsi: 'Variasi しか dengan negatif',
    penjelasan:
      'しか selalu butuh kalimat negatif. Bila ingin makna positif "hanya", gunakan だけ (dengan positif). Jangan campur: ✗ しか あります. Perhatikan pasangannya selalu ありません/ません.',
    contoh: [
      { jp: '水しか ありません。', id: 'Cuma ada air (tidak ada yang lain).' },
      { jp: '100円しか ありません。', id: 'Hanya punya 100 yen.' },
    ],
    bab: [27],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 27,
        fungsi: 'Perhatian: しか + negatif',
        keterangan:
          'しか selalu butuh kalimat negatif. Bila ingin makna positif "hanya", gunakan だけ (dengan positif). Jangan campur: ✗ しか あります. Pasangannya selalu ありません/ません.',
        contoh: [
          { jp: '水しか ありません。', id: 'Cuma ada air (tidak ada yang lain).' },
          { jp: '100円しか ありません。', id: 'Hanya punya 100 yen.' },
        ],
      },
    ],
  },
  {
    bentuk: 'こそ',
    romaji: 'koso',
    fungsi: 'Justru / tepatnya',
    penjelasan:
      'こそ menekankan kata sebelumnya: "justru/tepatnya ini". Contoh: 今度こそ 頑張ります (kali ini pasti saya berusaha).',
    contoh: [
      { jp: 'こちらこそ お願いします。', id: 'Justru saya yang mohon bantuan Anda.' },
    ],
    bab: [26],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 26,
        fungsi: 'Justru / tepatnya',
        keterangan:
          'こそ menekankan kata sebelumnya: "justru/tepatnya ini". Contoh: 今度こそ 頑張ります (kali ini pasti saya berusaha).',
        contoh: [{ jp: 'こちらこそ お願いします。', id: 'Justru saya yang mohon bantuan Anda.' }],
      },
    ],
  },
  {
    bentuk: 'かしら / かな',
    romaji: 'kashira / kana',
    fungsi: 'Mungkin / ya kan (ragu)',
    penjelasan:
      'かしら (perempuan) dan かな (netral/laki-laki) menyatakan keraguan atau pertanyaan pada diri sendiri: "kira-kira…, ya?". Sering di akhir kalimat santai.',
    contoh: [
      { jp: '明日は 晴れるかな。', id: 'Besok cerah nggak ya.' },
    ],
    bab: [22],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 22,
        fungsi: 'Mungkin / ya kan (ragu)',
        keterangan:
          'かしら (perempuan) dan かな (netral/laki-laki) menyatakan keraguan atau pertanyaan pada diri sendiri: "kira-kira…, ya?", sering di akhir kalimat santai.',
        contoh: [{ jp: '明日は 晴れるかな。', id: 'Besok cerah nggak ya.' }],
      },
    ],
  },
  {
    bentuk: 'のに (akhir kalimat)',
    romaji: 'noni',
    fungsi: 'Padahal (mengakhiri keluhan)',
    penjelasan:
      'のに di akhir kalimat meninggalkan kesan menyesal/kecewa yang tak diucapkan: "padahal…". Berbeda dengan のに penghubung yang menyambung dua klausa.',
    contoh: [
      { jp: 'せっかく 来たのに。', id: 'Padahal sudah susah-susah datang (tapi…).' },
    ],
    bab: [42],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 42,
        fungsi: 'Padahal (mengakhiri keluhan)',
        keterangan:
          'のに di akhir kalimat meninggalkan kesan menyesal/kecewa yang tak diucapkan: "padahal…". Berbeda dengan のに penghubung yang menyambung dua klausa.',
        contoh: [{ jp: 'せっかく 来たのに。', id: 'Padahal sudah susah-susah datang (tapi…).' }],
      },
    ],
  },
  {
    bentuk: 'までに',
    romaji: 'made ni',
    fungsi: 'Paling lambat / sebelum (batas)',
    penjelasan:
      'まで menyatakan "sampai" berkelanjutan; までに menyatakan batas waktu "paling lambat/sebelum". Bedakan: 5時まで 働く (bekerja sampai jam 5) vs 5時までに 出す (menyerahkan paling lambat jam 5).',
    contoh: [
      { jp: '金曜日までに 返してください。', id: 'Tolong kembalikan paling lambat hari Jumat.' },
    ],
    bab: [17],
    kelompok: 'waktu',
    perBab: [
      {
        bab: 17,
        fungsi: 'Paling lambat / sebelum (batas)',
        keterangan:
          'までに menyatakan batas waktu aksi/peristiwa "paling lambat/sebelum". Bedakan: 5時まで 働く (bekerja sampai jam 5) vs 5時までに 出す (menyerahkan paling lambat jam 5).',
        contoh: [{ jp: '金曜日までに 返してください。', id: 'Tolong kembalikan paling lambat hari Jumat.' }],
      },
    ],
  },
  {
    bentuk: 'ば / たら (Penekanan)',
    romaji: 'ba / tara',
    fungsi: 'Bentuk syarat (variasi)',
    penjelasan:
      'ば membentuk syarat dari kata kerja (行く→行けば) atau kata sifat (安い→安ければ); たら memakai bentuk lampau + ら. Keduanya berarti "kalau…", dengan nuansa yang sedikit berbeda.',
    contoh: [
      { jp: '時間が あれば、映画を 見ます。', id: 'Kalau ada waktu, menonton film.' },
    ],
    bab: [35],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 35,
        fungsi: 'Bentuk syarat (variasi ば／たら)',
        keterangan:
          'ば membentuk syarat dari kata kerja (行く→行けば) atau kata sifat (安い→安ければ); たら memakai bentuk lampau + ら. Keduanya berarti "kalau…" dengan nuansa sedikit berbeda.',
        contoh: [{ jp: '時間が あれば、映画を 見ます。', id: 'Kalau ada waktu, menonton film.' }],
      },
    ],
  },
  {
    bentuk: 'ところ',
    romaji: 'tokoro',
    fungsi: 'Sedang / baru akan (aspek)',
    penjelasan:
      'ところ menyatakan fase tindakan: Kata Kerja bentuk kamus + ところ = "baru akan", bentuk て + いる + ところ = "sedang", bentuk た + ところ = "baru saja".',
    contoh: [
      { jp: '今から 出かけるところです。', id: 'Sekarang baru mau pergi keluar.' },
      { jp: '今 食べているところです。', id: 'Sekarang sedang makan.' },
    ],
    bab: [46],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 46,
        fungsi: 'Fase tindakan (sedang / baru akan / baru saja)',
        keterangan:
          'ところ menyatakan fase tindakan: 「Kata Kerja Bentuk Kamus ところです」 = baru mau ~; 「Kata Kerja Bentuk ている ところです」 = sedang ~; 「Kata Kerja Bentuk た ところです」 = baru saja ~. ～ところです dapat disambung ke berbagai pola kalimat sebagai Kalimat Nominal.',
        contoh: [
          { jp: 'いいえ、これから 食べる ところです。', id: 'Belum, baru mau makan sekarang.' },
          { jp: 'いいえ、今 調べて いる ところです。', id: 'Belum, sekarang sedang diperiksa.' },
          { jp: 'あ、たった今 帰った ところです。', id: 'Ah, baru saja pulang.' },
        ],
      },
    ],
  },
  {
    bentuk: 'ながら (Perhatian)',
    romaji: 'nagara',
    fungsi: 'Catatan ながら',
    penjelasan:
      'ながら hanya untuk dua tindakan dengan subjek yang SAMA. Tindakan utama ada di klausa belakang. Kata Kerja dibentuk dari bentuk ます tanpa ます (食べます→食べながら).',
    contoh: [
      { jp: '音楽を 聞きながら 宿題を します。', id: 'Mengerjakan PR sambil mendengarkan musik.' },
    ],
    bab: [28],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 28,
        fungsi: 'Catatan ながら',
        keterangan:
          'ながら hanya untuk dua tindakan dengan subjek yang SAMA. Tindakan utama ada di klausa belakang. Kata Kerja dibentuk dari bentuk ます tanpa ます (食べます→食べながら).',
        contoh: [{ jp: '音楽を 聞きながら 宿題を します。', id: 'Mengerjakan PR sambil mendengarkan musik.' }],
      },
    ],
  },
  {
    bentuk: 'だの / たり ～たり',
    romaji: 'tari ... tari',
    fungsi: 'Menyebut beberapa tindakan',
    penjelasan:
      'Kata Kerja bentuk たり + したり menyebut beberapa tindakan sebagai contoh (tidak berurutan): "melakukan … dan …". Diteruskan します.',
    contoh: [
      { jp: '休みの日は 本を 読んだり、散歩したり します。', id: 'Hari libur membaca buku, berjalan-jalan, dan sebagainya.' },
    ],
    bab: [19],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 19,
        fungsi: 'Menyebut beberapa tindakan sebagai contoh (たり～たり)',
        keterangan:
          'Jika mengangkat beberapa Kata Benda (lebih dari dua) yang mewakilinya secara paralel umumnya memakai partikel や, tetapi untuk mengangkat beberapa aksi yang mewakilinya digunakan pola 「Kata Kerja₁ Bentuk たり、Kata Kerja₂ Bentuk たり します」. [Perhatian] Berbeda dengan 「Kata Kerja₁ Bentuk て、[Kata Kerja₂ Bentuk て、] Kata Kerja₃」 yang menyatakan aksi berurutan sesuai urutannya.',
        contoh: [
          { jp: '日曜日は テニスを したり、映画を 見たり します。', id: 'Pada hari Minggu bermain tenis, dan menonton film.' },
          { jp: '日曜日は テニスを して、映画を 見ました。', id: 'Pada hari Minggu yang lalu, bermain tenis, kemudian menonton film.' },
        ],
      },
    ],
  },
]

/** Kelompok partikel untuk tampilan filter. */
export const KELOMPOK: { id: KelompokPartikel; label: string }[] = [
  { id: 'dasar', label: 'Dasar' },
  { id: 'tempat-arah', label: 'Tempat & Arah' },
  { id: 'waktu', label: 'Waktu' },
  { id: 'penghubung', label: 'Penghubung' },
  { id: 'akhir', label: 'Akhir Kalimat' },
  { id: 'lanjutan', label: 'Lanjutan' },
]

/** Semua nomor bab unik dari daftar partikel (terurut). */
export function babTerkait(): number[] {
  const set = new Set<number>()
  for (const p of partikel) for (const b of p.bab) set.add(b)
  return [...set].sort((a, b) => a - b)
}

/**
 * Fungsi satu partikel pada bab tertentu.
 * - `'semua'` → pakai fungsi/keterangan global partikel.
 * - nomor bab → pakai entri `perBab` bila ada; jika tidak, jatuh ke global
 *   (TIDAK mengarang) sambil menandai bahwa detail ada di materi bab itu.
 */
export function fungsiUntukBab(
  p: Partikel,
  bab: number | 'semua',
): { fungsi: string; keterangan: string; contoh: ContohPartikel[]; spesifik: boolean } {
  if (bab === 'semua') {
    return {
      fungsi: p.fungsi,
      keterangan: p.penjelasan,
      contoh: p.contoh,
      spesifik: false,
    }
  }
  const e = p.perBab?.find((x) => x.bab === bab)
  if (e) {
    return {
      fungsi: e.fungsi,
      keterangan: e.keterangan,
      contoh: e.contoh ?? p.contoh,
      spesifik: true,
    }
  }
  return {
    fungsi: p.fungsi,
    keterangan: `${p.penjelasan} (Detail di materi Bab ${bab}.)`,
    contoh: p.contoh,
    spesifik: false,
  }
}
