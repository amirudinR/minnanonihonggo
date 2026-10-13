import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 39 — fokus 文型:
//  (1) ～て（て）、～ (sebab/alasan)
//  (2) Kata Benda で (sebab: fenomena/kejadian)
//  (3) [Bentuk Biasa/Kata Sifat/Kata Benda] ので、～
//  (4) ～中で
// ATURAN: `kata` = token dari `jawaban` (pisah spasi) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/bunpou/renshuu Bab 39 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: '～て、～ (sebab)', arti: '(Saya) Kaget karena mendengar berita.', kata: ['ニュースを', '読んで', 'びっくりしました'], jawaban: 'ニュースを 読んで びっくりしました', penjelasan: '～て menyatakan sebab dari hal di belakang kalimat.' },
  { id: 's2', fokus: '～て、～ (sebab)', arti: 'Ceritanya rumit maka kurang mengerti.', kata: ['話が', '複雑で', 'よく', 'わかりませんでした'], jawaban: '話が 複雑で よく わかりませんでした', penjelasan: 'Kata Sifat な → で menyatakan sebab.' },
  { id: 's3', fokus: '～て、～ (sebab)', arti: 'Tidak bisa pergi karena berhalangan pada hari Sabtu.', kata: ['土曜日は', '都合が', '悪くて', '行けません'], jawaban: '土曜日は 都合が 悪くて 行けません', penjelasan: 'Kata Sifat い → くて menyatakan sebab.' },
  { id: 's4', fokus: '～て、～ (sebab)', arti: 'Bus terlambat karena mengalami kecelakaan.', kata: ['事故で', 'バスが', '遅れて しまいました'], jawaban: '事故で バスが 遅れて しまいました', penjelasan: 'Kata Benda sebab + で (lihat juga pola で).' },
  { id: 's5', fokus: '～て、～ (sebab)', arti: '(Saya) Dimarahi oleh senior karena terlambat masuk kelas.', kata: ['授業に', '遅れて', '先輩に', 'しかられました'], jawaban: '授業に 遅れて 先輩に しかられました', penjelasan: 'Sejuk 遅れて + akibat (pasif) しかられました.' },
  { id: 's6', fokus: '～て、～ (sebab)', arti: '(Saya) Sedih karena tidak dapat bertemu keluarga.', kata: ['家族に', '会えなくて', '悲しいです'], jawaban: '家族に 会えなくて 悲しいです', penjelasan: 'Bentuk ない → なくて menyatakan sebab.' },
  { id: 's7', fokus: '～て、～ (sebab)', arti: 'Maaf tidak bisa pergi karena sedikit berhalangan pada hari Sabtu.', kata: ['土曜日は', 'ちょっと', '都合が', '悪くて', '行けないんです'], jawaban: '土曜日は ちょっと 都合が 悪くて 行けないんです', penjelasan: 'Kalimat penolakan halus dengan ～くて、～んです.' },
  { id: 's8', fokus: '～て、～ (sebab)', arti: '(Saya) Sudah memberikannya kepada teman karena kamar sempit dan mengganggu.', kata: ['部屋が', '狭くて', '邪魔なので', '友達に', 'あけました'], jawaban: '部屋が 狭くて 邪魔なので 友達に あけました', penjelasan: '～くて + なので menyatakan rangkaian alasan.' },
  { id: 's9', fokus: 'Kata Benda で (sebab)', arti: 'Gedung roboh karena terjadi gempa bumi.', kata: ['地震で', 'ビルが', '倒れました'], jawaban: '地震で ビルが 倒れました', penjelasan: 'Kata Benda fenomena + で menyatakan sebab.' },
  { id: 's10', fokus: 'Kata Benda で (sebab)', arti: '(Saya) Tidak masuk kerja karena sakit.', kata: ['病気で', '会社を', '休みました'], jawaban: '病気で 会社を 休みました', penjelasan: 'Sejuk 病気で + akibat 休みました.' },
  { id: 's11', fokus: 'Kata Benda で (sebab)', arti: 'Banyak orang meninggal karena gempa bumi.', kata: ['地震で', '人が', '大勢', '死にました'], jawaban: '地震で 人が 大勢 死にました', penjelasan: 'Kata Benda で menyatakan sebab dari kejadian alam.' },
  { id: 's12', fokus: 'Kata Benda で (sebab)', arti: 'Rumah terbakar karena kebakaran.', kata: ['火事で', '家が', '焼けました'], jawaban: '火事で 家が 焼けました', penjelasan: 'で menunjukkan sebab berupa peristiwa (kebakaran).' },
  { id: 's13', fokus: 'Kata Benda で (sebab)', arti: 'Bus terlambat karena mengalami kecelakaan.', kata: ['事故で', 'バスが', '遅れたんです'], jawaban: '事故で バスが 遅れたんです', penjelasan: '事故で + ～んです menjelaskan alasan.' },
  { id: 's14', fokus: '～ので、～', arti: 'Karena tidak mengerti bahasa Jepang, tolong berbicara dalam bahasa Inggris.', kata: ['日本語が', 'わからないので', '英語で', '話して いただけませんか'], jawaban: '日本語が わからないので 英語で 話して いただけませんか', penjelasan: '～ので memperhalus permintaan.' },
  { id: 's15', fokus: '～ので、～', arti: 'Karena ada urusan, (saya) pamit duluan.', kata: ['用事が', 'あるので', 'お先に', '失礼します'], jawaban: '用事が あるので お先に 失礼します', penjelasan: 'Kata Benda + が あるので = karena ada (urusan).' },
  { id: 's16', fokus: '～ので、～', arti: 'Karena saya tidak mengerti, tolong ajari saya.', kata: ['わからないので', '教えて ください'], jawaban: 'わからないので 教えて ください', penjelasan: '～ので cocok untuk menyampaikan alasan permintaan.' },
  { id: 's17', fokus: '～ので、～', arti: 'Besok libur, jadi saya bisa pergi berbelanja.', kata: ['あしたは', 'ひまなので', '買い物に', '行けます'], jawaban: 'あしたは ひまなので 買い物に 行けます', penjelasan: 'Kata Sifat な + なので menyatakan sebab.' },
  { id: 's18', fokus: '～ので、～', arti: 'Sore ini tukang listrik datang memperbaiki AC, jadi saya ada di rumah.', kata: ['電気屋が', 'エアコンの', '修理に', '来るので', '午後は', 'うちに います'], jawaban: '電気屋が エアコンの 修理に 来るので 午後は うちに います', penjelasan: 'Kata Kerja bentuk biasa + ので menyatakan sebab.' },
  { id: 's19', fokus: '～ので、～', arti: 'Karena bus terlambat, saya terlambat ke sekolah.', kata: ['バスが', 'おくれたので', '学校に', '遅刻しました'], jawaban: 'バスが おくれたので 学校に 遅刻しました', penjelasan: 'ので menyatakan hubungan sebab-akibat.' },
  { id: 's20', fokus: '～中で', arti: 'Soalnya, di tengah perjalanan ada kecelakaan hingga bus terlambat.', kata: ['実は', '来る', '途中で', '事故が', 'あって', 'バスが', '遅れて しまったんです'], jawaban: '実は 来る 途中で 事故が あって バスが 遅れて しまったんです', penjelasan: '～途中で = "di tengah (perjalanan)"; で menunjukkan titik perpindahan.' },
]
