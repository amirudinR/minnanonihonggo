import type { KosaKata } from '@/types/bab'

// Kosakata Bab 45 — sumber: PDF Indonesia, "Pelajaran 45 · I. Kosa Kata" (idx 143–144,
// hlm. cetak 122–123). Kolom kana = bacaan, kolom kanji = bentuk kanji ('-' bila buku
// tidak mencantumkan kanji).
// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi
// (disembunyikan default, tampil lewat toggle "Romaji").
// Kemunculan item mengikuti urutan kolom di buku: 143 (I. Kosa Kata) lalu 144
// (〈会話〉 + 〈読み物〉).
export const kosakata: KosaKata[] = [
  { id: 'k45-01', kana: 'しんじますⅡ', kanji: '信じます', romaji: 'shinjimasu II', arti: 'percaya' },
  { id: 'k45-02', kana: 'キャンセルしますⅢ', kanji: '-', romaji: 'kyanserus shimasu III', arti: 'membatalkan' },
  { id: 'k45-03', kana: 'しらせますⅡ', kanji: '知らせます', romaji: 'shirasemasu II', arti: 'memberitahukan' },
  { id: 'k45-04', kana: 'ほうしょうしょ', kanji: '保証書', romaji: 'hōshōsho', arti: 'surat garansi' },
  { id: 'k45-05', kana: 'りょうしゅうしょ', kanji: '領収書', romaji: 'ryōshūsho', arti: 'kuitansi' },
  { id: 'k45-06', kana: 'キャンプ', kanji: '-', romaji: 'kyanpu', arti: 'kemah' },
  { id: 'k45-07', kana: 'ちゅうし', kanji: '中止', romaji: 'chūshi', arti: 'pembatalan' },
  { id: 'k45-08', kana: 'てん', kanji: '点', romaji: 'ten', arti: 'poin' },
  { id: 'k45-09', kana: 'うめ', kanji: '梅', romaji: 'ume', arti: 'bunga plum' },
  { id: 'k45-10', kana: '110ばん', kanji: '110番', romaji: 'hyaku jū-ban', arti: 'nomor telepon polisi untuk saat darurat' },
  {
    id: 'k45-11',
    kana: '119ばん',
    kanji: '119番',
    romaji: 'hyaku kyū-ban',
    arti: 'nomor telepon departemen pemadam kebakaran dan penanganan bencana untuk saat darurat',
  },
  { id: 'k45-12', kana: 'きゅうに', kanji: '急に', romaji: 'kyūni', arti: 'mendadak, tiba-tiba' },
  { id: 'k45-13', kana: 'むりに', kanji: '無理に', romaji: 'murini', arti: 'dengan paksa' },
  { id: 'k45-14', kana: 'たのしみにしています', kanji: '楽しみにしています', romaji: 'tanoshimi ni shite imasu', arti: 'menikmati' },
  { id: 'k45-15', kana: 'いじょうです。', kanji: '以上です。', romaji: 'ijō desu', arti: 'Sekian.' },
  { id: 'k45-16', kana: '係員', kanji: '係員', romaji: 'kain', arti: 'staf, petugas' },
  { id: 'k45-17', kana: 'コース', kanji: '-', romaji: 'kōsu', arti: 'jalur, jalan, rute' },
  { id: 'k45-18', kana: 'スタート', kanji: '-', romaji: 'sutāto', arti: 'mulai' },
  { id: 'k45-19', kana: '一位', kanji: '一位', romaji: 'ikki', arti: 'juara ke-1' },
  { id: 'k45-20', kana: '優勝しますⅢ', kanji: '優勝しますⅢ', romaji: 'yūshō shimasu III', arti: 'menang' },
  { id: 'k45-21', kana: '悩み', kanji: '悩み', romaji: 'nayami', arti: 'masalah' },
  { id: 'k45-22', kana: '自覚まし［時計］', kanji: '自覚まし［時計］', romaji: 'jikakashi [keidoki]', arti: 'weker' },
  { id: 'k45-23', kana: '目が覚めますⅡ', kanji: '目が覚めますⅡ', romaji: 'me ga samemasu II', arti: 'terbangun' },
  { id: 'k45-24', kana: '大学生', kanji: '大学生', romaji: 'daigakusei', arti: 'mahasiswa' },
  { id: 'k45-25', kana: '回答', kanji: '回答', romaji: 'kaitō', arti: 'jawaban (～します：menjawab)' },
  { id: 'k45-26', kana: '鳴りますⅠ', kanji: '鳴りますⅠ', romaji: 'narimasu I', arti: 'berbunyi' },
  { id: 'k45-27', kana: 'セットしますⅢ', kanji: '-', romaji: 'setto shimasu III', arti: 'memasang, mengatur' },
  { id: 'k45-28', kana: 'それでも', kanji: '-', romaji: 'sore demo', arti: 'masih' },
]
