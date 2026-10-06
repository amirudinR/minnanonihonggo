import type { Bunpou } from '@/types/bab'

// 3 pola dari 文型 (halaman cetak 138)
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja(Bentuk ない)で ください',
    penjelasan:
      'Dipakai jika meminta atau memerintah kepada lawan bicara supaya tidak melakukan sesuatu hal. Dapat menyatakan perhatian kepada lawan bicara untuk tidak perlu berbuat sesuatu hal.',
    contoh: ['ここで写真を撮らないでください。'],
    artiContoh: ['Jangan mengambil foto di sini!'],
  },
  {
    no: 2,
    pola: 'Kata Kerja(Bentuk ない)なければなりません',
    penjelasan:
      'Menunjukkan keharusan. Perlu hati-hati bahwa ini bukan kalimat negatif.',
    contoh: ['パスポートを見せなければなりません。', '薬を飲まなければなりません。'],
    artiContoh: ['Harus memperlihatkan paspor.', 'Harus minum obat.'],
  },
  {
    no: 3,
    pola: 'Kata Kerja(Bentuk ない)なくてもいいです',
    penjelasan:
      'Menunjukkan bahwa tidak perlu melakukan sesuatu hal.',
    contoh: ['レポートは出さなくてもいいです。'],
    artiContoh: ['Laporan tidak perlu dikumpulkan.'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Pentopikkan objek',
    penjelasan:
      'Jika menyatakan dengan objek langsung sebagai topik, maka partikel を dihilangkan kemudian membubuhkan partikel は, lalu diletakkan paling di depan dalam kalimat.',
    contoh: ['ここに荷物を置かないでください。→ 荷物はここに置かないでください。'],
    artiContoh: ['Jangan letakkan barang di sini. → Barangnya jangan diletakkan di sini.'],
  },
  {
    no: 2,
    pola: 'Kata Benda(waktu) までに Kata Kerja',
    penjelasan:
      'Menunjukkan batas waktu aksi atau peristiwa.',
    contoh: ['会議は5時までに終わります。', '土曜日までに本を返さなければなりません。'],
    artiContoh: ['Rapat selesai sebelum pukul lima.', 'Mengembalikan buku sampai dengan hari Sabtu.'],
  },
  {
    no: 3,
    pola: '[Perhatian] まで vs までに',
    penjelasan:
      'Partikel まで yang telah dipelajari pada Pelajaran 4 menunjukkan titik akhir aksi yang sedang berlangsung. Perlu hati-hati sebab bentuknya mirip.',
    contoh: ['5時まで働きます。'],
    artiContoh: ['Bekerja sampai pukul lima.'],
  },
]
