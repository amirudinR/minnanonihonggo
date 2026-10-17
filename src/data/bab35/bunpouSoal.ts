import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 35 — tepat 5 soal per pola (3 pola 文型 + 6 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · 〜になれば、〜 ────────────────────────────────────────
  { id: 'b35-1-1', grup: 'bunpou', no: 1, soal: '春に ___、桜が 咲きます。', arti: 'Jika musim semi tiba, sakura akan mekar.', jawaban: 'なれば', pilihan: ['なれば', 'なる', 'なって', 'なった'] },
  { id: 'b35-1-2', grup: 'bunpou', no: 1, soal: '夏に ___、海で 泳ぎます。', arti: 'Jika musim panas tiba, (saya) berenang di laut.', jawaban: 'なれば', pilihan: ['なれば', 'なる', 'なって', 'なった'] },
  { id: 'b35-1-3', grup: 'bunpou', no: 1, soal: '12月に ___、とても 寒く なります。', arti: 'Jika bulan Desember tiba, akan menjadi sangat dingin.', jawaban: 'なれば', pilihan: ['なれば', 'なる', 'なって', 'なった'] },
  { id: 'b35-1-4', grup: 'bunpou', no: 1, soal: '元気に ___、何でも できます。', arti: 'Kalau sehat, apa pun bisa dilakukan.', jawaban: 'なれば', pilihan: ['なれば', 'なる', 'なって', 'なった'] },
  { id: 'b35-1-5', grup: 'bunpou', no: 1, soal: '子どもが ___、この 家は 静かに なります。', arti: 'Kalau anak-anak sudah besar, rumah ini akan menjadi sunyi.', jawaban: '大きくなれば', pilihan: ['大きくなれば', '大きいなら', '大きいと', '大きいから'] },

  // ── 文型 2 · 〜ければ、〜 ──────────────────────────────────────────
  { id: 'b35-2-1', grup: 'bunpou', no: 2, soal: '天気が ___、向こうに 島が 見えます。', arti: 'Kalau cuaca baik, pulau terlihat di sebelah sana.', jawaban: 'よければ', pilihan: ['よければ', 'いい', 'よくて', 'よかった'] },
  { id: 'b35-2-2', grup: 'bunpou', no: 2, soal: '物価が ___、もっと いいなと 思います。', arti: 'Kalau harga barang sedikit murah, (saya) rasa akan lebih baik.', jawaban: '安ければ', pilihan: ['安ければ', '安い', '安くて', '安かった'] },
  { id: 'b35-2-3', grup: 'bunpou', no: 2, soal: 'ボタンを ___、窓が 開きます。', arti: 'Kalau menekan tombol, jendelanya terbuka.', jawaban: '押せば', pilihan: ['押せば', '押す', '押して', '押した'] },
  { id: 'b35-2-4', grup: 'bunpou', no: 2, soal: '天気が ___、ピクニックに 行きません。', arti: 'Kalau cuaca tidak baik, (saya) tidak pergi piknik.', jawaban: 'よくなければ', pilihan: ['よくなければ', 'よくない', 'よくなかった', 'よくなくて'] },
  { id: 'b35-2-5', grup: 'bunpou', no: 2, soal: 'あした 時間が ___、うちへ 来て ください。', arti: 'Kalau besok ada waktu, silakan datang ke rumah saya.', jawaban: 'あれば', pilihan: ['あれば', 'ある', 'あって', 'あった'] },

  // ── 文型 3 · 〜なら、〜 ────────────────────────────────────────────
  { id: 'b35-3-1', grup: 'bunpou', no: 3, soal: '北海道旅行___、6月が いいです。', arti: 'Kalau bepergian ke Hokkaido, yang cocok adalah bulan Juni.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },
  { id: 'b35-3-2', grup: 'bunpou', no: 3, soal: 'スキー___、北海道が いいですよ。', arti: 'Kalau ski, Hokkaido yang bagus.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },
  { id: 'b35-3-3', grup: 'bunpou', no: 3, soal: '2、3日___、箱根か 日光が いいなと 思います。', arti: 'Kalau (waktunya) dua, tiga hari, saya rasa bagusnya Hakone atau Nikko.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },
  { id: 'b35-3-4', grup: 'bunpou', no: 3, soal: '京都___、秋が いちばん きれいです。', arti: 'Kalau Kyoto, musim gugur paling indah.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },
  { id: 'b35-3-5', grup: 'bunpou', no: 3, soal: 'A：旅行は いつが いいですか。B：北海道___、夏が いいです。', arti: 'A：Kapan sebaiknya berjalan-jalan? B：Kalau Hokkaido, musim panas bagus.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },

  // ── Catatan 1 · Cara membuat Bentuk Syarat (konjugasi) ───────────────
  { id: 'b35-c1-1', grup: 'catatan', no: 1, soal: '「書きます」の Bentuk Syarat は 「書け___」です。', arti: 'Bentuk Syarat dari "kakimasu" adalah "kakeba".', jawaban: 'ば', pilihan: ['ば', 'れば', 'なら', 'たら'] },
  { id: 'b35-c1-2', grup: 'catatan', no: 1, soal: '「食べます」の Bentuk Syarat は 「食べれ___」です。', arti: 'Bentuk Syarat dari "tabemasu" adalah "tabereba".', jawaban: 'ば', pilihan: ['ば', 'れば', 'なら', 'たら'] },
  { id: 'b35-c1-3', grup: 'catatan', no: 1, soal: '「します」の Bentuk Syarat は 「___」です。', arti: 'Bentuk Syarat dari "shimasu" adalah "sureba".', jawaban: 'すれば', pilihan: ['すれば', 'しれば', 'しるなら', 'します'] },
  { id: 'b35-c1-4', grup: 'catatan', no: 1, soal: '「来ます」の Bentuk Syarat は 「___」です。', arti: 'Bentuk Syarat dari "kimasu" adalah "kureba".', jawaban: 'くれば', pilihan: ['くれば', 'きれば', 'くるなら', 'きます'] },
  { id: 'b35-c1-5', grup: 'catatan', no: 1, soal: '「行きません」の Bentuk Syarat は 「___」です。', arti: 'Bentuk Syarat dari "ikimasen" adalah "ikanakereba".', jawaban: 'いかなければ', pilihan: ['いかなければ', 'いかないれば', 'いかなくなら', 'いきません'] },

  // ── Catatan 2 · Bentuk Syarat、〜 ─────────────────────────────────
  { id: 'b35-c2-1', grup: 'catatan', no: 2, soal: 'この ボタンを ___、ドアが 開きます。', arti: 'Kalau menekan tombol ini, pintunya terbuka.', jawaban: '押せば', pilihan: ['押せば', '押す', '押して', '押した'] },
  { id: 'b35-c2-2', grup: 'catatan', no: 2, soal: 'あしたまでに レポートを ___ なりませんか。', arti: 'Apakah (saya) harus menyerahkan laporan sampai dengan besok?', jawaban: '出さなければ', pilihan: ['出さなければ', '出せば', '出さないなら', '出すなら'] },
  { id: 'b35-c2-3', grup: 'catatan', no: 2, soal: 'ボールペンが ___、鉛筆で 書いて ください。', arti: 'Kalau tidak ada bolpoin, silakan menulis dengan pensil.', jawaban: 'なければ', pilihan: ['なければ', 'ありません', 'あって', 'あった'] },
  { id: 'b35-c2-4', grup: 'catatan', no: 2, soal: '時間が ___、あした また 来て ください。', arti: 'Kalau tidak ada waktu, silakan datang lagi besok.', jawaban: 'なければ', pilihan: ['なければ', 'ありません', 'あると', 'あって'] },
  { id: 'b35-c2-5', grup: 'catatan', no: 2, soal: '鉛筆___ 書いて ください。', arti: 'Silakan menulis dengan pensil.', jawaban: 'で', pilihan: ['で', 'に', 'を', 'と'] },

  // ── Catatan 3 · 〜たら ────────────────────────────────────────────
  { id: 'b35-c3-1', grup: 'catatan', no: 3, soal: '東京へ ___、ぜひ 連絡して ください。', arti: 'Kalau datang ke Tokyo, silakan hubungi (saya).', jawaban: '来たら', pilihan: ['来たら', '来る', '来て', '来た'] },
  { id: 'b35-c3-2', grup: 'catatan', no: 3, soal: 'ここを ___、ドアが 開きます。', arti: 'Kalau menekan di sini, pintunya terbuka.', jawaban: '押すと', pilihan: ['押すと', '押して', '押した', '押します'] },
  { id: 'b35-c3-3', grup: 'catatan', no: 3, soal: '田中さんが 東京へ ___、わたしは 会いに 行きます。', arti: 'Kalau sdr. Tanaka datang ke Tokyo, saya pergi bertemu.', jawaban: '来れば', pilihan: ['来れば', '来ます', '来て', '来た'] },
  { id: 'b35-c3-4', grup: 'catatan', no: 3, soal: '時間が ___、映画を 見に 行きます。', arti: 'Kalau ada waktu, (saya) pergi menonton film.', jawaban: 'あったら', pilihan: ['あったら', 'ある', 'あって', 'あった'] },
  { id: 'b35-c3-5', grup: 'catatan', no: 3, soal: '雨が ___、ピクニックに 行きません。', arti: 'Kalau turun hujan, (saya) tidak pergi piknik.', jawaban: '降ったら', pilihan: ['降ったら', '降る', '降って', '降った'] },

  // ── Catatan 4 · Kata Tanya ＋ Kata Kerja Bentuk Syarat ＋ いいですか ───
  { id: 'b35-c4-1', grup: 'catatan', no: 4, soal: '本を 借りたいんですが、どう ___ いいですか。', arti: '(Saya) ingin meminjam buku, bagaimana caranya?', jawaban: 'すれば', pilihan: ['すれば', 'する', 'した', 'して'] },
  { id: 'b35-c4-2', grup: 'catatan', no: 4, soal: '受付で カードを ___ いいです。', arti: 'Sebaiknya (Anda) membuat kartu di meja informasi.', jawaban: '作れば', pilihan: ['作れば', '作る', '作った', '作って'] },
  { id: 'b35-c4-3', grup: 'catatan', no: 4, soal: 'どこへ ___ いいですか。', arti: 'Sebaiknya (saya) pergi ke mana?', jawaban: '行けば', pilihan: ['行けば', '行く', '行った', '行って'] },
  { id: 'b35-c4-4', grup: 'catatan', no: 4, soal: '電話を かけたいんですが、どう ___ いいですか。', arti: '(Saya) ingin menelepon, bagaimana caranya?', jawaban: 'したら', pilihan: ['したら', 'する', 'した', 'して'] },
  { id: 'b35-c4-5', grup: 'catatan', no: 4, soal: 'A：申し込みたいんですが、どう ___ いいですか。B：事務所で 申し込んで ください。', arti: 'A：(Saya) ingin mendaftar, bagaimana caranya? B：Silakan mendaftar di kantor.', jawaban: 'すれば', pilihan: ['すれば', 'する', 'した', 'して'] },

  // ── Catatan 5 · Kata Benda なら、〜 ─────────────────────────────────
  { id: 'b35-c5-1', grup: 'catatan', no: 5, soal: 'A：温泉に 行きたいんですが、どこが いいですか。B：温泉___、馬場が いいですよ。', arti: 'A：(Saya) ingin pergi ke pemandian air panas, yang bagus di mana? B：Kalau pemandian air panas, Hakuba yang bagus.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },
  { id: 'b35-c5-2', grup: 'catatan', no: 5, soal: 'A：2、3日 旅行を しようと 思っているんですが。B：2、3日___、箱根か 日光が いいと 思います。', arti: 'A：(Saya) berpikir mau berjalan-jalan dua, tiga hari. B：Kalau dua, tiga hari, saya rasa bagusnya Hakone atau Nikko.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },
  { id: 'b35-c5-3', grup: 'catatan', no: 5, soal: 'A：いい 店を 知りませんか。B：あの 店___、カレーが おいしいですよ。', arti: 'A：Apakah tahu restoran bagus? B：Kalau restoran itu, karinya enak.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },
  { id: 'b35-c5-4', grup: 'catatan', no: 5, soal: 'A：切符は どこで 買いますか。B：切符___、あそこの 窓口で 買って ください。', arti: 'A：Tiket dibeli di mana? B：Kalau tiket, silakan beli di loket sana.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },
  { id: 'b35-c5-5', grup: 'catatan', no: 5, soal: 'A：京都へ 行きたいんですが、いつが いいですか。B：京都___、11月が いいです。', arti: 'A：(Saya) ingin ke Kyoto, kapan sebaiknya? B：Kalau Kyoto, bulan November bagus.', jawaban: 'なら', pilihan: ['なら', 'とは', 'には', 'から'] },

  // ── Catatan 6 · 〜は ありませんか（Kalimat Tanya Negatif）────────────
  { id: 'b35-c6-1', grup: 'catatan', no: 6, soal: 'どこか いい 所は ___か。', arti: 'Apakah ada suatu tempat yang bagus?', jawaban: 'ありません', pilihan: ['ありません', 'あります', 'ありませんでした', 'ありました'] },
  { id: 'b35-c6-2', grup: 'catatan', no: 6, soal: 'A：どこか いい 所は ありませんか。B：はい、___。', arti: 'A：Apakah ada suatu tempat yang bagus? B：Ya, ada.', jawaban: 'あります', pilihan: ['あります', 'ありません', 'ありました', 'ありませんでした'] },
  { id: 'b35-c6-3', grup: 'catatan', no: 6, soal: 'A：コーヒーは ありませんか。B：いいえ、___。', arti: 'A：Apakah tidak ada kopi? B：Tidak, tidak ada.', jawaban: 'ありません', pilihan: ['ありません', 'あります', 'ありました', 'ありませんでした'] },
  { id: 'b35-c6-4', grup: 'catatan', no: 6, soal: 'A：安い 店は ありませんか。B：はい、___よ。', arti: 'A：Apakah tidak ada toko yang murah? B：Ya, ada.', jawaban: 'あります', pilihan: ['あります', 'ありません', 'ありました', 'ありませんでした'] },
  { id: 'b35-c6-5', grup: 'catatan', no: 6, soal: 'A：この 近くに 銀行は ___か。B：ええ、駅の 前に ありますよ。', arti: 'A：Apakah tidak ada bank di dekat sini? B：Ya, ada di depan stasiun.', jawaban: 'ありません', pilihan: ['ありません', 'あります', 'ありませんでした', 'ありました'] },
]
