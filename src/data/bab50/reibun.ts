import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 50 — JP: Honsatsu 第50課「例文」(idx 220 / cetak 202).
// arti: PDF Indonesia "Pelajaran 50 · II. Terjemahan · Contoh Kalimat" (idx 175 / cetak 154).
export const reibun: ReibunItem[] = [
  {
    kalimat: '重そうですね。お持ちしましょうか。\n……すみません。お願いします。',
    arti: 'Keliatannya berat, ya. Mari saya bawa!\n……Maaf. Minta tolong!',
    furigana: [
      { base: '重', ruby: 'おも' },
      { base: '持', ruby: 'も' },
      { base: '願', ruby: 'ねが' },
    ],
  },
  {
    kalimat:
      'ガイドさん、ここを 見た あとで、どこへ 行くんですか。\n……江戸東京博物館へ ご案内します。',
    arti:
      'Sdr. Pemandu wisata, setelah melihat ini pergi ke mana?\n……Mari (saya) antarkan (Anda) ke Museum Edo Tokyo!',
    furigana: [
      { base: '見', ruby: 'み' },
      { base: '行', ruby: 'い' },
      { base: '江戸東京博物館', ruby: 'えどとうきょうはくぶつかん' },
      { base: '案内', ruby: 'あんない' },
    ],
  },
  {
    kalimat:
      'グプタさんの 到着は 2時ですね。だれか 迎えに 行くんですか。\n……はい、私が 参ります。',
    arti:
      'Kedatangan sdr. Gupta pada pukul dua, ya. Siapa yang pergi menjemputnya?\n…… Ya, saya yang pergi.',
    furigana: [
      { base: '到着', ruby: 'とうちゃく' },
      { base: '時', ruby: 'じ' },
      { base: '迎', ruby: 'むか' },
      { base: '行', ruby: 'い' },
      { base: '私', ruby: 'わたし' },
      { base: '参', ruby: 'まい' },
    ],
  },
  {
    kalimat: 'ご家族は どちらに いらっしゃいますか。\n……ニューヨークに おります。',
    arti: 'Keluarganya ada di mana?\n……Ada di New York.',
    furigana: [{ base: '家族', ruby: 'かぞく' }],
  },
  {
    kalimat: 'ちょっと 切符を 拝見します。\n……はい。どうも ありがとう ございました。',
    arti: 'Periksa karcis sebentar!\n……Ya. Terima kasih banyak.',
    furigana: [
      { base: '切符', ruby: 'きっぷ' },
      { base: '拝見', ruby: 'はいけん' },
    ],
  },
  {
    kalimat:
      'ミラーさんが スピーチコンテストで 優勝したのを ご存じですか。\n……はい、部長から 伺いました。',
    arti:
      'Apakah (Anda) tahu bahwa sdr. Miller memenangkan lomba speech contest?\n……Ya, saya diberi tahu oleh kepala bagian.',
    furigana: [
      { base: '優勝', ruby: 'ゆうしょう' },
      { base: '存', ruby: 'ぞん' },
      { base: '部長', ruby: 'ぶちょう' },
      { base: '伺', ruby: 'うかが' },
    ],
  },
  {
    kalimat:
      'こちらは ミラーさんです。\n……初めまして。ミラーと 申します。どうぞ よろしく お願いいたします。',
    arti: 'Ini sdr. Miller.\n……Salam kenal. Saya Miller. Mohon bantuannya.',
    furigana: [
      { base: '初', ruby: 'はじ' },
      { base: '申', ruby: 'もう' },
      { base: '願', ruby: 'ねが' },
    ],
  },
  {
    kalimat: 'この 近くに 電話が ありますか。\n……はい、あちらの 階段の 横に ございます。',
    arti: 'Apakah ada telepon di dekat sini?\n……Ya, ada di samping tangga sana.',
    furigana: [
      { base: '近', ruby: 'ちか' },
      { base: '電話', ruby: 'でんわ' },
      { base: '階段', ruby: 'かいだん' },
      { base: '横', ruby: 'よこ' },
    ],
  },
]
