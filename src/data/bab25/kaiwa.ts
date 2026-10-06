import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: 'いろいろ お世話に なりました',
  audio: '/audio/bab25_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '山田',
      teks: '転勤、おめでとう ございます。',
      arti: 'Selamat atas pemindahan posisi tugas!',
      furigana: [
        { base: '転勤', ruby: 'てんきん' }
      ]
    },
    {
      no: 2,
      pembicara: 'ミラー',
      teks: 'ありがとう ございます。',
      arti: 'Terima kasih.'
    },
    {
      no: 3,
      pembicara: '木村',
      teks: 'ミラーさんが 東京へ 行ったら、寂しく なりますね。\n東京へ 行っても、大阪の ことを 忘れないで くださいね。',
      arti: 'Kalau Sdr. Miller pergi ke Tokyo, kita kesepian ya.\nJangan lupa akan Osaka ya, walaupun Anda pergi ke Tokyo.',
      furigana: [
        { base: '東京', ruby: 'とうきょう' },
        { base: '行', ruby: 'い' },
        { base: '寂', ruby: 'さび' },
        { base: '大阪', ruby: 'おおさか' },
        { base: '忘', ruby: 'わす' }
      ]
    },
    {
      no: 4,
      pembicara: 'ミラー',
      teks: 'もちろん。\n木村さん、暇が あったら、ぜひ 東京へ 遊びに 来て ください。',
      arti: 'Tentu.\nKalau ada waktu luang, silakan datang bermain ke Tokyo.',
      furigana: [
        { base: '暇', ruby: 'ひま' },
        { base: '東京', ruby: 'とうきょう' },
        { base: '遊', ruby: 'あそ' },
        { base: '来', ruby: 'き' }
      ]
    },
    {
      no: 5,
      pembicara: 'サントス',
      teks: 'ミラーさんも 大阪へ 来たら、電話を ください。\n一杯 飲みましょう。',
      arti: 'Kalau Sdr. Miller datang ke Osaka, tolong menelepon kami juga, ya.\nKita minum bersama-sama.',
      furigana: [
        { base: '大阪', ruby: 'おおさか' },
        { base: '来', ruby: 'き' },
        { base: '電話', ruby: 'でんわ' },
        { base: '一杯', ruby: 'いっぱい' },
        { base: '飲', ruby: 'の' }
      ]
    },
    {
      no: 6,
      pembicara: 'ミラー',
      teks: 'ええ、ぜひ。\n皆さん、ほんとうに いろいろ お世話に なりました。',
      arti: 'Ya, pasti.\nSemuanya, saya telah mendapatkan banyak bantuan kalian.',
      furigana: [
        { base: '皆', ruby: 'みな' }
      ]
    },
    {
      no: 7,
      pembicara: '佐藤',
      teks: '体に 気を つけて、頑張って ください。',
      arti: 'Semangat! Jaga kesehatan baik-baik.',
      furigana: [
        { base: '体', ruby: 'からだ' },
        { base: '気', ruby: 'き' },
        { base: '頑張', ruby: 'がんば' }
      ]
      },
    {
      no: 8,
      pembicara: 'ミラー',
      teks: 'はい、頑張ります。\n皆さんも どうぞ お元気で。',
      arti: 'Ya. Demikian juga untuk semuanya.',
      furigana: [
        { base: '頑張', ruby: 'がんば' },
        { base: '皆', ruby: 'みな' }
      ]
    }
  ]
}
