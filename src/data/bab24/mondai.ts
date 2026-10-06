import type { MondaiItem } from '@/types/bab'

// Sumber: 問題 Honsatsu idx 225-226 (cetak 204-205). Audio: MONDAI_COUNT Bab24 = 2 track.
export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 - Dengarkan pertanyaan lalu jawab (5 soal).', instruksi: 'Dengarkan lalu jawab.', audio: '/audio/bab24_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 - Dengarkan percakapan lalu tentukan benar (O) atau salah (X) (5 soal).', instruksi: 'Dengarkan lalu tentukan benar (O) atau salah (X).', audio: '/audio/bab24_mondai2.mp3', kunciTersedia: false },
  {
    no: 3, jenis: 'jawaban_pendek',
    soal: '例：太郎君は テレサちゃんに 花を （ あげました、くれました ）。……太郎君は テレサちゃんに 花を あげました。\n1) ワットさんは わたしに 英語の 辞書を （ あげました、くれました ）。\n2) わたしは カリナさんに 大学を 案内して （ くれました、もらいました ）。\n3) 休みの 日 夫は よく 料理を 作って （ あげます、くれます ）。\n4) 駅で 友達に 細かい お金を 貸して （ もらいました、くれました ）。',
    jawaban: '1) くれました 2) もらいました 3) くれます 4) もらいました',
    kunciTersedia: true,
  },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例：ミラー：すみません。塩を 取って ください。\nわたし：はい、どうぞ。\n→ わたしは ミラーさんに 塩を 取って あげました。（ ○ ）\n1) グプタ：あ、細かい お金が ない。\nわたし：グプタさん。この テレホンカードを 使って ください。\nグプタ：すみません。\n→ わたしは グプタさんに テレホンカードを 貸して あげました。（ ）\n2) 男の 人：重いでしょう？ 持ちましょうか。\nわたし：ありがとう ございます。\n→ 男の 人は わたしの 荷物を 持って くれました。（ ）\n3) （エレベーターで）\nミラー：すみません。6階 お願いします。\nわたし：はい。\n→ わたしは ミラーさんに エレベーターの ボタンを 押して もらいました。（ ）',
    jawaban: '1) ○ 2) ○ 3) ×',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例：わたしは ミラーさん（ に ）チョコレートを あげました。\n1) 父は 誕生日に 時計（ ）くれました。\n2) だれ（ ）引っ越しを 手伝って くれますか。\n……カリナさん（ ）手伝って くれます。\n3) わたしは 山田さん（ ）駅まで 送って もらいました。\n4) わたしは 彼（ ）旅行の 本を 送って あげました。',
    jawaban: '1) を 2) が／が 3) に 4) に',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '僕の おばあちゃん\n僕の おばあちゃんは 88歳で、元気です。一人で 住んで います。\n天気が いい とき、おばあちゃんは 病院へ 友達に 会いに 行きます。病院に 友達が たくさん いますから。天気が 悪い とき、足の 調子が よくないですから、出かけません。\nおばあちゃんが 僕の うちへ 来た とき、僕は 学校で 習った 歌を 歌って あげます。おばあちゃんは 僕に 古い 日本の お話を して くれます。そして パンや お菓子を 作って くれます。\nおばあちゃんが うちへ 来ると、うちの 中が とても にぎやかに なります。\n1) （ ）おばあちゃんは 僕の 家族と いっしょに 住んで います。\n2) （ ）おばあちゃんは 足の 調子が 悪い とき、病院へ 行きます。\n3) （ ）おばあちゃんは 僕に 日本の 古い 歌を 歌って くれます。\n4) （ ）僕は おばあちゃんが 好きです。',
    instruksi: 'Baca teks lalu tentukan benar (O) atau salah (X).',
    jawaban: '1) × 2) × 3) × 4) ○',
    kunciTersedia: true,
  },
]
