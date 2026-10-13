import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 22 — fokus 文型:
//  (1) Kata Benda は [anak kalimat] Kata Benda です (menerangkan Kata Benda)
//  (2) Kata Kerja Bentuk Kamus 時間／約束／用事 が あります
//  (3) Kata Kerja (Bentuk ます) ましょうか
//  + catatan: subjek anak kalimat dengan が
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 22 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'これは [anak kalimat] Kata Benda です', arti: 'Ini kue yang dibuat oleh Sdr. Miller.', kata: ['これは', 'ミラーさんが', '作った', 'ケーキです'], jawaban: 'これは ミラーさんが 作った ケーキです', penjelasan: 'Anak kalimat ミラーさんが 作った menerangkan kata benda ケーキ.' },
  { id: 's2', fokus: 'これは [anak kalimat] Kata Benda です', arti: 'Ini foto yang saya ambil di Tembok Besar Cina.', kata: ['これは', '万里の 長城で', '撮った', '写真です'], jawaban: 'これは 万里の 長城で 撮った 写真です', penjelasan: 'Anak kalimat 万里の 長城で 撮った menerangkan 写真.' },
  { id: 's3', fokus: 'これは [anak kalimat] Kata Benda です', arti: 'Ini majalah yang saya pinjam dari Sdr. Tawapon.', kata: ['これは', 'タワポンさんに', '借りた', '雑誌です'], jawaban: 'これは タワポンさんに 借りた 雑誌です', penjelasan: 'Bentuk た (借りた) menerangkan kata benda 雑誌.' },
  { id: 's4', fokus: 'これは [anak kalimat] Kata Benda です', arti: 'Ini gambar yang dilukis oleh Sdr. Karina.', kata: ['これは', 'カリナさんが', 'かいた', '絵です'], jawaban: 'これは カリナさんが かいた 絵です', penjelasan: 'Subjek anak kalimat ditandai partikel が.' },
  { id: 's5', fokus: '[anak kalimat] Kata Benda は ～です', arti: 'Orang yang ada di sana adalah Sdr. Miller.', kata: ['あそこに', 'いる', '人は', 'ミラーさんです'], jawaban: 'あそこに いる 人は ミラーさんです', penjelasan: 'Anak kalimat あそこに いる menerangkan 人.' },
  { id: 's6', fokus: '[anak kalimat] Kata Benda は ～です', arti: 'Siapakah orang yang memakai kimono itu?', kata: ['あの', '着物を', '着て いる', '人は', 'だれですか'], jawaban: 'あの 着物を 着て いる 人は だれですか', penjelasan: 'Bentuk ～て いる menerangkan 人 secara progresif.' },
  { id: 's7', fokus: '[anak kalimat] Kata Benda は ～です', arti: 'Yang mana lukisan yang dilukis oleh Sdr. Karina?', kata: ['カリナさんが', 'かいた', '絵は', 'どれですか'], jawaban: 'カリナさんが かいた 絵は どれですか', penjelasan: 'Kalimat tanya どれですか dengan topik beranak kalimat.' },
  { id: 's8', fokus: '[anak kalimat] Kata Benda は ～です', arti: 'Rumah yang dihuni Sdr. Miller sudah tua.', kata: ['ミラーさんが', '住んで いた', 'うちは', '古いです'], jawaban: 'ミラーさんが 住んで いた うちは 古いです', penjelasan: 'Anak kalimat ミラーさんが 住んで いた menerangkan うち.' },
  { id: 's9', fokus: '[anak kalimat] Kata Benda が 好きです', arti: 'Saya suka lukisan yang dilukis oleh Sdr. Karina.', kata: ['わたしは', 'カリナさんが', 'かいた', '絵が', '好きです'], jawaban: 'わたしは カリナさんが かいた 絵が 好きです', penjelasan: 'Anak kalimat + 絵が 好きです.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk Kamus 時間が ありません', arti: 'Tidak ada waktu untuk pergi belanja.', kata: ['買い物に', '行く', '時間が', 'ありません'], jawaban: '買い物に 行く 時間が ありません', penjelasan: 'Bentuk kamus + 時間が ありません = tidak ada waktu untuk ....' },
  { id: 's11', fokus: 'Kata Kerja Bentuk Kamus 時間が ありません', arti: 'Saya tidak ada waktu makan pagi.', kata: ['わたしは', '朝ごはんを', '食べる', '時間が', 'ありません'], jawaban: 'わたしは 朝ごはんを 食べる 時間が ありません', penjelasan: '食べる (bentuk kamus) menerangkan 時間.' },
  { id: 's12', fokus: 'Kata Kerja Bentuk Kamus 約束が あります', arti: 'Saya ada janji dengan teman untuk menonton film.', kata: ['わたしは', '友達と', '映画を', '見る', '約束が', 'あります'], jawaban: 'わたしは 友達と 映画を 見る 約束が あります', penjelasan: '見る 約束が あります = ada janji untuk menonton.' },
  { id: 's13', fokus: 'Kata Kerja Bentuk Kamus 用事が あります', arti: 'Hari ini ada urusan pergi ke kantor wali kota.', kata: ['きょうは', '市役所へ', '行く', '用事が', 'あります'], jawaban: 'きょうは 市役所へ 行く 用事が あります', penjelasan: '行く 用事が あります = ada urusan pergi.' },
  { id: 's14', fokus: 'Kata Kerja Bentuk Kamus 約束が あります', arti: 'Bagaimana kalau pergi minum? ……Maaf, malam ini ada janji bertemu teman.', kata: ['今晩', '飲みに', '行きませんか', 'すみません', '今晩は', '友達に 会う 約束が', 'あります'], jawaban: '今晩 飲みに 行きませんか すみません 今晩は 友達に 会う 約束が あります', penjelasan: 'Alasan menolak ajakan: 友達に 会う 約束が あります.' },
  { id: 's15', fokus: '[anak kalimat] Kata Benda を 買いました', arti: 'Membeli rumah yang dihuni Sdr. Miller.', kata: ['ミラーさんが', '住んで いた', 'うちを', '買いました'], jawaban: 'ミラーさんが 住んで いた うちを 買いました', penjelasan: 'Anak kalimat menerangkan kata benda objek うち.' },
  { id: 's16', fokus: '[anak kalimat] Kata Benda', arti: 'Apakah Anda tahu tempat dia dilahirkan?', kata: ['彼が', '生まれた', '所を', '知って いますか'], jawaban: '彼が 生まれた 所を 知って いますか', penjelasan: '生まれた 所 = tempat (dia) dilahirkan.' },
  { id: 's17', fokus: '[anak kalimat] Kata Benda', arti: 'Saya kehilangan payung yang saya beli kemarin.', kata: ['きのう', '買った', '傘を', 'なくしました'], jawaban: 'きのう 買った 傘を なくしました', penjelasan: 'Bentuk た 買った menerangkan 傘 (peristiwa lampau).' },
  { id: 's18', fokus: '[anak kalimat] Kata Benda が 欲しいです', arti: 'Ingin punya rumah yang berhalaman luas.', kata: ['広い', '庭が', 'ある', 'うちが', '欲しいです'], jawaban: '広い 庭が ある うちが 欲しいです', penjelasan: 'Anak kalimat 広い 庭が ある menerangkan うち.' },
  { id: 's19', fokus: '[anak kalimat] Kata Benda は どうでしたか', arti: 'Bagaimana konser yang Anda tonton bersama Sdr. Kimura?', kata: ['木村さんと', '行った', 'コンサートは', 'どうでしたか'], jawaban: '木村さんと 行った コンサートは どうでしたか', penjelasan: 'Anak kalimat menerangkan コンサート yang dibicarakan.' },
  { id: 's20', fokus: 'Kata Kerja (Bentuk ます) ましょうか', arti: 'Apakah kamar ini dapat saya lihat hari ini? ……Ya. Bagaimana kalau pergi sekarang?', kata: ['この 部屋、', 'きょう', '見る ことが', 'できますか', 'ええ', '今から', '行きましょうか'], jawaban: 'この 部屋、 きょう 見る ことが できますか ええ 今から 行きましょうか', penjelasan: 'ましょうか menawarkan diri untuk bersama-sama melakukan sesuatu.' },
]
