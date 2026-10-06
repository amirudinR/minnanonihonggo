import type { KosaKata } from '@/types/bab'

// Kosakata Bab 29 — sumber: PDF Indonesia, "Pelajaran 29 · I. Kosa Kata" (idx 47-48).
// Offset MNN2 Indonesia: idx = halaman cetak + 21 (cetak 26-27 -> idx 47-48), terverifikasi
// lewat marker "29" di sisi kiri halaman.
// Kolom kana = bacaan, kolom kanji = bentuk kanji ('-' bila buku tidak mencantumkan kanji).
// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi
// (disembunyikan default, tampil lewat toggle "Romaji").
// PDF terjemahan Indonesia ini hasil mesin: beberapa kata mengandung derau terjemahan
// (mis. "[phonon] patah" untuk 「きが～」(木が～)). Core makna dipakai apa adanya;
// derau yang jelas salahCatatan dicatat di `catatan` agar tidak hilang informasinya.
export const kosakata: KosaKata[] = [
  { id: 'k29-01', kana: 'あきますⅠ［ドアが～］', kanji: '開きます', romaji: 'akimasu I', arti: '[pintu] terbuka' },
  { id: 'k29-02', kana: 'しまりますⅠ［ドアが～］', kanji: '閉まります', romaji: 'shimarimasu I', arti: '[pintu] tertutup' },
  { id: 'k29-03', kana: 'つきますⅠ［でんきが～］', kanji: '点きます', romaji: 'tsukimasu I', arti: '[lampu] menyala' },
  { id: 'k29-04', kana: 'きえますⅡ＊［でんきが～］', kanji: '消えます', romaji: 'kiemasu II', arti: '[lampu] terpadam' },
  { id: 'k29-05', kana: 'こわれますⅡ［いずが～］', kanji: '壊れます', romaji: 'kowaremasu II', arti: '[kursi] rusak' },
  { id: 'k29-06', kana: 'われますⅡ［コップが～］', kanji: '割れます', romaji: 'waremasu II', arti: '[gelas] pecah' },
  { id: 'k29-07', kana: 'おれますⅡ［きが～］', kanji: '折れます', romaji: 'oremasu II', arti: '[kayu] patah', catatan: 'PDF Indonesia menulis "[phonon] patah"; 「きが～」 = 木が～ (kayu).' },
  { id: 'k29-08', kana: 'やぶれますⅡ［かみ～］', kanji: '破れます', romaji: 'yaburemasu II', arti: '[kertas] robek' },
  { id: 'k29-09', kana: 'こしますⅡ［ふくが～］', kanji: '汚れます', romaji: 'koshimasu II', arti: '[baju] menjadi kotor' },
  { id: 'k29-10', kana: 'つきますⅠ［ポケットが～］', kanji: '付きます', romaji: 'tsukimasu I', arti: '[kantong] terpasang' },
  { id: 'k29-11', kana: 'はがれますⅡ［ボタンが～］', kanji: '外れます', romaji: 'hagaremasu II', arti: '[kancing] terlepas' },
  { id: 'k29-12', kana: 'とまりますⅠ［くるまが～］', kanji: '止まります', romaji: 'tomarimasu I', arti: '[mobil] berhenti' },
  { id: 'k29-13', kana: 'まちがえますⅡ', kanji: '-', romaji: 'machigaemasu II', arti: 'bersalah' },
  { id: 'k29-14', kana: 'おとしますⅠ', kanji: '落とします', romaji: 'otoshimasu I', arti: 'menjatuhkan, kehilangan' },
  { id: 'k29-15', kana: 'かかりますⅠ［かぎが～］', kanji: '掛かります', romaji: 'kakarimasu I', arti: 'terkunci' },
  { id: 'k29-16', kana: 'ふきますⅠ', kanji: '-', romaji: 'fukimasu I', arti: 'mengelap', catatan: 'Buku tidak mencetak kanji; dari arti "mengelap" kata ini adalah 拭きます (fukimasu).' },
  { id: 'k29-17', kana: 'とりかえますⅡ', kanji: '取り替えます', romaji: 'torikaemasu II', arti: 'mengganti' },
  { id: 'k29-18', kana: 'かたづけますⅡ', kanji: '片づけます', romaji: 'katazukemasu II', arti: 'membereskan' },
  { id: 'k29-19', kana: '［お］さら', kanji: '［お］皿', romaji: '[o] sara', arti: 'piring' },
  { id: 'k29-20', kana: '［お］ちゃわん＊', kanji: '［お］茶碗＊', romaji: '[o] chawan', arti: 'mangkuk' },
  { id: 'k29-21', kana: 'コップ', kanji: '-', romaji: 'koppu', arti: 'gelas' },
  { id: 'k29-22', kana: 'ガラス', kanji: '-', romaji: 'garasu', arti: 'kaca' },
  { id: 'k29-23', kana: 'ふくろ', kanji: '袋', romaji: 'fukuro', arti: 'kantong' },
  { id: 'k29-24', kana: 'しょるい', kanji: '書類', romaji: 'shorui', arti: 'dokumen' },
  { id: 'k29-25', kana: 'えだ', kanji: '枝', romaji: 'eda', arti: 'ranting' },
  { id: 'k29-26', kana: 'えきいん', kanji: '駅員', romaji: 'ekiin', arti: 'petugas stasiun', kategori: 'profesi' },
  { id: 'k29-27', kana: 'こうばん', kanji: '交番', romaji: 'kōban', arti: 'pos polisi', kategori: 'tempat' },
  { id: 'k29-28', kana: 'スピーチ＊', kanji: '-', romaji: 'supīchi', arti: 'pidato（～を します：berpidato）' },
  { id: 'k29-29', kana: 'へんじ', kanji: '返事', romaji: 'henji', arti: 'jawaban（～を します：memberi jawaban）' },
  { id: 'k29-30', kana: 'おさきに どうぞ。', kanji: 'お先に どうぞ。', romaji: 'osaki ni dōzo', arti: 'Silakan duluan!' },
  { id: 'k29-31', kana: 'げんじものがたり', kanji: '源氏物語', romaji: 'Genji Monogatari', arti: 'Genji Monogatari (Novel yang disusun oleh Murasaki Shikibu pada zaman Heian)' },
  { id: 'k29-32', kana: 'いまの でんしゃ', kanji: '今の 電車', romaji: 'ima no densha', arti: 'kereta tadi' },
  { id: 'k29-33', kana: 'わすもの', kanji: '忘れ物', romaji: 'wasumono', arti: 'barang yang tertinggal', kategori: 'ungkapan' },
  { id: 'k29-34', kana: 'この くらい', kanji: '-', romaji: 'kono kurai', arti: 'sebesar ini' },
  { id: 'k29-35', kana: '～がわ', kanji: '側', romaji: '~gawa', arti: 'sebelah ～' },
  { id: 'k29-36', kana: 'ポケット', kanji: '-', romaji: 'poketto', arti: 'kantong' },
  { id: 'k29-37', kana: '～べん', kanji: '辺', romaji: '~ben', arti: 'sekitar ～' },
  { id: 'k29-38', kana: 'おぼえて いません。', kanji: '覚えて いません。', romaji: 'oboete imasen', arti: 'Tidak ingat.' },
  { id: 'k29-39', kana: 'あみだな', kanji: '網棚', romaji: 'amidana', arti: 'rak bagasi' },
  { id: 'k29-40', kana: 'たしか', kanji: '確か', romaji: 'tashika', arti: 'kalau tidak salah' },
  { id: 'k29-41', kana: '［あお。］よかった。', kanji: '［あお。］よかった。', romaji: '[ao.] yokatta', arti: '[O,] syukur. (dipakai ketika merasa lega)', kategori: 'ungkapan' },
  { id: 'k29-42', kana: 'しんじゅく', kanji: '新宿', romaji: 'shinjuku', arti: 'stasiun di Tokyo/nama daerah', kategori: 'tempat' },
  { id: 'k29-43', kana: 'じしん', kanji: '地震', romaji: 'jishin', arti: 'gempa bumi' },
  { id: 'k29-44', kana: 'かべ', kanji: '壁', romaji: 'kabe', arti: 'dinding' },
  { id: 'k29-45', kana: 'はり', kanji: '針', romaji: 'hari', arti: 'jarum' },
  { id: 'k29-46', kana: 'さしますⅠ', kanji: '指しますⅠ', romaji: 'sashimasu I', arti: 'menunjuk' },
  { id: 'k29-47', kana: 'えきまえ', kanji: '駅前', romaji: 'ekimae', arti: 'depan stasiun' },
  { id: 'k29-48', kana: 'たおれますⅡ', kanji: '倒れますⅡ', romaji: 'taoremasu II', arti: 'jatuh' },
  { id: 'k29-49', kana: 'にし', kanji: '西', romaji: 'nishi', arti: 'barat' },
  { id: 'k29-50', kana: '～の ほう', kanji: '～の 方', romaji: '~no hō', arti: 'sebelah ～' },
  { id: 'k29-51', kana: 'もえますⅡ', kanji: '燃えますⅡ', romaji: 'moemasu II', arti: 'terbakar' },
  { id: 'k29-52', kana: 'レポーター', kanji: '-', romaji: 'repōtā', arti: 'wartawan, jurnalis, pelapor' },
]