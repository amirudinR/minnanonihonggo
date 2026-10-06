import type { Bunpou } from '@/types/bab'

// 文型 Bab 41 — sumber: Honsatsu 第41課「文型」(idx 146 / cetak 128).
// Penjelasan & contoh diambil dari PDF Indonesia "Pelajaran 41 ·
// IV. Keterangan Tata Bahasa" (idx 123–124 / cetak 102–103).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'わたしは ワット先生に 本を いただきました。',
    penjelasan:
      'Kata Benda₁ (orang) に Kata Benda₂ を いただきます. Jika pembicara menerima barang (Kata Benda₂) dari orang yang berpangkat lebih tinggi (Kata Benda₁) daripada diri sendiri, menggunakan いただきます, tetapi tidak menggunakan もらいます.',
    contoh: ['① わたしは 社長に お土産を いただきました。'],
    artiContoh: ['Saya menerima oleh-oleh dari direktur.'],
    furigana: [
      { base: '社長', ruby: 'しゃちょう' },
      { base: '土産', ruby: 'みやげ' },
    ],
  },
  {
    no: 2,
    pola: 'わたしは 課長に 手紙の まちがいを 直して いただきました。',
    penjelasan:
      'Kata Kerja Bentuk て いただきます. Jika menyatakan pemberian dan penerimaan perbuatan, digunakan いただきます, くださいます, dan やります. いただきます dipakai bila pembicara menerima perbuatan dari atasan.',
    contoh: ['⑦ わたしは 課長に 手紙の まちがいを 直して いただきました。'],
    artiContoh: ['Saya dibantu oleh kepala bagian untuk dikoreksikan kesalahan surat.'],
    furigana: [
      { base: '課長', ruby: 'かちょう' },
      { base: '手紙', ruby: 'てがみ' },
      { base: '直', ruby: 'なお' },
    ],
  },
  {
    no: 3,
    pola: '部長の 奥さんは わたしに お茶を 教えて くださいました。',
    penjelasan:
      'Kata Kerja Bentuk て くださいます. Jika orang yang berpangkat tinggi yang memberi barang kepada lawan bicaranya, menggunakan くださいます, tetapi tidak menggunakan くれます. Adakalanya いただきます dan くださいます digunakan jika penerimanya anggota keluarga dari pembicara.',
    contoh: [
      '⑧ 部長の 奥さんが [わたしに] お茶を 教えて くださいました。',
      '⑨ 部長が [わたしを] 駅まで 送って くださいました。',
      '③ 娘 は 部長 に お土産を いただきました。',
      '④ 部長 が 娘 に お土産を くださいました。',
    ],
    artiContoh: [
      'Istri kepala bagian mengajarkan saya cara membuat teh.',
      'Kepala bagian mengantarkan (saya) sampai stasiun.',
      'Anak perempuan saya menerima oleh-oleh dari direktur.',
      'Kepala bagian memberikan anak perempuan saya oleh-oleh.',
    ],
    furigana: [
      { base: '部長', ruby: 'ぶちょう' },
      { base: '奥', ruby: 'おく' },
      { base: '茶', ruby: 'ちゃ' },
      { base: '教', ruby: 'おし' },
      { base: '駅', ruby: 'えき' },
      { base: '送', ruby: 'おく' },
      { base: '娘', ruby: 'むすめ' },
      { base: '土産', ruby: 'みやげ' },
    ],
  },
  {
    no: 4,
    pola: 'わたしは 息子に 紙飛行機を 作って やりました。',
    penjelasan:
      'Kata Benda₁ に Kata Benda₂ を やります. Jika pembicara memberi barang (Kata Benda₂) terhadap tumbuhan dan fauna (Kata Benda₁), sesungguhnya menggunakan やります. Tetapi, akhir-akhir ini banyak orang menggunakan あげます karena merasa lebih sopan daripada やります. Kata Kerja Bentuk て やります digunakan bila pembicara melakukan sesuatu untuk pihak yang lebih rendah/bawahan.',
    contoh: [
      '⑤ わたしは 息子に お菓子を やりました（あげました）。',
      '⑥ わたしは 犬に えさを やりました。',
      '⑪ わたしは 息子に 紙飛行機を 作って やりました（あげました）。',
      '⑫ わたしは 犬を 散歩に 連れて 行って やりました。',
    ],
    artiContoh: [
      'Saya memberikan anak laki-laki saya kue.',
      'Saya memberi umpan pada anjing.',
      'Saya membuat pesawat-pesawatan dari kertas untuk anak laki-laki. (membuatkan anak laki-laki)',
      'Saya membawa anjing jalan-jalan.',
    ],
    furigana: [
      { base: '息子', ruby: 'むすこ' },
      { base: '紙飛行機', ruby: 'かみひこうき' },
      { base: '作', ruby: 'つく' },
      { base: '菓子', ruby: 'かし' },
      { base: '犬', ruby: 'いぬ' },
      { base: '散歩', ruby: 'さんぽ' },
      { base: '連', ruby: 'つ' },
      { base: '行', ruby: 'い' },
    ],
  },
]

