import type { KosaKata } from '@/types/bab'

// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi
// (disembunyikan default, tampil lewat toggle "Romaji").
// Sumber: PDF Indonesia "Pelajaran 20 — I. Kosa Kata" (idx 144-145).
export const kosakata: KosaKata[] = [
  { id: 'k20-01', kana: 'いります', kanji: '要ります', romaji: 'irimasu', arti: 'memerlukan', catatan: '［ビザが～］ memerlukan [VISA]' },
  { id: 'k20-02', kana: 'しらべます', kanji: '調べます', romaji: 'shirabemasu', arti: 'memeriksa, meneliti, mengecek' },
  { id: 'k20-03', kana: 'しゅうりします', kanji: '修理します', romaji: 'shūri-shimasu', arti: 'memperbaiki' },
  { id: 'k20-04', kana: 'ぼく', kanji: '僕', romaji: 'boku', arti: 'aku (dipakai oleh laki-laki, kata ganti informal dari わたし)' },
  { id: 'k20-05', kana: 'きみ', kanji: '君', romaji: 'kimi', arti: 'kamu (bentuk informal untuk あなた, digunakan terhadap orang yang setaraf atau di bawah si pembicara)' },
  { id: 'k20-06', kana: '～くん', kanji: '～君', romaji: '~kun', arti: 'Sdr. ~ (bentuk informal untuk さん, digunakan terhadap nama anak laki-laki)' },
  { id: 'k20-07', kana: 'うん', romaji: 'un', arti: 'ya (bentuk informal dari はい)' },
  { id: 'k20-08', kana: 'ううん', romaji: 'uun', arti: 'tidak, bukan (bentuk informal dari いいえ)' },
  { id: 'k20-09', kana: 'ことば', kanji: '言葉', romaji: 'kotoba', arti: 'kata, bahasa' },
  { id: 'k20-10', kana: 'きもの', kanji: '着物', romaji: 'kimono', arti: 'kimono (pakaian tradisional Jepang)' },
  { id: 'k20-11', kana: 'ビザ', romaji: 'biza', arti: 'VISA' },
  { id: 'k20-12', kana: 'はじめ', kanji: '初め', romaji: 'hajime', arti: 'awal, mula-mula' },
  { id: 'k20-13', kana: 'おわり', kanji: '終わり', romaji: 'owari', arti: 'akhir' },
  { id: 'k20-14', kana: 'こっち', romaji: 'kocchi', arti: 'sini (ungkapan informal dari こちら)' },
  { id: 'k20-15', kana: 'そっち', romaji: 'socchi', arti: 'situ (bentuk informal dari そちら)' },
  { id: 'k20-16', kana: 'あっち', romaji: 'acchi', arti: 'sana (bentuk informal dari あちら)' },
  { id: 'k20-17', kana: 'どっち', romaji: 'docchi', arti: 'mana (bentuk informal untuk どちら)' },
  { id: 'k20-18', kana: 'みんなで', romaji: 'minna de', arti: 'kita semua, kita sama-sama' },
  { id: 'k20-19', kana: '～けど', romaji: '~kedo', arti: '~ tetapi (ungkapan informal dari が)' },
  { id: 'k20-20', kana: 'おなかが いっぱいです', romaji: 'onaka ga ippai desu', arti: 'sudah kenyang' },
  { id: 'k20-21', kana: 'よかったら', romaji: 'yokattara', arti: 'kalau mau, kalau suka' },
  { id: 'k20-22', kana: 'いろいろ', romaji: 'iroiro', arti: 'macam-macam' },
]
