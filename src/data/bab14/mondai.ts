import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 - Dengarkan audio dan jawab pertanyaannya.', instruksi: 'Jawablah pertanyaan berdasarkan audio.', audio: '/audio/bab14_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 - Dengarkan percakapan dan pilih gambar/jawaban yang benar.', instruksi: 'Pilih jawaban yang benar (◯ atau ✕) berdasarkan audio.', audio: '/audio/bab14_mondai2.mp3', kunciTersedia: false },
  { no: 3, jenis: 'mendengarkan', soal: 'Mondai 3 - Dengarkan dan isilah bagian yang kosong.', instruksi: 'Lengkapi kalimat berdasarkan audio.', audio: '/audio/bab14_mondai3.mp3', kunciTersedia: false },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例：書きます → 書いて\n1) 行きます →\n2) 急ぎます →\n3) 飲みます →\n4) 遊びます →\n5) 待ちます →\n6) 帰ります →\n7) 買います →\n8) 貸します →\n9) 食べます →\n10) 起きます →\n11) 見ます →\n12) 勉強します →\n13) 来ます →',
    jawaban: '1) 行って 2) 急いで 3) 飲んで 4) 遊んで 5) 待って 6) 帰って 7) 買って 8) 貸して 9) 食べて 10) 起きて 11) 見て 12) 勉強して 13) 来て',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例：すみませんが、ボールペンを（ 貸して ）ください。\n[開めます / 貸します / 待ちます / 来ます / 急ぎます]\n1) 時間が ありませんから、（ ）ください。\n2) 今、忙しいですから、また あとで（ ）ください。\n3) さあ、行きましょう。……すみません、ちょっと（ ）ください。\n4) 寒いですから、ドアを（ ）ください。',
    jawaban: '1) 急いで 2) 来て 3) 待って 4) 閉めて',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例：山田さんは 今 昼ごはんを（ 食べて ）います。\n[降ります / 泳ぎます / 食べます / 遊びます / します]\n1) テレサちゃんは どこですか。……2階です。太郎君と（ ）いますよ。\n2) 雨が（ ）いますね。タクシーを 呼びましょうか。\n3) サントスさんは 今 何を（ ）いますか。……プールで（ ）います。',
    jawaban: '1) 遊んで 2) 降って 3) して, 泳いで',
    kunciTersedia: true,
  },
  {
    no: 7, jenis: 'jawaban_pendek',
    soal: 'マリアさん お元気ですか。毎日 暑いですね。わたしと 太郎は 今 両親の うちに います。両親の うちは 海の 近くに あります。太郎は 毎日 泳ぎに 行きます。時々 釣りも します。この 魚は おいしいです。週末に 夫も 来ます。マリアさんも ホセさん、テレサちゃんと いっしょに 遊びに 来て ください。駅まで 車で 迎えに 行きます。待って います。\n山田友子\n1)（ ）友子さんは ご主人と 太郎君と 3人で 両親の うちへ 来ました。\n2)（ ）太郎君は 毎日 釣りを します。\n3)（ ）海の 近くですから、ここの 魚は おいしいです。\n4)（ ）友子さんは 車が ありません。',
    jawaban: '1) × 2) × 3) ○ 4) ×',
    kunciTersedia: true,
  }
]
