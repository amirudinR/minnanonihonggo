import type { Bunpou } from '@/types/bab'

// 文型 Bab 48 — sumber: Honsatsu 第48課「文型」(idx 204 / cetak 186).
// Penjelasan & contoh diambil dari PDF Indonesia "Pelajaran 48 · II. Terjemahan — Pola Kalimat"
// (idx 163 / cetak 142) dan "IV. Keterangan Tata Bahasa §2" (idx 165 / cetak 144).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '息子を イギリスへ 留学させます。',
    penjelasan:
      'Kalimat Kata Kerja Kausatif bentuk 1): Kata Benda (orang) を Kata Kerja Kausatif (Kata Kerja Intransitif) → "menyuruh orang melakukan (Kata Kerja Intransitif)". Dalam bentuk ini pelaku orang ditunjuk dengan を, dan seperti 2) jika Kata Kerja Transitif pelaku ditunjuk dengan に.',
    contoh: ['① 部長は ミラーさんを アメリカへ 出張させます。'],
    artiContoh: ['Kepala Bagian menyuruh sdr. Miller dinas ke Amerika Serikat.'],
    furigana: [
      { base: '息子', ruby: 'むすこ' },
      { base: '留学', ruby: 'りゅうがく' },
      { base: '部長', ruby: 'ぶちょう' },
      { base: '出張', ruby: 'しゅっちょう' },
    ],
  },
  {
    no: 2,
    pola: '娘に ピアノを 習わせます。',
    penjelasan:
      'Kalimat Kata Kerja Kausatif bentuk 2): Kata Benda₁ (orang) に Kata Benda₂ を Kata Kerja Kausatif (Kata Kerja Transitif) → "menyuruh orang melakukan (Kata Kerja Transitif)". Kata Kerja Kausatif dikonjugasi sebagai Kata Kerja Kelompok II. Contoh bentuk kamus: いかせる・かかせる・のませる・たべさせる・こさせる・させる.',
    contoh: ['⑤ 先生は 生徒に 自由に 意見を 言わせました。'],
    artiContoh: ['Guru membiarkan siswa untuk mengutarakan pendapat secara bebas.'],
    furigana: [
      { base: '娘', ruby: 'むすめ' },
      { base: '習', ruby: 'なら' },
      { base: '生徒', ruby: 'せいと' },
      { base: '自由', ruby: 'じゆう' },
      { base: '意見', ruby: 'いけん' },
    ],
  },
]

