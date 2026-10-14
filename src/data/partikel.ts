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
