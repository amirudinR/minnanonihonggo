import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 48 — fokus 文型:
//  (1) Kata Benda(orang) を Kata Kerja Kausatif（Kata Kerja Intransitif）
//  (2) Kata Benda₁(orang) に Kata Benda₂ を Kata Kerja Kausatif（Kata Kerja Transitif）
//  (3) Kata Kerja Kausatif Bentuk て いただけませんか
//  + catatan: お／ご＋ます , pelaku を vs に
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 48 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Benda(orang) を ～させます', arti: 'Kepala Bagian menyuruh sdr. Miller dinas ke Amerika Serikat.', kata: ['部長は', 'ミラーさんを', 'アメリカへ', '出張させます'], jawaban: '部長は ミラーさんを アメリカへ 出張させます', penjelasan: 'Kata Kerja Intransitif 出張する → pelaku dengan を.' },
  { id: 's2', fokus: 'Kata Benda(orang) を ～させます', arti: 'Saya menyuruh anak perempuan saya pergi berbelanja.', kata: ['わたしは', '娘を', '買い物に', '行かせました'], jawaban: 'わたしは 娘を 買い物に 行かせました', penjelasan: '行きます → 行かせます (kausatif Kelompok I).' },
  { id: 's3', fokus: 'Kata Benda(orang) を ～させます', arti: 'Saya menyuruh anak laki-laki saya berdiri.', kata: ['わたしは', '息子を', '立たせました'], jawaban: 'わたしは 息子を 立たせました', penjelasan: '立ちます → 立たせます.' },
  { id: 's4', fokus: 'Kata Benda(orang) を ～させます', arti: 'Saya membiarkan anak perempuan saya bermain dengan bebas.', kata: ['わたしは', '娘を', '自由に', '遊ばせました'], jawaban: 'わたしは 娘を 自由に 遊ばせました', penjelasan: '遊びます → 遊ばせます (artinya membiarkan).' },
  { id: 's5', fokus: 'Kata Benda₁ に Kata Benda₂ を ～させます', arti: 'Ibu menyuruh adik saya membersihkan kamar.', kata: ['母は', '妹に', '部屋を', '掃除させました'], jawaban: '母は 妹に 部屋を 掃除させました', penjelasan: 'Kata Kerja Transitif 掃除する → pelaku dengan に.' },
  { id: 's6', fokus: 'Kata Benda₁ に Kata Benda₂ を ～させます', arti: 'Guru menyuruh siswa mendengarkan kaset.', kata: ['先生は', '学生に', 'テープを', '聞かせました'], jawaban: '先生は 学生に テープを 聞かせました', penjelasan: '聞きます → 聞かせます (Transitif → pelaku に).' },
  { id: 's7', fokus: 'Kata Benda₁ に Kata Benda₂ を ～させます', arti: 'Saya menyuruh anak perempuan saya mempelajari bahasa Spanyol.', kata: ['わたしは', '娘に', 'スペイン語を', '習わせました'], jawaban: 'わたしは 娘に スペイン語を 習わせました', penjelasan: '習います → 習わせます.' },
  { id: 's8', fokus: 'Kata Benda₁ に Kata Benda₂ を ～させます', arti: 'Saya menyuruh anak laki-laki saya memasak.', kata: ['わたしは', '息子に', '料理を', '作らせました'], jawaban: 'わたしは 息子に 料理を 作らせました', penjelasan: '作ります → 作らせます.' },
  { id: 's9', fokus: 'Kata Benda₁ に Kata Benda₂ を ～させます', arti: 'Guru membiarkan siswa mengutarakan pendapat secara bebas.', kata: ['先生は', '生徒に', '自由に', '意見を', '言わせました'], jawaban: '先生は 生徒に 自由に 意見を 言わせました', penjelasan: '言います → 言わせます (artinya membiarkan).' },
  { id: 's10', fokus: 'Kata Benda₁ に ～させます（Kata Benda tempat を）', arti: 'Saya menyuruh anak berjalan di sebelah kanan jalan.', kata: ['わたしは', '子どもに', '道の 右側を', '歩かせます'], jawaban: 'わたしは 子どもに 道の 右側を 歩かせます', penjelasan: 'Intransitif dengan "tempat を" → pelaku tetap に.' },
  { id: 's11', fokus: 'Kata Benda(orang) を ～させます', arti: 'Karena pagi hari sibuk, saya menyuruh anak perempuan saya membantu mempersiapkan sarapan.', kata: ['朝は 忙しいですから、', '娘に', '朝ごはんの 準備を', '手伝わせます'], jawaban: '朝は 忙しいですから、 娘に 朝ごはんの 準備を 手伝わせます', penjelasan: '手伝います → 手伝わせます.' },
  { id: 's12', fokus: 'Kata Benda₁ に ～させます', arti: 'Karena memelihara anjing, saya menyuruh anak saya mengurus anjing.', kata: ['犬を 飼っているので、', '息子に', '犬の 世話を', 'させます'], jawaban: '犬を 飼っているので、 息子に 犬の 世話を させます', penjelasan: 'します → させます.' },
  { id: 's13', fokus: 'Kata Benda(orang) を ～させます', arti: 'Karena baik untuk kesehatan, setiap pagi saya menyuruh anak saya minum susu.', kata: ['体に いいので、', '毎朝', '子どもに', '牛乳を 飲ませています'], jawaban: '体に いいので、 毎朝 子どもに 牛乳を 飲ませています', penjelasan: '飲みます → 飲ませます (Bentuk て います = kebiasaan).' },
  { id: 's14', fokus: 'Kata Benda(orang) を ～させます', arti: 'Kepala bagian menyuruh sdr. Suzuki menghadiri rapat.', kata: ['課長は', 'すずきさんを', '会議に', '出席させました'], jawaban: '課長は すずきさんを 会議に 出席させました', penjelasan: '出席します → 出席させます.' },
  { id: 's15', fokus: 'Kata Benda(orang) を ～させます', arti: 'Ayah menyuruh nenek dirawat di rumah sakit.', kata: ['父は', '祖母を', '入院させました'], jawaban: '父は 祖母を 入院させました', penjelasan: '入院します → 入院させます.' },
  { id: 's16', fokus: 'Kata Kerja Kausatif Bentuk て いただけませんか', arti: 'Maaf, boleh saya memarkir mobil di sini sebentar?', kata: ['すみません。', 'ここに しばらく', '車を', '止めさせていただけませんか'], jawaban: 'すみません。 ここに しばらく 車を 止めさせていただけませんか', penjelasan: 'Kausatif + ていただけませんか = minta izin melakukan.' },
  { id: 's17', fokus: 'Kata Kerja Kausatif Bentuk て いただけませんか', arti: 'Karena ada pesta pernikahan teman, boleh saya pulang cepat?', kata: ['友達の 結婚式が あるので、', '早く', '帰らせていただけませんか'], jawaban: '友達の 結婚式が あるので、 早く 帰らせていただけませんか', penjelasan: '帰ります → 帰らせて いただけませんか.' },
  { id: 's18', fokus: 'Kata Kerja Kausatif Bentuk て いただけませんか', arti: 'Karena ingin menurunkan barang, boleh saya memarkir mobil di sini sebentar?', kata: ['荷物を 降ろしたいので、', 'ここに しばらく', '車を 止めさせていただけませんか'], jawaban: '荷物を 降ろしたいので、 ここに しばらく 車を 止めさせていただけませんか', penjelasan: 'Kausatif + ていただけませんか = memohon izin.' },
  { id: 's19', fokus: 'Kata Kerja Kausatif Bentuk て いただけませんか', arti: 'Karena taman sangat indah, boleh saya memotret satu lembar?', kata: ['庭が とても きれいなので、', '写真を', '1枚', '撮らせていただけませんか'], jawaban: '庭が とても きれいなので、 写真を 1枚 撮らせていただけませんか', penjelasan: '撮ります → 撮らせて いただけませんか.' },
  { id: 's20', fokus: 'Kata Benda₁ に Kata Benda₂ を ～させます', arti: 'Saya menyuruh anak laki-laki saya meminum obat setiap hari.', kata: ['わたしは', '息子に', '毎日', '薬を', '飲ませます'], jawaban: 'わたしは 息子に 毎日 薬を 飲ませます', penjelasan: 'Kausatif menyatakan paksaan (obat diminumkan).' },
]
