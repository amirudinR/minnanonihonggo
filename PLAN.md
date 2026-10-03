# PLAN — Aplikasi Belajar Minna no Nihongo 1 (Bab 1–25)

> ⚠️ **Agent/AI: baca `AGENTS.md` DULU** (aturan keras + daftar kesalahan yang sudah pernah terjadi). File ini = rencana/roadmap.

> Stack: **React 19 + TypeScript + Vite 6 + Tailwind CSS v4 + react-router v7 + Zustand**
> Offline penuh. Data per-bab 1 folder. Tampilan bergaya kertas, **bisa diisi jawaban, dikoreksi, dan dicoret-coret**.

---

## 0. Prinsip

1. **Tidak mengarang materi.** Semua isi dari folder sumber; bagian yang tidak ada → disembunyikan.
2. **Satu bab = satu folder** `src/data/babNN/`. Tambah bab tanpa menyentuh registry (`import.meta.glob`).
3. **Domain murni tanpa React** di `src/core/`. Logika bisa diuji tanpa UI.
4. **Pembelajaran mendalam**: setiap latihan bisa diisi, dikoreksi, dan diberi skor.
5. **Desain premium**: kertas fisik (tekstur, lubang, garis margin, tape), tipografi jelas, spasi lega.

---

## 1. Sumber Materi

Lokasi: `D:\A_bahasa_jepang\MINNA NO NIHONGO\Minna No Nihongo 1`

| File | Jenis | Hal. | Peran |
|---|---|---|---|
| `Minna No Nihongo I - Honsatsu (shokyuu).pdf` | Buku utama (scan) | 274 | 文型/例文/会話/練習/問題 |
| `Minna No Nihongo 1 (Indonesia).pdf` | Terjemahan ID (scan) | 204 | kosakata, terjemahan pola/kalimat/kaiwa |
| `Minna no Nihongo 1 (Jepang).pdf` | Edisi JP (scan) | 329 | verifikasi naskah |
| `Minna no Nihongo I - CD Text.pdf` | Indeks track CD | 6 | pemetaan audio |
| `Minna no Nihongo I - Choukai.pdf` | Listening (scan) | 131 | referensi |
| `Minna No Nihongo I - Hyoujun Mondaishuu.pdf` | Bank soal (scan) | 84 | referensi |
| `Minna No Nihongo 1 (Kanji Workbook).pdf` | Kanji Reference Booklet | 40 | per-Unit, **bukan** per-bab |
| `Minna no Nihongo Shokyu I Dai 2-Han Honsatsu Kanji-Kana.pdf` | Kanji-Kana (scan) | 326 | referensi |
| `CD Minna No Nihongo 1\*.mp3` | Audio | 87 | 25 kaiwa + 62 mondai |

**Semua PDF = hasil scan, tanpa text layer.** Ekstraksi memakai PyMuPDF (render) + rapidocr, dan **verifikasi visual** (render → dibaca). OCR model Mandarin **tidak akurat untuk kana** → semua teks Jepang wajib diverifikasi visual.

### Offset halaman (penting)
```
PDF index = halaman cetak + 21
Bab 1 = cetak 6–13 = PDF idx 27–34
Bab 2 = cetak 14 → idx 35
```

### Audio — invariant
- Setiap bab **tepat 1 kaiwa**.
- Jumlah **mondai bervariasi 2–4** (Bab 4 = 4; 14 bab = 2; 10 bab = 3). **Jangan hardcode `mondai1..3`.**
- Nama: `public/audio/babNN_kaiwa.mp3`, `babNN_mondaiN.mp3` (87 file, sudah diverifikasi identik dengan sumber).

---

## 2. Keputusan yang sudah diambil

| Topik | Keputusan |
|---|---|
| Framework | React (bukan Flutter) |
| Styling | Tailwind CSS v4 + `paper.css` kustom |
| Romaji | Kolom + toggle, **default tersembunyi**. Buku tidak menyediakan romaji; jika diisi → beri label "transliterasi app" |
| Kunci Mondai listening (1–3) | `kunciTersedia: false` (tidak ada di buku) → tampil instruksi + audio, tanpa baris "Jawaban:" kosong |
| Rangkuman Bab 1 | **Dihapus** (buku tidak punya). Field `rangkuman` hanya diisi bila buku memang punya |
| Kanji Workbook | Tidak dipakai untuk latihan per-bab (isinya per-Unit) |
| Fitur prioritas | Kuis isian + skor, furigana toggle, flashcard, TOC sticky + deep-link, progress per-bagian, **coretan/notes** |

