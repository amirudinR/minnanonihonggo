import type { ReibunItem } from '@/types/bab'

// Contoh Kalimat Bab 45 — JP: Honsatsu 第45課「例文」(idx 178, hlm. cetak 160).
// arti: PDF Indonesia "Pelajaran 45 · II. Terjemahan · Contoh Kalimat" (idx 145,
// hlm. cetak 124), 1:1.
//
// CATATAN: buku Indonesia mencetak 6 butir Contoh Kalimat, tetapi butir 1 dan 6
// berbeda dari butir 1 dan 6 daftar 例文 pada Honsatsu (edisi Indonesia memakai
// kalimat lain: "Jika kereta rel listrik berhenti karena gemba bumi…" dan
// "Sakura mekar padahal musim dingin."). Hanya butir 2–5 yang memiliki padanan JP,
// jadi hanya itu yang dipakai di sini — sama seperti catatan Bab 42.
export const reibun: ReibunItem[] = [
  {
    kalimat:
      'これが この コンピューターの 保証書です。調子が 悪い 場合は、この 番号に 連絡して ください。……はい、わかりました。',
    arti: 'Ini surat garansi PC ini. Jika kondisi tidak baik, silakan hubungi nomor ini! ……Baik, mengerti.',
  },
  {
    kalimat:
      'あのう、この 図書館では コピーの 領収書が もらえますか。……ええ。必要な 場合は、係に 言って ください。',
    arti: 'Anu... Apakah (saya) dapat kuitansi untuk fotocopy di perpustakaan ini? ……Ya. Silakan beritahukan jika perlu.',
  },
  {
    kalimat: '火事や 地震の 場合は、絶対に エレベーターを 使わないで ください。……はい、わかりました。',
    arti: 'Jika kebakaran atau gempa bumi, sama sekali jangan gunakan lift. ……Baik, mengerti.',
  },
  {
    kalimat: 'スピーチは うまく いきませんでしたか。……いいえ。一生懸命 練習したのに、途中で 忘れて しまいました。',
    arti: 'Apakah pidatonyya lancar? ……Tidak. Di tengah pidato, (saya) lupa padahal berusaha keras untuk menghafalnya.',
  },
]
