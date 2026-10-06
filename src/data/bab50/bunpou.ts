import type { Bunpou } from '@/types/bab'

// 文型 Bab 50 — sumber: Honsatsu 第50課「文型」(idx 220 / cetak 202).
// Penjelasan & contoh diambil dari PDF Indonesia "Pelajaran 50 ·
// IV. Keterangan Tata Bahasa" (idx 177 / cetak 156).
export const bunpou: Bunpou[] = [
  {
    no: 1,
    pola: '今月の スケジュールを お送りします。',
    penjelasan:
      '謙譲語 I (Kata Merendahkan Diri I-Kata Kerja). Kata Merendahkan Diri I adalah ungkapan untuk menjelaskan dengan merendahkan aksi pembicara atau orang pihak pembicara demi menyatakan rasa hormat aksi pembicara atau orang yang pihak pembicara dituju kepada lawan bicara atau orang yang pihak lawan bicara. お／ご〜します: (1) お Kata Kerja (Kelompok I・II) (Bentuk ます) します, (2) ご Kata Kerja (Kelompok III). Contoh: ② 私が 社長に スケジュールを お知らせします。③ 兄が 車で お送りします。',
    contoh: [
      '① 重そうですね。お持ちしましょうか。',
      '② 私が 社長に スケジュールを お知らせします。',
      '③ 兄が 車で お送りします。',
      '④ 江戸東京博物館へ ご案内します。',
      '⑤ きょうの 予定を ご説明します。',
    ],
    artiContoh: [
      'Keliatannya berat, ya. Mari saya bawa!',
      'Saya yang menyampaikan jadwal kepada direktur.',
      'Kakak laki-laki saya yang antarkan (Anda).',
      'Mari (saya) antarkan (Anda) ke Museum Edo Tokyo!',
      '(Saya) Menjelaskan jadwal hari ini.',
    ],
    furigana: [
      { base: '今月', ruby: 'こんげつ' },
      { base: '送', ruby: 'おく' },
      { base: '重', ruby: 'おも' },
      { base: '持', ruby: 'も' },
      { base: '私', ruby: 'わたし' },
      { base: '社長', ruby: 'しゃちょう' },
      { base: '知', ruby: 'し' },
      { base: '兄', ruby: 'あに' },
      { base: '車', ruby: 'くるま' },
      { base: '江戸東京博物館', ruby: 'えどとうきょうはくぶつかん' },
      { base: '案内', ruby: 'あんない' },
      { base: '予定', ruby: 'よてい' },
      { base: '説明', ruby: 'せつめい' },
    ],
  },
  {
    no: 2,
    pola: '私は アメリカから 参りました。',
    penjelasan:
      'Kata Merendahkan Diri Khusus. Beberapa Kata Kerja memiliki Kata Merendahkan Diri Khusus. Contoh: ⑥ 社長の 奥様に お目に かかりました。⑦ あしたは だれが 手伝いに 来て くれますか。……私が 伺います。Selain お／ご〜します, terdapat しょうかいします, しょうたいします, そうだんします, れんらくします dan lain-lainnya (dibubuhkan お, tetapi tidak dibubuhkan ご).',
    contoh: [
      '⑥ 社長の 奥様に お目に かかりました。',
      '⑦ あしたは だれが 手伝いに 来て くれますか。……私が 伺います。',
    ],
    artiContoh: [
      'Bertemu dengan istri direktur.',
      'Besok siapa yang datang untuk membantu? …… Saya yang datang.',
    ],
    furigana: [
      { base: '私', ruby: 'わたし' },
      { base: '参', ruby: 'まい' },
      { base: '社長', ruby: 'しゃちょう' },
      { base: '奥様', ruby: 'おくさま' },
      { base: '目', ruby: 'め' },
      { base: '手伝', ruby: 'てつだ' },
      { base: '来', ruby: 'き' },
      { base: '伺', ruby: 'うかが' },
    ],
  },
]

// Catatan tata bahasa = sub-bagian "IV. Keterangan Tata Bahasa" di buku Indonesia
// (terpisah dari bunpou, penomoran mulai dari 1). Sumber: idx 177 / cetak 156.
export const catatanTataBahasa: Bunpou[] = [
  {
    no: 1,
    pola: '謙譲語 I（Kata Merendahkan Diri I-Kata Kerja）',
    penjelasan:
      'Kata Merendahkan Diri I adalah ungkapan untuk menjelaskan dengan merendahkan aksi pembicara atau orang pihak pembicara demi menyatakan rasa hormat aksi pembicara atau orang yang pihak pembicara dituju kepada lawan bicara atau orang yang pihak lawan bicara.\n1) お／ご〜します: (1) お Kata Kerja (Kelompok I・II) (Bentuk ます) します, (2) ご Kata Kerja (Kelompok III).',
    contoh: [
      '① 重そうですね。お持ちしましょうか。',
      '② 私が 社長に スケジュールを お知らせします。',
      '③ 兄が 車で お送りします。',
      '④ 江戸東京博物館へ ご案内します。',
      '⑤ きょうの 予定を ご説明します。',
    ],
    artiContoh: [
      'Keliatannya berat, ya. Mari saya bawa!',
      'Saya yang menyampaikan jadwal kepada direktur.',
      'Kakak laki-laki saya yang antarkan (Anda).',
      'Mari (saya) antarkan (Anda) ke Museum Edo Tokyo!',
      '(Saya) Menjelaskan jadwal hari ini.',
    ],
    furigana: [
      { base: '重', ruby: 'おも' },
      { base: '持', ruby: 'も' },
      { base: '私', ruby: 'わたし' },
      { base: '社長', ruby: 'しゃちょう' },
      { base: '知', ruby: 'し' },
      { base: '兄', ruby: 'あに' },
      { base: '車', ruby: 'くるま' },
      { base: '江戸東京博物館', ruby: 'えどとうきょうはくぶつかん' },
      { base: '案内', ruby: 'あんない' },
      { base: '予定', ruby: 'よてい' },
      { base: '説明', ruby: 'せつめい' },
    ],
  },
  {
    no: 2,
    pola: 'Kata Merendahkan Diri Khusus',
    penjelasan:
      'Beberapa Kata Kerja memiliki Kata Merendahkan Diri Khusus (lihat Buku Induk Pel.50 Latihan A3). Di antaranya 参ります, おります, いただきます, もうします, いたします, はいけんします, ぞんじます, うかがいます, お目に かかります.',
    contoh: [
      '⑥ 社長の 奥様に お目に かかりました。',
      '⑦ あしたは だれが 手伝いに 来て くれますか。……私が 伺います。',
    ],
    artiContoh: [
      'Bertemu dengan istri direktur.',
      'Besok siapa yang datang untuk membantu? …… Saya yang datang.',
    ],
    furigana: [
      { base: '社長', ruby: 'しゃちょう' },
      { base: '奥様', ruby: 'おくさま' },
      { base: '目', ruby: 'め' },
      { base: '手伝', ruby: 'てつだ' },
      { base: '来', ruby: 'き' },
      { base: '私', ruby: 'わたし' },
      { base: '伺', ruby: 'うかが' },
    ],
  },
]