---

## 3. Bug audit — terverifikasi (JANGAN di-reopen)

Beberapa subagent audit **salah**; ini sudah diverifikasi visual oleh render halaman:

| Item | Klaim agent | **Kebenaran (terverifikasi)** |
|---|---|---|
| `神戸病院` | 神戸医院 `こうべいん` | **神戸病院 `こうべびょういん`** (ruby `こうべ` + `びょういん` di atas 病院) |
| `ワット` | アット | **ワット** |
| Renshuu C 2) | サンダス | **サンタス** (crop `honsatsu_p033` jelas: ①②) |
| Dialog kaiwa | 佐藤 bilang 「初めまして」 | **Sato→Yamada(intro Miller)→Miller 4 baris→Sato 2 baris** (cocok 1:1 dgn terjemahan PDF Indonesia) |

### Yang BENAR-BENAR salah di data awal Bab 1 (sudah diperbaiki)
1. `renshuuB` no5 jawaban contoh → `アメリカ人` (bukan `会社員`).
2. `renshuuA` no4 → subjek `サントスさんは` dipertahankan + `あの 人（方）も`.
3. `k1-07/08` → caveat "tidak menyebut pekerjaan sendiri" milik 先生 (bukan 教師).
4. `k1-38` → hapus "(perangkat lunak)".
5. `reibun` no6 arti → "…bukan insinyur. **Dia dokter.**"

---

## 4. Arsitektur (modular)

```
src/
├── app/                    App.tsx (router + ScrollTop + RootLayout)
├── core/                   # domain murni, 0 React
│   ├── types/bab.ts
│   ├── text/normalize.ts       # stripEnumerators · canonical · isCorrect · countCorrect
│   ├── audio/manifest.ts       # (TODO) babNN → {kaiwa, mondai[]}
│   ├── scoring/score.ts        # hitungSkor
│   └── validation/schema.ts    # (TODO) lint data per-bab
├── data/
│   ├── index.ts                # import.meta.glob('./bab*/index.ts') → auto
│   └── bab01/  index · kosakata · bunpou · reibun · kaiwa · renshuu · mondai · konteks
├── features/                   # (TODO) vertical slice: notes, kuis, flashcard, furigana
├── store/
│   ├── useProgress.ts          # persist mnn1_progress_v1
│   └── useNotes.ts             # persist mnn1_notes_v1  ← coretan & jawaban
├── pages/  HomePage · BabDetailPage · NotFoundPage
├── styles/ tokens.css (@theme) · paper.css (kertas)
└── index.css  @import tailwindcss
```

**Konvensi**: alias `@/ → src/`. File < 200 baris. Tambah bab = mkdir + isi file (registry auto). Tambah fitur = 1 folder `features/x` + barrel.

---

## 5. Skema Data

```ts
Furigana { base, ruby }
KosaKata { id, kana, kanji?, romaji?, arti, audio?, catatan?, contoh?, furigana?, kategori? }
Bunpou   { no, pola, penjelasan, sub?: {judul,isi}[], contoh: string[], artiContoh: string[] }
ReibunItem { kalimat, arti, audio?, pembicara?, furigana? }
KaiwaItem  { no, pembicara, teks, arti?, furigana? }
Kaiwa      { judul?, audio?, dialog: KaiwaItem[] }
RenshuuItem{ no, soal, jawaban?, arti? }
MondaiItem { no, jenis, soal, pilihan?, jawaban?, audio?, audioButir?, arti?,
             instruksi?, kunciTersedia?, konteks?, furigana? }
Bunsho     { judul?, teks, arti? }
Bab        { no, topik, kosakata[], bunpou[], catatanTataBahasa?, reibun[], kaiwa|null,
             renshuuA/B/C[], mondai[], konteks?, bunsho[], rangkuman? }
```
Catatan: `mondai.jawaban` **opsional** (hindari `''` → "Jawaban:" kosong).

