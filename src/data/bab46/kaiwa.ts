import type { Kaiwa } from '@/types/bab'

// Teks JP + pembicara dari Honsatsu 第46課「会話」(idx 189 / cetak 171).
// arti dari PDF Indonesia "Percakapan" (idx 151 / cetak 130) — set cocok 1:1.
export const kaiwa: Kaiwa = {
  judul: 'もうすぐ 着く はずです',
  audio: '/audio/bab46_kaiwa.mp3',
  dialog: [
    { no: 1, pembicara: '係員', teks: 'はい、ガスサービスセンターで ございます。', arti: 'Halo, pusat pelayanan servis.', furigana: [{ base: '係員', ruby: 'かかりいん' }] },
    {
      no: 2,
      pembicara: 'タワポン',
      teks: 'あのう、ガスレンジの 調子が おかしいんですが……。',
      arti: 'Anu, kondisi kompor gas kurang baik…',
      furigana: [
        { base: '調子', ruby: 'ちょうし' },
      ],
    },
    { no: 3, pembicara: '係員', teks: 'どんな 具合ですか。', arti: 'Kondisinya bagaimana?', furigana: [{ base: '係員', ruby: 'かかりいん' }, { base: '具合', ruby: 'ぐあい' }] },
    {
      no: 4,
      pembicara: 'タワポン',
      teks: '先週 直した ばかりなのに、また 火が すぐ 消えて しまうんです。危ないので、早く 見に 来て くれませんか。',
      arti: 'Api terpadam padahal baru minggu lalu diperbaiki. Tolong datang dengan segera karena bahaya!',
      furigana: [
        { base: '先週', ruby: 'せんしゅう' },
        { base: '直', ruby: 'なお' },
        { base: '火', ruby: 'ひ' },
        { base: '消', ruby: 'き' },
        { base: '危', ruby: 'あぶ' },
        { base: '早', ruby: 'はや' },
        { base: '見', ruby: 'み' },
        { base: '来', ruby: 'き' },
      ],
    },
    {
      no: 5,
      pembicara: '係員',
      teks: 'わかりました。 5時ごろには 行けると 思います。ご住所と お名前を お願いします。',
      arti: 'Baik. Sekitar pukul lima bisa sampai. Minta alamat dan nama Bapak!',
      furigana: [
        { base: '時', ruby: 'じ' },
        { base: '行', ruby: 'い' },
        { base: '思', ruby: 'おも' },
        { base: '住所', ruby: 'じゅうしょ' },
        { base: '名前', ruby: 'なまえ' },
        { base: '願', ruby: 'ねが' },
      ],
    },
    {
      no: 6,
      pembicara: 'タワポン',
      teks: 'もしもし、5時ごろに ガスレンジを 見に 来て くれる はずなんですが、まだですか。',
      arti: 'Halo, katanya sekitar pukul lima datang untuk memeriksa kompor gas, masih lama?',
      furigana: [
        { base: '時', ruby: 'じ' },
        { base: '見', ruby: 'み' },
        { base: '来', ruby: 'き' },
      ],
    },
    { no: 7, pembicara: '係員', teks: 'すみません。どちら様でしょうか。', arti: 'Maaf. Atas nama siapa?', furigana: [{ base: '係員', ruby: 'かかりいん' }] },
    { no: 8, pembicara: 'タワポン', teks: 'タワポンと いいます。', arti: 'Thawaphon.' },
    {
      no: 9,
      pembicara: '係員',
      teks: 'ちょっと お待ち ください。係員に 連絡しますから。',
      arti: 'Tunggu sebentar. Saya menghubungi staf.',
      furigana: [
        { base: '待', ruby: 'ま' },
        { base: '係員', ruby: 'かかりいん' },
        { base: '連絡', ruby: 'れんらく' },
      ],
    },
    {
      no: 10,
      pembicara: '係員',
      teks: 'お待たせしました。今 そちらに 向かって いる ところです。あと 10分ほど お待ち ください。',
      arti: 'Maaf, lama menunggu. Sekarang sedang menuju ke sana. Mohon tunggu kira-kira sepuluh menit lagi.',
      furigana: [
        { base: '待', ruby: 'ま' },
        { base: '今', ruby: 'いま' },
        { base: '向', ruby: 'む' },
        { base: '分', ruby: 'ぷん' },
      ],
    },
  ],
}
