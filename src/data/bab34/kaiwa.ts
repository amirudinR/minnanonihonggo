import type { Kaiwa } from '@/types/bab'

// 会話 (第34課, Honsatsu idx 87). `arti` 1:1 dari PDF Indonesia "Percakapan".
export const kaiwa: Kaiwa = {
  judul: 'する とおりに してください',
  audio: '/audio/bab34_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: 'クララ',
      teks: '一度、茶道が 見たいんですが……。',
      arti: 'Saya ingin melihat upacara minum teh sekali.',
      furigana: [{ base: '一度', ruby: 'いちど' }, { base: '茶道', ruby: 'さどう' }, { base: '見', ruby: 'み' }],
    },
    {
      no: 2,
      pembicara: '渡辺',
      teks: 'じゃあ、茶道の 土曜日 いっしょに 行きませんか。',
      arti: 'Kalau begitu, bagaimana kalau kita pergi bersama-sama pada hari Sabtu minggu depan?',
      furigana: [{ base: '渡辺', ruby: 'わたなべ' }, { base: '茶道', ruby: 'さどう' }, { base: '土曜日', ruby: 'どようび' }, { base: '行', ruby: 'い' }],
    },
    {
      no: 3,
      pembicara: 'お茶の先生',
      teks: '渡辺さん、お茶を たてて ください。',
      arti: 'Sdri. Watanabe, silakan buat teh.',
      furigana: [{ base: '渡辺', ruby: 'わたなべ' }, { base: '先生', ruby: 'せんせい' }, { base: '茶', ruby: 'ちゃ' }],
    },
    {
      no: 4,
      pembicara: 'お茶の先生',
      teks: 'クララさん、お菓子を 先に どうぞ。',
      arti: 'Sdri. Klara, silakan kuahnya.',
      furigana: [{ base: '菓子', ruby: 'かし' }, { base: '先', ruby: 'さき' }],
    },
    {
      no: 5,
      pembicara: 'クララ',
      teks: 'ええ。先に お菓子を 食べるんですか。',
      arti: 'Eh? Makan kue dulu?',
      furigana: [{ base: '先', ruby: 'さき' }, { base: '菓子', ruby: 'かし' }, { base: '食', ruby: 'た' }],
    },
    {
      no: 6,
      pembicara: 'お茶の先生',
      teks: 'ええ。甘い お菓子を 食べた あとで、お茶を 飲むと、おいしいんですよ。',
      arti: 'Ya. Minum teh setelah makan kue manis, rasanya enak.',
      furigana: [{ base: '甘', ruby: 'あま' }, { base: '菓子', ruby: 'かし' }, { base: '食', ruby: 'た' }, { base: '飲', ruby: 'の' }],
    },
    { no: 7, pembicara: 'クララ', teks: 'そうですか。', arti: 'O, begitu.' },
    {
      no: 8,
      pembicara: 'お茶の先生',
      teks: 'では、お茶を 飲みましょう。',
      arti: 'Ayo minum teh.',
      furigana: [{ base: '茶', ruby: 'ちゃ' }, { base: '飲', ruby: 'の' }],
    },
    {
      no: 9,
      pembicara: 'お茶の先生',
      teks: 'わたしが する とおりに して くださいね。まず 右手で おちゃわんを 取って、左手に 載せます。',
      arti: 'Pertama-tama, ambil cawan dengan tangan kanan, lalu letakkan di tangan kiri. Kemudian, putar cawan dua kali baru minum.',
      furigana: [{ base: '手', ruby: 'て' }, { base: '取', ruby: 'と' }, { base: '左', ruby: 'ひだり' }, { base: '手', ruby: 'て' }, { base: '載', ruby: 'の' }],
    },
    { no: 10, pembicara: 'クララ', teks: 'これって いいですか。', arti: 'Baik.' },
    {
      no: 11,
      pembicara: 'お茶の先生',
      teks: 'はい。次に おちゃわんを 2回 回して、それから 飲みます。',
      arti: 'Begini, silakan lakukan sama seperti yang saya buat!',
      furigana: [{ base: '次', ruby: 'つぎ' }, { base: '回', ruby: 'まわ' }, { base: '飲', ruby: 'の' }],
    },
    { no: 12, pembicara: 'お茶の先生', teks: 'いかがですか。', arti: 'Ya. Bagaimana?' },
    {
      no: 13,
      pembicara: 'クララ',
      teks: '少し 苦いですが、おいしいです。',
      arti: 'Sedikit pahit, tetapi enak.',
      furigana: [{ base: '少', ruby: 'すこ' }, { base: '苦', ruby: 'にが' }],
    },
  ],
}