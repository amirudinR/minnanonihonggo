import type { Bunpou } from '@/types/bab'

// 4 pola dari 文型 (halaman cetak 6)
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda₁ は Kata Benda₂ です',
    penjelasan:
      'Kata Benda yang diikuti oleh です menjadi Predikat. です menyatakan maksud penilaian dan kepastian, juga menunjukkan sikap sopan terhadap lawan bicara. Dalam kalimat negatif atau waktu lampau, bentuknya berubah.',
    contoh: ['わたしは マイク・ミラーです。'],
    artiContoh: ['Saya Mike Miller.'],
    sub: [{ judul: 'Partikel は', isi: 'menunjukkan bahwa kata sebelumnya adalah topik kalimat. Dibaca *wa*.' }],
  },
  {
    no: 2,
    pola: 'Kata Benda₁ は Kata Benda₂ じゃ（では）ありません',
    penjelasan:
      'Bentuk negatif untuk です. Dalam percakapan sehari-hari sering digunakan. Dalam pidato resmi atau bahasa tertulis digunakan ではありません.',
    contoh: ['サントスさんは 学生じゃ ありません。'],
    artiContoh: ['Sdr. Santos bukan mahasiswa.'],
    sub: [{ judul: '[Perhatian]', isi: 'は dari では diucapkan "wa".' }],
  },
  {
    no: 3,
    pola: 'Kata Benda₁ は Kata Benda₂ ですか',
    penjelasan:
      'Dengan memakai か pada akhir kalimat maka dapat membuat kalimat tanya. Kalimat tanya biasanya menyertai intonasi naik pada akhir kalimat.',
    contoh: ['ミラーさんは 会社員ですか。'],
    artiContoh: ['Apakah Sdr. Miller pegawai perusahaan?'],
    sub: [{ judul: 'Partikel か', isi: 'menyatakan perasaan ketidakpastian atau heran si pembicara.' }],
  },
  {
    no: 4,
    pola: 'Kata Benda も',
    penjelasan:
      'digunakan apabila menyatakan predikatnya dianggap sama dengan predikat sebelumnya.',
    contoh: ['サントスさんも 会社員です。'],
    artiContoh: ['Sdr. Santos juga pegawai perusahaan.'],
  },
]

// 2 catatan dari "IV. Keterangan Tata Bahasa" PDF Indonesia (bukan pola文型)
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda₁ の Kata Benda₂',
    penjelasan:
      'Jika Kata Benda₁ di depan menerangkan Kata Benda₂ di belakangnya, maka kedua Kata Benda disambung dengan の. Pada Pelajaran 1 Kata Benda₁ menunjukkan satu kesatuan Kata Benda₂.',
    contoh: ['ミラーさんは IMC の 社員です。'],
    artiContoh: ['Sdr. Miller adalah pegawai perusahaan IMC.'],
  },
  {
    no: 2,
    pola: '～さん',
    penjelasan:
      'menunjukkan kesopanan, tidak dipakai untuk marga atau nama si pembicara sendiri. Sebagai gantinya ~ちゃん untuk anak kecil dengan rasa akrab.',
    contoh: ['あの 方は ミラーさんです。'],
    artiContoh: ['Beliau Sdr. Miller.'],
  },
]
