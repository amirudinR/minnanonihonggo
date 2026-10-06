import type { KosaKata } from '@/types/bab'

// Kosakata Bab 50 — sumber: PDF Indonesia, "Pelajaran 50 · I. Kosa Kata" (idx 173–174 / cetak 152–153).
// Sub-bagian 〈会話〉 dan 〈読み物〉 mengikuti urutan cetakan buku.
// Tanda * mengikuti cetakan buku. 「※」 = kata referensi/informasi.
// Catatan: buku tidak mencetak romaji. `romaji` di sini transliterasi aplikasi.
export const kosakata: KosaKata[] = [
  { id: 'k50-01', kana: 'まいりますⅠ', kanji: '参ります', romaji: 'mairimasu I', arti: 'pergi, datang (Kata Merendahkan Diri dari いきます, きます)', furigana: [{ base: '参', ruby: 'まい' }] },
  { id: 'k50-02', kana: 'おりますⅠ', kanji: '-', romaji: 'orimasu I', arti: 'ada (Kata Merendahkan Diri dari います)' },
  { id: 'k50-03', kana: 'いただきますⅠ', kanji: '-', romaji: 'itadakimasu I', arti: 'makan, minum, menerima (Kata Merendahkan Diri dari たべます, のみます, もらいます)' },
  { id: 'k50-04', kana: 'もうしますⅠ', kanji: '申します', romaji: 'moushimasu I', arti: 'bernama (Kata Merendahkan Diri dari いいます)', furigana: [{ base: '申', ruby: 'もう' }] },
  { id: 'k50-05', kana: 'いたしますⅠ', kanji: '-', romaji: 'itashimasu I', arti: 'melakukan (Kata Merendahkan Diri dari します)' },
  { id: 'k50-06', kana: 'はいけんしますⅢ', kanji: '拝見します', romaji: 'haiken shimasu III', arti: 'melihat (Kata Merendahkan Diri dari みます)', furigana: [{ base: '拝見', ruby: 'はいけん' }] },
  { id: 'k50-07', kana: 'ぞんじますⅡ', kanji: '存じます', romaji: 'zonjimasu II', arti: 'mengenal (Kata Merendahkan Diri dari しります)', furigana: [{ base: '存', ruby: 'ぞん' }] },
  { id: 'k50-08', kana: 'うかがいますⅠ', kanji: '伺います', romaji: 'ukagaimasu I', arti: 'bertanya, mendengar, berkunjung (Kata Merendahkan Diri dari きます, いきます)', furigana: [{ base: '伺', ruby: 'うかが' }] },
  { id: 'k50-09', kana: 'おめに かかりますⅠ', kanji: 'お目に かかります', romaji: 'ome ni kakarimasu I', arti: 'bertemu (Kata Merendahkan Diri dari あいます)', furigana: [{ base: '目', ruby: 'め' }] },
  { id: 'k50-10', kana: 'いれますⅡ［コーヒーを〜］', kanji: '-', romaji: 'iremasu II [koohii o ~]', arti: 'membuat [kopi] (menyiram air panas dari membuat cairan)' },
  { id: 'k50-11', kana: 'よういしますⅢ', kanji: '用意します', romaji: 'youi shimasu III', arti: 'menyediakan', furigana: [{ base: '用意', ruby: 'ようい' }] },
  { id: 'k50-12', kana: 'わたくし', kanji: '私', romaji: 'watakushi', arti: 'saya (Kata Merendahkan Diri dari わたし)', furigana: [{ base: '私', ruby: 'わたくし' }] },
  { id: 'k50-13', kana: 'ガイド', kanji: '-', romaji: 'gaido', arti: 'pemandu' },
  { id: 'k50-14', kana: 'メールアドレス', kanji: '-', romaji: 'meeru adoresu', arti: 'alamat e-mail' },
  { id: 'k50-15', kana: 'スケジュール', kanji: '-', romaji: 'sukejuuru', arti: 'jadwal' },
  { id: 'k50-16', kana: 'さらいしゅう*', kanji: 'さ来週', romaji: 'saraishuu', arti: 'dua minggu lagi', furigana: [{ base: '来週', ruby: 'らいしゅう' }] },
  { id: 'k50-17', kana: 'さらいげつ', kanji: 'さ来月', romaji: 'saraigetsu', arti: 'dua bulan lagi', furigana: [{ base: '来月', ruby: 'らいげつ' }] },
  { id: 'k50-18', kana: 'さらいねん*', kanji: 'さ来年', romaji: 'sarainen', arti: 'dua tahun lagi', furigana: [{ base: '来年', ruby: 'らいねん' }] },
  { id: 'k50-19', kana: 'はじめに', kanji: '初めに', romaji: 'hajime ni', arti: 'pertama-tama', furigana: [{ base: '初', ruby: 'はじ' }] },
  { id: 'k50-20', kana: '江戸 東京 博物館', kanji: '-', romaji: 'edo tookyou hakubutsukan', arti: 'Museum Edo Tokyo' },
  { id: 'k50-21', kana: 'きんちょう しますⅢ', kanji: '緊張 します', romaji: 'kinchou shimasu III', arti: 'tegang', furigana: [{ base: '緊張', ruby: 'きんちょう' }] },
  { id: 'k50-22', kana: 'しょうきん', kanji: '賞金', romaji: 'shoukin', arti: 'hadiah uang', furigana: [{ base: '賞金', ruby: 'しょうきん' }] },
  { id: 'k50-23', kana: 'きりん', kanji: '-', romaji: 'kirin', arti: 'jerapah' },
  { id: 'k50-24', kana: 'ころ', kanji: '-', romaji: 'koro', arti: 'ketika (contoh: ketika anak, ketika mahasiswa)' },
  { id: 'k50-25', kana: 'かないますⅠ［ゆめが〜］', kanji: '-', romaji: 'kanaimasu I [yume ga ~]', arti: '[impian] terkabul' },
  { id: 'k50-26', kana: 'おうえんしますⅢ', kanji: '応援します', romaji: 'ouen shimasu III', arti: 'mendukung', furigana: [{ base: '応援', ruby: 'おうえん' }] },
  { id: 'k50-27', kana: 'こころから', kanji: '心から', romaji: 'kokoro kara', arti: 'dari segenap hati', furigana: [{ base: '心', ruby: 'こころ' }] },
  { id: 'k50-28', kana: 'かんしゃしますⅢ', kanji: '感謝します', romaji: 'kansha shimasu III', arti: 'berterima kasih', furigana: [{ base: '感謝', ruby: 'かんしゃ' }] },
  { id: 'k50-29', kana: 'おれい', kanji: 'お礼', romaji: 'orei', arti: 'ucapan terima kasih', furigana: [{ base: '礼', ruby: 'れい' }] },
  { id: 'k50-30', kana: 'お元気で いらっしゃいますか。', kanji: '-', romaji: 'ogenki de irasshaimasu ka.', arti: 'Bagaimana kabarnya? (Kata Hormat dari おげんきですか)' },
  { id: 'k50-31', kana: 'めいわくを かけますⅡ', kanji: '迷惑を かけます', romaji: 'meiwaku o kakemasu II', arti: 'mengganggu', furigana: [{ base: '迷惑', ruby: 'めいわく' }] },
  { id: 'k50-32', kana: 'いかしますⅠ', kanji: '生かします', romaji: 'ikashimasu I', arti: 'menggunakan (contoh: menggunakan pengalaman)', furigana: [{ base: '生', ruby: 'い' }] },
  { id: 'k50-33', kana: 'ミュンヘン', kanji: '-', romaji: 'myunhen', arti: 'München (Jerman)' },
]
