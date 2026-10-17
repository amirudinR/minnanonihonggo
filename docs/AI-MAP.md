# PETA KODE & DATA — auto-generated oleh `npm run map`

> JANGAN edit manual. Ubah `tools/map.ts` lalu jalankan ulang.
> Aturan kerja lengkap: `AGENTS.md` · rencana: `PLAN.md` · checklist bab: `docs/BAB-TEMPLATE.md`

## 1. Modul (non-data)

| File | Baris | Deskripsi |
|---|---|---|
| `src/App.tsx` | 50 | exports: App |
| `src/components/TopNav.tsx` | 65 | Bilah navigasi utama (lengket di atas). Menggantikan pola "← Daftar Bab" |
| `src/core/audio/manifest.ts` | 52 | Cek konsistensi: jumlah mondai di data bab harus cocok dengan manifest |
| `src/core/text/baca.ts` | 120 | Baca kanji → kana (untuk panel "Keterangan" latihan susun) |
| `src/core/text/normalize.ts` | 114 | Partikel dan akhiran gramatikal boleh "hilang" tanpa mengubah benar/salah |
| `src/core/text/segmentPartikel.ts` | 126 | Segmentasi unit `susun` jadi token halus untuk MODE AHLI |
| `src/core/text/susun.ts` | 193 | Logika murni latihan menyusun kalimat (tanpa React) |
| `src/core/text/terjemahan.ts` | 56 | Bandingkan terjemahan user vs terjemahan buku memakai Jaccard + cakupan kata kunci |
| `src/core/validation/schema.ts` | 197 | Validasi konsistensi data satu bab. Dipakai lewat script `npm run validate` / dev |
| `src/features/bab/AudioBar.tsx` | 37 | Pemutar audio Kaiwa/Mondai dengan tombol Ulang (loop) + pengatur kecepatan |
| `src/features/bab/BabHero.tsx` | 22 | Header bab: nomor, label, topik, judul kaiwa (JP), + stempel selesai/skor |
| `src/features/bab/BabToc.tsx` | 25 | Daftar isi bab (anchor). Membuka `<details>` tujuan bila masih tertutup |
| `src/features/bab/BagianProgress.tsx` | 45 | Checklist "sudah dikuasai" per bagian bab (di luar 'coretan'/'bagian') |
| `src/features/bab/BunshoSection.tsx` | 18 | Seksi Bunsho (bacaan) — judul opsional + teks + terjemahan opsional |
| `src/features/bab/CoretanSection.tsx` | 26 | Seksi Coretan & Catatan pribadi per bab (textarea) |
| `src/features/bab/index.ts` | 30 | Primitif |
| `src/features/bab/KaiwaSection.tsx` | 36 | Seksi Kaiwa: audio + dialog (furigana) + latihan terjemahan |
| `src/features/bab/KonteksSection.tsx` | 18 | Seksi Konteks Latihan B (teks pendukung renshuuB) |
| `src/features/bab/KoreksiPanel.tsx` | 81 | Ringkasan koreksi satu bab (skor latihan A/B/C/Mondai) + kualitas terjemahan |
| `src/features/bab/KosakataSection.tsx` | 118 | Seksi Kosakata dengan 3 tab (Daftar / Flashcard / Kuis) |
| `src/features/bab/LatihanList.tsx` | 114 | Daftar latihan Renshuu (A/B/C): textarea jawaban per butir + verdict otomatis |
| `src/features/bab/MondaiSection.tsx` | 25 | Seksi Mondai: daftar butir soal interaktif |
| `src/features/bab/PolaSection.tsx` | 58 | Seksi pola tata bahasa |
| `src/features/bab/RangkumanSection.tsx` | 11 | Seksi Rangkuman (bila buku memang punya) |
| `src/features/bab/ReibunSection.tsx` | 20 | Seksi Contoh Kalimat (Reibun) — latihan terjemahan soft-match |
| `src/features/bab/RenshuuSection.tsx` | 25 | Seksi latihan Renshuu (A / B / C) |
| `src/features/bab/Ruby.tsx` | 49 | Render furigana `<ruby>` untuk satu teks |
| `src/features/bab/Section.tsx` | 27 | Satu bagian materi bab: `<details>` akordeon dengan judul + jangkar `id` |
| `src/features/bab/sectionsOf.ts` | 28 | Daftar bagian yang ADA di satu bab → dipakai untuk TOC & Progress Per-Bagian |
| `src/features/bab/SoalInteraktif.tsx` | 102 | Satu butir Mondai: baris soal + input per baris, opsional pilihan ganda, |
| `src/features/bab/SusunSection.tsx` | 13 | Seksi latihan Menyusun Kalimat untuk satu bab |
| `src/features/bab/TerjemahanList.tsx` | 84 | Daftar latihan terjemahan (Reibun/Kaiwa): tiap baris ada input terjemahan, |
| `src/features/bab/TextWithNewlines.tsx` | 17 | Render teks yang memuat `\n` sebagai baris berganti (`<br/>`) |
| `src/features/bab/ToolbarTampilan.tsx` | 27 | Toolbar "Tampilan teks": toggle Furigana & Romaji |
| `src/features/flashcard/Flashcard.tsx` | 199 | Baca set tersimpan dari localStorage (JSON) |
| `src/features/kuis/Kuis.tsx` | 159 | Bangun soal pilihan ganda: "Apa arti <kana>?" dengan 3 pengecoh |
| `src/features/partikel/index.ts` | 5 | — |
| `src/features/partikel/KartuPartikel.tsx` | 125 | Label kelompok (untuk badge kartu) |
| `src/features/partikel/PemilihBab.tsx` | 39 | Baris tombol pemilih bab. Berlaku untuk mode daftar (filter) & ujian (cakupan soal) |
| `src/features/partikel/TabelRingkas.tsx` | 41 | Rangkuman singkat: arti (fungsi) tiap partikel dalam tabel padat |
| `src/features/partikel/UjianPartikel.tsx` | 176 | Kunci localStorage untuk jawaban ujian partikel (per id soal) |
| `src/features/susun/index.ts` | 7 | — |
| `src/features/susun/KeteranganBacaan.tsx` | 83 | Panel keterangan setelah kalimat selesai/benar: |
| `src/features/susun/MenyusunLatihan.tsx` | 113 | Latihan menyusun kalimat untuk satu bab |
| `src/features/susun/PemilihBabSusun.tsx` | 50 | Pilihan bab untuk latihan susun: Semua · MNN I · MNN II · 1–50 |
| `src/features/susun/SoalMenyusun.tsx` | 310 | Auto-check: begitu semua chip terpasang, langsung dikoreksi |
| `src/features/theme/ThemeToggle.tsx` | 47 | Tombol tema: klik = balik terang <-> gelap (mode manual) |
| `src/main.tsx` | 11 | — |
| `src/pages/BabDetailPage.tsx` | 196 | Navigasi bab dengan arrow key (←/→) — HANYA saat tab Daftar aktif. |
| `src/pages/HomePage.tsx` | 203 | exports: HomePage |
| `src/pages/NotFoundPage.tsx` | 15 | exports: NotFoundPage |
| `src/pages/PartikelPage.tsx` | 187 | Deep-linking: buka tab Ujian lewat #ujian / #ujian-mulai, daftar lewat #daftar. |
| `src/pages/SusunCampuranPage.tsx` | 245 | exports: SusunCampuranPage |
| `src/store/useNotes.ts` | 24 | exports: useNotes |
| `src/store/useProgress.ts` | 68 | bagian yang ditandai selesai user, mis. ['kosakata','bunpou','renshuuA'] |
| `src/store/useTheme.ts` | 91 | Tema sistem saat ini (fallback 'light' bila tak didukung) |
| `src/types/bab.ts` | 123 | Latihan menyusun kalimat (sentence building) — fokus pola bunpou bab |

