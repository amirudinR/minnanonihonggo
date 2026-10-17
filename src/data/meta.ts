/**
 * Ringkasan bab untuk daftar/indeks (Home & TopNav).
 *
 * ⚠️ FILE INI DI-GENERATE — JANGAN edit manual.
 * Regenerate: `npm run gen:meta` (wajib bila data bab berubah).
 * Konsistensi dijaga tes di `src/data/registry.test.ts`.
 *
 * Kenapa ada: supaya bundel awal tidak memuat isi 50 bab. Data penuh dimuat
 * per bab lewat `src/data/load.ts`.
 */

export interface BabMeta {
  no: number
  topik: string
  /** Judul kaiwa (untuk pencarian di Home). Kosong bila tak ada. */
  kaiwaJudul: string
  kosakata: number
  bunpou: number
  /** Jumlah butir renshuuA + renshuuB + renshuuC. */
  latihan: number
}

export const meta: BabMeta[] = [
  { no: 1, topik: "Salam Kenal!", kaiwaJudul: "初めまして", kosakata: 44, bunpou: 4, latihan: 16 },
  { no: 2, topik: "Mohon Bantuan Anda", kaiwaJudul: "ほんの 気持ちです", kosakata: 37, bunpou: 4, latihan: 17 },
  { no: 3, topik: "Minta ini!", kaiwaJudul: "これを ください", kosakata: 49, bunpou: 2, latihan: 17 },
  { no: 4, topik: "Di Situ Sampai Pukul Berapa?", kaiwaJudul: "そちらは 何時から 何時までですか", kosakata: 60, bunpou: 4, latihan: 18 },
  { no: 5, topik: "Apakah Kereta Rel Listrik Ini Menuju Koshien?", kaiwaJudul: "甲子園へ 行きますか", kosakata: 60, bunpou: 3, latihan: 14 },
  { no: 6, topik: "Bagaimana Kalau Kita Pergi Bersama-sama?", kaiwaJudul: "いっしょに 行きませんか", kosakata: 56, bunpou: 4, latihan: 15 },
  { no: 7, topik: "Selamat Datang!", kaiwaJudul: "ごめんください", kosakata: 47, bunpou: 4, latihan: 16 },
  { no: 8, topik: "Saya Mau Pamit.", kaiwaJudul: "そろそろ 失礼します", kosakata: 58, bunpou: 4, latihan: 5 },
  { no: 9, topik: "Sayang, ya.", kaiwaJudul: "残念です", kosakata: 55, bunpou: 5, latihan: 7 },
  { no: 10, topik: "Ada kecap ikan?", kaiwaJudul: "ナンプラー、ありますか", kosakata: 50, bunpou: 5, latihan: 7 },
  { no: 11, topik: "Tolong poskan ini", kaiwaJudul: "これ、お願いします", kosakata: 61, bunpou: 4, latihan: 6 },
  { no: 12, topik: "Bagaimana Festival Gion?", kaiwaJudul: "祇園祭は どうでしたか", kosakata: 50, bunpou: 4, latihan: 16 },
  { no: 13, topik: "Tolong pisahkan bayarnya", kaiwaJudul: "別々に お願いします", kosakata: 31, bunpou: 4, latihan: 5 },
  { no: 14, topik: "Tolong pergi ke Umeda", kaiwaJudul: "梅田まで 行って ください", kosakata: 41, bunpou: 6, latihan: 15 },
  { no: 15, topik: "Keluarganya?", kaiwaJudul: "ご家族は？", kosakata: 24, bunpou: 2, latihan: 13 },
  { no: 16, topik: "Tolong Ajarkan Cara Pemakaiannya!", kaiwaJudul: "使い方を教えてください", kosakata: 58, bunpou: 4, latihan: 14 },
  { no: 17, topik: "Kenapa?", kaiwaJudul: "どうしましたか", kosakata: 35, bunpou: 3, latihan: 16 },
  { no: 18, topik: "Apa hobinya?", kaiwaJudul: "趣味は 何ですか", kosakata: 30, bunpou: 3, latihan: 15 },
  { no: 19, topik: "Dietnya Mulai Besok", kaiwaJudul: "ダイエットは あしたから します", kosakata: 27, bunpou: 3, latihan: 13 },
  { no: 20, topik: "Bagaimana Kalau Pergi Bersama-sama?", kaiwaJudul: "夏休みは どう するの？", kosakata: 22, bunpou: 4, latihan: 13 },
  { no: 21, topik: "Saya Kira Juga Begitu", kaiwaJudul: "わたしも そう 思います", kosakata: 40, bunpou: 2, latihan: 13 },
  { no: 22, topik: "Cari Kamar Yang Bagaimana?", kaiwaJudul: "どんな アパートが いいですか", kosakata: 31, bunpou: 4, latihan: 16 },
  { no: 23, topik: "Bagaimana Caranya Pergi?", kaiwaJudul: "どうやって 行きますか", kosakata: 28, bunpou: 4, latihan: 13 },
  { no: 24, topik: "Bagaimana Kalau Saya Pergi Untuk Membantu Anda?", kaiwaJudul: "手伝って くれますか", kosakata: 18, bunpou: 4, latihan: 13 },
  { no: 25, topik: "Jika Waktu Terluang", kaiwaJudul: "いろいろ お世話に なりました", kosakata: 17, bunpou: 2, latihan: 14 },
  { no: 26, topik: "～んです dan Permintaan (Kapan Harus Buang Sampah?)", kaiwaJudul: "どこに ごみを 出したら いいですか", kosakata: 48, bunpou: 4, latihan: 17 },
  { no: 27, topik: "～ます／～られる Kata Kerja Potensial (Bisa, Mampu, dan 「Hanya ～」)", kaiwaJudul: "何でも 作れるんですね", kosakata: 49, bunpou: 4, latihan: 18 },
  { no: 28, topik: "～ながら（sambil）／～し、～し（dan lagi）／それで", kaiwaJudul: "お茶でも 飲みながら……", kosakata: 54, bunpou: 3, latihan: 14 },
  { no: 29, topik: "Keadaan akibat aksi (～ています), ～てしまいました／しまいます, dan Datang/Pergi ke tempat", kaiwaJudul: "忘れ物を してしまったんです", kosakata: 52, bunpou: 3, latihan: 14 },
  { no: 30, topik: "Keadaan yang disiapkan (～てあります) dan Disiapkan lebih awal (～ておきます)", kaiwaJudul: "チケットを 予約して おきます", kosakata: 48, bunpou: 2, latihan: 14 },
  { no: 31, topik: "Rencana (つもりです / 予定です), belum selesai (まだ〜ていません), dan bentuk Kata Benda (踊り)", kaiwaJudul: "インターネットを 始めようと 思っています", kosakata: 38, bunpou: 4, latihan: 17 },
  { no: 32, topik: "Menyampaikan saran/anjuran dan perkiraan (「〜た ほうがいいです」, 「〜た（Bentuk ない）ない ほうがいい」, 「〜でしょう」, 「〜かもしれません」, 「〜ましょう」, Kata Keterangan Bilangan で, 「何か 〜な こと」)", kaiwaJudul: "病気かも しれません", kosakata: 55, bunpou: 6, latihan: 12 },
  { no: 33, topik: "Memahami arti tulisan/tanda (Bentuk Perintah・Larangan, 「X は Y という 意味です」, 「〜と 言っていました」)", kaiwaJudul: "これは どういう 意味ですか", kosakata: 48, bunpou: 4, latihan: 15 },
  { no: 34, topik: "Meniru Cara Orang Lain (reported speech)", kaiwaJudul: "する とおりに してください", kosakata: 50, bunpou: 3, latihan: 20 },
  { no: 35, topik: "Bentuk Syarat (〜ば・〜なら) dan Wisata Musim Dingin", kaiwaJudul: "旅行社へ 行けば、わかります", kosakata: 52, bunpou: 3, latihan: 17 },
  { no: 36, topik: "Berolah Raga Setiap Hari（ようにします／ように なります）", kaiwaJudul: "頭と 体を 使うように しています", kosakata: 45, bunpou: 4, latihan: 16 },
  { no: 37, topik: "受身（Kalimat Pasif）— 〜に 〜られます／〜が 〜られます", kaiwaJudul: "海を 埋め立てて 造られました", kosakata: 62, bunpou: 3, latihan: 17 },
  { no: 38, topik: "〜のは／〜のが, 〜のを 忘れました, dan Penegasan dengan の（Keterangan, Lokasi, dan Posisi）", kaiwaJudul: "片づけるのが 好きなんです", kosakata: 58, bunpou: 4, latihan: 14 },
  { no: 39, topik: "Penyebab dengan 〜て、〜・で・ので・〜中で, dan uncapan kerja (お疲れさまでした・-conditioned)", kaiwaJudul: "遅れて、すみません", kosakata: 51, bunpou: 4, latihan: 15 },
  { no: 40, topik: "Kalimat Tanya yang Dibuat Kalimat (～か・～かどうか), ～て みます, い→さ", kaiwaJudul: "友達が できたか どうか、心配です", kosakata: 62, bunpou: 3, latihan: 12 },
  { no: 41, topik: "いただきます・くださいます・やります（Pemberian & Penerimaan）", kaiwaJudul: "荷物を 預かって いただけませんか", kosakata: 60, bunpou: 4, latihan: 18 },
  { no: 42, topik: "Tujuan (ために・に), Jumlah (は／も), dan Pelaku Pasif (によって)", kaiwaJudul: "ボーナス は 何に 使いますか", kosakata: 54, bunpou: 4, latihan: 14 },
  { no: 43, topik: "Kelihatannya ～そうです ( Kata Kerja / Kata Sifat ), ～て 来ます, dan ～て くれませんか", kaiwaJudul: "優しそうですね", kosakata: 25, bunpou: 4, latihan: 14 },
  { no: 44, topik: "Kelewatan ～すぎます, ～やすい／～にくい, ～く・～に します, dan Kata Benda に します", kaiwaJudul: "この 写真みたいに して ください", kosakata: 37, bunpou: 4, latihan: 18 },
  { no: 45, topik: "Pola Kondisi (場合は、～) dan Perbandingan (のに、～)", kaiwaJudul: "一生懸命 練習したのに", kosakata: 28, bunpou: 2, latihan: 12 },
  { no: 46, topik: "〜ところです・〜ばかりです・〜はずです", kaiwaJudul: "もうすぐ 着く はずです", kosakata: 32, bunpou: 3, latihan: 14 },
  { no: 47, topik: "Menyampaikan informasi atau kesimpulan yang belum pasti berdasarkan sumber lain (「～そうです」, 「～ようです」, 「声／音／におい／味が します」, 伝聞「そうです」 dan perbedaan 「そうです」 vs 「ようです」)", kaiwaJudul: "婚約したそうです", kosakata: 34, bunpou: 3, latihan: 11 },
  { no: 48, topik: "Menggunakan 使役 (Kata Kerja Kausatif / \"menyuruh seseorang melakukan\") untuk menyatakan paksaan maupun persetujuan: bentuk 〜を させます (Kata Kerja Intransitif), 〜に〜させます (Kata Kerja Transitif), bentuk kamus 〜させる, serta pola 〜て いただけませんか untuk meminta izin atau persetujuan.", kaiwaJudul: "休ませていただけませんか", kosakata: 22, bunpou: 2, latihan: 13 },
  { no: 49, topik: "Menggunakan 敬語 (Kata Halus / Kata Hormat / Kata Merendahkan Diri) sesuai lawan bicara dan subjek: 尊敬 受身, お〜になる, お＋ます形, お＋ください, 謙譲 I / II / III, dan bentuk-bentuk perintah yang sopan.", kaiwaJudul: "よろしく お伝え ください", kosakata: 23, bunpou: 4, latihan: 17 },
  { no: 50, topik: "謙譲語（Kata Merendahkan Diri）— お／ご〜します・参ります・伺います", kaiwaJudul: "心から 感謝いたします", kosakata: 33, bunpou: 2, latihan: 15 },
]

export const TOTAL_BAB = meta.length

export function getMeta(no: number): BabMeta | undefined {
  return meta.find((m) => m.no === no)
}

/** Jumlah entri data partikel (untuk kartu ringkas di Home). */
export const JUMLAH_PARTIKEL = 38
/** Jumlah soal ujian partikel (untuk kartu ringkas di Home). */
export const JUMLAH_SOAL_PARTIKEL = 100
