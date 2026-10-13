import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 3 — fokus 文型:
//  (1) ここ/そこ/あそこ は ～です  (2) Kata Benda は 場所 です
//  + catatan: こちら/そちら/あちら , どこ/どちら , ～の～ (buatan) , お～
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'ここ/そこ/あそこ は ～です', arti: 'Di sini kantin.', kata: ['ここは', '食堂です'], jawaban: 'ここは 食堂です', penjelasan: 'ここ = tempat pembicara berada.' },
  { id: 's2', fokus: 'ここ/そこ/あそこ は ～です', arti: 'Di situ ruang kelas.', kata: ['そこは', '教室です'], jawaban: 'そこは 教室です', penjelasan: 'そこ = tempat lawan bicara.' },
  { id: 's3', fokus: 'ここ/そこ/あそこ は ～です', arti: 'Di sana kantor.', kata: ['あそこは', '事務所です'], jawaban: 'あそこは 事務所です', penjelasan: 'あそこ = tempat jauh.' },
  { id: 's4', fokus: '～は 場所 です', arti: 'Telepon di lantai dua.', kata: ['電話は', '2階です'], jawaban: '電話は 2階です', penjelasan: 'Menyatakan tempat benda berada.' },
  { id: 's5', fokus: '～は 場所 です', arti: 'Toilet di sana.', kata: ['お手洗いは', 'あそこです'], jawaban: 'お手洗いは あそこです', penjelasan: 'お手洗い = toilet (sopan).' },
  { id: 's6', fokus: 'どこ/どちら', arti: 'Di mana toilet?', kata: ['お手洗いは', 'どこですか'], jawaban: 'お手洗いは どこですか', penjelasan: 'どこ = "di mana".' },
  { id: 's7', fokus: 'どこ/どちら', arti: 'Di mana Sdr. Yamada?', kata: ['山田さんは', 'どこですか'], jawaban: '山田さんは どこですか', penjelasan: 'Menanyakan keberadaan orang.' },
  { id: 's8', fokus: 'どこ/どちら', arti: 'Lift di sebelah mana?', kata: ['エレベーターは', 'どちらですか'], jawaban: 'エレベーターは どちらですか', penjelasan: 'どちら = bentuk sopan dari どこ.' },
  { id: 's9', fokus: 'こちら/そちら/あちら', arti: 'Lift di sebelah sana.', kata: ['エレベーターは', 'そちらです'], jawaban: 'エレベーターは そちらです', penjelasan: 'そちら = bentuk sopan そこ.' },
  { id: 's10', fokus: 'お～', arti: 'Berasal dari mana (negara Anda)?', kata: ['お国は', 'どちらですか'], jawaban: 'お国は どちらですか', penjelasan: 'お～ = prefiks hormat.' },
  { id: 's11', fokus: 'お～', arti: 'Saya dari Amerika Serikat.', kata: ['お国は', 'アメリカです'], jawaban: 'お国は アメリカです', penjelasan: 'Jawaban menyebut negara asal.' },
  { id: 's12', fokus: '～の～ (buatan)', arti: 'Itu sepatu buatan mana?', kata: ['それは', 'どこの', '靴ですか'], jawaban: 'それは どこの 靴ですか', penjelasan: 'どこの = "buatan mana".' },
  { id: 's13', fokus: '～の～ (buatan)', arti: 'Sepatu (buatan) Italia.', kata: ['イタリアの', '靴です'], jawaban: 'イタリアの 靴です', penjelasan: 'Jepang の = buatan Jepang.' },
  { id: 's14', fokus: 'いくら', arti: 'Berapa (harga) jam tangan ini?', kata: ['この 時計は', 'いくらですか'], jawaban: 'この 時計は いくらですか', penjelasan: 'いくら = "berapa (harga)".' },
  { id: 's15', fokus: 'いくら', arti: 'Jam tangan ini harganya 18,600 yen.', kata: ['この 時計は', '18,600円です'], jawaban: 'この 時計は 18,600円です', penjelasan: 'Menyebut harga: angka + 円です.' },
  { id: 's16', fokus: 'ここ/そこ/あそこ は ～です', arti: 'Di sini toilet.', kata: ['ここは', 'トイレです'], jawaban: 'ここは トイレです', penjelasan: 'トイレ sama dengan お手洗い.' },
  { id: 's17', fokus: '～は 場所 です', arti: 'Mesin jual otomatis di sana.', kata: ['自動販売機は', 'あそこです'], jawaban: '自動販売機は あそこです', penjelasan: 'Menyatakan letak benda.' },
  { id: 's18', fokus: 'どこ/どちら', arti: 'Meja informasi di lantai berapa?', kata: ['受付は', '何階ですか'], jawaban: '受付は 何階ですか', penjelasan: '何階 = "lantai berapa".' },
  { id: 's19', fokus: '～の～ (buatan)', arti: 'Ini komputer buatan Jepang.', kata: ['これは', '日本の', 'コンピューターです'], jawaban: 'これは 日本の コンピューターです', penjelasan: 'Nama negara の + produk.' },
  { id: 's20', fokus: '～の～ (buatan)', arti: 'Ini anggur (buatan) Perancis.', kata: ['これは', 'フランスの', 'ワインです'], jawaban: 'これは フランスの ワインです', penjelasan: 'フランスの ワイン = anggur Perancis.' },
]
