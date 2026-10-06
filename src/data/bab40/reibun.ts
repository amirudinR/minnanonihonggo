import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 40 — JP: Honsatsu 第40課「例文」(idx 136).
// arti: PDF Indonesia "Pelajaran 40 · II. Terjemahan · Contoh Kalimat" (idx 115), 1:1.
// CATATAN: PDF Indonesia memuat 6 "Contoh Kalimat", tetapi no 5-6 berbeda dari
// 例文 no 5-6 di Honsatsu (Indonesia menambah dua kalimat baru). Karena itu
// arti no 5-6 di bawah diterjemahkan dari kalimat Honsatsu, bukan disalin dari PDF.
export const reibun: ReibunItem[] = [
  {
    kalimat: '二次会は どこへ 行きましたか。',
    arti: 'Pergi ke mana pesta berikutnya?',
    pembicara: 'A',
  },
  {
    kalimat: '…酔って いたので、どこへ 行ったか、全然 覚えて いないんです。',
    arti: '……Saya tidak ingat sama sekali karena mabuk.',
    pembicara: 'B',
  },
  {
    kalimat: '山の 高さは どうやって 測るか、知って いますか。',
    arti: 'Apakah (Anda) tahu bagaimana caranya untuk mengukur tinggi gunung?',
  },
  { kalimat: '…さあ、どうやって 測るんですか。', arti: '……Kurang tahu… Mari mencari di internet.' },
  {
    kalimat: 'わたしたちが 初めて 会ったのは いつか、覚えて いますか。',
    arti: 'Apakah (Anda) masih ingat kapan pertama kali kita bertemu?',
  },
  {
    kalimat: '…昔の ことは もう 忘れて しまいました。',
    arti: '……Sudah lupa karena sudah lama.',
  },
  {
    kalimat: '忘年会に 出席できるか どうか、20日までに 返事を ください。',
    arti: 'Tolong dijawab lewat e-mail apakah bisa hadir pada pesta akhir tahun atau tidak!',
  },
  { kalimat: '…はい、わかりました。', arti: '……Baik, mengerti.' },
  {
    kalimat: 'おそこで 何を 調べるんですか。',
    arti: 'Di sini apa yang sedang diperiksa?',
  },
  {
    kalimat: '…飛行機に 乗る 人が ナイフなど 危険な 物を 持って いないか どうか、調べるんです。',
    arti: '……Untuk memeriksa apakah orang yang menaiki pesawat membawa benda berbahaya seperti pisau atau tidak.',
  },
  { kalimat: 'すみません。この 服を 着て みても いいですか。', arti: 'Permisi. Bolehkah saya mencoba memakai pakaian ini?' },
  { kalimat: '…はい、こちらで どうぞ。', arti: '……Baik, silakan di sini.' },
]