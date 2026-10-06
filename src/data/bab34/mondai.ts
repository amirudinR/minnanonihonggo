import type { MondaiItem } from '@/types/bab'

// Mondai Bab 34 — 2 item sesuai manifest audio (bab34_mondai1 / bab34_mondai2).
export const mondai: MondaiItem[] = [
  {
    no: 1,
    jenis: 'mendengarkan',
    soal:
      'Mondai 1 — Dengarkan audio bab34_mondai1.mp3, lalu jawab pertanyaan-pernyataan yang disampaikan.\n' +
      '1) この てんぷら、ミラーさんが 作ったんですか。\n' +
      '2) 課長、ちょっと 出張 の レポートを 見て いただけませんか。\n' +
      '3) あしたは 日曜日ですね。どこか 行きますか。',
    instruksi:
      'Jawaban mengikuti 会話 Bab 34 (クララ・渡辺・お茶の先生). Dengarkan sekali, lalu pilih jawaban yang sesuai. Kunci jawaban tidak tersedia di buku.',
    audio: '/audio/bab34_mondai1.mp3',
    kunciTersedia: false,
  },
  {
    no: 2,
    jenis: 'jawaban_pendek',
    soal:
      'Mondai 2 — Tulis jawaban pendek untuk setiap nomor.\n' +
      '例: あしたは 会社を 休みますか。（働きます）……いいえ、休まないで、働きます。\n' +
      '1) 週末は どこか 行きますか。（うえで 本を 読みます）……いいえ、＿＿＿＿＿＿＿＿。\n' +
      '2) ことしの 夏休みは 国へ 帰りますか。（北海道を 涼しく 行きます）……いいえ、＿＿＿＿＿＿＿＿。\n' +
      '3) デートで 何か 買いましたか。（すぐ 帰りました）……いいえ、＿＿＿＿＿＿＿＿。\n' +
      '4) 日曜日は 出かけましたか。（レポートを まとめました）……いいえ、＿＿＿＿＿＿＿＿。',
    jawaban:
      '1) うえで 本を 読まないで、家に います。\n' +
      '2) 北海道に 涼しく 行かずに、家に います。\n' +
      '3) すぐ 帰らずに、ほかの 店を 見ます。\n' +
      '4) レポートを まとめないで、家に いました。',
    audio: '/audio/bab34_mondai2.mp3',
    kunciTersedia: true,
  },
]