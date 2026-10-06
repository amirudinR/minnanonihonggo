import type { Kaiwa } from '@/types/bab'

// Teks JP + pembicara dari Honsatsu (idx 29 / cetak 11), arti dari PDF
// terjemahan Indonesia "Percakapan" (idx 37 / cetak 16).
// CATATAN: di PDF Indonesia label pembicara bergeser satu baris (pertama ditulis
// "Miller" padahal baris itu kalimat 鈴木). Pembicara & urutan di sini mengikuti
// JP Honsatsu (= urutan audio bab27_kaiwa.mp3); arti dicocokkan per baris.
export const kaiwa: Kaiwa = {
  judul: '何でも 作れるんですね',
  audio: '/audio/bab27_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: '鈴木', teks: '明るくて、いい 部屋ですね。', arti: 'Kamar yang terang dan bagus, ya.', furigana: [{ base: '鈴木', ruby: 'すずき' }, { base: '部屋', ruby: 'へや' }] },
    { no: 2, pembicara: 'ミラー', teks: 'ええ。天気が いい 日には 海が 見えるんです。', arti: 'Ya. Kalau hari yang cuacanya baik, laut terlihat.', furigana: [{ base: '天気', ruby: 'てんき' }, { base: '海', ruby: 'うみ' }] },
    { no: 3, pembicara: '鈴木', teks: 'この テーブルは おもしろい デザインですね。アメリカで 買ったんですか。', arti: 'Meja ini desainnya unik, ya. Beli di mana?', furigana: [{ base: '買', ruby: 'か' }] },
    { no: 4, pembicara: 'ミラー', teks: 'これは わたしが 作ったんですよ。', arti: 'Ini saya yang buat.', furigana: [{ base: '作', ruby: 'つく' }] },
    { no: 5, pembicara: '鈴木', teks: 'えっ、ほんとうですか。', arti: 'Eh, betul?' },
    { no: 6, pembicara: 'ミラー', teks: 'ええ。日曜大工が 趣味なんです。', arti: 'Ya. Hobi saya adalah membuat mebel sendiri.', furigana: [{ base: '日曜大工', ruby: 'にちようだいこう' }] },
    { no: 7, pembicara: '鈴木', teks: 'へえ。じゃあ、あの 本棚も 作ったんですか。', arti: 'O ya. Kalau begitu, lemari buku itu juga Anda buat?', furigana: [{ base: '本棚', ruby: 'ほんだな' }] },
    { no: 8, pembicara: 'ミラー', teks: 'ええ。', arti: 'Ya.' },
    { no: 9, pembicara: '鈴木', teks: 'すごいですね。ミラーさん、何でも 作れるんですね。', arti: 'Heba! Sdr. Miller bisa membuat apa saja, ya.', furigana: [{ base: '作', ruby: 'つく' }] },
    { no: 10, pembicara: 'ミラー', teks: 'わたしの 夢は いつか 自分で 家を 建てる ことなんですよ。', arti: 'Impian saya adalah suatu hari nanti saya membangun rumah sendiri.', furigana: [{ base: '夢', ruby: 'ゆめ' }, { base: '家', ruby: 'いえ' }, { base: '建', ruby: 'た' }] },
    { no: 11, pembicara: '鈴木', teks: 'すばらしい 夢ですね。', arti: 'Impian yang bagus sekali.', furigana: [{ base: '夢', ruby: 'ゆめ' }] },
  ],
}
