# Minna no Nihongo I — Aplikasi Belajar (Bab 1–25)

Aplikasi belajar offline bergaya buku catatan untuk **Minna no Nihongo 1 (Bab 1–25)**.
React 19 + TypeScript + Vite 6 + Tailwind CSS v4 + Zustand.

## Fitur

- **Kosakata** — tabel (Kana/Kanji/Romaji/Arti), **Flashcard** 2 arah, dan **Kuis** pilihan ganda.
- **Bunpou, Reibun, Kaiwa** — dengan furigana (`<ruby>`) yang bisa dinyalakan/dimatikan.
- **Isi jawaban + koreksi otomatis** — latihan A/B/C & Mondai, verdict per butir (benar/hampir/belum), skor per bagian & total bab.
- **Koreksi terjemahan** — bandingkan terjemahanmu dengan kunci secara *soft* (kemiripan kata).
- **Progress per-bagian** + **coretan/catatan** per bab (tersimpan otomatis di localStorage).
- **Audio** — pemutar Kaiwa & Mondai.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
```

Perintah lain:

```bash
npm run build      # typecheck + build produksi
npm run typecheck  # cek tipe saja
npm run validate   # validasi konsistensi data bab (struktur, audio, furigana)
```

## Catatan penting: Audio TIDAK disertakan

File audio (`public/audio/*.mp3`, ~164 MB) **tidak di-upload** ke repo ini karena
berukuran besar dan merupakan materi ber-hak-cipta. Aplikasi tetap berjalan tanpa audio
(pemutar akan kosong); fitur lain tidak terpengaruh.

Untuk mengaktifkan audio, taruh file mp3 di `public/audio/` dengan penamaan:

```
babNN_kaiwa.mp3        # 1 file per bab, NN = 01..25
babNN_mondai1.mp3      # jumlah mondai bervariasi (2–4) per bab
babNN_mondai2.mp3
...
```

Daftar jumlah track per bab ada di `src/core/audio/manifest.ts`.

## Struktur

```
src/
  core/        # domain murni (tanpa React): text/normalize, text/terjemahan, audio/manifest, validation
  data/        # data per bab (bab01/…) + registry auto (import.meta.glob)
  features/    # vertical slice: flashcard, kuis
  store/       # Zustand persist: useProgress, useNotes
  pages/       # HomePage, BabDetailPage, NotFoundPage
  styles/      # tokens.css (@theme), paper.css (tema kertas)
tools/         # extract_bab.py (OCR), validate.ts
docs/          # BAB-TEMPLATE.md (checklist menambah bab)
PLAN.md        # rencana, keputusan, roadmap
```

Menambah bab: buat folder `src/data/babNN/` dengan `index.ts` (registry otomatis),
lalu `npm run validate` + `npm run build`.
