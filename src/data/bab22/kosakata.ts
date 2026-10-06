import type { KosaKata } from '@/types/bab'

// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi
// (disembunyikan default, tampil lewat toggle "Romaji").
// Sumber: PDF Indonesia "Pelajaran 22 — I. Kosa Kata" (idx 156-157).
export const kosakata: KosaKata[] = [
  { id: 'k22-01', kana: 'きます', kanji: '着ます', romaji: 'kimasu', arti: 'memakai (kemeja)' },
  { id: 'k22-02', kana: 'はきます', kanji: '穿きます', romaji: 'hakimasu', arti: 'memakai (sepatu, celana)' },
  { id: 'k22-03', kana: 'かぶります', romaji: 'kaburimasu', arti: 'memakai (topi)' },
  { id: 'k22-04', kana: 'かけます', romaji: 'kakemasu', arti: 'memakai [kaca mata]', catatan: '［めがねを～］［眼鏡を～］' },
  { id: 'k22-05', kana: 'します', romaji: 'shimasu', arti: 'memakai [dasi]', catatan: '［ネクタイを～］' },
  { id: 'k22-06', kana: 'うまれます', kanji: '生まれます', romaji: 'umaremasu', arti: 'lahir' },
  { id: 'k22-07', kana: 'わたしたち', romaji: 'watashitachi', arti: 'kami, kita' },
  { id: 'k22-08', kana: 'コート', romaji: 'kooto', arti: 'mantel' },
  { id: 'k22-09', kana: 'セーター', romaji: 'seetaa', arti: 'sweater, baju hangat' },
  { id: 'k22-10', kana: 'スーツ', romaji: 'suutsu', arti: 'pakaian setelan' },
  { id: 'k22-11', kana: 'ぼうし', kanji: '帽子', romaji: 'boushi', arti: 'topi' },
  { id: 'k22-12', kana: 'めがね', kanji: '眼鏡', romaji: 'megane', arti: 'kaca mata' },
  { id: 'k22-13', kana: 'ケーキ', romaji: 'keeki', arti: 'kue' },
  { id: 'k22-14', kana: '[お]べんとう', kanji: '[お]弁当', romaji: '[o]bentou', arti: 'bekal' },
  { id: 'k22-15', kana: 'ロボット', romaji: 'robotto', arti: 'robot' },
  { id: 'k22-16', kana: 'ユーモア', romaji: 'yumoa', arti: 'humor' },
  { id: 'k22-17', kana: 'つごう', kanji: '都合', romaji: 'tsugou', arti: 'kondisi' },
  { id: 'k22-18', kana: 'よく', romaji: 'yoku', arti: 'sering kali' },
  { id: 'k22-19', kana: 'えーと', romaji: 'eeto', arti: 'Itu...', catatan: '〈練習C〉' },
  { id: 'k22-20', kana: 'おめでとう[ございます]。', romaji: 'omedetou[gozaimasu]', arti: 'Selamat. (digunakan untuk hari ulang tahun, upacara pernikahan, dan tahun baru)', catatan: '〈練習C〉' },
  { id: 'k22-21', kana: 'おさがしですか。', kanji: 'お探しですか。', romaji: 'osagashi desuka', arti: 'Mencari apa?', catatan: '〈会話〉' },
  { id: 'k22-22', kana: 'では', romaji: 'dewa', arti: 'kalau begitu', catatan: '〈会話〉' },
  { id: 'k22-23', kana: 'こちら', romaji: 'kochira', arti: 'ini (ungkapan sopan dari これ)', catatan: '〈会話〉' },
  { id: 'k22-24', kana: 'やちん', kanji: '家賃', romaji: 'yachin', arti: 'biaya sewa rumah', catatan: '〈会話〉' },
  { id: 'k22-25', kana: 'ダイニングキッチン', romaji: 'dainingukicchin', arti: 'ruang makan dengan dapur', catatan: '〈会話〉' },
  { id: 'k22-26', kana: 'わしつ', kanji: '和室', romaji: 'washitsu', arti: 'kamar ala Jepang', catatan: '〈会話〉' },
  { id: 'k22-27', kana: 'おしいれ', kanji: '押し入れ', romaji: 'oshiire', arti: 'lemari dinding ala Jepang', catatan: '〈会話〉' },
  { id: 'k22-28', kana: 'ふとん', kanji: '布団', romaji: 'futon', arti: 'selimut dan kasur berisi kapas ala Jepang', catatan: '〈会話〉' },
  { id: 'k22-29', kana: 'パリ', romaji: 'pari', arti: 'Paris' },
  { id: 'k22-30', kana: 'ばんりのちょうじょう', kanji: '万里の長城', romaji: 'banri no choujou', arti: 'Tembok Besar Cina' },
  { id: 'k22-31', kana: 'みんなのアンケート', romaji: 'minna no ankeeto', arti: 'angket fiksi' },
]
