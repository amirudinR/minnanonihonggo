import type { SoalBunpou } from '@/types/bab'

/**
 * Kuis tata bahasa Bab 50 — tepat 5 soal per pola (2 pola 文型 + 2 Catatan Tata Bahasa).
 *
 * Soal diturunkan dari `contoh`/`artiContoh`/`reibun` bab ini (pola TIDAK diubah;
 * nomor pola merujuk `bunpou[].no` / `catatanTataBahasa[].no` di `./bunpou.ts`).
 * Dijaga `npm run validate:bunpou`.
 */
export const bunpouSoal: SoalBunpou[] = [
  // ── 文型 1 · 謙譲語 I（お／ご〜します） ─────────────────────────────
  { id: 'b50-1-1', grup: 'bunpou', no: 1, soal: '今月の スケジュールを ___。', arti: '(Saya) Menyampaikan jadwal bulan ini.', jawaban: 'お送りします', pilihan: ['お送りします', '送ります', 'お送りに なります', '送られます'] },
  { id: 'b50-1-2', grup: 'bunpou', no: 1, soal: '重そうですね。___。', arti: 'Keliatannya berat, ya. Mari saya bawa!', jawaban: 'お持ちしましょうか', pilihan: ['お持ちしましょうか', '持ちましょうか', 'お持ちに なりますか', '持たれましょうか'] },
  { id: 'b50-1-3', grup: 'bunpou', no: 1, soal: 'わたしが 社長に スケジュールを ___。', arti: 'Saya yang menyampaikan jadwal kepada direktur.', jawaban: 'お知らせします', pilihan: ['お知らせします', '知らせます', 'お知らせに なります', '知らされます'] },
  { id: 'b50-1-4', grup: 'bunpou', no: 1, soal: '江戸東京博物館へ ___。', arti: 'Mari (saya) antarkan (Anda) ke Museum Edo Tokyo!', jawaban: 'ご案内します', pilihan: ['ご案内します', '案内します', 'ご案内に なります', '案内されます'] },
  { id: 'b50-1-5', grup: 'bunpou', no: 1, soal: 'きょうの 予定を ___。', arti: '(Saya) Menjelaskan jadwal hari ini.', jawaban: 'ご説明します', pilihan: ['ご説明します', '説明します', 'ご説明に なります', '説明されます'] },

  // ── 文型 2 · Kata Merendahkan Diri Khusus ──────────────────────────
  { id: 'b50-2-1', grup: 'bunpou', no: 2, soal: '私は アメリカから ___。', arti: 'Saya datang dari Amerika.', jawaban: '参りました', pilihan: ['参りました', '来ました', 'いらっしゃいました', '行きました'] },
  { id: 'b50-2-2', grup: 'bunpou', no: 2, soal: '社長の 奥様に ___。', arti: 'Bertemu dengan istri direktur.', jawaban: 'お目に かかりました', pilihan: ['お目に かかりました', '会いました', '見ました', 'お目に なりました'] },
  { id: 'b50-2-3', grup: 'bunpou', no: 2, soal: 'あしたは だれが 手伝いに 来て くれますか。……私が ___。', arti: 'Besok siapa yang datang untuk membantu? ……Saya yang datang.', jawaban: '伺います', pilihan: ['伺います', '行きます', 'いらっしゃいます', '参られます'] },
  { id: 'b50-2-4', grup: 'bunpou', no: 2, soal: 'A：だれが ミラーさんを 迎えに 行きますか。B：私が ___。', arti: 'A：Siapa yang menjemput sdr. Miller? B：Saya yang pergi.', jawaban: '参ります', pilihan: ['参ります', '行きます', 'いらっしゃいます', '来られます'] },
  { id: 'b50-2-5', grup: 'bunpou', no: 2, soal: 'A：ご家族は どちらに いらっしゃいますか。B：ニューヨークに ___。', arti: 'A：Keluarga Anda ada di mana? B：Ada di New York.', jawaban: 'おります', pilihan: ['おります', 'います', 'いらっしゃいます', '参ります'] },

  // ── Catatan 1 · 謙譲語 I（お／ご〜します）— pemakaian ───────────────
  { id: 'b50-c1-1', grup: 'catatan', no: 1, soal: 'A：だれが 空港へ 送りますか。B：兄が 車で ___。', arti: 'A：Siapa yang mengantar ke bandara? B：Kakak laki-laki saya yang antarkan dengan mobil.', jawaban: 'お送りします', pilihan: ['お送りします', '送ります', 'お送りに なります', '送られます'] },
  { id: 'b50-c1-2', grup: 'catatan', no: 1, soal: 'あした ご___します。', arti: 'Besok (saya) akan menghubungi.', jawaban: '連絡', pilihan: ['連絡', '連絡して', '連絡する', '連絡の'] },
  { id: 'b50-c1-3', grup: 'catatan', no: 1, soal: 'A：この 荷物を 持ちましょうか。B：ええ、___。', arti: 'A：Bagaimana kalau saya bawakan barang ini? B：Ya, tolong.', jawaban: 'お願いします', pilihan: ['お願いします', 'お願いに なります', '願います', 'ご願いします'] },
  { id: 'b50-c1-4', grup: 'catatan', no: 1, soal: '初めまして。ミラーと ___。どうぞ よろしく お願いいたします。', arti: 'Salam kenal. Saya Miller. Mohon bantuannya.', jawaban: '申します', pilihan: ['申します', '言います', '話します', '呼びます'] },
  { id: 'b50-c1-5', grup: 'catatan', no: 1, soal: 'A：お荷物を お___しましょうか。', arti: 'A：Bagaimana kalau saya bawakan barang Anda?', jawaban: '持ち', pilihan: ['持ち', '持って', '持つ', '持った'] },

  // ── Catatan 2 · Kata Merendahkan Diri Khusus ───────────────────────
  { id: 'b50-c2-1', grup: 'catatan', no: 2, soal: 'A：だれが ご案内しますか。B：私が ご案内 ___。', arti: 'A：Siapa yang memandu? B：Saya yang akan memandu.', jawaban: 'いたします', pilihan: ['いたします', 'します', 'なさいます', 'されます'] },
  { id: 'b50-c2-2', grup: 'catatan', no: 2, soal: 'A：この 資料を ___ しても いいですか。', arti: 'A：Boleh saya melihat dokumen ini?', jawaban: '拝見', pilihan: ['拝見', '見', 'ご覧', '見学'] },
  { id: 'b50-c2-3', grup: 'catatan', no: 2, soal: 'A：ミラーさんを ご存じですか。B：ええ、よく ___ います。', arti: 'A：Apakah Anda kenal sdr. Miller? B：Ya, saya sangat mengenalnya.', jawaban: '存じて', pilihan: ['存じて', '知って', 'ご存じで', 'お知り'] },
  { id: 'b50-c2-4', grup: 'catatan', no: 2, soal: 'A：部長の 奥様に ___ ましたか。', arti: 'A：Apakah Anda sudah bertemu istri kepala bagian?', jawaban: 'お目に かかり', pilihan: ['お目に かかり', '会い', '見', 'お目に なり'] },
  { id: 'b50-c2-5', grup: 'catatan', no: 2, soal: 'A：だれが 部長から 聞きましたか。B：私が 部長から ___。', arti: 'A：Siapa yang mendengar dari kepala bagian? B：Saya yang mendengar dari kepala bagian.', jawaban: '伺いました', pilihan: ['伺いました', '聞きました', '聞かれました', 'お聞きに なりました'] },
]
