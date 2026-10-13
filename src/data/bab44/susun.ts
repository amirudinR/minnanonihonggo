import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 44 — fokus 文型:
//  (1) { Kata Kerja Bentuk ます / Kata Sifat い / Kata Sifat な } すぎます
//  (2) Kata Kerja Bentuk ます { やすいです ／ にくいです }
//  (3) Kata Benda を { ～く ／ ～に } します
//  (4) Kata Benda に します (pilihan/keputusan)
//  + catatan: すぎます (Kata Kerja Kelompok II) , やすい／にくい
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 44 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja Bentuk ます すぎます', arti: 'Tadi malam (saya) minum terlalu banyak minuman keras.', kata: ['ゆうべ', 'お酒を', '飲みすぎました'], jawaban: 'ゆうべ お酒を 飲みすぎました', penjelasan: 'Bentuk ます + すぎます = kelewatan/terlalu.' },
  { id: 's2', fokus: 'Kata Kerja Bentuk ます すぎます', arti: 'Karena tertawa terlalu banyak, keluar air mata.', kata: ['笑いすぎて', '涙が', '出たんです'], jawaban: '笑いすぎて 涙が 出たんです', penjelasan: 'すぎて menyatakan sebab berlebihan.' },
  { id: 's3', fokus: 'Kata Sifat い すぎます / Kata Sifat な すぎます', arti: 'Sweater ini terlalu besar.', kata: ['この セーターは', '大きすぎます'], jawaban: 'この セーターは 大きすぎます', penjelasan: 'Kata Sifat い hilangkan い lalu + すぎます.' },
  { id: 's4', fokus: 'Kata Sifat い すぎます / Kata Sifat な すぎます', arti: 'Rumah ini terlalu tinggi harga sewanya.', kata: ['この うちは', '家賃が', '高すぎます'], jawaban: 'この うちは 家賃が 高すぎます', penjelasan: '高い → 高すぎます.' },
  { id: 's5', fokus: 'Kata Sifat い すぎます / Kata Sifat な すぎます', arti: 'Mobil pada akhir-akhir ini tidak menarik sebab operasinya terlalu mudah.', kata: ['最近の 車は', '操作が', '簡単すぎて', '運転が おもしろくないです'], jawaban: '最近の 車は 操作が 簡単すぎて 運転が おもしろくないです', penjelasan: 'Kata Sifat な + すぎて.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk ます やすいです', arti: 'PC ini mudah dipakai.', kata: ['この パソコンは', '使いやすいです'], jawaban: 'この パソコンは 使いやすいです', penjelasan: 'Bentuk ます + やすいです = mudah dilakukan.' },
  { id: 's7', fokus: 'Kata Kerja Bentuk ます にくいです', arti: 'Tokyo tidak nyaman untuk tinggali.', kata: ['東京は', '住みにくいです'], jawaban: '東京は 住みにくいです', penjelasan: 'Bentuk ます + にくいです = sulit dilakukan.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk ます やすいです', arti: 'Kemeja putih mudah kotor.', kata: ['白い シャツは', '汚れやすいです'], jawaban: '白い シャツは 汚れやすいです', penjelasan: 'やすい = aksi mudah terjadi (non-keinginan).' },
  { id: 's9', fokus: 'Kata Kerja Bentuk ます にくいです', arti: 'Pada hari yang hujan, pakaian sulit mengering.', kata: ['雨の 日は', '洗濯物が', '乾きにくいです'], jawaban: '雨の 日は 洗濯物が 乾きにくいです', penjelasan: 'にくい = aksi jarang/sulit terjadi.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk ます にくいです', arti: 'Gelas ini kuat dan tidak mudah terpecah.', kata: ['この コップは', '丈夫で', '割れにくいですよ'], jawaban: 'この コップは 丈夫で 割れにくいですよ', penjelasan: 'Dari Contoh Kalimat 44.' },
  { id: 's11', fokus: 'Kata Benda を ～く します', arti: 'Mengeraskan bunyi.', kata: ['音を', '大きく します'], jawaban: '音を 大きく します', penjelasan: 'Kata Sifat い → ～く します = mengubah objek.' },
  { id: 's12', fokus: 'Kata Benda を ～に します', arti: 'Membersihkan kamar.', kata: ['部屋を', 'きれいに します'], jawaban: '部屋を きれいに します', penjelasan: 'Kata Sifat な → ～に します.' },
  { id: 's13', fokus: 'Kata Benda を ～に します', arti: 'Mengurangi jumlah garam sampai setengah.', kata: ['塩の 量を', '半分に しました'], jawaban: '塩の 量を 半分に しました', penjelasan: 'Kata Benda + に します = mengubah menjadi.' },
  { id: 's14', fokus: 'Kata Benda を ～く します', arti: 'Memotong kertas menjadi pendek.', kata: ['紙を', '短く します'], jawaban: '紙を 短く します', penjelasan: 'Dari 練習 A Bab 44: 紙を 短く します.' },
  { id: 's15', fokus: 'Kata Benda を ～に します', arti: 'Menaikkan harga menjadi dua kali.', kata: ['水の 量を', '2倍に します'], jawaban: '水の 量を 2倍に します', penjelasan: 'Jumlah + に します.' },
  { id: 's16', fokus: 'Kata Benda に します', arti: 'Lauk untuk makan malam ini mau apa? ……Hari ini ayo kita pilih masakan ikan.', kata: ['今晩の おかずは', '何に しましょうか', 'きょうは', '魚料理に しようよ'], jawaban: '今晩の おかずは 何に しましょうか きょうは 魚料理に しようよ', penjelasan: 'Kata Benda + に します menyatakan pilihan.' },
  { id: 's17', fokus: 'Kata Benda に します', arti: 'Kamarnya mau single atau twin?', kata: ['部屋は', 'シングルに しますか', 'ツインに しますか'], jawaban: '部屋は シングルに しますか ツインに しますか', penjelasan: '～に しますか menanyakan pilihan.' },
  { id: 's18', fokus: 'Kata Benda に します', arti: 'Rapat diadakan besok.', kata: ['会議は', 'あしたに します'], jawaban: '会議は あしたに します', penjelasan: 'Waktu + に します = memutuskan kapan.' },
  { id: 's19', fokus: 'Kata Benda に します', arti: 'Kalau begitu, saya ambil yang ini.', kata: ['そうですか', 'じゃ', 'これに します'], jawaban: 'そうですか じゃ これに します', penjelasan: 'これに します = memutuskan pilih yang ini.' },
  { id: 's20', fokus: 'Kata Kerja Bentuk ます やすいです', arti: 'Barangnya ada banyak, jadi sepertinya bisa menulis laporan yang bagus.', kata: ['資料が たくさん あるので', 'いい レポートが', '書けそうです'], jawaban: '資料が たくさん あるので いい レポートが 書けそうです', penjelasan: '～そうです menyatakan dugaan akan bisa terjadi.' },
]
