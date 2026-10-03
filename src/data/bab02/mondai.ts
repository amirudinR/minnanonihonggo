import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 — Dengarkan audio, lihat gambar, lalu sebutkan.\n①辞書 ②コンピューター ③名刺 ④自動車の 雑誌 ⑤かばん', instruksi: '例: それは ノートです。→ (①〜⑤を聞いて)', audio: '/audio/bab02_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 — Pilih ①/②/③ yang sesuai audio (2 soal).', audio: '/audio/bab02_mondai2.mp3', kunciTersedia: false },
  { no: 3, jenis: 'mendengarkan', soal: 'Mondai 3 — Isi 1) 2) 3) sesuai audio.', audio: '/audio/bab02_mondai3.mp3', kunciTersedia: false },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例: それは（だれ、何、本）ですか。……本です。\n1) ミラーさんは（どなた、何歳、何）ですか。……28歳です。\n2) ワンさんは（だれ、先生、何）ですか。……いいえ、違います。\n3) それは（イーさん、だれ、何）の 雑誌ですか。……カメラの 雑誌です。\n4) これは（わたし、あなた、あの人）のですか。……はい、わたしのです。',
    jawaban: '1) 何歳 2) 何 3) 何 4) あなた',
    kunciTersedia: true,
  },
  { no: 5, jenis: 'jawaban_pendek', soal: '例:（これ）は かぎです。\n1)（ ）は ラジオです。\n2)（ ）は コンピューターです。\n3)（ ）は 辞書です。', instruksi: 'Lengkapi dengan これ／それ／あれ（画像に合わせ）', kunciTersedia: false },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例: あの 人は（だれ）ですか。……ミラーさんです。\n1) これは（ ）ですか。……はい、新聞です。\n2) それは（ ）ですか。……テレホンカードです。\n3) それは（ ）テープですか。……韓国語の テープです。\n4) これは（ ）鉛筆ですか。……木村さんの 鉛筆です。',
    jawaban: '1) 何 2) 何 3) 何の 4) だれの',
    kunciTersedia: true,
  },
  {
    no: 7, jenis: 'jawaban_pendek',
    soal: '例: は／本／です／これ → これは 本です。\n1) です／それ／は／の／わたし／かぎ\n2) の／です／ミラーさん／辞書／は／この\n3) だれ／その／の／か／傘／です／は\n4) あれ／です／先生／机／の／は',
    jawaban: '1) それは わたしの かぎです。 2) この 辞書は ミラーさんのです。 3) その 傘は だれのですか。 4) あれは 先生の 机です。',
    kunciTersedia: true,
  },
  {
    no: 8, jenis: 'jawaban_pendek',
    soal: '例: 山田: はい。どなたですか。\nサントス: 408の サントスです ___ 。\n1) サントス: これから ___ 。どうぞ よろしく。\n山田: こちらこそ よろしく。\n2) サントス: あのう、これ、 ___ 。 ___ 。\n山田: どうも……。何ですか。\nサントス: コーヒーです。\n山田: ___ 。',
    jawaban: '1) お世話に なります 2) ①ほんの 気持ちです ②どうぞ ③どうも ありがとうございます',
    kunciTersedia: true,
  },
]
