import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 14 — tepat 5 soal per pola (6 pola 文型 + 0 Catatan Tata Bahasa).
 * Sumber: `contoh`/`penjelasan`/`reibun` di bab ini (pola tidak diubah).
 * Pola 1 & 2 di buku tidak punya `contoh`, soal diturunkan dari `penjelasan` (tabel perubahan).
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · Penggolongan Kata Kerja ────────────────────────────────
  { id: 'b14-1-1', grup: 'bunpou', no: 1, soal: '「書きます」は グループ___です。', arti: '「書きます」 termasuk kelompok I (Grup I).', jawaban: 'I', pilihan: ['I', 'II', 'III', 'IV'] },
  { id: 'b14-1-2', grup: 'bunpou', no: 1, soal: '「食べます」は グループ___です。', arti: '「食べます」 termasuk kelompok II (Grup II).', jawaban: 'II', pilihan: ['II', 'I', 'III', 'IV'] },
  { id: 'b14-1-3', grup: 'bunpou', no: 1, soal: '「します」は グループ___です。', arti: '「します」 termasuk kelompok III (Grup III).', jawaban: 'III', pilihan: ['III', 'I', 'II', 'IV'] },
  { id: 'b14-1-4', grup: 'bunpou', no: 1, soal: '「見ます」は グループ___です。', arti: '「見ます」 termasuk kelompok II (Grup II).', jawaban: 'II', pilihan: ['II', 'I', 'III', 'IV'] },
  { id: 'b14-1-5', grup: 'bunpou', no: 1, soal: 'グループIIIの 動詞は ___です。', arti: 'Kata kerja kelompok III di antaranya 「来ます」.', jawaban: '来ます', pilihan: ['来ます', '書きます', '見ます', '起きます'] },

  // ── 文型 2 · Bentuk て ─────────────────────────────────────────────
  { id: 'b14-2-1', grup: 'bunpou', no: 2, soal: '「書きます」の て形は ___です。', arti: 'Bentuk て dari 「書きます」.', jawaban: '書いて', pilihan: ['書いて', '書って', '書きて', '書んで'] },
  { id: 'b14-2-2', grup: 'bunpou', no: 2, soal: '「飲みます」の て形は ___です。', arti: 'Bentuk て dari 「飲みます」.', jawaban: '飲んで', pilihan: ['飲んで', '飲いて', '飲って', '飲みて'] },
  { id: 'b14-2-3', grup: 'bunpou', no: 2, soal: '「待ちます」の て形は ___です。', arti: 'Bentuk て dari 「待ちます」.', jawaban: '待って', pilihan: ['待って', '待いて', '待ちて', '待んで'] },
  { id: 'b14-2-4', grup: 'bunpou', no: 2, soal: '「食べます」の て形は ___です。', arti: 'Bentuk て dari 「食べます」 (Grup II).', jawaban: '食べて', pilihan: ['食べて', '食べって', '食べいて', '食べんで'] },
  { id: 'b14-2-5', grup: 'bunpou', no: 2, soal: '「行きます」の て形は ___です。', arti: 'Bentuk て dari 「行きます」 (pengecualian).', jawaban: '行って', pilihan: ['行って', '行いて', '行きて', '行んで'] },

  // ── 文型 3 · Kata Kerjaて ください ──────────────────────────────────
  { id: 'b14-3-1', grup: 'bunpou', no: 3, soal: '辞書を 貸し___ ください。', arti: 'Tolong pinjamkan kamus.', jawaban: 'て', pilihan: ['て', 'で', 'に', 'を'] },
  { id: 'b14-3-2', grup: 'bunpou', no: 3, soal: 'ゆっくり 話し___ ください。', arti: 'Tolong bicara pelan-pelan.', jawaban: 'て', pilihan: ['て', 'で', 'ては', 'に'] },
  { id: 'b14-3-3', grup: 'bunpou', no: 3, soal: 'ここに 住所を 書い___ ください。', arti: 'Tolong tulis alamat di sini.', jawaban: 'て', pilihan: ['て', 'た', 'で', 'に'] },
  { id: 'b14-3-4', grup: 'bunpou', no: 3, soal: 'すみませんが、この 漢字の 読み方を ___ ください。', arti: 'Permisi, tolong ajarkan cara membaca Kanji ini.', jawaban: '教えて', pilihan: ['教えて', '教いで', '教えって', '教えんで'] },
  { id: 'b14-3-5', grup: 'bunpou', no: 3, soal: '信号を 右へ ___ ください。', arti: 'Tolong belok kanan di lampu lalu lintas.', jawaban: '曲がって', pilihan: ['曲がって', '曲がいて', '曲がりて', '曲がんで'] },

  // ── 文型 4 · Kata Kerjaて います ────────────────────────────────────
  { id: 'b14-4-1', grup: 'bunpou', no: 4, soal: 'ミラーさんは 今 電話を かけ___ います。', arti: 'Sdr. Miller sekarang sedang menelepon.', jawaban: 'て', pilihan: ['て', 'で', 'に', 'ては'] },
  { id: 'b14-4-2', grup: 'bunpou', no: 4, soal: '今 会議室で 松本さんと 話し___ います。', arti: 'Sekarang sedang berbicara dengan Sdr. Matsumoto di ruang rapat.', jawaban: 'て', pilihan: ['て', 'で', 'た', 'を'] },
  { id: 'b14-4-3', grup: 'bunpou', no: 4, soal: 'ミラーさんは 今 電話を かけて ___。', arti: 'Sdr. Miller sekarang sedang menelepon.', jawaban: 'います', pilihan: ['います', 'あります', 'ください', 'ましょう'] },
  { id: 'b14-4-4', grup: 'bunpou', no: 4, soal: '田中さんは 今 テレビを ___ います。', arti: 'Sdr. Tanaka sekarang sedang menonton televisi.', jawaban: '見て', pilihan: ['見て', '見って', '見いで', '見んで'] },
  { id: 'b14-4-5', grup: 'bunpou', no: 4, soal: '今 雨が 降って いますか。……はい、___。', arti: '……Ya, sedang turun.', jawaban: '降って います', pilihan: ['降って います', '降ります', '降りました', '降って ください'] },

  // ── 文型 5 · Kata Kerjaましょうか ───────────────────────────────────
  { id: 'b14-5-1', grup: 'bunpou', no: 5, soal: 'タクシーを 呼び___か。', arti: 'Bagaimana kalau saya panggilkan taksi?', jawaban: 'ましょう', pilihan: ['ましょう', 'ません', 'ました', 'ています'] },
  { id: 'b14-5-2', grup: 'bunpou', no: 5, soal: '荷物を 持ちましょうか。……いいえ、___。', arti: '……Tidak usah, terima kasih.', jawaban: 'けっこうです', pilihan: ['けっこうです', 'お願いします', 'はい、そうです', 'いいですよ'] },
  { id: 'b14-5-3', grup: 'bunpou', no: 5, soal: '暑いですね。窓を 開け___か。', arti: 'Panas, ya. Bagaimana kalau saya membuka jendela?', jawaban: 'ましょう', pilihan: ['ましょう', 'ません', 'ました', 'ています'] },
  { id: 'b14-5-4', grup: 'bunpou', no: 5, soal: '駅まで 迎えに ___か。……いいえ、けっこうです。', arti: 'Bagaimana kalau saya pergi menjemput di stasiun? ……Tidak, terima kasih.', jawaban: '行きましょう', pilihan: ['行きましょう', '行きます', '行きました', '行って います'] },
  { id: 'b14-5-5', grup: 'bunpou', no: 5, soal: 'タクシーを 呼びましょうか。……すみません。___。', arti: '……Maaf. Tolong (panggilkan).', jawaban: 'お願いします', pilihan: ['お願いします', 'けっこうです', 'いいえ', 'ちがいます'] },

  // ── 文型 6 · Kata Benda が Kata Kerja (fenomena alam) ──────────────
  { id: 'b14-6-1', grup: 'bunpou', no: 6, soal: '雨___ 降って います。', arti: 'Hujan turun.', jawaban: 'が', pilihan: ['が', 'は', 'を', 'に'] },
  { id: 'b14-6-2', grup: 'bunpou', no: 6, soal: '雪___ 降って います。', arti: 'Salju turun.', jawaban: 'が', pilihan: ['が', 'を', 'で', 'と'] },
  { id: 'b14-6-3', grup: 'bunpou', no: 6, soal: '雨が ___ います。', arti: 'Hujan sedang turun.', jawaban: '降って', pilihan: ['降って', '降りて', '降る', '降りました'] },
  { id: 'b14-6-4', grup: 'bunpou', no: 6, soal: '外は 雪___ 降って いますか。', arti: 'Apakah di luar salju sedang turun?', jawaban: 'が', pilihan: ['が', 'を', 'に', 'と'] },
  { id: 'b14-6-5', grup: 'bunpou', no: 6, soal: '「Hujan turun.」 に あう 文は どれですか。___', arti: 'Pilih kalimat yang benar untuk "Hujan turun."', jawaban: '雨が 降って います。', pilihan: ['雨が 降って います。', '雨を 降って います。', '雨に 降って います。', '雨で 降って います。'] },
]
