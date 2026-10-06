import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 — Dengarkan audio, lalu isi 1) sampai 5).', instruksi: '例: （ここ）は（受付）です。1)～5) を聞いて、（  ）に書き入れなさい。', audio: '/audio/bab03_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 — Pilih ①/② yang sesuai audio (5 soal).', instruksi: 'Audio を聞いて、正しいものを選びなさい。', audio: '/audio/bab03_mondai2.mp3', kunciTersedia: false },
  {
    no: 3, jenis: 'jawaban_pendek',
    soal: '例:（ここ）は（受付）です。\n1)（ ）は（ ）です。\n2)（ ）は（ ）です。\n3)（ ）は（ ）です。\n4)（ ）は（ ）です。\n5)（ ）は（ ）です。',
    instruksi: 'Lihat gambar, lalu lengkapi（ ）dengan tempat/lokasi yang benar.',
    kunciTersedia: false,
  },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例:（わたし、わたしは、わたしの）ミラーです。\n1)（これ、この、ここ）は ドイツの 自動車です。\n2)（それ、その、そこ）かばんは（わたし、わたしは、わたしの）です。\n3) 事務所は（あれ、あの、あそこ）です。\n4) すみません。電話は（だれ、何、どこ）ですか。',
    jawaban: '1) これ 2) その／わたしの 3) あそこ 4) どこ',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例: それは（何）ですか。……辞書です。\n1) お手洗いは（ ）ですか。……あちらです。\n2) ミラーさんは（ ）ですか。……会議室です。\n3) カメラ売り場は（ ）ですか。……5階です。\n4) お国は（ ）ですか。……アメリカです。\n5) 会社は（ ）ですか。……MTです。\n6) MTは（ ）の 会社ですか。……たばこの 会社です。\n7) これは（ ）の ワインですか。……イタリアの ワインです。\n8) この ワインは（ ）ですか。……2,800円です。',
    jawaban: '1) どちら 2) どこ 3) 何階 4) どちら 5) どちら 6) 何 7) どこの 8) いくら',
    kunciTersedia: true,
  },
]
