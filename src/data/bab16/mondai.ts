import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 — Dengarkan audio, lalu isi 1) sampai 5).', instruksi: '例:（ ）は（ ）です。1)～5) を聞いて書きなさい。', audio: '/audio/bab16_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 — Pilih ①/②/③ yang sesuai audio (2 soal).', instruksi: 'Audio を聞いて、正しい絵を選びなさい。', audio: '/audio/bab16_mondai2.mp3', kunciTersedia: false },
  { no: 3, jenis: 'mendengarkan', soal: 'Mondai 3 — Isi 1) 2) 3) sesuai audio.', instruksi: 'Audio を聞いて、（ ）に書き入れなさい。', audio: '/audio/bab16_mondai3.mp3', kunciTersedia: false },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例: ミラーさんは背（が）高いです。\n1) 国へ帰ってから、大学（　）入って、経済の研究をします。\n2) 大阪駅からJR（　）乗って、京都駅で降ります。\n3) 京都で古いお寺（　）見ました。\n4) 日本は山（　）多いです。\n5) 北海道はきれいで、食べ物（　）おいしいです。\n6) 会社（　）やめてから、何をしますか。\n7) ジョギングをして、シャワー（　）浴びて、学校へ行きます。\n8) 大学（　）出てから、父の会社（　）働きます。',
    jawaban: '1) に 2) に 3) を 4) が 5) が 6) を 7) を 8) を／で',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例: 窓を（閉めて）、電気を消して、寝ました。\n語句: 閉めます / 出します / 乗ります / 浴びます / 行きます / 乗り換えます\n1) デパートへ（　）、買い物して、それから映画を見ます。\n2) 銀行でお金を（　）から、買い物に行きます。\n3) 日本橋から地下鉄に（　）、大阪駅でJRに（　）、甲子園で降ります。\n4) シャワーを（　）から、プールに入ってください。',
    jawaban: '1) 行って 2) 出して 3) 乗って／乗り換えて 4) 浴びて',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例: 奈良は緑が（多くて）、きれいな町です。\n語句: いいです / 多いです / 軽いです / にぎやかです / 学生です\n1) カリナさんは富士大学の（　）、美術を勉強しています。\n2) 佐藤さんは頭が（　）、すてきな人です。\n3) 新しいパソコンは（　）、便利です。\n4) 東京は（　）、おもしろい町です。',
    jawaban: '1) 学生で 2) よくて 3) 軽くて 4) にぎやかで',
    kunciTersedia: true,
  },
  {
    no: 7, jenis: 'jawaban_pendek',
    soal: '段落: 大阪は大きい町です。ビルや車や人が多くて、にぎやかです。神戸と京都と奈良は大阪から近いです。京都と奈良は古いお寺や神社がたくさんありますから、外国人もたくさん遊びに来ます。神戸は古い物があまりありませんが、町のうしろに山が、前に海があって、すてきな町です。若い人は神戸が好きです。大阪に空港が2つあります。新しい空港は海の上にあって、広くて、きれいです。\n1)（　）大阪は古いお寺がたくさんあって、静かな町です。\n2)（　）京都と奈良で外国人をたくさん見ます。\n3)（　）神戸の近くに海と山があります。\n4)（　）大阪の新しい空港はきれいですが、狭いです。',
    jawaban: '1) × 2) ○ 3) ○ 4) ×',
    kunciTersedia: true,
  },
]
