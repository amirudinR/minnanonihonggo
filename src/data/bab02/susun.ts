import type { SusunItem } from '@/types/bab'

// Latihan menyusun kalimat Bab 2 — fokus 文型:
//  (1) これ/それ/あれ は ～です  (2) これ/それ/あれ は ～の ～です
//  (3) この/その/あの Kata Benda は ～です  (4) そうです／違います
//  + catatan: 何／だれ／だれの , Kata Benda の Kata Benda
// ATURAN: `kata` = unit kata (boleh ada spasi internal, mis. "この 傘は"); `jawaban` = unit itu dalam urutan benar.
export const susun: SusunItem[] = [
  { id: 's1', fokus: 'これ/それ/あれ は ～です', arti: 'Ini kamus.', kata: ['これは', '辞書です'], jawaban: 'これは 辞書です', penjelasan: 'これ = benda dekat pembicara.' },
  { id: 's2', fokus: 'これ/それ/あれ は ～です', arti: 'Itu payung saya.', kata: ['それは', 'わたしの', '傘です'], jawaban: 'それは わたしの 傘です', penjelasan: 'それ = benda dekat lawan bicara.' },
  { id: 's3', fokus: 'これ/それ/あれ は ～です', arti: 'Itu (jauh) radio.', kata: ['あれは', 'ラジオです'], jawaban: 'あれは ラジオです', penjelasan: 'あれ = benda jauh dari keduanya.' },
  { id: 's4', fokus: 'これ/それ/あれ は ～です', arti: 'Ini kartu telepon?', kata: ['これは', 'テレホンカードですか'], jawaban: 'これは テレホンカードですか', penjelasan: 'Kalimat tanya: tambahkan か.' },
  { id: 's5', fokus: 'そうです／違います', arti: 'Ya, betul.', kata: ['はい', 'そうです'], jawaban: 'はい そうです', penjelasan: 'Jawaban afirmatif: はい、そうです.' },
  { id: 's6', fokus: 'そうです／違います', arti: 'Bukan.', kata: ['いいえ', '違います'], jawaban: 'いいえ 違います', penjelasan: 'Negatif: いいえ、違います (bukan そうじゃありません).' },
  { id: 's7', fokus: 'これ/それ/あれ は ～の ～です', arti: 'Ini buku komputer.', kata: ['これは', 'コンピューターの', '本です'], jawaban: 'これは コンピューターの 本です', penjelasan: 'の menyatakan kategori: buku (tentang) komputer.' },
  { id: 's8', fokus: 'これ/それ/あれ は ～の ～です', arti: 'Itu majalah mobil.', kata: ['それは', '自動車の', '雑誌です'], jawaban: 'それは 自動車の 雑誌です', penjelasan: 'の menyambung 自動車 + 雑誌.' },
  { id: 's9', fokus: 'この/その/あの ～は ～です', arti: 'Payung ini milik saya.', kata: ['この 傘は', 'わたしのです'], jawaban: 'この 傘は わたしのです', penjelasan: 'この menerangkan kata benda yang mengikutinya.' },
  { id: 's10', fokus: 'この/その/あの ～は ～です', arti: 'Buku catatan ini milik Sdr. Karina.', kata: ['この ノートは', 'カリナさんのです'], jawaban: 'この ノートは カリナさんのです', penjelasan: 'の menggantikan kata benda yang sudah disebut.' },
  { id: 's11', fokus: '何／だれ', arti: 'Apa itu?', kata: ['それは', '何ですか'], jawaban: 'それは 何ですか', penjelasan: '何 = "apa" untuk benda.' },
  { id: 's12', fokus: '何／だれ', arti: 'Orang itu siapa?', kata: ['あの 人は', 'だれですか'], jawaban: 'あの 人は だれですか', penjelasan: 'だれ = "siapa" untuk orang.' },
  { id: 's13', fokus: '何の／だれの', arti: 'Itu majalah apa?', kata: ['それは', '何の', '雑誌ですか'], jawaban: 'それは 何の 雑誌ですか', penjelasan: '何の = "tentang apa".' },
  { id: 's14', fokus: '何の／だれの', arti: 'Itu tas siapa?', kata: ['あれは', 'だれの', 'かばんですか'], jawaban: 'あれは だれの かばんですか', penjelasan: 'だれの = "milik siapa".' },
  { id: 's15', fokus: '～の ～', arti: 'Kunci ini punya siapa?', kata: ['この かぎは', 'だれのですか'], jawaban: 'この かぎは だれのですか', penjelasan: 'だれの + です = "milik siapa".' },
  { id: 's16', fokus: '～の ～', arti: 'Itu tas Sdr. Sato.', kata: ['あれは', '佐藤さんの', 'かばんです'], jawaban: 'あれは 佐藤さんの かばんです', penjelasan: '佐藤さんの かばん = tas milik Sato.' },
  { id: 's17', fokus: 'そうです／違います', arti: 'Itu buku tulis? ……Bukan, itu bukan. Itu buku agenda.', kata: ['それは', 'ノートですか', 'いいえ', 'そうじゃありません', '手帳です'], jawaban: 'それは ノートですか いいえ そうじゃありません 手帳です', penjelasan: 'Menolak lalu menyebut yang benar: 〜じゃありません。〜です。' },
  { id: 's18', fokus: 'この/その/あの ～は ～です', arti: 'Payung ini milik Anda? ……Bukan, bukan milik saya.', kata: ['この 傘は', 'あなたのですか', 'いいえ', 'わたしのじゃ', 'ありません'], jawaban: 'この 傘は あなたのですか いいえ わたしのじゃ ありません', penjelasan: 'Negatif dari ～のです → ～のじゃ ありません.' },
  { id: 's19', fokus: 'これ/それは ～ですか、～ですか', arti: 'Ini angka "9" atau "7"?', kata: ['これは', '「9」ですか', '「7」ですか'], jawaban: 'これは 「9」ですか 「7」ですか', penjelasan: 'Menawarkan dua pilihan dengan ～ですか、～ですか.' },
  { id: 's20', fokus: '何／だれ', arti: 'Ini buku. ……Buku apa?', kata: ['これは', '本です', '何の', '本ですか'], jawaban: 'これは 本です 何の 本ですか', penjelasan: '何の 本ですか = "buku tentang apa?".' },
]
