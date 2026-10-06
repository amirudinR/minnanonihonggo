import type { MondaiItem } from '@/types/bab'

// 問題 第48課 — Honsatsu idx 210 (cetak 192).
// Butir 1–2 adalah soal mendengarkan (ikon speaker) memakai CD, kunci tidak
// dicetak di buku → `kunciTersedia: false` + `instruksi`.
// Butir 3–5 adalah latihan tulis dengan kunci grammar yang deterministik
// (bentuk 使役 dan pilihan kata dari kotak), dicatat di `jawaban`.
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      'Dengarkan audio, lalu tuliskan apa yang didengar pada 3 baris kosong.\n' +
      '1）＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n' +
      '2）＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿\n' +
      '3）＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿',
    audio: '/audio/bab48_mondai1.mp3',
    kunciTersedia: false,
    instruksi:
      'Soal mendengarkan ( listened to the audio ). Dengarkan sekali, lalu tulis jawabannya. Kunci jawaban tidak tersedia di buku.',
  },
  {
    no: 2,
    jenis: 'mendengarkan',
    soal:
      'Dengarkan audio, lalu isi 5 kotak berikut dengan kata yang tepat.\n' +
      '1）（　　　　　）　2）（　　　　　）　3）（　　　　　）　4）（　　　　　）　5）（　　　　　）',
    audio: '/audio/bab48_mondai2.mp3',
    kunciTersedia: false,
    instruksi:
      'Soal mendengarkan (mendengarkan). Dengarkan sekali, lalu isi setiap kotak dengan satu kata. Kunci jawaban tidak tersedia di buku.',
  },
  {
    no: 3,
    jenis: 'jawaban_pendek',
    soal:
      '問題 3 - Ubah setiap kata kerja menjadi bentuk 使役 (kausatif), seperti pada contoh.\n' +
      '例：泣きます → 泣かせます\n' +
      '1）急ぎます →（　　　　）\n' +
      '2）話します →（　　　　）\n' +
      '3）待ちます →（　　　　）\n' +
      '4）運びます →（　　　　）\n' +
      '5）休みます →（　　　　）\n' +
      '6）走ります →（　　　　）\n' +
      '7）洗います →（　　　　）\n' +
      '8）います →（　　　　）\n' +
      '9）届けます →（　　　　）\n' +
      '10）します →（　　　　）\n' +
      '11）来ます →（　　　　）',
    jawaban:
      '1）いそがせます 2）話させます 3）待たせます 4）運ばせます 5）休ませます 6）走らせます 7）洗わせます 8）いませます 9）届けさせます 10）させます 11）来させます （例）泣かせます',
    kunciTersedia: true,
  },
  {
    no: 4,
    jenis: 'jawaban_pendek',
    soal:
      '問題 4 - Lengkapi （　） dengan partikel を／に, lalu ubah kata kerja dalam （　→　） menjadi bentuk 使役.\n' +
      '例1：お客さんが 来るので、弟（を）買い物に（行きます→ 行かせます）。\n' +
      '例2：荷物が多いので、弟（に）荷物を（持ちます→ 持たせます）。\n' +
      '1）天気が いいので、子ども（　）公園で（遊びます→　　　　　　）。\n' +
      '2）部屋が 汚れているので、娘（　）（掃除します→　　　　　　）。\n' +
      '3）忙しいので、子ども（　）店の 仕事を（手伝います→　　　　　　）。\n' +
      '4）資料が 足りないので、係の 者（　）（持って 来ます→　　　　　　）。',
    jawaban:
      '1）を／遊ばせます 2）に／掃除させます 3）に／手伝わせます 4）に／持って 来させます （例1）を／行かせます （例2）に／持たせます',
    kunciTersedia: true,
  },
  {
    no: 5,
    jenis: 'jawaban_pendek',
    soal:
      '問題 5 - Gunakan kata dalam kotak untuk melengkapi kalimat ini dengan pola 「〜て いただけませんか」 (meminta izin)\n' +
      '〔帰ります／止めます／休みます／使います／置きます〕\n' +
      '例：疲れたので、ちょっと（休ませて）いただけませんか。\n' +
      '1）ここに 荷物を（　　　　　）いただけませんか。\n' +
      '2）夕方 病院へ 行きたいんですが、４時ごろ（　　　　　）いただけませんか。\n' +
      '3）会社に 連絡したいんですが、この 電話を（　　　　　）いただけませんか。\n' +
      '4）すみません、ここに 車を（　　　　　）いただけませんか。',
    jawaban: '1）置きます 2）休みます 3）使います 4）止めます （例）休ませて',
    kunciTersedia: true,
  },
]
