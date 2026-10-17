# UI Polish Design — Editorial Notebook Premium

**Tanggal:** 2026-10-17  
**Status:** Menunggu review pengguna  
**Ruang lingkup:** Beranda, Detail Bab, Susun, Partikel, shell navigasi, dan mobile-first responsive presentation

## 1. Tujuan

Membuat tampilan aplikasi lebih menarik, mudah dipindai, dan lebih memotivasi untuk belajar tanpa mengganti identitas “buku catatan kertas”. Screenshot halaman Detail Bab menunjukkan masalah utama: halaman panjang terasa repetitif, beberapa blok memiliki bobot visual yang sama, dan pengguna tidak selalu tahu posisi mereka dalam alur belajar.

Perubahan ini adalah polish presentasi dan UX. Data materi, logika koreksi, state progres, routing, lazy loading, dan code splitting tidak berubah kecuali diperlukan untuk menghubungkan presentasi dengan data yang sudah tersedia.

## 2. Prinsip desain

- Pertahankan notebook kertas, garis halaman, margin, tekstur, dan tipografi yang sudah menjadi identitas.
- Gunakan hirarki visual yang tegas: satu fokus utama per layar, tiga level surface, dan aksen warna hanya untuk aksi/status.
- Jadikan konten Jepang mudah dibaca dengan ruang dan lebar baris yang cukup.
- Gunakan komponen/pola visual yang sama di semua rute.
- Rancang dari viewport mobile terlebih dahulu; desktop menjadi perluasan, bukan layout terpisah.
- Pertahankan full-bleed layout yang sudah diputuskan.
- Tidak menambah dependensi UI.
- Semua warna, radius, shadow, dan focus state memakai token.
- Animasi baru, bila benar-benar diperlukan, hanya berada di `motion.css`.
- Jangan mengubah fakta atau isi materi.

## 3. Arah visual

### 3.1 Editorial notebook premium

Fondasi utama adalah notebook premium: permukaan kertas utama, kartu materi, dan panel interaksi dibedakan melalui surface, border, radius, dan shadow. Judul section memakai aksen editorial yang konsisten, sedangkan konten latihan memiliki penekanan interaktif yang lebih jelas.

### 3.2 Aksen Japanese study atelier

Gunakan aksen secukupnya: label kana/kanji, indeks vertikal, stempel status, dan bookmark/anchor yang ringan. Ornamen tidak boleh mengurangi kontras, keterbacaan, atau ruang untuk materi.

### 3.3 Tipografi dan warna

- Judul/heading tetap mengikuti pembagian font yang sudah ada.
- Teks isi dibatasi pada lebar baca yang nyaman di dalam kontainer full-bleed.
- Warna aksen digunakan untuk CTA, tab aktif, progres, dan status.
- Status benar/salah menggunakan token verdict yang ada dan tetap memenuhi kontras.
- Tema terang/gelap harus tetap memiliki nilai surface, border, dan teks yang setara.

## 4. Rencana per halaman

### 4.1 Shell dan TopNav

- Pertahankan satu sumber navigasi di `TopNav`.
- Perjelas brand, tautan aktif, progres, dan theme toggle.
- Desktop tetap satu baris; mobile memakai wrapping/stacking yang terkontrol.
- Jangan mengembalikan navigasi “← Daftar Bab” yang berulang per halaman.
- Pertahankan target sentuh minimum 44px dan focus ring global.

### 4.2 Beranda

- Tambahkan hero singkat yang menjelaskan tujuan aplikasi dan CTA “Lanjut belajar” berbasis progres terakhir yang sudah tersedia.
- Tampilkan ringkasan progres berbasis `meta` dan `useProgress`; jangan mengarang metrik seperti streak jika datanya belum tersedia.
- Perbaiki kartu bab agar nomor, topik, jumlah materi, status, dan indikator progres mudah dipindai.
- Bedakan kelompok MNN I dan MNN II secara editorial.
- Pertahankan filter dan pencarian, dengan prioritas visual pada aksi utama.

### 4.3 Detail Bab

- Bentuk ulang hero menjadi mini-cover: nomor, judul/topik, status, skor, dan aksi utama.
- Jadikan context bar sebagai ringkasan belajar yang lebih jelas.
- Buat peta bab/TOC lebih menonjol dan mewakili alur Kosakata → Bunpou → Kaiwa → Latihan → Mondai → Review.
- Kelompokkan toolbar furigana/romaji dan statistik agar tidak bersaing sebagai elemen terpisah.
- Bedakan surface untuk materi referensi, contoh percakapan, latihan aktif, dan evaluasi.
- Sediakan affordance kembali ke peta/anchor yang ringan untuk halaman panjang, tetap kompatibel dengan TopNav dan back-to-top.
- Pertahankan semua section optional: jika data kosong, section tetap tidak dirender.

### 4.4 Susun

