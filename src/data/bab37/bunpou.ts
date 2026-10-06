import type { Bunpou } from '@/types/bab'

// 文型 Bab 37 — sumber: Honsatsu 第37課「文型」(idx 112 / cetak 94).
// Penjelasan & contoh diambil dari PDF Indonesia "Pelajaran 37 ·
// IV. Keterangan Tata Bahasa" (idx 99–100 / cetak 78–79).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '子どもの とき、よく 母に しかられました。',
    penjelasan:
      'Kata Benda₁ (orang₁) は Kata Benda₂ (orang₂) に Kata Kerja Pasif. Pola kalimat yang perbuatan yang dilakukan oleh orang₂ terhadap orang₁, mengekspresikan dari pihak yang menerima perbuatan (orang₁). Menyatakan dengan cara bahwa orang₁ diangkat sebagai topik, kemudian pelaku (orang₂) dibubuhkan Kata Bantu に. Kata Kerja Pasif dikonjugasikan sebagai Kata Kerja Kelompok II.',
    contoh: [
      '① 先生が わたしを 褒めました。→ わたしは 先生に 褒められました。',
      '② 母が わたしに 買い物を 頼みました。→ わたしは 母に 買い物を 頼まれました。',
      '③ わたしは 犬に かまれました。',
    ],
    artiContoh: [
      'Guru yang memuji saya. → Saya dipuji oleh guru.',
      'Ibu yang meminta kepada saya untuk berbelanja. → Saya diminta oleh ibu untuk berbelanja.',
      'Saya digigit anjing.',
    ],
    furigana: [
      { base: '子', ruby: 'こ' },
      { base: '母', ruby: 'はは' },
      { base: '先生', ruby: 'せんせい' },
      { base: '褒', ruby: 'ほ' },
      { base: '買物', ruby: 'かいもの' },
      { base: '頼', ruby: 'たの' },
      { base: '犬', ruby: 'いぬ' },
    ],
  },
  {
    no: 2,
    pola: 'ラッシュの 電車で 足を 踏まれました。',
    penjelasan:
      'Kata Benda₁ (orang₁) は Kata Benda₂ (orang₂) に Kata Benda₃ を Kata Kerja Pasif. Menyatakan bahwa orang₂ melakukan suatu perbuatan terhadap benda milik orang₁ (Kata Benda₃), kemudian pada umumnya perbuatan tersebut sering dianggap gangguan oleh orang₁ (pemiliknya). Yang diangkat sebagai topik adalah bukan benda milik melainkan orang (pemilik) yang merasa terganggu akan perbuatan tersebut.',
    contoh: [
      '④ 弟が わたしの パソコンを 壊しました。→ わたしは 弟に パソコンを 壊されました。',
      '⑤ わたしは 犬に 手を かまれました。',
      '⑥ わたしは 友達に 自転車を 修理して もらいました。',
    ],
    artiContoh: [
      'Adik laki-laki saya merusak PC saya. → PC saya dirusak oleh adik laki-laki saya.',
      'Tangan saya digigit anjing.',
      'Saya dibantu oleh teman untuk memperbaiki sepeda.',
    ],
    furigana: [
      { base: '電車', ruby: 'でんしゃ' },
      { base: '足', ruby: 'あし' },
      { base: '踏', ruby: 'ふ' },
      { base: '弟', ruby: 'おとうと' },
      { base: '壊', ruby: 'こわ' },
      { base: '友達', ruby: 'ともだち' },
      { base: '自転車', ruby: 'じてんしゃ' },
      { base: '修理', ruby: 'しゅうり' },
    ],
  },
  {
    no: 3,
    pola: '法隆寺は 607年に 建てられました。',
    penjelasan:
      'Kata Benda (benda/hal) が／は Kata Kerja Pasif. Ketika kejelasan suatu prihal dan tidak mempersoalkan orang yang melakukan perbuatan, maka adakalanya untuk mengekspresikan dengan memakai Kata Kerja Pasif yang benda atau prihal dijadikan sebagai subjek atau topik.',
    contoh: [
      '⑦ 大阪で 展覧会が 開かれました。',
      '⑧ 電話は 19世紀に 発明されました。',
      '⑨ この 本は 世界中で 読まれて います。',
    ],
    artiContoh: [
      'Di Osaka diadakan pameran.',
      'Telepon ditemukan pada abad kesembilan belas.',
      'Buku ini dibaca di seluruh dunia.',
    ],
    furigana: [
      { base: '法隆寺', ruby: 'ほうりゅうじ' },
      { base: '建', ruby: 'た' },
      { base: '大阪', ruby: 'おおさか' },
      { base: '展覧会', ruby: 'てんらんかい' },
      { base: '開', ruby: 'ひら' },
      { base: '電話', ruby: 'でんわ' },
      { base: '世紀', ruby: 'せいき' },
      { base: '発明', ruby: 'はつめい' },
      { base: '世界中', ruby: 'せかいじゅう' },
      { base: '読', ruby: 'よ' },
    ],
  },
]

