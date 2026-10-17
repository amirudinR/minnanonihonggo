import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 31 — tepat 5 soal per pola (4 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Kerja Bentuk Kamus／ない ＋ つもりです ──────────────
  { id: 'b31-1-1', grup: 'bunpou', no: 1, soal: '国へ 帰っても、日本語の 勉強を ___ つもりです。', arti: 'Kalau pulang ke tanah air, (saya) bermaksud meneruskan belajar bahasa Jepang.', jawaban: '続ける', pilihan: ['続ける', '続けた', '続けます', '続けて'] },
  { id: 'b31-1-2', grup: 'bunpou', no: 1, soal: 'あしたからは たばこを ___ つもりです。', arti: 'Mulai besok, (saya) bermaksud tidak merokok.', jawaban: '吸わない', pilihan: ['吸わない', '吸います', '吸って', '吸った'] },
  { id: 'b31-1-3', grup: 'bunpou', no: 1, soal: '来年 日本語の 試験を ___ つもりです。', arti: 'Tahun depan (saya) berniat mengikuti ujian bahasa Jepang.', jawaban: '受ける', pilihan: ['受ける', '受けます', '受けて', '受けた'] },
  { id: 'b31-1-4', grup: 'bunpou', no: 1, soal: 'ことしは 国へ ___ つもりです。', arti: 'Tahun ini (saya) bermaksud tidak pulang ke tanah air.', jawaban: '帰らない', pilihan: ['帰らない', '帰ります', '帰って', '帰った'] },
  { id: 'b31-1-5', grup: 'bunpou', no: 1, soal: 'A：あした どこへ 行きますか。B：図書館へ ___ つもりです。', arti: 'A：Besok mau ke mana? B：Saya bermaksud pergi ke perpustakaan.', jawaban: '行く', pilihan: ['行く', '行きます', '行って', '行った'] },

  // ── 文型 2 · Kata Kerja Bentuk Kamus／Kata Benda の 予定です ────────
  { id: 'b31-2-1', grup: 'bunpou', no: 2, soal: '7月の 終わりに ドイツへ ___ 予定です。', arti: 'Rencananya pada akhir bulan Juli (saya) dinas ke Jerman.', jawaban: '出張する', pilihan: ['出張する', '出張した', '出張して', '出張します'] },
  { id: 'b31-2-2', grup: 'bunpou', no: 2, soal: '旅行は 1週間くらいの ___です。', arti: 'Rencana perjalanan lebih kurang selama seminggu.', jawaban: '予定', pilihan: ['予定', 'つもり', 'ほうがいい', 'かもしれない'] },
  { id: 'b31-2-3', grup: 'bunpou', no: 2, soal: '来週の 金曜日に ___ 予定です。', arti: 'Rencananya pulang pada hari Jumat minggu depan.', jawaban: '帰る', pilihan: ['帰る', '帰った', '帰って', '帰ります'] },
  { id: 'b31-2-4', grup: 'bunpou', no: 2, soal: 'ミラーさんは 来月 大阪へ 出張する ___です。', arti: 'Sdr. Miller berencana dinas ke Osaka bulan depan.', jawaban: '予定', pilihan: ['予定', 'つもり', 'こと', 'もの'] },
  { id: 'b31-2-5', grup: 'bunpou', no: 2, soal: 'あした 京都へ ___ 予定です。', arti: 'Besok (saya) berencana pergi ke Kyoto.', jawaban: '行く', pilihan: ['行く', '行って', '行った', '行きます'] },

  // ── 文型 3 · まだ ＋ Kata Kerja Bentuk ていません ───────────────────
  { id: 'b31-3-1', grup: 'bunpou', no: 3, soal: '銀行は まだ 開いて ___。', arti: 'Bank belum buka.', jawaban: 'いません', pilihan: ['いません', 'います', 'いました', 'いましたか'] },
  { id: 'b31-3-2', grup: 'bunpou', no: 3, soal: 'レポートは もう 書きましたか。……いいえ、まだ ___。', arti: 'Apakah (Anda) sudah menulis laporan? ……Belum, belum menulis.', jawaban: '書いていません', pilihan: ['書いていません', '書きます', '書きました', '書きません'] },
  { id: 'b31-3-3', grup: 'bunpou', no: 3, soal: '昼ごはんは まだ ___。', arti: '(Saya) belum makan siang.', jawaban: '食べていません', pilihan: ['食べていません', '食べます', '食べました', '食べません'] },
  { id: 'b31-3-4', grup: 'bunpou', no: 3, soal: 'まだ そうじを ___。', arti: '(Saya) belum membersihkan.', jawaban: 'していません', pilihan: ['していません', 'します', 'しました', 'しません'] },
  { id: 'b31-3-5', grup: 'bunpou', no: 3, soal: 'A：もう レポートを 出しましたか。B：いいえ、まだ ___。', arti: 'A：Sudah menyerahkan laporan? B：Belum, belum menyerahkan.', jawaban: '出していません', pilihan: ['出していません', '出します', '出しました', '出しません'] },

  // ── 文型 4 · 踊ります ─ 踊り（bentuk ます sebagai Kata Benda） ───────
  { id: 'b31-4-1', grup: 'bunpou', no: 4, soal: '___の 新幹線は どこから 乗りますか。', arti: 'Naik dari mana Shinkansen pulang?', jawaban: '帰り', pilihan: ['帰り', '帰ります', '帰って', '帰る'] },
  { id: 'b31-4-2', grup: 'bunpou', no: 4, soal: '___は 何曜日ですか。', arti: 'Hari apa liburnya?', jawaban: '休み', pilihan: ['休み', '休みます', '休んで', '休む'] },
  { id: 'b31-4-3', grup: 'bunpou', no: 4, soal: '先生の ___を よく 聞いて ください。', arti: 'Dengarkan baik-baik penjelasan guru.', jawaban: '説明', pilihan: ['説明', '説明します', '説明して', '説明する'] },
  { id: 'b31-4-4', grup: 'bunpou', no: 4, soal: '友達からの ___が ありました。', arti: 'Ada ajakan dari teman.', jawaban: '誘い', pilihan: ['誘い', '誘います', '誘って', '誘う'] },
  { id: 'b31-4-5', grup: 'bunpou', no: 4, soal: 'A：趣味は 何ですか。B：音楽を 聞くのが ___です。', arti: 'A：Hobinya apa? B：Mendengarkan musik adalah kesenangan (saya).', jawaban: '楽しみ', pilihan: ['楽しみ', '楽しみます', '楽しく', '楽しい'] },

  // ── Catatan 1 · Bentuk Maksud（kalimat tanya Bentuk Biasa & ～ましょうか）────
  { id: 'b31-c1-1', grup: 'catatan', no: 1, soal: 'ちょっと ___？', arti: 'Bagaimana kalau (kita) beristirahat sebentar?', jawaban: '休まない', pilihan: ['休まない', '休みます', '休んで', '休んだ'] },
  { id: 'b31-c1-2', grup: 'catatan', no: 1, soal: '手伝おう___。', arti: 'Mari saya bantu?', jawaban: 'か', pilihan: ['か', 'ね', 'よ', 'の'] },
  { id: 'b31-c1-3', grup: 'catatan', no: 1, soal: '傘を 持って 行く___。', arti: 'Apakah (Anda) membawa payung?', jawaban: 'か', pilihan: ['か', 'ね', 'よ', 'わ'] },
  { id: 'b31-c1-4', grup: 'catatan', no: 1, soal: 'いっしょに 昼ごはんを ___？', arti: 'Bagaimana kalau kita makan siang bersama-sama?', jawaban: '食べない', pilihan: ['食べない', '食べます', '食べて', '食べた'] },
  { id: 'b31-c1-5', grup: 'catatan', no: 1, soal: 'A：ちょっと 休まない？B：うん、___。', arti: 'A：Bagaimana kalau istirahat sebentar? B：Ya, mari kita lakukan begitu.', jawaban: 'そうしよう', pilihan: ['そうしよう', 'そうです', 'そうですか', 'そうしません'] },

  // ── Catatan 2 · Bentuk Maksud 思っています（pembicara vs orang ketiga）──
  { id: 'b31-c2-1', grup: 'catatan', no: 2, soal: '今から 銀行へ ___と 思います。', arti: 'Sekarang (saya) mau pergi ke bank.', jawaban: '行こう', pilihan: ['行こう', '行く', '行って', '行った'] },
  { id: 'b31-c2-2', grup: 'catatan', no: 2, soal: '彼は 学校を ___と 思っています。', arti: 'Dia ingin membuat sekolah.', jawaban: '作ろう', pilihan: ['作ろう', '作る', '作って', '作った'] },
  { id: 'b31-c2-3', grup: 'catatan', no: 2, soal: '今から うちへ ___と 思います。', arti: 'Sekarang (saya) mau pulang ke rumah.', jawaban: '帰ろう', pilihan: ['帰ろう', '帰る', '帰って', '帰った'] },
  { id: 'b31-c2-4', grup: 'catatan', no: 2, soal: '彼は 日本語の 先生に ___と 思っています。', arti: 'Dia ingin menjadi guru bahasa Jepang.', jawaban: 'なろう', pilihan: ['なろう', 'なる', 'なって', 'なった'] },
  { id: 'b31-c2-5', grup: 'catatan', no: 2, soal: 'あしたは 早く ___と 思います。', arti: 'Besok (saya) bermaksud bangun pagi.', jawaban: '起きよう', pilihan: ['起きよう', '起きる', '起きて', '起きた'] },

  // ── Catatan 3 · つもりです（maksud yang pasti / tekad kukuh）──────────
  { id: 'b31-c3-1', grup: 'catatan', no: 3, soal: '国へ 帰っても、日本語の 勉強を 続ける ___です。', arti: 'Kalau pulang ke tanah air, (saya) bermaksud meneruskan belajar bahasa Jepang.', jawaban: 'つもり', pilihan: ['つもり', '予定', 'こと', 'もの'] },
  { id: 'b31-c3-2', grup: 'catatan', no: 3, soal: 'あしたからは たばこを 吸わない ___です。', arti: 'Mulai besok (saya) bermaksud tidak merokok.', jawaban: 'つもり', pilihan: ['つもり', '予定', 'ほう', 'よう'] },
  { id: 'b31-c3-3', grup: 'catatan', no: 3, soal: '来年 きっと 大学に 合格する ___です。', arti: 'Tahun depan (saya) berniat pasti lulus universitas.', jawaban: 'つもり', pilihan: ['つもり', 'かもしれません', 'でしょう', 'ほうがいい'] },
  { id: 'b31-c3-4', grup: 'catatan', no: 3, soal: '日本語を もっと ___ つもりです。', arti: '(Saya) berniat belajar bahasa Jepang lebih giat lagi.', jawaban: '勉強する', pilihan: ['勉強する', '勉強した', '勉強して', '勉強します'] },
  { id: 'b31-c3-5', grup: 'catatan', no: 3, soal: '毎日 ___ つもりです。', arti: '(Saya) berniat berolahraga setiap hari.', jawaban: '運動する', pilihan: ['運動する', '運動した', '運動して', '運動します'] },
]
