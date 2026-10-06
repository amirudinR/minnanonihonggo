import type { Bunpou } from '@/types/bab'

// 4 pola dari 文型 (halaman cetak 46)
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda を Kata Kerja(transitif)',
    penjelasan:
      'Objek dari Kata Kerja Transitif ditunjukkan oleh partikel を.',
    contoh: ['わたしは ジュースを 飲みます。'],
    artiContoh: ['Saya minum jus.'],
  },
  {
    no: 2,
    pola: 'Kata Benda(tempat) で Kata Kerja',
    penjelasan:
      'Partikel で yang diikuti Kata Benda tempat menunjukkan tempat dilakukan aksi.',
    contoh: ['わたしは 駅で 新聞を 買います。'],
    artiContoh: ['Saya membeli surat kabar di stasiun.'],
  },
  {
    no: 3,
    pola: 'いっしょに ～ませんか（ajakan)',
    penjelasan:
      'Ekspresi ませんか digunakan untuk mengajak lawan bicara.',
    contoh: ['いっしょに 神戸へ 行きませんか。'],
    artiContoh: ['Bagaimana kalau kita pergi ke Kobe bersama-sama?'],
  },
  {
    no: 4,
    pola: 'Kata Kerja ましょう（ajakan aktif)',
    penjelasan:
      'ましょう digunakan untuk mengusulkan secara aktif dan mengajak, serta menanggapi usulan atau ajakan lawan bicara.',
    contoh: ['ちょっと 休みましょう。'],
    artiContoh: ['Mari istirahat sebentar!'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda を します',
    penjelasan:
      'します disertai Kata Benda secara luas sebagai objek; artinya melakukan hal yang ditunjukkan objek tersebut.',
    contoh: ['サッカーを します。', '宿題を します。', '電話を します。'],
    artiContoh: ['Bermain sepak bola.', 'Mengerjakan PR.', 'Menelepon.'],
  },
  {
    no: 2,
    pola: '何を しますか',
    penjelasan:
      'Inilah pertanyaan untuk menanyakan hal yang dilakukan.',
    contoh: ['月曜日 何を しますか。……京都へ 行きます。'],
    artiContoh: ['Hari Senin melakukan apa? ……Pergi ke Kyoto.'],
  },
  {
    no: 3,
    pola: 'なん dan なに',
    penjelasan:
      'なんと なに artinya sama. なん dipakai jika kata sesudahnya diawali baris た, だ, な； jika disertai Kata Bantu Bilangan; atau jika bertanya sarana (adakalanya なにでもよい bila ingin lebih jelas menyatakan sarana). Selain itu digunakan なに.',
    contoh: ['それは 何ですか。', 'テレサちゃんは 何歳ですか。', '何を 買いますか。'],
    artiContoh: ['Itu apa?', 'Berapa usia Teresa?', 'Mau membeli apa?'],
  },
  {
    no: 4,
    pola: 'Kata Kerja ませんか',
    penjelasan:
      'Ekspresi untuk mengajak lawan bicara.',
    contoh: ['いっしょに 京都へ 行きませんか。……ええ、いいですね。'],
    artiContoh: ['Bagaimana kita pergi ke Kyoto bersama-sama? ……Ya, bagus ya.'],
  },
  {
    no: 5,
    pola: 'Kata Kerja ましょう',
    penjelasan:
      'Ekspresi untuk mengusulkan secara aktif dan mengajak. Dipakai untuk menanggapi usulan atau ajakan lawan bicara secara aktif juga.',
    contoh: ['ちょっと 休みましょう。', 'いっしょに 昼ごはんを 食べませんか。……ええ、食べましょう。'],
    artiContoh: ['Mari istirahat sebentar.', 'Bagaimana kita makan siang bersama-sama? ……Ya, ayo kita makan.'],
  },
  {
    no: 6,
    pola: '～か',
    penjelasan:
      'か menyatakan hal untuk mendapatkan informasi baru yang belum diketahui oleh lawan bicara sebelumnya, kemudian memahaminya. Ini adalah cara penggunaan yang sama dengan か dari そうですが.',
    contoh: ['日曜日 京都へ 行きました。……京都ですか。いいですね。'],
    artiContoh: ['Hari Minggu yang lalu pergi ke Kyoto. ……Kyoto? Bagus ya.'],
  },
]
