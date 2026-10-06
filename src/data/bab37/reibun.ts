import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 37 — JP: Honsatsu 第37課「例文」(idx 112 / cetak 94).
// arti: PDF Indonesia "Pelajaran 37 · II. Terjemahan · Contoh Kalimat" (idx 97 / cetak 76).
// CATATAN EDISI: Percakapan Bab 37 berbeda total antara Honsatsu (Bandara Kansai) dan
// edisi Indonesia (percakapan 「金閣寺」). Untuk Contoh Kalimat, ID memakai contoh
// sendiri pada butir 5, 6, dan 7; butir-butir itu di bawah memakai terjemahan
// setia dari teks Honsatsu.
export const reibun: ReibunItem[] = [
  {
    kalimat: 'けさ 部長に 呼ばれました。',
    arti: 'Tadi pagi saya dipanggil oleh kepala bagian.',
    furigana: [
      { base: '部長', ruby: 'ぶちょう' },
      { base: '呼', ruby: 'よ' },
    ],
  },
  {
    kalimat: '……何か あったんですか。\n出張の レポートの 書き方に ついて 注意されました。',
    arti: '……Ada apa?\nDitegur soal cara penulisan laporan.',
    furigana: [
      { base: '何', ruby: 'なに' },
      { base: '出張', ruby: 'しゅっちょう' },
      { base: '書き方', ruby: 'かきかた' },
      { base: '注意', ruby: 'ちゅうい' },
    ],
  },
  {
    kalimat: 'どう したんですか。',
    arti: 'Kenapa?',
  },
  {
    kalimat: '……だれかに 傘を まちがえられたんです。',
    arti: '……Payung (saya) salah diambil oleh seseorang.',
    furigana: [{ base: '傘', ruby: 'かさ' }],
  },
  {
    kalimat: 'また 新しい 星が 発見されましたよ。',
    arti: 'Bintang baru ditemukan lagi.',
    furigana: [
      { base: '新', ruby: 'あたら' },
      { base: '星', ruby: 'ほし' },
      { base: '発見', ruby: 'はっけん' },
    ],
  },
  {
    kalimat: '……そうですか。',
    arti: '……O ya?',
  },
  {
    kalimat: 'ことしの 世界子ども会議は どこで 開かれますか。',
    arti: 'Pertemuan anak dunia tahun ini diadakan di mana?',
    furigana: [
      { base: '世界', ruby: 'せかい' },
      { base: '子ども', ruby: 'こども' },
      { base: '会議', ruby: 'かいぎ' },
      { base: '開', ruby: 'ひら' },
    ],
  },
  {
    kalimat: '……広島で 開かれます。',
    arti: '……Diadakan di Hiroshima.',
    furigana: [{ base: '広島', ruby: 'ひろしま' }],
  },
  {
    kalimat: 'お酒の 原料は 何ですか。\n……米です。ビールは？\n……ビールは 麦から 造られます。',
    arti: 'Apa yang menjadi bahan dasar minuman keras?\n……Beras.\nBir?\n……Bir terbuat dari gandum.',
    furigana: [
      { base: '酒', ruby: 'さ' },
      { base: '原料', ruby: 'げんりょう' },
      { base: '米', ruby: 'こめ' },
      { base: '麦', ruby: 'むぎ' },
      { base: '造', ruby: 'つく' },
    ],
  },
  {
    kalimat: 'ドミニカでは 何語が 使われて いますか。\n……スペイン語が 使われて います。',
    arti: 'Di Dominika menggunakan bahasa apa?\n……Menggunakan bahasa Spanyol.',
    furigana: [
      { base: '何語', ruby: 'なにご' },
      { base: '使', ruby: 'つか' },
    ],
  },
  {
    kalimat: '先生、飛行機は だれが 発明したんですか。\n……飛行機は ライト兄弟に よって 発明されました。',
    arti: 'Guru, siapa yang menemukan pesawat terbang?\n……Pesawat terbang itu ditemukan oleh brothers Wright.',
    furigana: [
      { base: '先生', ruby: 'せんせい' },
      { base: '飛行機', ruby: 'ひこうき' },
      { base: '発明', ruby: 'はつめい' },
      { base: '兄弟', ruby: 'きょうだい' },
    ],
  },
]
