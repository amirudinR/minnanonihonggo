import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal: 'Mondai 1 — Dengarkan audio, lalu jawab seperti contoh.',
    instruksi: 'Contoh: いいえ、[わたしは] 先生じゃ ありません。',
    audio: '/audio/bab01_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal: 'Mondai 2 — Pilih gambar yang benar (①/②/③) sesuai audio.',
    instruksi: '例1: あなたは 今 何時ですか。→ ①夜 ②朝 ③昼',
    audio: '/audio/bab01_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'mendengarkan',
    soal: 'Mondai 3 — Tentukan benar (○) atau salah (×) berdasarkan audio.',
    instruksi: '例1: × 例2: ○',
    audio: '/audio/bab01_mondai3.mp3',
    kunciTersedia: false,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal: 'Lengkapi kalimat dengan kata yang sesuai:\n1) あなたは (　) ですか。……はい、わたしは ミラーです。\n2) ミラーさんは (　) ですか。……はい、アメリカ人です。\n3) ワットさんも (　) ですか。……いいえ、アメリカ人じゃ ありません。イギリス人です。\n4) あの方は (　) ですか。……サントスさんです。\n5) テレサちゃんは (　) ですか。……9歳です。',
    jawaban: '1) ミラー 2) アメリカ人 3) アメリカ人 4) だれ/どなた 5) なんさい/おいくつ',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal: 'Isi partikel yang sesuai:\n1) ワンさん (　) 医者です。\n2) カリナさん (　) 先生です (　)。……いいえ、先生じゃ ありません。\n3) ミラーさんは IMC (　) 社員です。\n4) ミラーさんは 会社員です。サントスさん (　) 会社員です。',
    jawaban: '1) は 2) は、か 3) の 4) も',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal: 'Isi untuk perkenalan diri:\n初めまして。わたしは ___________ です。___________ から 来ました。どうぞ よろしく。',
    jawaban: 'わたしは [nama Anda] です。[negara] から 来ました。',
    kunciTersedia: true,
  },
]
