import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 14 — fokus 文型:
//  (1) Kata Kerjaて ください  (2) Kata Kerjaて います  (3) Kata Kerjaましょうか
//  (4) Kata Benda が Kata Kerja  + catatan: Kata Kerjaて (bentuk sambung)
// ATURAN: `kata` = unit dari `jawaban` (boleh punya spasi internal) TANPA diubah; bank auto-di-acak.
// Soal diturunkan dari reibun/renshuu/bunpou Bab 14 (pola & kalimat buku).
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'Kata Kerjaて ください', arti: 'Tolong tulis alamat dan nama di sini.', kata: ['ここに', '住所と', '名前を', '書いて ください'], jawaban: 'ここに 住所と 名前を 書いて ください', penjelasan: 'Bentuk て + ください untuk meminta tolong dengan sopan.' },
  { id: 's2', fokus: 'Kata Kerjaて ください', arti: 'Tolong perlihatkan baju itu.', kata: ['あの', 'シャツを', '見せて ください'], jawaban: 'あの シャツを 見せて ください', penjelasan: '見せます (Grup II) → 見せて ください.' },
  { id: 's3', fokus: 'Kata Kerjaて ください', arti: 'Permisi, tolong ajarkan cara membaca Kanji ini.', kata: ['すみませんが', 'この', '漢字の', '読み方を', '教えて ください'], jawaban: 'すみませんが この 漢字の 読み方を 教えて ください', penjelasan: 'すみませんが dipakai untuk membuka permintaan.' },
  { id: 's4', fokus: 'Kata Kerjaて ください', arti: 'Tolong bicara pelan-pelan.', kata: ['ゆっくり', '話して ください'], jawaban: 'ゆっくり 話して ください', penjelasan: '話します → 話して ください.' },
  { id: 's5', fokus: 'Kata Kerjaて ください', arti: 'Tolong buka koper itu.', kata: ['スーツケースを', '開けて ください'], jawaban: 'スーツケースを 開けて ください', penjelasan: '開けます (Grup II) → 開けて ください.' },
  { id: 's6', fokus: 'Kata Kerjaて います', arti: 'Sdr. Miller sekarang sedang menelepon.', kata: ['ミラーさんは', '今', '電話を', 'かけて います'], jawaban: 'ミラーさんは 今 電話を かけて います', penjelasan: '～て います menyatakan aksi sedang berlangsung.' },
  { id: 's7', fokus: 'Kata Kerjaて います', arti: 'Sekarang sedang minum kopi.', kata: ['今', 'コーヒーを', '飲んで います'], jawaban: '今 コーヒーを 飲んで います', penjelasan: '飲みます → 飲んで います.' },
  { id: 's8', fokus: 'Kata Kerjaて います', arti: 'Sedang membaca majalah.', kata: ['雑誌を', '読んで います'], jawaban: '雑誌を 読んで います', penjelasan: '読んで います menyatakan kegiatan yang sedang berlangsung.' },
  { id: 's9', fokus: 'Kata Kerjaて います', arti: 'Sdr. Wang sedang menulis surat.', kata: ['ワンさんは', '手紙を', '書いて います'], jawaban: 'ワンさんは 手紙を 書いて います', penjelasan: '書きます → 書いて います.' },
  { id: 's10', fokus: 'Kata Kerjaましょうか', arti: 'Bagaimana kalau saya membuka jendela?', kata: ['窓を', '開けましょうか'], jawaban: '窓を 開けましょうか', penjelasan: '～ましょうか = menawarkan bantuan kepada lawan bicara.' },
  { id: 's11', fokus: 'Kata Kerjaましょうか', arti: 'Bagaimana kalau saya panggilkan taksi?', kata: ['タクシーを', '呼びましょうか'], jawaban: 'タクシーを 呼びましょうか', penjelasan: '呼びます → 呼びましょうか.' },
  { id: 's12', fokus: 'Kata Kerjaましょうか', arti: 'Bagaimana kalau saya membawakan barangnya?', kata: ['荷物を', '持ちましょうか'], jawaban: '荷物を 持ちましょうか', penjelasan: 'Menyatakan kesediaan membantu membawa barang.' },
  { id: 's13', fokus: 'Kata Benda が Kata Kerja', arti: 'Hujan turun.', kata: ['雨が', '降って います'], jawaban: '雨が 降って います', penjelasan: 'Fenomena alam memakai partikel が sebagai subjek.' },
  { id: 's14', fokus: 'Kata Benda が Kata Kerja', arti: 'Apakah sekarang hujan sedang turun? ……Ya, sedang turun.', kata: ['今', '雨が', '降って いますか', 'はい、降って います'], jawaban: '今 雨が 降って いますか はい、降って います', penjelasan: 'Kalimat tanya dan jawabannya memakai 降って います.' },
  { id: 's15', fokus: 'Kata Kerjaて います', arti: 'Sdr. Sato sekarang sedang berbicara dengan Sdr. Matsumoto di ruang rapat.', kata: ['佐藤さんは', '今', '会議室で', '松本さんと', '話して います'], jawaban: '佐藤さんは 今 会議室で 松本さんと 話して います', penjelasan: '場所 で + 人 と + ～て います.' },
  { id: 's16', fokus: 'Kata Kerjaましょうか', arti: 'Bagaimana kalau saya pergi menjemput di stasiun?', kata: ['駅まで', '迎えに', '行きましょうか'], jawaban: '駅まで 迎えに 行きましょうか', penjelasan: '迎えに 行きます = pergi menjemput.' },
  { id: 's17', fokus: 'Kata Kerjaましょうか', arti: 'Bagaimana kalau saya kopican ini? ……Ya, tolong kopi 5 lembar.', kata: ['これを', 'コピーしましょうか', 'ええ、5枚', 'コピーして ください'], jawaban: 'これを コピーしましょうか ええ、5枚 コピーして ください', penjelasan: 'Tawaran ましょうか dijawab dengan permintaan ～て ください.' },
  { id: 's18', fokus: 'Kata Kerjaて います', arti: 'Sdr. Wang membaca koran? ……Ya, sedang membaca koran.', kata: ['ワンさんは', '新聞を', '読んで いますか', 'はい、読んで います'], jawaban: 'ワンさんは 新聞を 読んで いますか はい、読んで います', penjelasan: 'Tanya-jawab dengan bentuk ～て います.' },
  { id: 's19', fokus: 'Kata Kerjaて ください', arti: 'Karena panas, tolong nyalakan AC.', kata: ['暑いですから', 'エアコンを', 'つけて ください'], jawaban: '暑いですから エアコンを つけて ください', penjelasan: 'つけます (Grup II) → つけて ください.' },
  { id: 's20', fokus: 'Kata Benda が Kata Kerja', arti: 'Lho! Sedang hujan, ya.', kata: ['あれ', '雨が', '降って いますね'], jawaban: 'あれ 雨が 降って いますね', penjelasan: 'あれ menyatakan keterkejutan; ね mengajak menyetujui.' },
]
