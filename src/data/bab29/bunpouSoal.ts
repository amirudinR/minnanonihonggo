import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 29 — tepat 5 soal per pola (3 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Kerja Bentuk ています（keadaan akibat aksi） ─────
  { id: 'b29-1-1', grup: 'bunpou', no: 1, soal: '窓___ 割れています。', arti: 'Kaca jendela pecah.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b29-1-2', grup: 'bunpou', no: 1, soal: '電気が ___。', arti: 'Lampunya menyala.', jawaban: 'ついています', pilihan: ['ついています', 'つきます', 'つきました', 'つけます'] },
  { id: 'b29-1-3', grup: 'bunpou', no: 1, soal: 'この いず___ 壊れています。', arti: 'Kursi ini rusak.', jawaban: 'は', pilihan: ['は', 'が', 'を', 'に'] },
  { id: 'b29-1-4', grup: 'bunpou', no: 1, soal: '会議室の カギが ___ね。', arti: 'Ruang rapat terkunci, ya.', jawaban: '掛かっています', pilihan: ['掛かっています', '掛かります', '掛けました', '掛けます'] },
  { id: 'b29-1-5', grup: 'bunpou', no: 1, soal: 'この ファクス、使っても いいですか。……それは ___から、あちらの を 使って ください。', arti: 'Boleh memakai faks ini? ……Itu rusak, silakan memakai yang itu.', jawaban: '故障しています', pilihan: ['故障しています', '故障します', '故障しました', '故障して いました'] },

  // ── 文型 2 · Kata Kerja Bentuk てしまいました／しまいます ─────────
  { id: 'b29-2-1', grup: 'bunpou', no: 2, soal: 'シュミットさんが 持って 来た ワインは みんなで 全部 飲んで ___。', arti: 'Anggur yang dibawa oleh sdr. Schmidt telah diminum oleh semuanya.', jawaban: 'しまいました', pilihan: ['しまいました', 'います', 'あります', 'おきます'] },
  { id: 'b29-2-2', grup: 'bunpou', no: 2, soal: '漢字の 宿題は もう ___ しまいました。', arti: 'PR mengenai huruf Kanji telah saya selesaikan.', jawaban: 'やって', pilihan: ['やって', 'やる', 'やった', 'やります'] },
  { id: 'b29-2-3', grup: 'bunpou', no: 2, soal: 'パスポートを ___ しまいました。', arti: '(Saya) kehilangan paspor.', jawaban: 'なくして', pilihan: ['なくして', 'なくす', 'なくした', 'なくします'] },
  { id: 'b29-2-4', grup: 'bunpou', no: 2, soal: 'パソコンが ___ しまいました。', arti: 'PC rusak.', jawaban: '故障して', pilihan: ['故障して', '故障する', '故障した', '故障します'] },
  { id: 'b29-2-5', grup: 'bunpou', no: 2, soal: '盆ごはんまでに レポートを ___ しまいます。', arti: 'Sampai dengan makan siang, saya akan menyelesaikan menulis laporan.', jawaban: '書いて', pilihan: ['書いて', '書く', '書いた', '書きます'] },

  // ── 文型 3 · Kata Benda（Tempat）に 行きます／来ます／帰ります ─────
  { id: 'b29-3-1', grup: 'bunpou', no: 3, soal: 'あした 京都___ 行きます。', arti: 'Besok pergi ke Kyoto.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'が'] },
  { id: 'b29-3-2', grup: 'bunpou', no: 3, soal: 'ミラーさんは うち___ 帰りました。', arti: 'Sdr. Miller pulang ke rumah.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'が'] },
  { id: 'b29-3-3', grup: 'bunpou', no: 3, soal: 'A：どこ___ 行きますか。B：デパートへ 行きます。', arti: 'A：Pergi ke mana? B：Pergi ke department store.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'が'] },
  { id: 'b29-3-4', grup: 'bunpou', no: 3, soal: 'A：あした どこへ 行きますか。B：京都に ___。', arti: 'A：Besok pergi ke mana? B：Pergi ke Kyoto.', jawaban: '行きます', pilihan: ['行きます', '行きました', '来ます', '帰ります'] },
  { id: 'b29-3-5', grup: 'bunpou', no: 3, soal: '国___ 帰ります。', arti: 'Pulang ke negara asal.', jawaban: 'に', pilihan: ['に', 'を', 'で', 'が'] },

  // ── Catatan 1 · それ／その／そう ────────────────────────────────
  { id: 'b29-c1-1', grup: 'catatan', no: 1, soal: 'どこかで 財布を 落として しまったんです。……___ は 大変ですね。', arti: 'Dompet saya terjatuh di suatu tempat. ……Itu susah, ya.', jawaban: 'それ', pilihan: ['それ', 'その', 'そう', 'あれ'] },
  { id: 'b29-c1-2', grup: 'catatan', no: 1, soal: '来月から 大阪の 本社に 転勤なんです。……___ は おめでとう ございます。', arti: 'Mulai bulan depan saya pindah ke kantor pusat di Osaka. ……Oh, saya ucapkan selamat!', jawaban: 'それ', pilihan: ['それ', 'その', 'そう', 'どれ'] },
  { id: 'b29-c1-3', grup: 'catatan', no: 1, soal: 'A：途中で やめたい 場合は？B：___ 場合は、近くの 係員に 名前を 言って ください。', arti: 'A：Kalau mau berhenti setengah jalan? B：Untuk masalah itu, beritahukan nama kepada staf terdekat.', jawaban: 'その', pilihan: ['その', 'それ', 'そう', 'あの'] },
  { id: 'b29-c1-4', grup: 'catatan', no: 1, soal: 'うちへ 帰って、休んだ ほうが いいですよ。……ええ、___ します。', arti: 'Lebih baik pulang ke rumah dan beristirahat. ……Ya, saya akan begitu.', jawaban: 'そう', pilihan: ['そう', 'それ', 'その', 'あの'] },
  { id: 'b29-c1-5', grup: 'catatan', no: 1, soal: 'A：財布を なくして しまったんです。B：それは ___ ですね。すぐ 交番に 行きましょう。', arti: 'A：Saya kehilangan dompet. B：Itu susah, ya. Ayo segera pergi ke pos polisi.', jawaban: '大変', pilihan: ['大変', '元気', '上手', '好き'] },

  // ── Catatan 2 · ありました ──────────────────────────────────────
  { id: 'b29-c2-1', grup: 'catatan', no: 2, soal: 'A：かばんは どこですか。B：［かばんに］___よ。', arti: 'A：Tasnya di mana? B：[Di dalam tas] Ada.', jawaban: 'ありました', pilihan: ['ありました', 'あります', 'いました', 'います'] },
  { id: 'b29-c2-2', grup: 'catatan', no: 2, soal: 'A：電話は どこに ありますか。B：机の 上に ___よ。', arti: 'A：Telepon di mana? B：Ada di atas meja.', jawaban: 'ありました', pilihan: ['ありました', 'あります', 'いました', 'いましたか'] },
  { id: 'b29-c2-3', grup: 'catatan', no: 2, soal: 'A：切符は 見つかりましたか。B：ええ、ポケットに ___よ。', arti: 'A：Karcisnya sudah ketemu? B：Ya, ada di kantong.', jawaban: 'ありました', pilihan: ['ありました', 'あります', 'いました', 'います'] },
  { id: 'b29-c2-4', grup: 'catatan', no: 2, soal: 'A：かばんは ありましたか。B：はい、___よ。', arti: 'A：Tasnya ada? B：Ya, ada.', jawaban: 'ありました', pilihan: ['ありました', 'あります', 'いました', 'います'] },
  { id: 'b29-c2-5', grup: 'catatan', no: 2, soal: 'A：メモは どこですか。B：カレンダーの 下に ___よ。', arti: 'A：Catatan di mana? B：Ada di bawah kalender.', jawaban: 'ありました', pilihan: ['ありました', 'あります', 'いました', 'います'] },

  // ── Catatan 3 · どこで／どこかに ────────────────────────────────
  { id: 'b29-c3-1', grup: 'catatan', no: 3, soal: '___ 財布を なくして しまいました。', arti: 'Entah di mana saya kehilangan dompet.', jawaban: 'どこで', pilihan: ['どこで', 'どこに', 'どこへ', 'どこ'] },
  { id: 'b29-c3-2', grup: 'catatan', no: 3, soal: '___ 電話が ありますか。', arti: 'Apakah ada telepon dari suatu tempat?', jawaban: 'どこかに', pilihan: ['どこかに', 'どこに', 'どこへ', 'どこで'] },
  { id: 'b29-c3-3', grup: 'catatan', no: 3, soal: 'A：どう しましたか。B：___ 財布を 落として しまったんです。', arti: 'A：Ada apa? B：Saya kehilangan dompet entah di mana.', jawaban: 'どこかで', pilihan: ['どこかで', 'どこかに', 'どこかへ', 'どこか'] },
  { id: 'b29-c3-4', grup: 'catatan', no: 3, soal: 'あの へんな 音は ___ 聞こえますか。', arti: 'Suara aneh itu terdengar dari mana?', jawaban: 'どこから', pilihan: ['どこから', 'どこに', 'どこへ', 'どこで'] },
  { id: 'b29-c3-5', grup: 'catatan', no: 3, soal: 'A：どこかへ 行きましたか。B：いいえ、___ も 行きませんでした。', arti: 'A：Pergi ke suatu tempat? B：Tidak, tidak pergi ke mana-mana.', jawaban: 'どこ', pilihan: ['どこ', 'どこか', 'どこで', 'どこに'] },
]
