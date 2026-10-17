import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 5 — tepat 5 soal per pola (3 pola 文型 + 4 Catatan Tata Bahasa).
 * Sumber: `contoh`/`artiContoh`/`reibun` di bab ini (pola tidak diubah).
 * Jawaban "（なし）" = kata tanya itu TIDAK dibubuhi partikel (lihat catatan 2: いつ).
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Kata Benda(tempat) へ 行きます／来ます／帰ります ────────
  { id: 'b5-1-1', grup: 'bunpou', no: 1, soal: 'あした どこ___ 行きますか。……奈良へ 行きます。', arti: 'Besok pergi ke mana? ……Pergi ke Nara. (partikel arah へ)', jawaban: 'へ', pilihan: ['へ', 'で', 'と', 'を'] },
  { id: 'b5-1-2', grup: 'bunpou', no: 1, soal: 'わたしは 奈良___ 行きます。', arti: 'Saya pergi ke Nara.', jawaban: 'へ', pilihan: ['へ', 'で', 'と', 'を'] },
  { id: 'b5-1-3', grup: 'bunpou', no: 1, soal: 'わたしは 大阪___ 行きます。', arti: 'Saya pergi ke Osaka.', jawaban: 'へ', pilihan: ['へ', 'で', 'を', 'が'] },
  { id: 'b5-1-4', grup: 'bunpou', no: 1, soal: 'あの 電車は 甲子園___ 行きます。', arti: 'Kereta itu pergi ke Koshien.', jawaban: 'へ', pilihan: ['へ', 'で', 'と', 'も'] },
  { id: 'b5-1-5', grup: 'bunpou', no: 1, soal: 'わたしは うち___ 帰ります。', arti: 'Saya pulang ke rumah.', jawaban: 'へ', pilihan: ['へ', 'で', 'と', 'を'] },

  // ── 文型 2 · Kata Benda(kendaraan) で 行きます／来ます／帰ります ──────
  { id: 'b5-2-1', grup: 'bunpou', no: 2, soal: '何___ 東京へ 行きますか。……新幹線で 行きます。', arti: 'Dengan apa pergi ke Tokyo? ……Dengan Shinkansen.', jawaban: 'で', pilihan: ['で', 'へ', 'と', 'を'] },
  { id: 'b5-2-2', grup: 'bunpou', no: 2, soal: 'わたしは 電車___ 大阪へ 行きます。', arti: 'Saya pergi ke Osaka dengan kereta.', jawaban: 'で', pilihan: ['で', 'へ', 'と', 'を'] },
  { id: 'b5-2-3', grup: 'bunpou', no: 2, soal: 'あした 飛行機___ 日本へ 行きます。', arti: 'Besok pergi ke Jepang dengan pesawat.', jawaban: 'で', pilihan: ['で', 'へ', 'と', 'を'] },
  { id: 'b5-2-4', grup: 'bunpou', no: 2, soal: '学校まで ___ 行きます。', arti: 'Saya pergi ke sekolah dengan berjalan kaki. (歩いて tidak pakai で)', jawaban: '歩いて', pilihan: ['歩いて', 'バスで', '電車で', 'タクシーで'] },
  { id: 'b5-2-5', grup: 'bunpou', no: 2, soal: 'A：___で 東京へ 行きますか。B：新幹線で 行きます。', arti: 'Dengan apa pergi ke Tokyo? ……Dengan Shinkansen.', jawaban: '何', pilihan: ['何', 'どこ', 'だれ', 'いつ'] },

  // ── 文型 3 · Kata Benda(orang) と Kata Kerja ────────────────────
  { id: 'b5-3-1', grup: 'bunpou', no: 3, soal: 'だれ___ 東京へ 行きますか。……山田さんと 行きます。', arti: 'Dengan siapa pergi ke Tokyo? ……Dengan Sdr. Yamada.', jawaban: 'と', pilihan: ['と', 'で', 'へ', 'を'] },
  { id: 'b5-3-2', grup: 'bunpou', no: 3, soal: 'わたしは 家族___ 日本へ 来ました。', arti: 'Saya datang ke Jepang bersama keluarga.', jawaban: 'と', pilihan: ['と', 'で', 'へ', 'を'] },
  { id: 'b5-3-3', grup: 'bunpou', no: 3, soal: 'わたしは 山田さん___ 大阪へ 行きます。', arti: 'Saya pergi ke Osaka bersama Sdr. Yamada.', jawaban: 'と', pilihan: ['と', 'で', 'へ', 'を'] },
  { id: 'b5-3-4', grup: 'bunpou', no: 3, soal: 'わたしは ひとり___ 日本へ 来ました。', arti: 'Saya datang ke Jepang sendirian. (ひとりで — tidak pakai と)', jawaban: 'で', pilihan: ['で', 'と', 'へ', 'を'] },
  { id: 'b5-3-5', grup: 'bunpou', no: 3, soal: 'A：だれと 日本へ 来ましたか。B：家族___ 来ました。', arti: 'Dengan siapa datang ke Jepang? ……Datang bersama keluarga.', jawaban: 'と', pilihan: ['と', 'で', 'へ', 'も'] },

  // ── Catatan 1 · どこ[へ]も 行きません ───────────────────────────
  { id: 'b5-c1-1', grup: 'catatan', no: 1, soal: '日曜日 どこへ 行きましたか。……どこへ___ 行きませんでした。', arti: 'Hari Minggu pergi ke mana? ……Tidak pergi ke mana-mana.', jawaban: 'も', pilihan: ['も', 'は', 'か', 'の'] },
  { id: 'b5-c1-2', grup: 'catatan', no: 1, soal: '……___へも 行きませんでした。', arti: '……Tidak pergi ke mana-mana.', jawaban: 'どこ', pilihan: ['どこ', 'だれ', 'なに', 'いつ'] },
  { id: 'b5-c1-3', grup: 'catatan', no: 1, soal: '日曜日 どこ___ 行きませんでした。', arti: 'Hari Minggu tidak pergi ke mana-mana. (penyangkalan total)', jawaban: 'へも', pilihan: ['へも', 'へは', 'にも', 'へ'] },
  { id: 'b5-c1-4', grup: 'catatan', no: 1, soal: 'どこへも 行き___。', arti: 'Tidak pergi ke mana-mana. (bentuk lampau negatif)', jawaban: 'ませんでした', pilihan: ['ませんでした', 'ました', 'ます', 'ません'] },
  { id: 'b5-c1-5', grup: 'catatan', no: 1, soal: 'あした どこ___ 行きますか。', arti: 'Besok pergi ke mana? (kalimat tanya biasa)', jawaban: 'へ', pilihan: ['へ', 'へも', 'も', 'の'] },

  // ── Catatan 2 · いつ ───────────────────────────────────────────
  { id: 'b5-c2-1', grup: 'catatan', no: 2, soal: '___ 日本へ 来ましたか。……3月25日に 来ました。', arti: 'Kapan datang ke Jepang? ……Datang tanggal 25 Maret.', jawaban: 'いつ', pilihan: ['いつ', 'なん', 'なに', 'どこ'] },
  { id: 'b5-c2-2', grup: 'catatan', no: 2, soal: '誕生日は ___ですか。……6月13日です。', arti: 'Kapan ulang tahunmu? ……Tanggal 13 Juni.', jawaban: 'いつ', pilihan: ['いつ', 'なん', 'どれ', 'だれ'] },
  { id: 'b5-c2-3', grup: 'catatan', no: 2, soal: 'いつ___ 日本へ 来ましたか。', arti: 'Kapan datang ke Jepang? (「いつ」 tidak dibubuhi に)', jawaban: '（なし）', pilihan: ['（なし）', 'に', 'で', 'へ'] },
  { id: 'b5-c2-4', grup: 'catatan', no: 2, soal: '___ 奈良へ 行きますか。……あした 行きます。', arti: 'Kapan pergi ke Nara? ……Besok.', jawaban: 'いつ', pilihan: ['いつ', 'どこ', 'だれ', 'なに'] },
  { id: 'b5-c2-5', grup: 'catatan', no: 2, soal: 'A：___ 大阪へ 行きますか。B：3月25日に 行きます。', arti: 'Kapan pergi ke Osaka? ……Tanggal 25 Maret.', jawaban: 'いつ', pilihan: ['いつ', '何時', '何日', '何曜日'] },

  // ── Catatan 3 · ～よ ───────────────────────────────────────────
  { id: 'b5-c3-1', grup: 'catatan', no: 3, soal: 'この 電車は 甲子園へ 行きますか。……いいえ、行きません。次の「普通」です___。', arti: '……Tidak. Yang "Biasa" berikutnya lho. (memberi tahu)', jawaban: 'よ', pilihan: ['よ', 'ね', 'か', 'が'] },
  { id: 'b5-c3-2', grup: 'catatan', no: 3, soal: 'あした 奈良へ 行きます___。', arti: '(memberi tahu) Besok saya pergi ke Nara, lho.', jawaban: 'よ', pilihan: ['よ', 'ね', 'か', 'を'] },
  { id: 'b5-c3-3', grup: 'catatan', no: 3, soal: 'A：あの 方は 田中さんです___。B：あ、そうですか。', arti: '(memberi tahu) Beliau Sdr. Tanaka lho.', jawaban: 'よ', pilihan: ['よ', 'ね', 'か', 'も'] },
  { id: 'b5-c3-4', grup: 'catatan', no: 3, soal: 'この バスは 大阪へ 行きます___。', arti: '(memberi tahu) Bus ini pergi ke Osaka, lho.', jawaban: 'よ', pilihan: ['よ', 'ね', 'か', 'の'] },
  { id: 'b5-c3-5', grup: 'catatan', no: 3, soal: '次の 電車は 甲子園へ 行きます___。', arti: '(memberi tahu) Kereta berikutnya menuju Koshien, lho.', jawaban: 'よ', pilihan: ['よ', 'ね', 'か', 'と'] },

  // ── Catatan 4 · そうですね ─────────────────────────────────────
  { id: 'b5-c4-1', grup: 'catatan', no: 4, soal: 'あしたは 日曜日ですね。……あ、___。', arti: 'Besok hari Minggu, ya. ……Ah, betul ya. (setuju)', jawaban: 'そうですね', pilihan: ['そうですね', 'そうですか', 'そうですよ', 'ちがいます'] },
  { id: 'b5-c4-2', grup: 'catatan', no: 4, soal: '毎日 働きます。……___、大変ですね。', arti: 'Setiap hari bekerja. ……Ya, berat ya.', jawaban: 'そうですね', pilihan: ['そうですね', 'そうですか', 'そうですよ', 'ちがいます'] },
  { id: 'b5-c4-3', grup: 'catatan', no: 4, soal: 'A：あしたは 休みです。B：___。いいですね。', arti: 'Besok libur. ……Ya. Bagus ya.', jawaban: 'そうですね', pilihan: ['そうですね', 'そうですか', 'ちがいます', 'いいえ'] },
  { id: 'b5-c4-4', grup: 'catatan', no: 4, soal: 'A：ミラーさんは アメリカ人です。B：___。わたしも アメリカ人です。', arti: 'Sdr. Miller orang Amerika. ……Ya. Saya juga orang Amerika.', jawaban: 'そうですね', pilihan: ['そうですね', 'そうですか', 'ちがいます', 'いいえ'] },
  { id: 'b5-c4-5', grup: 'catatan', no: 4, soal: 'A：あした 大阪へ 行きます。B：___。いいですね。', arti: 'Besok pergi ke Osaka. ……Ya. Bagus ya.', jawaban: 'そうですね', pilihan: ['そうですね', 'そうですか', 'ちがいます', 'いいえ'] },
]
