/**
 * Partikel lanjutan — bentuk syarat, sebab-akibat, pembatas, aspek.
 * だけ / しか / ので / のに / ても / たら / ば / ところ / dll.
 *
 * Menambah partikel: tambahkan objek `Partikel` ke array di bawah.
 * INVARIAN (dijaga oleh `npm run validate:partikel`):
 *  - setiap `bab` WAJIB punya entri di `perBab`;
 *  - setiap `perBab[].bab` WAJIB ada di `bab[]`;
 *  - `bab[]` & `perBab[]` WAJIB terurut menaik.
 */

import type { Partikel } from '../tipe'

export const lanjutan: Partikel[] = [
  {
    bentuk: 'だけ',
    romaji: 'dake',
    fungsi: 'Hanya',
    penjelasan:
      'だけ membatasi jumlah — "hanya/sebanyak itu saja". Menempel pada kata bantu bilangan atau kata benda.',
    contoh: [
      { jp: 'りんごを 一つだけ 買いました。', id: 'Membeli hanya satu apel.' },
    ],
    bab: [11],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 11,
        fungsi: 'Hanya (membatasi jumlah)',
        keterangan:
          'だけ diletakkan di belakang Kata Keterangan Bilangan atau Kata Benda, yang mempunyai arti tidak ada yang lebih dari itu atau tidak ada selain itu.',
        contoh: [
          { jp: 'パワー電気に 外国人の 社員が 1人 だけ います。', id: 'Di Power Elektronik hanya ada seorang pegawai orang asing.' },
          { jp: '休みは 日曜日だけです。', id: 'Hari libur hanya hari Minggu saja.' },
        ],
      },
    ],
  },
  {
    bentuk: 'しか ～ません',
    romaji: 'shika … masen',
    fungsi: 'Hanya (dengan negatif)',
    penjelasan:
      'しか selalu berpasangan dengan bentuk negatif dan berarti "hanya" dengan kesan "tidak lebih dari". Berbeda dengan だけ yang boleh dipakai dengan positif.',
    contoh: [
      { jp: 'ローマ字しか 書けません。', id: 'Hanya bisa menulis (huruf) romaji.' },
    ],
    bab: [27],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 27,
        fungsi: 'Hanya (wajib negatif)',
        keterangan:
          'しか dibubuhkan pada Kata Benda atau Kata Keterangan Bilangan, dan selalu digunakan dengan kata bentuk negatif. Mengangkat kata yang dibubuhkan しか, dan menyangkal semua kata yang lain. Jika dibubuhkan pada Kata Benda yang dibubuhkan が atau を, maka が atau を dihilangkan.',
        contoh: [
          { jp: 'ローマ字しか 書けません。', id: 'Hanya bisa menulis huruf latin saja.' },
          { jp: 'ローマ字だけ 書けます。', id: 'Bisa menulis huruf latin saja.' },
        ],
      },
    ],
  },
  {
    bentuk: 'ながら',
    romaji: 'nagara',
    fungsi: 'Sambil (dua tindakan bersamaan)',
    penjelasan:
      'Kata Kerja (bentuk ます tanpa ます) + ながら + KK2 berarti melakukan dua hal bersamaan. Subjek kedua tindakan harus sama; tindakan utama ada di belakang.',
    contoh: [
      { jp: '音楽を 聞きながら 食事します。', id: 'Makan sambil mendengarkan musik.' },
    ],
    bab: [28],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 28,
        fungsi: 'Sambil (dua tindakan bersamaan)',
        keterangan:
          'Kata Kerja₁ (bentuk ます tanpa ます) + ながら + Kata Kerja₂ berarti melakukan dua hal bersamaan. Subjek kedua tindakan harus sama; tindakan utama ada di klausa belakang (Kata Kerja₂).',
        contoh: [{ jp: '音楽を 聞きながら 食事します。', id: 'Makan sambil mendengarkan musik.' }],
      },
    ],
  },
  {
    bentuk: 'ので',
    romaji: 'node',
    fungsi: 'Karena (sebab-akibat)',
    penjelasan:
      'ので menyatakan sebab dengan nuansa lembut/objektif: "karena…". Dipakai setelah bentuk biasa. Berbeda dengan から yang lebih tegas/subjektif.',
    contoh: [
      { jp: 'かぜを ひいたので、学校を 休みました。', id: 'Karena masuk angin, tidak masuk sekolah.' },
    ],
    bab: [39],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 39,
        fungsi: 'Karena (sebab-akibat, memperlembut)',
        keterangan:
          'Sama halnya dengan ～から (Pel.9), ～ので juga menyatakan sebab atau alasan. ので menyatakan hubungan sebab akibat, kemudian bersifat menjelaskan akibat yang dituntun oleh sebab, maka cocok untuk memperlembut ekspresi alasan meminta izin atau pengertian.',
        contoh: [{ jp: '日本語が わからないので、英語で 話して いただけませんか。', id: 'Karena tidak mengerti bahasa Jepang, tolong berbicara dalam bahasa Inggris.' }],
      },
    ],
  },
  {
    bentuk: 'のに',
    romaji: 'noni',
    fungsi: 'Walaupun (pertentangan)',
    penjelasan:
      'のに menyatakan pertentangan yang menyimpang dari harapan: "walaupun seharusnya…, ternyata …". Sering bernuansa heran/kecewa.',
    contoh: [
      { jp: '薬を 飲んだのに、まだ 熱が あります。', id: 'Walaupun sudah minum obat, masih demam.' },
    ],
    bab: [45],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 45,
        fungsi: 'Walaupun / padahal (pertentangan)',
        keterangan:
          'のに digunakan jika hal yang berbeda dengan dugaan sesungguhnya dari hal di bagian depan kalimat diletakkan di bagian belakang kalimat. Kebanyakan menjelaskan perasaan di luar dugaan atau ketidakpuasan. (Berbeda dengan が yang tidak menyatakan perasaan tsb, dan dengan ても yang paradoks secara prakiraan.)',
        contoh: [
          { jp: '約束を したのに、彼女は 来ませんでした。', id: 'Dia tidak datang padahal sudah berjanji.' },
          { jp: 'きょうは 日曜日なのに、働かなければ なりません。', id: 'Hari ini harus bekerja padahal hari Minggu.' },
        ],
      },
    ],
  },
  {
    bentuk: 'ても / でも',
    romaji: 'temo / demo',
    fungsi: 'Walaupun',
    penjelasan:
      'Kata Kerja bentuk て + も (atau kata sifat/lain + ても／でも) berarti "walaupun…/meskipun…". Contoh umum: 雨が 降っても 行きます。',
    contoh: [
      { jp: '雨が 降っても 出かけます。', id: 'Walaupun turun hujan, (saya) pergi keluar.' },
    ],
    bab: [25],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 25,
        fungsi: 'Walaupun (persyaratan asumsi paradoks)',
        keterangan:
          'Ini menunjukkan persyaratan asumsi paradoks. Dengan kalimat yang disusul bentuk ても (mis. ～ても, ～なくても, ～くても, ～でも), ditunjukkan terjadinya hal yang biasanya dapat diduga di bawah persyaratan asumsi, atau tidak terjadinya hal yang biasanya dapat diduga.',
        contoh: [
          { jp: '雨が 降っても、洗濯します。', id: 'Walaupun hujan, mencuci pakaian.' },
          { jp: '安くても、わたしは グループ旅行が 嫌いです。', id: 'Walaupun murah, saya tidak suka tur rombongan.' },
        ],
      },
    ],
  },
  {
    bentuk: 'たら / ば / なら / と',
    romaji: 'tara / ba / nara / to',
    fungsi: 'Bentuk syarat (kalau…)',
    penjelasan:
      'Empat cara menyatakan syarat/kondisi: たら (bentuk た + ら), ば (kata kerja bentuk syarat), なら (setelah KB), dan と (konsekuensi otomatis). Masing-masing punya nuansa: と = akibat otomatis/pasti; たら = setelah/lalu; ば = syarat umum; なら = "kalau soal/mengenai".',
    contoh: [
      { jp: '安ければ 買います。', id: 'Kalau murah, (saya) beli.' },
      { jp: '国へ 帰ったら、医者に なります。', id: 'Kalau sudah pulang ke kampung halaman, akan jadi dokter.' },
      { jp: '春に なると、桜が 咲きます。', id: 'Kalau (bila) musim semi tiba, sakura bermekaran.' },
    ],
    bab: [23, 25, 35],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 23,
        fungsi: 'Ketika (～とき) & akibat pasti (～と)',
        keterangan:
          'とき menunjukan waktu terjadinya keadaan/aksi dalam kalimat pokok (mis. 図書館で 本を 借りる とき、カードが 要ります). と menyatakan akibat pasti bila aksi di depannya terjadi (この ボタンを 押すと、お釣りが 出ます).',
        contoh: [
          { jp: 'この ボタンを 押すと、お釣りが 出ます。', id: 'Kalau tekan tombol ini, uang kembaliannya keluar.' },
        ],
      },
      {
        bab: 25,
        fungsi: 'Syarat asumsi (～たら、～)',
        keterangan:
          'Menyatakan persyaratan asumsi dengan membubuhkan ら pada Bentuk Biasa Lampau Kata Kerja/Kata Sifat/Kata Benda, disusul kalimat pokok. Kalimat pokok dapat memakai ekspresi keinginan, harapan, ajakan, permohonan. [Perhatian] Di belakang ～と (kalimat pokok), ekspresi keinginan/harapan/ajakan/permohonan tidak dapat dipakai.',
        contoh: [
          { jp: 'お金が あったら、旅行します。', id: 'Kalau punya uang, berwisata.' },
          { jp: '暇だったら、手伝って ください。', id: 'Kalau sedang luang, tolong bantu saya.' },
        ],
      },
      {
        bab: 35,
        fungsi: 'Syarat ば／なら',
        keterangan:
          'ば membentuk syarat (ここを 押せば、ドアが 開きます). Kata Benda なら、～ dipakai bila merespon perkataan lawan bicara lalu memberi informasi mengenai hal tersebut (温泉なら、白馬が いいですよ). Bandingkan dengan ～と yang menyatakan akibat pasti.',
        contoh: [
          { jp: 'ここを 押せば、ドアが 開きます。', id: 'Jika menekan di sini, pintunya terbuka.' },
          { jp: '温泉なら、白馬が いいですよ。', id: 'Kalau permandian air panas, Hakuba yang bagus.' },
        ],
      },
    ],
  },
  {
    bentuk: 'ばかり',
    romaji: 'bakari',
    fungsi: 'Baru saja / hanya terus',
    penjelasan:
      'Kata Kerja bentuk た + ばかり = "baru saja". Kata Benda + ばかり = "penuh dengan / hanya… terus".',
    contoh: [
      { jp: '今 帰ったばかりです。', id: 'Baru saja pulang.' },
      { jp: '肉ばかり 食べています。', id: 'Dia hanya makan daging terus.' },
    ],
    bab: [46],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 46,
        fungsi: 'Baru saja (KK Bentuk た ばかりです)',
        keterangan:
          'Pola ini menyatakan perasaan si pembicara bahwa waktu belum lama setelah dilakukan aksi atau terjadi peristiwa. Tidak terpengaruh lama/singkatnya waktu sebenarnya, dapat digunakan jika lawan bicara merasa tidak lama — inilah bedanya dengan Kata Kerja Bentuk た ところです.',
        contoh: [
          { jp: 'さっき 昼ごはんを 食べたばかりです。', id: 'Tadi baru makan siang.' },
          { jp: '木村さんは 先月 この 会社に 入ったばかりです。', id: 'Sdr. Kimura baru masuk ke perusahaan ini bulan lalu.' },
        ],
      },
    ],
  },
  {
    bentuk: 'くらい / ぐらい',
    romaji: 'kurai / gurai',
    fungsi: 'Kira-kira / sekitar',
    penjelasan:
      'くらい/ぐらい menandai perkiraan jumlah atau waktu: "sekitar/kira-kira". Juga bisa berarti "sampai (sedemikian)" untuk menekankan derajat.',
    contoh: [
      { jp: '30分ぐらい かかります。', id: 'Butuh sekitar 30 menit.' },
      { jp: '10人ぐらい 来ました。', id: 'Sekitar 10 orang datang.' },
    ],
    bab: [11],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 11,
        fungsi: 'Perkiraan jumlah (kira-kira)',
        keterangan:
          'ぐらい mengikuti Kata Keterangan Bilangan dan menunjukkan perkiraan jumlah. (Untuk menanyakan lama waktu dipakai どのくらい.)',
        contoh: [
          { jp: '学校に 先生が 30人ぐらい います。', id: 'Di sekolah ada kira-kira tiga puluh orang guru.' },
          { jp: '15分ぐらい かかります。', id: 'Memerlukan waktu kira-kira lima belas menit.' },
        ],
      },
    ],
  },
  {
    bentuk: 'しか ～ない (Perhatian)',
    romaji: 'shika ... nai',
    fungsi: 'Variasi しか dengan negatif',
    penjelasan:
      'しか selalu butuh kalimat negatif. Bila ingin makna positif "hanya", gunakan だけ (dengan positif). Jangan campur: ✗ しか あります. Perhatikan pasangannya selalu ありません/ません.',
    contoh: [
      { jp: '水しか ありません。', id: 'Cuma ada air (tidak ada yang lain).' },
      { jp: '100円しか ありません。', id: 'Hanya punya 100 yen.' },
    ],
    bab: [27],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 27,
        fungsi: 'Perhatian: しか + negatif',
        keterangan:
          'しか selalu butuh kalimat negatif. Bila ingin makna positif "hanya", gunakan だけ (dengan positif). Jangan campur: ✗ しか あります. Pasangannya selalu ありません/ません.',
        contoh: [
          { jp: '水しか ありません。', id: 'Cuma ada air (tidak ada yang lain).' },
          { jp: '100円しか ありません。', id: 'Hanya punya 100 yen.' },
        ],
      },
    ],
  },
  {
    bentuk: 'こそ',
    romaji: 'koso',
    fungsi: 'Justru / tepatnya',
    penjelasan:
      'こそ menekankan kata sebelumnya: "justru/tepatnya ini". Contoh: 今度こそ 頑張ります (kali ini pasti saya berusaha).',
    contoh: [
      { jp: 'こちらこそ お願いします。', id: 'Justru saya yang mohon bantuan Anda.' },
    ],
    bab: [26],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 26,
        fungsi: 'Justru / tepatnya',
        keterangan:
          'こそ menekankan kata sebelumnya: "justru/tepatnya ini". Contoh: 今度こそ 頑張ります (kali ini pasti saya berusaha).',
        contoh: [{ jp: 'こちらこそ お願いします。', id: 'Justru saya yang mohon bantuan Anda.' }],
      },
    ],
  },
  {
    bentuk: 'ば / たら (Penekanan)',
    romaji: 'ba / tara',
    fungsi: 'Bentuk syarat (variasi)',
    penjelasan:
      'ば membentuk syarat dari kata kerja (行く→行けば) atau kata sifat (安い→安ければ); たら memakai bentuk lampau + ら. Keduanya berarti "kalau…", dengan nuansa yang sedikit berbeda.',
    contoh: [
      { jp: '時間が あれば、映画を 見ます。', id: 'Kalau ada waktu, menonton film.' },
    ],
    bab: [35],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 35,
        fungsi: 'Bentuk syarat (variasi ば／たら)',
        keterangan:
          'ば membentuk syarat dari kata kerja (行く→行けば) atau kata sifat (安い→安ければ); たら memakai bentuk lampau + ら. Keduanya berarti "kalau…" dengan nuansa sedikit berbeda.',
        contoh: [{ jp: '時間が あれば、映画を 見ます。', id: 'Kalau ada waktu, menonton film.' }],
      },
    ],
  },
  {
    bentuk: 'ところ',
    romaji: 'tokoro',
    fungsi: 'Sedang / baru akan (aspek)',
    penjelasan:
      'ところ menyatakan fase tindakan: Kata Kerja bentuk kamus + ところ = "baru akan", bentuk て + いる + ところ = "sedang", bentuk た + ところ = "baru saja".',
    contoh: [
      { jp: '今から 出かけるところです。', id: 'Sekarang baru mau pergi keluar.' },
      { jp: '今 食べているところです。', id: 'Sekarang sedang makan.' },
    ],
    bab: [46],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 46,
        fungsi: 'Fase tindakan (sedang / baru akan / baru saja)',
        keterangan:
          'ところ menyatakan fase tindakan: 「Kata Kerja Bentuk Kamus ところです」 = baru mau ~; 「Kata Kerja Bentuk ている ところです」 = sedang ~; 「Kata Kerja Bentuk た ところです」 = baru saja ~. ～ところです dapat disambung ke berbagai pola kalimat sebagai Kalimat Nominal.',
        contoh: [
          { jp: 'いいえ、これから 食べる ところです。', id: 'Belum, baru mau makan sekarang.' },
          { jp: 'いいえ、今 調べて いる ところです。', id: 'Belum, sekarang sedang diperiksa.' },
          { jp: 'あ、たった今 帰った ところです。', id: 'Ah, baru saja pulang.' },
        ],
      },
    ],
  },
  {
    bentuk: 'ながら (Perhatian)',
    romaji: 'nagara',
    fungsi: 'Catatan ながら',
    penjelasan:
      'ながら hanya untuk dua tindakan dengan subjek yang SAMA. Tindakan utama ada di klausa belakang. Kata Kerja dibentuk dari bentuk ます tanpa ます (食べます→食べながら).',
    contoh: [
      { jp: '音楽を 聞きながら 宿題を します。', id: 'Mengerjakan PR sambil mendengarkan musik.' },
    ],
    bab: [28],
    kelompok: 'lanjutan',
    perBab: [
      {
        bab: 28,
        fungsi: 'Catatan ながら',
        keterangan:
          'ながら hanya untuk dua tindakan dengan subjek yang SAMA. Tindakan utama ada di klausa belakang. Kata Kerja dibentuk dari bentuk ます tanpa ます (食べます→食べながら).',
        contoh: [{ jp: '音楽を 聞きながら 宿題を します。', id: 'Mengerjakan PR sambil mendengarkan musik.' }],
      },
    ],
  },
]
