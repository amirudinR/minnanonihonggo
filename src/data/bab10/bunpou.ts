import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda が あります / います',
    penjelasan: 'Digunakan untuk menunjukkan keberadaan benda atau orang. あります digunakan untuk benda mati atau tanaman, います digunakan untuk orang atau hewan (benda hidup).',
    contoh: ['コンピューターが あります。', '桜が あります。', '男の 人が います。', '犬が います。'],
    artiContoh: ['Ada komputer.', 'Ada bunga sakura.', 'Ada laki-laki.', 'Ada anjing.']
  },
  {
    no: 2,
    pola: 'Kata Benda1(tempat) に Kata Benda2 が あります / います',
    penjelasan: 'Menyatakan bahwa di suatu tempat (Kata Benda1) ada sesuatu/seseorang (Kata Benda2).',
    contoh: ['わたしの 部屋に 机が あります。', '事務所に ミラーさんが います。'],
    artiContoh: ['Di kamar saya ada meja.', 'Sdr. Miller ada di kantor.']
  },
  {
    no: 3,
    pola: 'Kata Benda1 は Kata Benda2(tempat) に あります / います',
    penjelasan: 'Kata Benda1 di sini sebagai topik pembicaraan. Pola ini menyatakan di mana Kata Benda1 (benda/orang yang sudah diketahui lawan bicara) berada.',
    contoh: ['東京ディズニーランドは 千葉県に あります。', 'ミラーさんは 事務所に います。'],
    artiContoh: ['Tokyo Disneyland ada di Prefektur Chiba.', 'Sdr. Miller ada di kantor.']
  },
  {
    no: 4,
    pola: 'Kata Benda1(benda/orang/tempat) の Kata Benda2(posisi)',
    penjelasan: 'Kata Benda2 menyatakan posisi (atas, bawah, depan, belakang, dsb) dari Kata Benda1.',
    contoh: ['机の 上に 写真が あります。', '郵便局は 銀行の 隣に あります。'],
    artiContoh: ['Di atas meja ada foto.', 'Kantor pos ada di sebelah bank.']
  },
  {
    no: 5,
    pola: 'Kata Benda1 や Kata Benda2',
    penjelasan: 'Partikel や digunakan untuk menyebutkan beberapa benda di antara benda-benda lainnya (dan lain-lain).',
    contoh: ['箱の 中に 手紙や 写真が あります。', '箱の 中に 手紙や 写真など が あります。'],
    artiContoh: ['Di dalam kotak ada surat, foto, dan lain-lain.', 'Di dalam kotak ada hal seperti surat, foto, dan lain-lain.']
  }
]

export const catatanTataBahasa: Bunpou[] = []
