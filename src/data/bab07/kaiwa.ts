import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: 'ごめんください',
  audio: '/audio/bab07_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: 'ホセ・サントス', teks: 'ごめんください。', arti: 'Permisi!' },
    { no: 2, pembicara: '山田一郎', teks: 'いらっしゃい。どうぞ お上がり ください。', arti: 'Selamat datang. Silakan masuk!', furigana: [{ base: '上', ruby: 'あ' }] },
    { no: 3, pembicara: 'ホセ・サントス', teks: '失礼します。', arti: 'Permisi.', furigana: [{ base: '失礼', ruby: 'しつれい' }] },
    { no: 4, pembicara: '山田友子', teks: 'コーヒーは いかがですか。', arti: 'Bagaimana kalau minum kopi?' },
    { no: 5, pembicara: 'マリア・サントス', teks: 'ありがとう ございます。', arti: 'Terima kasih banyak.' },
    { no: 6, pembicara: '山田友子', teks: 'どうぞ。', arti: 'Silakan.' },
    { no: 7, pembicara: 'マリア・サントス', teks: 'いただきます。', arti: 'Mari minum!' },
    { no: 8, pembicara: 'マリア・サントス', teks: 'この スプーン、すてきですね。', arti: 'Sendok ini bagus, ya.' },
    { no: 9, pembicara: '山田友子', teks: 'ええ。会社の 人に もらいました。', arti: 'Ya. Saya mendapatkannya dari teman sekantor.', furigana: [{ base: '会社', ruby: 'かいしゃ' }, { base: '人', ruby: 'ひと' }] },
    { no: 10, pembicara: '山田友子', teks: 'ヨーロッパ旅行の お土産です。', arti: 'Oleh-oleh dari perjalanan Eropa.', furigana: [{ base: '土産', ruby: 'みやげ' }, { base: '旅行', ruby: 'りょこう' }] }
  ]
}
