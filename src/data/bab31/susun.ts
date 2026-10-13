import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 31 — fokus pola 文型:
//  (1) Kata Kerja Bentuk Maksud（よう）と 思います／思っています
//  (2) Kata Kerja Bentuk Kamus ／ Bentuk ない ＋ つもりです
//  (3) Kata Kerja Bentuk Kamus ／ Kata Benda の 予定です
//  (4) まだ ＋ Kata Kerja Bentuk ていません
//  + catatan: ～ましょう／～ませんか , Kata Kerja Bentuk ます sebagai Kata Benda
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 31 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja Bentuk Maksud と 思っています', arti: '……(Saya) sedang berpikir untuk pergi ke Onsen bersama keluarga.', kata: ['家族と', '温泉に', '行こうと', '思っています'], jawaban: '家族と 温泉に 行こうと 思っています', penjelasan: 'Bentuk Maksud（行こう）+ と 思っています menyatakan kehendak yang sedang dipikirkan.' },
  { id: 's2', fokus: 'Kata Kerja Bentuk Maksud と 思っています', arti: 'Saya berpikir menyelesaikannya sampai dengan hari Jumat.', kata: ['金曜日までに', 'まとめようと', '思っています'], jawaban: '金曜日までに まとめようと 思っています', penjelasan: 'までに menandai batas waktu; まとめよう = bentuk maksud dari まとめます.' },
  { id: 's3', fokus: 'Kata Kerja Bentuk Maksud と 思います', arti: 'Sekarang mau pergi ke bank.', kata: ['今から', '銀行へ', '行こうと', '思います'], jawaban: '今から 銀行へ 行こうと 思います', penjelasan: 'Bentuk Maksud + と 思います menyatakan maksud si pembicara.' },
  { id: 's4', fokus: 'Kata Kerja Bentuk Maksud ましょう／ませんか', arti: 'Bagaimana kalau (kita) beristirahat sebentar?', kata: ['ちょっと', '休まない？'], jawaban: 'ちょっと 休まない？', penjelasan: 'Bentuk Biasa ～ませんか／～ない？ mengajak lawan bicara melakukan sesuatu.' },
  { id: 's5', fokus: 'Kata Kerja Bentuk Maksud ましょう／ませんか', arti: '……Ya, setuju.', kata: ['うん', 'そうしよう'], jawaban: 'うん そうしよう', penjelasan: 'そうしよう = bentuk maksud dari そうします untuk menyetujui ajakan.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk Maksud と 思います', arti: 'Mari saya bantu?', kata: ['手伝おうか', 'すみません'], jawaban: '手伝おうか すみません', penjelasan: 'Pada kalimat tanya Bentuk Biasa Bentuk Maksud, partikel か tetap dipakai.' },
  { id: 's7', fokus: 'Kata Kerja Bentuk Kamus つもりです', arti: 'Kalau pulang ke tanah air, (saya) ingin meneruskan belajar bahasa Jepang.', kata: ['国へ', '帰っても', '日本語の', '勉強を', '続ける', 'つもりです'], jawaban: '国へ 帰っても 日本語の 勉強を 続ける つもりです', penjelasan: 'Bentuk Kamus（続ける）+ つもりです menyatakan kehendak yang pasti.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk Kamus つもりです', arti: '……Ya, (saya) ingin meneruskan.', kata: ['はい', '続ける', 'つもりです'], jawaban: 'はい 続ける つもりです', penjelasan: 'Menegaskan kembali kehendak dengan つもりです.' },
  { id: 's9', fokus: 'Kata Kerja Bentuk ない つもりです', arti: 'Mulai besok, (saya) bermaksud tidak merokok.', kata: ['あしたからは', 'たばこを', '吸わない', 'つもりです'], jawaban: 'あしたからは たばこを 吸わない つもりです', penjelasan: 'Bentuk negatif ～ない + つもりです menyatakan maksud tidak melakukan.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk ない つもりです', arti: '……Ya. Karena mengikuti ujian masuk S2, tahun ini saya tidak akan pulang.', kata: ['ことしは', '帰らない', 'つもりです'], jawaban: 'ことしは 帰らない つもりです', penjelasan: '帰らない つもりです = bermaksud tidak pulang ke tanah air.' },
  { id: 's11', fokus: 'Kata Kerja Bentuk Kamus 予定です', arti: 'Rencana pada akhir bulan Juli (saya) dinas ke Jerman.', kata: ['7月の', '終わりに', 'ドイツへ', '出張する', '予定です'], jawaban: '7月の 終わりに ドイツへ 出張する 予定です', penjelasan: 'Bentuk Kamus + 予定です menyatakan rencana yang sudah ditetapkan.' },
  { id: 's12', fokus: 'Kata Benda の 予定です', arti: 'Rencana perjalanan lebih kurang selama seminggu.', kata: ['旅行は', '1週間くらいの', '予定です'], jawaban: '旅行は 1週間くらいの 予定です', penjelasan: 'Kata Benda + の + 予定です menyatakan rencana dalam satuan tertentu.' },
  { id: 's13', fokus: 'Kata Kerja Bentuk Kamus 予定です', arti: 'Rencana hari Jumat minggu depan.', kata: ['来週の', '金曜日に', '帰る', '予定です'], jawaban: '来週の 金曜日に 帰る 予定です', penjelasan: 'Bentuk Kamus（帰る）+ 予定です untuk menjelaskan jadwal kembali.' },
  { id: 's14', fokus: 'まだ ＋ Kata Kerja Bentuk ていません', arti: '……Belum, belum saya tulis.', kata: ['いいえ', 'まだ', '書いて', 'いません'], jawaban: 'いいえ まだ 書いて いません', penjelasan: 'まだ + ～て いません menyatakan belum selesai sampai saat ini.' },
  { id: 's15', fokus: 'まだ ＋ Kata Kerja Bentuk ていません', arti: 'Bank belum buka.', kata: ['銀行は', 'まだ', '開いて', 'いません'], jawaban: '銀行は まだ 開いて いません', penjelasan: '開いて いません = belum dalam keadaan terbuka.' },
  { id: 's16', fokus: 'Bentuk Kamus つもりです／予定です', arti: '(Saya) Ingin berjalan-jalan di Eropa kurang-lebih satu bulan.', kata: ['1か月ぐらい', 'ヨーロッパへ', '遊びに', '行きたいんですが'], jawaban: '1か月ぐらい ヨーロッパへ 遊びに 行きたいんですが', penjelasan: '～たいんですが menyampaikan keinginan sebagai pembuka permintaan.' },
  { id: 's17', fokus: 'Kata Kerja Bentuk ます sebagai Kata Benda', arti: 'Naik dari mana Shinkansen pulang?', kata: ['帰りの', '新幹線は', 'どこから', '乗りますか'], jawaban: '帰りの 新幹線は どこから 乗りますか', penjelasan: '帰り = Bentuk ます（帰ります）yang dipakai sebagai Kata Benda.' },
  { id: 's18', fokus: 'Kata Kerja Bentuk ます sebagai Kata Benda', arti: 'Hari apa liburnya?', kata: ['休みは', '何曜日ですか'], jawaban: '休みは 何曜日ですか', penjelasan: '休み = Bentuk ます（休みます）yang dipakai sebagai Kata Benda.' },
  { id: 's19', fokus: 'Kata Kerja Bentuk Maksud と 思います', arti: 'Dia ingin membuat sekolah.', kata: ['彼は', '学校を', '作ろうと', '思っています'], jawaban: '彼は 学校を 作ろうと 思っています', penjelasan: 'Untuk orang ketiga dipakai ～と 思っています, bukan ～と 思います.' },
  { id: 's20', fokus: 'Kata Kerja Bentuk Maksud ましょう', arti: 'Apakah (Anda) membawa payung?', kata: ['傘を', '持って', '行くか'], jawaban: '傘を 持って 行くか', penjelasan: 'Pada kalimat tanya Bentuk Biasa Bentuk Maksud, partikel か diletakkan di akhir.' },
]