## 2. Peta dependensi (impor antar modul src)

```
src/App.tsx → src/components/TopNav.tsx
src/App.tsx → src/pages/BabDetailPage.tsx
src/App.tsx → src/pages/HomePage.tsx
src/App.tsx → src/pages/NotFoundPage.tsx
src/App.tsx → src/pages/PartikelPage.tsx
src/App.tsx → src/pages/SusunCampuranPage.tsx
src/components/TopNav.tsx → src/features/theme/ThemeToggle.tsx
src/components/TopNav.tsx → src/store/useProgress.ts
src/core/text/susun.ts → src/core/text/normalize.ts
src/core/text/susun.ts → src/core/text/segmentPartikel.ts
src/core/text/susun.ts → src/types/bab.ts
src/core/validation/schema.ts → src/core/audio/manifest.ts
src/core/validation/schema.ts → src/core/text/normalize.ts
src/core/validation/schema.ts → src/core/text/susun.ts
src/core/validation/schema.ts → src/types/bab.ts
src/features/bab/BabHero.tsx → src/types/bab.ts
src/features/bab/BabToc.tsx → src/features/bab/sectionsOf.ts
src/features/bab/BabToc.tsx → src/types/bab.ts
src/features/bab/BagianProgress.tsx → src/features/bab/Section.tsx
src/features/bab/BagianProgress.tsx → src/features/bab/sectionsOf.ts
src/features/bab/BagianProgress.tsx → src/store/useProgress.ts
src/features/bab/BagianProgress.tsx → src/types/bab.ts
src/features/bab/BunshoSection.tsx → src/features/bab/Section.tsx
src/features/bab/BunshoSection.tsx → src/types/bab.ts
src/features/bab/CoretanSection.tsx → src/features/bab/Section.tsx
src/features/bab/KaiwaSection.tsx → src/features/bab/AudioBar.tsx
src/features/bab/KaiwaSection.tsx → src/features/bab/Ruby.tsx
src/features/bab/KaiwaSection.tsx → src/features/bab/Section.tsx
src/features/bab/KaiwaSection.tsx → src/features/bab/TerjemahanList.tsx
src/features/bab/KaiwaSection.tsx → src/types/bab.ts
src/features/bab/KonteksSection.tsx → src/features/bab/Section.tsx
src/features/bab/KonteksSection.tsx → src/features/bab/TextWithNewlines.tsx
src/features/bab/KonteksSection.tsx → src/types/bab.ts
src/features/bab/KoreksiPanel.tsx → src/core/text/normalize.ts
src/features/bab/KoreksiPanel.tsx → src/core/text/terjemahan.ts
src/features/bab/KoreksiPanel.tsx → src/store/useNotes.ts
src/features/bab/KoreksiPanel.tsx → src/store/useProgress.ts
src/features/bab/KoreksiPanel.tsx → src/types/bab.ts
src/features/bab/KosakataSection.tsx → src/features/bab/Section.tsx
src/features/bab/KosakataSection.tsx → src/features/flashcard/Flashcard.tsx
src/features/bab/KosakataSection.tsx → src/features/kuis/Kuis.tsx
src/features/bab/KosakataSection.tsx → src/types/bab.ts
src/features/bab/LatihanList.tsx → src/core/text/normalize.ts
src/features/bab/LatihanList.tsx → src/features/bab/TextWithNewlines.tsx
src/features/bab/LatihanList.tsx → src/store/useNotes.ts
src/features/bab/MondaiSection.tsx → src/features/bab/Section.tsx
src/features/bab/MondaiSection.tsx → src/features/bab/SoalInteraktif.tsx
src/features/bab/MondaiSection.tsx → src/types/bab.ts
src/features/bab/PolaSection.tsx → src/features/bab/Section.tsx
src/features/bab/PolaSection.tsx → src/types/bab.ts
src/features/bab/RangkumanSection.tsx → src/features/bab/Section.tsx
src/features/bab/ReibunSection.tsx → src/features/bab/Section.tsx
src/features/bab/ReibunSection.tsx → src/features/bab/TerjemahanList.tsx
src/features/bab/ReibunSection.tsx → src/types/bab.ts
src/features/bab/RenshuuSection.tsx → src/features/bab/LatihanList.tsx
src/features/bab/RenshuuSection.tsx → src/features/bab/Section.tsx
src/features/bab/RenshuuSection.tsx → src/types/bab.ts
src/features/bab/Ruby.tsx → src/types/bab.ts
src/features/bab/SoalInteraktif.tsx → src/core/text/normalize.ts
src/features/bab/SoalInteraktif.tsx → src/features/bab/AudioBar.tsx
src/features/bab/SoalInteraktif.tsx → src/features/bab/TextWithNewlines.tsx
src/features/bab/SoalInteraktif.tsx → src/store/useNotes.ts
src/features/bab/SusunSection.tsx → src/features/bab/Section.tsx
src/features/bab/SusunSection.tsx → src/features/susun/index.ts
src/features/bab/SusunSection.tsx → src/types/bab.ts
src/features/bab/TerjemahanList.tsx → src/core/text/terjemahan.ts
src/features/bab/TerjemahanList.tsx → src/store/useNotes.ts
src/features/bab/index.ts → src/features/bab/AudioBar.tsx
src/features/bab/index.ts → src/features/bab/BabHero.tsx
src/features/bab/index.ts → src/features/bab/BabToc.tsx
src/features/bab/index.ts → src/features/bab/BagianProgress.tsx
src/features/bab/index.ts → src/features/bab/BunshoSection.tsx
src/features/bab/index.ts → src/features/bab/CoretanSection.tsx
src/features/bab/index.ts → src/features/bab/KaiwaSection.tsx
src/features/bab/index.ts → src/features/bab/KonteksSection.tsx
src/features/bab/index.ts → src/features/bab/KoreksiPanel.tsx
src/features/bab/index.ts → src/features/bab/KosakataSection.tsx
src/features/bab/index.ts → src/features/bab/LatihanList.tsx
src/features/bab/index.ts → src/features/bab/MondaiSection.tsx
src/features/bab/index.ts → src/features/bab/PolaSection.tsx
src/features/bab/index.ts → src/features/bab/RangkumanSection.tsx
src/features/bab/index.ts → src/features/bab/ReibunSection.tsx
src/features/bab/index.ts → src/features/bab/RenshuuSection.tsx
src/features/bab/index.ts → src/features/bab/Ruby.tsx
src/features/bab/index.ts → src/features/bab/Section.tsx
src/features/bab/index.ts → src/features/bab/SoalInteraktif.tsx
src/features/bab/index.ts → src/features/bab/SusunSection.tsx
src/features/bab/index.ts → src/features/bab/TerjemahanList.tsx
src/features/bab/index.ts → src/features/bab/TextWithNewlines.tsx
src/features/bab/index.ts → src/features/bab/ToolbarTampilan.tsx
src/features/bab/index.ts → src/features/bab/sectionsOf.ts
src/features/bab/sectionsOf.ts → src/types/bab.ts
src/features/partikel/UjianPartikel.tsx → src/store/useNotes.ts
src/features/partikel/index.ts → src/features/partikel/KartuPartikel.tsx
src/features/partikel/index.ts → src/features/partikel/PemilihBab.tsx
src/features/partikel/index.ts → src/features/partikel/TabelRingkas.tsx
src/features/partikel/index.ts → src/features/partikel/UjianPartikel.tsx
src/features/susun/KeteranganBacaan.tsx → src/core/text/baca.ts
src/features/susun/KeteranganBacaan.tsx → src/types/bab.ts
src/features/susun/MenyusunLatihan.tsx → src/core/text/susun.ts
src/features/susun/MenyusunLatihan.tsx → src/features/susun/index.ts
src/features/susun/MenyusunLatihan.tsx → src/store/useNotes.ts
src/features/susun/MenyusunLatihan.tsx → src/types/bab.ts
src/features/susun/SoalMenyusun.tsx → src/core/text/normalize.ts
src/features/susun/SoalMenyusun.tsx → src/core/text/susun.ts
src/features/susun/SoalMenyusun.tsx → src/features/susun/KeteranganBacaan.tsx
src/features/susun/SoalMenyusun.tsx → src/types/bab.ts
src/features/susun/index.ts → src/features/susun/KeteranganBacaan.tsx
src/features/susun/index.ts → src/features/susun/MenyusunLatihan.tsx
src/features/susun/index.ts → src/features/susun/PemilihBabSusun.tsx
src/features/susun/index.ts → src/features/susun/SoalMenyusun.tsx
src/features/theme/ThemeToggle.tsx → src/store/useTheme.ts
src/main.tsx → src/App.tsx
src/pages/BabDetailPage.tsx → src/features/bab/index.ts
src/pages/BabDetailPage.tsx → src/store/useNotes.ts
src/pages/BabDetailPage.tsx → src/store/useProgress.ts
src/pages/HomePage.tsx → src/store/useProgress.ts
src/pages/HomePage.tsx → src/store/useTheme.ts
src/pages/PartikelPage.tsx → src/features/partikel/index.ts
src/pages/SusunCampuranPage.tsx → src/core/text/susun.ts
src/pages/SusunCampuranPage.tsx → src/features/susun/index.ts
src/pages/SusunCampuranPage.tsx → src/store/useNotes.ts
src/pages/SusunCampuranPage.tsx → src/types/bab.ts
```

