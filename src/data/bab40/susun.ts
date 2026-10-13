import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 40 — fokus 文型:
//  (1) {Kata Kerja/Kata Sifat/Kata Benda → Bentuk Biasa} か、～
//  (2) {Bentuk Biasa} か どうか、～
//  (3) Kata Kerja Bentuk て みます
//  + catatan: Kata Sifat い(～い)→～さ , ～て でしょうか
// ATURAN: `kata` = token dari `jawaban` (pisah spasi) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 40 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～か、～', arti: 'Tolong dicek pukul berapa kedatangan penerbangan dengan nomor JL107!', kata: ['JL107便は', '何時に', '到着するか', '調べて ください'], jawaban: 'JL107便は 何時に 到着するか 調べて ください', penjelasan: 'Kalimat tanya dengan Kata Tanya dimasukkan: 何時に 到着するか.' },
  { id: 's2', fokus: '～か、～', arti: 'Apakah (Anda) masih ingat kapan pertama kali kita bertemu?', kata: ['わたしたちが', '初めて', '会ったのは', 'いつか', '覚えて いますか'], jawaban: 'わたしたちが 初めて 会ったのは いつか 覚えて いますか', penjelasan: 'Kata Tanya いつ + か menjadi anak kalimat.' },
  { id: 's3', fokus: '～か、～', arti: 'Sedang membicarakan tentang hadiah apa yang cocok untuk pernikahan.', kata: ['結婚の', 'お祝いは', '何が', 'いいか', '話して います'], jawaban: '結婚の お祝いは 何が いいか 話して います', penjelasan: '何が いいか = "hadiah apa yang baik".' },
  { id: 's4', fokus: '～か、～', arti: 'Pergi ke mana? (Saya tidak ingat karena mabuk.)', kata: ['酔って いたので', 'どこへ', '行ったか', '全然', '覚えて いないんです'], jawaban: '酔って いたので どこへ 行ったか 全然 覚えて いないんです', penjelasan: 'どこへ 行ったか = anak kalimat tanya bentuk biasa.' },
  { id: 's5', fokus: '～か、～', arti: 'Apakah (Anda) tahu bagaimana caranya untuk mengukur tinggi gunung?', kata: ['山の', '高さは', 'どうやって', '測るか', '知って いますか'], jawaban: '山の 高さは どうやって 測るか 知って いますか', penjelasan: 'どうやって 測るか = "bagaimana mengukurnya".' },
  { id: 's6', fokus: '～か、～', arti: 'Saya tidak ingat apa yang dikatakan guru.', kata: ['先生は', '何と', '言ったか', '覚えて いません'], jawaban: '先生は 何と 言ったか 覚えて いません', penjelasan: 'Bentuk biasa 言った + か masuk ke kalimat 覚えて いません.' },
  { id: 's7', fokus: '～か、～', arti: 'Lukisan itu terjual dengan harga berapa, apakah Anda tahu?', kata: ['その', '絵は', 'いくらで', '売れたか', '知って いますか'], jawaban: 'その 絵は いくらで 売れたか 知って いますか', penjelasan: 'いくらで 売れたか = "terjual berapa".' },
  { id: 's8', fokus: '～か、～', arti: 'Rapat kapan sebaiknya, tolong pikirkan.', kata: ['ミーティングは', 'いつが', 'いいか', '考えて ください'], jawaban: 'ミーティングは いつが いいか 考えて ください', penjelasan: 'いつが いいか = "kapan yang baik".' },
  { id: 's9', fokus: '～か、～', arti: 'Kertas ini sisi mana bagian depan, saya tidak tahu.', kata: ['この', '紙は', 'どちらが', '表か', 'わかりません'], jawaban: 'この 紙は どちらが 表か わかりません', penjelasan: 'どちらが 表か = anak kalimat tanya.' },
  { id: 's10', fokus: '～か どうか、～', arti: 'Tolong berikan jawaban sampai tanggal 20 apakah bisa hadir pada pesta akhir tahun atau tidak.', kata: ['忘年会に', '出席できるか どうか', '20日までに', '返事を ください'], jawaban: '忘年会に 出席できるか どうか 20日までに 返事を ください', penjelasan: 'Tanpa Kata Tanya → Bentuk Biasa + か どうか.' },
  { id: 's11', fokus: '～か どうか、～', arti: '(Saya) Kurang tahu apakah cerita itu benar atau tidak.', kata: ['その', '話は', 'ほんとうか どうか', 'わかりません'], jawaban: 'その 話は ほんとうか どうか わかりません', penjelasan: 'Kata Sifat な + か どうか menyatakan "benar atau tidak".' },
  { id: 's12', fokus: '～か どうか、～', arti: 'Tolong diperiksa apakah ada kesalahan tidak!', kata: ['まちがいが', 'ないか どうか', '調べて ください'], jawaban: 'まちがいが ないか どうか 調べて ください', penjelasan: 'Bentuk ない + か どうか = "apakah tidak ada kesalahan".' },
  { id: 's13', fokus: '～か どうか、～', arti: 'Baik tidaknya, saya tidak mengerti karena tidak pernah masuk (ke toko itu).', kata: ['あの', '店は', 'おいしいか どうか', 'わかりません'], jawaban: 'あの 店は おいしいか どうか わかりません', penjelasan: 'Kata Sifat い + か どうか menyatakan "enak atau tidak".' },
  { id: 's14', fokus: '～か どうか、～', arti: 'Apakah barangnya sudah sampai atau belum, tolong dicek.', kata: ['荷物が', '届いたか どうか', '確かめて ください'], jawaban: '荷物が 届いたか どうか 確かめて ください', penjelasan: 'Bentuk Biasa (lampau) + か どうか.' },
  { id: 's15', fokus: '～か どうか、～', arti: 'Apakah perlu mengisi kartu atau tidak, saya akan beritahu.', kata: ['カードを', '押す', 'ことが', '必要か どうか', '教えます'], jawaban: 'カードを 押す ことが 必要か どうか 教えます', penjelasan: 'Kata Sifat な 必要 + か どうか.' },
  { id: 's16', fokus: '～か どうか、～', arti: 'Apakah berat barang 20 kilogram ke bawah atau tidak, ditimbang.', kata: ['荷物の', '重さが', '20キロ以下か どうか', '量ります'], jawaban: '荷物の 重さが 20キロ以下か どうか 量ります', penjelasan: 'Kata Benda + か どうか.' },
  { id: 's17', fokus: 'Kata Kerja Bentuk て みます', arti: 'Coba berpikir sekali lagi.', kata: ['もう', '一度', '考えて みます'], jawaban: 'もう 一度 考えて みます', penjelasan: '～て みます = melakukan sebagai percobaan.' },
  { id: 's18', fokus: 'Kata Kerja Bentuk て みても いいですか', arti: 'Bolehkah mencoba memakai celana ini?', kata: ['この', 'ズボンを', 'はいて みても', 'いいですか'], jawaban: 'この ズボンを はいて みても いいですか', penjelasan: '～て みても いいですか = minta izin mencoba.' },
  { id: 's19', fokus: 'Kata Kerja Bentuk て みましょうか', arti: 'Bolehkah saya mencoba memakai baju ini?', kata: ['この', '服を', '着て みても', 'いいですか'], jawaban: 'この 服を 着て みても いいですか', penjelasan: 'Kalimat buku: この 服を 着て みても いいですか.' },
  { id: 's20', fokus: 'Kata Kerja Bentuk て みたいです', arti: '(Saya) Ingin pergi ke Hokkaido.', kata: ['北海道へ', '行って', 'みたいです'], jawaban: '北海道へ 行って みたいです', penjelasan: '～て みたいです menyatakan harapan mencoba melakukan.' },
]
