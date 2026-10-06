import type { MondaiItem } from '@/types/bab'

// Bab 49 — 問題 1-7. Honsatsu 第49課 idx 218-219 (cetak 200-201).
// Bab 49 punya 2 track audio (src/core/audio/manifest.ts + public/audio):
// bab49_mondai1.mp3 = 問題 1, bab49_mondai2.mp3 = 問題 2 (keduanya bertanda telinga).
// 問題 3-7 = written, kunci jawaban berasal dari 規則 敬語 di bab ini.
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      '問題 1 - Dengarkan audio, lalu tulis kalimat yang Anda dengar pada garis jawaban.\n1) ______________________\n2) ______________________\n3) ______________________\n4) ______________________\n5) ______________________',
    instruksi:
      'Putar audio beberapa kali, lalu tulis kalimat yang terdengar. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab49_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      '問題 2 - Dengarkan audio, lalu lengkapi bagian kosong dengan bentuk 敬語 yang tepat.\n1) (　　　　　　)  2) (　　　　　　)  3) (　　　　　　)  4) (　　　　　　)  5) (　　　　　　)',
    instruksi:
      'Putar audio, lalu isi setiap bagian kosong dengan bentuk 敬語. Kunci jawaban tidak disertakan.',
    audio: '/audio/bab49_mondai2.mp3',
    kunciTersedia: false,
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Lengkapi bagian kosong dengan bentuk 尊敬語 yang tepat.\n例: 社長は 何か スポーツを（されます）か。…ゴルフを します。\n1) 部長の 奥様も ごいっしょに ゴルフに（　　　　　　）か。…ええ、たまに いっしょに 行きます。\n2) 先生は 来週の 国際会議で 何に ついて（　　　　　　）か。…日本の 将来に ついて 話します。\n3) 課長は 何時ごろ（　　　　　　）か。…3時ごろ 戻ります。\n4) おじい様は 何歳に（　　　　　　）か。…ことし 82歳に なります。',
    jawaban:
      '1) 行かれます 2) お話しに なります 3) お戻りに なります 4) なられます （例）されます',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Lengkapi kalimat berikut dengan bentuk 敬語 yang tepat.\n例: この 本を 書いたのは だれですか。…わたしの 研究室の 先生が お書きに なりました。\n1) 車を 呼んだのは だれですか。…部長が ______________________。\n2) この 料理を 作ったのは だれですか。…部長の 奥様が ______________________。\n3) この 傘を 忘れたのは だれですか。…伊藤先生が ______________________。\n4) 新しい 製品の 名前を 決めたのは だれですか。…社長が ______________________。',
    jawaban:
      '1) お呼びに なりました 2) お作りに なりました 3) お忘れに なりました 4) お決めに なりました',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Lengkapi bagian kosong dengan bentuk yang tepat dari kata dalam kurung.\n例: 先生は 今度の 旅行に（　　）か。…いいえ、わたしは 行きません。\n1) 部長、けさ の テレビの ニュースを（　　）か。…うん、見たよ。\n2) 先生、飲み物は 何に（　　）か。…ビールに します。\n3) 課長、あの 人を（　　）か。…うん、知っているよ。\n4) 先生のご両親は どちらに（　　）か。…北海道に います。',
    jawaban:
      '1) 見ました 2) します 3) 知っています 4) いらっしゃいます （例）行きません',
    kunciTersedia: true,
  },
  {
    no: 6,
    jenis: 'jawaban_pendek',
    soal:
      '問題 6 - Lengkapi bagian kosong dengan bentuk お〜ください yang tepat.\n例: 係の 者が 聞いて 来ますので、ちょっと お待ち ください。\n1) 皆様 お待たせしました。どうぞ 会場に ______________________。\n2) お国へ 帰られたら、ご家族の 皆様に よろしく ______________________。\n3) すみませんが、この 書類に お名前と ご住所を ______________________。\n4) どうぞ そちろの いすに ______________________。',
    jawaban:
      '1) お入りください 2) お伝えください 3) お書きください 4) お座りください',
    kunciTersedia: true,
  },
  {
    no: 7,
    jenis: 'jawaban_pendek',
    soal:
      '問題 7 - Baca teks 「子どもに 教えられたこと」 berikut, lalu beri tanda (○) atau (×) pada pernyataan (1)-(4).\n(1) 大江さんの 名前は 世界中の 人に 知られています。\n(2) 大江さんは すばらしい 本を 書いて、ノーベル賞を もらいました。\n(3) 光さんは 大学で 音楽を 教えて います。\n(4) きょうの お話は 「子どもと 文学」についてです。',
    jawaban: '(1) ○ (2) ○ (3) × (4) ○',
    instruksi:
      'Pernyataan (3) salah: 光さん adalah anak yang buta, bukan yang mengajar musik di universitas.',
    kunciTersedia: true,
    konteks: [
      {
        judul: '子どもに 教えられたこと',
        teks:
          'きょうの 講師は 大江健三郎さんです。大江さんは 1935年、愛媛県で お生まれに なりました。東京大学を 卒業され、多くの 文学作品を お書きに なりました。1994年には ノーベル文学賞を 受賞され、世界的に 有名な 作家で いらっしゃいます。ご家族は 奥様と 3人のお子様が いらっしゃいます。ご長男の 光さんは 障害を お持ちですが、音楽が お好きで、作曲を して いらっしゃいます。大江さんは 光さんの 音楽活動の ために、いろいろ 手伝って いらっしゃいます。そして、光さんから 教えられた ことが たくさん あると おっしゃっています。きょうは「子どもに 教えられた こと」について お話しを して いただきます。それでは 大江先生、どうぞ。',
      },
    ],
  },
]