---

## 6. FITUR INTI: Isi → Koreksi → Skor → Coretan

### 6.1 State (sudah ada)
`src/store/useNotes.ts` (persist `mnn1_notes_v1`):
```ts
answers: Record<string,string>   // key: `b{babNo}-{section}-{no}`  (A/B/C/mondai)
catatan: Record<number,string>   // coretan bebas per bab
setAnswer · setCatatan
```

### 6.2 Isi jawaban (sudah ada)
- Setiap item **Renshuu A/B/C** dan **Mondai (kunciTersedia=true)** punya `textarea` → tersimpan otomatis.
- Urutan: soal → **textarea jawabanmu** → badge koreksi → `Lihat kunci` (reveal).

### 6.3 Koreksi otomatis (`core/text/normalize.ts` — sudah ada)
- `stripEnumerators()` buang `1)` `1.` `①` dst.
- `canonical()` sisakan hira/katakana/kanji/angka/latin, buang spasi & tanda baca.
- `isCorrect(user, expected)` = `u===e || e.includes(u)`.
- `countCorrect([{user,expected}])` → `{benar,total}`.

**UI koreksi:**
- per butir: badge `✅ Benar` / `❌ Belum cocok` (muncul saat terisi).
- per section: `Skor {section}: X benar dari Y`.

### 6.4 Coretan / catatan bebas (sudah ada)
- Section `✏️ Coretan & Catatanku` di akhir bab → `textarea` besar, tersimpan per-bab.

### 6.5 Yang masih TODO di fitur ini
- ✅ Total skor satu bab (gabungan A/B/C/Mondai) + sinkron `useProgress.setSkor` → badge "Skor" di Home. **SELESAI** (`KoreksiPanel`).
- 🔴 Tombol `Koreksi semua` per bab (isi badge sekaligus).
- 🔴 Input jawaban untuk **kolom "arti/terjemahan"** — user menulis terjemahan sendiri lalu dikoreksi vs. `arti` buku (soft-match, tanpa menghukum sinonim).
- 🔴 (Opsional) mode **kartu tulis tangan / canvas** untuk coret-coret gambar.

### 6.6 Koreksi terjemahan (rencana)
- Field `arti` yang ada di `ReibunItem`/`KaiwaItem` juga bisa diisi user → textarea "Terjemahanmu" → koreksi soft:
  - kemiripan token (Jaccard) + cek kata kunci penting.
  - hasil: "sangat dekat / cukup dekat / belum" (bukan benar-salah kaku).
- Tampilkan "total terjemahan benar" terpisah dari skor tata bahasa.

---

## 7. Roadmap Fitur "Gemuk"

| # | Fitur | Status |
|---|---|---|
| 1 | Coretan & isi jawaban | 🟢 ada (textarea + persist) |
| 2 | Koreksi otomatis per butir + skor per section | 🟢 ada |
| 3 | Total skor bab + sinkron badge Home | 🟢 ada (`KoreksiPanel`) |
| 4 | Koreksi terjemahan ("arti") | 🔴 |
| 5 | Furigana toggle (`<ruby>`) | 🟢 renderer + toggle ada |
| 6 | Romaji toggle | 🟢 ada (default hidden) |
| 7 | TOC sticky + deep-link `#id` | 🟢 ada |
| 8 | Flashcard kosakata | 🔴 |
| 9 | Progress per-bagian (checklist section) | 🔴 |
| 10 | Kuis pilihan ganda / pilih gambar | 🔴 |
| 11 | Manifest audio + pemutar kustom | 🔴 |

---

## 8. Desain Premium (rencana)

**Tema kertas (sudah sebagian di `paper.css`):** noise `feTurbulence`, lubang kertas kiri/kanan, garis margin merah (dgn `padding-left` yang tidak memotong teks), tape, page-curl, sudut membulat halus.

