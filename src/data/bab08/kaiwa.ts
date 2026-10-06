import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: 'そろそろ 失礼します',
  audio: '/audio/bab08_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: '山田一郎', teks: 'マリアさん、日本の 生活は どうですか。', arti: 'Sdr. Maria, bagaimana kehidupan di Jepang?', furigana: [{ base: '日本', ruby: 'にほん' }, { base: '生活', ruby: 'せいかつ' }] },
    { no: 2, pembicara: 'マリア・サントス', teks: '毎日 とても 楽しいです。', arti: 'Setiap hari, sangat senang.', furigana: [{ base: '毎日', ruby: 'まいにち' }, { base: '楽', ruby: 'たの' }] },
    { no: 3, pembicara: '山田一郎', teks: 'そうですか。サントスさん、お仕事は どうですか。', arti: 'O, begitu. Sdr. Santos, bagaimana pekerjaannya?', furigana: [{ base: '仕事', ruby: 'しごと' }] },
    { no: 4, pembicara: 'ホセ・サントス', teks: 'そうですね。忙しいですが、おもしろいです。', arti: 'Ya... Sibuk, tetapi menyenangkan.', furigana: [{ base: '忙', ruby: 'いそが' }] },
    { no: 5, pembicara: '山田友子', teks: 'コーヒー、もう 一杯 いかがですか。', arti: 'Mau tambah kopi secangkir lagi?', furigana: [{ base: '一杯', ruby: 'いっぱい' }] },
    { no: 6, pembicara: 'マリア・サントス', teks: 'いいえ、けっこうです。', arti: 'Tidak, terima kasih.' },
    { no: 7, pembicara: 'ホセ・サントス', teks: 'あ、もう ６時ですね。そろそろ 失礼します。', arti: 'Wah, sudah pukul enam, ya. Saya mau pamit.', furigana: [{ base: '６時', ruby: 'ろくじ' }, { base: '失礼', ruby: 'しつれい' }] },
    { no: 8, pembicara: '山田一郎', teks: 'そうですか。', arti: 'O, ya?' },
    { no: 9, pembicara: 'マリア・サントス', teks: 'きょうは どうも ありがとうございました。', arti: 'Saya mengucapkan terima kasih atas undangan hari ini.' },
    { no: 10, pembicara: '山田友子', teks: 'いいえ。また いらっしゃって ください。', arti: 'Sama-sama. Silakan datang lagi.' }
  ]
}
