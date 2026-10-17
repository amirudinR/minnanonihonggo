import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 24 — tepat 5 soal per pola (4 pola 文型 + 3 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · ～は わたしに ～を くれました ────────────────────────
  { id: 'b24-1-1', grup: 'bunpou', no: 1, soal: '佐藤さんは わたし___ クリスマスカードを くれました。', arti: 'Sdr. Sato memberikan saya kartu Natal.', jawaban: 'に', pilihan: ['に', 'が', 'を', 'で'] },
  { id: 'b24-1-2', grup: 'bunpou', no: 1, soal: '佐藤さんは わたしに 花を ___。', arti: 'Sdr. Sato memberikan saya bunga.', jawaban: 'くれました', pilihan: ['くれました', 'あげました', 'もらいました', '送りました'] },
  { id: 'b24-1-3', grup: 'bunpou', no: 1, soal: 'おばあちゃんは いつも お菓子を ___。', arti: 'Nenek selalu memberikan saya kue.', jawaban: 'くれます', pilihan: ['くれます', 'あげます', 'もらいます', '借ります'] },
  { id: 'b24-1-4', grup: 'bunpou', no: 1, soal: '佐藤さんは 姉に お菓子を ___。', arti: 'Sdr. Sato memberikan adik saya kue.', jawaban: 'くれました', pilihan: ['くれました', 'あげました', 'もらいました', '売りました'] },
  { id: 'b24-1-5', grup: 'bunpou', no: 1, soal: 'A：おいしい ワインですね。B：ええ、佐藤さんが ___。', arti: 'A：Anggur yang enak ya. B：Ya, Sdr. Sato yang berikan.', jawaban: 'くれました', pilihan: ['くれました', 'あげました', 'もらいました', '買いました'] },

  // ── 文型 2 · Kata Kerja Bentuk て あげます ────────────────────────
  { id: 'b24-2-1', grup: 'bunpou', no: 2, soal: 'わたしは 木村さんに 本を ___ あげました。', arti: 'Saya meminjamkan buku kepada Sdr. Kimura.', jawaban: '貸して', pilihan: ['貸して', '貸す', '貸した', '貸します'] },
  { id: 'b24-2-2', grup: 'bunpou', no: 2, soal: 'わたしは 木村さんに 本を ___。', arti: 'Saya meminjamkan buku kepada Sdr. Kimura.', jawaban: '貸して あげました', pilihan: ['貸して あげました', '貸して くれました', '貸して もらいました', '借りて あげました'] },
  { id: 'b24-2-3', grup: 'bunpou', no: 2, soal: '太郎君は 母の 日に お母さんに ピアノを ___ あげます。', arti: 'Pada hari Ibu, Si Taro bermain piano untuk ibunya.', jawaban: '弾いて', pilihan: ['弾いて', '弾く', '弾いた', '弾きます'] },
  { id: 'b24-2-4', grup: 'bunpou', no: 2, soal: 'わたしは 弟に 宿題を ___ あげました。', arti: 'Saya membantu adik mengerjakan PR.', jawaban: '手伝って', pilihan: ['手伝って', '手伝う', '手伝った', '手伝います'] },
  { id: 'b24-2-5', grup: 'bunpou', no: 2, soal: 'わたしは 佐藤さんに 道を ___ あげました。', arti: 'Saya menunjukkan jalan kepada Sdr. Sato.', jawaban: '教えて', pilihan: ['教えて', '教える', '教えた', '教えます'] },

  // ── 文型 3 · Kata Kerja Bentuk て もらいました ────────────────────
  { id: 'b24-3-1', grup: 'bunpou', no: 3, soal: 'わたしは 山田さんに 病院の 電話番号を ___ もらいました。', arti: 'Saya diberikan nomor telepon rumah sakit oleh Sdr. Yamada.', jawaban: '教えて', pilihan: ['教えて', '教える', '教えた', '教えます'] },
  { id: 'b24-3-2', grup: 'bunpou', no: 3, soal: 'わたしは 山田さん___ 病院の 電話番号を 教えて もらいました。', arti: 'Saya diberikan nomor telepon rumah sakit oleh Sdr. Yamada.', jawaban: 'に', pilihan: ['に', 'が', 'を', 'で'] },
  { id: 'b24-3-3', grup: 'bunpou', no: 3, soal: 'わたしは ワンさんに 料理を ___ もらいました。', arti: 'Saya dibantu memasak oleh Sdr. Wang.', jawaban: '手伝って', pilihan: ['手伝って', '手伝う', '手伝った', '手伝います'] },
  { id: 'b24-3-4', grup: 'bunpou', no: 3, soal: 'A：電車で 行きましたか。B：いいえ。山田さんに 車で ___ もらいました。', arti: 'A：Pergi dengan kereta? B：Tidak. Saya diantar Sdr. Yamada dengan mobilnya.', jawaban: '送って', pilihan: ['送って', '送る', '送った', '送ります'] },
  { id: 'b24-3-5', grup: 'bunpou', no: 3, soal: 'わたしは 先生に 日本語を ___ もらいました。', arti: 'Saya diajari bahasa Jepang oleh guru.', jawaban: '教えて', pilihan: ['教えて', '教える', '教えた', '教えます'] },

  // ── 文型 4 · Kata Kerja Bentuk て くれました ──────────────────────
  { id: 'b24-4-1', grup: 'bunpou', no: 4, soal: '母は わたしに セーターを ___ くれました。', arti: 'Ibu mengirimi saya sweater.', jawaban: '送って', pilihan: ['送って', '送る', '送った', '送ります'] },
  { id: 'b24-4-2', grup: 'bunpou', no: 4, soal: '山田さんは わたしを 大阪城へ ___ 行って くれました。', arti: 'Sdr. Yamada mengantarkan saya ke Benteng Osaka.', jawaban: '連れて', pilihan: ['連れて', '連れる', '連れた', '連れます'] },
  { id: 'b24-4-3', grup: 'bunpou', no: 4, soal: 'ミラーさんは わたしに 旅行の 写真を ___ くれました。', arti: 'Sdr. Miller memperlihatkan foto wisatanya kepada saya.', jawaban: '見せて', pilihan: ['見せて', '見せる', '見せた', '見せます'] },
  { id: 'b24-4-4', grup: 'bunpou', no: 4, soal: '友達は わたしの 引っ越しを ___ くれました。', arti: 'Teman membantu saya pindah rumah.', jawaban: '手伝って', pilihan: ['手伝って', '手伝う', '手伝った', '手伝います'] },
  { id: 'b24-4-5', grup: 'bunpou', no: 4, soal: '山田さんは わたしに お菓子を ___ くれました。', arti: 'Sdr. Yamada membelikan saya kue.', jawaban: '買って', pilihan: ['買って', '買う', '買った', '買います'] },

  // ── Catatan 1 · くれます ──────────────────────────────────────────
  { id: 'b24-c1-1', grup: 'catatan', no: 1, soal: '佐藤さんは わたしに クリスマスカードを ___。', arti: 'Sdr. Sato memberikan saya kartu Natal.', jawaban: 'くれました', pilihan: ['くれました', 'あげました', 'もらいました', '貸しました'] },
  { id: 'b24-c1-2', grup: 'catatan', no: 1, soal: 'わたしは 佐藤さんに 花を ___。', arti: 'Saya memberikan Sdr. Sato bunga.', jawaban: 'あげました', pilihan: ['あげました', 'くれました', 'もらいました', '借りました'] },
  { id: 'b24-c1-3', grup: 'catatan', no: 1, soal: '佐藤さんは 姉に お菓子を ___。', arti: 'Sdr. Sato memberikan adik saya kue.', jawaban: 'くれました', pilihan: ['くれました', 'あげました', 'もらいました', '売りました'] },
  { id: 'b24-c1-4', grup: 'catatan', no: 1, soal: 'A：その かばん、いいですね。B：ええ、母が ___。', arti: 'A：Tas itu bagus ya. B：Ya, ibu yang memberikan.', jawaban: 'くれました', pilihan: ['くれました', 'あげました', 'もらいました', '借りました'] },
  { id: 'b24-c1-5', grup: 'catatan', no: 1, soal: 'A：それは だれの 本ですか。B：山田さんが ___ 本です。', arti: 'A：Itu buku siapa? B：Buku yang diberikan Sdr. Yamada.', jawaban: 'くれた', pilihan: ['くれた', 'あげた', 'もらった', '貸した'] },

  // ── Catatan 2 · Kata Kerja Bentuk て あげます・もらいます・くれます ─
  { id: 'b24-c2-1', grup: 'catatan', no: 2, soal: 'わたしは 木村さんに 本を ___ あげました。', arti: 'Saya meminjamkan Sdr. Kimura buku.', jawaban: '貸して', pilihan: ['貸して', '貸す', '貸した', '貸します'] },
  { id: 'b24-c2-2', grup: 'catatan', no: 2, soal: 'わたしは 山田さんに 図書館の 電話番号を ___ もらいました。', arti: 'Saya diberikan nomor telepon perpustakaan oleh Sdr. Yamada.', jawaban: '教えて', pilihan: ['教えて', '教える', '教えた', '教えます'] },
  { id: 'b24-c2-3', grup: 'catatan', no: 2, soal: '母は わたしに セーターを ___ くれました。', arti: 'Ibu saya mengirimkan saya sweater.', jawaban: '送って', pilihan: ['送って', '送る', '送った', '送ります'] },
  { id: 'b24-c2-4', grup: 'catatan', no: 2, soal: 'A：そろそろ 帰りましょうか。B：タクシーを ___ ください。', arti: 'A：Bagaimana kalau kita pulang? B：Tolong panggilkan taksi.', jawaban: '呼んで', pilihan: ['呼んで', '呼んで あげて', '呼んで もらって', '呼ぶ'] },
  { id: 'b24-c2-5', grup: 'catatan', no: 2, soal: 'A：手伝いましょうか。B：すみません。___ ください。', arti: 'A：Bagaimana kalau saya bantu? B：Maaf. Tolong bantu saya.', jawaban: '手伝って', pilihan: ['手伝って', '手伝って あげて', '手伝って もらって', '手伝う'] },

  // ── Catatan 3 · Kata Benda1 は Kata Benda2 が Kata Kerja ──────────
  { id: 'b24-c3-1', grup: 'catatan', no: 3, soal: 'おいしい ワインですね。……ええ、この ワインは 佐藤さん___ くれました。', arti: 'Anggur yang enak ya. ……Ya, anggur ini Sdr. Sato yang berikan.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'で'] },
  { id: 'b24-c3-2', grup: 'catatan', no: 3, soal: 'A：その 写真、いいですね。B：これは 山田さん___ くれました。', arti: 'A：Foto itu bagus ya. B：Ini Sdr. Yamada yang berikan.', jawaban: 'が', pilihan: ['が', 'を', 'に', 'へ'] },
  { id: 'b24-c3-3', grup: 'catatan', no: 3, soal: 'A：その 花、きれいですね。B：___。', arti: 'A：Bunga itu indah ya. B：Sdr. Sato yang memberikan.', jawaban: '佐藤さんが くれました', pilihan: ['佐藤さんが くれました', '佐藤さんを くれました', '佐藤さんに くれました', '佐藤さんが あげました'] },
  { id: 'b24-c3-4', grup: 'catatan', no: 3, soal: 'A：おいしい ケーキですね。B：ええ、この ケーキは 母が ___。', arti: 'A：Kue yang enak ya. B：Ya, kue ini ibu yang membuatkan.', jawaban: '作って くれました', pilihan: ['作って くれました', '作って あげました', '作って もらいました', '作ります'] },
  { id: 'b24-c3-5', grup: 'catatan', no: 3, soal: 'A：その お菓子、おいしそうですね。B：ええ、おばあちゃんが ___。', arti: 'A：Kue itu kelihatan enak ya. B：Ya, nenek yang memberikan.', jawaban: 'くれました', pilihan: ['くれました', 'あげました', 'もらいました', '売りました'] },
]
