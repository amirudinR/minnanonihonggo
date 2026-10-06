import type { KosaKata } from '@/types/bab'

// Kosakata Bab 31 — sumber: PDF Indonesia, "Pelajaran 31 · I. Kosa Kata" (idx 59–60, cetak 38–39).
// Kolom kana = bacaan, kolom kanji = bentuk kanji ('-' bila buku tidak mencantumkan kanji).
// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi
// (disembunyikan default, tampil lewat toggle "Romaji").
export const kosakata: KosaKata[] = [
  { id: 'k31-01', kana: 'つづけますⅡ', kanji: '続けます', romaji: 'tsuzukemasu II', arti: 'melanjutkan' },
  { id: 'k31-02', kana: 'みつけますⅡ', kanji: '見つけます', romaji: 'mitsukemasu II', arti: 'menemukan' },
  { id: 'k31-03', kana: 'とりますⅠ', kanji: '取ります', romaji: 'torimasu I', arti: 'mengambil [cuti]', catatan: '［やすみを～］→ cuti.' },
  { id: 'k31-04', kana: 'うけますⅡ', kanji: '受けます', romaji: 'ukemasu II', arti: 'mengikuti [ujian]', catatan: '［しけんに～］→ mengikuti ujian.' },
  { id: 'k31-05', kana: 'もうしますⅠ', kanji: '申し込みます', romaji: 'mōshimasu I', arti: 'mendaftar', catatan: '［しけんに～］→ mendaftar untuk ujian.' },
  { id: 'k31-06', kana: 'きゅうけいしますⅢ', kanji: '休憩します', romaji: 'kyūkeishimasu III', arti: 'beristirahat' },
  { id: 'k31-07', kana: 'れんきゅう', kanji: '連休', romaji: 'renkyū', arti: 'libur berturut-turut' },
  { id: 'k31-08', kana: 'さくぶん［はっぴょう］', kanji: '作文 発表', romaji: 'sakubun [happō]', arti: 'karangan; presentasi (～します: mempresentasikan)' },
  { id: 'k31-09', kana: 'てんらんかい', kanji: '展覧会', romaji: 'tenrankai', arti: 'pameran' },
  { id: 'k31-10', kana: 'けっこんしき［おーそうしき］', kanji: '結婚式', romaji: 'kekkonshiki [ōsōshiki]', arti: 'upacara pernikahan' },
  { id: 'k31-11', kana: 'ししき', kanji: '式', romaji: 'shishiki', arti: 'upacara' },
  { id: 'k31-12', kana: 'ほんしゃ', kanji: '本社', romaji: 'honsha', arti: 'kantor pusat' },
  { id: 'k31-13', kana: 'してん', kanji: '支店', romaji: 'shiten', arti: 'kantor cabang' },
  { id: 'k31-14', kana: 'きょうかい', kanji: '教会', romaji: 'kyōkai', arti: 'gereja' },
  { id: 'k31-15', kana: 'だいがくいん', kanji: '大学院', romaji: 'daigakuin', arti: 'Program S2, S3 Universitas' },
  { id: 'k31-16', kana: 'どうぶつえん', kanji: '動物園', romaji: 'dōbutsuen', arti: 'kebun binatang' },
  { id: 'k31-17', kana: 'おんせん', kanji: '温泉', romaji: 'onsen', arti: 'tempat pemandian air panas' },
  { id: 'k31-18', kana: 'かえり', kanji: '帰り', romaji: 'kaeri', arti: 'pulang' },
  { id: 'k31-19', kana: 'お子さん', kanji: 'お子さん', romaji: 'okosan', arti: 'anak orang lain' },
  { id: 'k31-20', kana: '一ごう', kanji: '一号', romaji: 'ichigō', arti: 'nomor — (nomor yang dipakai untuk kereta, angin topan dan lain-lain)' },
  { id: 'k31-21', kana: '～のほう', kanji: '～の方', romaji: '~ no hō', arti: 'seblah ～' },
  { id: 'k31-22', kana: 'ずっと', kanji: '-', romaji: 'zutto', arti: 'seterusnya' },
  { id: 'k31-23', kana: 'バリ', kanji: '-', romaji: 'Bari', arti: 'Bali (pulau di Indonesia)' },
  { id: 'k31-24', kana: 'ピカソ', kanji: '-', romaji: 'Pikaso', arti: 'Pablo Picasso, pelukis Spanyol (1881-1973)' },
  { id: 'k31-25', kana: 'のぞみ', kanji: '-', romaji: 'Nozomi', arti: 'nama Shinkansen, (～42号: Nozomi No.42)' },
  { id: 'k31-26', kana: 'しんかんせん', kanji: '新幹線', romaji: 'shinkansen', arti: 'nama stasiun yang ada di Hyogo prefektur' },
  // (会話) — kata tambahan dari halaman Percakapan
  { id: 'k31-27', kana: '残りますⅠ', kanji: '残ります', romaji: 'nokorimasu I', arti: 'tinggal' },
  { id: 'k31-28', kana: '入学試験', kanji: '入学試験', romaji: 'nyūgaku shiken', arti: 'ujian masuk' },
  { id: 'k31-29', kana: '月に', kanji: '-', romaji: 'tsuki ni', arti: 'dalam sebulan' },
  // (読み物) — kata tambahan dari teks bacaan 田舎へ帰って
  { id: 'k31-30', kana: '村［むら］', kanji: '村', romaji: 'mura [村]', arti: 'desa, kampung' },
  { id: 'k31-31', kana: '卒業しますⅢ', kanji: '卒業します', romaji: 'sotsugyōshimasu III', arti: 'lulus, tamat' },
  { id: 'k31-32', kana: '映画館［えいがかん］', kanji: '映画館', romaji: 'eigakan [eigakan]', arti: 'gedung bioskop' },
  { id: 'k31-33', kana: '嫌［な］', kanji: '嫌［な］', romaji: 'kirai [na]', arti: 'tidak senang, tidak suka' },
  { id: 'k31-34', kana: '空［そら］', kanji: '空', romaji: 'sora [空]', arti: 'langit' },
  { id: 'k31-35', kana: '閉じますⅡ', kanji: '閉じます', romaji: 'tojimasu II', arti: 'tutup' },
  { id: 'k31-36', kana: '都会［とかい］', kanji: '都会', romaji: 'tokai [都会]', arti: 'kota besar' },
  { id: 'k31-37', kana: '子どもたち', kanji: '子どもたち', romaji: 'kodomotachi', arti: 'anak-anak' },
  { id: 'k31-38', kana: '自由に［じゆうに］', kanji: '自由に', romaji: 'jiyū ni [自由に]', arti: 'dengan bebas' },
]