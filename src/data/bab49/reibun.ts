import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 49 — JP: Honsatsu 第49課「例文」(idx 212 / cetak 194).
// arti: PDF Indonesia "Pelajaran 49 · II. Terjemahan — Contoh Kalimat" (idx 169 / cetak 148), 1:1.
// CATATAN: buku Indonesia hanya terjemahkan 4 dari 6 Contoh Kalimat JP (no. 1, 3, 4 dan 6);
// no. 2 dan 5 tidak punya padanan di buku Indonesia, dan no. 2, 5, 6 versi Indonesia justru
// kalimat tambahan yang tidak ada di Honsatsu. Karena `arti` wajib terisi dan terjemahan
// tidak boleh dikarang, hanya 4 Contoh Kalimat yang memiliki terjemahan Indonesia yang
// ikut dimasukkan.
export const reibun: ReibunItem[] = [
  {
    kalimat: 'この 本は 読まれましたか。',
    arti: 'Buku ini sudah dibaca?',
    furigana: [{ base: '本', ruby: 'ほん' }],
  },
  {
    kalimat: '……ええ、もう 読みました。',
    arti: '……Ya, sudah baca.',
  },
  {
    kalimat: 'よく 映画を ご覧に なりますか。',
    arti: 'Sering menonton film?',
  },
  {
    kalimat: '……いいえ。でも、たまに テレビで 見ます。',
    arti: '……Ya. Kadang-kadang pergi menonton dengan istri.',
  },
  {
    kalimat: '小川さんの 息子さんが さくら大学に ご存じですか。',
    arti: 'Apakah (Anda) tahu bahwa anak laki-laki sdr. Ogawa lulus ujian masuk Universitas Sakura?',
    furigana: [{ base: '息子', ruby: 'むすこ' }],
  },
  {
    kalimat: '……いいえ、ちょっとも 知りませんでした。',
    arti: '……Tidak, tidak tahu.',
  },
  {
    kalimat: '松本部長は いらっしゃいますか。',
    arti: 'Apakah ada Bapak kepala bagian, Bapak Matsumoto?',
    furigana: [{ base: '部長', ruby: 'ぶちょう' }],
  },
  {
    kalimat: '……ええ、こちらの お部屋です。どうぞ お入り ください。',
    arti: '……Ya, di ruangan ini. Silakan masuk.',
  },
]