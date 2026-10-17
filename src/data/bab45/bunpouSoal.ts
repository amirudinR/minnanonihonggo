import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 45 — tepat 5 soal per pola (2 pola 文型 + 2 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ～場合は、～ ───────────────────────────────────────────
  { id: 'b45-1-1', grup: 'bunpou', no: 1, soal: '会議に 間に合わ___ 場合は、連絡係に 連絡して ください。', arti: 'Jika tidak tepat waktu pada rapat, tolong hubungi koordinator.', jawaban: 'ない', pilihan: ['ない', 'ません', 'なかった', 'なくて'] },
  { id: 'b45-1-2', grup: 'bunpou', no: 1, soal: 'パソコンの 調子が ___ 場合は、この 番号に 連絡して ください。', arti: 'Jika kondisi PC tidak baik, hubungi nomor ini.', jawaban: '悪い', pilihan: ['悪い', '悪く', '悪かった', '悪くて'] },
  { id: 'b45-1-3', grup: 'bunpou', no: 1, soal: '領収書が ___ 場合は、係に 言って ください。', arti: 'Jika perlu kuitansi, tolong beritahukan kepada petugas.', jawaban: '必要な', pilihan: ['必要な', '必要だ', '必要の', '必要く'] },
  { id: 'b45-1-4', grup: 'bunpou', no: 1, soal: '火事や 地震の 場合は、エレベーターを ___ ください。', arti: 'Jika terjadi kebakaran atau gempa bumi, jangan gunakan lift.', jawaban: '使わないで', pilihan: ['使わないで', '使って', '使い', '使わなくて'] },
  { id: 'b45-1-5', grup: 'bunpou', no: 1, soal: '時間に 遅れた ___ は、会場に 入れません。', arti: 'Jika terlambat pada waktunya, tidak bisa masuk ke dalam tempat.', jawaban: '場合', pilihan: ['場合', '時間', '場所', '理由'] },

  // ── 文型 2 · ～のに、～ ────────────────────────────────────────────
  { id: 'b45-2-1', grup: 'bunpou', no: 2, soal: '約束を した___、彼女は 来ませんでした。', arti: 'Dia tidak datang padahal sudah berjanji.', jawaban: 'のに', pilihan: ['のに', 'ので', 'から', 'ため'] },
  { id: 'b45-2-2', grup: 'bunpou', no: 2, soal: 'きょうは 日曜日___、働かなければ なりません。', arti: 'Hari ini saya harus bekerja padahal hari Minggu.', jawaban: 'なのに', pilihan: ['なのに', 'のに', 'なので', 'ために'] },
  { id: 'b45-2-3', grup: 'bunpou', no: 2, soal: '一生懸命 練習した___、途中で 忘れて しまいました。', arti: 'Di tengah pidato saya lupa padahal sudah berlatih dengan sungguh-sungguh.', jawaban: 'のに', pilihan: ['のに', 'ので', 'から', 'ため'] },
  { id: 'b45-2-4', grup: 'bunpou', no: 2, soal: '薬を 飲んだ___、まだ 頭が 痛いです。', arti: 'Padahal sudah minum obat, kepala saya masih sakit.', jawaban: 'のに', pilihan: ['のに', 'ので', 'から', 'ため'] },
  { id: 'b45-2-5', grup: 'bunpou', no: 2, soal: 'この 部屋は 静か___、よく 眠れません。', arti: 'Padahal kamar ini tenang, saya tidak bisa tidur nyenyak.', jawaban: 'なのに', pilihan: ['なのに', 'のに', 'なので', 'ために'] },

  // ── Catatan 1 · のに vs が ─────────────────────────────────────────
  { id: 'b45-c1-1', grup: 'catatan', no: 1, soal: '約束を しました___、彼女は 来ませんでした。', arti: 'Dia tidak datang walaupun sudah berjanji.', jawaban: 'が', pilihan: ['が', 'のに', 'ので', 'から'] },
  { id: 'b45-c1-2', grup: 'catatan', no: 1, soal: 'きょうは 日曜日です___、働かなければ なりません。', arti: 'Saya harus bekerja walaupun hari Minggu.', jawaban: 'が', pilihan: ['が', 'のに', 'なのに', 'ので'] },
  { id: 'b45-c1-3', grup: 'catatan', no: 1, soal: '薬を 飲みました___、まだ 頭が 痛いです。', arti: 'Sudah minum obat, tetapi kepala masih sakit.', jawaban: 'が', pilihan: ['が', 'のに', 'ので', 'ために'] },
  { id: 'b45-c1-4', grup: 'catatan', no: 1, soal: '3時間 待ちました___、彼は 来ませんでした。', arti: 'Sudah menunggu 3 jam, tetapi dia tidak datang.', jawaban: 'が', pilihan: ['が', 'のに', 'ので', 'から'] },
  { id: 'b45-c1-5', grup: 'catatan', no: 1, soal: '一生懸命 練習しました___、途中で 忘れて しまいました。', arti: 'Sudah berlatih dengan sungguh-sungguh, tetapi di tengah saya lupa.', jawaban: 'が', pilihan: ['が', 'のに', 'ので', 'から'] },

  // ── Catatan 2 · のに vs ても ───────────────────────────────────────
  { id: 'b45-c2-1', grup: 'catatan', no: 2, soal: 'あした 雨が ___ ても、サッカーをします。', arti: 'Besok meskipun hujan, saya bermain sepak bola.', jawaban: '降って', pilihan: ['降って', '降る', '降った', '降り'] },
  { id: 'b45-c2-2', grup: 'catatan', no: 2, soal: 'あした 雨が 降って___、サッカーをします。', arti: 'Besok meskipun hujan, saya bermain sepak bola.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'に'] },
  { id: 'b45-c2-3', grup: 'catatan', no: 2, soal: '忙し___、毎日 日本語を 勉強しています。', arti: 'Meskipun sibuk, setiap hari saya belajar bahasa Jepang.', jawaban: 'くても', pilihan: ['くても', 'くて', 'いでも', 'くのに'] },
  { id: 'b45-c2-4', grup: 'catatan', no: 2, soal: '雨が 降って___、出かけます。', arti: 'Meskipun hujan, saya akan pergi keluar.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'を'] },
  { id: 'b45-c2-5', grup: 'catatan', no: 2, soal: '何回も 練習して___、だめでした。', arti: 'Meskipun berlatih berkali-kali, tetap tidak berhasil.', jawaban: 'も', pilihan: ['も', 'は', 'が', 'に'] },
]
