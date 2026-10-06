import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 46 — JP: Honsatsu 第46課「例文」(idx 188 / cetak 170).
// arti: PDF Indonesia "Pelajaran 46 · II. Terjemahan · Contoh Kalimat" (idx 151 / cetak 130).
// CATATAN EDISI: butir 1b dan butir 6 TIDAK ada di edisi Indonesia (ID 1b = "naik
// kereta rel listrik", 6 = "Sdr. Miller belum datang"). Arti kedua butir itu =
// terjemahan setia dari teks Honsatsu.
export const reibun: ReibunItem[] = [
  {
    kalimat: 'もしもし、田中ですが、今 いいでしょうか。',
    arti: 'Halo, Tanaka di sini, sekarang boleh mengganggu?',
    furigana: [
      { base: '田中', ruby: 'たなか' },
      { base: '今', ruby: 'いま' },
    ],
  },
  {
    kalimat: '……すみません。今から 出かける ところなんです。帰ったら、こちらから 電話します。',
    arti: '……Maaf. Saya sedang bersiap untuk keluar sekarang. Nanti setelah pulang, saya akan telepon ke sini.',
    furigana: [
      { base: '今', ruby: 'いま' },
      { base: '出', ruby: 'で' },
      { base: '帰', ruby: 'かえ' },
      { base: '電話', ruby: 'でんわ' },
    ],
  },
  {
    kalimat: '故障の 原因は わかりましたか。',
    arti: 'Apakah sudah jelas apa penyebab kerusakan?',
    furigana: [
      { base: '故障', ruby: 'こしょう' },
      { base: '原因', ruby: 'げんいん' },
    ],
  },
  {
    kalimat: '……いいえ、今 調べて いる ところです。',
    arti: '……Belum, sekarang sedang diperiksa.',
    furigana: [
      { base: '今', ruby: 'いま' },
      { base: '調', ruby: 'しら' },
    ],
  },
  {
    kalimat: '渡辺さんは いますか。',
    arti: 'Apakah ada sdr. Watanabe?',
    furigana: [{ base: '渡辺', ruby: 'わたなべ' }],
  },
  {
    kalimat: '……あ、たった今 帰った ところです。まだ エレベーターの 所に いるかも しれません。',
    arti: '……Ah, baru saja pulang. Mungkin masih ada di tempat lift.',
    furigana: [
      { base: '今', ruby: 'いま' },
      { base: '帰', ruby: 'かえ' },
      { base: '所', ruby: 'ところ' },
    ],
  },
  {
    kalimat: '仕事は どうですか。',
    arti: 'Bagaimana pekerjaannya?',
    furigana: [{ base: '仕事', ruby: 'しごと' }],
  },
  {
    kalimat: '……先月 会社に 入った ばかりですから、まだ よく わかりません。',
    arti: '……Saya kurang tahu karena bulan lalu saya baru masuk ke perusahaan.',
    furigana: [
      { base: '先月', ruby: 'せんげつ' },
      { base: '会社', ruby: 'かいしゃ' },
      { base: '入', ruby: 'はい' },
    ],
  },
  {
    kalimat: 'この ビデオカメラ、先週 買った ばかりなのに、もう 動かないんです。',
    arti: 'Kamera video ini tidak berfungsi padahal belinya baru minggu lalu.',
    furigana: [
      { base: '先週', ruby: 'せんしゅう' },
      { base: '買', ruby: 'か' },
      { base: '動', ruby: 'うご' },
    ],
  },
  {
    kalimat: '……じゃ、ちょっと 見せて ください。',
    arti: '……Coba, perlihatkan sebentar.',
    furigana: [{ base: '見', ruby: 'み' }],
  },
  {
    kalimat: 'テレサの 熱は 下がるでしょうか。',
    arti: 'Apakah demam Teresa sudah turun?',
    furigana: [
      { base: '熱', ruby: 'ねつ' },
      { base: '下', ruby: 'さ' },
    ],
  },
  {
    kalimat: '……今 注射を しましたから、3時間後には 下がる はずです。',
    arti: '……Karena saya baru memberikan suntikan tadi, seharusnya sudah turun dalam 3 jam.',
    furigana: [
      { base: '今', ruby: 'いま' },
      { base: '注射', ruby: 'ちゅうしゃ' },
      { base: '時間後', ruby: 'じかんご' },
      { base: '下', ruby: 'さ' },
    ],
  },
]
