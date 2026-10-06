import type { Bunpou } from '@/types/bab'

// Pola kalimat Bab 43 — sumber: PDF Indonesia, "Pelajaran 43 · IV. Keterangan Tata Bahasa"
// (idx 135-136). Buku Indonesia mencetak 3 kotak bernomor; kotak no. 1 memuat dua sub-pola
// yang masing-masing punya penjelasan + nomor contoh sendiri, jadi dipecah menjadi 2 bunpou
// (total 4). Nomor contoh ①–⑬ mengikuti penomoran buku.
// Pola, penjelasan, contoh, dan arti contoh diambil dari buku (bukan karangan).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja (Bentuk ます) そうです',
    penjelasan:
      'Pola kalimat ini menyatakan gejala akan terjadinya gerakan atau perubahan yang dinyatakan dengan Kata Kerja. Dapat digunakan bersama dengan Kata Keterangan いまにも, もうすぐ, ～それから dan lain-lainnya yang menyatakan masa gerakan atau perubahannya akan terjadi.',
    contoh: ['今にも 雨が 降りそうです。', 'もうすぐ 桜が 咲きそうです。', 'これから 寒くなりそうです。'],
    artiContoh: ['Mau hujan sekarang juga.', 'Sebentar lagi Sakura mau mekar.', 'Rupanya mau menjadi dingin.'],
  },
  {
    no: 2,
    pola: 'Kata Sifat い（～い）そうです ／ Kata Sifat な［な］そうです',
    penjelasan:
      'Cara ungkapan untuk menjelaskan sifat dari pandangan/pengelihatan luar dengan menduga tanpa mengecek sesungguhnya.',
    contoh: ['この 料理は 辛そうです。', '彼女は 頭が よさそうです。', 'この 机は 丈夫そうです。'],
    artiContoh: ['Rupanya masakan ini pedas.', 'Rupanya dia pintar.', 'Rupanya meja ini kuat.'],
  },
  {
    no: 3,
    pola: 'Kata Kerja Bentuk て 来ます',
    penjelasan:
      '① Kata Kerja Bentuk て きます menyatakan arti bahwa pergi ke suatu tempat, dan melakukan suatu aksi, kemudian kembali. ⑧ menyatakan tiga aksi, yakni (1) pergi ke tempat menjual rokok, (2) membeli rokok di situ, dan (3) kembali ke tempat semula. Seperti ⑨, tempat beraksi yang dinyatakan dengan Kata Kerja Bentuk て ditunjuk dengan て, sedangkan seperti ⑩, jika dianggap sebagai asal usul barang yang ditunjuk dengan を (titik awal untuk keluar barang), digunakan から. Selain とって きます, Kata Kerja yang menggunakan から terdapat もって きます, はこんで きます dan lain-lainnya. ② Kata Benda(tempat)へ 行って 来ます — Sebelum きます memakai Kata Kerja いきます Bentuk て menyatakan arti untuk pergi ke suatu tempat kemudian kembali. Mengenai aksi yang dilakukan di tempat dimana pergi digunakan jika tidak diaphragunkan secara khusus. ③ 出かけて 来ます — Sebelum きます menggunakan Kata Kerja でかけます Bentuk て menyatakan arti untuk pergi ke suatu tempat dan kembali. Digunakan jika secara khusus tidak berkata mengenai tempat di mana pergi dan tujuan.',
    contoh: [
      'ちょっと たばこを 買って 来ます。',
      'スーパーで 牛乳を 買って 来ます。',
      '台所から コーヒーカップを 取って 来ます。',
      '郵便局へ 行って 来ます。',
      'ちょっと 出かけて 来ます。',
    ],
    artiContoh: [
      'Pergi beli rokok sebentar.',
      'Pergi membeli susu di pasar swalayan.',
      'Pergi mengambil gelas kopi dari dapur.',
      'Pergi ke kantor pos.',
      'Pergi sebentar.',
    ],
  },
  {
    no: 4,
    pola: 'Kata Kerja Bentuk て くれませんか',
    penjelasan:
      'Ungkapan permintaan yang lebih halus daripada ～て ください, namun kurang halus daripada ～て いただけませんか (Pel.26) atau ～て くだ吟ませんか (Pel.46). Ungkapan yang cocok untuk dipakai kepada orang yang setara atau di bawah dari diri sendiri.',
    contoh: ['コンビニへ 行って 来ます。', '……じゃ、お弁当を 買って 来て くれませんか。'],
    artiContoh: ['Pergi ke toko 24 jam.', '……Tolong belikan saya bokal?'],
  },
]

// Catatan tata bahasa = sub-bagian "Perhatian" di buku (terpisah dari bunpou, penomoran dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: ' Kata Sifat い（～い）そうです／な［な］そうです — Perhatian',
    penjelasan:
      'Ketika menyatakan perasaan orang, Kata Sifat yang menyatakan perasaan (うれしい, かなしい, さびしい dan lain-lainnya) tidak dapat digunakan langsung. Digunakan cara ungkapan setelah membubuhkan そうです で dengan menduga dari pandangan/pengelihatan luar.',
    contoh: ['うれしそうです ね。', '……ええ、実は きのう 結婚を 申し込んだんです。'],
    artiContoh: ['Kelihatan senang, ya.', '……Ya, soalnya kemarin saya melamar.'],
  },
]