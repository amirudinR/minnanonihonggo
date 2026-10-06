import type { Kaiwa } from '@/types/bab'

// 会話 (第35課, Honsatsu idx 95). `arti` 1:1 dari PDF Indonesia "Percakapan".
export const kaiwa: Kaiwa = {
  judul: '旅行社へ 行けば、わかります',
  audio: '/audio/bab35_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'タワポン',
      teks: '鈴木さん、冬休みに 友達と スキーに 行きたいんですが、どこか いい 所、ありませんか。',
      arti: 'Sdr. Suzuki, pada liburan musim dingin, (saya) mau pergi bermain ski bersama teman, ada tempat yang bagus?',
      furigana: [{ base: '鈴木', ruby: 'すずき' }, { base: '冬休', ruby: 'ふゆやす' }, { base: '友達', ruby: 'ともだち' }, { base: '行', ruby: 'い' }, { base: '所', ruby: 'ところ' }],
    },
    {
      no: 2,
      pembicara: '鈴木',
      teks: '何日ぐらいの 予定ですか。',
      arti: 'Rencana kira-kira berapa hari?',
      furigana: [{ base: '何日', ruby: 'なんにち' }, { base: '予定', ruby: 'よてい' }],
    },
    { no: 3, pembicara: 'タワポン', teks: '3日ぐらいです。', arti: 'Kira-kira tiga hari.', furigana: [{ base: '日', ruby: 'にち' }] },
    {
      no: 4,
      pembicara: '鈴木',
      teks: 'それなら、草津か 志賀高原が いいと 思いますよ。温泉も あるし……。',
      arti: 'Kalau begitu, saya rasa bagusnya di Kusatsu atau Shigakogen. Ada pemandian air panas juga...',
      furigana: [{ base: '草津', ruby: 'くさつ' }, { base: '志賀高原', ruby: 'しがこうげん' }, { base: '思', ruby: 'おも' }, { base: '温泉', ruby: 'おんせん' }],
    },
    {
      no: 5,
      pembicara: 'タワポン',
      teks: 'どうやって 行くんですか。',
      arti: 'Bagaimana caranya ke sana?',
      furigana: [{ base: '行', ruby: 'い' }],
    },
    {
      no: 6,
      pembicara: '鈴木',
      teks: 'JRでも 行けますが、夜行バスなら、朝 着きますから、便利ですょ。',
      arti: 'Bisa pergi dengan JR, tetapi kalau dengan bus malam praktis karena tibanya pagi.',
      furigana: [{ base: '行', ruby: 'い' }, { base: '夜行', ruby: 'やこう' }, { base: '朝', ruby: 'あさ' }, { base: '着', ruby: 'つ' }, { base: '便利', ruby: 'べんり' }],
    },
    {
      no: 7,
      pembicara: 'タワポン',
      teks: 'どちらが 安いんですか。',
      arti: 'O begitu. Yang mana yang murah?',
      furigana: [{ base: '安', ruby: 'やす' }],
    },
    {
      no: 8,
      pembicara: '鈴木',
      teks: 'さあ……。旅行社へ 行けば、もっと 詳しい ことが わかります。',
      arti: 'Yaaa... Lebih jelas kalau pergi ke agen perjalanan.',
      furigana: [{ base: '旅行社', ruby: 'りょこうしゃ' }, { base: '行', ruby: 'い' }, { base: '詳', ruby: 'くわ' }],
    },
    {
      no: 9,
      pembicara: 'タワポン',
      teks: 'それから、スキーの 道具や 服は 何も 持って いないんですが……。',
      arti: 'Kemudian, saya tidak mempunyai apa-apa seperti alat ski atau baju...',
      furigana: [{ base: '道具', ruby: 'どうぐ' }, { base: '服', ruby: 'ふく' }, { base: '持', ruby: 'も' }],
    },
    {
      no: 10,
      pembicara: '鈴木',
      teks: '全部 スキー場で 借りられますよ。心配なら、旅行社で 予約も できるし……。',
      arti: 'Semuanya bisa (Anda) sewa di lapangan ski. Kalau khawatir bisa memesan di agen perjalanan juga.',
      furigana: [{ base: '全部', ruby: 'ぜんぶ' }, { base: '場', ruby: 'ば' }, { base: '借', ruby: 'か' }, { base: '心配', ruby: 'しんぱい' }, { base: '旅行', ruby: 'りょこう' }, { base: '予約', ruby: 'よやく' }],
    },
    {
      no: 11,
      pembicara: 'タワポン',
      teks: 'そうですか。どうも ありがとう ございました。',
      arti: 'O begitu. Terima kasih banyak.',
    },
  ],
}