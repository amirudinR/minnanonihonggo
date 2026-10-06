import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 44 — JP: Honsatsu 第44課「例文」(idx 170, cetak 152).
// arti: PDF Indonesia "Pelajaran 44 · II. Terjemahan · Contoh Kalimat" (idx 139), 1:1.
// Catatan: (a) Contoh Kalimat JPno. 6_artinya tercetak tidak sesuai dengan kalimat JP-nya.
// (b) Buku Indonesia hanya tercetak 6 Contoh Kalimat, sedangkan Honsatsu memuat 8;
//     Contoh Kalimat no. 7-8 tidak punya padanan tercetak.
const tanpaTerjemahan = 'Buku Indonesia tidak tercetak terjemahan untuk Contoh Kalimat ini.'

export const reibun: ReibunItem[] = [
  {
    kalimat: '泣いているんですか。\n……いいえ、笑いすぎて、涙が 出たんです。',
    arti: 'Menangis, ya?\n……Tidak, karena tertawa terlalu banyak, keluar air mata.',
  },
  {
    kalimat: '最近の 車は 操作が 簡単ですね。\n……ええ。でも、簡単すぎて、運転が おもしろくないです。',
    arti: 'Mobil sekarang ini mudah dijalankan, ya.\n……Ya. Tetapi, tidak menarik karena terlalu mudah.',
  },
  {
    kalimat: '田舎と 町と、どちらが 住みやすいですか。\n……田舎の ほうが 住みやすいと 思います。\n物価も 安いし、空気も きれいですから。',
    arti: 'Yang mana lebih enak didiami, kampung atau kota?\n……Saya kira kampung yang lebih enak didiami.\nHarga barang murah, dan udara juga bersih.',
  },
  {
    kalimat: 'この コップは 丈夫で 割れにくいですよ。\n……子どもが 使うのに 安全で、いいですね。',
    arti: 'Gelas ini kuat dan tidak mudah terpecah.\n……Cocok dan aman dipakai untuk anak.',
  },
  {
    kalimat: 'もう 夜 遅いですから、静かに して いただけませんか。\n……はい。すみません。',
    arti: 'Sudah larut malam, tolong tenang!\n……Ya. Maaf.',
  },
  {
    kalimat: '今晩の おかずは 何に しましょうか。\n……きのうは 肉を 食べたから、きょうは 魚料理に しようよ。',
    arti: 'Minumannya apa?\n……Bir.',
  },
  { kalimat: '電気や 水は 大切に 使いましょう。\n……はい、わかりました。', arti: tanpaTerjemahan },
  { kalimat: '野菜は 細かく 切って、卵と 混ぜます。\n……はい。これで いいですか。', arti: tanpaTerjemahan },
]