// Catatan tata bahasa = sub-bagian "IV. Keterangan Tata Bahasa" di buku Indonesia
// (terpisah dari bunpou, penomoran mulai dari 1). Sumber: idx 123–124 / cetak 102–103.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Ungkapan Pemberian dan Penerimaan (いただきます・くださいます・やります)',
    penjelasan:
      'Pada Pelajaran 7 dan Pelajaran 24 telah mempelajari ungkapan pemberian dan penerimaan untuk barang atau perbuatan. Selanjutnya pada pelajaran ini mempelajari ungkapan pemberian dan penerimaan yang mencerminkan hubungan antara pemberi dan penerimanya: いただきます (menerima dari atasan), くださいます (atasan memberi), やります (memberi kepada bawahan/hewan/tanaman).',
    contoh: [
      '① わたしは 社長に お土産を いただきました。',
      '② 社長が わたしに お土産を くださいました。',
      '⑤ わたしは 息子に お菓子を やりました（あげました）。',
      '⑥ わたしは 犬に えさを やりました。',
    ],
    artiContoh: [
      'Saya menerima oleh-oleh dari direktur.',
      'Direktur memberikan saya oleh-oleh.',
      'Saya memberikan anak laki-laki saya kue.',
      'Saya memberi umpan pada anjing.',
    ],
    furigana: [
      { base: '社長', ruby: 'しゃちょう' },
      { base: '土産', ruby: 'みやげ' },
      { base: '息子', ruby: 'むすこ' },
      { base: '菓子', ruby: 'かし' },
      { base: '犬', ruby: 'いぬ' },
    ],
  },
  {
    no: 2,
    pola: 'Pemberian dan Penerimaan Perbuatan',
    penjelasan:
      'Jika menyatakan pemberian dan penerimaan perbuatan digunakan いただきます, くださいます, dan やります. 〜て いただきます (menerima perbuatan dari atasan), 〜て くださいます (atasan melakukan untuk pembicara), 〜て やります (melakukan untuk bawahan/hewan/tanaman).',
    contoh: [
      '⑦ わたしは 課長に 手紙の まちがいを 直して いただきました。',
      '⑧ 部長の 奥さんが [わたしに] お茶を 教えて くださいました。',
      '⑩ 部長 が [わたしの] レポートを 直して くださいました。',
      '⑪ わたしは 息子に 紙飛行機を 作って やりました（あげました）。',
      '⑬ わたしは 娘の 宿題を 見て やりました（あげました）。',
    ],
    artiContoh: [
      'Saya dibantu oleh kepala bagian untuk dikoreksikan kesalahan surat.',
      'Istri kepala bagian mengajarkan saya cara membuat teh.',
      'Kepala bagian mengoreksikan laporan (saya).',
      'Saya membuat pesawat-pesawatan dari kertas untuk anak laki-laki.',
      'Saya membantu adik saya untuk membuat PR-nya.',
    ],
    furigana: [
      { base: '課長', ruby: 'かちょう' },
      { base: '手紙', ruby: 'てがみ' },
      { base: '直', ruby: 'なお' },
      { base: '部長', ruby: 'ぶちょう' },
      { base: '奥', ruby: 'おく' },
      { base: '茶', ruby: 'ちゃ' },
      { base: '教', ruby: 'おし' },
      { base: '息子', ruby: 'むすこ' },
      { base: '紙飛行機', ruby: 'かみひこうき' },
      { base: '作', ruby: 'つく' },
      { base: '娘', ruby: 'むすめ' },
      { base: '宿題', ruby: 'しゅくだい' },
      { base: '見', ruby: 'み' },
    ],
  },
  {
    no: 3,
    pola: 'Kata Kerja Bentuk て くださいませんか',
    penjelasan:
      'Dibandingkan dengan 〜て ください, ungkapan ini permintaan yang sikap halusnya lebih kuat. Akan tetapi, sikap halusnya kurang daripada 〜て いただけませんか yang telah dipelajari pada Pelajaran 26.',
    contoh: [
      '⑭ コピー機の 使い方を 教えて くださいませんか。',
      '⑮ コピー機の 使い方を 教えて いただけませんか。',
    ],
    artiContoh: [
      'Tolong ajarkan (saya) cara pemakaian mesin fotocopy.',
      'Apakah (Anda) bisa mengajarkan saya cara pemakaian mesin fotocopy? (Pel.26)',
    ],
    furigana: [
      { base: '使い方', ruby: 'つかいかた' },
      { base: '教', ruby: 'おし' },
    ],
  },
  {
    no: 4,
    pola: 'Kata Benda に Kata Kerja',
    penjelasan:
      'Kata Bantu に yang digunakan dalam contoh kalimat di bawah ini menyatakan arti "sebagai tanda ~" atau "sebagai kenang-kenangan ~".',
    contoh: [
      '⑯ 田中さんが 結婚祝いに この お血を くださいました。',
      '⑰ 北海道旅行の お土産に 人形を 買いました。',
    ],
    artiContoh: [
      'Srd. Tanaka memberikan saya piring ini sebagai tanda ucapan selamat atas pernikahan (saya).',
      '(Saya) Membeli boneka ini sebagai oleh-oleh perjalanan ke Hokkaido.',
    ],
    furigana: [
      { base: '田中', ruby: 'たなか' },
      { base: '結婚祝', ruby: 'けっこんいわ' },
      { base: '北海道', ruby: 'ほっかいどう' },
      { base: '旅行', ruby: 'りょこう' },
      { base: '土産', ruby: 'みやげ' },
      { base: '人形', ruby: 'にんぎょう' },
      { base: '買', ruby: 'か' },
    ],
  },
]
