import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 10 — fokus 文型:
//  (1) Kata Benda が あります / います（pemilihan あります/います）
//  (2) Kata Benda(tempat) に Kata Benda が あります / います
//  (3) Kata Benda1 は Kata Benda2(tempat) に あります / います
//  (4) Kata Benda(benda/orang/tempat) の Kata Benda(posisi)
//  (5) Kata Benda1 や Kata Benda2（［など］）
// ATURAN: `kata` = unit kata (boleh ada spasi internal); `jawaban` = unit itu dalam urutan benar.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 10 (pola & kalimat buku), bukan karangan.
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～が あります', arti: 'Di sana ada komputer.', kata: ['あそこに', 'コンピューターが', 'あります'], jawaban: 'あそこに コンピューターが あります', penjelasan: 'あります dipakai untuk benda mati seperti komputer.' },
  { id: 's2', fokus: '～が います', arti: 'Di sana ada laki-laki.', kata: ['あそこに', '男の 人が', 'います'], jawaban: 'あそこに 男の 人が います', penjelasan: 'います dipakai untuk orang atau hewan.' },
  { id: 's3', fokus: '～が います', arti: 'Di sana ada Sdr. Sato.', kata: ['あそこに', '佐藤さんが', 'います'], jawaban: 'あそこに 佐藤さんが います', penjelasan: 'Keberadaan orang memakai います.' },
  { id: 's4', fokus: '～に ～が あります', arti: 'Di kamar saya ada meja.', kata: ['わたしの 部屋に', '机が', 'あります'], jawaban: 'わたしの 部屋に 机が あります', penjelasan: 'Tempat に + benda が + あります.' },
  { id: 's5', fokus: '～に ～が います', arti: 'Di kantor ada Sdr. Miller.', kata: ['事務所に', 'ミラーさんが', 'います'], jawaban: '事務所に ミラーさんが います', penjelasan: 'Tempat に + orang が + います.' },
  { id: 's6', fokus: '～は ～に あります', arti: 'Tokyo Disneyland ada di Prefektur Chiba.', kata: ['東京ディズニーランドは', '千葉県に', 'あります'], jawaban: '東京ディズニーランドは 千葉県に あります', penjelasan: 'Topik は … に あります menyatakan letak tempat.' },
  { id: 's7', fokus: '～は ～に います', arti: 'Sdr. Miller ada di kantor.', kata: ['ミラーさんは', '事務所に', 'います'], jawaban: 'ミラーさんは 事務所に います', penjelasan: 'Topik orang は … に います.' },
  { id: 's8', fokus: '～は ～に います', arti: 'Keluarga saya ada di New York.', kata: ['家族は', 'ニューヨークに', 'います'], jawaban: '家族は ニューヨークに います', penjelasan: 'います juga dipakai untuk keluarga (orang).' },
  { id: 's9', fokus: '～の 上に ～が あります', arti: 'Di atas meja ada foto.', kata: ['机の 上に', '写真が', 'あります'], jawaban: '机の 上に 写真が あります', penjelasan: '～の 上 = bagian atas dari suatu benda.' },
  { id: 's10', fokus: '～は ～の 隣に あります', arti: 'Kantor pos ada di sebelah bank.', kata: ['郵便局は', '銀行の 隣に', 'あります'], jawaban: '郵便局は 銀行の 隣に あります', penjelasan: '～の 隣 = di sebelah (sesuatu).' },
  { id: 's11', fokus: '～は ～の 前に あります', arti: 'Kantor pos ada di depan bank.', kata: ['郵便局は', '銀行の 前に', 'あります'], jawaban: '郵便局は 銀行の 前に あります', penjelasan: '～の 前 = di depan (sesuatu).' },
  { id: 's12', fokus: '～の 中に ～や ～［など］が あります', arti: 'Di dalam kotak ada surat, foto, dan lain-lain.', kata: ['箱の 中に', '手紙や', '写真などが', 'あります'], jawaban: '箱の 中に 手紙や 写真などが あります', penjelasan: 'や menyebut beberapa benda di antara yang lain (dan lain-lain).' },
  { id: 's13', fokus: '～の 中に ～や ～が あります', arti: 'Di dalam kotak ada surat, foto, dan lain-lain.', kata: ['箱の 中に', '手紙や', '写真が', 'あります'], jawaban: '箱の 中に 手紙や 写真が あります', penjelasan: 'や menyambung dua kata benda tanpa menyebut semuanya.' },
  { id: 's14', fokus: '～に だれが いますか', arti: 'Di halaman ada siapa?', kata: ['庭に', 'だれが', 'いますか'], jawaban: '庭に だれが いますか', penjelasan: 'だれが いますか = "ada siapa".' },
  { id: 's15', fokus: '～に 何が ありますか', arti: 'Di dalam kotak ada apa?', kata: ['箱の 中に', '何が', 'ありますか'], jawaban: '箱の 中に 何が ありますか', penjelasan: '何が ありますか = "ada apa" untuk benda.' },
  { id: 's16', fokus: '～は どこに いますか', arti: 'Sdr. Miller ada di mana?', kata: ['ミラーさんは', 'どこに', 'いますか'], jawaban: 'ミラーさんは どこに いますか', penjelasan: 'どこに … いますか menanyakan letak orang.' },
  { id: 's17', fokus: '～は どこに ありますか', arti: 'Kantor pos ada di mana?', kata: ['郵便局は', 'どこに', 'ありますか'], jawaban: '郵便局は どこに ありますか', penjelasan: 'どこに … ありますか menanyakan letak benda/tempat.' },
  { id: 's18', fokus: '～を 見ます', arti: 'Di sana ada laki-laki, ya. Orang itu siapa?', kata: ['あそこに', '男の 人が', 'いますね', 'あの 人は', 'だれですか'], jawaban: 'あそこに 男の 人が いますね あの 人は だれですか', penjelasan: 'いますね = menyatakan pengamatan/ajakan setuju.' },
  { id: 's19', fokus: '～に ～が ありますか', arti: 'Apakah di dekat sini ada telepon?', kata: ['この 近くに', '電話が', 'ありますか'], jawaban: 'この 近くに 電話が ありますか', penjelasan: '～の 近く = di dekat (sesuatu).' },
  { id: 's20', fokus: '～は どこに ありますか', arti: 'Apakah kantor posnya ada di mana? ……Di dekat stasiun.', kata: ['郵便局は', 'どこに', 'ありますか', '駅の 近くです'], jawaban: '郵便局は どこに ありますか 駅の 近くです', penjelasan: 'Jawaban menyebut letak dengan ～の 近く.' },
]
