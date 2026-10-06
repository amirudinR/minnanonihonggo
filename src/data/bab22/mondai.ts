import type { MondaiItem } from '@/types/bab'

export const mondai: MondaiItem[] = [
  { no: 1, jenis: 'mendengarkan', soal: 'Mondai 1 — Dengarkan pertanyaan lalu tulis jawabannya (5 soal).', instruksi: 'Mondai 1 — 5 soal. 聞いて 書きなさい。', audio: '/audio/bab22_mondai1.mp3', kunciTersedia: false },
  { no: 2, jenis: 'mendengarkan', soal: 'Mondai 2 — Dengarkan percakapan lalu tentukan benar (O) atau salah (X) (5 soal).', instruksi: 'Mondai 2 — 5 soal. 言った ことを 下の 文から O／×で 答えて ください。', audio: '/audio/bab22_mondai2.mp3', kunciTersedia: false },
  {
    no: 3, jenis: 'jawaban_pendek',
    soal: '例：よく 寝る 人は 元気です。\n語句: よく 寝ます / 図書館で 借りました / お酒を 飲みません / マリアさんから 来ました / 庭が あります\n1) わたしは（ ）うちが 欲しいです。\n2) わたしは（ ）人が 好きです。\n3)（ ）本を なくしました。\n4)（ ）手紙は 机の 上に あります。',
    jawaban: '1) 庭が ある 2) お酒を 飲まない 3) 図書館で 借りた 4) マリアさんから 来た',
    kunciTersedia: true,
  },
  {
    no: 4, jenis: 'jawaban_pendek',
    soal: '例：あの 黒い シャツを 着て いる 人は（ だれ ）ですか。\n1) ここに あった 新聞は（ ）ですか。……テレビの 上に あります。\n2) マリアさんが 作った ケーキは（ ）でしたか。……とても おいしかったです。\n3) いちばん 新しい パソコンは（ ）ですか。……これです。',
    jawaban: '1) どこ 2) どう 3) どれ',
    kunciTersedia: true,
  },
  {
    no: 5, jenis: 'jawaban_pendek',
    soal: '例：どこで 撮りましたか。→ これは どこで 撮った 写真ですか。\n1) いつ 買いましたか。→\n2) だれが 作りましたか。→\n3) だれに もらいましたか。→',
    jawaban: '1) これは いつ 買った 牛乳ですか。 2) これは だれが 作った ケーキですか。 3) これは だれに もらった プレゼントですか。',
    kunciTersedia: true,
  },
  {
    no: 6, jenis: 'jawaban_pendek',
    soal: '例：銀行へ 行く 時間が ありません。\n1) 日曜日は（ ）約束が あります。\n2)（ ）用事が あります。\n3)（ ）時間が ありません。\n(Jawaban dari gambar: 1) bioskop, 2) bank, 3) meja belajar dengan keinginan berpesta)',
    instruksi: 'Lihat gambar lalu isi dengan pola 辞書形 + 約束／用事／時間。',
    jawaban: '1) 映画を 見る 2) 銀行へ 行く 3) パーティーへ 行く',
    kunciTersedia: true,
  },
  {
    no: 7, jenis: 'jawaban_pendek',
    soal: '日本人は 休みの 日に 何を しますか\nした 人………………使った お金\n食事に 出かける………66.0%………3,480円\nカラオケに 行く………55.8………1,860\nビデオを 見る………44.3………520\nディズニーランドなどへ 行く………39.2………5,810\nパチンコを する………28.1………3,140\n資料：余暇開発センター「レジャー白書1995」\n1)（ ）レストランなどで ごはんを 食べる 人は 少ないです。\n2)（ ）カラオケに 行く 人は パチンコを する 人より 多いです。\n3)（ ）カラオケは いちばん お金を 使いません。',
    jawaban: '1) × 2) ○ 3) ×',
    kunciTersedia: true,
  },
]