- Satukan pemilihan bab, mode, jumlah soal, dan progres sesi ke dalam session header.
- Jadikan area soal sebagai fokus utama.
- Pastikan bank chip, feedback per-chip, pengecoh, panel bacaan, dan tombol aksi memiliki hirarki yang jelas.
- Ringkasan akhir sesi harus terasa sebagai hasil belajar dan tetap menyediakan “Ulangi yang salah” serta “Sesi baru”.
- Jangan mengubah format key progres atau perilaku auto-check.

### 4.5 Partikel

- Padatkan header filter/search tanpa menghilangkan fungsi.
- Bedakan identitas partikel, fungsi, contoh, dan panel per bab.
- Beri framing yang jelas untuk mode Daftar dan Ujian.
- Pertahankan filter bab, deep-link, navigasi keyboard, dan penyimpanan jawaban yang ada.

### 4.6 Responsive

- Mobile adalah baseline layout:
  - TopNav memakai dua tingkat yang ringkas tanpa memotong label penting.
  - Hero, context bar, toolbar, filter, dan control group menumpuk secara alami.
  - Tab/segmented control dapat wrap atau scroll horizontal di dalam area kontrolnya, bukan membuat `body` meluber.
  - Tabel kosakata dan panel contoh memakai overflow lokal yang terkontrol jika kolom tidak cukup.
  - Teks Jepang tidak dipaksa mengecil sampai sulit dibaca; line-height dan ruby tetap nyaman.
  - Tombol, chip, input, dan target interaktif memiliki area sentuh minimal 44px.
  - Back-to-top dan kontrol sticky tidak menutupi konten atau keyboard focus.
- Desktop tetap full-bleed dengan padding responsif sebagai perluasan dari aturan mobile.
- Tidak ada scroll horizontal pada `html`, `body`, atau wrapper halaman.
- Validasi mobile wajib memakai CDP device emulation pada lebar minimal 390px dan 430px, bukan mengandalkan `--window-size`.

## 5. Batasan teknis

- Tidak menambah library komponen atau dependency UI.
- Tidak menambahkan Tailwind config atau PostCSS config.
- Tidak menaruh hex hardcode atau `transition` baru di `paper.css`.
- Tidak menghapus lazy loading, dynamic bab loading, meta registry, atau code splitting.
- Tidak membuat store baru hanya untuk state presentasi.
- Selector Zustand dan setter harus tetap idempoten.
- Perubahan yang menyentuh file lama harus mengintegrasikan aturan dan worktree yang sudah ada; jangan membatalkan perubahan tidak terkait.

## 6. Tahapan implementasi

1. **Baseline dan audit token** — ambil baseline screenshot/DOM, inventaris aturan CSS yang tumpang tindih, dan rapikan token hanya bila mendukung perubahan.
2. **Shell dan Beranda** — implementasi hierarki TopNav, hero progres, filter, dan kartu bab.
3. **Detail Bab** — implementasi mini-cover, context bar, TOC, grouping section, dan navigasi halaman panjang.
4. **Susun dan Partikel** — terapkan pola session/mode header dan surface hierarchy tanpa mengubah logika.
5. **Mobile-first responsive polish** — selesaikan mobile 390/430px terlebih dahulu, lalu uji tablet dan desktop dengan CDP.
6. **Verification** — jalankan gate proyek dan pemeriksaan visual/runtime.

## 7. Acceptance criteria

- Pengguna dapat memahami fokus dan aksi utama setiap route dalam 3–5 detik.
- Detail Bab tidak lagi terasa sebagai satu blok panjang dengan kartu repetitif.
- CTA, progres, dan status terlihat jelas tanpa mengalahkan materi.
- Semua fitur existing tetap bekerja: kuis, susun mode Ahli, pengecoh, feedback, flashcard, audio, tema, keyboard navigation, dan deep-link.
- Tidak ada dependency UI baru.
- Tidak ada regresi data, full-bleed, tema terang/gelap, lazy loading, atau code splitting.
- Tidak ada horizontal overflow pada breakpoint desktop/mobile yang diuji.
- Pada lebar 390px dan 430px, seluruh rute utama tetap dapat dibuka, dibaca, di-scroll vertikal, dan dioperasikan tanpa zoom atau scroll horizontal.
- Pada mobile, tidak ada kontrol utama yang terpotong, tertutup sticky UI, atau memerlukan precision tap.
- Tidak ada error boundary, `Maximum update depth`, atau error runtime pada rute utama.
- Perintah berikut lulus:
  - `npm run typecheck`
  - `npm run validate`
  - `npm run build`
  - `npm run test`
  - `npm run check:full`

## 8. Verifikasi visual

Ambil screenshot dan periksa DOM untuk:

- `/`
- `/bab/4`
- `/latihan/susun`
- `/partikel`

Uji minimal desktop dan CDP emulation pada 390px, 430px, tablet, dan desktop. Periksa hero, navigasi, section hierarchy, focus state, contrast, touch target, scroll width, sticky overlap, teks Jepang/ruby, loading state, not-found state, dan deep-link refresh.
