import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '～と 思います',
    penjelasan:
      'Menyatakan dugaan atau pendapat — "Saya kira……". Isi pikiran ditunjukkan dengan memakai partikel と. Jika menyatakan pendapat tentang sesuatu, isi ekspresi ～について どう おもいますか, dan tidak membubuhkan と di belakang どう.',
    contoh: ['あした 雨が 降ると 思います。', '仕事と 家族と どちらが 大切ですか。……どちらも 大切だと 思います。', '日本に ついて どう 思いますか。……物価が 高いと 思います。'],
    artiContoh: ['Saya kira besok hujan turun.', 'Yang mana lebih penting, tugas atau keluarga? ……Saya kira dua-duanya penting.', 'Mengenai Jepang, menurut Anda bagaimana? ……Saya kira harga barangnya mahal.'],
  },
  {
    no: 2,
    pola: '～と 言いました',
    penjelasan:
      'Mengatakan bahwa…… Isi ucapan ditunjukkan dengan と. Rupanya ada dua cara: mengutip langsung (seperti yang diucapkan tanpa diubah), dan mengungkapkan ringkasan yang disingkat oleh pengutip dengan bentuk biasa. Bagian kutipan tidak dipengaruhi waktu kalimat.',
    contoh: ['首相は 来月 アメリカへ 行くと 言いました。', 'ミラーさんは 来週 東京へ 出張すると 言いました。', '父に 留学したいと 言いました。'],
    artiContoh: ['Perdana menteri mengatakan bahwa bulan depan pergi ke Amerika.', 'Sdr. Miller mengatakan bahwa minggu depan dinas ke Tokyo.', 'Saya berkata kepada ayah bahwa ingin belajar di luar negeri.'],
  },
]

// "IV. Keterangan Tata Bahasa" (PDF Indonesia idx 154-155). Penomoran mulai dari 1.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Bentuk Biasa と 思います',
    penjelasan:
      'Isi pikiran dan keputusan ditunjukkan memakai partikel と. Untuk pola kalimat ini terdapat penggunaan sebagai berikut di bawah ini:\n1) Menyatakan dugaan.\n2) Menyatakan pendapat. Jika menyatakan pendapat tentang sesuatu, memakai ekspresi ～に ついて どう おもいますか, dan tidak membubuhkan と di belakang どう.\nUntuk menyatakan setuju atau tidak setuju terhadap pendapat orang lain sebagai berikut:',
    contoh: ['あした 雨が 降ると 思います。', 'テレサちゃんは もう 寝たと 思います。', 'ミラーさんは この ニュースを 知っていますか。……いいえ、知らないと 思います。', '日本は 物価が 高いと 思います。', '新しい 空港に ついて どう 思いますか。……きれいですが、ちょっと 交通が 不便だと 思います。', 'ケータイは 便利ですね。……わたしも そう 思います。'],
    artiContoh: ['Saya kira besok hujan turun.', 'Saya kira Teresa sudah tidur.', 'Apakah Sdr. Miller tahu berita ini? ……Tidak, saya kira dia tidak tahu.', 'Saya pikir Jepang harga barangnya mahal.', 'Mengenai bandara baru, menurut Anda bagaimana? ……Bersih, tetapi lalu lintasnya kurang praktis.', 'HP itu praktis ya. ……Saya rasa begitu juga.'],
  },
  {
    no: 2,
    pola: '"Kalimat" Bentuk Biasa と 言います',
    penjelasan:
      'Isi ucapan ditunjukkan dengan と. Caranya ada dua.\n1) Jika mengutip langsung, mengatakan kata yang dikutip seperti yang diucapkan tanpa diubah. Untuk menulis, kata tersebut dimasukkan ke dalam kurung 「　」tanpa diubah.\n2) Jika mengungkapkan isi rangkuman yang disingkat oleh pengutip, sebelum と dipakai bentuk biasa. Bagian kutipan tidak dipengaruhi waktu kalimat.\nLawan bicara yang mendengarkan ungkapan pembicara ditunjukkan dengan partikel に.',
    contoh: ['寝る まえに、「お休みなさい」と 言いました。', 'ミラーさんは 「来週 東京へ 出張します」と 言いました。', 'ミラーさんは 来週 東京へ 出張すると 言いました。', '父に 留学したいと 言いました。'],
    artiContoh: ['Sebelum tidur mengucapkan "Selamat tidur".', 'Sdr. Miller berkata "Minggu depan dinas ke Tokyo".', 'Sdr. Miller mengatakan bahwa minggu depan dinas ke Tokyo.', 'Saya berkata kepada ayah bahwa ingin belajar di luar negeri.'],
  },
  {
    no: 3,
    pola: 'Kata Kerja / Kata Sifat / Kata BendaのBentuk Biasa でしょう？',
    penjelasan:
      'Ini digunakan pada waktu bertanya dengan tujuan mendapatkan persetujuan dari lawan bicara atau menegaskan. でしょう diucapkan dengan nada yang naik. Di depan でしょう dipakai bentuk biasa, tetapi untuk Kata Sifat な dan Kata Benda dilanjutkan dengan bentuk だ dari です.',
    contoh: ['あした パーティーに 行くでしょう？……ええ、行きます。', '北海道は 寒かったでしょう？……いいえ、そんなに 寒くなかったです。'],
    artiContoh: ['Besok pergi ke pesta, bukan? ……Ya, pergi.', 'Hokkaido dingin, bukan? ……Tidak, tidak begitu dingin.'],
  },
  {
    no: 4,
    pola: 'Kata Benda (tempat)で Kata Benda が あります',
    penjelasan:
      'Jika Kata Benda, menyatakan acara atau peristiwa seperti pesta, konser, perayaan, kejadian, bencana dan sebagainya, maka あります digunakan dalam maksud diadakan atau terjadi.',
    contoh: ['東京で 日本と ブラジルの サッカーの 試合が あります。'],
    artiContoh: ['Di Tokyo diadakan pertandingan sepak bola antara Jepang dan Brasil.'],
  },
  {
    no: 5,
    pola: 'Kata Benda (adegan)で',
    penjelasan: 'Sesuatu adegan yang dilakukan ditunjukkan dengan partikel で.',
    contoh: ['会議で 何か 意見を 言いましたか。'],
    artiContoh: ['Di dalam rapat, apakah mengutarakan suatu pendapat?'],
  },
  {
    no: 6,
    pola: 'Kata Benda でも Kata Kerja',
    penjelasan:
      'Jika menawarkan atau mengusulkan sesuatu, atau menyatakan keinginan dipakai partikel でも untuk untuk menyebutkan satu dari beberapa contoh yang ada.',
    contoh: ['ちょっと ビールでも 飲みませんか。'],
    artiContoh: ['Bagaimana kalau minum bir, atau…?'],
  },
  {
    no: 7,
    pola: 'Kata Kerja (Bentuk ない)ないと……',
    penjelasan:
      'Ini adalah bentuk yang disingkat dari Kata Kerja (Bentukない)ないと いけません (Pel.17). Kata Kerja (Bentukない)ないと mempunyai arti yang hampir sama dengan arti jangan; sama dengan Kata Kerja (Bentukない)なければ なりません yang telah dipelajari pada Pelajaran 17.',
    contoh: ['もう 帰らないと……。'],
    artiContoh: ['Harus pulang…'],
  },
]
