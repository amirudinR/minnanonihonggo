import type { KosaKata } from '@/types/bab'

// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi
// (disembunyikan default, tampil lewat toggle "Romaji").
// Sumber: PDF Indonesia "Pelajaran 19 — I. Kosa Kata" (idx 138-139).
export const kosakata: KosaKata[] = [
  { id: 'k19-01', kana: 'のぼります', kanji: '登ります', romaji: 'noborimasu', arti: 'naik' },
  { id: 'k19-02', kana: 'とまります', kanji: '泊まります', romaji: 'tomarimasu', arti: 'menginap (di hotel)' },
  { id: 'k19-03', kana: '［ホテルに～］', romaji: '[hoteru ni ~]', arti: 'bentuk "~ に 泊まります" — menginap di ~' },
  { id: 'k19-04', kana: 'そうじします', kanji: '掃除します', romaji: 'sōji-shimasu', arti: 'membersihkan' },
  { id: 'k19-05', kana: 'せんたくします', kanji: '洗濯します', romaji: 'sentaku-shimasu', arti: 'mencuci pakaian' },
  { id: 'k19-06', kana: 'なります', romaji: 'narimasu', arti: 'menjadi' },
  { id: 'k19-07', kana: 'ねむい', kanji: '眠い', romaji: 'nemui', arti: 'mengantuk' },
  { id: 'k19-08', kana: 'つよい', kanji: '強い', romaji: 'tsuyoi', arti: 'kuat' },
  { id: 'k19-09', kana: 'よわい', kanji: '弱い', romaji: 'yowai', arti: 'lemah' },
  { id: 'k19-10', kana: 'れんしゅう', kanji: '練習', romaji: 'renshū', arti: 'latihan (~を します : berlatih)' },
  { id: 'k19-11', kana: 'ゴルフ', romaji: 'gorufu', arti: 'golf (~を します : bermain golf)' },
  { id: 'k19-12', kana: 'すもう', kanji: '相撲', romaji: 'sumō', arti: 'sumo (~を します : bermain sumo)' },
  { id: 'k19-13', kana: 'おちゃ', kanji: 'お茶', romaji: 'ocha', arti: 'upacara minum teh' },
  { id: 'k19-14', kana: 'ひ', kanji: '日', romaji: 'hi', arti: 'hari' },
  { id: 'k19-15', kana: 'ちょうし', kanji: '調子', romaji: 'chōshi', arti: 'kondisi' },
  { id: 'k19-16', kana: 'いちど', kanji: '一度', romaji: 'ichido', arti: 'sekali' },
  { id: 'k19-17', kana: 'いちども', kanji: '一度も', romaji: 'ichidomo', arti: 'sekali-kali, satu kali pun (diikuti bentuk negatif)' },
  { id: 'k19-18', kana: 'だんだん', romaji: 'dandan', arti: 'berangsur-angsuran, lama-kelamaan' },
  { id: 'k19-19', kana: 'もうすぐ', romaji: 'mōsugu', arti: 'tidak lama lagi' },
  {
    id: 'k19-20',
    kana: 'おかげさまで',
    romaji: 'okagesamade',
    arti: 'atas berkat (ucapan yang digunakan ketika menyatakan rasa terima kasih atas bantuan atau kebaikan hati dari orang)',
  },
  { id: 'k19-21', kana: 'でも', romaji: 'demo', arti: 'tetapi' },
  { id: 'k19-22', kana: 'かんぱい', kanji: '乾杯', romaji: 'kanpai', arti: 'toast!' },
  { id: 'k19-23', kana: 'ダイエット', romaji: 'daietto', arti: 'diet (~を します : berdiet)' },
  { id: 'k19-24', kana: 'むり［な］', kanji: '無理［な］', romaji: 'muri [na]', arti: 'paksa, berlebihan' },
  { id: 'k19-25', kana: 'からだにいい', kanji: '体にいい', romaji: 'karada ni ii', arti: 'baik untuk tubuh' },
  {
    id: 'k19-26',
    kana: 'とうきょう スカイツリー',
    kanji: '東京スカイツリー',
    romaji: 'Tōkyō Sky Tree',
    arti: 'Tokyo Sky Tree (menara gelombang radio yang lengkap dengan pelataran puncak yang ada di Tokyo)',
  },
  {
    id: 'k19-27',
    kana: 'かずしばきほう',
    kanji: '葛飾北斎',
    romaji: 'Katsushika Hokusai',
    arti: 'nama pelukis Ukiyoe yang terkenal pada zaman Edo, pelukis (1760~1849)',
  },
]