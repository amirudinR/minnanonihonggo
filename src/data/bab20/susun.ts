import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 20 — fokus 文型:
//  (1) Kata Kerja Bentuk Biasa (kalimat biasa / percakapan akrab)
//  (2) Kata Benda は Kata Benda が (kata sifat)
//  (3) Kata Sifat な / Kata Benda Bentuk Biasa (～だ／～じゃない／～だった／～じゃなかった)
//  + catatan: けど, penghilangan partikel, ～ている → てる
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 20 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja Bentuk Biasa', arti: 'Mau makan es krim?', kata: ['アイスクリームを', '食べる？'], jawaban: 'アイスクリームを 食べる？', penjelasan: 'Bentuk Biasa sekarang = Bentuk Kamus; か diganti nada naik.' },
  { id: 's2', fokus: 'Kata Kerja Bentuk Biasa', arti: 'Ya, mau makan.', kata: ['うん', '食べる'], jawaban: 'うん 食べる', penjelasan: 'Jawaban bentuk biasa: うん + Bentuk Kamus.' },
  { id: 's3', fokus: 'Kata Kerja Bentuk Biasa', arti: 'Kemarin bertemu dengan Sdr. Kimura?', kata: ['きのう', '木村さんに', '会った？'], jawaban: 'きのう 木村さんに 会った？', penjelasan: 'Bentuk lampau biasa: 会う → 会った.' },
  { id: 's4', fokus: 'Kata Kerja Bentuk Biasa', arti: 'Tidak, tidak bertemu.', kata: ['ううん', '会わなかった'], jawaban: 'ううん 会わなかった', penjelasan: 'Bentuk negatif lampau biasa: 会わなかった.' },
  { id: 's5', fokus: 'Kata Kerja Bentuk Biasa', arti: 'Bagaimana kalau besok kita pergi ke Kyoto bersama-sama?', kata: ['あした', 'みんなで', '京都へ', '行かない？'], jawaban: 'あした みんなで 京都へ 行かない？', penjelasan: 'Bentuk negatif biasa dipakai untuk ajakan.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk Biasa', arti: 'Ada gunting di situ? ……Tidak, tidak ada.', kata: ['そこに', 'はさみが', 'ある？', 'ううん', 'ない'], jawaban: 'そこに はさみが ある？ ううん ない', penjelasan: 'あります → ある; ありません → ない.' },
  { id: 's7', fokus: 'Kata Benda は Kata Benda が (kata sifat)', arti: 'Di Jepang harga barang-barang mahal.', kata: ['日本は', '物価が', '高い'], jawaban: '日本は 物価が 高い', penjelasan: 'Pola ～は ～が Kata Sifat menjelaskan keadaan.' },
  { id: 's8', fokus: 'Kata Benda は Kata Benda が (kata sifat)', arti: 'Di Tokyo banyak orang.', kata: ['東京は', '人が', '多い'], jawaban: '東京は 人が 多い', penjelasan: '多い = banyak, predikat Kata Sifat い bentu biasa.' },
  { id: 's9', fokus: 'Kata Sifat な Bentuk Biasa', arti: 'Kare itu enak? ……Ya, pedas, tetapi enak.', kata: ['その カレーライスは', 'おいしい？', 'うん', '辛いけど、おいしい'], jawaban: 'その カレーライスは おいしい？ うん 辛いけど、おいしい', penjelasan: 'けど menyambung dua sifat (fungsi seperti が).' },
  { id: 's10', fokus: 'Kata Sifat な Bentuk Biasa', arti: 'Sekarang luang? ……Ya, luang.', kata: ['今', '暇？', 'うん', '暇'], jawaban: '今 暇？ うん 暇', penjelasan: 'Kata Sifat な bentuk biasa: 暇だ → 暇 (だ dihilangkan dalam jawaban).' },
  { id: 's11', fokus: 'Kata Sifat な Bentuk Biasa', arti: 'Laut Okinawa indah.', kata: ['沖縄の 海は', 'きれいだった'], jawaban: '沖縄の 海は きれいだった', penjelasan: 'Bentuk lampau biasa Kata Sifat な: きれいだ → きれいだった.' },
  { id: 's12', fokus: 'Kata Sifat な Bentuk Biasa', arti: 'Tahun lalu pesta ini tidak menyenangkan.', kata: ['きのうの パーティーは', '楽しくなかった'], jawaban: 'きのうの パーティーは 楽しくなかった', penjelasan: 'Bentuk negatif lampau Kata Sifat い: 楽しくなかった.' },
  { id: 's13', fokus: 'Kata Sifat い Bentuk Biasa', arti: 'Setiap hari sibuk.', kata: ['毎日', '忙しい'], jawaban: '毎日 忙しい', penjelasan: 'Bentuk biasa Kata Sifat い: 忙しいです → 忙しい.' },
  { id: 's14', fokus: 'Kata Benda Bentuk Biasa', arti: 'Hari ini hari ulang tahunku.', kata: ['きょうは', '僕の 誕生日だ'], jawaban: 'きょうは 僕の 誕生日だ', penjelasan: 'Kata Benda bentuk biasa sekarang: ～だ.' },
  { id: 's15', fokus: 'Kata Benda Bentuk Biasa', arti: 'Hari ini bukan hari libur.', kata: ['きょうは', '休みじゃ ない'], jawaban: 'きょうは 休みじゃ ない', penjelasan: 'Kata Benda negatif biasa: ～じゃ ない.' },
  { id: 's16', fokus: 'Kata Benda Bentuk Biasa', arti: 'Kemarin hujan.', kata: ['きのうは', '雨だった'], jawaban: 'きのうは 雨だった', penjelasan: 'Kata Benda lampau biasa: ～でした → ～だった.' },
  { id: 's17', fokus: 'Kata Benda Bentuk Biasa', arti: 'Sabtu minggu lalu tidak luang.', kata: ['先週の 土曜日は', '暇じゃ なかった'], jawaban: '先週の 土曜日は 暇じゃ なかった', penjelasan: 'Kata Sifat な negatif lampau biasa: ～じゃ なかった.' },
  { id: 's18', fokus: '～ている → ～てる (bentuk biasa)', arti: 'Punya kamus? ……Tidak, tidak punya.', kata: ['辞書を', '持って いる？', 'ううん', '持って いない'], jawaban: '辞書を 持って いる？ ううん 持って いない', penjelasan: 'Dalam bentuk biasa ～ている sering jadi ～てる.' },
  { id: 's19', fokus: '～ている → ～てる (bentuk biasa)', arti: 'Apakah tahu berita ini?', kata: ['ミラーさんは', 'この ニュースを', '知って いますか'], jawaban: 'ミラーさんは この ニュースを 知って いますか', penjelasan: 'Bentuk sopan untuk dibandingkan dengan bentuk biasa.' },
  { id: 's20', fokus: 'Kata Kerja Bentuk Biasa (negatif)', arti: 'Tidak, saya kira (dia) tidak tahu.', kata: ['いいえ', 'たぶん', '知らないと', '思います'], jawaban: 'いいえ たぶん 知らないと 思います', penjelasan: 'Bentuk biasa 知らない dipakai di dalam kutipan と 思います.' },
]