Catatan: `src/data/index.ts` memakai `import.meta.glob` → registry 50 bab otomatis (tidak terlihat sebagai edge statis).

## 3. Ringkasan data 50 bab

```
bab | kos  bun  cat  rei  kai  rA  rB  rC  mon  bunS  kon
--------------------------------------------------------------
  1   44    4    2   10    9   6   7   3    6     0    1
  2   37    4    2   16   10   6   8   3    8     0    0
  3   49    2    5   14   10   6   8   3    5     0    0
  4   60    4    6   16   10   7   8   3    8     0    0
  5   60    3    4   12   10   4   7   3    6     0    0
  6   56    4    6   12   10   5   7   3    6     0    0
  7   47    4    6   14   10   6   7   3    7     0    0
  8   58    4   11   16   10   4   1   0    6     0    0
  9   55    5    0   14   12   6   1   0    5     0    0
 10   50    5    0   16    7   6   1   0    6     0    0
 11   61    4    0   15   13   5   1   0    6     0    0
 12   50    4    0    8   13   6   7   3    6     0    0
 13   31    4    0   12   12   4   1   0    5     0    0
 14   41    6    0    6   11   5   7   3    7     0    0
 15   24    2    4   14    9   4   6   3    7     0    0
 16   58    4    3   12   12   4   7   3    7     0    0
 17   35    3    3    9   11   5   8   3    6     0    0
 18   30    3    6    8    8   5   7   3    7     0    0
 19   27    3    4   14   11   4   6   3    7     0    0
 20   22    4    3   14   10   2   8   3    6     0    0
 21   40    2    7   16   10   3   7   3    6     0    0
 22   31    4    3    8    8   6   7   3    7     0    0
 23   28    4    1    9    8   4   6   3    8     0    0
 24   18    4    3    5   11   5   5   3    6     0    0
 25   17    2    5    8    8   4   7   3    6     0    0
 26   48    4    3   12   11   6   8   3    5     0    0
 27   49    4    2    7   11   7   8   3    8     0    0
 28   54    3    5   14    8   5   6   3    7     0    0
 29   52    3    3   12   15   4   7   3    8     0    0
 30   48    2    3   12   10   4   7   3    8     0    0
 31   38    4    3   15   12   6   8   3    7     0    0
 32   55    6    0    6   11   3   6   3    7     0    0
 33   48    4    2    8   11   5   7   3    7     0    0
 34   50    3    3   24   13   4   6  10    7     0    0
 35   52    3    6   16   11   6   8   3    8     0    0
 36   45    4    2   14   11   6   7   3    7     0    0
 37   62    3    7   11   12   6   8   3    7     0    0
 38   58    4    3   19   11   5   6   3    7     0    0
 39   51    4    1   15    8   4   8   3    7     0    0
 40   62    3    2   12   10   3   6   3    7     0    0
 41   60    4    4   12   12   7   8   3    7     0    0
 42   54    4    2   12   10   4   7   3    7     0    0
 43   25    4    1    6    9   3   8   3    6     0    0
 44   37    4    2    8   10   7   8   3    8     0    0
 45   28    2    2    4   10   2   7   3    7     0    0
 46   32    3    3   12   10   5   6   3    6     0    0
 47   34    3    3    6   12   2   6   3    6     0    0
 48   22    2    4    2   13   4   6   3    5     0    0
 49   23    4    7    8   10   6   8   3    7     0    0
 50   33    2    2    8   14   5   7   3    6     0    0
```

## 4. Perintah

| Perintah | Fungsi |
|---|---|
| `npm run check` | validate + typecheck (loop cepat) |
| `npm run check:full` | validate + typecheck + test + build (gerbang selesai) |
| `npm run test` | tes unit Vitest (core/* + snapshot data) |
| `npm run verify` | check:full + screenshot desktop/mobile + cek error boundary |
| `npm run map` | regenarate file ini |
| `npm run find <kata>` | cari di kode/data/docs, output terkelompok |
| `npm run guard` | validate + audit + aturan keras AGENTS.md |
| `npm run add:bab <N>` | scaffold folder bab baru dari checklist BAB-TEMPLATE |
| `npm run validate` | validasi data 50 bab |
| `npm run audit` | audit kelengkapan data |
