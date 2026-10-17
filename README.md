# Minna no Nihongo I & II — Aplikasi Belajar (Bab 1–50)

Aplikasi belajar **offline** bergaya buku catatan untuk **Minna no Nihongo 1 & 2 (Bab 1–50)**.
React 19 + TypeScript + Vite 6 + Tailwind CSS v4 + react-router v7 + Zustand.

## Fitur

- **Kosakata** — tabel (Kana/Kanji/Romaji/Arti), **Flashcard** 2 arah, dan **Kuis** pilihan ganda.
- **Bunpou, Reibun, Kaiwa** — dengan furigana (`<ruby>`) yang bisa dinyalakan/dimatikan.
- **Isi jawaban + koreksi otomatis** — latihan A/B/C & Mondai, verdict per butir (benar/dekat/belum), skor per bagian & total bab.
- **Koreksi terjemahan** — bandingkan terjemahanmu dengan kunci secara *soft* (kemiripan kata / Jaccard).
- **Latihan Menyusun Kalimat** — mode Dasar & Ahli (partikel + akhiran verba, pengecoh, auto-check, panel bacaan kanji). Sesi satu soal per layar.
- **Halaman Partikel (助詞)** — 38 partikel + keterangan per bab, rangkuman arti, dan mode Ujian pilihan ganda.
- **Progress per-bagian** + **coretan/catatan** per bab (tersimpan otomatis di localStorage).
- **Audio** — pemutar Kaiwa & Mondai dengan tombol ulang dan pengatur kecepatan.
- **Tema terang/gelap** (ikut sistem atau manual).

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
```

## Perintah

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Jalankan dev server (Vite) |
| `npm run build` | Typecheck + build produksi |
| `npm run typecheck` | Cek tipe saja (`tsc --noEmit`) |
| `npm run validate` | Validasi konsistensi data 50 bab (struktur, audio, furigana) |
| `npm run validate:partikel` | Invariant data partikel (bab ⇄ perBab, 100 soal) |
| `npm run validate:susun` | Invariant data susun (token mode ahli, bacaan kanji) |
| `npm run test` | Tes unit Vitest (core/* + snapshot data) |
| `npm run audit` | Audit kelengkapan data bab |
| `npm run check` | validate (+partikel+susun) + typecheck — loop cepat, tanpa build |
| `npm run check:full` | check + build — gerbang "selesai" |
| `npm run guard` | validate + audit + cek aturan keras (tanpa dependensi baru, token-only, dll.) |
| `npm run verify` | check:full + screenshot desktop/mobile + cek error boundary (butuh dev server) |
| `npm run map` | Regenerate `docs/AI-MAP.md` |
| `npm run find <kata>` | Cari di kode/data/docs, output `file:baris` |
| `npm run add:bab <N>` | Scaffold folder `src/data/babNN/` baru |

## Catatan penting: Audio TIDAK disertakan

File audio (`public/audio/*.mp3`, ~164 MB) **tidak di-upload** ke repo ini karena
berukuran besar dan merupakan materi ber-hak-cipta. Aplikasi tetap berjalan tanpa audio
(pemutar akan kosong); fitur lain tidak terpengaruh.

Untuk mengaktifkan audio, taruh file mp3 di `public/audio/` dengan penamaan:

```
babNN_kaiwa.mp3        # 1 file per bab, NN = 01..50
babNN_mondai1.mp3      # jumlah mondai bervariasi (2–4) per bab
babNN_mondai2.mp3
...
```

Daftar jumlah track per bab ada di `src/core/audio/manifest.ts`.

## Struktur

```
src/
  core/        # domain murni (tanpa React): text/{normalize,terjemahan,susun,segmentPartikel,baca},
               # audio/manifest, validation/schema
  data/        # data per bab (bab01/…) + registry auto (import.meta.glob) + partikel/ + kamus/
  features/    # vertical slice: flashcard, kuis, partikel, susun, theme
  store/       # Zustand persist: useProgress, useNotes, useTheme
  pages/       # HomePage, BabDetailPage, SusunCampuranPage, PartikelPage, NotFoundPage
  components/  # TopNav
  styles/      # tokens.css (@theme), paper.css (tema kertas), motion.css
tools/         # validate*, audit, map, find, guard, new-bab, screenshot
docs/          # BAB-TEMPLATE.md (checklist menambah bab), AI-MAP.md (peta kode auto)
AGENTS.md      # aturan kerja untuk AI/dev (baca ini dulu)
PLAN.md        # rencana, keputusan, log sesi
```

Menambah bab: buat folder `src/data/babNN/` (atau `npm run add:bab NN`), lalu
`npm run validate` + `npm run build`. Registry otomatis, tidak perlu menyentuh kode lain.
