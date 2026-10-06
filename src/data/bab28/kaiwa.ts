import type { Kaiwa } from '@/types/bab'

// Teks JP + pembicara dari Honsatsu 第28課「会話」(idx 37 / cetak 19).
// CATATAN EDISI: Percakapan pada PDF Indonesia "Percakapan" (idx 43 / cetak 22)
// memakai baris yang BERBEDA: ID memuat 15 baris (bagian "Homestay? Bagus.",
// "Tidak ada guru…", "Eh? Menjadi guru?"), sedangkan Honsatsu 8 giliran.
// Yang sama persis hanya giliran 1, 2, dan 8. Untuk giliran 3–7, arti di sini
// adalah terjemahan setia dari teks Honsatsu (yang juga cocok dengan trek audio
// bab28_kaiwa.mp3), bukan karangan.
export const kaiwa: Kaiwa = {
  judul: 'お茶でも 飲みながら……',
  audio: '/audio/bab28_kaiwa.mp3',
  dialog: [
    {
      no: 1,
      pembicara: '小川幸子',
      teks: 'ミラーさん、ちょっと お願いが あるんですが。',
      arti: 'Sdr. Miller, ada sedikit permintaan…….',
      furigana: [{ base: '願', ruby: 'ねが' }],
    },
    { no: 2, pembicara: 'ミラー', teks: '何ですか。', arti: 'Kenapa?', furigana: [{ base: '何', ruby: 'なん' }] },
    {
      no: 3,
      pembicara: '小川幸子',
      teks: '息子に 英語を 教えて いただけませんか。\n夏休みに オーストラリアへ ホームステイに 行くんですが、会話が できないんですよ。',
      arti: 'Bolehkah (Anda) mengajari anak saya bahasa Inggris?\nMusim panas ini saya akan homestay ke Australia, tapi saya tidak bisa berbicara.',
      furigana: [
        { base: '息子', ruby: 'むすこ' },
        { base: '英語', ruby: 'えいご' },
        { base: '教', ruby: 'おし' },
        { base: '夏休', ruby: 'なつやす' },
        { base: '会話', ruby: 'かいわ' },
      ],
    },
    {
      no: 4,
      pembicara: 'ミラー',
      teks: '教えて あげたいんですけど、ちょっと 時間が……。',
      arti: 'Saya ingin mengajari, tapi saya sedang ada kegiatan…….',
      furigana: [{ base: '教', ruby: 'おし' }, { base: '時間', ruby: 'じかん' }],
    },
    {
      no: 5,
      pembicara: '小川幸子',
      teks: 'お茶でも 飲みながら おしゃべりして いただけませんか。',
      arti: 'Boleh tidak (kita) mengobrol sambil minum teh saja?',
      furigana: [{ base: '茶', ruby: 'ちゃ' }, { base: '飲', ruby: 'の' }],
    },
    {
      no: 6,
      pembicara: 'ミラー',
      teks: 'うーん、出張も 多いし、もうすぐ 日本語の 試験も あるし……。\nそれに 今まで 教えた ことが ありませんから……。',
      arti: 'Ugh, saya juga sering dinas, dan sebentar lagi ada ujian bahasa Jepang…….\nLagi pula, saya belum pernah mengajar sebelumnya…….',
      furigana: [
        { base: '出張', ruby: 'しゅっちょう' },
        { base: '多', ruby: 'おお' },
        { base: '日本語', ruby: 'にほんご' },
        { base: '試験', ruby: 'しけん' },
        { base: '今', ruby: 'いま' },
        { base: '教', ruby: 'おし' },
      ],
    },
    {
      no: 7,
      pembicara: '小川幸子',
      teks: 'だめですか。じゃ、残念ですが……。',
      arti: 'Tidak bisa? Ya, sayangnya…….',
      furigana: [{ base: '残念', ruby: 'ざんねん' }],
    },
    { no: 8, pembicara: 'ミラー', teks: 'どうも すみません。', arti: 'Maaf.' },
  ],
}