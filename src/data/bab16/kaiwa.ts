import type { Kaiwa } from '@/types/bab'

export const kaiwa: Kaiwa = {
  judul: '使い方を教えてください',
  audio: '/audio/bab16_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: 'マリア', teks: 'すみませんが、ちょっと使い方を教えてください。', arti: 'Maaf, tolong ajarkan cara pemakaiannya.', furigana: [{ base: '使', ruby: 'つか' }, { base: '方', ruby: 'かた' }, { base: '教', ruby: 'おし' }] },
    { no: 2, pembicara: '銀行員', teks: 'お引き出しですか。', arti: 'Tarik uang?', furigana: [{ base: '引', ruby: 'ひ' }, { base: '出', ruby: 'だ' }] },
    { no: 3, pembicara: 'マリア', teks: 'そうです。', arti: 'Ya, betul.' },
    { no: 4, pembicara: '銀行員', teks: 'じゃ、まずここを押してください。', arti: 'Kalau begitu, pertama-tama tekan di sini.', furigana: [{ base: '押', ruby: 'お' }] },
    { no: 5, pembicara: 'マリア', teks: 'はい。', arti: 'Baik.' },
    { no: 6, pembicara: '銀行員', teks: 'それをここに入れて、暗証番号を押してください。', arti: 'Kemudian, masukkan kartu ATM di sini, dan tekankan nomor PINnya.', furigana: [{ base: '入', ruby: 'い' }, { base: '暗証', ruby: 'あんしょう' }, { base: '番号', ruby: 'ばんごう' }, { base: '押', ruby: 'お' }] },
    { no: 7, pembicara: 'マリア', teks: 'はい。', arti: 'Baik. Sudah saya tekankan.' },
    { no: 8, pembicara: '銀行員', teks: '次に金額を押してください。', arti: 'Kalau begitu, tekankan jumlah uangnya.', furigana: [{ base: '次', ruby: 'つぎ' }, { base: '金額', ruby: 'きんがく' }, { base: '押', ruby: 'お' }] },
    { no: 9, pembicara: 'マリア', teks: '5万円ですが、5……。', arti: '¥50.000, lima....', furigana: [{ base: '万', ruby: 'まん' }, { base: '円', ruby: 'えん' }] },
    { no: 10, pembicara: '銀行員', teks: 'この「万」「円」を押します。', arti: 'Tekan "Man (10,000)" dan "En (Yen)" ini.', furigana: [{ base: '万', ruby: 'まん' }, { base: '円', ruby: 'えん' }, { base: '押', ruby: 'お' }] },
    { no: 11, pembicara: '銀行員', teks: 'それからこの確認ボタンを押してください。', arti: 'Kemudian, tekan tombol "Kakunin (cek)" ini.', furigana: [{ base: '確認', ruby: 'かくにん' }, { base: '押', ruby: 'お' }] },
    { no: 12, pembicara: 'マリア', teks: 'はい。どうもありがとうございました。', arti: 'Baik. Terima kasih banyak.' },
  ],
}
