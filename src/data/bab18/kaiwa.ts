import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: '趣味は 何ですか',
  audio: '/audio/bab18_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '山田',
      teks: 'サントスさんの 趣味は 何ですか。',
      arti: 'Apa hobi Sdr. Santos?',
      furigana: [
        { base: '趣味', ruby: 'しゅみ' },
        { base: '何', ruby: 'なん' }
      ]
    },
    {
      no: 2,
      pembicara: 'サントス',
      teks: '写真です。',
      arti: 'Foto.',
      furigana: [
        { base: '写真', ruby: 'しゃしん' }
      ]
    },
    {
      no: 3,
      pembicara: '山田',
      teks: 'どんな 写真を 撮りますか。',
      arti: 'Mengambil foto yang bagaimana?',
      furigana: [
        { base: '写真', ruby: 'しゃしん' },
        { base: '撮', ruby: 'と' }
      ]
    },
    {
      no: 4,
      pembicara: 'サントス',
      teks: '動物の 写真です。特に 馬が 好きです。',
      arti: 'Foto hewan. Terutama saya suka kuda.',
      furigana: [
        { base: '動物', ruby: 'どうぶつ' },
        { base: '写真', ruby: 'しゃしん' },
        { base: '特', ruby: 'とく' },
        { base: '馬', ruby: 'うま' },
        { base: '好', ruby: 'す' }
      ]
    },
    {
      no: 5,
      pembicara: '山田',
      teks: 'へえ、それは おもしろいですね。\n日本へ 来てから、馬の 写真を 撮りましたか。',
      arti: 'O, menarik ya.\nApakah sudah mengambil foto kuda setelah datang di Jepang?',
      furigana: [
        { base: '日本', ruby: 'にほん' },
        { base: '来', ruby: 'き' },
        { base: '馬', ruby: 'うま' },
        { base: '写真', ruby: 'しゃしん' },
        { base: '撮', ruby: 'と' }
      ]
    },
    {
      no: 6,
      pembicara: 'サントス',
      teks: 'いいえ。\n日本では なかなか 馬を 見る ことが できません。',
      arti: 'Belum.\nDi Jepang tidak mudah untuk melihat kuda.',
      furigana: [
        { base: '日本', ruby: 'にほん' },
        { base: '馬', ruby: 'うま' },
        { base: '見', ruby: 'み' }
      ]
    },
    {
      no: 7,
      pembicara: '山田',
      teks: '北海道に 馬の 牧場が たくさん ありますよ。',
      arti: 'Di Hokkaido ada banyak peternakan kuda.',
      furigana: [
        { base: '北海道', ruby: 'ほっかいどう' },
        { base: '馬', ruby: 'うま' },
        { base: '牧場', ruby: 'ぼくじょう' }
      ]
    },
    {
      no: 8,
      pembicara: 'サントス',
      teks: 'ほんとうですか。\nじゃ、夏休みに ぜひ 行きたいです。',
      arti: 'Benar ya?\nKalau begitu, saya ingin sekali pergi pada liburan musim panas.',
      furigana: [
        { base: '夏休', ruby: 'なつやす' },
        { base: '行', ruby: 'い' }
      ]
    }
  ]
}
