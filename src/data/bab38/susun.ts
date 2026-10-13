import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 38 — fokus 文型:
//  (1) [Kata Kerja Bentuk Kamus] のは [Kata Sifat] です
//  (2) [Kata Kerja Bentuk Kamus] のが [Kata Sifat] です
//  (3) [Kata Kerja Bentuk Kamus] のを 忘れました
//  (4) [Bentuk Biasa/Kata Sifat/Kata Benda] の（は・が） … です
//  + catatan: ～のを 知っていますか
// ATURAN: `kata` = token dari `jawaban` (pisah spasi) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 38 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja Bentuk Kamus のは ～です', arti: 'Bermain tenis itu menarik.', kata: ['テニスを', 'するのは', 'おもしろいです'], jawaban: 'テニスを するのは おもしろいです', penjelasan: 'の menominalkan Kata Kerja; のは menjadi topik.' },
  { id: 's2', fokus: 'Kata Kerja Bentuk Kamus のは ～です', arti: 'Mulainya mudah, tetapi meneruskannya susah.', kata: ['始めるのは', '簡単ですが', '続けるのは', '難しいですね'], jawaban: '始めるのは 簡単ですが 続けるのは 難しいですね', penjelasan: 'Dua klausa のは dikontraskan dengan が.' },
  { id: 's3', fokus: 'Kata Kerja Bentuk Kamus のは ～です', arti: 'Melewati kereta yang penuh sesak setiap hari itu berat.', kata: ['ラッシュの', '電車で', '毎日', '通うのは', '大変です'], jawaban: 'ラッシュの 電車で 毎日 通うのは 大変です', penjelasan: 'のは + Kata Sifat な 大変です menerangkan kegiatan.' },
  { id: 's4', fokus: 'Kata Kerja Bentuk Kamus のは ～です', arti: 'Minum minuman keras setiap hari itu buruk untuk kesehatan.', kata: ['毎日', 'お酒を', '飲むのは', '体に', '悪いです'], jawaban: '毎日 お酒を 飲むのは 体に 悪いです', penjelasan: 'のは + Kata Sifat い 悪いです.' },
  { id: 's5', fokus: 'Kata Kerja Bentuk Kamus のが ～です', arti: 'Saya suka memelihara bunga.', kata: ['わたしは', '花を', '育てるのが', '好きです'], jawaban: 'わたしは 花を 育てるのが 好きです', penjelasan: 'のが menjadi sasaran Kata Sifat すき.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk Kamus のが ～です', arti: 'Orang-orang di Tokyo cepat berjalan.', kata: ['東京の', '人は', '歩くのが', '速いです'], jawaban: '東京の 人は 歩くのが 速いです', penjelasan: 'のが + Kata Sifat い 速いです menyatakan keterampilan.' },
  { id: 's7', fokus: 'Kata Kerja Bentuk Kamus のが ～です', arti: 'Suami (saya) pandai memelihara bunga.', kata: ['夫は', '花を', '育てるのが', '上手なんです'], jawaban: '夫は 花を 育てるのが 上手なんです', penjelasan: 'のが + 上手なんです menyatakan keterampilan seseorang.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk Kamus のが ～です', arti: '(Dia) pandai memuji anak.', kata: ['彼女は', '子どもを', '褒めるのが', '上手です'], jawaban: '彼女は 子どもを 褒めるのが 上手です', penjelasan: 'のが + 上手です = pandai melakukan.' },
  { id: 's9', fokus: 'Kata Kerja Bentuk Kamus のが ～です', arti: 'Saya suka berjalan-jalan di pantai.', kata: ['わたしは', '海岸を', '散歩するのが', '好きです'], jawaban: 'わたしは 海岸を 散歩するのが 好きです', penjelasan: 'のが + 好きです menyatakan kesukaan.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk Kamus のを 忘れました', arti: 'Lupa membeli susu.', kata: ['牛乳を', '買うのを', '忘れました'], jawaban: '牛乳を 買うのを 忘れました', penjelasan: 'のを menandai isi hal yang dilupakan.' },
  { id: 's11', fokus: 'Kata Kerja Bentuk Kamus のを 忘れました', arti: 'Lupa menutup jendela mobil.', kata: ['車の', '窓を', '閉めるのを', '忘れました'], jawaban: '車の 窓を 閉めるのを 忘れました', penjelasan: 'Kalimat buku: 車の 窓を 閉めるのを 忘れました.' },
  { id: 's12', fokus: 'Kata Kerja Bentuk Kamus のを 忘れました', arti: 'Lupa mematikan lampu.', kata: ['電気を', 'けすのを', '忘れました'], jawaban: '電気を けすのを 忘れました', penjelasan: 'のを 忘れました berlaku untuk berbagai Kata Kerja.' },
  { id: 's13', fokus: 'Kata Kerja Bentuk Kamus のを 忘れました', arti: 'Lupa membawa PR hari ini.', kata: ['宿題を', 'しましたが', 'きょう', '持って 来るのを', '忘れました'], jawaban: '宿題を しましたが きょう 持って 来るのを 忘れました', penjelasan: 'Kalimat majemuk が, lalu のを 忘れました.' },
  { id: 's14', fokus: '～のを 知っていますか', arti: 'Apakah (Anda) tahu bahwa Sdr. Kimura melahirkan?', kata: ['木村さんに', '赤ちゃんが', '生まれたのを', '知っていますか'], jawaban: '木村さんに 赤ちゃんが 生まれたのを 知っていますか', penjelasan: 'Kalimat biasa + のを 知っていますか = menanyakan pengetahuan.' },
  { id: 's15', fokus: '～のを 知っていますか', arti: 'Apakah Anda tahu sdr. Suzuki akan menikah bulan depan?', kata: ['鈴木さんが', '来月', '結婚するのを', '知っていますか'], jawaban: '鈴木さんが 来月 結婚するのを 知っていますか', penjelasan: 'のを 知っていますか untuk menanyakan informasi.' },
  { id: 's16', fokus: '～のは … です', arti: 'Kapan pertama kali bertemu?', kata: ['初めて', '会ったのは', 'いつですか'], jawaban: '初めて 会ったのは いつですか', penjelasan: 'のは menekankan unsur sebelum のは.' },
  { id: 's17', fokus: '～のは … です', arti: 'Tempat ayah saya lahir adalah sebuah desa kecil di Hokkaido.', kata: ['父が', '生まれたのは', '北海道の', '小さな 村です'], jawaban: '父が 生まれたのは 北海道の 小さな 村です', penjelasan: 'Unsur pokok sebelum のは ditandai が (父が).' },
  { id: 's18', fokus: '～のは … です', arti: 'Tempat anak perempuan saya lahir adalah sebuah kota kecil di Hokkaido.', kata: ['娘が', '生まれたのは', '北海道の', '小さな 町です'], jawaban: '娘が 生まれたのは 北海道の 小さな 町です', penjelasan: 'Pola ～のは … です untuk menekankan kata benda.' },
  { id: 's19', fokus: '～のは … です', arti: 'Yang paling penting adalah kesehatan keluarga.', kata: ['いちばん', '大切なのは', '家族の', '健康です'], jawaban: 'いちばん 大切なのは 家族の 健康です', penjelasan: 'Kata Sifat な + のは menekankan kata benda setelahnya.' },
  { id: 's20', fokus: '～のは … です', arti: 'Yang saya ingin adalah sepatu buatan Italia.', kata: ['わたしが', 'ほしいのは', 'イタリア製の', '靴です'], jawaban: 'わたしが ほしいのは イタリア製の 靴です', penjelasan: 'Unsur pokok sebelum のは ditandai が, bukan は.' },
]
