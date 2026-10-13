import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 43 — fokus 文型:
//  (1) Kata Kerja (Bentuk ます) そうです
//  (2) Kata Sifat い（～い）そうです ／ Kata Sifat な［な］そうです
//  (3) Kata Kerja Bentuk て 来ます
//  (4) Kata Kerja Bentuk て くれませんか
//  + catatan: Sifat perasaan (うれしい など) + そうです
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 43 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja (Bentuk ます) そうです', arti: 'Mau hujan sekarang juga.', kata: ['今にも', '雨が', '降りそうです'], jawaban: '今にも 雨が 降りそうです', penjelasan: 'Kata Kerja Bentuk ます + そうです = gejala akan terjadi.' },
  { id: 's2', fokus: 'Kata Kerja (Bentuk ます) そうです', arti: 'Sebentar lagi Sakura mau mekar.', kata: ['もうすぐ', '桜が', '咲きそうです'], jawaban: 'もうすぐ 桜が 咲きそうです', penjelasan: 'そう bisa dipakai bersama もうすぐ.' },
  { id: 's3', fokus: 'Kata Kerja (Bentuk ます) そうです', arti: 'Rupanya mau menjadi dingin.', kata: ['これから', '寒くなりそうです'], jawaban: 'これから 寒くなりそうです', penjelasan: 'Bentuk ます なります → なりそうです.' },
  { id: 's4', fokus: 'Kata Kerja (Bentuk ます) そうです', arti: 'Kancing baju hampir terlepas.', kata: ['上着の ボタンが', 'とれそうですよ'], jawaban: '上着の ボタンが とれそうですよ', penjelasan: 'Dari Contoh Kalimat Bab 43: ボタンが とれそうです.' },
  { id: 's5', fokus: 'Kata Kerja (Bentuk ます) そうです', arti: 'Materinya kurang, ya. ……Maaf, tolong fotokopi sebentar.', kata: ['資料が', '足りませんね', 'すみませんが', 'ちょっと コピーして 来て ください'], jawaban: '資料が 足りませんね すみませんが ちょっと コピーして 来て ください', penjelasan: 'Percakapan Contoh Kalimat 43.' },
  { id: 's6', fokus: 'Kata Sifat い そうです / Kata Sifat な そうです', arti: 'Rupanya masakan ini pedas.', kata: ['この 料理は', '辛そうです'], jawaban: 'この 料理は 辛そうです', penjelasan: 'Kata Sifat い hilangkan い lalu + そうです.' },
  { id: 's7', fokus: 'Kata Sifat い そうです / Kata Sifat な そうです', arti: 'Rupanya dia pintar.', kata: ['彼女は', '頭が', 'よさそうです'], jawaban: '彼女は 頭が よさそうです', penjelasan: 'いい → よさそうです (bentuk khusus).' },
  { id: 's8', fokus: 'Kata Sifat い そうです / Kata Sifat な そうです', arti: 'Rupanya meja ini kuat.', kata: ['この 机は', '丈夫そうです'], jawaban: 'この 机は 丈夫そうです', penjelasan: 'Kata Sifat な langsung + そうです.' },
  { id: 's9', fokus: 'Kata Sifat い そうです / Kata Sifat な そうです', arti: 'Wah, kelihatan enak.', kata: ['わあ', 'おいしそうですね'], jawaban: 'わあ おいしそうですね', penjelasan: 'Dari Contoh Kalimat 43: おいしそうですね.' },
  { id: 's10', fokus: 'Kata Sifat い そうです / Kata Sifat な そうです', arti: 'Kelihatan senang, ya.', kata: ['みなさん', 'うれしそうですね'], jawaban: 'みなさん うれしそうですね', penjelasan: 'Perasaan orang diduga lewat そうです (dari catatan tata bahasa Bab 43).' },
  { id: 's11', fokus: 'Kata Kerja Bentuk て 来ます', arti: 'Pergi beli rokok sebentar.', kata: ['ちょっと', 'たばこを', '買って 来ます'], jawaban: 'ちょっと たばこを 買って 来ます', penjelasan: '～て 来ます = pergi melakukan lalu kembali.' },
  { id: 's12', fokus: 'Kata Kerja Bentuk て 来ます', arti: 'Pergi membeli susu di pasar swalayan.', kata: ['スーパーで', '牛乳を', '買って 来ます'], jawaban: 'スーパーで 牛乳を 買って 来ます', penjelasan: 'Tempat beraksi ditandai で.' },
  { id: 's13', fokus: 'Kata Kerja Bentuk て 来ます', arti: 'Pergi mengambil gelas kopi dari dapur.', kata: ['台所から', 'コーヒーカップを', '取って 来ます'], jawaban: '台所から コーヒーカップを 取って 来ます', penjelasan: 'Asal barang ditandai から.' },
  { id: 's14', fokus: 'Kata Kerja Bentuk て 来ます', arti: 'Pergi ke kantor pos.', kata: ['郵便局へ', '行って 来ます'], jawaban: '郵便局へ 行って 来ます', penjelasan: '～へ 行って 来ます = pergi ke suatu tempat lalu kembali.' },
  { id: 's15', fokus: 'Kata Kerja Bentuk て 来ます', arti: 'Pergi sebentar.', kata: ['ちょっと', '出かけて 来ます'], jawaban: 'ちょっと 出かけて 来ます', penjelasan: '出かけて 来ます = keluar sebentar.' },
  { id: 's16', fokus: 'Kata Kerja Bentuk て 来ます', arti: 'Keluar sebentar. Kira-kira pukul berapa kembali?', kata: ['ちょっと', '出かけて 来ます', '何時ごろ', '帰りますか'], jawaban: 'ちょっと 出かけて 来ます 何時ごろ 帰りますか', penjelasan: 'Percakapan Contoh Kalimat 43.' },
  { id: 's17', fokus: 'Kata Kerja Bentuk て 来ます', arti: 'Karena penjelasan hanya satu lembar, pergi memfotokopi sebentar.', kata: ['説明書は 1枚しか ないんで', 'ちょっと コピーして 来ます'], jawaban: '説明書は 1枚しか ないんで ちょっと コピーして 来ます', penjelasan: 'Alasan + ～て 来ます (dari 練習 B Bab 43).' },
  { id: 's18', fokus: 'Kata Kerja Bentuk て くれませんか', arti: 'Pergi ke toko 24 jam. ……Kalau begitu, tolong belikan saya makan siang kotak?', kata: ['コンビニへ 行って 来ます', 'じゃ', 'お弁当を', '買って 来て くれませんか'], jawaban: 'コンビニへ 行って 来ます じゃ お弁当を 買って 来て くれませんか', penjelasan: '～て くれませんか = permintaan halus kepada orang setara.' },
  { id: 's19', fokus: 'Kata Kerja Bentuk て くれませんか', arti: 'Kalau begitu, tolong ambilkan barang bawaan ini?', kata: ['この 荷物を', '取って 来て くれませんか'], jawaban: 'この 荷物を 取って 来て くれませんか', penjelasan: 'Dari 練習 C Bab 43.' },
  { id: 's20', fokus: 'Kata Kerja (Bentuk ます) そうです', arti: 'Ayo bawa payung karena sepertinya akan hujan.', kata: ['雨が 降りそうですから', '傘を', '持って 行きましょう'], jawaban: '雨が 降りそうですから 傘を 持って 行きましょう', penjelasan: 'そうです + から menyatakan alasan.' },
]
