import type { KosaKata } from '@/types/bab'

// Kosakata Bab 44 — sumber: PDF Indonesia, "Pelajaran 44 · I. Kosa Kata" (idx 137–138).
// Kolom kana = bacaan, kolom kanji = bentuk kanji ('-' bila buku tidak mencantumkan kanji).
// Kolom [ ] pada kana = padanan kata dari buku; arti Indonesia ditulis di dalam [ ].
// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi
// (disembunyikan default, tampil lewat toggle "Romaji").
export const kosakata: KosaKata[] = [
  { id: 'k44-01', kana: 'なきますⅠ', kanji: '泣きます', romaji: 'nakimasu I', arti: 'menangis' },
  { id: 'k44-02', kana: 'わらいいますⅠ', kanji: '笑います', romaji: 'waraiimasu I', arti: 'tertawa' },
  { id: 'k44-03', kana: 'ねむりますⅠ', kanji: '眠ります', romaji: 'nemurimasu I', arti: 'tidur' },
  { id: 'k44-04', kana: 'かわきますⅠ［シャツが～］', kanji: '乾きます', romaji: 'kawakimasu I [shatsu ga ~]', arti: 'mengering [pakaian]' },
  { id: 'k44-05', kana: 'ぬれますⅡ［シャツが～］', kanji: '-', romaji: 'nuremasu II [shatsu ga ~]', arti: 'basah [pakaian]', catatan: 'Buku Indonesia hanya memberi bacaan kana (ぬれますⅡ), tanpa bentuk kanji.' },
  { id: 'k44-06', kana: 'すべりますⅠ', kanji: '滑ります', romaji: 'suberimasu I', arti: 'licin' },
  { id: 'k44-07', kana: 'おきますⅡ［じこが～］', kanji: '起きます［事故が～］', romaji: 'okimasu II [jiko ga ~]', arti: 'terjadi [kecelakaan]' },
  {
    id: 'k44-08',
    kana: 'ちょうせつしますⅢ',
    kanji: '調節します',
    romaji: 'chousetsu shimasu III',
    arti: 'mengontrol',
    catatan: 'Buku Indonesia mencetak kana "ちょうせつしますⅢ" berdampingan dengan kanji 調節します (bacaan baku: ちょうせいします). Ditranskripsikan apa adanya.',
  },
  { id: 'k44-09', kana: 'あんぜん［な］', kanji: '安全［な］', romaji: 'anzen [na]', arti: 'aman' },
  { id: 'k44-10', kana: 'きけん［な］', kanji: '危険［な］', romaji: 'kiken [na]', arti: 'bahaya' },
  { id: 'k44-11', kana: 'こい', kanji: '濃い', romaji: 'koi', arti: 'kental (rasa makanan atau minuman), tua (warna)' },
  { id: 'k44-12', kana: 'うすい', kanji: '薄い', romaji: 'usui', arti: 'tawar (rasa makanan atau minuman), muda (warna), tipis (barang)' },
  { id: 'k44-13', kana: 'あつい', kanji: '厚い', romaji: 'atsui', arti: 'tebal' },
  { id: 'k44-14', kana: 'ふとい', kanji: '太い', romaji: 'futoi', arti: 'gemuk' },
  { id: 'k44-15', kana: 'ほそい', kanji: '細い', romaji: 'hosoi', arti: 'kurus' },
  { id: 'k44-16', kana: 'くうき', kanji: '空気', romaji: 'kuuki', arti: 'udara' },
  { id: 'k44-17', kana: 'なみだ', kanji: '涙', romaji: 'namida', arti: 'air mata' },
  { id: 'k44-18', kana: 'わしょく', kanji: '和食', romaji: 'washoku', arti: 'makanan Jepang' },
  { id: 'k44-19', kana: 'ようしょく', kanji: '洋食', romaji: 'youshoku', arti: 'makanan Barat' },
  { id: 'k44-20', kana: 'おかず', kanji: '-', romaji: 'okazu', arti: 'lauk-pauk' },
  { id: 'k44-21', kana: 'りょう', kanji: '量', romaji: 'ryou', arti: 'kuantitas' },
  { id: 'k44-22', kana: 'いっぱい', kanji: '一杯', romaji: 'ippai', arti: '- kali' },
  { id: 'k44-23', kana: 'シングル', kanji: '-', romaji: 'shinguru', arti: 'single', kategori: 'fiksi' },
  { id: 'k44-24', kana: 'ツイン', kanji: '-', romaji: 'tsuin', arti: 'twin', kategori: 'fiksi' },
  { id: 'k44-25', kana: 'せんたくもの', kanji: '洗濯物', romaji: 'sentakumono', arti: 'pakaian' },
  { id: 'k44-26', kana: 'DVD', kanji: '-', romaji: 'deebidee', arti: 'DVD' },
  { id: 'k44-27', kana: 'ホテルひろしま', kanji: '-', romaji: 'hoteru hiroshima', arti: 'hotel fiksi', kategori: 'fiksi' },
  // 〈読み物〉 — kosakata untuk bahan bacaan (bagian bawah Kosa Kata idx 138)
  { id: 'k44-28', kana: 'きがりますⅠ', kanji: '嫌がります', romaji: 'kirigaimasu I', arti: 'tidak mau', catatan: 'Kosakata untuk bahan bacaan (〈読み物〉) Pelajaran 44.' },
  { id: 'k44-29', kana: 'また', kanji: '-', romaji: 'mata', arti: 'dan, lalu' },
  { id: 'k44-30', kana: 'うまく', kanji: '-', romaji: 'umaku', arti: 'pandai, pintar' },
  { id: 'k44-31', kana: 'じゅんじょ', kanji: '順序', romaji: 'junjo', arti: 'urutan' },
  { id: 'k44-32', kana: 'あんしん［な］', kanji: '安心［な］', romaji: 'anshin [na]', arti: 'kelegaan' },
  { id: 'k44-33', kana: 'ひょうげん', kanji: '表現', romaji: 'hyougen', arti: 'ungkapan, ekspresi' },
  { id: 'k44-34', kana: 'たとえば', kanji: '例えば', romaji: 'tatoeba', arti: 'misalnya' },
  { id: 'k44-35', kana: 'われますⅡ', kanji: '別れます', romaji: 'waremasu II', arti: 'berpisah' },
  { id: 'k44-36', kana: 'これら', kanji: '-', romaji: 'koreira', arti: 'itu' },
  { id: 'k44-37', kana: 'えんきが わるい', kanji: '縁起が 悪い', romaji: 'enkiga warui', arti: 'tidak menyenangkan' },
]
