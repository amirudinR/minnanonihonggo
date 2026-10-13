import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 18 — fokus 文型:
//  (1) Kata Benda / Kata Kerja Bentuk Kamus こと が できます
//  (2) わたしの 趣味は Kata Benda / Kata Kerja Bentuk Kamus こと です
//  (3) Kata Kerja Bentuk Kamus / Kata Benda の / jangka waktu まえに、Kata Kerja2
//  + catatan: なかなか, ぜひ
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 18 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～が できます', arti: 'Saya bisa menyetir mobil.', kata: ['車の', '運転が', 'できます'], jawaban: '車の 運転が できます', penjelasan: 'Kata Benda aksi + が できます = bisa melakukan.' },
  { id: 's2', fokus: '～が できます', arti: 'Sdr. Miller bisa berbahasa Jepang.', kata: ['ミラーさんは', '日本語が', 'できます'], jawaban: 'ミラーさんは 日本語が できます', penjelasan: 'Kata Benda ketrampilan + が できます.' },
  { id: 's3', fokus: '～が できます', arti: 'Di sini bisa memesan hotel?', kata: ['ここで', 'ホテルの', '予約が', 'できますか'], jawaban: 'ここで ホテルの 予約が できますか', penjelasan: 'Tempat で + Kata Benda aksi が できます.' },
  { id: 's4', fokus: '～が できます', arti: 'Sdr. Miller bisa bermain piano.', kata: ['ミラーさんは', 'ピアノが', 'できます'], jawaban: 'ミラーさんは ピアノが できます', penjelasan: 'ピアノ = ketrampilan, dibubuhkan が できます.' },
  { id: 's5', fokus: 'Kata Kerja Bentuk Kamus こと が できます', arti: 'Sdr. Miller bisa membaca Kanji.', kata: ['ミラーさんは', '漢字を', '読む ことが', 'できます'], jawaban: 'ミラーさんは 漢字を 読む ことが できます', penjelasan: 'Kata Kerja Bentuk Kamus + こと が できます.' },
  { id: 's6', fokus: 'Kata Kerja Bentuk Kamus こと が できます', arti: 'Bisa membayar dengan kartu?', kata: ['カードで', '払う ことが', 'できますか'], jawaban: 'カードで 払う ことが できますか', penjelasan: 'Bentuk kamus 払う + こと が できますか.' },
  { id: 's7', fokus: 'Kata Kerja Bentuk Kamus こと が できます', arti: 'Sdr. Maria bisa bersepeda?', kata: ['マリアさんは', '自転車に', '乗る ことが', 'できますか'], jawaban: 'マリアさんは 自転車に 乗る ことが できますか', penjelasan: 'Menanyakan kemampuan dengan ～ことが できますか.' },
  { id: 's8', fokus: 'Kata Kerja Bentuk Kamus こと が できます', arti: 'Saya bisa bermain piano.', kata: ['ピアノを', '弾く ことが', 'できます'], jawaban: 'ピアノを 弾く ことが できます', penjelasan: '弾く = bermain (alat musik), bentuk kamus + こと.' },
  { id: 's9', fokus: 'Kata Kerja Bentuk Kamus こと が できます', arti: 'Di perpustakaan bisa meminjam kamus?', kata: ['図書館で', '辞書を', '借りる ことが', 'できますか'], jawaban: '図書館で 辞書を 借りる ことが できますか', penjelasan: 'Tempat で + Kata Kerja Bentuk Kamus こと が できますか.' },
  { id: 's10', fokus: 'なかなか ～できません', arti: 'Di Jepang tidak mudah untuk melihat kuda.', kata: ['日本では', 'なかなか', '馬を', '見る ことが', 'できません'], jawaban: '日本では なかなか 馬を 見る ことが できません', penjelasan: 'なかなか + bentuk negatif = tidak mudah/sulit dilakukan.' },
  { id: 's11', fokus: 'Kata Benda で ～が できます', arti: 'Dari hotel bisa pergi ke bandara dengan bus?', kata: ['ホテルから', 'バスで', '空港へ', '行く ことが', 'できますか'], jawaban: 'ホテルから バスで 空港へ 行く ことが できますか', penjelasan: 'Kata Kerja Bentuk Kamus こと が できます untuk kemungkinan.' },
  { id: 's12', fokus: 'わたしの 趣味は ～ことです', arti: 'Hobi saya adalah mengumpulkan jam yang lama.', kata: ['わたしの 趣味は', '古い 時計を', '集める ことです'], jawaban: 'わたしの 趣味は 古い 時計を 集める ことです', penjelasan: '趣味は + Kata Kerja Bentuk Kamus ことです.' },
  { id: 's13', fokus: 'わたしの 趣味は ～ことです', arti: 'Hobi saya adalah mendengarkan musik.', kata: ['わたしの 趣味は', '音楽を', '聞く ことです'], jawaban: 'わたしの 趣味は 音楽を 聞く ことです', penjelasan: 'Menjelaskan isi hobi secara konkret dengan ～ことです.' },
  { id: 's14', fokus: 'わたしの 趣味は ～ことです', arti: 'Hobi saya adalah mengambil foto.', kata: ['わたしの 趣味は', '写真を', '撮る ことです'], jawaban: 'わたしの 趣味は 写真を 撮る ことです', penjelasan: 'Kata Kerja Bentuk Kamus + ことです setelah 趣味は.' },
  { id: 's15', fokus: 'Kata Kerja Bentuk Kamus まえに', arti: 'Sebelum tidur, membaca buku.', kata: ['寝る まえに', '本を', '読みます'], jawaban: '寝る まえに 本を 読みます', penjelasan: 'Kata Kerja1 Bentuk Kamus + まえに, Kata Kerja2.' },
  { id: 's16', fokus: 'Kata Kerja Bentuk Kamus まえに', arti: 'Sebelum datang ke Jepang, belajar bahasa Jepang.', kata: ['日本へ', '来る まえに', '日本語を', '勉強しました'], jawaban: '日本へ 来る まえに 日本語を 勉強しました', penjelasan: 'Kata Kerja1 selalu Bentuk Kamus walau Kata Kerja2 lampau.' },
  { id: 's17', fokus: 'Kata Benda の まえに', arti: 'Sebelum makan, mencuci tangan.', kata: ['食事の まえに', '手を', '洗います'], jawaban: '食事の まえに 手を 洗います', penjelasan: 'Kata Benda aksi + の + まえに.' },
  { id: 's18', fokus: 'Kata Benda の まえに', arti: 'Sebelum makan, minum obat ini.', kata: ['食事の まえに', 'この 薬を', '飲んで ください'], jawaban: '食事の まえに この 薬を 飲んで ください', penjelasan: 'Kata Benda の まえに + permintaan ～て ください.' },
  { id: 's19', fokus: 'jana waktu まえに', arti: 'Tiga tahun yang lalu saya menikah.', kata: ['3年 まえに', '結婚しました'], jawaban: '3年 まえに 結婚しました', penjelasan: 'Kata Keterangan Bilangan + まえに = "～ yang lalu" (tanpa の).' },
  { id: 's20', fokus: 'Kata Kerja Bentuk Kamus まえに', arti: 'Sebelum pergi ke sekolah, sarapan.', kata: ['学校へ', '行く まえに', '朝ごはんを', '食べます'], jawaban: '学校へ 行く まえに 朝ごはんを 食べます', penjelasan: 'Kata Kerja1 Bentuk Kamus + まえに, lalu Kata Kerja2.' },
]
