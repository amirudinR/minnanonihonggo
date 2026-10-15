/**
 * Partikel tempat & arah — に / へ / で.
 * Menandai tempat, arah, sarana, dan tujuan.
 *
 * Menambah partikel: tambahkan objek `Partikel` ke array di bawah.
 * INVARIAN (dijaga oleh `npm run validate:partikel`):
 *  - setiap `bab` WAJIB punya entri di `perBab`;
 *  - setiap `perBab[].bab` WAJIB ada di `bab[]`;
 *  - `bab[]` & `perBab[]` WAJIB terurut menaik.
 */

import type { Partikel } from '../tipe'

export const tempatArah: Partikel[] = [
  {
    bentuk: 'に',
    romaji: 'ni',
    fungsi: 'Waktu / tempat ada / tujuan / penerima',
    penjelasan:
      'に punya banyak fungsi: (1) titik waktu (jam/tanggal: 6時に), (2) tempat keberadaan (あります／います: 駅に), (3) arah tujuan perpindahan (行きます: 日本に), (4) sasaran penerima (あげます／もらいます), (5) tujuan perpindahan gerak (mis. 買い物に行きます).',
    contoh: [
      { jp: '毎朝 6時に 起きます。', id: 'Setiap pagi bangun jam 6.' },
      { jp: '駅に います。', id: 'Berada di stasiun.' },
      { jp: '日本に 行きます。', id: 'Pergi ke Jepang.' },
      { jp: 'ミラーさんに 本を あげました。', id: 'Memberi buku kepada Sdr. Miller.' },
    ],
    bab: [4, 7, 10, 13, 15, 19, 21, 24, 48],
    kelompok: 'tempat-arah',
    perBab: [
      {
        bab: 4,
        fungsi: 'Titik waktu',
        keterangan:
          'Setelah Kata Benda yang menunjukkan waktu, dibubuhkan partikel に untuk menyatakan waktu ketika melakukan sesuatu. Kata Benda waktu seperti きょう・あした・きのう・いま・まいにち tidak dibubuhkan に.',
        contoh: [{ jp: '毎朝 6時に 起きます。', id: 'Setiap pagi bangun jam 6.' }],
      },
      {
        bab: 7,
        fungsi: 'Penerima / pemberi (に)',
        keterangan:
          'Kata Kerja あげます, かします, おしえます menunjukkan memberi barang/informasi dan memerlukan lawan yang diberi → Kata Benda (orang) dibubuhkan partikel に. Sebaliknya もらいます, かります, ならいます menerima → orang yang memberikan juga dibubuhkan に. [Perhatian] Untuk pola ini から dapat menggantikan に, terutama bila lawannya organisasi (mis. 銀行から お金を 借りました).',
        contoh: [
          { jp: '[わたしは] 木村さんに 花を あげました。', id: 'Saya memberikan Sdr. Kimura bunga.' },
          { jp: '[わたしは] 山田さんに 花を もらいました。', id: 'Saya mendapatkan bunga dari Sdr. Yamada.' },
        ],
      },
      {
        bab: 10,
        fungsi: 'Tempat keberadaan',
        keterangan:
          'Untuk menyatakan keberadaan benda atau orang di suatu tempat, tempatnya dinyatakan dengan partikel に (mis. わたしの 部屋に 机が あります / 事務所に ミラーさんが います). Pada pola 「Kata Benda は tempat に あります／います」 Kata Benda di depan は adalah topik.',
        contoh: [
          { jp: 'わたしの 部屋に 机が あります。', id: 'Di kamar saya ada meja.' },
          { jp: '事務所に ミラーさんが います。', id: 'Di kantor ada Sdr. Miller.' },
        ],
      },
      {
        bab: 13,
        fungsi: 'Tujuan aksi (へ に)',
        keterangan:
          'Objek untuk aksi dari いきます, きます, かえります ditunjuk dengan に (mis. 神戸へ 買い物に 行きます). Untuk ～ます (かいものします, べんきょうします) dipakai bentuk Kata Benda に いきます／きます／かえります.',
        contoh: [
          { jp: '神戸へ 買い物に 行きます。', id: 'Pergi ke Kobe untuk belanja.' },
          { jp: '日本へ 美術の 勉強に 来ました。', id: 'Datang ke Jepang untuk belajar seni.' },
        ],
      },
      {
        bab: 15,
        fungsi: 'Tujuan aksi / tempat hasil aksi (に)',
        keterangan:
          'Partikel に digunakan bersama Kata Kerja seperti はいります, すわります, のります, のぼります, つきます, kemudian menunjukkan hasil melakukan aksi dan tempat subjek berada. に juga menunjukkan tempat Kata Benda₂ berada akibat melakukan aksi (ここに 車を 止めて ください).',
        contoh: [
          { jp: 'ここに 入っては いけません。', id: 'Tidak boleh masuk ke sini.' },
          { jp: 'ここに 住所を 書いて ください。', id: 'Tuliskan alamat di sini.' },
        ],
      },
      {
        bab: 19,
        fungsi: 'Perubahan kondisi (に なります)',
        keterangan:
          'なります menunjuk perubahan kondisi. Untuk Kata Sifat い → ～く、Kata Sifat な → ～に、Kata Benda dibubuhkan に (寒く なります／元気に なります／25歳に なります).',
        contoh: [
          { jp: '寒い → 寒く なります', id: 'menjadi dingin' },
          { jp: '元気[な] → 元気に なります', id: 'menjadi sehat' },
        ],
      },
      {
        bab: 21,
        fungsi: 'Lawan bicara yang mendengarkan',
        keterangan:
          'Lawan bicara yang mendengarkan ungkapan pembicara ditunjukan dengan partikel に (mis. 父に 留学したいと 言いました).',
        contoh: [{ jp: '父に 留学したいと 言いました。', id: 'Saya berkata pada ayah bahwa ingin belajar di luar negeri.' }],
      },
      {
        bab: 24,
        fungsi: 'Penerima pada ～て あげます／もらいます／くれます',
        keterangan:
          'Pada Kata Kerja Bentuk て あげます／もらいます, orang yang menerima/memberi kebaikan ditandai partikel に (mis. 木村さんに 本を 貸して あげました). Bila penerimanya わたし, biasanya dihilangkan.',
        contoh: [
          { jp: 'わたしは 木村さんに 本を 貸して あげました。', id: 'Saya meminjamkan Sdr. Kimura buku.' },
          { jp: 'わたしは 山田さんに 図書館の 電話番号を 教えて もらいました。', id: 'Saya diberi nomor telepon perpustakaan oleh Sdr. Yamada.' },
        ],
      },
      {
        bab: 48,
        fungsi: 'Pelaku pada kalimat kausatif (KK Transitif)',
        keterangan:
          'Dalam Kalimat Kata Kerja Kausatif, terdapat dua jenis pelaku: ditunjuk dengan を dan dengan に. Jika Kata Kerja Transitif, pelaku ditunjuk dengan に (mis. 娘に 朝ごはんの 準備を 手伝わせます). Kalau Kata Kerja Intransitif, pelaku ditunjuk dengan を.',
        contoh: [
          { jp: '朝は 忙しいですから、娘に 朝ごはんの 準備を 手伝わせます。', id: 'Karena pagi hari sibuk, saya menyuruh anak perempuan saya membantu mempersiapkan sarapan.' },
        ],
      },
    ],
  },
  {
    bentuk: 'へ',
    romaji: 'e',
    fungsi: 'Arah tujuan perpindahan',
    penjelasan:
      'へ menandai arah tujuan perpindahan (行きます／来ます／帰ります). Dibaca "e". Untuk arti "ke", へ sering bertukar peran dengan に; に lebih menekankan titik tujuan, へ lebih menekankan arah.',
    contoh: [
      { jp: '日本へ 行きます。', id: 'Pergi ke Jepang.' },
      { jp: '家へ 帰ります。', id: 'Pulang ke rumah.' },
    ],
    bab: [5, 13],
    kelompok: 'tempat-arah',
    perBab: [
      {
        bab: 5,
        fungsi: 'Arah tujuan perpindahan',
        keterangan:
          'Jika menunjukkan pindah, arah pindahnya dinyatakan dengan membubuhkan partikel へ. [Perhatian] Partikel へ diucapkan e.',
        contoh: [
          { jp: '京都へ 行きます。', id: 'Pergi ke Kyoto.' },
          { jp: '日本へ 来ました。', id: 'Datang ke Jepang.' },
          { jp: 'うちへ 帰ります。', id: 'Pulang ke rumah.' },
        ],
      },
      {
        bab: 13,
        fungsi: 'Arah tujuan (dengan に)',
        keterangan:
          'Objek untuk aksi dari いきます, きます, かえります ditunjuk dengan に. Untuk arah/tujuan, へ dan に dipakai berdampingan (神戸へ インド料理を 食べに 行きます).',
        contoh: [
          { jp: '神戸へ インド料理を 食べに 行きます。', id: 'Pergi makan masakan India ke Kobe.' },
          { jp: '神戸へ 買い物に 行きます。', id: 'Pergi ke Kobe untuk belanja.' },
        ],
      },
    ],
  },
  {
    bentuk: 'で',
    romaji: 'de',
    fungsi: 'Tempat tindakan / alat / sebab',
    penjelasan:
      'で menandai (1) tempat terjadinya tindakan (bukan keberadaan: 図書館で 勉強します), (2) alat/cara yang dipakai (電車で 行きます), (3) bahan (木で 作ります), (4) sebab/alasan (mis. かぜで 休みました).',
    contoh: [
      { jp: '図書館で 勉強します。', id: 'Belajar di perpustakaan.' },
      { jp: '電車で 行きます。', id: 'Pergi dengan kereta.' },
      { jp: 'かぜで 学校を 休みました。', id: 'Tidak masuk sekolah karena masuk angin.' },
    ],
    bab: [5, 6, 7, 18, 21],
    kelompok: 'tempat-arah',
    perBab: [
      {
        bab: 5,
        fungsi: 'Sarana / cara (kendaraan)',
        keterangan:
          'Partikel で menunjukkan sarana dan cara. Yang diikuti Kata Benda yang menunjukkan kendaraan adalah menunjukkan sarana transportasi. Jika pergi dengan jalan kaki digunakan あるいて, tetapi tidak dibubuhkan partikel で.',
        contoh: [
          { jp: '電車で 行きます。', id: 'Pergi dengan kereta rel listrik.' },
          { jp: 'タクシーで 来ました。', id: 'Datang dengan taksi.' },
        ],
      },
      {
        bab: 6,
        fungsi: 'Tempat melakukan aksi',
        keterangan:
          'Partikel で disertai Kata Benda yang menunjukkan tempat, kemudian menunjukkan tempat melakukan aksi.',
        contoh: [{ jp: '駅で 新聞を 買います。', id: 'Membeli surat kabar di stasiun.' }],
      },
      {
        bab: 7,
        fungsi: 'Alat / sarana / bahasa',
        keterangan:
          'Pada bagian ini mempelajari partikel で yang menunjukkan sarana dan cara (mis. alat dan bahasa yang dipakai untuk melakukan sesuatu).',
        contoh: [
          { jp: 'はしで 食べます。', id: 'Makan dengan sumpit.' },
          { jp: '日本語で レポートを 書きます。', id: 'Menulis laporan dalam bahasa Jepang.' },
        ],
      },
      {
        bab: 18,
        fungsi: 'Menjadi topik (KB で → では)',
        keterangan:
          'Kata Benda yang dibubuhkan で dijadikan topik, maka Kata Benda berbentuk Kata Benda では (mis. 日本では なかなか 馬を 見る ことが できません).',
        contoh: [{ jp: '日本では なかなか 馬を 見る ことが できません。', id: 'Di Jepang tidak mudah untuk melihat kuda.' }],
      },
      {
        bab: 21,
        fungsi: 'Tempat berlangsungnya adegan',
        keterangan: 'Sesuatu adegan yang dilakukan ditunjukan dengan partikel で (mis. 会議で 何か 意見を 言いましたか).',
        contoh: [{ jp: '会議で 何か 意見を 言いましたか。', id: 'Di dalam rapat, apakah mengutarakan suatu pendapat?' }],
      },
    ],
  },
]
