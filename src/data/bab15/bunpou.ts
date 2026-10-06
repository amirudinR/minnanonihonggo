import type { Bunpou } from '@/types/bab'

// 2 pola dari 文型 (halaman cetak 122)
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk て も いいです',
    penjelasan:
      'Ungkapan untuk meminta izin. Cara menjawab: ええ、いいですよ、どうぞ。(Boleh.) Atau すみません、ちょっと……。 (Maaf, tidak bisa.)',
    contoh: ['このカタログをもらってもいいですか。'],
    artiContoh: ['Boleh minta katalog ini?'],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk て います',
    penjelasan:
      'Menunjukkan keadaan (terutama Kata Kerja ～ています): keadaan sekarang karena suatu hasil, kebiasaan (aksi berulang), atau status seseorang.',
    contoh: ['IMCはコンピューターソフトを作っています。'],
    artiContoh: ['IMC memproduksi perangkat lunak komputer.'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk ては いけません',
    penjelasan:
      'Menunjukkan arti larangan. Ekspresi ini tidak dapat dipakai oleh bawahan terhadap atasan.',
    contoh: ['ここでたばこを吸ってはいけません。禁煙ですから。'],
    artiContoh: ['Tidak boleh merokok di sini. Sebab dilarang merokok.'],
  },
  {
    no: 2,
    pola: '[Perhatian] 知っています → 知りません',
    penjelasan:
      'Bentuk negatif dari 知っています adalah 知りません. Perlu hati-hati bahwa tidak dikatakan 知っていません.',
    contoh: ['市役所の電話番号を知っていますか。……いいえ、知りません。'],
    artiContoh: ['Apakah tahu nomor telepon kantor wali kota? ……Tidak, tidak tahu.'],
  },
  {
    no: 3,
    pola: 'Kata Bendaに Kata Kerja',
    penjelasan:
      'Partikel に dipakai bersama Kata Kerja seperti はいります、すわります、のります、つきます; に menunjukkan hasil melakukan aksi dan tempat subjek berada.',
    contoh: ['ここに入ってはいけません。', 'ここに座ってもいいですか。'],
    artiContoh: ['Tidak boleh masuk ke sini.', 'Boleh duduk di sini?'],
  },
  {
    no: 4,
    pola: 'Kata Bendaに Kata Bendaを Kata Kerja',
    penjelasan:
      'Partikel に menunjukkan tempat Kata Benda₂ berada akibat dari melakukan aksi. に dari ③ juga memiliki fungsi yang sama.',
    contoh: ['ここに車を止めてください。', 'ここに住所を書いてください。'],
    artiContoh: ['Hentikan mobil di sini.', 'Tuliskan alamat di sini.'],
  },
]
