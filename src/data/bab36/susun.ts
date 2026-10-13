import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 36 — fokus 文型:
//  (1) {Kata Kerja Bentuk Kamus / Kata Kerja ない} ように、Kata Kerja₂
//  (2) Kata Kerja Bentuk Kamus ように なります
//  (3) {Kata Kerja Bentuk Kamus / Kata Kerja ない} ように します
//  + catatan: Kata Sifat い→く／な→に
// ATURAN: `kata` = token dari `jawaban` (pisah spasi) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 36 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～ように、～', arti: 'Setiap hari (saya) berlatih agar bisa berenang dengan cepat.', kata: ['速く', '泳げるように', '毎日', '練習して います'], jawaban: '速く 泳げるように 毎日 練習して います', penjelasan: 'ように menyatakan tujuan dari Kata Kerja₂; sebelum ように dipakai Kata Kerja Potensial 泳げる.' },
  { id: 's2', fokus: '～ないように、～', arti: 'Tolong dicatat supaya tidak lupa.', kata: ['忘れないように', 'メモして ください'], jawaban: '忘れないように メモして ください', penjelasan: 'Kata Kerja Bentuk ない + ように + ください = "tolong lakukan agar tidak ~".' },
  { id: 's3', fokus: '～ないように、～', arti: 'Supaya tidak lupa, (saya) menandainya.', kata: ['忘れないように', 'つけて あるんです'], jawaban: '忘れないように つけて あるんです', penjelasan: 'のように、つけて ある = sudah ditandai agar tidak lupa.' },
  { id: 's4', fokus: '～ように、～', arti: 'Saya membawanya agar jika ada kosa kata yang belum saya kenal, langsung mencarinya.', kata: ['知らない', 'ことばを', '聞いたら', 'すぐ', '調べられるように', '持っています'], jawaban: '知らない ことばを 聞いたら すぐ 調べられるように 持っています', penjelasan: 'Potensial 調べられる + ように menyatakan tujuan saat membawa barang.' },
  { id: 's5', fokus: 'Kata Kerja Bentuk Kamus ように なります', arti: 'Kalau setiap hari berlatih, bisa berenang.', kata: ['毎日', '練習すれば', '泳げるように', 'なります'], jawaban: '毎日 練習すれば 泳げるように なります', penjelasan: '～ように なります menyatakan perubahan dari tidak bisa menjadi bisa.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk Kamus ように なります', arti: 'Akhirnya bisa bersepeda.', kata: ['やっと', '自転車に', '乗れるように', 'なりました'], jawaban: 'やっと 自転車に 乗れるように なりました', penjelasan: 'Kata Kerja Potensial 乗れる + ように なりました = "akhirnya bisa".' },
  { id: 's7', fokus: '～ように なりましたか', arti: 'Apakah sudah bisa bermusik Chopin?', kata: ['ショパンの', '曲が', '弾けるように', 'なりましたか'], jawaban: 'ショパンの 曲が 弾けるように なりましたか', penjelasan: 'Kalimat tanya ～ように なりましたか menanyakan kemampuan yang baru dikuasai.' },
  { id: 's8', fokus: '～ように なりましたか', arti: 'Belum, belum bisa bermusik.', kata: ['いいえ', 'まだ', '弾けません'], jawaban: 'いいえ まだ 弾けません', penjelasan: 'Jawaban negatif dari ～ように なりましたか adalah いいえ、まだ ～ません.' },
  { id: 's9', fokus: '～ように なります', arti: 'Mula-mula tidak bisa tidur, tetapi sekarang sudah bisa tidur dengan baik.', kata: ['初めは', 'なかなか', '寝られませんでしたが', '今は', 'よく', '寝られるように', 'なりました'], jawaban: '初めは なかなか 寝られませんでしたが 今は よく 寝られるように なりました', penjelasan: 'Perubahan keadaan: ～ませんでしたが、～ように なりました.' },
  { id: 's10', fokus: '～ように なります', arti: 'Orang Jepang telah makan daging sapi dan daging babi sejak kira-kira seratus tahun yang lalu.', kata: ['日本人は', '100年ぐらいまえから', '牛肉や', '豚肉を', '食べるように', 'なりました'], jawaban: '日本人は 100年ぐらいまえから 牛肉や 豚肉を 食べるように なりました', penjelasan: 'Dengan Kata Kerja biasa, ～ように なります = kebiasaan baru yang terbentuk.' },
  { id: 's11', fokus: '～ように して います', arti: 'Setiap hari berolah raga dan berusaha makan apa saja.', kata: ['毎日', '運動して', '何でも', '食べるように', 'して います'], jawaban: '毎日 運動して 何でも 食べるように して います', penjelasan: '～ように して います = berusaha melakukan secara kebiasaan.' },
  { id: 's12', fokus: '～ないように して います', arti: 'Karena tidak baik untuk gigi, maka berusaha tidak makan makanan manis.', kata: ['歯に', '悪いですから', '甘い', '物を', '食べないように', 'して います'], jawaban: '歯に 悪いですから 甘い 物を 食べないように して います', penjelasan: 'Bentuk ない + ように して います = berusaha tidak melakukan.' },
  { id: 's13', fokus: '～ないように して います', arti: 'Ya. (Saya) berusaha sedapat mungkin untuk tidak makan.', kata: ['ええ', 'できるだけ', '食べないように', 'して いるんです'], jawaban: 'ええ できるだけ 食べないように して いるんです', penjelasan: 'できるだけ + ～ないように しています menyatakan usaha.' },
  { id: 's14', fokus: '～ように して ください', arti: 'Usahakan makan sayur-mayur yang lebih banyak.', kata: ['もっと', '野菜を', '食べるように', 'して ください'], jawaban: 'もっと 野菜を 食べるように して ください', penjelasan: '～ように して ください = permintaan tidak langsung yang halus.' },
  { id: 's15', fokus: '～ないように して ください', arti: 'Sama sekali jangan sampai kehilangan paspor.', kata: ['絶対に', 'パスポートを', 'なくさないように', 'して ください'], jawaban: '絶対に パスポートを なくさないように して ください', penjelasan: 'Bentuk ない + ように して ください = "usahakan jangan ~".' },
  { id: 's16', fokus: '～ないように して ください', arti: 'Konser mulai pukul 6. Jangan terlambat sama sekali.', kata: ['コンサートは', '6時に', '始まります', '絶対に', '遅れないように', 'して ください'], jawaban: 'コンサートは 6時に 始まります 絶対に 遅れないように して ください', penjelasan: 'Kalimat majemuk: penjelasan waktu lalu permintaan ～ないように して ください.' },
  { id: 's17', fokus: '～ように して います', arti: 'Berusaha pulang ke rumah sebelum pukul 10 walau pekerjaan sibuk.', kata: ['仕事が', '忙しくても', '10時までに', 'うちへ', 'かえるように', 'して います'], jawaban: '仕事が 忙しくても 10時までに うちへ かえるように して います', penjelasan: '～ても + ～ように しています menyatakan usaha tetap dilakukan.' },
  { id: 's18', fokus: '～ないように して います', arti: 'Tidak masuk kerja karena sakit.', kata: ['病気で', '会社を', '休みました'], jawaban: '病気で 会社を 休みました', penjelasan: 'Kata Benda penyebab + で menyatakan sebab (pelengkap pola ように).' },
  { id: 's19', fokus: 'Kata Sifat い→く／な→に', arti: '(Saya) ingin menjadi cepat pandai membuat teh.', kata: ['早く', '上手に', 'お茶が', 'たてられるように', 'なりたいです'], jawaban: '早く 上手に お茶が たてられるように なりたいです', penjelasan: 'Kata Sifat い→く (早く), Kata Sifat な→に (上手に) menerangkan Kata Kerja.' },
  { id: 's20', fokus: '～ように して ください', arti: 'Jangan lupa, karena kalau terlambat tidak bisa masuk.', kata: ['遅れたら', '入れませんから', '遅れないように', 'して ください'], jawaban: '遅れたら 入れませんから 遅れないように して ください', penjelasan: 'Alasan dengan ～から mendahului permintaan ～ないように して ください.' },
]
