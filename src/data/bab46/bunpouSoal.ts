import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 46 — tepat 5 soal per pola (3 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · 〜ところです（Kata Kerja Bentuk Kamus = baru mau mulai) ───
  { id: 'b46-1-1', grup: 'bunpou', no: 1, soal: '昼ごはんは もう 食べましたか。……いいえ、これから ___ ところです。', arti: 'Sudah makan siang? ……Belum, baru mau makan sekarang.', jawaban: '食べる', pilihan: ['食べる', '食べた', '食べて', '食べます'] },
  { id: 'b46-1-2', grup: 'bunpou', no: 1, soal: '会議は もう 始まりましたか。……いいえ、今から ___ ところです。', arti: 'Rapat sudah dimulai? ……Belum, baru mau dimulai sekarang.', jawaban: '始まる', pilihan: ['始まる', '始まった', '始まって', '始まります'] },
  { id: 'b46-1-3', grup: 'bunpou', no: 1, soal: 'もしもし 田中ですが、今 いいでしょうか。……すみません。今から ___ ところなんです。', arti: 'Halo, Tanaka di sini, boleh mengganggu sebentar? ……Maaf. Sekarang mau keluar.', jawaban: '出かける', pilihan: ['出かける', '出かけた', '出かけて', '出かけます'] },
  { id: 'b46-1-4', grup: 'bunpou', no: 1, soal: 'これから 電車に ___ ところです。', arti: 'Baru mau naik kereta sekarang.', jawaban: '乗る', pilihan: ['乗る', '乗った', '乗って', '乗ります'] },
  { id: 'b46-1-5', grup: 'bunpou', no: 1, soal: '会議は 今から 始まる ___。', arti: 'Rapat baru mau dimulai sekarang.', jawaban: 'ところです', pilihan: ['ところです', 'つもりです', 'はずです', 'ばかりです'] },

  // ── 文型 2 · Kata Kerja Bentuk た ばかりです ──────────────────────────
  { id: 'b46-2-1', grup: 'bunpou', no: 2, soal: 'さっき 昼ごはんを ___ ばかりです。', arti: 'Tadi baru makan siang.', jawaban: '食べた', pilihan: ['食べた', '食べる', '食べて', '食べます'] },
  { id: 'b46-2-2', grup: 'bunpou', no: 2, soal: '木村さんは 先月 この 会社に ___ ばかりです。', arti: 'Sdr. Kimura baru masuk ke perusahaan ini bulan lalu.', jawaban: '入った', pilihan: ['入った', '入る', '入って', '入ります'] },
  { id: 'b46-2-3', grup: 'bunpou', no: 2, soal: 'この ビデオは 先週 ___ ばかりなのに、調子が おかしいです。', arti: 'Video player ini kondisinya kurang baik, padahal baru dibeli minggu lalu.', jawaban: '買った', pilihan: ['買った', '買う', '買って', '買います'] },
  { id: 'b46-2-4', grup: 'bunpou', no: 2, soal: '彼は 3月に 大学を ___ ばかりです。', arti: 'Dia baru lulus universitas pada bulan Maret.', jawaban: '卒業した', pilihan: ['卒業した', '卒業する', '卒業して', '卒業します'] },
  { id: 'b46-2-5', grup: 'bunpou', no: 2, soal: '仕事は どうですか。……先月 会社に 入った ___ ですから、まだ よく わかりません。', arti: 'Bagaimana pekerjaannya? ……Karena baru masuk perusahaan bulan lalu, belum begitu tahu.', jawaban: 'ばかり', pilihan: ['ばかり', 'ところ', 'はず', 'ぐらい'] },

  // ── 文型 3 · 〜はずです（kepastian berdasarkan bukti) ────────────────
  { id: 'b46-3-1', grup: 'bunpou', no: 3, soal: 'ミラーさんは きょう 来るでしょうか。……来る ___ですよ。きのう 電話が ありましたから。', arti: 'Apakah sdr. Miller datang hari ini? ……Harusnya datang. Sebab kemarin dia menelepon.', jawaban: 'はず', pilihan: ['はず', 'つもり', 'らしい', 'よう'] },
  { id: 'b46-3-2', grup: 'bunpou', no: 3, soal: '書類は 速達で 出しましたから、あした ___ はずです。', arti: 'Karena dokumen dikirim dengan pos kilat, seharusnya besok sampai.', jawaban: '着く', pilihan: ['着く', '着いた', '着いて', '着きます'] },
  { id: 'b46-3-3', grup: 'bunpou', no: 3, soal: 'テレサの 熱は 下がるでしょうか。……今 注射を しましたから、3時間後には 下がる ___。', arti: 'Apakah demam Teresa sudah turun? ……Karena baru diberi suntikan, seharusnya turun dalam 3 jam.', jawaban: 'はずです', pilihan: ['はずです', 'ばかりです', 'ところです', 'つもりです'] },
  { id: 'b46-3-4', grup: 'bunpou', no: 3, soal: 'ミラーさんは きょう 来るでしょうか。……いいえ、きのう 電話が ありませんでしたから、___ はずです。', arti: 'Apakah sdr. Miller datang hari ini? ……Tidak, seharusnya tidak datang. Sebab kemarin tidak ada telepon.', jawaban: '来ない', pilihan: ['来ない', '来る', '来た', '来て'] },
  { id: 'b46-3-5', grup: 'bunpou', no: 3, soal: 'A：この 道で いいでしょうか。B：ええ、この 道で いい ___です。地図で 確かめましたから。', arti: 'A：Apakah jalan ini benar? B：Ya, seharusnya jalan ini benar. Karena saya sudah memastikan lewat peta.', jawaban: 'はず', pilihan: ['はず', 'つもり', 'らしい', 'よう'] },

  // ── Catatan 1 · 〜ところです（Kamus／ている／た ＋ ところです) ────────
  { id: 'b46-c1-1', grup: 'catatan', no: 1, soal: '故障の 原因は わかりましたか。……いいえ、今 調べて ___ ところです。', arti: 'Apakah sudah jelas penyebab kerusakannya? ……Belum, sekarang sedang diperiksa.', jawaban: 'いる', pilihan: ['いる', 'いた', 'いて', 'います'] },
  { id: 'b46-c1-2', grup: 'catatan', no: 1, soal: '渡辺さんは いますか。……あ、たった今 ___ ところです。', arti: 'Apakah ada sdr. Watanabe? ……Ah, baru saja pulang.', jawaban: '帰った', pilihan: ['帰った', '帰る', '帰って', '帰ります'] },
  { id: 'b46-c1-3', grup: 'catatan', no: 1, soal: 'たった今 バスが ___ ところです。', arti: 'Baru saja bus berangkat.', jawaban: '出た', pilihan: ['出た', '出る', '出て', '出ます'] },
  { id: 'b46-c1-4', grup: 'catatan', no: 1, soal: 'もしもし 田中ですが、今 いいでしょうか。……すみません。今から ___ ところなんです。', arti: 'Halo, saya Tanaka, boleh mengganggu sebentar? ……Maaf. Sekarang mau keluar.', jawaban: '出かける', pilihan: ['出かける', '出かけた', '出かけて', '出かけます'] },
  { id: 'b46-c1-5', grup: 'catatan', no: 1, soal: 'A：今 何を して いますか。B：昼ごはんを ___ ところです。', arti: 'A：Sekarang sedang melakukan apa? B：Sedang makan siang.', jawaban: '食べて いる', pilihan: ['食べて いる', '食べる', '食べた', '食べます'] },

  // ── Catatan 2 · Kata Kerja Bentuk た ばかりです ──────────────────────
  { id: 'b46-c2-1', grup: 'catatan', no: 2, soal: 'さっき 昼ごはんを 食べた ___。', arti: 'Tadi baru makan siang.', jawaban: 'ばかりです', pilihan: ['ばかりです', 'ところです', 'はずです', 'つもりです'] },
  { id: 'b46-c2-2', grup: 'catatan', no: 2, soal: 'A：日本語が とても 上手ですね。B：いいえ、まだ 勉強を ___ ばかりです。', arti: 'A：Bahasa Jepangnya sangat bagus ya. B：Tidak, saya baru mulai belajar.', jawaban: '始めた', pilihan: ['始めた', '始める', '始めて', '始めます'] },
  { id: 'b46-c2-3', grup: 'catatan', no: 2, soal: 'A：ミラーさんは もう 帰りましたか。B：ええ、たった今 ___ ばかりです。', arti: 'A：Apakah sdr. Miller sudah pulang? B：Ya, baru saja pulang.', jawaban: '帰った', pilihan: ['帰った', '帰る', '帰って', '帰ります'] },
  { id: 'b46-c2-4', grup: 'catatan', no: 2, soal: 'A：その カメラ、新しいですね。B：ええ、先月 ___ ばかりです。', arti: 'A：Kamera itu baru ya. B：Ya, baru membelinya bulan lalu.', jawaban: '買った', pilihan: ['買った', '買う', '買って', '買います'] },
  { id: 'b46-c2-5', grup: 'catatan', no: 2, soal: 'A：仕事は どうですか。B：先月 会社に 入った ___ ですから、まだ よく わかりません。', arti: 'A：Bagaimana pekerjaannya? B：Karena baru masuk perusahaan bulan lalu, belum begitu tahu.', jawaban: 'ばかり', pilihan: ['ばかり', 'ところ', 'はず', 'まで'] },

  // ── Catatan 3 · 〜はずです（Kamus／ない／Kata Sifat／Kata Benda の) ──
  { id: 'b46-c3-1', grup: 'catatan', no: 3, soal: 'ミラーさんは きょう 来るでしょうか。……来る ___。きのう 電話が ありましたから。', arti: 'Apakah sdr. Miller datang hari ini? ……Harusnya datang. Sebab kemarin dia menelepon.', jawaban: 'はずですよ', pilihan: ['はずですよ', 'ばかりですよ', 'ところですよ', 'つもりですよ'] },
  { id: 'b46-c3-2', grup: 'catatan', no: 3, soal: 'A：あした 田中さんは 来ますか。B：ええ、___ はずです。きのう 連絡が ありましたから。', arti: 'A：Apakah besok sdr. Tanaka datang? B：Ya, seharusnya datang. Sebab kemarin ada kabar.', jawaban: '来る', pilihan: ['来る', '来た', '来て', '来ます'] },
  { id: 'b46-c3-3', grup: 'catatan', no: 3, soal: 'この 本は おもしろいですか。……ええ、とても おもしろい ___です。', arti: 'Apakah buku ini menarik? ……Ya, seharusnya sangat menarik.', jawaban: 'はず', pilihan: ['はず', 'つもり', 'らしい', 'よう'] },
  { id: 'b46-c3-4', grup: 'catatan', no: 3, soal: '荷物は あした 着くでしょうか。……速達で 出しましたから、あした ___ はずです。', arti: 'Apakah paketnya sampai besok? ……Karena dikirim dengan pos kilat, seharusnya besok sampai.', jawaban: '届く', pilihan: ['届く', '届いた', '届いて', '届きます'] },
  { id: 'b46-c3-5', grup: 'catatan', no: 3, soal: 'A：あの 人は 日本人ですか。B：いいえ、中国人の ___ です。日本語が とても 上手ですから。', arti: 'A：Apakah orang itu orang Jepang? B：Tidak, seharusnya orang Tiongkok. Karena bahasa Jepangnya sangat bagus.', jawaban: 'はず', pilihan: ['はず', 'ところ', 'ばかり', 'つもり'] },
]
