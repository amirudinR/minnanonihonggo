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
          'Di Bab 1, が menandai subjek pertanyaan pada pola だれ／どなた＋が (mis. あの 方は どなたですか). Subjek ditandai が ketika ingin menanyakan/menegaskan siapa pelakunya, sedangkan は dipakai untuk topik yang sudah jelas.',
        contoh: [
          { jp: 'あの 方は どなたですか。', id: 'Siapakah orang itu?' },
        ],
      },
      {
        bab: 9,
        fungsi: 'Subjek pada 好き／上手／わかります',
        keterangan:
          'Di Bab 9, が menandai sasaran kata 好き／嫌い／上手／下手／わかります／あります (kemampuan). Yang disukai/dikuasai ditandai が, bukan を.',
        contoh: [{ jp: 'わたしは 日本語が わかります。', id: 'Saya mengerti bahasa Jepang.' }],
      },
      {
        bab: 10,
        fungsi: 'Subjek dalam keberadaan',
        keterangan:
          'Di Bab 10, が menandai benda/hal yang ada pada pola あります／います (mis. 箱の中に 手紙が あります).',
        contoh: [{ jp: '箱の中に 手紙や 写真が あります。', id: 'Di dalam kotak ada surat dan foto.' }],
      },
      {
        bab: 14,
        fungsi: 'Subjek anak kalimat (bentuk て)',
        keterangan:
          'Di Bab 14, が menandai subjek di dalam anak kalimat yang menerangkan kata benda, terutama bila subjeknya berbeda dari subjek utama.',
      },
      {
        bab: 20,
        fungsi: 'Subjek pada ～が いる／ある (sopan)',
        keterangan:
          'Di Bab 20, が tetap menandai subjek pada pola keberadaan bentuk sopan (いらっしゃいます／あります) dan percakapan halus.',
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
        bab: 17,
        fungsi: 'Naik ke topik (を → は)',
        keterangan:
          'Di Bab 17: bila objek langsung dijadikan topik, partikel を dihilangkan lalu dibubuhi は dan diletakkan paling depan. Contoh: ここに荷物を置かないでください → 荷物はここに置かないでください.',
        contoh: [
          { jp: '荷物は ここに 置かないでください。', id: 'Barangnya jangan diletakkan di sini.' },
        ],
      },
      {
        bab: 23,
        fungsi: 'Objek pada bentuk kamus／たら',
        keterangan:
          'Di Bab 23, を tetap menandai objek pada kata kerja bentuk kamus dan kalimat syarat たら／と.',
        contoh: [
          { jp: '公園を 散歩します。', id: 'Berjalan-jalan (melewati) taman.' },
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
    bab: [4, 7, 10, 13, 15],
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
        fungsi: 'Tujuan gerak (ます形 stem + に)',
        keterangan:
          'Di Bab 15, に menandai tujuan pergi untuk melakukan sesuatu: Kata Kerja(bentuk ます tanpa ます) + に 行きます (mis. 映画を見に行きます).',
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
    bab: [5, 6, 7],
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
    bab: [4, 5, 21],
    kelompok: 'penghubung',
    perBab: [
      {
        bab: 4,
        fungsi: 'Dan (menyambung benda setaraf)',
        keterangan:
          'Di Bab 4, と menyambung Kata Benda secara setaraf menjadi daftar lengkap (銀行の 休みは 土曜日と 日曜日です).',
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
        fungsi: 'Isi kutipan / pikiran',
        keterangan:
          'Di Bab 21, と menandai isi kutipan pada 言います／思います (～と 思います = saya pikir bahwa…).',
        contoh: [{ jp: '日本語は おもしろいと 思います。', id: 'Menurut saya bahasa Jepang menarik.' }],
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
          'Di Bab 3, も menempel pada penanda tempat untuk menyatakan "juga di…" (mis. ここにも あります).',
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
        fungsi: 'Menempel partikel lain + kata tanya',
        keterangan:
          'Di Bab 30, も menempel pada partikel lain (にも, でも, とも) untuk "juga ke/untuk…", dan pada kata tanya + bentuk positif/negatif berfungsi "pun/berapa pun" (どこへも 行きません).',
        contoh: [{ jp: 'どこへも 行きません。', id: 'Tidak pergi ke mana pun.' }],
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
    bab: [1, 2, 3, 22],
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
        fungsi: 'Kepemilikan tempat',
        keterangan: 'Di Bab 3, の menyatakan kepemilikan tempat/asosiasi (mis. デパートの 中).',
      },
      {
        bab: 22,
        fungsi: 'Menggantikan が di anak kalimat',
        keterangan:
          'Di Bab 22, の dapat menggantikan が di dalam anak kalimat yang menerangkan kata benda (私が作った → 私の作った).',
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
    bab: [4, 5, 9, 17],
    kelompok: 'waktu',
    perBab: [
      {
        bab: 4,
        fungsi: 'Titik awal & akhir (waktu)',
        keterangan:
          'Di Bab 4, から dan まで menandai titik permulaan dan akhir waktu, sering dipakai berpasangan (9時から 5時まで 働きます).',
        contoh: [{ jp: '9時から 5時まで 働きます。', id: 'Bekerja dari jam 9 sampai jam 5.' }],
      },
      {
        bab: 5,
        fungsi: 'Titik awal & akhir (tempat)',
        keterangan:
          'Di Bab 5, から dan まで menandai titik permulaan dan akhir tempat (駅から 家まで 歩きました).',
        contoh: [{ jp: '駅から 家まで 歩きました。', id: 'Berjalan dari stasiun sampai rumah.' }],
      },
      {
        bab: 9,
        fungsi: 'から = karena',
        keterangan:
          'Di Bab 9, から mengawali alasan di depan kalimat (～から、…) setara dengan ので, dengan nuansa "karena" yang lebih tegas.',
        contoh: [
          { jp: '時間が ありませんから、タクシーで 行きます。', id: 'Karena tidak ada waktu, saya pergi naik taksi.' },
        ],
      },
      {
        bab: 17,
        fungsi: 'Perbandingan dengan までに',
        keterangan:
          'Di Bab 17, まで (sampai, berkelanjutan) dibedakan dengan までに (paling lambat). Partikel まで yang dipelajari di Bab 4 menunjukkan titik akhir aksi yang sedang berlangsung.',
        contoh: [{ jp: '5時まで 働きます。', id: 'Bekerja sampai pukul lima.' }],
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
          'Di Bab 27, しか selalu berpasangan dengan bentuk negatif dan berarti "hanya" dengan kesan "tidak lebih dari". Berbeda dengan だけ yang boleh dipakai dengan positif.',
        contoh: [{ jp: 'ローマ字しか 書けません。', id: 'Hanya bisa menulis (huruf) romaji.' }],
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
          'Di Bab 28, Kata Kerja (bentuk ます tanpa ます) + ながら + KK2 berarti melakukan dua hal bersamaan. Subjek kedua tindakan harus sama; tindakan utama ada di belakang.',
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
        fungsi: 'Karena (sebab-akibat, lembut)',
        keterangan:
          'Di Bab 39, ので menyatakan sebab dengan nuansa lembut/objektif: "karena…". Dipakai setelah bentuk biasa. Berbeda dengan から yang lebih tegas/subjektif.',
        contoh: [{ jp: 'かぜを ひいたので、学校を 休みました。', id: 'Karena masuk angin, tidak masuk sekolah.' }],
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
    bab: [42],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 42,
        fungsi: 'Walaupun (pertentangan)',
        keterangan:
          'Di Bab 42, のに menyatakan pertentangan yang menyimpang dari harapan: "walaupun seharusnya…, ternyata …". Sering bernuansa heran/kecewa.',
        contoh: [{ jp: '薬を 飲んだのに、まだ 熱が あります。', id: 'Walaupun sudah minum obat, masih demam.' }],
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
        fungsi: 'Penghubung alasan berderet',
        keterangan:
          'Di Bab 28, Bentuk biasa + し dipakai untuk menyebut beberapa alasan/keadaan sekaligus: "…, dan juga …" (sering jadi "karena" bila jadi sebab).',
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
        fungsi: 'Walaupun',
        keterangan:
          'Di Bab 25, Kata Kerja bentuk て + も (atau kata sifat/lain + ても／でも) berarti "walaupun…/meskipun…". Contoh umum: 雨が 降っても 行きます。',
        contoh: [{ jp: '雨が 降っても 出かけます。', id: 'Walaupun turun hujan, (saya) pergi keluar.' }],
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
        fungsi: 'Syarat と／たら',
        keterangan:
          'Di Bab 23, と menyatakan konsekuensi otomatis/pasti (春になると、桜が咲きます), sedangkan たら menyatakan "setelah/lalu" (国へ帰ったら、…).',
        contoh: [
          { jp: '春に なると、桜が 咲きます。', id: 'Kalau (bila) musim semi tiba, sakura bermekaran.' },
          { jp: '国へ 帰ったら、医者に なります。', id: 'Kalau sudah pulang ke kampung halaman, akan jadi dokter.' },
        ],
      },
      {
        bab: 25,
        fungsi: 'Syarat たら／ば',
        keterangan:
          'Di Bab 25, たら (bentuk た + ら) dan ば (bentuk syarat kata kerja/kata sifat) menyatakan syarat "kalau…". ば = syarat umum; たら = setelah/andai.',
        contoh: [{ jp: '安ければ 買います。', id: 'Kalau murah, (saya) beli.' }],
      },
      {
        bab: 35,
        fungsi: 'Syarat なら／ば',
        keterangan:
          'Di Bab 35, なら dipakai setelah Kata Benda dengan arti "kalau soal/mengenai…", dan ば membentuk syarat umum. Bandingkan nuansa keempat bentuk syarat.',
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
    bab: [30],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 30,
        fungsi: 'Baru saja / hanya terus',
        keterangan:
          'Di Bab 30, Kata Kerja bentuk た + ばかり = "baru saja" (今帰ったばかりです). Kata Benda + ばかり = "penuh dengan / hanya… terus" (肉ばかり 食べています).',
        contoh: [
          { jp: '今 帰ったばかりです。', id: 'Baru saja pulang.' },
          { jp: '肉ばかり 食べています。', id: 'Dia hanya makan daging terus.' },
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
          'Di Bab 1, か di akhir kalimat membentuk kalimat tanya (あなたは 学生ですか).',
        contoh: [{ jp: 'あなたは 学生ですか。', id: 'Apakah Anda pelajar?' }],
      },
      {
        bab: 6,
        fungsi: 'Tanya banding / ajakan',
        keterangan:
          'Di Bab 6, か menutup kalimat tanya pada kata kerja (mis. ～ませんか = ajakan) dan pertanyaan pilihan.',
        contoh: [{ jp: '何か 食べませんか。', id: 'Mau makan sesuatu?' }],
      },
      {
        bab: 11,
        fungsi: 'Pilihan (atau)',
        keterangan:
          'Di Bab 11, か diletakkan di antara dua kata benda berarti "atau" (pilihan): コーヒーか 紅茶.',
        contoh: [{ jp: 'コーヒーか 紅茶を 飲みます。', id: 'Minum kopi atau teh.' }],
      },
      {
        bab: 13,
        fungsi: 'Kata tanya + か (tidak pasti)',
        keterangan:
          'Di Bab 13, kata tanya + か (何か, どこか) berarti "sesuatu/suatu tempat" yang tidak pasti.',
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
        fungsi: 'Partikel + も (juga pada…)',
        keterangan:
          'Di Bab 30, も dapat menempel pada partikel lain untuk menambah arti "juga": にも = "juga ke/untuk/di", でも = "juga dengan/di", とも = "juga bersama".',
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
          'Di Bab 1, は dapat menempel pada partikel lain untuk menjadikannya topik: では (di/untuk…), には (di/pada…), とは (dengan/mengenai…). では juga sering dibaca "ja" (じゃありません).',
        contoh: [{ jp: '学校では 日本語を 勉強します。', id: 'Di sekolah (topik) belajar bahasa Jepang.' }],
      },
      {
        bab: 3,
        fungsi: 'Partikel + は (tempat)',
        keterangan:
          'Di Bab 3, は menempel pada penanda tempat (では／には) untuk menjadikan tempat sebagai topik kalimat (日本では 桜が きれいです).',
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
        fungsi: 'Topik/kutipan informal',
        keterangan:
          'Di Bab 21, って adalah bentuk santai dari と (kutipan) atau は (topik) dalam percakapan: 「〜って 何？」(〜 itu apa?); 「〜さんって だれ？」.',
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
        fungsi: 'Contoh (santai)',
        keterangan:
          'Di Bab 30, とか menyebutkan beberapa contoh secara santai ("…atau …"). Dipakai dalam percakapan untuk membuat daftar longgar.',
        contoh: [
          { jp: '週末は 映画を見るとか、買い物をします。', id: 'Akhir pekan menonton film, berbelanja, dan sebagainya.' },
        ],
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
          'Di Bab 27 (Perhatian), しか selalu butuh kalimat negatif. Bila ingin makna positif "hanya", gunakan だけ (dengan positif). Jangan campur: ✗ しか あります. Pasangannya selalu ありません/ません.',
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
          'Di Bab 26, こそ menekankan kata sebelumnya: "justru/tepatnya ini". Contoh: 今度こそ 頑張ります (kali ini pasti saya berusaha).',
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
          'Di Bab 22, かしら (perempuan) dan かな (netral/laki-laki) menyatakan keraguan atau pertanyaan pada diri sendiri: "kira-kira…, ya?", sering di akhir kalimat santai.',
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
          'Di Bab 42, のに di akhir kalimat meninggalkan kesan menyesal/kecewa yang tak diucapkan: "padahal…". Berbeda dengan のに penghubung yang menyambung dua klausa.',
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
          'Di Bab 17, までに menyatakan batas waktu "paling lambat/sebelum". Bedakan: 5時まで 働く (bekerja sampai jam 5) vs 5時までに 出す (menyerahkan paling lambat jam 5).',
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
          'Di Bab 35, ば membentuk syarat dari kata kerja (行く→行けば) atau kata sifat (安い→安ければ); たら memakai bentuk lampau + ら. Keduanya berarti "kalau…" dengan nuansa sedikit berbeda.',
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
    bab: [40],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 40,
        fungsi: 'Sedang / baru akan (aspek)',
        keterangan:
          'Di Bab 40, ところ menyatakan fase tindakan: Kata Kerja bentuk kamus + ところ = "baru akan", bentuk て + いる + ところ = "sedang", bentuk た + ところ = "baru saja".',
        contoh: [
          { jp: '今から 出かけるところです。', id: 'Sekarang baru mau pergi keluar.' },
          { jp: '今 食べているところです。', id: 'Sekarang sedang makan.' },
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
          'Di Bab 28 (Perhatian), ながら hanya untuk dua tindakan dengan subjek yang SAMA. Tindakan utama ada di klausa belakang. Kata Kerja dibentuk dari bentuk ます tanpa ます (食べます→食べながら).',
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
        fungsi: 'Menyebut beberapa tindakan',
        keterangan:
          'Di Bab 19, Kata Kerja bentuk たり + したり menyebut beberapa tindakan sebagai contoh (tidak berurutan): "melakukan … dan …", diteruskan します.',
        contoh: [
          { jp: '休みの日は 本を 読んだり、散歩したり します。', id: 'Hari libur membaca buku, berjalan-jalan, dan sebagainya.' },
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
