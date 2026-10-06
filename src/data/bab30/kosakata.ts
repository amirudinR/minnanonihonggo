import type { KosaKata } from '@/types/bab'

// Kosakata Bab 30 — sumber: PDF Indonesia, "Pelajaran 30 · I. Kosa Kata" (idx 53-54).
// Offset MNN2 Indonesia: idx = halaman cetak + 21 (cetak 32-33 -> idx 53-54), terverifikasi
// lewat header "Pelajaran 30" dan marker "30" di sisi kiri halaman.
// Kolom kana = bacaan, kolom kanji = bentuk kanji ('-' bila buku tidak mencantumkan kanji).
// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi
// (disembunyikan default, tampil lewat toggle "Romaji").
// PDF terjemahan Indonesia ini hasil mesin; beberapa kata mengalami salah ketik
// (mis. "merangkumk'an"). Core makna dipakai apa adanya.
export const kosakata: KosaKata[] = [
  { id: 'k30-01', kana: 'はりますⅠ', kanji: '貼ります', romaji: 'harimasu I', arti: 'menempelkan' },
  { id: 'k30-02', kana: 'かけますⅡ', kanji: '掛けます', romaji: 'kakemasu II', arti: 'menggantungkan' },
  { id: 'k30-03', kana: 'かざりますⅠ', kanji: '飾ります', romaji: 'kazimasu I', arti: 'menghiasi' },
  { id: 'k30-04', kana: 'ならべますⅡ', kanji: '並べます', romaji: 'narabemasu II', arti: 'menata' },
  { id: 'k30-05', kana: 'うえますⅡ', kanji: '植えます', romaji: 'uemasu II', arti: 'menanam' },
  { id: 'k30-06', kana: 'もどしますⅠ', kanji: '戻します', romaji: 'modoshimasu I', arti: 'mengembalikan' },
  { id: 'k30-07', kana: 'まとめますⅡ', kanji: 'まとめます', romaji: 'matomemasu II', arti: 'merangkum' },
  { id: 'k30-08', kana: 'しまいますⅠ', kanji: '-', romaji: 'shimaimasu I', arti: 'menyimpan', catatan: 'PDF Indonesia tercetak "しまいまⅠ" (kurang satu す).' },
  { id: 'k30-09', kana: 'きめますⅡ', kanji: '決めます', romaji: 'kimemasu II', arti: 'menentukan' },
  { id: 'k30-10', kana: 'よしゅうしますⅢ', kanji: '予習します', romaji: 'yoshūshimasu III', arti: 'belajar persiapan' },
  { id: 'k30-11', kana: 'ふくしゅうしますⅢ', kanji: '復習します', romaji: 'fukushūshimasu III', arti: 'belajar pengulangan' },
  { id: 'k30-12', kana: 'そのままで しますⅢ', kanji: '-', romaji: 'sono mama de shimasu III', arti: 'membiarkan begitu' },
  { id: 'k30-13', kana: 'じゅぎょう', kanji: '授業', romaji: 'jugyō', arti: 'kelas, pelajaran' },
  { id: 'k30-14', kana: 'こうぎ', kanji: '講義', romaji: 'kōgi', arti: 'kuliah' },
  { id: 'k30-15', kana: 'ミーティング', kanji: '-', romaji: 'mītingu', arti: 'rapat' },
  { id: 'k30-16', kana: 'よてい', kanji: '予定', romaji: 'yotei', arti: 'acara' },
  { id: 'k30-17', kana: 'おしらせ', kanji: 'お知らせ', romaji: 'oshirase', arti: 'pengumuman' },
  { id: 'k30-18', kana: 'ガイドブック', kanji: '-', romaji: 'gaidobukku', arti: 'buku petunjuk' },
  { id: 'k30-19', kana: 'カレンダー', kanji: '-', romaji: 'karendā', arti: 'kalender' },
  { id: 'k30-20', kana: 'ポスター', kanji: '-', romaji: 'posutā', arti: 'plakat, poster' },
  { id: 'k30-21', kana: 'よていひょう', kanji: '予定表', romaji: 'yoteihyō', arti: 'jadwal acara' },
  { id: 'k30-22', kana: 'ごみばこ', kanji: 'ごみ箱', romaji: 'gomibako', arti: 'tempat sampah, tong sampah' },
  { id: 'k30-23', kana: 'にんぎょう', kanji: '人形', romaji: 'ningyō', arti: 'boneka, orang-orang' },
  { id: 'k30-24', kana: 'かびん', kanji: '花瓶', romaji: 'kabin', arti: 'vas' },
  { id: 'k30-25', kana: 'かがみ', kanji: '鏡', romaji: 'kagami', arti: 'cermin' },
  { id: 'k30-26', kana: 'ひきだし', kanji: '引き出し', romaji: 'hikidashi', arti: 'laci' },
  { id: 'k30-27', kana: 'げんかん', kanji: '玄関', romaji: 'genkan', arti: 'ruang depan', kategori: 'tempat' },
  { id: 'k30-28', kana: 'ろうか', kanji: '廊下', romaji: 'rōka', arti: 'koridor, gang', kategori: 'tempat' },
  { id: 'k30-29', kana: 'かべ', kanji: '壁', romaji: 'kabe', arti: 'dinding' },
  { id: 'k30-30', kana: 'いけ', kanji: '池', romaji: 'ike', arti: 'kolam' },
  { id: 'k30-31', kana: 'もとの ところ', kanji: '元の 所', romaji: 'moto no tokoro', arti: 'tempat semula' },
  { id: 'k30-32', kana: 'まわり', kanji: '周り', romaji: 'mawari', arti: 'sekitar' },
  { id: 'k30-33', kana: 'まんなか＊', kanji: '真ん中', romaji: 'mannaka', arti: 'tengah' },
  { id: 'k30-34', kana: 'すみ', kanji: '隅', romaji: 'sumi', arti: 'pojok, sudut' },
  { id: 'k30-35', kana: 'まだ', kanji: '-', romaji: 'mada', arti: 'masih' },
  { id: 'k30-36', kana: 'リュック', kanji: '-', romaji: 'ryukku', arti: 'ransel' },
  { id: 'k30-37', kana: 'ひじょうぶくろ', kanji: '非常袋', romaji: 'hijōbukuro', arti: 'kantong darurat' },
  { id: 'k30-38', kana: 'ひじょうじ', kanji: '非常時', romaji: 'hijōji', arti: 'saat darurat' },
  { id: 'k30-39', kana: 'せいかつしますⅢ', kanji: '生活します', romaji: 'seikatsu shimasu III', arti: 'hidup' },
  { id: 'k30-40', kana: 'かいちゅうでんとう', kanji: '懐中電灯', romaji: 'kaichūdentō', arti: 'senter' },
  { id: 'k30-41', kana: '～とか、～とか', kanji: '-', romaji: '~toka, ~toka', arti: '～ atau ～' },
  { id: 'k30-42', kana: 'まるい', kanji: '丸い', romaji: 'marui', arti: 'bundar, bulat' },
  { id: 'k30-43', kana: 'ある ～', kanji: '-', romaji: 'aru ~', arti: 'suatu ～' },
  { id: 'k30-44', kana: '夢を 見ますⅡ', kanji: '-', romaji: 'yume o mimasu II', arti: 'bermimpi' },
  { id: 'k30-45', kana: 'うれしい', kanji: '-', romaji: 'ureshii', arti: 'senang' },
  { id: 'k30-46', kana: '嫌［な］', kanji: '嫌[な]', romaji: 'kirai [na]', arti: 'tidak senang, tidak suka' },
  { id: 'k30-47', kana: 'すると', kanji: '-', romaji: 'surutō', arti: 'kemudian' },
  { id: 'k30-48', kana: '目が 覚めますⅡ', kanji: '-', romaji: 'me ga samemasu II', arti: 'bangun, sadar' },
]