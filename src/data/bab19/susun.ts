import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 19 — fokus 文型:
//  (1) Kata Kerja Bentuk た ことが あります (pengalaman)
//  (2) ～たり、～たり します
//  (3) ～く／～に なります (perubahan keadaan)
//  + catatan: Kata Kerja Bentuk た, だんだん
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 19 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～た ことが あります', arti: 'Apakah pernah pergi ke Hokkaido?', kata: ['北海道へ', '行った ことが', 'ありますか'], jawaban: '北海道へ 行った ことが ありますか', penjelasan: 'Kata Kerja Bentuk た + ことが あります = pernah ～.' },
  { id: 's2', fokus: '～た ことが あります', arti: 'Apakah pernah berkuda?', kata: ['馬に', '乗った ことが', 'ありますか'], jawaban: '馬に 乗った ことが ありますか', penjelasan: '乗る → 乗った (bentuk た) + ことが ありますか.' },
  { id: 's3', fokus: '～た ことが あります', arti: 'Pernah makan sushi.', kata: ['すしを', '食べた ことが', 'あります'], jawaban: 'すしを 食べた ことが あります', penjelasan: '食べた (bentuk た) + ことが あります.' },
  { id: 's4', fokus: '～た ことが あります', arti: 'Pernah melihat sumo.', kata: ['相撲を', '見た ことが', 'あります'], jawaban: '相撲を 見た ことが あります', penjelasan: 'Menyatakan pengalaman: 見た ことが あります.' },
  { id: 's5', fokus: '～た ことが あります', arti: 'Pernah belajar upacara minum teh?', kata: ['お茶を', '習った ことが', 'ありますか'], jawaban: 'お茶を 習った ことが ありますか', penjelasan: '習う → 習った (bentuk た).' },
  { id: 's6', fokus: '～た ことが ありません', arti: 'Belum pernah ke Jerman sama sekali.', kata: ['ドイツへ', '行った ことが', 'ありません'], jawaban: 'ドイツへ 行った ことが ありません', penjelasan: 'Bentuk negatif: ～た ことが ありません (belum pernah).' },
  { id: 's7', fokus: '～た ことが あります', arti: 'Sdr. Miller pernah menaiki shinkansen?', kata: ['ミラーさんは', '新幹線に', '乗った ことが', 'ありますか'], jawaban: 'ミラーさんは 新幹線に 乗った ことが ありますか', penjelasan: 'Topik + Kata Kerja Bentuk た ことが ありますか.' },
  { id: 's8', fokus: '～たり、～たり します', arti: 'Pada hari Minggu bermain tenis, dan menonton film.', kata: ['日曜日は', 'テニスを したり', '映画を 見たり', 'します'], jawaban: '日曜日は テニスを したり 映画を 見たり します', penjelasan: 'Kata Kerja Bentuk たり + Kata Kerja Bentuk たり します.' },
  { id: 's9', fokus: '～たり、～たり します', arti: 'Pada hari libur bermain tenis, dan berjalan-jalan.', kata: ['休みの 日は', 'テニスを したり', '散歩に 行ったり', 'します'], jawaban: '休みの 日は テニスを したり 散歩に 行ったり します', penjelasan: 'Menyebut beberapa aksi yang mewakili dengan ～たり.' },
  { id: 's10', fokus: '～たり、～たり します', arti: 'Pada liburan musim dingin melihat kuil, dan berpesta dengan teman.', kata: ['冬休みは', 'お寺を 見たり', '友達と パーティーを したり', 'しました'], jawaban: '冬休みは お寺を 見たり 友達と パーティーを したり しました', penjelasan: 'Waktu lampau di akhir: ～たり ～たり しました.' },
  { id: 's11', fokus: '～たり、～たり します', arti: 'Ingin bepergian dan belajar upacara minum teh.', kata: ['旅行を したり', 'お茶を 習ったり', 'したいです'], jawaban: '旅行を したり お茶を 習ったり したいです', penjelasan: '～たり ～たり したいです = ingin melakukan ～ dan ～.' },
  { id: 's12', fokus: '～たり、～たり します', arti: 'Setiap malam menonton televisi, dan membaca buku.', kata: ['毎晩', 'テレビを 見たり', '本を 読んだり', 'します'], jawaban: '毎晩 テレビを 見たり 本を 読んだり します', penjelasan: 'Kata Kerja Bentuk たり berulang lalu します.' },
  { id: 's13', fokus: '～く なります', arti: 'Mulai sekarang secara berangsur-angsur menjadi panas.', kata: ['これから', 'だんだん', '暑く なります'], jawaban: 'これから だんだん 暑く なります', penjelasan: 'Kata Sifat い: 暑い → 暑く なります (perubahan bertahap).' },
  { id: 's14', fokus: '～く なります', arti: 'Berkat Anda, sudah membaik (sembuh).', kata: ['おかげさまで', 'よく なりました'], jawaban: 'おかげさまで よく なりました', penjelasan: 'いい → よく なりました (menjadi lebih baik).' },
  { id: 's15', fokus: '～く なります', arti: 'Bahasa Jepang sudah menjadi pandai, ya.', kata: ['日本語が', '上手に なりましたね'], jawaban: '日本語が 上手に なりましたね', penjelasan: 'Kata Sifat な: 上手[な] → 上手に なります.' },
  { id: 's16', fokus: '～く なります', arti: 'Karena setiap hari berlatih, menjadi pandai berbahasa Jepang.', kata: ['毎日 練習しましたから', '日本語が', '上手に なりました'], jawaban: '毎日 練習しましたから 日本語が 上手に なりました', penjelasan: 'Alasan ～から menghubungkan ke perubahan keadaan.' },
  { id: 's17', fokus: '～く なります', arti: 'Karena makan banyak makanan manis, gigi menjadi sakit.', kata: ['甘い 物を たくさん 食べましたから', '歯が', '痛く なりました'], jawaban: '甘い 物を たくさん 食べましたから 歯が 痛く なりました', penjelasan: '痛い → 痛く なりました (menjadi sakit).' },
  { id: 's18', fokus: '～に なります', arti: 'Ingin menjadi dokter.', kata: ['医者に', 'なりたいです'], jawaban: '医者に なりたいです', penjelasan: 'Kata Benda + に なります = menjadi ～; + たい = ingin menjadi.' },
  { id: 's19', fokus: '～く なります', arti: 'Teresa sudah menjadi tinggi badannya.', kata: ['テレサちゃんは', '背が', '高く なりました'], jawaban: 'テレサちゃんは 背が 高く なりました', penjelasan: '高い → 高く なりました; pola ～は ～が 高く なります.' },
  { id: 's20', fokus: '～く なります', arti: 'Karena tidak berolahraga, badan menjadi lemah.', kata: ['スポーツを しませんでしたから', '体が', '弱く なりました'], jawaban: 'スポーツを しませんでしたから 体が 弱く なりました', penjelasan: '弱い → 弱く なりました (menjadi lemah).' },
]
