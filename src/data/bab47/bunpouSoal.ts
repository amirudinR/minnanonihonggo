import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 47 — tepat 5 soal per pola (3 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · 〜そうです（menyampaikan info dari pihak lain) ──────────
  { id: 'b47-1-1', grup: 'bunpou', no: 1, soal: '天気予報によると、あしたは 寒く ___ そうです。', arti: 'Menurut prakiraan cuaca, besok akan menjadi dingin.', jawaban: 'なる', pilihan: ['なる', 'なった', 'なって', 'なります'] },
  { id: 'b47-1-2', grup: 'bunpou', no: 1, soal: 'クララさんは 子どもの とき、フランスに ___ そうです。', arti: 'Katanya ketika sdr. Klara masih kecil, dia tinggal di Prancis.', jawaban: '住んで いた', pilihan: ['住んで いた', '住む', '住んで いる', '住みます'] },
  { id: 'b47-1-3', grup: 'bunpou', no: 1, soal: 'パリは とても ___ そうです。', arti: 'Katanya Paris sangat indah.', jawaban: 'きれいだ', pilihan: ['きれいだ', 'きれい', 'きれいな', 'きれいで'] },
  { id: 'b47-1-4', grup: 'bunpou', no: 1, soal: '新聞で 読んだんですが、1月に 日本語の スピーチ大会が ___ そうですよ。', arti: 'Saya baca di surat kabar, katanya pada bulan Januari ada lomba pidato bahasa Jepang.', jawaban: 'ある', pilihan: ['ある', 'あった', 'あって', 'あります'] },
  { id: 'b47-1-5', grup: 'bunpou', no: 1, soal: 'クララさんは 子どもの とき、フランスに 住んで いた ___。……それで フランス語も わかるんですね。', arti: 'Katanya ketika masih kecil, sdr. Klara tinggal di Prancis. ……Pantas, dia mengerti bahasa Prancis, ya.', jawaban: 'そうです', pilihan: ['そうです', 'ようです', 'はずです', 'ところです'] },

  // ── 文型 2 · 〜ようです（kesimpulan dari keadaan setempat) ───────────
  { id: 'b47-2-1', grup: 'bunpou', no: 2, soal: '人が 大勢 集まって います。……事故の ___。パトカーと 救急車が 来て いますよ。', arti: 'Orang berkumpul banyak. ……Rupanya kecelakaan. Mobil patrol dan ambulans sudah datang.', jawaban: 'ようですね', pilihan: ['ようですね', 'そうですね', 'はずですね', 'ところですね'] },
  { id: 'b47-2-2', grup: 'bunpou', no: 2, soal: 'にぎやかな 声が しますね。……ええ。パーティーでも して いる ___。', arti: 'Terdengar suara ramai, ya. ……Ya. Rupanya sedang berpesta.', jawaban: 'ようです', pilihan: ['ようです', 'そうです', 'はずです', 'ばかりです'] },
  { id: 'b47-2-3', grup: 'bunpou', no: 2, soal: 'せきも 出るし、頭も 痛いです。どうも かぜを ___ ようです。', arti: 'Batuk dan kepala juga sakit. Rupanya masuk angin.', jawaban: 'ひいた', pilihan: ['ひいた', 'ひく', 'ひいて', 'ひきます'] },
  { id: 'b47-2-4', grup: 'bunpou', no: 2, soal: 'A：あの 人、だれですか。B：さあ。でも、学生 ___ ようです。', arti: 'A：Orang itu siapa? B：Tidak tahu. Tapi rupanya mahasiswa.', jawaban: 'の', pilihan: ['の', 'だ', 'な', 'なの'] },
  { id: 'b47-2-5', grup: 'bunpou', no: 2, soal: '窓の 外が 暗いですから、___ ようですね。', arti: 'Karena di luar jendela gelap, rupanya sedang hujan.', jawaban: '雨が 降って いる', pilihan: ['雨が 降って いる', '雨が 降る', '雨が 降った', '雨が 降ります'] },

  // ── 文型 3 · 声／音／におい／味が します ───────────────────────────
  { id: 'b47-3-1', grup: 'bunpou', no: 3, soal: 'にぎやかな 声が ___ ね。……ええ。パーティーでも して いる ようです。', arti: 'Terdengar suara yang ramai, ya. ……Ya. Rupanya sedang berpesta.', jawaban: 'します', pilihan: ['します', 'あります', 'なります', 'います'] },
  { id: 'b47-3-2', grup: 'bunpou', no: 3, soal: 'いい ___ しますね。何か 作って いますか。', arti: 'Tercium bau yang enak, ya. Sedang membuat sesuatu?', jawaban: 'においが', pilihan: ['においが', 'においを', 'においに', 'においは'] },
  { id: 'b47-3-3', grup: 'bunpou', no: 3, soal: 'この ケーキは とても いい ___ します。', arti: 'Kue ini rasanya sangat enak.', jawaban: '味が', pilihan: ['味が', '味を', '味に', '味は'] },
  { id: 'b47-3-4', grup: 'bunpou', no: 3, soal: '静かですね。何も ___ しません。', arti: 'Tenang ya. Tidak terdengar bunyi apa pun.', jawaban: '音が', pilihan: ['音が', '音を', '音に', '音は'] },
  { id: 'b47-3-5', grup: 'bunpou', no: 3, soal: 'にぎやかな ___ しますね。', arti: 'Terdengar suara yang ramai, ya.', jawaban: '声が', pilihan: ['声が', '音が', '味が', 'においが'] },

  // ── Catatan 1 · そうです — Perhatian 1（beda dengan Pel.43) ──────────
  { id: 'b47-c1-1', grup: 'catatan', no: 1, soal: 'この 料理は ___ そうですね。（Saya dengar makanan ini enak.）', arti: 'Katanya makanan ini enak.', jawaban: 'おいしい', pilihan: ['おいしい', 'おいし', 'おいしくて', 'おいしさ'] },
  { id: 'b47-c1-2', grup: 'catatan', no: 1, soal: 'この 料理は ___ そうですね。（Kelihatannya makanan ini enak.）', arti: 'Kelihatannya makanan ini enak.', jawaban: 'おいし', pilihan: ['おいし', 'おいしい', 'おいしく', 'おいしいの'] },
  { id: 'b47-c1-3', grup: 'catatan', no: 1, soal: '雨が ___ そうです。（Katanya hujan turun.）', arti: 'Katanya hujan turun.', jawaban: '降る', pilihan: ['降る', '降り', '降って', '降った'] },
  { id: 'b47-c1-4', grup: 'catatan', no: 1, soal: '雨が ___ そうです。（Kelihatannya mau hujan.）', arti: 'Kelihatannya mau hujan.', jawaban: '降り', pilihan: ['降り', '降る', '降って', '降った'] },
  { id: 'b47-c1-5', grup: 'catatan', no: 1, soal: 'A：あしたの 天気は どうですか。B：天気予報によると、___ そうです。', arti: 'A：Bagaimana cuaca besok? B：Menurut prakiraan cuaca, katanya akan menjadi dingin.', jawaban: '寒く なる', pilihan: ['寒く なる', '寒い', '寒く なって', '寒く なった'] },

  // ── Catatan 2 · そうです（desde-desus）vs 〜と 言って いました ──────
  { id: 'b47-c2-1', grup: 'catatan', no: 2, soal: 'ミラーさんは あした 京都へ ___ そうです。', arti: 'Katanya sdr. Miller pergi ke Kyoto besok.', jawaban: '行く', pilihan: ['行く', '行った', '行って', '行きます'] },
  { id: 'b47-c2-2', grup: 'catatan', no: 2, soal: 'ミラーさんは あした 京都へ 行く と ___。', arti: 'Sdr. Miller berkata bahwa dia pergi ke Kyoto besok.', jawaban: '言って いました', pilihan: ['言って いました', '言いました', '話しました', '聞きました'] },
  { id: 'b47-c2-3', grup: 'catatan', no: 2, soal: '新聞で 読んだんですが、1月に スピーチ大会が ある ___ よ。', arti: 'Saya baca di surat kabar, katanya pada bulan Januari ada lomba pidato.', jawaban: 'そうです', pilihan: ['そうです', 'ようです', 'はずです', 'ばかりです'] },
  { id: 'b47-c2-4', grup: 'catatan', no: 2, soal: 'テレビの ニュースで 聞きましたが、あしたは 雪が ___ そうです。', arti: 'Saya dengar dari berita TV, katanya besok turun salju.', jawaban: '降る', pilihan: ['降る', '降り', '降って', '降った'] },
  { id: 'b47-c2-5', grup: 'catatan', no: 2, soal: 'ミラーさんは あした 京都へ 行く ___ 言って いました。', arti: 'Sdr. Miller berkata bahwa dia pergi ke Kyoto besok.', jawaban: 'と', pilihan: ['と', 'を', 'が', 'に'] },

  // ── Catatan 3 · そうです（Pel.43）と ようです — Perhatian ───────────
  { id: 'b47-c3-1', grup: 'catatan', no: 3, soal: 'ミラーさんは ___ そうです。（Sdr. Miller kelihatan sibuk.）', arti: 'Sdr. Miller kelihatan sibuk.', jawaban: '忙し', pilihan: ['忙し', '忙しい', '忙しく', '忙しいの'] },
  { id: 'b47-c3-2', grup: 'catatan', no: 3, soal: 'ミラーさんは ___ ようです。（Rupanya sdr. Miller sibuk.）', arti: 'Rupanya sdr. Miller sibuk.', jawaban: '忙しい', pilihan: ['忙しい', '忙し', '忙しく', '忙しくて'] },
  { id: 'b47-c3-3', grup: 'catatan', no: 3, soal: '人が 大勢 集まって います。……事故の ___。', arti: 'Orang berkumpul banyak. ……Rupanya kecelakaan.', jawaban: 'ようですね', pilihan: ['ようですね', 'そうですね', 'はずですね', 'つもりですね'] },
  { id: 'b47-c3-4', grup: 'catatan', no: 3, soal: 'A：あの 人、元気が ありませんね。B：ええ。___ ようです。', arti: 'A：Orang itu kelihatan tidak bersemangat. B：Ya. Rupanya dia lelah.', jawaban: '疲れて いる', pilihan: ['疲れて いる', '疲れる', '疲れた', '疲れます'] },
  { id: 'b47-c3-5', grup: 'catatan', no: 3, soal: 'せきも 出るし、頭も 痛い。どうも かぜを ひいた ___。', arti: 'Batuk dan kepala juga sakit. Rupanya masuk angin.', jawaban: 'ようだ', pilihan: ['ようだ', 'そうだ', 'はずだ', 'つもりだ'] },
]
