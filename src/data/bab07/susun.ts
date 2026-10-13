import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 7 — fokus 文型:
//  (1) Kata Benda(alat/sarana) で Kata Kerja
//  (2) Kata Benda₁(orang) に Kata Benda₂ を あげます
//  (3) Kata Benda₁(orang) に Kata Benda₂ を もらいます
//  (4) もう Kata Kerja ました
//  + catatan: ～語で , Menghilangkan partikel
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 7 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Benda(alat/sarana) で', arti: 'Saya menonton film dengan komputer.', kata: ['わたしは', 'パソコンで', '映画を', '見ます'], jawaban: 'わたしは パソコンで 映画を 見ます', penjelasan: 'で menunjukkan alat/sarana.' },
  { id: 's2', fokus: 'Kata Benda(alat/sarana) で', arti: 'Belajar bahasa Jepang dengan televisi?', kata: ['テレビで', '日本語を', '勉強しましたか'], jawaban: 'テレビで 日本語を 勉強しましたか', penjelasan: 'Sarana + で + Kata Kerja.' },
  { id: 's3', fokus: 'Kata Benda(alat/sarana) で', arti: 'Tidak, belajar dengan radio.', kata: ['いいえ', 'ラジオで', '勉強しました'], jawaban: 'いいえ ラジオで 勉強しました', penjelasan: 'で menyebut cara/sarana melakukan.' },
  { id: 's4', fokus: 'Kata Benda(alat/sarana) で', arti: 'Makan dengan sumpit.', kata: ['はしで', '食べます'], jawaban: 'はしで 食べます', penjelasan: 'Alat で + Kata Kerja.' },
  { id: 's5', fokus: 'Kata Benda(alat/sarana) で', arti: 'Menulis laporan dalam bahasa Jepang?', kata: ['日本語で', 'レポートを', '書きますか'], jawaban: '日本語で レポートを 書きますか', penjelasan: 'Bahasa + で menunjukkan bahasa yang dipakai.' },
  { id: 's6', fokus: 'Kata Benda(alat/sarana) で', arti: 'Tidak, menulis dalam bahasa Inggris.', kata: ['いいえ', '英語で', '書きます'], jawaban: 'いいえ 英語で 書きます', penjelasan: '～語で = "dalam bahasa ...".' },
  { id: 's7', fokus: '～語で 何ですか', arti: 'Apa bahasa Jepangnya "Goodbye"?', kata: ['「Goodbye」は', '日本語で', '何ですか'], jawaban: '「Goodbye」は 日本語で 何ですか', penjelasan: '～は ...語で 何ですか = "bahasa ...-nya apa?".' },
  { id: 's8', fokus: '～語で 何ですか', arti: 'Ini apa dalam bahasa Jepang?', kata: ['これは', '日本語で', '何ですか'], jawaban: 'これは 日本語で 何ですか', penjelasan: 'Menanyakan istilah dalam bahasa tertentu.' },
  { id: 's9', fokus: 'Kata Benda₁(orang) に ～を あげます', arti: 'Saya memberikan bunga kepada Sdr. Kimura.', kata: ['わたしは', '木村さんに', '花を', 'あげます'], jawaban: 'わたしは 木村さんに 花を あげます', penjelasan: 'Penerima dibubuhkan partikel に.' },
  { id: 's10', fokus: 'Kata Benda₁(orang) に ～を あげます', arti: 'Saya meminjamkan buku kepada Sdr. Lee.', kata: ['イーさんに', '本を', '貸します'], jawaban: 'イーさんに 本を 貸します', penjelasan: '貸します = meminjamkan (memberi).' },
  { id: 's11', fokus: 'Kata Benda₁(orang) に ～を あげます', arti: 'Saya mengajar bahasa Inggris kepada Sdr. Yamada.', kata: ['山田さんに', '英語を', '教えます'], jawaban: '山田さんに 英語を 教えます', penjelasan: '教えます = memberi informasi.' },
  { id: 's12', fokus: 'Kata Benda₁(orang) に ～を あげます', arti: 'Menulis kartu Natal untuk siapa?', kata: ['だれに', 'クリスマスカードを', '書きますか'], jawaban: 'だれに クリスマスカードを 書きますか', penjelasan: 'だれに = "kepada siapa?".' },
  { id: 's13', fokus: 'Kata Benda₁(orang) に ～を もらいます', arti: 'Saya mendapatkan cokelat dari Sdr. Karina.', kata: ['わたしは', 'カリナさんに', 'チョコレートを', 'もらいました'], jawaban: 'わたしは カリナさんに チョコレートを もらいました', penjelasan: 'もらいます = menerima, sumber dibubuhkan に.' },
  { id: 's14', fokus: 'Kata Benda₁(orang) に ～を もらいます', arti: 'Saya meminjam CD dari Karina.', kata: ['カリナさんに', 'CDを', '借りました'], jawaban: 'カリナさんに CDを 借りました', penjelasan: '借ります = meminjam (menerima).' },
  { id: 's15', fokus: 'Kata Benda₁(orang) に ～を もらいます', arti: 'Saya belajar bahasa Tionghoa dari Sdr. Wang.', kata: ['ワンさんに', '中国語を', '習います'], jawaban: 'ワンさんに 中国語を 習います', penjelasan: '習います = menerima informasi/pelajaran.' },
  { id: 's16', fokus: 'Kata Benda₁(orang) に ～を もらいます', arti: 'Saya meminjam uang dari bank.', kata: ['銀行から', 'お金を', '借りました'], jawaban: '銀行から お金を 借りました', penjelasan: 'Untuk organisasi, から boleh menggantikan に.' },
  { id: 's17', fokus: 'もう Kata Kerja ました', arti: 'Saya telah mengirim e-mail.', kata: ['わたしは', 'もう', 'メールを', '送りました'], jawaban: 'わたしは もう メールを 送りました', penjelasan: 'もう + ました = sudah selesai dilakukan.' },
  { id: 's18', fokus: 'もう Kata Kerja ました', arti: 'Sudah membeli karcis Shinkansen? ……Ya, sudah saya beli.', kata: ['もう', '新幹線の 切符を', '買いましたか', 'はい、もう 買いました'], jawaban: 'もう 新幹線の 切符を 買いましたか はい、もう 買いました', penjelasan: 'Jawaban afirmatif mengulang もう ました.' },
  { id: 's19', fokus: 'もう Kata Kerja ました', arti: 'Sudah makan siang? ……Belum.', kata: ['もう', '昼ごはんを', '食べましたか', 'いいえ、まだです'], jawaban: 'もう 昼ごはんを 食べましたか いいえ、まだです', penjelasan: 'Jawaban negatif もう... = いいえ、まだです.' },
  { id: 's20', fokus: 'Menghilangkan partikel', arti: 'Sendok ini bagus ya.', kata: ['この スプーン', 'すてきですね'], jawaban: 'この スプーン すてきですね', penjelasan: 'Dalam percakapan partikel の/は sering dihilangkan.' },
]
