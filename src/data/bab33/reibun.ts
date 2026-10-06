import type { ReibunItem } from '@/types/bab'

// 例文 (第33課, Honsatsu idx 78 / cetak 60). Kalimat JP diambil apa adanya dari buku;
// terjemahan diambil 1:1 dari PDF Indonesia "II. Terjemahan > Contoh Kalimat" (idx 73 / cetak 52).
//
// CATATAN kualitas scan: halaman "Terjemahan" PDF Indonesia ini resolusi cetak rendah.
// Contoh 1 (terjemahan 頑張れ) tidak terbaca 100%; bagian yang tidak terbaca ditandai
// dengan [ ] dan dilengkapi sesuai kalimat JP.
export const reibun: ReibunItem[] = [
  {
    kalimat: 'だめだ。もう 走れない。……頑張れ。あと 1,000メートルだ。',
    arti: '……Aduh! Sudah tidak bisa berlari lagi. ……[Ayo semangat!] Tinggi lima ratus meter.',
    furigana: [
      { base: '走', ruby: 'はし' },
      { base: '頑張', ruby: 'がんば' },
      { base: 'メートル', ruby: 'mētoru' },
    ],
  },
  { kalimat: 'もう 時間がない。', arti: '……Sudah tidak ada waktu.', furigana: [{ base: '時間', ruby: 'じかん' }] },
  {
    kalimat: '……まだ 1分 ある。あきらめるな。ファイト！',
    arti: '……Masih ada satu menit. Jangan menyerah!',
    furigana: [{ base: '分', ruby: 'ぷん' }],
  },
  {
    kalimat: 'あそこに 何と 書いてあるんですか。……「止まれ」と 書いて あります。',
    arti: '……Di situ tertulis "Berhenti!".',
    furigana: [
      { base: '何', ruby: 'なん' },
      { base: '書', ruby: 'か' },
      { base: '止', ruby: 'と' },
      { base: '書', ruby: 'か' },
    ],
  },
  {
    kalimat: 'あの 漢字は 何と 読んでですか。……「禁煙」です。たばこを 吸うなという 意味です。',
    arti: '……"Kin en". Artinya "dilarang smoking".',
    furigana: [
      { base: '漢字', ruby: 'かんじ' },
      { base: '何', ruby: 'なん' },
      { base: '読', ruby: 'よ' },
      { base: '禁煙', ruby: 'きんえん' },
      { base: '吸', ruby: 'す' },
      { base: '意味', ruby: 'いみ' },
    ],
  },
  {
    kalimat: 'この マークは どういう 意味ですか。……洗濯機で 洗えるという 意味です。',
    arti: 'Maksudnya dapat dicuci dengan mesin cuci.',
    furigana: [
      { base: '意味', ruby: 'いみ' },
      { base: '洗濯機', ruby: 'せんたいき' },
      { base: '洗', ruby: 'あら' },
      { base: '意味', ruby: 'いみ' },
    ],
  },
  {
    kalimat: 'グプタさんは いますか。……今 出かけています。30分ぐらいで 戻ると 言っていました。',
    arti: '……Sekarang sedang keluar. Katanya akan segera kembali.',
    furigana: [
      { base: '今', ruby: 'いま' },
      { base: '出', ruby: 'で' },
      { base: '分', ruby: 'ぷん' },
      { base: '戻', ruby: 'もど' },
      { base: '言', ruby: 'い' },
    ],
  },
  {
    kalimat: 'すみませんが、渡辺さんに あしたの パーティーは 6時からだと 伝えていただけませんか。……わかりました。6時からだそうですね。',
    arti: 'Maaf, tolong sampaikan kepada sdr. Watanabe bahwa pesta besok dari pukul enam. ……Baik. Dari pukul enam, ya.',
    furigana: [
      { base: '渡辺', ruby: 'わたなべ' },
      { base: '伝', ruby: 'つた' },
      { base: '時', ruby: 'じ' },
    ],
  },
]