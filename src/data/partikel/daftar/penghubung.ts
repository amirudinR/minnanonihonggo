/**
 * Partikel penghubung — と / も / の / や / より / し / など / とか / dll.
 * Menyambung kata & frasa; daftar, perbandingan, tambahan.
 *
 * Menambah partikel: tambahkan objek `Partikel` ke array di bawah.
 * INVARIAN (dijaga oleh `npm run validate:partikel`):
 *  - setiap `bab` WAJIB punya entri di `perBab`;
 *  - setiap `perBab[].bab` WAJIB ada di `bab[]`;
 *  - `bab[]` & `perBab[]` WAJIB terurut menaik.
 */

import type { Partikel } from '../tipe'

export const penghubung: Partikel[] = [
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
        bab: 22,
        fungsi: 'Menggantikan が di anak kalimat',
        keterangan:
          'の dapat menggantikan が di dalam anak kalimat yang menerangkan kata benda (私が作った → 私の作った). Catatan: subjek di dalam anak kalimat ditunjukan dengan partikel が.',
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
    bentuk: 'にも / でも (Partikel + も)',
    romaji: 'ni mo / de mo',
    fungsi: 'Juga pada partikel lain',
    penjelasan:
      'も dapat menempel pada partikel lain untuk menambah arti "juga": にも = "juga ke/untuk/di", でも = "juga dengan/di", とも = "juga bersama". Dengan kata tanya + negatif berarti "pun/berapa pun" (どこへも 行きません).',
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
