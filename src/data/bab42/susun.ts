import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 42 — fokus 文型:
//  (1) Kata Kerja Bentuk Kamus / Kata Benda の ために、～
//  (2) Kata Kerja Bentuk Kamus の / Kata Benda に ～ (kegunaan)
//  (3) Kata Keterangan Bilangan は／も
//  (4) ～に よって
//  + catatan: ため に vs ように , Kata Keterangan Bilangan も
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 42 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja Bentuk Kamus ために', arti: 'Saya menabung uang untuk memiliki toko sendiri.', kata: ['自分の 店を', '持つ ために', '貯金しています'], jawaban: '自分の 店を 持つ ために 貯金しています', penjelasan: '～ために menyatakan tujuan; di depan Kata Kerja Bentuk Kamus.' },
  { id: 's2', fokus: 'Kata Kerja Bentuk Kamus ために', arti: 'Saya belajar hukum untuk menjadi pengacara.', kata: ['弁護士に', 'なる ために', '法律を', '勉強しています'], jawaban: '弁護士に なる ために 法律を 勉強しています', penjelasan: 'なる adalah Kata Kerja Keinginan Bentuk Kamus + ために.' },
  { id: 's3', fokus: 'Kata Kerja Bentuk Kamus ために', arti: 'Saya belajar dengan sungguh-sungguh untuk masuk universitas.', kata: ['大学に', 'はいる ために', '一生懸命', '勉強します'], jawaban: '大学に はいる ために 一生懸命 勉強します', penjelasan: 'Bentuk Kamus + ために menyatakan tujuan.' },
  { id: 's4', fokus: 'Kata Benda の ために', arti: 'Saya meminjam mobil untuk pindah rumah.', kata: ['引っ越しの ために', '車を', '借ります'], jawaban: '引っ越しの ために 車を 借ります', penjelasan: 'Kata Benda + の ために menyatakan tujuan.' },
  { id: 's5', fokus: 'Kata Benda の ために', arti: 'Saya berlari setiap pagi demi kesehatan.', kata: ['健康の ために', '毎朝', '走っています'], jawaban: '健康の ために 毎朝 走っています', penjelasan: '健康の ために = demi kesehatan.' },
  { id: 's6', fokus: 'Kata Benda の ために', arti: 'Saya membangun rumah untuk keluarga.', kata: ['家族の ために', 'うちを', '建てます'], jawaban: '家族の ために うちを 建てます', penjelasan: 'の ために menggantikan kata benda.' },
  { id: 's7', fokus: 'Kata Benda の ために', arti: 'Demi anak-anak, saya menggambar buku cerita bergambar.', kata: ['子どもたちの ために', '絵本を', 'かいています'], jawaban: '子どもたちの ために 絵本を かいています', penjelasan: 'Pola 練習 B: 子どもの ために.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk Kamus のに 使います', arti: 'Gunting ini digunakan untuk memotong bunga.', kata: ['この はさみは', '花を', '切るのに', '使います'], jawaban: 'この はさみは 花を 切るのに 使います', penjelasan: 'Bentuk Kamus + のに 使います = digunakan untuk.' },
  { id: 's9', fokus: 'Kata Kerja Bentuk Kamus のに 使います', arti: 'Ini gunting kuku. Digunakan untuk memotong kuku.', kata: ['これは', 'つめ切りです', 'つめを', '切るのに', '使います'], jawaban: 'これは つめ切りです つめを 切るのに 使います', penjelasan: 'Kegunaan alat dijelaskan dengan ～のに 使います.' },
  { id: 's10', fokus: 'Kata Kerja Bentuk Kamus のに 使います', arti: 'Dipakaikan untuk membuka botol anggur.', kata: ['ワインを', '開けるのに', '使います'], jawaban: 'ワインを 開けるのに 使います', penjelasan: 'Dari Contoh Kalimat Bab 42: ワインを 開けるのに 使います.' },
  { id: 's11', fokus: 'Kata Benda に 便利です／いいです', arti: 'Tas ini besar sehingga praktis untuk perjalanan.', kata: ['この かばんは', '大きくて', '旅行に', '便利です'], jawaban: 'この かばんは 大きくて 旅行に 便利です', penjelasan: 'Kata Benda + に 便利です menyatakan kegunaan.' },
  { id: 's12', fokus: 'Kata Benda に いいです', arti: 'Praktis karena dompet, dokumen dan saputangan dapat dimasukkan terpisah, jadi baik untuk perjalanan dan kerja.', kata: ['財布や 書類や ハンカチが', '別々に しめるので', '旅行や 仕事に', '便利なんです'], jawaban: '財布や 書類や ハンカチが 別々に しめるので 旅行や 仕事に 便利なんです', penjelasan: 'Dari Contoh Kalimat 42: 旅行や 仕事に 便利なんです.' },
  { id: 's13', fokus: 'Kata Kerja Bentuk Kamus のに 役に立ちます', arti: 'Kamus ini berguna untuk meneliti arti kanji.', kata: ['この 辞書は', '漢字の 意味を', 'しらべるのに', '役に立ちます'], jawaban: 'この 辞書は 漢字の 意味を しらべるのに 役に立ちます', penjelasan: '～のに 役に立ちます menyatakan kegunaan.' },
  { id: 's14', fokus: 'Kata Kerja Bentuk Kamus のに かかります', arti: 'Untuk memperbaiki mobil ini, perlu dua minggu.', kata: ['この 車を', '修理するのに', '2週間は', 'かかります'], jawaban: 'この 車を 修理するのに 2週間は かかります', penjelasan: '～のに かかります menyatakan lamanya waktu.' },
  { id: 's15', fokus: 'Kata Keterangan Bilangan は', arti: 'Saya berencana menabung separuhnya (bonus).', kata: ['わたしは', '半分は', '貯金する つもりです'], jawaban: 'わたしは 半分は 貯金する つもりです', penjelasan: 'は pada jumlah menyatakan batas minimal.' },
  { id: 's16', fokus: 'Kata Keterangan Bilangan も', arti: 'Eh! Menabung separuhnya?', kata: ['えっ', '半分も', '貯金するんですか'], jawaban: 'えっ 半分も 貯金するんですか', penjelasan: 'も pada jumlah menyatakan pembicara merasa banyak.' },
  { id: 's17', fokus: 'Kata Keterangan Bilangan も', arti: 'Untuk memperbaiki video, memakan waktu tiga minggu pun.', kata: ['ビデオを', '修理するのに', '3週間も', 'かかりました'], jawaban: 'ビデオを 修理するのに 3週間も かかりました', penjelasan: '3週間も = sampai tiga minggu (terasa lama).' },
  { id: 's18', fokus: 'Kata Keterangan Bilangan は', arti: 'Untuk membangun rumah, perlu 40 juta yen.', kata: ['うちを', '建てるのに', '4,000万円は', '必要です'], jawaban: 'うちを 建てるのに 4,000万円は 必要です', penjelasan: 'は menyatakan batas minimal yang dikisarkan.' },
  { id: 's19', fokus: '～に よって', arti: 'Chicken Ramen diciptakan oleh Bapak Ando Momofuku pada tahun 1958.', kata: ['チキンラーメンは', '1958年に', '安藤百福さんによって', '発明されました'], jawaban: 'チキンラーメンは 1958年に 安藤百福さんによって 発明されました', penjelasan: 'Pelaku pada kalimat pasif penciptaan ditandai に よって.' },
  { id: 's20', fokus: '～に よって', arti: 'Chicken Ramen adalah makanan yang ditemukan oleh Bapak Ando Momofuku.', kata: ['チキンラーメンは', '安藤百福さんによって', '発明された', '食べ物です'], jawaban: 'チキンラーメンは 安藤百福さんによって 発明された 食べ物です', penjelasan: 'Pelaku penemuan ditandai に よって, bukan に.' },
]
