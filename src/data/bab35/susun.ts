import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 35 — fokus pola 文型:
//  (1) 〜になれば、〜
//  (2) 〜ければ、〜
//  (3) 〜なら、〜
//  + catatan: Kata Benda なら , Kata Tanya Kata Kerja Bentuk Syarat いいですか , 〜は ありませんか
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 35 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '〜になれば、〜', arti: 'Jika musim semi tiba, Sakura akan mekar.', kata: ['春に', 'なれば', '桜が', '咲きます'], jawaban: '春に なれば 桜が 咲きます', penjelasan: 'Kata Kerja なります → Bentuk Syarat なれば menyatakan syarat waktu.' },
  { id: 's2', fokus: '〜ければ、〜', arti: 'Kalau cuaca baik, pulau terlihat di sebelah sana.', kata: ['天気が', 'よければ', '向こうに', '島が', '見えます'], jawaban: '天気が よければ 向こうに 島が 見えます', penjelasan: 'Kata Sifat い いい → よければ (bentuk syarat).' },
  { id: 's3', fokus: '〜ければ、〜', arti: '……Kalau menekan tombol itu, (jendela) buka.', kata: ['その', 'ボタンを', '押せば', '開きますよ'], jawaban: 'その ボタンを 押せば 開きますよ', penjelasan: '押します → 押せば (bentuk syarat Golongan I).' },
  { id: 's4', fokus: '〜ければ、〜', arti: 'Kalau menekan tombol, jendelanya terbuka.', kata: ['ボタンを', '押せば', '窓が', '開きます'], jawaban: 'ボタンを 押せば 窓が 開きます', penjelasan: 'Bentuk Syarat menyatakan syarat yang diperlukan.' },
  { id: 's5', fokus: '〜になれば、〜', arti: 'Tetapi, lebih baik lagi kalau harga barang sedikit murah.', kata: ['でも', 'もう', '少し', '物価が', '安ければ', 'もっと', 'いいなと', '思います'], jawaban: 'でも もう 少し 物価が 安ければ もっと いいなと 思います', penjelasan: '安ければ = bentuk syarat Kata Sifat い 安い.' },
  { id: 's6', fokus: '〜になれば、〜', arti: '……Ya benar. Makin tua, makin sehat.', kata: ['年を', '取れば', '取るほど', '元気に', 'なりますね'], jawaban: '年を 取れば 取るほど 元気に なりますね', penjelasan: '～れば ～ほど = "makin ..., makin ...".' },
  { id: 's7', fokus: '〜なければ、〜', arti: 'Kalau tidak ada, selesai di sini.', kata: ['なければ', 'これで', '終わりましょう'], jawaban: 'なければ これで 終わりましょう', penjelasan: 'なければ = bentuk syarat negatif dari あります.' },
  { id: 's8', fokus: '〜なければ なりません', arti: 'Apakah (saya) harus menyerahkan laporan sampai dengan besok?', kata: ['あしたまでに', 'レポートを', '出さなければ', 'なりませんか'], jawaban: 'あしたまでに レポートを 出さなければ なりませんか', penjelasan: '～なければ なりません = harus melakukan.' },
  { id: 's9', fokus: '〜なら、〜', arti: '……Kalau tidak bisa, serahkan sampai dengan hari Jumat.', kata: ['無理なら', '金曜日までに', '出して', 'ください'], jawaban: '無理なら 金曜日までに 出して ください', penjelasan: 'Kata Sifat な 無理（だ）→ 無理なら menyatakan syarat.' },
  { id: 's10', fokus: '〜なら、〜', arti: 'Kalau bepergian ke Hokkaido, yang cocok adalah bulan Juni.', kata: ['北海道旅行なら', '6月が', 'いいです'], jawaban: '北海道旅行なら 6月が いいです', penjelasan: 'Kata Benda + なら menyatakan syarat yang masih belum tentu.' },
  { id: 's11', fokus: 'Kata Benda なら、〜', arti: '……Kalau pemandian air panas, Hakuba yang bagus.', kata: ['温泉なら', '馬場が', 'いいですよ'], jawaban: '温泉なら 馬場が いいですよ', penjelasan: 'Kata Benda なら, 〜 merespon perkataan lawan bicara lalu memberi informasi.' },
  { id: 's12', fokus: 'Kata Benda なら、〜', arti: '……Ya.. Kalau selama dua, tiga hari, saya rasa bagusnya di Hakone atau Nikko.', kata: ['2、3日なら', '箱根か', '日光が', 'いいなと', '思います'], jawaban: '2、3日なら 箱根か 日光が いいなと 思います', penjelasan: 'Kata Benda なら + ～がいい menyatakan rekomendasi.' },
  { id: 's13', fokus: 'Kata Tanya Kata Kerja Bentuk Syarat いいですか', arti: 'Ingin meminjam buku, bagaimana caranya?', kata: ['本を', '借りたいんですが', 'どう', 'すればいいですか'], jawaban: '本を 借りたいんですが どう すればいいですか', penjelasan: 'どう すればいいですか = meminta petunjuk cara.' },
  { id: 's14', fokus: 'Kata Tanya Kata Kerja Bentuk Syarat いいですか', arti: 'Ingin meminjam buku, bagaimana caranya? (Pel.26)', kata: ['本を', '借りたいんですが', 'どう', 'したら', 'いいですか'], jawaban: '本を 借りたいんですが どう したら いいですか', penjelasan: '～したら いいですか sama seperti ～すれば いいですか.' },
  { id: 's15', fokus: '〜は ありませんか', arti: 'Saya pikir mau berjalan-jalan selama dua, tiga hari, apakah ada tempat yang Anda rekomendasikan?', kata: ['2、3日', '旅行を', 'しようと', '思っているんですが', 'どこか', 'いい', '所は', 'ありませんか'], jawaban: '2、3日 旅行を しようと 思っているんですが どこか いい 所は ありませんか', penjelasan: '～は ありませんか = cara bertanya negatif yang lebih halus.' },
  { id: 's16', fokus: '〜は ありませんか', arti: 'Ada pendapat lain?', kata: ['ほかに', '意見が', 'ありますか'], jawaban: 'ほかに 意見が ありますか', penjelasan: 'ありますか = pertanyaan positif biasa.' },
  { id: 's17', fokus: '〜ければ、〜', arti: 'Kalau menekan di sini, pintunya terbuka.', kata: ['ここを', '押すと', 'ドアが', '開きます'], jawaban: 'ここを 押すと ドアが 開きます', penjelasan: '～と menyatakan syarat yang wajar/pasti terjadi.' },
  { id: 's18', fokus: '〜ければ、〜', arti: 'Jika menekan di sini, pintunya terbuka.', kata: ['ここを', '押せば', 'ドアが', '開きます'], jawaban: 'ここを 押せば ドアが 開きます', penjelasan: '～ば menyatakan syarat; bandingkan dengan ～と.' },
  { id: 's19', fokus: '〜ば、〜', arti: 'Kalau sdr. Tanaka datang ke Tokyo, saya pergi bertemu.', kata: ['田中さんが', '東京へ', '来れば', '会いに行きます'], jawaban: '田中さんが 東京へ 来れば 会いに行きます', penjelasan: 'Jika subjek klausa awal dan akhir berbeda, klausa pokok boleh berupa kehendak.' },
  { id: 's20', fokus: '〜ば、〜', arti: 'Kalau datang ke Tokyo, silakan hubungi (saya).', kata: ['東京へ', '来たら', 'ぜひ', '連絡して', 'ください'], jawaban: '東京へ 来たら ぜひ 連絡して ください', penjelasan: '～たら dapat diikuti permintaan pada klausa pokok.' },
]
