import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 — Dengarkan audio, lalu isi 1) sampai 5).', instruksi: '例: それは ノートです。→ (1)～(5) を聞いて答えなさい。', audio: '/audio/bab15_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 — Pilih jawaban yang sesuai audio (5 soal).', instruksi: 'Audio を聞いて、正しいものを選びなさい。', audio: '/audio/bab15_mondai2.mp3', kunciTersedia: false },
  {
    no: 3, jenis: 'jawaban_pendek',
    soal: '例: 食べて → 食べます。\n1) 休んで\n2) 食事して\n3) 来て\n4) 書いて\n5) 借りて\n6) 迎えて\n7) 待って\n8) 話して\n9) 止めて',
    jawaban: '1) 休みます 2) 食事します 3) 来ます 4) 書きます 5) 借ります 6) 迎えます 7) 待ちます 8) 話します 9) 止めます',
    kunciTersedia: true,
  },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例: この 辞書、借りても いいですか。……すみません、今 使っていますから。\n語句: 店の前です / わたしのじゃ ありません / 今使っています / 映画を見たいです / 市役所へ外国人登録に行きます\n1) ここに 車を 止めても いいですか。……すみません、＿＿＿＿＿から。\n2) ＿＿＿＿＿から、あしたの 午後 休んでも いいですか。……ええ、いいですよ。\n3) ＿＿＿＿＿から、テレビを つけても いいですか。……どうぞ。\n4) この 傘、つかっても いいですか。……すみません、＿＿＿＿＿から。',
    jawaban: '1) 店の前です 2) 市役所へ外国人登録に行きます 3) 映画を見たいです 4) 今使っています',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例1: 日本で 20歳から たばこを（吸います→　吸ってもいいです　）。\n例2: エレベーターで（遊びます→　遊んではいけません　）。\n1) 図書館で 食べ物を（食べます→　）。\n2) 先生、終わりました。……じゃ、（帰ります→　）。\n3) 試験ですから、隣の 人と（話します→　）。\n4) 子どもは お酒を（飲みます→　）。',
    jawaban: '1) 食べてはいけません 2) 帰ってもいいです 3) 話してはいけません 4) 飲んではいけません',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例: ミラーさんは IMCで（働いて）います。\n語句: 持ちます / 作ります / 働きます / 結婚します / 住みます\n1) ミラーさんは 大阪に（　）います。\n2) IMCは コンピューターソフトを（　）います。\n3) ミラーさんは（　）いません。独身です。\n4) ミラーさんは パソコンを（　）います。',
    jawaban: '1) 住んで 2) 作って 3) 結婚して 4) 持って',
    kunciTersedia: true,
  },
  {
    no: 7, jenis: 'jawaban_pendek',
    soal: '段落: わたしは とても 寒い 所に 住んでいます。わたしは 赤い服が 好きです。赤い 服は 暖かいです。わたしは 1年に1日だけ 働きます。それは 12月24日です。24日の夜 すてきな プレゼントを いろいろな 国の子どもに あげます。わたしは 独身ですから、子どもが いません。でも 世界の子どもは みんな わたしを 知っています。そして 12月24日の 夜 わたしの プレゼントを 待っています。わたしは この仕事が とても 好きです。\n例: この 人の うちは どんな所に ありますか。……寒い 所に あります。\n1) この 人は 結婚していますか。……\n2) この 人は いつ 仕事を しますか。……\n3) この 人の 名前を 知っていますか。……\n4) あなたも この 人に プレゼントを もらいましたか。……',
    instruksi: 'Baca paragraf, lalu jawab 1)～4) dalam kalimat lengkap.',
    kunciTersedia: false,
  },
]