// Catatan tata bahasa = sub-bagian "IV. Keterangan Tata Bahasa" di buku Indonesia
// (terpisah dari bunpou, penomoran mulai dari 1).
// Sumber: idx 165–166 / cetak 144–145.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Kausatif （Bentuk 使役）',
    penjelasan:
      'Tabel konjugasi 使役. I: いきます→いかせます／いそぎます→いそがせます／のみます→のませます／はこびます→はこばせます／つくります→つくらせます／てつだいます→てつだわせます／もちます→もたせます／なおします→なおさせます. II: たべます→たべさせます／しらべます→しらべさせます／います→いませます. III: きます→こさせます／します→させます. Kata Kerja Kausatif dikonjugasi sebagai Kata Kerja Kelompok II. Contoh bentuk dari buku: かかせます・かかせる・かかせ（ない）・かかせて.',
    contoh: ['① 部長は ミラーさんを アメリカへ 出張させます。'],
    artiContoh: ['Kepala Bagian menyuruh sdr. Miller dinas ke Amerika Serikat.'],
    furigana: [
      { base: '部長', ruby: 'ぶちょう' },
      { base: '出張', ruby: 'しゅっちょう' },
    ],
  },
  {
    no: 2,
    pola: 'Kalimat Kata Kerja Kausatif — dua jenis pelaku',
    penjelasan:
      'Dalam Kata Kerja Kausatif terdapat dua jenis, yaitu pelaku orang ditunjuk dengan を dan に. 1) Jika Kata Kerja berasal dari Kata Kerja Intransitif pada dasarnya pelaku orang ditunjuk dengan を. 2) Jika Kata Kerja Transitif pelaku orang ditunjuk dengan に. [Perhatian] Kata Kerja Intransitif yang menggunakan "Kata Benda (tempat) を", pelaku dinyatakan dengan に.',
    contoh: [
      '① 部長は ミラーさんを アメリカへ 出張させます。',
      '② わたしは 娘を 自由に 遊ばせました。',
      '③ わたしは 子どもに 道の 右側を 歩かせます。',
      '④ 朝は 忙しいですから、娘に 朝ごはんの 準備を 手伝わせます。',
      '⑤ 先生は 生徒に 自由に 意見を 言わせました。',
    ],
    artiContoh: [
      'Kepala Bagian menyuruh sdr. Miller dinas ke Amerika Serikat.',
      'Saya membiarkan anak perempuan saya bermain dengan bebas.',
      'Saya menyuruh anak berjalan di sebelah kanan jalan.',
      'Karena pagi hari sibuk, saya menyuruh anak perempuan saya membantu saya untuk mempersiapkan sarapan.',
      'Guru membiarkan siswa untuk mengutarakan pendapat secara bebas.',
    ],
    furigana: [
      { base: '遊', ruby: 'あそ' },
      { base: '道', ruby: 'みち' },
      { base: '右側', ruby: 'みぎがわ' },
      { base: '歩', ruby: 'ある' },
      { base: '朝', ruby: 'あさ' },
      { base: '準備', ruby: 'じゅんび' },
      { base: '手伝', ruby: 'てつだ' },
      { base: '生徒', ruby: 'せいと' },
      { base: '自由', ruby: 'じゆう' },
      { base: '意見', ruby: 'いけん' },
    ],
  },
  {
    no: 3,
    pola: 'Cara memakai Kata Kerja Kausatif',
    penjelasan:
      'Kata Kerja Kausatif menyatakan paksaan atau persetujuan. Misalnya digunakan ketika orang yang posisinya di atas memaksakan suatu perbuatan terhadap orang yang posisinya di bawah seperti orang tua terhadap anaknya, kakak laki-laki terhadap adik laki-lakinya, atasan terhadap bawahannya dan lain-lainnya, atau menyetujui perbuatan orang yang posisinya di bawah. ①, ③, dan ④ di atas ini adalah contoh dari paksaan, dan ② dan ⑤ adalah contoh persetujuan. [Perhatian] Biasanya terhadap orang yang tidak memiliki posisi untuk memaksa atau menyetujui, maka tidak memakai cara ungkapan yang menggunakan Kata Kerja Kausatif.',
    contoh: [
      '⑥ わたしは 部長に 説明して いただきました。',
      '⑦ わたしは 友達に 説明して もらいました。',
    ],
    artiContoh: [
      'Saya minta kepada kepala bagian untuk menjelaskan.',
      'Saya minta kepada teman untuk menjelaskan.',
    ],
    furigana: [
      { base: '部長', ruby: 'ぶちょう' },
      { base: '説明', ruby: 'せつめい' },
      { base: '友達', ruby: 'ともだち' },
    ],
  },
  {
    no: 4,
    pola: 'Kata Kerja Kausatif Bentuk て いただけませんか',
    penjelasan:
      'Pada Pelajaran 26 telah mempelajari Kata Kerja Bentuk て いただけませんか. Ini adalah cara ungkapan meminta sesuatu kepada lawan bicara, tetapi jika si pembicara meminta persetujuan akan perbuatan sendiri maka Kata Kerja Kausatif Bentuk て いただけませんか.',
    contoh: [
      '⑧ いい 先生を 紹介して いただけませんか。',
      '⑨ 友達の 結婚式が あるので、早く 帰らせていただけませんか。',
    ],
    artiContoh: [
      'Apakah dapat memperkenalkan guru yang baik? (Pel.26)',
      'Mohon izinkan saya untuk pulang cepat sebab ada pesta pernikahan teman?',
    ],
    furigana: [
      { base: '紹介', ruby: 'しょうかい' },
      { base: '友達', ruby: 'ともだち' },
      { base: '結婚式', ruby: 'けっこんしき' },
    ],
  },
]
