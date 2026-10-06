import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kalimat nominal dan adjektival bentuk waktu lampau',
    penjelasan: 'Untuk waktu lampau kalimat Kata Benda dan Kata Sifat な, digunakan でした. Untuk negatif waktu lampau digunakan じゃ ありませんでした. Sedangkan untuk Kata Sifat い, bentuk waktu lampau adalah ～かったです, dan negatifnya adalah ～く なかったです.',
    contoh: ['きのうは 雨でした。', 'きのうの 試験は 簡単じゃ ありませんでした。', 'きのうは 暑かったです。', 'きのうの パーティーは あまり 楽しく なかったです。'],
    artiContoh: ['Kemarin hujan.', 'Ujian kemarin tidak mudah.', 'Kemarin panas.', 'Pesta kemarin tidak begitu menyenangkan.']
  },
  {
    no: 2,
    pola: 'Kata Benda1 は Kata Benda2 より Kata Sifat です',
    penjelasan: 'Pola kalimat ini menunjukkan perbandingan. Kata Benda1 dibandingkan dengan Kata Benda2.',
    contoh: ['この 車は あの 車より 大きいです。'],
    artiContoh: ['Mobil ini lebih besar daripada mobil itu.']
  },
  {
    no: 3,
    pola: 'Kata Benda1 と Kata Benda2 と どちらが Kata Sifat ですか\n……Kata Benda1/Kata Benda2 の ほうが Kata Sifat です',
    penjelasan: 'Pola kalimat tanya ini digunakan untuk meminta lawan bicara memilih antara 2 benda. Untuk menjawab, digunakan ～の ほうが.',
    contoh: ['サッカーと 野球と どちらが おもしろいですか。……サッカーの ほうが おもしろいです。'],
    artiContoh: ['Sepak bola dan bisbol, yang mana yang menarik? ……Sepak bola lebih menarik.']
  },
  {
    no: 4,
    pola: 'Kata Benda1［の中］で {何 / どこ / だれ / いつ} が いちばん Kata Sifat ですか\n……Kata Benda2 が いちばん Kata Sifat です',
    penjelasan: 'Pola ini digunakan untuk menanyakan hal yang menempati derajat paling tinggi dari kelompok Kata Benda1. Jawabannya menggunakan いちばん.',
    contoh: ['日本料理［の中］で 何が いちばん おいしいですか。……てんぷらが いちばん おいしいです。'],
    artiContoh: ['Masakan Jepang, yang mana yang paling enak? ……Tempura yang paling enak.']
  }
]

export const catatanTataBahasa: Bunpou[] = []
