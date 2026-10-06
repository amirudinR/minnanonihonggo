import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 36 — JP: Honsatsu 第36課「例文」(idx 104 / cetak 86).
// arti: PDF Indonesia "Pelajaran 36 · II. Terjemahan · Contoh Kalimat" (idx 91 / cetak 70), 1:1.
// CATATAN: no 5 — terjemahan Indonesia pada buku cetak tidak cocok dengan kalimat JP
// (tertukar dengan materi Pelajaran 15). Ditulis apa adanya sesuai sumber.
export const reibun: ReibunItem[] = [
  {
    kalimat: 'それは 電子辞書ですか。',
    arti: 'Apakah itu kamus elektronik?',
    furigana: [{ base: '辞書', ruby: 'じしょ' }],
  },
  {
    kalimat: '……ええ。知らない ことばを 聞いたら、すぐ 調べられるように、持っています。',
    arti: '……Ya. Saya membawanya agar jika ada kosa kata yang belum saya kenal, langsung mencarinya.',
  },
  {
    kalimat: 'カレンダーの あの 赤い 丸は どういう 意味ですか。',
    arti: 'Apa maksud bulat merah di kalender?',
  },
  {
    kalimat: '……ごみの 日です。忘れないように、つけて あるんです。',
    arti: '……Hari untuk membuang sampah. Supaya tidak lupa, (saya) menandainya.',
  },
  {
    kalimat: '布団には もう 慣れましたか。',
    arti: 'Sudah terbiasa dengan makanan Jepang?',
    furigana: [{ base: '布団', ruby: 'ぶとん' }, { base: '慣', ruby: 'な' }],
  },
  {
    kalimat: '……はい。初めは なかなか 寝られませんでしたが、今は よく 寝られるように なりました。',
    arti:
      '……Ya. Mula-mula tidak bisa makan, tetapi sekarang sudah bisa makan apa saja.',
  },
  {
    kalimat: 'ショパンの 曲が 弾けるように なりましたか。',
    arti: 'Apakah sudah bisa bermusik Chopin?',
  },
  {
    kalimat: '……いいえ、まだ 弾けません。早く 弾けるように なりたいです。',
    arti: '……Belum, belum bisa bermusik. (Saya) Ingin agar bisa bermusik secepatnya.',
  },
  {
    kalimat: '工場が できてから、この 近くの 海では 泳げなく なりました。',
    arti: 'Jalan baru dibuat, ya. ……Ya. Bisa pulang ke kampung halaman suami saya dalam waktu empat jam.',
    furigana: [{ base: '工場', ruby: 'こうじょう' }, { base: '海', ruby: 'うみ' }],
  },
  {
    kalimat: '……そうですか。残念ですね。',
    arti: '……Oh, begitu. Sayang sekali.',
  },
  {
    kalimat: '甘い 物は 食べないんですか。',
    arti: 'Tidak makan makanan manis?',
  },
  {
    kalimat: '……ええ。できるだけ 食べないように しているんです。その ほうが 体に いいですね。',
    arti:
      '……Ya. (Saya) Berusaha sedapat mungkin untuk tidak makan.',
    furigana: [{ base: '体', ruby: 'からだ' }],
  },
  {
    kalimat: 'コンサートは 6時に 始まります。絶対に 遅れないように して ください。遅れたら、入れませんから。',
    arti:
      'Ujian mulai dari pukul sembilan. Jangan terlambat sama sekali. Kalau terlambat, tidak bisa masuk.',
  },
  { kalimat: '……はい、わかりました。', arti: '……Baik, mengerti.' },
]