import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 34 — fokus pola 文型:
//  (1) わたしが（〜と／〜とおりに）、〜てください
//  (2) 〜た あとで、〜ます
//  (3) 〜は 〜を 〜ないで 飲みます／食べます
//  + catatan: Kata Benda の とおりに , Kata Benda の あとで , 〜て ＋ Kata Kerja
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 34 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'わたしが 〜とおりに、〜てください', arti: 'Silakan menari seperti yang saya lakukan.', kata: ['わたしが', 'する', 'とおりに', '踊って', 'ください'], jawaban: 'わたしが する とおりに 踊って ください', penjelasan: '～とおりに = "sama seperti ..."; diikuti ～て ください.' },
  { id: 's2', fokus: '〜た とおりに、〜てください', arti: 'Ceritakanlah persis seperti yang saya lihat.', kata: ['見た', 'とおりに', '話して', 'ください'], jawaban: '見た とおりに 話して ください', penjelasan: 'Bentuk た + とおりに menyatakan melakukan sama seperti yang dilakukan.' },
  { id: 's3', fokus: 'Kata Benda の とおりに', arti: '……Ya, silakan memasangnya sesuai dengan petunjuk.', kata: ['説明書の', 'とおりに', '組み立てて', 'ください'], jawaban: '説明書の とおりに 組み立てて ください', penjelasan: 'Kata Benda の + とおりに = "sesuai dengan ...".' },
  { id: 's4', fokus: 'わたしが 〜とおりに、〜てください', arti: 'Silakan mengunting kertas sesuai dengan gambar!', kata: ['絵の', 'とおりに', '紙を', '切ってください'], jawaban: '絵の とおりに 紙を 切ってください', penjelasan: '絵の とおりに = mengikuti garis/gambar.' },
  { id: 's5', fokus: 'わたしが 〜とおりに、〜てください', arti: '(Saya) memasang sesuai dengan petunjuk.', kata: ['説明書の', 'とおりに', '組み立てました'], jawaban: '説明書の とおりに 組み立てました', penjelasan: 'Pola とおりに juga dipakai pada kalimat lampau.' },
  { id: 's6', fokus: '〜た あとで、〜ます', arti: 'Setelah makan, (saya) menggosok gigi.', kata: ['ごはんを', '食べた', 'あとで', '歯を', '磨きます'], jawaban: 'ごはんを 食べた あとで 歯を 磨きます', penjelasan: 'Bentuk た + あとで menyatakan urutan: setelah ... lalu ....' },
  { id: 's7', fokus: '〜た あとで、〜ます', arti: 'Baru saya sadari setelah pulang ke rumah.', kata: ['うちへ', '帰った', 'あとで', '気が', 'ついたんです'], jawaban: 'うちへ 帰った あとで 気が ついたんです', penjelasan: '～た あとで menyatakan hal lampau yang baru disadari.' },
  { id: 's8', fokus: 'Kata Benda の あとで', arti: 'Setelah selesai bekerja, bagaimana kalau kita pergi minum?', kata: ['仕事の', 'あとで', '飲みに', '行きませんか'], jawaban: '仕事の あとで 飲みに 行きませんか', penjelasan: 'Kata Benda の + あとで = "setelah (selesai) ...".' },
  { id: 's9', fokus: '〜た あとで、〜ます', arti: 'Setelah membeli yang baru, ditemukan arloji yang hilang.', kata: ['新しいのを', '買った', 'あとで', 'なくした', '時計が', '見つかりました'], jawaban: '新しいのを 買った あとで なくした 時計が 見つかりました', penjelasan: '～た あとで menyatakan waktu terjadinya hal pada klausa pokok.' },
  { id: 's10', fokus: '〜は 〜を 〜ないで 食べます', arti: 'Makan tanpa kecap asin.', kata: ['しょうゆを', 'つけないで', '食べます'], jawaban: 'しょうゆを つけないで 食べます', penjelasan: 'Bentuk ない + ないで menyatakan melakukan tanpa hal tersebut.' },
  { id: 's11', fokus: '〜は 〜を 〜ないで 食べます', arti: 'Makan tanpa apa pun.', kata: ['何も', 'つけないで', '食べて', 'ください'], jawaban: '何も つけないで 食べて ください', penjelasan: '何も つけないで = tanpa dibubuhkan apa pun.' },
  { id: 's12', fokus: '〜て ＋ Kata Kerja', arti: 'Makan dibubuhkan kecap asin.', kata: ['しょうゆを', 'つけて', '食べます'], jawaban: 'しょうゆを つけて 食べます', penjelasan: 'Bentuk て menyatakan keadaan yang disertai aksi lain.' },
  { id: 's13', fokus: '〜て ＋ Kata Kerja', arti: 'Hari Minggu tidak pergi ke mana-mana, tetapi beristirahat santai-santai di rumah.', kata: ['日曜日は', 'どこにも', '行かないで', 'うちで', 'ゆっくり', '休みます'], jawaban: '日曜日は どこにも 行かないで うちで ゆっくり 休みます', penjelasan: '行かないで 休みます = memilih salah satu aksi yang tidak bisa bersamaan.' },
  { id: 's14', fokus: 'Kata Benda の とおりに', arti: 'Meja ini dipasang sendiri?', kata: ['この', 'テーブルは', '自分で', '組み立てるんです'], jawaban: 'この テーブルは 自分で 組み立てるんです', penjelasan: '自分で 組み立てるんです menyampaikan penjelasan kegiatan.' },
  { id: 's15', fokus: '〜た あとで、〜ます', arti: 'Sudah selesai bekerja, bagaimana kalau pergi minum?', kata: ['仕事の', 'あとで', '飲みに', '行きませんか', 'すみません'], jawaban: '仕事の あとで 飲みに 行きませんか すみません', penjelasan: 'Ajakan ～ませんか yang ditolak dengan すみません.' },
  { id: 's16', fokus: '〜ないで ＋ Kata Kerja', arti: '(Saya) tidak naik bus, tetapi berjalan kaki.', kata: ['バスに', '乗らないで', '歩いているんです'], jawaban: 'バスに 乗らないで 歩いているんです', penjelasan: '乗らないで menyatakan aksi yang tidak dilakukan, diganti aksi lain.' },
  { id: 's17', fokus: '〜た あとで、〜ます', arti: 'Setelah pulang ke rumah, (saya) baru menyadarinya.', kata: ['うちへ', '帰った', 'あとで', '気が', 'つきました'], jawaban: 'うちへ 帰った あとで 気が つきました', penjelasan: '～た あとで 気が つきました = baru sadar setelah ....' },
  { id: 's18', fokus: 'わたしが 〜とおりに、〜てください', arti: 'Silakan berbicara sama seperti yang Anda ucapkan!', kata: ['言った', 'とおりに', '話して', 'ください'], jawaban: '言った とおりに 話して ください', penjelasan: '言った とおりに = sama seperti yang diucapkan.' },
  { id: 's19', fokus: '〜は 〜を 〜ないで 飲みます', arti: 'Kopi saya minum tanpa gula.', kata: ['コーヒーは', '砂糖を', '入れないで', '飲みます'], jawaban: 'コーヒーは 砂糖を 入れないで 飲みます', penjelasan: '入れないで 飲みます = meminum tanpa memasukkan gula.' },
  { id: 's20', fokus: '〜た とおりに、〜てください', arti: 'Silakan lakukan sama seperti yang saya buat!', kata: ['わたしが', 'やった', 'とおりに', 'やって', 'ください'], jawaban: 'わたしが やった とおりに やって ください', penjelasan: 'わたしが やった とおりに = seperti yang saya kerjakan.' },
]
