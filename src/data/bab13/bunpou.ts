import type { Bunpou } from '@/types/bab'

export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'Kata Benda が 欲しいです',
    penjelasan: 'Pola kalimat ini menyatakan keinginan pembicara untuk mendapatkan suatu benda atau orang. Partikel yang digunakan sebelum 欲しいです adalah が.',
    contoh: ['わたしは 友達が 欲しいです。', '今 何が いちばん 欲しいですか。……車が 欲しいです。'],
    artiContoh: ['Saya ingin punya teman.', 'Sekarang apa yang paling Anda inginkan? ……Saya ingin mobil.']
  },
  {
    no: 2,
    pola: 'Kata Kerjaたいです',
    penjelasan: 'Pola ini menyatakan keinginan pembicara untuk melakukan suatu tindakan. Untuk membuat Kata Kerjaたいです, tambahkan たいです pada Kata Kerja bentuk ます (masu). Objek dari Kata Kerjaたいです dapat menggunakan partikel を atau が.',
    contoh: ['わたしは 沖縄へ 行きたいです。', '神戸で 何を 買いたいですか。……靴を 買いたいです。', '水が 飲みたいです。'],
    artiContoh: ['Saya ingin pergi ke Okinawa.', 'Anda ingin membeli apa di Kobe? ……Saya ingin membeli sepatu.', 'Saya ingin minum air.']
  },
  {
    no: 3,
    pola: 'Kata Benda(tempat) へ Kata Kerjaます / Kata Benda(kegiatan) に 行きます / 来ます / 帰ります',
    penjelasan: 'Pola ini menunjukkan tujuan dari pergerakan (pergi, datang, pulang). Kata kerja sebelum partikel に harus dalam bentuk ます tanpa ます. Kata benda di depan に harus berupa kata benda yang menyatakan kegiatan.',
    contoh: ['神戸へ インド料理を 食べに 行きます。', '神戸へ 買い物に 行きます。', '日本へ 美術の 勉強に 来ました。'],
    artiContoh: ['Saya pergi ke Kobe untuk makan masakan India.', 'Saya pergi berbelanja ke Kobe.', 'Saya datang ke Jepang untuk belajar kesenian.']
  },
  {
    no: 4,
    pola: '何か / どこか',
    penjelasan: '何か berarti "sesuatu", sedangkan どこか berarti "suatu tempat". Partikel (を, へ, dsb) yang mengikuti 何か atau どこか sering dihilangkan.',
    contoh: ['冬休みは どこか［へ］ 行きましたか。……はい、行きました。', 'のどが 渇きましたから、何か［を］ 飲みたいです。'],
    artiContoh: ['Apakah Anda pergi ke suatu tempat pada liburan musim dingin? ……Ya, saya pergi.', 'Karena haus, saya ingin minum sesuatu.']
  }
]

export const catatanTataBahasa: Bunpou[] = []
