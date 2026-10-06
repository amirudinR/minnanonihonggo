import type { KosaKata } from '@/types/bab'

// Kosakata Bab 43 — sumber: PDF Indonesia, "Pelajaran 43 · I. Kosa Kata" (idx 131–132).
// Kolom kana = bacaan, kolom kanji = bentuk kanji ('-' bila buku tidak mencantumkan kanji).
// Kolom [ ] pada kana = padanan kata (依拠) dari buku; arti Indonesia ditulis di dalam [ ].
// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi
// (disembunyikan default, tampil lewat toggle "Romaji").
export const kosakata: KosaKata[] = [
  { id: 'k43-01', kana: 'ふえますⅡ［輸出が～］', kanji: '増えます', romaji: 'fuemasu II [yushutsu ga ~]', arti: 'bertambah [ekspor]' },
  { id: 'k43-02', kana: 'へりますⅠ［輸出が～］', kanji: '減ります', romaji: 'herimasu I [yushutsu ga ~]', arti: 'berkurang [ekspor]' },
  { id: 'k43-03', kana: 'あがりますⅠ［値段が～］', kanji: '上がります', romaji: 'agarimasu I [nedan ga ~]', arti: 'meningkat [harga]' },
  { id: 'k43-04', kana: 'さがりますⅠ［値段が～］', kanji: '下がります', romaji: 'sagarimasu I [nedan ga ~]', arti: 'menurun [harga]' },
  { id: 'k43-05', kana: 'されますⅡ［ひもが～］', kanji: '切れます', romaji: 'saremasu II [himo ga ~]', arti: 'putus [tali]' },
  { id: 'k43-06', kana: 'とれますⅡ［ボタンを～］', kanji: '-', romaji: 'toremasu II [botan o ~]', arti: 'terlepas [kancing]', catatan: 'Buku Indonesia hanya memberi bacaan kana (とれますⅡ), tanpa bentuk kanji.' },
  { id: 'k43-07', kana: 'おちますⅡ［荷物が～］', kanji: '落ちます', romaji: 'ochimasu II [nimotsu ga ~]', arti: 'terjatuh [barang]' },
  { id: 'k43-08', kana: 'なくなりますⅠ［ガソリンが～］', kanji: '-', romaji: 'nakunimasu I [gasorin ga ~]', arti: 'habis' },
  { id: 'k43-09', kana: 'へん［な］', kanji: '変［な］', romaji: 'hen [na]', arti: 'aneh' },
  { id: 'k43-10', kana: 'しあわせ［な］', kanji: '幸せ［な］', romaji: 'shiawase [na]', arti: 'bahagia' },
  { id: 'k43-11', kana: 'らく［な］', kanji: '楽［な］', romaji: 'raku [na]', arti: 'ringan' },
  { id: 'k43-12', kana: 'うまい', kanji: '-', romaji: 'umai', arti: 'enak, lezat' },
  { id: 'k43-13', kana: 'まずい', kanji: '-', romaji: 'mazui', arti: 'tidak enak, tidak sedap' },
  { id: 'k43-14', kana: 'つまらない', kanji: '-', romaji: 'tsumaranai', arti: 'tidak menarik, tidak berguna, percuma' },
  { id: 'k43-15', kana: 'やさしい', kanji: '優しい', romaji: 'yasashii', arti: 'baik hati' },
  { id: 'k43-16', kana: 'ガソリン', kanji: '-', romaji: 'gasorin', arti: 'bensin' },
  { id: 'k43-17', kana: 'ひ', kanji: '火', romaji: 'hi', arti: 'api' },
  { id: 'k43-18', kana: 'パンフレット', kanji: '-', romaji: 'pamfuretto', arti: 'pamflet' },
  {
    id: 'k43-19',
    kana: 'いまにも',
    kanji: '今にも',
    romaji: 'ima ni mo',
    arti: 'sekarang juga',
    catatan:
      'Buku Indonesia: "dipakai untuk menggambarkan kondisi Persia akan terjadi perubahan". Dipakai sebagai Kata Keterangan bersama ～そうです (lihat Pel. 43, Keterangan Tata Bahasa no. 1).',
  },
  { id: 'k43-20', kana: 'わあ', kanji: '-', romaji: 'waa', arti: 'Wah!' },
  { id: 'k43-21', kana: 'ばら', kanji: '-', romaji: 'bara', arti: 'bunga mawar', kategori: 'fiksi', catatan: 'Muncul pada 〈読み物〉 (bahan bacaan) Pelajaran 43.' },
  { id: 'k43-22', kana: 'ドライブ', kanji: '-', romaji: 'doraibu', arti: 'berjalan-jalan dengan mobil', kategori: 'ungkapan' },
  { id: 'k43-23', kana: 'りゆう', kanji: '理由', romaji: 'riyuu', arti: 'alasan' },
  { id: 'k43-24', kana: 'あやりますⅠ', kanji: '謝ります', romaji: 'ayamasu I', arti: 'mohon maaf' },
  { id: 'k43-25', kana: 'しりあいますⅠ', kanji: '知り合います', romaji: 'shiraiamasu I', arti: 'berkenalan' },
]