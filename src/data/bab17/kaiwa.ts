import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: 'どうしましたか',
  audio: '/audio/bab17_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: '医者', teks: 'どうしましたか。', arti: 'Kenapa?', furigana: [{ base: '医者', ruby: 'いしゃ' }] },
    { no: 2, pembicara: '松本', teks: 'きのうからのどが痛くて、熱も少しあります。', arti: 'Sejak kemarin sakit kerongkongan dan sedikit demam juga.', furigana: [{ base: '松本', ruby: 'まつもと' }, { base: '痛', ruby: 'いた' }, { base: '熱', ruby: 'ねつ' }] },
    { no: 3, pembicara: '医者', teks: 'そうですか。ちょっと口を開けてください。', arti: 'O, begitu. Coba buka mulut.', furigana: [{ base: '医者', ruby: 'いしゃ' }, { base: '口', ruby: 'くち' }, { base: '開', ruby: 'あ' }] },
    { no: 4, pembicara: '医者', teks: 'かぜですね。ゆっくり休んでください。', arti: 'Masuk angin ya. Beristirahat yang cukup selama dua, tiga hari.', furigana: [{ base: '医者', ruby: 'いしゃ' }, { base: '休', ruby: 'やす' }] },
    { no: 5, pembicara: '松本', teks: 'あのう、あしたから東京へ出張しなければなりません。', arti: 'Begini, Dok, mulai besok saya harus dinas ke Tokyo.', furigana: [{ base: '松本', ruby: 'まつもと' }, { base: '東京', ruby: 'とうきょう' }, { base: '出張', ruby: 'しゅっちょう' }] },
    { no: 6, pembicara: '医者', teks: 'じゃ、薬を飲んで、きょうは早く寝てください。', arti: 'Kalau begitu, hari ini minum obat, dan cepat istirahat.', furigana: [{ base: '医者', ruby: 'いしゃ' }, { base: '薬', ruby: 'くすり' }, { base: '飲', ruby: 'の' }, { base: '寝', ruby: 'ね' }] },
    { no: 7, pembicara: '松本', teks: 'はい。', arti: 'Ya.', furigana: [{ base: '松本', ruby: 'まつもと' }] },
    { no: 8, pembicara: '医者', teks: 'それから今晩はおふろに入らないでください。', arti: 'Dan juga nanti malam jangan mandi, ya.', furigana: [{ base: '医者', ruby: 'いしゃ' }, { base: '今晩', ruby: 'こんばん' }, { base: '入', ruby: 'はい' }] },
    { no: 9, pembicara: '松本', teks: 'はい、わかりました。', arti: 'Baik, saya mengerti.', furigana: [{ base: '松本', ruby: 'まつもと' }] },
    { no: 10, pembicara: '医者', teks: 'じゃ、お大事に。', arti: 'Semoga lekas sembuh.', furigana: [{ base: '医者', ruby: 'いしゃ' }, { base: '大事', ruby: 'だいじ' }] },
    { no: 11, pembicara: '松本', teks: 'どうもありがとうございました。', arti: 'Terima kasih banyak.', furigana: [{ base: '松本', ruby: 'まつもと' }] },
  ],
}
