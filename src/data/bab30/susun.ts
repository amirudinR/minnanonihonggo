import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 30 — fokus 文型:
//  (1) Kata Kerja Bentuk てあります
//  (2) Kata Kerja Bentuk ておきます
//  + catatan: まだ + Bentuk positif , とか , Partikel + も
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 30 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Benda₁ に Kata Benda₂ が Kata Kerja Bentuk てあります', arti: 'Di atas meja diletakkan catatan.', kata: ['机の', '上に', 'メモが', '置いて あります'], jawaban: '机の 上に メモが 置いて あります', penjelasan: '～てあります menyatakan akibat perbuatan seseorang yang masih berlangsung.' },
  { id: 's2', fokus: 'Kata Benda₁ に Kata Benda₂ が Kata Kerja Bentuk てあります', arti: 'Pada kalender ditulis rencana bulan ini.', kata: ['カレンダーに', '今月の', '予定が', '書いて あります'], jawaban: 'カレンダーに 今月の 予定が 書いて あります', penjelasan: 'Kata kerja transitif 書きます → 書いて あります.' },
  { id: 's3', fokus: 'Kata Benda₁ に Kata Benda₂ が Kata Kerja Bentuk てあります', arti: 'Di dinding ada gambar bunga dan hewan.', kata: ['壁に', '花や', '動物の', '絵が', 'かいて あります'], jawaban: '壁に 花や 動物の 絵が かいて あります', penjelasan: 'Kata Benda₁(壁) に ～が かいて あります.' },
  { id: 's4', fokus: 'Kata Benda₁ に Kata Benda₂ が Kata Kerja Bentuk てあります', arti: 'Di dinding tergantung gambar.', kata: ['かべに', 'えが', 'かけて あります'], jawaban: 'かべに えが かけて あります', penjelasan: 'かけます (menggantung) → かけて あります.' },
  { id: 's5', fokus: 'Kata Benda₂ は Kata Benda₁ に Kata Kerja Bentuk てあります', arti: 'Rencana bulan ini ditulis pada kalender.', kata: ['今月の', '予定は', 'カレンダーに', '書いて あります'], jawaban: '今月の 予定は カレンダーに 書いて あります', penjelasan: 'Jika Kata Benda₂ jadi topik, dipakai は.' },
  { id: 's6', fokus: 'Kata Benda₂ は Kata Benda₁ に Kata Kerja Bentuk てあります', arti: '……Disimpan di laci itu.', kata: ['あの', '引き出しに', 'して ありますよ'], jawaban: 'あの 引き出しに して ありますよ', penjelasan: '～てあります menjawab pertanyaan "di mana?".' },
  { id: 's7', fokus: 'Kata Benda₂ は Kata Benda₁ に Kata Kerja Bentuk てあります', arti: 'Di atas meja tertata piring-piring.', kata: ['テーブルに', 'お皿が', '並べて あります'], jawaban: 'テーブルに お皿が 並べて あります', penjelasan: '並べます (menyusun) → 並べて あります.' },
  { id: 's8', fokus: 'Kata Benda₂ は Kata Benda₁ に Kata Kerja Bentuk てあります', arti: 'Papan pengumuman di sana terpasang poster, ya. Itu apa?', kata: ['あそこに', 'ポスターが', 'はって ありますね', 'あれは', '何ですか'], jawaban: 'あそこに ポスターが はって ありますね あれは 何ですか', penjelasan: 'はって あります = tertempel (keadaan akibat aksi).' },
  { id: 's9', fokus: 'Kata Benda₂ は Kata Benda₁ に Kata Kerja Bentuk てあります', arti: 'Selotip disimpan di laci itu.', kata: ['セロテープは', 'あの', '引き出しに', 'して あります'], jawaban: 'セロテープは あの 引き出しに して あります', penjelasan: 'Topik Kata Benda₂ ditandai は; ～に menyebut tempat.' },
  { id: 's10', fokus: 'Kata Benda₂ は Kata Benda₁ に Kata Kerja Bentuk てあります', arti: 'Gunting dimasukkan ke dalam laci.', kata: ['はさみは', '引き出しの', '中に', '入れて あります'], jawaban: 'はさみは 引き出しの 中に 入れて あります', penjelasan: '入れます (memasukkan) → 入れて あります.' },
  { id: 's11', fokus: 'Kata Kerja Bentuk ておきます', arti: 'Sebelum perjalanan, membeli karcis.', kata: ['旅行の', 'まえに', '切符を', '買って おきます'], jawaban: '旅行の まえに 切符を 買って おきます', penjelasan: '～ておきます = menyelesaikan aksi yang diperlukan sampai waktu tertentu.' },
  { id: 's12', fokus: 'Kata Kerja Bentuk ておきます', arti: 'Apa yang harus saya lakukan sampai dengan rapat berikutnya?', kata: ['次の', '会議までに', '何を', 'して おいたら', 'いいですか'], jawaban: '次の 会議までに 何を して おいたら いいですか', penjelasan: '～ておいたら いいですか = menanyakan tindakan persiapan.' },
  { id: 's13', fokus: 'Kata Kerja Bentuk ておきます', arti: 'Diharapkan untuk membaca materi ini.', kata: ['この', '資料を', '読んで おいて', 'ください'], jawaban: 'この 資料を 読んで おいて ください', penjelasan: '～ておいて ください = melakukan aksi sebagai persiapan.' },
  { id: 's14', fokus: 'Kata Kerja Bentuk ておきます', arti: 'Jika memakai gunting, tolong kembalikan ke tempat semula.', kata: ['はさみを', '使ったら', '元の', '所に', '戻して おいて', 'ください'], jawaban: 'はさみを 使ったら 元の 所に 戻して おいて ください', penjelasan: '～ておきます untuk tindakan persiapan (mengembalikan).' },
  { id: 's15', fokus: 'Kata Kerja Bentuk ておきます', arti: 'Karena besok ada rapat, kursinya dibiarkan begini saja.', kata: ['あした', '会議が', 'ありますから', 'いすは', 'この', 'ままに', 'して おいて', 'ください'], jawaban: 'あした 会議が ありますから いすは この ままに して おいて ください', penjelasan: '～ておきます untuk mempertahankan keadaan.' },
  { id: 's16', fokus: 'Kata Kerja Bentuk ておきます', arti: 'Sebelum menulis laporan, mengumpulkan bahan.', kata: ['レポートを', '書く', 'まえに', '資料を', 'あつめて おきます'], jawaban: 'レポートを 書く まえに 資料を あつめて おきます', penjelasan: '～ておきます = menyelesaikan persiapan lebih dulu.' },
  { id: 's17', fokus: 'Kata Kerja Bentuk ておきます', arti: 'Setelah selesai makan, mencuci mangkuk dan piring.', kata: ['食事が', '終わったら', 'ちゃわんや', 'お皿を', 'あらって おきます'], jawaban: '食事が 終わったら ちゃわんや お皿を あらって おきます', penjelasan: '～たら + ～ておきます = menyelesaikan aksi sesudahnya.' },
  { id: 's18', fokus: 'まだ + Bentuk positif', arti: 'Masih turun hujan.', kata: ['まだ', '雨が', '降って います'], jawaban: 'まだ 雨が 降って います', penjelasan: 'まだ + bentuk positif = aksi/keadaan masih berlangsung.' },
  { id: 's19', fokus: 'まだ + Bentuk positif', arti: 'Karena masih dipakai, tolong dibiarkan begitu saja.', kata: ['まだ', '使って いますから', 'そのままに', 'して おいて', 'ください'], jawaban: 'まだ 使って いますから そのままに して おいて ください', penjelasan: 'まだ ～ています menyatakan keadaan yang belum berubah.' },
  { id: 's20', fokus: 'とか', arti: 'Kenapa? Tenis, atau berenang...', kata: ['そうですね', 'テニスとか', '水泳とか'], jawaban: 'そうですね テニスとか 水泳とか', penjelasan: 'とか memberikan contoh, bisa dipakai pada benda terakhir.' },
]
