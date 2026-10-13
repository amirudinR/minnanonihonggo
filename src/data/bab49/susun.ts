import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 49 — fokus 文型:
//  (1) 尊敬（受身）〜られました
//  (2) お〜に なりました
//  (3) お／ご〜なさいます
//  (4) お〜ください
//  + catatan: いらっしゃいます・めしあがります・ごらんになります 等
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 49 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '尊敬（受身）〜られました', arti: 'Direktur sudah pulang.', kata: ['社長は', 'もう', '帰られました'], jawaban: '社長は もう 帰られました', penjelasan: 'Bentuk 受身 dari 帰ります = 帰られます (bentuk hormat).' },
  { id: 's2', fokus: '尊敬（受身）〜られました', arti: 'Kepala bagian akan dinas ke India minggu depan.', kata: ['部長は', '来週', 'インドへ', '出張されます'], jawaban: '部長は 来週 インドへ 出張されます', penjelasan: '出張します → 出張されます.' },
  { id: 's3', fokus: '尊敬（受身）〜られました', arti: 'Kepala urusan sudah membaca bahan.', kata: ['課長は', 'もう', '資料を', '読まれました'], jawaban: '課長は もう 資料を 読まれました', penjelasan: '読みます → 読まれました.' },
  { id: 's4', fokus: '尊敬（受身）〜られました', arti: 'Sdri. Ito akan datang pukul tujuh.', kata: ['伊藤さんは', '7時に', '来られます'], jawaban: '伊藤さんは 7時に 来られます', penjelasan: '来ます → 来られます (bentuk hormat).' },
  { id: 's5', fokus: '尊敬（受身）〜られました', arti: 'Sudah berhenti minum sake?', kata: ['お酒を', 'やめられたんですか'], jawaban: 'お酒を やめられたんですか', penjelasan: 'やめます → やめられました (bentuk tanya).' },
  { id: 's6', fokus: 'お〜に なりました', arti: 'Direktur sudah pulang.', kata: ['社長は', 'もう', 'お帰りに なりました'], jawaban: '社長は もう お帰りに なりました', penjelasan: 'お + Bentuk ます + に なりました (尊敬語).' },
  { id: 's7', fokus: 'お〜に なりました', arti: 'Kepala bagian tidak merokok.', kata: ['部長は', 'たばこを', '吸われません'], jawaban: '部長は たばこを 吸われません', penjelasan: 'Bentuk negatif 受身: 吸います → 吸われません.' },
  { id: 's8', fokus: 'お〜に なりました', arti: 'Masakan ini dibuat oleh istri Bapak Kepala Bagian Matsumoto.', kata: ['この 料理は', '松本部長の 奥様が', 'お作りに なりました'], jawaban: 'この 料理は 松本部長の 奥様が お作りに なりました', penjelasan: '作ります → お作りに なりました.' },
  { id: 's9', fokus: 'お〜に なりました', arti: 'Buku ini ditulis oleh direktur.', kata: ['この 本は', '社長が', 'お書きに なりました'], jawaban: 'この 本は 社長が お書きに なりました', penjelasan: '書きます → お書きに なりました.' },
  { id: 's10', fokus: '尊敬語（いらっしゃいます）', arti: 'Apakah Bapak Watt ada di laboratorium?', kata: ['ワット先生は', '研究室に', 'いらっしゃいます'], jawaban: 'ワット先生は 研究室に いらっしゃいます', penjelasan: 'いらっしゃいます = bentuk hormat khusus dari います.' },
  { id: 's11', fokus: '尊敬語（ご覧になります）', arti: 'Sering menonton film?', kata: ['よく', '映画を', 'ご覧に なりますか'], jawaban: 'よく 映画を ご覧に なりますか', penjelasan: '見ます → ご覧に なります (bentuk hormat khusus).' },
  { id: 's12', fokus: '尊敬語（召し上がります）', arti: 'Apakah (Anda) minum sake?', kata: ['お酒は', '召し上がりますか'], jawaban: 'お酒は 召し上がりますか', penjelasan: '飲みます／食べます → 召し上がります.' },
  { id: 's13', fokus: '尊敬語（おっしゃいます）', arti: 'Nama anak Anda siapa?', kata: ['お子さんの お名前は', '何と', 'おっしゃいますか'], jawaban: 'お子さんの お名前は 何と おっしゃいますか', penjelasan: '言います → おっしゃいます.' },
  { id: 's14', fokus: '尊敬語（ご存じです）', arti: 'Apakah (Anda) tahu berita itu?', kata: ['ニュースを', 'ご存じですか'], jawaban: 'ニュースを ご存じですか', penjelasan: '知っています → ご存じです.' },
  { id: 's15', fokus: 'お〜なさいます', arti: 'Direktur bermain golf.', kata: ['社長は', 'ゴルフを', 'なさいます'], jawaban: '社長は ゴルフを なさいます', penjelasan: 'なさいます = bentuk hormat khusus dari します.' },
  { id: 's16', fokus: 'お〜ください', arti: 'Di sini, silakan masuk.', kata: ['こちらに', 'どうぞ', 'お入り ください'], jawaban: 'こちらに どうぞ お入り ください', penjelasan: 'お + Bentuk ます + ください (perintah sopan).' },
  { id: 's17', fokus: 'お〜ください', arti: 'Silakan pakai bolpoin ini.', kata: ['この ボールペンを', 'お使い ください'], jawaban: 'この ボールペンを お使い ください', penjelasan: '使います → お使い ください.' },
  { id: 's18', fokus: 'お〜ください', arti: 'Hati-hati barang bawaan agar tidak tertinggal!', kata: ['忘れ物に', 'ご注意 ください'], jawaban: '忘れ物に ご注意 ください', penjelasan: 'Kata Benda bahasa Tionghoa memakai ご (ご注意 ください).' },
  { id: 's19', fokus: '尊敬語（いらっしゃって ください）', arti: 'Silakan datang lagi!', kata: ['また', 'いらっしゃって ください'], jawaban: 'また いらっしゃって ください', penjelasan: 'いらっしゃって ください = bentuk hormat dari 来て ください.' },
  { id: 's20', fokus: '尊敬（受身）〜られました', arti: 'Apakah sudah melihat bunga sakura? ……Ya, sudah.', kata: ['もう', '花見に', '行かれましたか', 'はい、行きました'], jawaban: 'もう 花見に 行かれましたか はい、行きました', penjelasan: '行きます → 行かれましたか (bentuk tanya sopan).' },
]
