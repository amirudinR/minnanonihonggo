import type { Bunpou } from '@/types/bab'

// 4 文型 Bab 27. Penjelasan, contoh, dan arti contoh diambil dari PDF terjemahan
// Indonesia: "II. Terjemahan - Pola Kalimat" (hlm. cetak 16) dan
// "IV. Keterangan Tata Bahasa" (hlm. cetak 18-19).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Potensial (可能動詞)',
    penjelasan:
      'Sebagai cara menyatakan kesanggupan, pada Pelajaran 18 di tingkat dasar I, telah mempelajari Kata Benda/Kata Kerja Bentuk Kamus + ことが できます. Di sini Anda akan mempelajari cara lain untuk menyatakan Kata Kerja Potensial. Bentuk Sopan / Bentuk Biasa: I かきます・かいいます → かけます・かえります → かける・かえる. II たべます → たべられます → たべられる. III きます・します → こられます・できます → こられる・できる. Kata Kerja Potensial dikelompokkan sebagai Kata Kerja Kelompok II: かえます　かえる　かえない　かえて. Dengan catatan bahwa わかります sudah bermakna kesanggupan maka tidak menjadi dalam bentuk わかれます. Kalimat yang digunakan Kata Kerja Potensial: Kata Kerja Potensial tidak menyatakan gerakan, melainkan keadaan. Objek dari Kata Kerja Transitif dinyatakan dengan を, sedangkan pada prinsipnya objek dari Kata Kerja Potensial dinyatakan dengan が. Tidak berubah kecuali Kata Bantu が. Dalam Kata Kerja Potensial terdapat dua cara penggunaan: menyatakan kemampuan dari pelaku, dan menyatakan kemungkinan untuk melakukan suatu perbuatan dalam kondisi tertentu.',
    contoh: [
      'わたしは 日本語を 話します。',
      'わたしは 日本語が 話せます。',
      '一人で 病院へ 行けますか。',
      '田中さんに 会えませんでした。',
      'ミラーさんは 漢字が 読めます。',
      'この 銀行で ドルが 換えられます。',
    ],
    artiContoh: [
      'Saya berbahasa Jepang.',
      'Saya bisa berbahasa Jepang.',
      'Bisa pergi ke rumah sakit sendiri?',
      'Tidak bisa bertemu dengan sdr. Tanaka.',
      'Sdr. Miller bisa membaca huruf Kanji.',
      'Di bank ini dolar dapat ditukar.',
    ],
    furigana: [{ base: '可能', ruby: 'かのう' }],
  },
  {
    no: 2,
    pola: '見えます・聞こえます（～ます）',
    penjelasan:
      'みえます, きこえます dengan tidak sengaja menyatakan suatu objek yang dapat ditangkap di lapangan pandang secara alami, atau bunyi yang terdengar di telinga secara alami. Objek tersebut dinyatakan dengan が. みえます, きこえます tidak dapat dipakai untuk hal yang memperhatikan secara sengaja, dan untuk hal itu dipakai Kata Kerja Potensial.',
    contoh: [
      '新幹線から 富士山が 見えます。',
      'ラジオの 音が 聞こえます。',
      '新宿で 今 黒沢の 映画が 見られます。',
      '電話で 天気予報が 聞けます。',
    ],
    artiContoh: [
      'Dari Shinkansen terlihat Gunung Fuji.',
      'Terdengar suara radio.',
      'Di Shinjuku sekarang bisa menonton film karya sutradara Kurosawa.',
      'Melalui telepon dapat mendengar prakiraan cuaca.',
    ],
  },
  {
    no: 3,
    pola: 'できます',
    penjelasan:
      'できます yang dipelajari di sini bermakna "menimbun", "rampung", "selesai", "dibuat", dan lain-lain. Bandingkan bentuk sederhana できます pada Pelajaran 18 (kemampuan).',
    contoh: [
      '駅の 前に 大きい スーパーが できました。',
      '時計の 修理は いつ できますか。',
    ],
    artiContoh: [
      'Di depan stasiun, telah dibangun pasar swalayan besar.',
      'Kapan perbaikan jam akan selesai?',
    ],
  },
  {
    no: 4,
    pola: '～しか ＋ Kata Benda/Kata Keterangan Bilangan',
    penjelasan:
      'しか ditambahkan pada Kata Benda atau Kata Keterangan Bilangan, dan selalu digunakan dengan menyertakan kata bentuk negatif. Menunjukkan hanya kata yang ditambahkan しか, dan menyingkirkan semua kata yang lain. Jika しか ditambahkan pada Kata Benda yang diikuti が atau を, maka が atau を dihilangkan. Untuk selain Kata Bantu tersebut, langsung ditambahkan di belakangnya. しか bermakna tidak sempurna.',
    contoh: ['ローマ字しか 書けません。', 'ローマ字だけ 書きます。'],
    artiContoh: ['Hanya bisa menulis huruf latin saja.', 'Bisa menulis huruf latin saja.'],
  },
]

// Catatan tata bahasa = catatan tambahan di luar 文型 (penomoran mulai dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda (Perbandingan)',
    penjelasan: 'Selain menyatakan topik, は berfungsi untuk menyatakan perbandingan.',
    contoh: [
      'ワインは 飲みますが、ビールは 飲みません。',
      'そのうえは 山が 見えましたが、きょうは 見えません。',
    ],
    artiContoh: [
      '(Saya) Minum anggur, tetapi tidak minum bir.',
      'Kemarin gunung terlihat, tetapi hari ini tidak terlihat.',
    ],
  },
  {
    no: 2,
    pola: 'は yang dianggap kata yang disertai Kata Bantu',
    penjelasan:
      'Sebagaimana telah dijelaskan di Kolom 1 pada Tingkat Dasar I (h.160), jika は disertai Kata Benda yang diikuti が atau を, maka が atau を dihilangkan, tetapi selain Kata Bantu tersebut, は ditambahkan di belakangnya.',
    contoh: [
      '日本では 馬を 見る ことが できません。',
      '天気の いい 日には 海が 見えるんです。',
      'ここからは 東京 スカイツリーが 見えません。',
    ],
    artiContoh: [
      'Di Jepang tidak bisa melihat kuda. (Pel. 18)',
      'Pada hari yang bercuaca baik, laut terlihat.',
      'Dari sini, Tokyo Sky Tree tidak terlihat.',
    ],
  },
]