**Yang akan dipoles untuk kelas premium:**
- **Palet hangat** & token skala (spasi, radius, shadow, ukuran font) di `@theme`.
- **Header bab** = "kartu judul" dengan label bab, topik, aksen garis + stempel skor.
- **TOC** = chip tab menempel (sticky), state aktif.
- **Section** = kartu dengan judul bergaya tulisan tangan + ikon garis (bukan emoji berlebihan).
- **Tipografi Jepang**: `.jp` (ukuran & `letter-spacing` lebih besar), `.arti` (muted, italic, lebih kecil), `ruby rt` rapi. Line-height ≥ 1.7.
- **Tabel kosakata**: zebra, header sticky, tanpa border berat, kolom kana `nowrap`.
- **Feedback koreksi**: halus (bukan merah menyala) — hijau `#2f7d4f` / merah kalem `#b03030`, dgn ikon.
- **Micro-interaction**: `transition` 150ms, `hover` kartu, `:focus-visible` 3px, `prefers-reduced-motion`.
- **Responsif**: `@media (max-width:640px)` — tabel jadi kartu bertumpuk, TOC scroll horizontal, padding kertas mengecil.
- **A11y**: `<main>/<nav>`, skip-link, `lang="ja"` pada teks Jepang, `th scope` + `<caption>`, tap target ≥44px.
- **Kontras**: pertahankan palet aman (ink 10.58:1, ink-soft 5.92:1, accent 5.44:1) — jangan diubah sembarangan.

---

## 9. Checklist Publikasi Bab 2–25

Lihat `docs/BAB-TEMPLATE.md`. Ringkas:
- [ ] Offset halaman `idx = cetak + 21`, verifikasi visual tiap bagian.
- [ ] Kosakata lengkap + `catatan`/`contoh` bila ada; ROMAJI tidak dikarang (toggle + label bila perlu).
- [ ] `bunpou` = pola 文型; catatan tata bahasa → `catatanTataBahasa`.
- [ ] `kaiwa.dialog[].arti` diisi dari PDF Indonesia (1:1).
- [ ] Mondai: `kunciTersedia:false` untuk listening; `jawaban` diisi untuk yang ada kunci.
- [ ] Audio dipetakan dari manifest; **jumlah mondai = jumlah track**.
- [ ] `bunsho`/`rangkuman` hanya bila buku punya.
- [ ] `npm run typecheck` + `build` hijau; tidak ada string `\n` yang runtuh (pakai `TextWithNewlines`).

---

## 10. Milestones

| Fase | Isi | Status |
|---|---|---|
| F0 | docs + PLAN | 🟢 |
| F1 | Tailwind v4 + paper theme | 🟢 |
| F2 | core/ scaffolding (normalize, types, store) | 🟡 |
| F3 | data/bab01 modular + fix bug | 🟢 |
| F4 | BabDetailPage (TOC, details, furigana, audio) | 🟢 |
| F5 | HomePage (progress bar, badge, bab "segera") | 🟢 |
| F6 | **Fitur isi+koreksi+skor+coretan** | 🟢 (koreksi per butir, skor section, total bab, coretan) |
| F7 | Desain premium (polish) | 🟢 hero bab, cover Home, kertas bertekstur, TOC chip, mobile (tabel→kartu) |
| F8 | Koreksi terjemahan (arti) | 🔴 |
| F9 | Flashcard + kuis + progress per-bagian | 🔴 |
| F10 | Manifest audio + validator | 🔴 |
| F11 | Isi bab 2–25 | 🔴 |

---

## 11. Langkah Berikutnya (langsung)

1. Pasang badge koreksi + skor di **Mondai**; tambah **total skor bab** & sinkron ke `useProgress.setSkor` (badge Home).
2. Polish desain premium (§8).
3. `npm run typecheck` + `npm run build`.
4. Lanjut F8 (flashcard/kuis) & F9 (manifest + validator), lalu bab 2–25.

---

*Catatan: `PLAN.md` ini menggabungkan audit, keputusan, dan roadmap. Sumber kebenaran detail per-bab ada di `docs/BAB-TEMPLATE.md` + kode.*

---

## 12. Log Kritik & Perbaikan Tampilan (professional pass)

