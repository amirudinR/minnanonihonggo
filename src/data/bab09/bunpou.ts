import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda が あります / わかります\nKata Benda が 好き / 嫌い / 上手 / 下手 です',
    penjelasan: 'Objek dari あります (ada/mempunyai), わかります (mengerti), 好きです (suka), 嫌いです (benci), 上手です (pandai), dan 下手です (tidak pandai) ditunjukkan dengan partikel が, bukan を.',
    contoh: ['わたしは イタリア料理が 好きです。', 'わたしは 日本語が 少し わかります。', 'きょうは 用事が あります。'],
    artiContoh: ['Saya suka masakan Italia.', 'Saya sedikit mengerti bahasa Jepang.', 'Hari ini ada urusan.']
  },
  {
    no: 2,
    pola: 'どんな Kata Benda',
    penjelasan: 'Digunakan untuk menanyakan hal secara khusus dari sebuah kategori/kelompok besar (Lihat Pel.8).',
    contoh: ['どんな スポーツが 好きですか。……サッカーが 好きです。'],
    artiContoh: ['Suka olahraga yang bagaimana? ……Suka sepak bola.']
  },
  {
    no: 3,
    pola: 'よく / だいたい / たくさん / 少し / あまり / 全然',
    penjelasan: 'Kata keterangan yang diletakkan sebelum kata kerja untuk menunjukkan tingkat atau kuantitas. あまり dan 全然 selalu diikuti dengan bentuk negatif.',
    contoh: ['英語が よく わかります。', '英語が 少し わかります。', '英語が あまり わかりません。', 'お金が たくさん あります。', 'お金が 全然 ありません。'],
    artiContoh: ['Mengerti bahasa Inggris dengan baik.', 'Sedikit mengerti bahasa Inggris.', 'Tidak begitu mengerti bahasa Inggris.', 'Mempunyai banyak uang.', 'Sama sekali tidak punya uang.']
  },
  {
    no: 4,
    pola: 'Kalimat 1 から、Kalimat 2',
    penjelasan: 'Menyambungkan dua kalimat dengan から yang berarti "karena". Kalimat 1 adalah alasan, Kalimat 2 adalah akibat.',
    contoh: ['時間が ありませんから、新聞を 読みません。'],
    artiContoh: ['Karena tidak ada waktu, saya tidak membaca surat kabar.']
  },
  {
    no: 5,
    pola: 'どうして',
    penjelasan: 'Kata tanya untuk menanyakan alasan. Jawabannya selalu diakhiri dengan ～から (karena).',
    contoh: ['どうして 朝刊を 読みませんか。……時間が ありませんから。'],
    artiContoh: ['Kenapa tidak membaca koran pagi? ……Karena tidak ada waktu.']
  }
]

export const catatanTataBahasa: Bunpou[] = []
