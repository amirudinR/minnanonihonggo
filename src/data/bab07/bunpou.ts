import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda(alat/sarana) で Kata Kerja',
    penjelasan: 'Menunjukkan sarana dan cara.',
    contoh: ['わたしは パソコンで 映画を 見ます。'],
    artiContoh: ['Saya menonton film dengan komputer.']
  },
  {
    no: 2,
    pola: 'Kata Benda1(orang) に Kata Benda2 を あげます',
    penjelasan: 'Menunjukkan arti yang memberi barang atau informasi.',
    contoh: ['わたしは 木村さんに 花を あげます。'],
    artiContoh: ['Saya memberikan bunga kepada Sdr. Kimura.']
  },
  {
    no: 3,
    pola: 'Kata Benda1(orang) に Kata Benda2 を もらいます',
    penjelasan: 'Menunjukkan arti yang menerima barang atau informasi.',
    contoh: ['わたしは カリナさんに チョコレートを もらいました。'],
    artiContoh: ['Saya mendapatkan cokelat dari Sdr. Karina.']
  },
  {
    no: 4,
    pola: 'もう Kata Kerja ました',
    penjelasan: 'Mempunyai arti sudah dan perbuatan telah diselesaikan saat ini.',
    contoh: ['わたしは もう メールを 送りました。'],
    artiContoh: ['Saya telah mengirim e-mail.']
  }
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda(alat/sarana) で Kata Kerja',
    penjelasan: 'Di bagian ini mempelajari partikel で yang menunjukkan sarana dan cara.',
    contoh: ['はしで 食べます。', '日本語で レポートを 書きます。'],
    artiContoh: ['Makan dengan sumpit.', 'Menulis laporan dalam bahasa Jepang.']
  },
  {
    no: 2,
    pola: '“Kata/Kalimat” は ～語で 何ですか',
    penjelasan: 'Pertanyaan ini digunakan ketika menanyakan bagaimana cara mengatakan arti kata atau kalimat dalam bahasa lain.',
    contoh: ['「ありがとう」は 英語で 何ですか。……「Thank you」です。', '「Thank you」は 日本語で 何ですか。……「ありがとう」です。'],
    artiContoh: ['Apa bahasa Inggris dari "Arigato"? ……"Thank you".', 'Apa bahasa Jepang dari "Thank you"? ……"Arigato".']
  },
  {
    no: 3,
    pola: 'Kata Benda1(orang) に Kata Benda2 を あげます, dll',
    penjelasan: 'Kata Kerja あげます, かします, おしえます, dan lain-lainnya menunjukkan arti yang memberi barang atau informasi, dan memerlukan lawan yang diberikan barang atau informasi. Kata Benda1 (orang) tersebut dibubuhkan dengan partikel に.',
    contoh: ['木村さんに 花を あげます。', 'イーさんに 本を 貸します。', '山田さんに 英語を 教えます。'],
    artiContoh: ['Saya memberikan Sdr. Kimura bunga.', 'Saya meminjamkan buku kepada Sdr. Lee.', 'Saya mengajar bahasa Inggris kepada Sdr. Yamada.']
  },
  {
    no: 4,
    pola: 'Kata Benda1(orang) に Kata Benda2 を もらいます, dll',
    penjelasan: 'Kata Kerja もらいます, かります, ならいます, dan lain-lainnya menunjukkan arti yang menerima barang atau informasi, dan memerlukan lawan yang diberikan barang atau informasi. Kata Benda1 (orang) tersebut dibubuhkan dengan partikel に. (Partikel から juga dapat digunakan sebagai pengganti に, terutama jika lawannya adalah organisasi/perusahaan/sekolah dll).',
    contoh: ['木村さんに 花を もらいました。', 'カリナさんに CDを 借りました。', 'ワンさんに 中国語を 習います。', '銀行から お金を 借りました。'],
    artiContoh: ['Saya mendapatkan bunga dari Sdr. Kimura.', 'Saya meminjam CD dari Karina.', 'Saya belajar bahasa Tionghoa dari Sdr. Wang.', 'Saya meminjam uang dari bank.']
  },
  {
    no: 5,
    pola: 'もう Kata Kerja ました',
    penjelasan: 'もう mempunyai arti sudah dan digunakan dengan kombinasi Kata Kerja ました. Dalam hal ini, Kata Kerja ました bermaksud bahwa perbuatan telah diselesaikan saat ini. Jawaban negatifnya menggunakan まだです, bukan Kata Kerja ませんでした.',
    contoh: ['もう 荷物を 送りましたか。……はい、［もう］送りました。', '……いいえ、まだです。'],
    artiContoh: ['Apakah barang sudah dikirim? ……Ya, sudah dikirim.', '……Belum.']
  },
  {
    no: 6,
    pola: 'Menghilangkan partikel',
    penjelasan: 'Dalam kalimat percakapan, jika sudah dapat memahami arti dari hubungan sebelum dan sesudahnya maka partikel sering dihilangkan.',
    contoh: ['この［ ］スプーン、すてきですね。', 'コーヒー［ ］、もう 一杯 いかがですか。'],
    artiContoh: ['Sendok ini bagus ya.', 'Bagaimana kopi secangkir lagi?']
  }
]