**Kritik (dari screenshot headless Chrome):**
1. 🔴 Font handwriting tidak ter-load → heading jatuh ke cursive (Comic Sans). **Fix:** self-host Kalam, Caveat, Inter (woff2) di public/fonts/ + @font-face offline.
2. 🔴 Ruby/furigana di tabel kosakata berantakan (reading panjang tumpang-tindih). **Fix:** hapus ruby dari tabel (kolom Kana sudah jadi bacaan); ruby tetap untuk kalimat kaiwa.
3. 🔴 Sel tabel "—" kosong & lebarnya tidak konsisten. **Fix:** 	able-layout: fixed + lebar kolom 30/24/auto, placeholder · redup.
4. 🔴 Toolbar checkbox polos. **Fix:** chip toggle (:has(input:checked)).
5. 🔴 Mobile: kolom Kana terpotong ("わた/し") karena 	d:nth-child(1){width:30%} ikut berlaku. **Fix:** reset width di media query + grid label/value.
6. 🔴 Mobile overflow horizontal. **Fix:** html,body{overflow-x:hidden;max-width:100%} + padding disesuaikan.
7. 🟡 Padding kertas kiri terlalu lebar. **Fix:** padding-left 76→56, margin line 48→38.
8. 🟡 Hero/nav/statistik ditata ulang (badge nomor Caveat, label PELAJARAN, stats 44 kosakata / 4 pola / 16 latihan, stempel SELESAI/SKOR).

**Verifikasi:** screenshot desktop 1200px & mobile 390px via Chrome headless → tabel bersih, kana tidak wrap, TOC scroll horizontal, font tampil benar.

**Catatan:** komponen juga kini punya baris statistik & label "Tampilan teks" (ditambahkan saat polishing).

---

## 13. Sesi "baiki dan sempurnakan semua" (F8-F10 + fix bug kritis)

**BUG KRITIS yang ditemukan & diperbaiki:**
- 🔴 **Infinite render loop** ("Maximum update depth exceeded") — KoreksiPanel memanggil setSkor() di useEffect, dan setSkor SELALU menulis lastScoreAt baru → state berubah → re-render → loop. **Fix:** setSkor/setSelesai dibuat **idempoten** (return state lama bila nilai tak berubah).
- 🔴 **Selector tidak stabil** — useProgress((s) => ...?.bagianSelesai ?? []) mengembalikan array literal baru tiap render (Zustand v5). **Fix:** kembalikan undefined/referensi asli, fallback di komponen.

**Bug lain yang diperbaiki:**
- --font-sans tidak memuat Inter (self-host jadi sia-sia) → di-wire ke "Inter".
- Inter & Caveat = **variable font**; 4 file duplikat byte-identik → dikonsolidasi 1 @font-face per family dengan weight range penuh (woff2-variations). Diverifikasi via fontTools (fvar axis wght).
- catatanTataBahasa no 5,6 → **1,2** (section terpisah).
- Duplikat rule .cover dihapus.
- normalize.isCorrect: substring 1-karakter lolos → dibuat matchLevel (tepat/dekat/belum) dengan ambang panjang + kecocokan token. Verdict UI jadi 3 tingkat (hijau/kuning/merah).
- Kaiwa baris 4 (初めまして) kurang furigana → ditambah (temuan validator).

**Fitur baru:**
- **F8 Koreksi terjemahan** (core/text/terjemahan.ts, TerjemahanList): Jaccard + cakupan kata kunci, level tepat/dekat/belum + bar kedekatan rata-rata. Dipasang di Reibun & Kaiwa.
- **F9 Flashcard** (features/flashcard/Flashcard.tsx): 2 arah (JP<->ID), acak, tandai Hafal/Ulangi, progres.
- **F9 Kuis** (features/kuis/Kuis.tsx): pilihan ganda dari kosakata, 4 opsi, feedback benar/salah, acak ulang.
- **F9 Progress per-bagian** (BagianProgress): checklist tiap section, tersimpan di useProgress.bagianSelesai.
- **F10 Manifest audio** (core/audio/manifest.ts) + **validator** (core/validation/schema.ts, tools/validate.ts, `npm run validate`).
- Mode Kosakata: chip Daftar / Flashcard / Kuis.

**Verifikasi:** typecheck ✅ build ✅ (CSS 33.23 kB) validate ✅ (Bab 1: 0 error 0 warning) · DOM render dicek via Chrome headless (tidak ada error boundary / loop) · screenshot desktop 1200px + mobile 390px OK.

