/**
 * Partikel waktu — から / まで / までに.
 * Titik awal–akhir dan batas waktu.
 *
 * Menambah partikel: tambahkan objek `Partikel` ke array di bawah.
 * INVARIAN (dijaga oleh `npm run validate:partikel`):
 *  - setiap `bab` WAJIB punya entri di `perBab`;
 *  - setiap `perBab[].bab` WAJIB ada di `bab[]`;
 *  - `bab[]` & `perBab[]` WAJIB terurut menaik.
 */

import type { Partikel } from '../tipe'

export const waktu: Partikel[] = [
  {
    bentuk: 'から / まで',
    romaji: 'kara / made',
    fungsi: 'Dari / sampai',
    penjelasan:
      'から menandai titik awal "dari" (waktu atau tempat), まで menandai titik akhir "sampai". Sering dipakai berpasangan (9時から 5時まで 働きます). から juga bisa berarti "karena" mengawali kalimat alasan, dan "dari (bahan)" pada kalimat pasif. Bedakan まで (sampai) dengan までに (paling lambat).',
    contoh: [
      { jp: '9時から 5時まで 働きます。', id: 'Bekerja dari jam 9 sampai jam 5.' },
      { jp: '駅から 家まで 歩きました。', id: 'Berjalan dari stasiun sampai rumah.' },
      { jp: '時間が ありませんから、タクシーで 行きます。', id: 'Karena tidak ada waktu, saya pergi naik taksi.' },
    ],
    bab: [4, 5, 9, 17, 37],
    kelompok: 'waktu',
    perBab: [
      {
        bab: 4,
        fungsi: 'Titik awal & akhir (waktu)',
        keterangan:
          'から menunjukkan titik permulaan waktu/tempat, sedangkan まで menunjukkan titik akhirnya. Sering dipakai berpasangan (9時から 5時まで 働きます). Kata Benda waktu seperti きょう、あした tidak dibubuhkan に.',
        contoh: [{ jp: '9時から 5時まで 働きます。', id: 'Bekerja dari jam 9 sampai jam 5.' }],
      },
      {
        bab: 5,
        fungsi: 'Titik awal & akhir (tempat)',
        keterangan:
          'から dan まで juga menandai titik permulaan dan akhir tempat (駅から 家まで 歩きました = berjalan dari stasiun sampai rumah).',
        contoh: [{ jp: '駅から 家まで 歩きました。', id: 'Berjalan dari stasiun sampai rumah.' }],
      },
      {
        bab: 9,
        fungsi: 'から = karena (alasan)',
        keterangan:
          'Hal yang dinyatakan di depan から merupakan alasan dari kalimat yang dinyatakan di belakangnya (～から、～). Digunakan juga untuk menyatakan suatu hal dan alasan dengan memasukkan ～から (mis. menjawab どうして…ですか。……～から).',
        contoh: [
          { jp: '時間が ありませんから、新聞を 読みません。', id: 'Karena tidak ada waktu, tidak membaca surat kabar.' },
        ],
      },
      {
        bab: 17,
        fungsi: 'まで = titik akhir aksi berkelanjutan (bandingkan までに)',
        keterangan:
          'Partikel まで yang dipelajari pada Pelajaran 4 menunjukkan titik akhir aksi yang sedang berlangsung (5時まで 働きます). Perlu hati-hati sebab bentuknya mirip dengan までに (batas waktu "paling lambat").',
        contoh: [{ jp: '5時まで 働きます。', id: 'Bekerja sampai pukul lima.' }],
      },
      {
        bab: 37,
        fungsi: 'から = bahan baku (pasif)',
        keterangan:
          'Jika membuat barang, bahan baku itu dinyatakan dengan から, dan bahan dinyatakan dengan で (ビールは 麦から 造られます / 昔 日本の 家は 木で 造られました).',
        contoh: [{ jp: 'ビールは 麦から 造られます。', id: 'Bir terbuat dari gandum.' }],
      },
    ],
  },
  {
    bentuk: 'までに',
    romaji: 'made ni',
    fungsi: 'Paling lambat / sebelum (batas)',
    penjelasan:
      'まで menyatakan "sampai" berkelanjutan; までに menyatakan batas waktu "paling lambat/sebelum". Bedakan: 5時まで 働く (bekerja sampai jam 5) vs 5時までに 出す (menyerahkan paling lambat jam 5).',
    contoh: [
      { jp: '金曜日までに 返してください。', id: 'Tolong kembalikan paling lambat hari Jumat.' },
    ],
    bab: [17],
    kelompok: 'waktu',
    perBab: [
      {
        bab: 17,
        fungsi: 'Paling lambat / sebelum (batas)',
        keterangan:
          'までに menyatakan batas waktu aksi/peristiwa "paling lambat/sebelum". Bedakan: 5時まで 働く (bekerja sampai jam 5) vs 5時までに 出す (menyerahkan paling lambat jam 5).',
        contoh: [{ jp: '金曜日までに 返してください。', id: 'Tolong kembalikan paling lambat hari Jumat.' }],
      },
    ],
  },
]
