import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 - Dengarkan audio dan jawab pertanyaannya.', instruksi: 'Jawablah pertanyaan berdasarkan audio.', audio: '/audio/bab12_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 - Dengarkan percakapan dan pilih gambar/jawaban yang benar.', instruksi: 'Pilih jawaban yang benar (◯ atau ✕) berdasarkan audio.', audio: '/audio/bab12_mondai2.mp3', kunciTersedia: false },
  {
    no: 3, jenis: 'jawaban_pendek',
    soal: '例：この 卵は 新しいですか。……いいえ、（ 古い ）です。\n1) あなたの うちは 駅から 近いですか。……いいえ、（ ）です。\n2) 日曜日は 車が 多いですか。……いいえ、（ ）です。\n3) その カメラは 軽いですか。……いいえ、（ ）です。\n4) 野球が 好きですか。……いいえ、（ ）です。',
    jawaban: '1) 遠い 2) 少ない 3) 重い 4) 嫌い',
    kunciTersedia: true,
  },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例：海は きれいでしたか。……いいえ、あまり（ きれいじゃ ありませんでした ）。\n1) 天気は よかったですか。……いいえ、（ ）。\n2) きのうは 雨でしたか。……いいえ、（ ）。\n3) 映画は おもしろかったですか。……いいえ、あまり（ ）。\n4) 試験は 簡単でしたか。……いいえ、あまり（ ）。\n5) 先週は 忙しかったですか。……いいえ、（ ）。',
    jawaban: '1) あまり よくなかったです 2) 雨じゃ ありませんでした 3) おもしろくなかったです 4) 簡単じゃ ありませんでした 5) 忙しくなかったです',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例：あの 人は（ だれ ）ですか。……ミラーさんです。\n1) 夏と 冬と（ ）が 好きですか。……冬の ほうが 好きです。\n2) 家族で（ ）が いちばん 料理が 上手ですか。……父が いちばん 上手です。\n3) スポーツで（ ）が いちばん おもしろいですか。……サッカーが いちばん おもしろいです。\n4) 日本で（ ）が いちばん 人が 多いですか。……東京が いちばん 多いです。\n5) 1週間で（ ）が いちばん 忙しいですか。……月曜日が いちばん 忙しいです。',
    jawaban: '1) どちら 2) だれ 3) 何 4) どこ 5) いつ',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: 'どこが いちばん いいですか\nわたしの うちの 近くに スーパーが ３つ あります。「毎日屋」と「ABCストア」と「ジャパン」です。\n「毎日屋」は いちばん 小さい 店ですが、近いです。うちから 歩いて 5分です。新しい 魚が 多いです。野菜や 果物も 多いです。外国の 物は 全然 ありません。\n「ABCストア」は うちから 歩いて 15分 かかります。肉が 多いです。いちばん 安い 店です。外国の 物も ありますが、「ジャパン」より 少ないです。おいしい パンが あります。\n「ジャパン」は いちばん 遠いです。魚は あまり 多くないですが、肉が たくさん あります。外国の 物が 多いです。とても 大きい 店です。「ABCストア」より 大きいです。3つの 店の 中で わたしは「ABCストア」が いちばん 好きです。\n1)（ ）「毎日屋」の 魚は 新しい ですが、少ないです。\n2)（ ）「ABCストア」は「毎日屋」より 安いです。\n3)（ ）3つの 店で「ジャパン」が いちばん 大きいです。\n4)（ ）「毎日屋」に ドイツの ワインが あります。\n5)（ ）わたしの うちから「ABCストア」が いちばん 近いです。',
    jawaban: '1) × 2) ○ 3) ○ 4) × 5) ×',
    kunciTersedia: true,
  }
]
