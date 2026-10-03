import type { Bunpou } from '@/types/bab'

// 4 pola dari 文型 (halaman cetak 14)
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: 'これ／それ／あれ は ～です',
    penjelasan:
      'これ、それ、あれ menunjukkan benda dan berfungsi sebagai Kata Benda. これ = benda dekat si pembicara, それ = benda dekat lawan bicara, あれ = benda jauh dari keduanya.',
    contoh: ['これは 辞書です。', 'それは わたしの 傘です。'],
    artiContoh: ['Ini kamus.', 'Itu payung saya.'],
  },
  {
    no: 2,
    pola: 'これ／それ／あれ は ～の ～です',
    penjelasan:
      'Memakai の untuk menyatakan benda/orang milik atau kategori. Contoh: これは コンピューターの 本です。',
    contoh: ['これは コンピューターの 本です。'],
    artiContoh: ['Ini buku komputer.'],
  },
  {
    no: 3,
    pola: 'この／その／あの Kata Benda は ～です',
    penjelasan:
      'Jika menerangkan Kata Benda, dipakai この、その、 dan あの.',
    contoh: ['この 傘は わたしのです。', 'あの 方は どなたですか。'],
    artiContoh: ['Payung ini milik saya.', 'Beliau siapa?'],
  },
  {
    no: 4,
    pola: 'そうです／違います',
    penjelasan:
      'Dalam kalimat nominal yang menyatakan positif atau negatif, untuk jawaban afirmatif digunakan はい、そうです。Untuk bentuk negatif, tidak lazim menjawab そう, melainkan digantikan ちがいます (bukan), atau menyebutkan jawaban yang sebenarnya.',
    contoh: ['それは 辞書ですか。……はい、そうです。', 'それは ミラーさんのですか。……いいえ、違います。'],
    artiContoh: ['Apakah itu kamus? ……Ya, betul.', 'Apakah itu milik Sdr. Miller? ……Bukan.'],
  },
]

export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: '何の／だれあ',
    penjelasan:
      'Kata tanya 何 untuk benda (apa), だれ untuk orang (siapa). だれの menunjukkan kepunyaan (milik siapa).',
    contoh: ['それは 何ですか。……カメラです。', 'あの 人は だれですか。……ミラーさんです。'],
    artiContoh: ['Apa itu? ……Kamera.', 'Orang itu siapa? ……Sdr. Miller.'],
  },
  {
    no: 2,
    pola: 'Kata Benda の Kata Benda',
    penjelasan:
      'Jika Kata Benda pertama menerangkan Kata Benda kedua, keduanya disambung dengan の.',
    contoh: ['それは 何の 雑誌ですか。……コンピューターの 雑誌です。'],
    artiContoh: ['Itu majalah apa? ……Majalah komputer.'],
  },
]
