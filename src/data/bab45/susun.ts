import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 45 — fokus 文型 (hanya 2 pola di bab ini):
//  (1) { Kata Kerja Bentuk Kamus / ない / た / Kata Sifat い / Kata Sifat な / Kata Benda の } 場合は、～
//  (2) { Kata Kerja / Kata Sifat い / Kata Sifat な / Kata Benda } Bentuk Biasa のに、～
//  + catatan: のに (perasaan tak terduga) vs が／ても
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 45 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～場合は、～', arti: 'Jika tidak tepat waktu pada rapat, tolong hubungi koordinator.', kata: ['会議に', '間に 合わない 場合は', '連絡係に', '連絡して ください'], jawaban: '会議に 間に 合わない 場合は 連絡係に 連絡して ください', penjelasan: 'Kata Kerja Bentuk ない + 場合は.' },
  { id: 's2', fokus: '～場合は、～', arti: 'Jika terlambat pada waktunya, tidak bisa masuk ke dalam tempat.', kata: ['時間に', '遅れた 場合は', '会場に', '入れません'], jawaban: '時間に 遅れた 場合は 会場に 入れません', penjelasan: 'Kata Kerja Bentuk た + 場合は menyatakan kondisi lampau.' },
  { id: 's3', fokus: '～場合は、～', arti: 'Jika kondisi PC tidak baik, hubungi nomor ini.', kata: ['パソコンの 調子が', '悪い 場合は', 'この 番号に', '連絡して ください'], jawaban: 'パソコンの 調子が 悪い 場合は この 番号に 連絡して ください', penjelasan: 'Kata Sifat い + 場合は.' },
  { id: 's4', fokus: '～場合は、～', arti: 'Jika perlu kuitansi, silakan beritahukan.', kata: ['領収書が', '必要な 場合は', '言って ください'], jawaban: '領収書が 必要な 場合は 言って ください', penjelasan: 'Kata Sifat な + 場合は.' },
  { id: 's5', fokus: '～場合は、～', arti: 'Jika terjadi kebakaran atau gempa bumi, jangan gunakan lift.', kata: ['火事や 地震の 場合は', 'エレベーターを', '使わないで ください'], jawaban: '火事や 地震の 場合は エレベーターを 使わないで ください', penjelasan: 'Kata Benda + の 場合は.' },
  { id: 's6', fokus: '～場合は、～', arti: 'Jika kereta listrik berhenti, saya akan menghubungi.', kata: ['電車が', '止まった 場合は', '連絡します'], jawaban: '電車が 止まった 場合は 連絡します', penjelasan: 'Kalimat utama menyatakan cara mengatasi.' },
  { id: 's7', fokus: '～場合は、～', arti: 'Jika ada pertanyaan, tanyakan saja.', kata: ['質問が ある 場合は', '聞いて ください'], jawaban: '質問が ある 場合は 聞いて ください', penjelasan: 'Kata Kerja Bentuk Kamus + 場合は.' },
  { id: 's8', fokus: '～場合は、～', arti: 'Jika kereta rel listrik berhenti karena gempa bumi.', kata: ['地震で', '電車が 止まった 場合は', 'バスで', '行きます'], jawaban: '地震で 電車が 止まった 場合は バスで 行きます', penjelasan: 'Kata Kerja Bentuk た + 場合は (edisi Indonesia).' },
  { id: 's9', fokus: '～場合は、～', arti: 'Jika tidak punya stempel, bagaimana?', kata: ['はんこが', 'ない 場合は', 'どう しますか'], jawaban: 'はんこが ない 場合は どう しますか', penjelasan: 'Kata Kerja Bentuk ない + 場合は.' },
  { id: 's10', fokus: '～場合は、～', arti: 'Jika panasnya tinggi, minum obat.', kata: ['熱が', '高い 場合は', '薬を', '飲んで ください'], jawaban: '熱が 高い 場合は 薬を 飲んで ください', penjelasan: 'Kata Sifat い + 場合は.' },
  { id: 's11', fokus: 'のに、～', arti: 'Dia tidak datang padahal sudah berjanji.', kata: ['約束を', 'したのに', '彼女は', '来ませんでした'], jawaban: '約束を したのに 彼女は 来ませんでした', penjelasan: 'のに menyatakan perasaan dikhianati/kecewa.' },
  { id: 's12', fokus: 'のに、～', arti: 'Hari ini (saya) harus bekerja padahal hari Minggu.', kata: ['きょうは', '日曜日なのに', '働かなければ', 'なりません'], jawaban: 'きょうは 日曜日なのに 働かなければ なりません', penjelasan: 'Kata Benda Bentuk Biasa + な + のに.' },
  { id: 's13', fokus: 'のに、～', arti: 'Di tengah pidato, (saya) lupa padahal berusaha keras untuk menghafalnya.', kata: ['一生懸命 練習したのに', '途中で', '忘れて しまいました'], jawaban: '一生懸命 練習したのに 途中で 忘れて しまいました', penjelasan: 'Dari Contoh Kalimat 45.' },
  { id: 's14', fokus: 'のに、～', arti: 'Saya memasukkan uang 30 menit pun, tetapi karcisnya tidak keluar.', kata: ['お金を', '30分も いれた のに', '切符が', '出ません'], jawaban: 'お金を 30分も いれた のに 切符が 出ません', penjelasan: 'Kata Kerja Bentuk た + のに.' },
  { id: 's15', fokus: 'のに、～', arti: 'Taksi ditunggu, tetapi tidak datang.', kata: ['タクシーが', 'まって いる のに', '来ません'], jawaban: 'タクシーが まって いる のに 来ません', penjelasan: 'Kata Kerja Bentuk ている + のに.' },
  { id: 's16', fokus: 'のに、～', arti: 'Restoran ini tidak enak padahal harganya mahal.', kata: ['この レストランは', 'おいしくない のに', '値段が', '高いです'], jawaban: 'この レストランは おいしくない のに 値段が 高いです', penjelasan: 'Kata Sifat い Bentuk negatif + のに.' },
  { id: 's17', fokus: 'のに、～', arti: 'Padahal panitia sudah menyiapkan masakan India, Sdr. Glass tidak datang ke pesta.', kata: ['インド料理を 用意して おいたのに', 'グラスさんは', 'パーティーに', '来ませんでした'], jawaban: 'インド料理を 用意して おいたのに グラスさんは パーティーに 来ませんでした', penjelasan: 'Kata Kerja Bentuk た + のに (dari 練習 B).' },
  { id: 's18', fokus: 'のに、～', arti: 'Padahal sudah berusaha keras berlatih, tetapi pesta olahraga dibatalkan.', kata: ['一生懸命 練習したのに', '運動会は', '中止に なりました'], jawaban: '一生懸命 練習したのに 運動会は 中止に なりました', penjelasan: 'のに + kalimat utama perasaan kecewa.' },
  { id: 's19', fokus: 'のに、～', arti: 'Hari ini (saya) harus bekerja walaupun hari Minggu (versi が, tanpa perasaan tak terduga).', kata: ['きょうは', '日曜日ですが', '働かなければ', 'なりません'], jawaban: 'きょうは 日曜日ですが 働かなければ なりません', penjelasan: 'が tidak menyatakan perasaan tak terduga seperti のに.' },
  { id: 's20', fokus: 'のに、～', arti: 'Besok bermain sepak bola walaupun hujan (versi ても).', kata: ['あした', '雨が 降っても', 'サッカーを します'], jawaban: 'あした 雨が 降っても サッカーを します', penjelasan: 'ても menyatakan paradoks praktis, beda dari のに.' },
]
