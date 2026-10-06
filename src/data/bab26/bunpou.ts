import type { Bunpou } from '@/types/bab'

// 4 文型 Bab 26. Penjelasan, contoh, dan arti contoh diambil dari PDF terjemahan
// Indonesia: "II. Terjemahan - Pola Kalimat" dan "IV. Keterangan Tata Bahasa" (hlm. cetak 10, 12-13).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '～んです',
    penjelasan:
      '～んです dipakai dalam bahasa lisan, sedangkan dalam bahasa tertulis bentuknya menjadi ～のです. ～んです dipakai seperti berikut: (1) ketika pembicara memutuskan atau meminta keterangan tentang hal yang dilihat atau didengar; (2) ketika meminta keterangan lebih lanjut tentang hal yang dilihat atau didengar oleh lawan bicara; (3) ketika meminta keterangan alasan tentang hal yang dilihat atau didengar oleh lawan bicara; (4) ketika meminta keterangan tentang keadaan. [Perhatian] Jika memakai ～んですか pada bagian yang seharusnya tidak perlu, akan memberikan kesan yang tidak nyaman, maka perlu berhati-hati.',
    contoh: [
      '（ぬれた 傘を 持っている 人を 見て）雨が 降っているんですか。',
      'どうして 遅れたんですか。',
      'どうして 選んだんですか。',
      'どう したんですか。',
    ],
    artiContoh: [
      '(Melihat orang yang memegang payung basah) Apakah sedang turun hujan?',
      'Kenapa terlambat?',
      'Kenapa dipilih?',
      'Kenapa?',
    ],
  },
  {
    no: 2,
    pola: 'Kata Kerja Bentuk て いただけませんか',
    penjelasan:
      'Ungkapan ini adalah ungkapan yang lebih sopan daripada ～て ください: Bisa perkenalkan saya guru yang baik?',
    contoh: ['いい 先生を 紹介して いただけませんか。'],
    artiContoh: ['Bisa perkenalkan saya guru yang baik?'],
  },
  {
    no: 3,
    pola: 'Kata Tanya + Kata Kerja Bentuk たら いかがですか',
    penjelasan:
      'Ini adalah ungkapan untuk meminta masukan atau petunjuk: "Sebaiknya saya…?" / "Bagaimana cara…?". Seperti jawaban untuk ⑬, dengan cara ucapan Kata Kerja Bentuk たら, dapat memberi masukan atau tawaran kepada lawan bicara.',
    contoh: [
      'どこで カメラを 買ったら いいですか。',
      '国会議事堂を 見学したいんですが、どう したら いいですか。',
    ],
    artiContoh: [
      'Sebaiknya saya membeli kamera di mana?',
      'Saya ingin mengunjungi Gedung Parlemen Nasional, bagaimana caranya?',
    ],
  },
  {
    no: 4,
    pola: 'Kata Benda (objek) は {好きです／嫌いです・上手です／下手です・あります、dll.}',
    penjelasan:
      'Pada tingkat dasar I, telah mempelajari hal tentang objek langsung yang ditunjuk oleh が yang dianggap sebagai topik (Pel. 17). Seperti ⑭, kata benda yang ditunjuk oleh が sebagai objek dari です dan lain-lainnya juga dapat dianggap sebagai topik.',
    contoh: [
      'よく カラオケに 行きますか。',
      '……いいえ、あまり 行きません。カラオケは 好きじゃないんです。',
    ],
    artiContoh: ['Sering pergi ke Karaoke?', '……Tidak, jarang pergi. Saya tidak suka Karaoke.'],
  },
]

// Catatan tata bahasa = catatan tambahan di luar 文型 (penomoran mulai dari 1).
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: '～べん（～弁）',
    penjelasan:
      'Akhiran ～べん menyatakan asal daerah atau dialek. Contoh: 大阪弁 (oosaka-ben) = dialek Osaka.',
    contoh: ['渡辺さんは 時々 大阪弁を 使いますね。大阪に 住んで いたんですか。'],
    artiContoh: [
      'Sdr. Watanabe kadang-kadang menggunakan dialek Osaka, ya? Apakah Anda pernah tinggal di Osaka?',
    ],
  },
  {
    no: 2,
    pola: '～会社／～様（敬称）',
    penjelasan:
      '～会社 (perusahaan ～) dipakai untuk nama perusahaan, misalnya ガス会社 (perusahaan gas). ～様 adalah kata hormat (敬称) yang ditambahkan pada nama orang; dasarnya ～さん.',
    contoh: [
      'ガス会社に 連絡したら、すぐ 来て くれますよ。',
      '国会議事堂を 見学したいんです。',
    ],
    artiContoh: [
      'Kalau menghubungi perusahaan gas, petugas akan segera datang.',
      'Saya ingin mengunjungi Gedung Parlemen.',
    ],
  },
  {
    no: 3,
    pola: 'どこでも／だれでも／なんでも・こんな ～／そんな ～／あんな ～',
    penjelasan:
      'Kosakata Bab 26 memuat ～まとめて（どこでも／だれでも／なんでも）dan kata tunjuk（こんな／そんな／あんな）yang ditandai bintang, yaitu kata baru. Semuanya dapat digabungkan dengan ～んです.',
    contoh: ['だれでも 招待して ください。', 'この 燃える ごみは 月・水・金の 朝 出して ください。'],
    artiContoh: ['Undang siapa saja.', 'Sampah organik ini dikeluarkan pada pagi hari Senin, Rabu, dan Jumat.'],
  },
]