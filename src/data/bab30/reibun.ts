import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 30 — JP: Honsatsu 第30課「例文」1-7 (idx 52, cetak 34).
// arti: PDF Indonesia "Pelajaran 30 · II. Terjemahan · Contoh Kalimat" (idx 55, cetak 34).
// Catatan: PDF terjemahan Indonesia hanya memuat 5 nomor (12 baris). Contoh JP no. 3
// (お子さんの 名前…) dan no. 5 (ボランティアに 参加したい…) tidak diterjemahkan di
// PDF Indonesia, jadi keduanya tidak dipakai agar tetap 1:1 dengan sumber.
// Pasangan yang dipakai: ID 1↔JP 1, ID 2↔JP 2, ID 3↔JP 4, ID 4↔JP 6, ID 5↔JP 7.
// (ID "Di dinding ada gambar bunga danSupreme" mengikuti cetakan; JP = 花や 動物.)
export const reibun: ReibunItem[] = [
  { kalimat: '駅の 新しい トイレは おもしろいですね。', arti: 'Toilet baru di stasiun lucu, ya.' },
  { kalimat: '……え？ そうですか。', arti: '……Eh? Begitu ya?' },
  { kalimat: '壁に 花や 動物の 絵が かいて あるんです。', arti: 'Di dinding ada gambar bunga danSupreme.' },
  { kalimat: 'セロテープは どこですか。', arti: 'Selotip ada di mana?' },
  { kalimat: '……あの 引き出しに して ありますよ。', arti: '……Di simpan di laci itu.' },
  { kalimat: '次の 会議までに、何を して おいたら いいですか。', arti: 'Mengenai dinas bulan depan, apa saya pesan hotel?' },
  { kalimat: '……この 資料を 読んで おいて ください。', arti: '……Ya, tolong.' },
  { kalimat: 'はさみを 使ったら、元の 所に 戻して おいて ください。', arti: 'Jika memakai gunting, tolong kembalikan ke tempat semula.' },
  { kalimat: '……はい、わかりました。', arti: '……Ya, baik.' },
  { kalimat: '資料を 片づけても いいですか。', arti: 'Boleh menyimpan data?' },
  { kalimat: '……いいえ。その ままに して おいて ください。', arti: '……Tidak, biarkan saja begitu.' },
  { kalimat: 'まだ 使っていますから。', arti: 'Karena sedang dipakai.' },
]