// Catatan tata bahasa = sub-bagian "IV. Keterangan Tata Bahasa" di buku Indonesia
// (terpisah dari bunpou, penomoran mulai dari 1). Sumber: idx 99–100 / cetak 78–79.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Pasif',
    penjelasan:
      'Kata Kerja Pasif dikonjugasikan sebagai Kata Kerja Kelompok II. Contoh: かかれます → かかれる → かかれ(ない) → かかれて.',
    contoh: ['I かきます → かかれます  II ほめます → ほめられます  III きます → こられます・します → されます'],
    artiContoh: ['（Bentuk Sopan dan Bentuk Biasa）'],
    furigana: [
      { base: '書', ruby: 'か' },
      { base: '褒', ruby: 'ほ' },
    ],
  },
  {
    no: 2,
    pola: 'Kata Benda₁ (orang₁) は Kata Benda₂ (orang₂) に Kata Kerja Pasif',
    penjelasan:
      'Pola kalimat yang perbuatan yang dilakukan oleh orang₂ terhadap orang₁, mengekspresikan dari pihak yang menerima perbuatan (orang₁). Menyatakan dengan cara bahwa orang₁ diangkat sebagai topik, kemudian pelaku (orang₂) dibubuhkan Kata Bantu に. Adakalanya selain manusia, benda yang bergerak (hewan, mobil dan lain-lain) menjadi pelaku.',
    contoh: [
      '① わたしは 先生に 褒められました。',
      '② わたしは 母に 買い物を 頼まれました。',
      '③ わたしは 犬に かまれました。',
    ],
    artiContoh: [
      'Saya dipuji oleh guru.',
      'Saya diminta oleh ibu untuk berbelanja.',
      'Saya digigit anjing.',
    ],
    furigana: [
      { base: '先生', ruby: 'せんせい' },
      { base: '褒', ruby: 'ほ' },
      { base: '母', ruby: 'はは' },
      { base: '買物', ruby: 'かいもの' },
      { base: '頼', ruby: 'たの' },
      { base: '犬', ruby: 'いぬ' },
    ],
  },
  {
    no: 3,
    pola: 'Kata Benda₁ (orang₁) は Kata Benda₂ (orang₂) に Kata Benda₃ を Kata Kerja Pasif',
    penjelasan:
      'Menyatakan bahwa orang₂ melakukan suatu perbuatan terhadap benda milik orang₁ (Kata Benda₃), kemudian pada umumnya perbuatan tersebut sering dianggap gangguan oleh orang₁ (pemiliknya). [Perhatian 1] Yang diangkat sebagai topik adalah bukan benda milik melainkan orang (pemilik) yang merasa terganggu akan perbuatan. [Perhatian 2] Pola kalimat ini dalam kebanyakan kasus berarti orang yang melakukan perbuatan yang menganggap perbuatan tersebut sebagai gangguan, maka perlu hati-hati. ～て もらいます digunakan jika berterima kasih karena dilakukan sesuatu.',
    contoh: [
      '④ わたしは 弟に パソコンを 壊されました。',
      '⑤ わたしは 犬に 手を かまれました。',
      '⑥ わたしは 友達に 自転車を 修理して もらいました。',
    ],
    artiContoh: [
      'PC saya dirusak oleh adik laki-laki saya.',
      'Tangan saya digigit anjing.',
      'Saya dibantu oleh teman untuk memperbaiki sepeda.',
    ],
    furigana: [
      { base: '弟', ruby: 'おとうと' },
      { base: '壊', ruby: 'こわ' },
      { base: '犬', ruby: 'いぬ' },
      { base: '手', ruby: 'て' },
      { base: '友達', ruby: 'ともだち' },
      { base: '自転車', ruby: 'じてんしゃ' },
      { base: '修理', ruby: 'しゅうり' },
    ],
  },
  {
    no: 4,
    pola: 'Kata Benda (benda/hal) が／は Kata Kerja Pasif',
    penjelasan:
      'Ketika kejelasan suatu prihal dan tidak mempersoalkan orang yang melakukan perbuatan, maka adakalanya untuk mengekspresikan dengan memakai Kata Kerja Pasif yang benda atau prihal dijadikan sebagai subjek atau topik.',
    contoh: [
      '⑦ 大阪で 展覧会が 開かれました。',
      '⑧ 電話は 19世紀に 発明されました。',
      '⑨ この 本は 世界中で 読まれて います。',
    ],
    artiContoh: [
      'Di Osaka diadakan pameran.',
      'Telepon ditemukan pada abad kesembilan belas.',
      'Buku ini dibaca di seluruh dunia.',
    ],
    furigana: [
      { base: '大阪', ruby: 'おおさか' },
      { base: '展覧会', ruby: 'てんらんかい' },
      { base: '開', ruby: 'ひら' },
      { base: '電話', ruby: 'でんわ' },
      { base: '世紀', ruby: 'せいき' },
      { base: '発明', ruby: 'はつめい' },
      { base: '本', ruby: 'ほん' },
      { base: '世界中', ruby: 'せかいじゅう' },
      { base: '読', ruby: 'よ' },
    ],
  },
  {
    no: 5,
    pola: 'Kata Benda から／Kata Benda で つくります',
    penjelasan:
      'Jika membuat barang, bahan baku itu dinyatakan dengan から, dan bahan dinyatakan dengan で.',
    contoh: [
      '⑩ ビールは 麦から 造られます。',
      '⑪ 昔 日本の 家は 木で 造られました。',
    ],
    artiContoh: [
      'Bir terbuat dari gandum.',
      'Pada zaman dulu, perumahan Jepang dibuat dari kayu.',
    ],
    furigana: [
      { base: '麦', ruby: 'むぎ' },
      { base: '造', ruby: 'つく' },
      { base: '昔', ruby: 'むかし' },
      { base: '日本', ruby: 'にほん' },
      { base: '家', ruby: 'いえ' },
      { base: '木', ruby: 'き' },
    ],
  },
  {
    no: 6,
    pola: 'Kata Benda₁ の Kata Benda₂',
    penjelasan:
      '原料 の 麦 pada ⑫ bermaksud untuk menyebutkan bahwa bahan bakunya gandum. Sebagai contoh lain, ada ペットの いぬ (Pel.39), むすこの ハンス (Pel.43) dan lain-lain.',
    contoh: ['⑫ ビールは 麦から 造られます。これが 原料の 麦です。'],
    artiContoh: ['Bir terbuat dari gandum. Inilah bahan bakunya, yaitu gandum.'],
    furigana: [
      { base: '麦', ruby: 'むぎ' },
      { base: '原料', ruby: 'げんりょう' },
    ],
  },
  {
    no: 7,
    pola: 'この／その／あの Kata Benda（Posisi）',
    penjelasan:
      'Kata Benda yang menyatakan posisi seperti うえ, した, なか, となり, ちかく dibubuhkan この, その, あの, kemudian Kata Petunjuk menyatakan hubungan posisi dengan benda yang ditunjuk.',
    contoh: ['⑬ あの 中に 入れますか。……あの 中は 入れません。'],
    artiContoh: ['Apakah bisa masuk ke dalam itu? ……Tidak bisa masuk ke dalam.'],
    furigana: [{ base: '中', ruby: 'なか' }, { base: '入', ruby: 'はい' }],
  },
]
