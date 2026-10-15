/**
 * Partikel akhir kalimat — か / ね / よ / って / かしら / かな / dll.
 * Membentuk tanya, penegas, dan nuansa percakapan.
 *
 * Menambah partikel: tambahkan objek `Partikel` ke array di bawah.
 * INVARIAN (dijaga oleh `npm run validate:partikel`):
 *  - setiap `bab` WAJIB punya entri di `perBab`;
 *  - setiap `perBab[].bab` WAJIB ada di `bab[]`;
 *  - `bab[]` & `perBab[]` WAJIB terurut menaik.
 */

import type { Partikel } from '../tipe'

export const akhir: Partikel[] = [
  {
    bentuk: 'か',
    romaji: 'ka',
    fungsi: 'Penanda tanya / pilihan',
    penjelasan:
      'か di akhir kalimat membentuk kalimat tanya. Diletakkan di antara dua kata benda, か berarti "atau" (pilihan). Dengan kata tanya + か (mis. 何か, どこか) berarti "sesuatu/suatu tempat" yang tidak pasti.',
    contoh: [
      { jp: 'あなたは 学生ですか。', id: 'Apakah Anda pelajar?' },
      { jp: 'コーヒーか 紅茶を 飲みます。', id: 'Minum kopi atau teh.' },
      { jp: '何か 食べませんか。', id: 'Mau makan sesuatu?' },
    ],
    bab: [1, 6, 11, 13, 20, 29, 40],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 1,
        fungsi: 'Penanda tanya',
        keterangan:
          'Partikel か menyatakan perasaan ketidakpastian atau heran si pembicara. Dengan memakai か pada akhir kalimat, dapat membuat kalimat tanya (intonasi naik di akhir).',
        contoh: [{ jp: 'ミラーさんは 会社員ですか。', id: 'Apakah Sdr. Miller pegawai perusahaan?' }],
      },
      {
        bab: 6,
        fungsi: 'Mendapat informasi baru (か di akhir)',
        keterangan:
          'か menyatakan hal untuk mendapatkan informasi baru yang belum diketahui lawan bicara sebelumnya, kemudian memahaminya. Sama dengan cara penggunaan か dari そうですか. (Juga dipakai pada ～ませんか ajakan.)',
        contoh: [{ jp: '日曜日 京都へ 行きました。……京都ですか。いいですね。', id: 'Hari Minggu yang lalu pergi ke Kyoto. ……Kyoto? Bagus ya.' }],
      },
      {
        bab: 11,
        fungsi: 'Menanyakan kuantitas (いくつ／なん＋KB)',
        keterangan:
          'いくつ digunakan untuk menanyakan kuantitas benda. なん + Kata Bantu Bilangan digunakan untuk menanyakan kuantitas benda yang dibubuhkan Kata Bantu Bilangan (mis. 何人, 何時間).',
        contoh: [
          { jp: 'みかんを いくつ 買いましたか。……8つ 買いました。', id: 'Membeli berapa buah jeruk? ……Membeli delapan buah.' },
          { jp: 'この 会社に 外国人が 何人 いますか。……5人 います。', id: 'Di perusahaan ini ada berapa orang asing? ……Ada lima orang.' },
        ],
      },
      {
        bab: 13,
        fungsi: 'どこか／何か (suatu tempat / sesuatu)',
        keterangan:
          'どこか berarti suatu tempat, dan なにか berarti sesuatu. Partikel へ atau を di belakang どこか atau なにか dapat dihilangkan.',
        contoh: [
          { jp: '冬休みは どこか[へ] 行きましたか。', id: 'Pada waktu liburan musim dingin pergi ke mana?' },
          { jp: 'のどが かわきましたから、何か[を] 飲みたいです。', id: 'Karena haus, ingin minum sesuatu.' },
        ],
      },
      {
        bab: 20,
        fungsi: 'か tidak dibubuhkan (bentuk biasa)',
        keterangan:
          'Dalam kalimat tanya dengan bentuk biasa, pada umumnya partikel か tidak dibubuhkan pada akhir kalimat, tetapi diungkapkan dengan nada yang naik seperti の(ん) atau の だ(ん).',
        contoh: [{ jp: 'コーヒーを 飲む？(↗)……うん、飲む。(↘)', id: 'Mau minum kopi? ……Ya, mau minum.' }],
      },
      {
        bab: 29,
        fungsi: 'どこかで／どこかに (か + で／に)',
        keterangan:
          'Kata Bantu へ dan を di belakang どこか dan なにか dapat dihilangkan, sedangkan Kata Bantu で dan に di belakang どこかで dan どこかに TIDAK dapat dihilangkan.',
        contoh: [
          { jp: 'どこかで 財布を なくして しまいました。', id: 'Entah di mana (saya) kehilangan dompet.' },
          { jp: 'どこかに 電話が ありますか。', id: 'Apakah ada telepon di suatu tempat?' },
        ],
      },
      {
        bab: 40,
        fungsi: 'Kalimat tanya di dalam kalimat (～か、～／～かどうか、～)',
        keterangan:
          'か dipakai bila Kalimat Tanya yang mengandung Kata Tanya dimasukkan ke dalam kalimat lain (mis. 何時に 到着するか、調べて ください). Kalau Kalimat Tanya tidak mengandung Kata Tanya, dipakai ～かどうか (mis. 出席するかどうか、返事を ください).',
        contoh: [
          { jp: 'JL107便は 何時に 到着するか、調べて ください。', id: 'Tolong dicek, pukul berapa kedatangan penerbangan nomor JL107.' },
          { jp: '明日は 晴れるか わかりません。', id: '(Saya) tidak tahu apakah besok cerah.' },
        ],
      },
    ],
  },
  {
    bentuk: 'ね / よ',
    romaji: 'ne / yo',
    fungsi: 'Penegas akhir kalimat',
    penjelasan:
      'ね meminta persetujuan/simpati lawan bicara ("ya kan?"). よ memberi penegasan atau menyampaikan info baru ("lho/ya"). Keduanya tidak mengubah fakta kalimat, hanya nuansa percakapan.',
    contoh: [
      { jp: '今日は 寒いですね。', id: 'Hari ini dingin ya.' },
      { jp: 'あの 店は おいしいですよ。', id: 'Toko itu enak lho.' },
    ],
    bab: [3, 4, 5],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 3,
        fungsi: 'Penegas akhir kalimat (ね)',
        keterangan:
          'Partikel ね dibubuhkan pada akhir kalimat untuk mengharapkan persetujuan atau simpati lawan bicara. Tidak mengubah fakta kalimat, hanya nuansa percakapan.',
        contoh: [{ jp: '今日は 寒いですね。', id: 'Hari ini dingin ya.' }],
      },
      {
        bab: 4,
        fungsi: 'Penegas (ね di akhir)',
        keterangan:
          'Partikel ね dibubuhkan pada akhir kalimat, digunakan ketika mengharapkan persetujuan dari lawan bicara, menegaskan, atau menekankan.',
        contoh: [{ jp: '毎日 10時まで 勉強します。……大変ですね。', id: 'Setiap hari belajar sampai pukul sepuluh. ……O, berat ya.' }],
      },
      {
        bab: 5,
        fungsi: 'よ = memberi tahu hal baru',
        keterangan:
          'Partikel よ dibubuhkan pada akhir kalimat dan digunakan untuk memberitahukan suatu hal yang belum diketahui oleh lawan bicara, atau menyampaikan tanggapan dan pendapat si pembicara kepada lawan bicaranya.',
        contoh: [
          { jp: '次の「普通」ですよ。', id: 'Yang "Biasa" berikutnya.' },
          { jp: '北海道に 馬が たくさん いますよ。', id: 'Di Hokkaido ada banyak kuda.' },
        ],
      },
    ],
  },
  {
    bentuk: 'って',
    romaji: 'tte',
    fungsi: 'Topik/kutipan informal',
    penjelasan:
      'って adalah bentuk santai dari と (kutipan) atau は (topik) dalam percakapan. Sering muncul di bahasa lisan: 「〜って 何？」(〜 itu apa?); 「〜さんって だれ？」',
    contoh: [
      { jp: '田中さんって どんな 人ですか。', id: 'Orang yang bernama Tanaka itu orang seperti apa?' },
      { jp: 'これって 何ですか。', id: 'Ini apa ya?' },
    ],
    bab: [21],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 21,
        fungsi: 'Topik/kutipan informal (bentuk santai)',
        keterangan:
          'って adalah bentuk santai dari と (kutipan) atau は (topik) dalam percakapan: 「〜って 何？」(〜 itu apa?); 「〜さんって だれ？」.',
        contoh: [
          { jp: '田中さんって どんな 人ですか。', id: 'Orang yang bernama Tanaka itu orang seperti apa?' },
          { jp: 'これって 何ですか。', id: 'Ini apa ya?' },
        ],
      },
    ],
  },
  {
    bentuk: 'かしら / かな',
    romaji: 'kashira / kana',
    fungsi: 'Mungkin / ya kan (ragu)',
    penjelasan:
      'かしら (perempuan) dan かな (netral/laki-laki) menyatakan keraguan atau pertanyaan pada diri sendiri: "kira-kira…, ya?". Sering di akhir kalimat santai.',
    contoh: [
      { jp: '明日は 晴れるかな。', id: 'Besok cerah nggak ya.' },
    ],
    bab: [22],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 22,
        fungsi: 'Mungkin / ya kan (ragu)',
        keterangan:
          'かしら (perempuan) dan かな (netral/laki-laki) menyatakan keraguan atau pertanyaan pada diri sendiri: "kira-kira…, ya?", sering di akhir kalimat santai.',
        contoh: [{ jp: '明日は 晴れるかな。', id: 'Besok cerah nggak ya.' }],
      },
    ],
  },
  {
    bentuk: 'のに (akhir kalimat)',
    romaji: 'noni',
    fungsi: 'Padahal (mengakhiri keluhan)',
    penjelasan:
      'のに di akhir kalimat meninggalkan kesan menyesal/kecewa yang tak diucapkan: "padahal…". Berbeda dengan のに penghubung yang menyambung dua klausa.',
    contoh: [
      { jp: 'せっかく 来たのに。', id: 'Padahal sudah susah-susah datang (tapi…).' },
    ],
    bab: [42],
    kelompok: 'akhir',
    perBab: [
      {
        bab: 42,
        fungsi: 'Padahal (mengakhiri keluhan)',
        keterangan:
          'のに di akhir kalimat meninggalkan kesan menyesal/kecewa yang tak diucapkan: "padahal…". Berbeda dengan のに penghubung yang menyambung dua klausa.',
        contoh: [{ jp: 'せっかく 来たのに。', id: 'Padahal sudah susah-susah datang (tapi…).' }],
      },
    ],
  },
]
