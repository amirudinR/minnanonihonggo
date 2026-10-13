import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 32 — fokus pola 文型:
//  (1) Kata Kerja Bentuk た ／ Bentuk ない ＋ ほうがいいです
//  (2) ～でしょう
//  (3) ～かもしれません
//  (4) Kata Kerja（Bentuk ます）ましょう
//  (5) Kata Keterangan Bilangan で
//  (6) 何か ／ どこか ～ こと・もの
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 32 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerja Bentuk た ほうがいいです', arti: 'Lebih baik berolahraga setiap hari.', kata: ['毎日', '運動した', 'ほうがいいです'], jawaban: '毎日 運動した ほうがいいです', penjelasan: 'Bentuk た + ほうがいいです digunakan untuk memberi nasihat.' },
  { id: 's2', fokus: 'Kata Kerja Bentuk ない ほうがいいです', arti: 'Berdemam. ……Kalau begitu, lebih baik jangan mandi.', kata: ['じゃ', 'おふろに', '入らない', 'ほうが', 'いいですよ'], jawaban: 'じゃ おふろに 入らない ほうが いいですよ', penjelasan: 'Bentuk ない + ほうがいいです = nasihat untuk tidak melakukan.' },
  { id: 's3', fokus: 'Kata Kerja Bentuk た ほうがいいです', arti: 'Ketika muda, lebih baik mengalami berbagai hal.', kata: ['若い', 'ときは', 'いろいろな', '経験をした', 'ほうが', 'いいと', '思います'], jawaban: '若い ときは いろいろな 経験をした ほうが いいと 思います', penjelasan: '～ほうがいい diikuti と 思います menyatakan pendapat.' },
  { id: 's4', fokus: 'Kata Kerja Bentuk ない ほうがいいです', arti: 'Tetapi, lebih baik jangan membawa uang tunai.', kata: ['でも', '現金で', '持って', '行かない', 'ほうが', 'いいですよ'], jawaban: 'でも 現金で 持って 行かない ほうが いいですよ', penjelasan: '持って 行かない = bentuk ない dari 持って 行きます.' },
  { id: 's5', fokus: '～でしょう', arti: 'Besok akan turun hujan.', kata: ['あしたは', '雨が', '降るでしょう'], jawaban: 'あしたは 雨が 降るでしょう', penjelasan: '～でしょう menyatakan dugaan pembicara terhadap masa depan.' },
  { id: 's6', fokus: '～でしょう', arti: 'Apakah sdr. Thawapon akan lulus? ……Pasti akan lulus.', kata: ['タワポンさんは', '合格するでしょうか', 'きっと', '合格するでしょう'], jawaban: 'タワポンさんは 合格するでしょうか きっと 合格するでしょう', penjelasan: '～でしょうか = bentuk tanya dari ～でしょう.' },
  { id: 's7', fokus: '～でしょう', arti: '……Ya… Untuk sementara tidak akan membaik.', kata: ['まだ', 'しばらく', 'よく', 'ならないでしょう'], jawaban: 'まだ しばらく よく ならないでしょう', penjelasan: 'ならないでしょう = bentuk negatif dari dugaan ～でしょう.' },
  { id: 's8', fokus: '～かもしれません', arti: 'Ada kemungkinan terlambat untuk jam yang telah saya janjikan.', kata: ['約束の', '時間に', '間に', '合わないかも', 'しれません'], jawaban: '約束の 時間に 間に 合わないかも しれません', penjelasan: '～かもしれません menyatakan kemungkinan kecil.' },
  { id: 's9', fokus: '～かもしれません', arti: '……Ya, benar. Mungkin rusak. Mari periksanya sebentar.', kata: ['ええ', '故障かも', 'しれません', 'ちょっと', '調べましょう'], jawaban: 'ええ 故障かも しれません ちょっと 調べましょう', penjelasan: 'Kata Benda + かも しれません menyatakan kemungkinan.' },
  { id: 's10', fokus: '～かもしれません', arti: '3日ほど 高い 熱が 続くかも しれませんが、心配しないで ください。', kata: ['3日ほど', '高い', '熱が', '続くかも', 'しれませんが', '心配しないで', 'ください'], jawaban: '3日ほど 高い 熱が 続くかも しれませんが 心配しないで ください', penjelasan: '～かも しれませんが + ～ないで ください menyampaikan kemungkinan lalu menenangkan.' },
  { id: 's11', fokus: 'Kata Kerja（Bentuk ます）ましょう', arti: 'Mari kita semua berlatih menari bon odori.', kata: ['皆さん', '盆踊りを', '練習しましょう'], jawaban: '皆さん 盆踊りを 練習しましょう', penjelasan: 'Bentuk ます + ましょう mengusulkan tindakan bersama.' },
  { id: 's12', fokus: 'Kata Kerja（Bentuk ます）ましょう', arti: '……Ya. Mungkin rusak. Periksa sebentar.', kata: ['ええ', '故障かも', 'しれません', 'すぐ', '空港に', '戻りましょう'], jawaban: 'ええ 故障かも しれません すぐ 空港に 戻りましょう', penjelasan: 'ましょう mengusulkan tindakan yang lebih tegas daripada ましょうか.' },
  { id: 's13', fokus: 'Kata Keterangan Bilangan で', arti: 'Dapat pergi sampai stasiun dalam waktu tiga puluh menit?', kata: ['駅まで', '30分で', '行けますか'], jawaban: '駅まで 30分で 行けますか', penjelasan: 'Kata keterangan bilangan + で menyatakan batas waktu.' },
  { id: 's14', fokus: 'Kata Keterangan Bilangan で', arti: 'Dapat membeli PC dengan tiga puluh ribu yen?', kata: ['3万円で', 'パソコンが', '買えますか'], jawaban: '3万円で パソコンが 買えますか', penjelasan: '3万円で menyatakan batas jumlah uang.' },
  { id: 's15', fokus: 'Kata Keterangan Bilangan で', arti: '(Saya) Ingin berjalan-jalan di Eropa kurang-lebih satu bulan, apa uangnya cukup sebanyak empat ratus ribu yen?', kata: ['1か月ぐらい', 'ヨーロッパへ', '遊びに', '行きたいんですが', '40万円で', '足りますか'], jawaban: '1か月ぐらい ヨーロッパへ 遊びに 行きたいんですが 40万円で 足りますか', penjelasan: '40万円で 足りますか = cukupkah dengan 400 ribu yen.' },
  { id: 's16', fokus: '何か ～こと', arti: 'Ada suatu hal yang mengkhawatirkan?', kata: ['何か', '心配な', 'ことが', 'あるんですか'], jawaban: '何か 心配な ことが あるんですか', penjelasan: '何か ～こと = "suatu hal ...".' },
  { id: 's17', fokus: 'どこか ～もの', arti: '(Saya) Ingin pergi ski, apakah ada suatu tempat yang bagus?', kata: ['スキーに', '行きたいんですが', 'どこか', 'いい所', 'ありますか'], jawaban: 'スキーに 行きたいんですが どこか いい所 ありますか', penjelasan: 'どこか いい所 = "suatu tempat yang bagus".' },
  { id: 's18', fokus: '～でしょう', arti: 'Apakah Olimpiade akan berhasil? ……Tidak apa-apa, bukan? Karena sudah lama kami bersiap.', kata: ['オリンピックは', '成功するでしょうか', '大丈夫でしょう'], jawaban: 'オリンピックは 成功するでしょうか 大丈夫でしょう', penjelasan: 'Dugaan dengan ～でしょう menjawab pertanyaan ～でしょうか.' },
  { id: 's19', fokus: 'Kata Kerja Bentuk た ほうがいいです', arti: '(Saya) Ingin melihat kuil Jepang ⋯. ……Kalau begitu, sebaiknya pergi ke Kyoto.', kata: ['じゃ', '京都へ', '行ったら', 'いいですよ'], jawaban: 'じゃ 京都へ 行ったら いいですよ', penjelasan: '～たら いい = merekomendasikan sesuatu (Pel. 26).' },
  { id: 's20', fokus: '～かもしれません', arti: 'Bunyi mesinnya aneh, ya. ……Ya. Mungkin rusak. Periksa sebentar.', kata: ['エンジンの', '音が', 'おかしいんですが', 'ええ', '故障かも', 'しれません'], jawaban: 'エンジンの 音が おかしいんですが ええ 故障かも しれません', penjelasan: '～んですが menyampaikan keadaan, lalu かも しれません menyatakan dugaan.' },
]
