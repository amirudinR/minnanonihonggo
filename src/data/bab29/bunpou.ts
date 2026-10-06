import type { Bunpou } from '@/types/bab'

// 文型 第29課 (Honsatsu idx 44) = 3 pola. Penjelasan, contoh, dan arti contoh diambil dari
// PDF Indonesia, "Pelajaran 29 · IV. Keterangan Tata Bahasa" (idx 51-52).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Kerja Bentuk ています',
    penjelasan:
      'Kata Kerja Bentuk ています ini adalah cara penggunaan untuk menyatakan hal yang berlangsung atas akibat dari aksi itu. Kata Kerja yang digunakan dengan cara penggunaan ini adalah Kata Kerja yang mengalami perubahan sebelum dan sesudah terjadi aksi tersebut, seperti あきます, しまります, つまます, きえます, こわれます, われます. Dengan catatan bahwa jika menggambarkan keadaan di depan mata secara langsung, seperti ① atau ②, subjek dinyatakan dengan が. Jika subjek ditandai sebagai topik, digunakan Kata Bantu は seperti ③.',
    contoh: ['① 窓が 割れています。', '② 電気が ついています。', '③ この いずは 壊れています。'],
    artiContoh: ['Kaca jendela pecah.', 'Listrik menyala.', 'Kursi ini rusak.'],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk てしまいました／しまいました',
    penjelasan:
      '～て しまいました menyatakan bahwa aksi telah selesai. ～て います menyatakan bahwa aksi akan selesai pada suatu titik pada masa depan. Dalam ～て しまいました adakannya itu biasanya untuk menyatakan perasaan penyesalan atau kekecewaan si pembicara seperti ⑦ atau ⑧.',
    contoh: [
      '④ シュミットさんが 持って 来た ワインは みんなで 全部 飲んで しまいました。',
      '⑤ 漢字の 宿題は もう やって しまいました。',
      '⑥ 盆ごはんまでに レポートを 書いて しまいます。',
      '⑦ パスポートを なくして しまいました。',
      '⑧ パソコンが 故障して しまいました。',
    ],
    artiContoh: [
      'Anggur yang dibawa oleh sdr. Schmidt telah diminum oleh semuanya.',
      'PR mengenai huruf Kanji telah saya selesaikan.',
      'Sampai dengan makan siang, saya akan menyelesaikan menulis laporan.',
      '(Saya) Kehilangan paspor.',
      'PC rusak.',
    ],
  },
  {
    no: 3,
    pola: 'Kata Benda (Tempat) に 行きます／来ます／帰ります',
    penjelasan:
      'Pada ⑨ (Lihat Latihan C3), untuk menggantikan Kata Bantu ～ yang menunjuk arah, digunakan Kata Bantu に untuk menyatakan titik sampelnya. Sebagaimana pada keterangan itu, Kata Kerja いきます, きます, かえります dan lain-lainnya keduanya dapat digunakan untuk tempat ～ atau tempat に.',
    contoh: ['⑨ どこかで 財布を 落として しまったんです。'],
    artiContoh: ['Dompet (Saya) terjatuh di suatu tempat.'],
  },
]

// Catatan tata bahasa = sub-bagian 4-6 "Keterangan Tata Bahasa" di buku Indonesia
// (idx 52). TERPISAH dari bunpou, penomoran mulai dari 1.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'それ／その／そう',
    penjelasan:
      'Pada Pelajaran 2 telah dipelajari cara penggunaan mengenai Kata Penunjuk yang menunjuk benda yang ada di tempat itu. Di sini diperkenalkan それ, その, そう yang menunjuk benda yang muncul di dalam cerita si pembicara atau kalimat. [1) Untuk percakapan] それ pada ⑩ dan ⑪, その pada ⑫, dan そう pada ⑬ menunjuk isi yang dijelaskan oleh lawan bicara tepat sebelumnya.',
    contoh: [
      '⑩ どこかで 財布を 落として しまったんです。',
      '……それは 大変ですね。すぐ 交番に 行かないと。',
      '⑪ 来月から 大阪の 本社に 転勤なんです。',
      '……それは おめでとう ございます。',
      '⑫ あのう、途中で やめたい 場合は？',
      '……その 場合は、近くの 係員に 名前を 言って、帰ってください。',
      '⑬ うちへ 帰って、休んだ ほうが いいですよ。',
      '……ええ、そう します。',
    ],
    artiContoh: [
      'Dompet (Saya) terjatuh di suatu tempat.',
      'Susah, ya. Harus pergi ke pos polisi dengan segera.',
      'Mulai bulan depan, (saya) pindah ke kantor pusat di Osaka.',
      'Oh, saya ucapkan selamat! (Pel.31)',
      'Anu..., kalau mau berhenti setengah jalan?',
      'Untuk masalah itu, beritahukan nama (Anda) kepada staf terdekat, lalu silakan pulang. (Pel.45)',
      'Lebih baik pulang ke rumah, dan beristirahat.',
      'Ya, benar. (Pel.32)',
    ],
  },
  {
    no: 2,
    pola: 'ありました',
    penjelasan:
      'ありました menyatakan bahwa lawan bicara menemukan keberadaan tas. Tidak bermakna bahwa pernah ada tas di situ.',
    contoh: ['⑮ ［かばんに］ ありましたよ。'],
    artiContoh: ['[Tasnya] Ada.'],
  },
  {
    no: 3,
    pola: 'どこで／どこかに',
    penjelasan:
      'Kata Bantu ～ dan に di belakang どこ dapat dihilangkan, sedangkan Kata Bantu で dan に di belakang どこで dan どこかに tidak dapat dihilangkan.',
    contoh: ['⑯ どこで 財布を なくして しまいました。', '⑰ どこかに 電話が ありますか。'],
    artiContoh: ['Entah di mana (saya) kehilangan dompet.', 'Apakah ada telepon dari suatu tempat?'],
  },
]