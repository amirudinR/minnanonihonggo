import type { Bunpou } from '@/types/bab'

// 3 pola dari 文型 (第34課). Penjelasan dan terjemahan contoh diambil dari
// PDF Indonesia "Terjemahan > Pola Kalimat".
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'わたしが（〜と／〜とおりに）、〜てください',
    penjelasan:
      'Menyatakan bahwa melakukan Kata Kerja, dengan keadaan atau cara yang sama dengan Kata Kerja lain. Bentuk とおり に dipakai setelah Kata Kerja (bentuk だ) maupun setelah Kata Benda + の.',
    contoh: ['わたしが 今から 言う とおりに、書いて ください。'],
    artiContoh: ['Saya menulis sebagaimana yang telah dikatakan oleh guru.'],
  },
  {
    no: 2,
    pola: '〜た あとで、〜ます',
    penjelasan:
      'Menyatakan bahwa Kata Kerja terjadi setelah Kata Kerja lain, atau setelah suatu hal (Kata Benda).',
    contoh: ['ごはんを 食べた あとで、歯を 磨きます。'],
    artiContoh: ['Setelah makan, (saya) menggosok gigi.'],
  },
  {
    no: 3,
    pola: '〜は 〜を 〜ないで 飲みます／食べます',
    penjelasan:
      'Menyatakan bahwa benda atau tindakan yang disebut tidak dipakai atau tidak dilakukan.',
    contoh: ['コーヒーは 砂糖を 入れないで 飲みます。'],
    artiContoh: ['Kopi saya minum tanpa gula.'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: '（Kata Kerja, bentuk だ ＋ どおり に）／（Kata Benda の ＋ とおり に）＋ Kata Kerja',
    penjelasan:
      '1) Kata Kerja bentuk だ + どおり に + Kata Kerja: menyatakan bahwa melakukan Kata Kerja dengan keadaan atau cara yang sama dengan Kata Kerja lain.\n' +
      '2) Kata Benda の + とおり に + Kata Kerja: menyatakan hal yang melakukan aksi tanpa terlepas dari standar yang ditunjuk oleh Kata Benda.',
    contoh: [
      'わたしが やった とおりに、やって ください。',
      '言った とおりに、話して ください。',
      '絵の とおりに、紙を 切ってください。',
      '説明書の とおりに、組み立てました。',
      'この とおりに、書いて ください。',
    ],
    artiContoh: [
      'Silakan lakukan sama seperti yang saya buat!',
      'Silakan berbicara sama seperti yang Anda ucapkan!',
      'Silakan mengunting kertas sesuai dengan garis!',
      '(Saya) memasang sesuai dengan petunjuk.',
      'Silakan tulis sama seperti ini!',
    ],
  },
  {
    no: 2,
    pola: '（Kata Kerja, bentuk だ ＋ あと で）／（Kata Benda の ＋ あと で）＋ Kata Kerja',
    penjelasan:
      'Menyatakan bahwa Kata Kerja terjadi setelah Kata Kerja lain atau setelah Kata Benda. Bentuk ini juga dapat dipakai untuk menyatakan bahwa hal yang berlaku pada masa lampau baru disadari sekarang. Bentuk ini berbeda dari とおり に karena dalam とおり に, Kata Kerja yang disebut menjadi sumber dari seluruh hubungan waktu.',
    contoh: [
      '新しいのを 買った あとで、なくした 時計が 見つかりました。',
      '仕事の あとで、飲みに 行きませんか。',
    ],
    artiContoh: [
      'Setelah membeli yang baru, ditemukan arloji yang hilang.',
      'Setelah selesai bekerja, bagaimana kalau pergi minum?',
    ],
  },
  {
    no: 3,
    pola: '（Kata Kerja, bentuk て）／（Kata Kerja, bentuk ない）＋ ないで ＋ Kata Kerja',
    penjelasan:
      '1) Kata Kerja menyatakan aksi dan keadaan yang disertai Kata Kerja lain. Misalnya dalam contoh ⑧ dan ⑨, ketika aksi たべます dilakukan, dijelaskan untuk memakai atau tidaknya kecap asin.\n' +
      '2) Dalam Kata Kerja (bentuk ない) ないで terdapat pula cara penggunaan untuk menyatakan memilih salah satunya (Kata Kerja₁) di antara aksi yang tidak dapat dilakukan secara bersamaan (Kata Kerja₁, Kata Kerja₂).',
    contoh: [
      'しょうゆを つけて 食べます。',
      'しょうゆを つけないで 食べます。',
      '日曜日は どこにも 行かないで、うちで ゆっくり 休みます。',
    ],
    artiContoh: [
      'Makan dibubuhkan kecap asin.',
      'Makan tanpa kecap asin.',
      'Hari Minggu tidak pergi ke mana-mana, tetapi beristirahat santai-santai di rumah.',
    ],
  },
]