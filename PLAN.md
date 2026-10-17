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
Honsatsu: PDF idx = cetak + 21.  Bab mulai cetak (ToC, sumber kebenaran):
b1 6, b2 14, b3 22, b4 30, b5 38, b6 46(10hlm), b7 56, b8 64, b9 72, b10 80,
b11 88, b12 96, b13 104(10hlm), b14 114, b15 122, b16 130, b17 138, b18 146,
b19 154(10hlm), b20 164, b21 172, b22 180(10hlm), b23 190, b24 198, b25 206
Indonesia: idx = cetak + 20; Pelajaran N mulai cetak 6N+4 → idx 6N+24.
MNN2: Honsatsu idx = cetak + 18; Indonesia idx = cetak + 21 (bab42: 136→154, 108→129).
JANGAN pakai rumus 8N−2 untuk awal bab — meleset +2/+4/+6/+8 (bab 6/13/19/22 = 10 hal).
Bab 1 = cetak 6–13 = PDF idx 27–34 (idx 27).
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

---

## 14. Sesi "lengkapi MNN2" (Bab 26–50 → 25/25 SELESAI)

**Tujuan:** melengkapi data MNN2 yang tersisa sampai semua 50 bab tuntas.

**Yang dikerjakan:**
- **bab28** — dibuat `index.ts`, `kaiwa.ts`, `renshuu.ts`, `mondai.ts` (3→7 file). Perbaiki artefak OCR di `kosakata.ts` (「salon concoctik」→「salon kecantikan」, 「solanya」→「sebenarnya」, 土 romaji) dan `reibun.ts` (arti yang kacau: 「conscientious, menarik, dan reprinted」→「antusias, menarik, dan berpengalaman」, dll.).
- **bab37, bab41, bab46, bab50** — dibuat dari nol (7 file/bab): kosakata, bunpou + catatanTataBahasa, reibun, kaiwa, renshuuA/B/C, mondai.
- Sumber: render visual Honsatsu (`tmp/babNNjp/`) + PDF Indonesia (`tmp/babNNid*/`, offset `idx = cetak + 21`). Transkripsi kana/kanji **diverifikasi visual**, bukan OCR (stlh §13 AGENTS.md).

**Catatan edisi (penting):** untuk bab37 & bab41, 「Percakapan」 PDF Indonesia memakai dialog yang **BERBEDA** dari Honsatsu (bab37: ID「金閣寺」 vs JP「海を埋め立てて造られました」; bab41: ID「Selamat Menempuh Hidup Baru」 vs JP「荷物を 預かって いただけませんか」). Karena arti wajib 1:1 & tidak boleh dikarang, `kaiwa.dialog` mengikuti **Honsatsu** (= urutan audio), `arti` = terjemahan setia teks Honsatsu, diberi komentar `CATATAN EDISI` di file.

**Verifikasi akhir:**
```
validate  → 50 bab · 0 error · 0 warning ✅
typecheck → tsc --noEmit ✅
build     → ✓ built in 8.17s ✅ (warning chunk >500kB, pre-existing)
progress  → bab26..bab50 semua 7/7 OK ✅
screenshot→ bab/50 desktop 1200px + bab/37 mobile 390px ✅ (hero, tabel, furigana, TOC OK)
```

**Status:** MNN1 (bab1–25) + MNN2 (bab26–50) = **50/50 bab lengkap**.

## 15. Sesi audit fidelity data MNN2 (deep audit sebelum upload)

**Tujuan:** memastikan data bab 26–50 benar-benar sesuai PDF, bukan sekadar lolos validator.

**Temuan (semua diperbaiki):**
- **Menyalin `arti` menurut indeks antar edisi = bug sistematis.** Terverifikasi visual: PDF Indonesia dan Honsatsu TIDAK memakai set Contoh Kalimat/Percakapan yang sama (lihat AGENTS.md #14). Yang rusak: bab28 reibun (6 butir) + kaiwa (5 giliran tertukar), bab46 reibun (3), bab41 reibun (2), bab37 reibun (3). Semua kini memakai terjemahan setia dari JP + header `CATATAN EDISI`.
- **Transkripsi JP salah** (ketemu lewat zoom `dpi=400`, render `dpi=100` cuma 656px dan tidak terbaca): bab28 bunpou `遠い` → harus `速い` (ID: "cepat dan murah"); bab28 kaiwa tokoh `小川佐和子` → `小川幸子`; bab41 reibun `お血` → `お皿`; bab37 kaiwa `大阪から` → `大阪駅から`.
- **`arti` placeholder**: bab37 reibun (`（Pola: penemuan）`), bab50 reibun (2× `(Pola: …)`), dan bab50 kaiwa giliran 12 yang tidak sesuai JP.
- **12 furigana dengan `base` tidak ada di teks** → tidak pernah dirender karena `Ruby` memakai `teks.split(base)`. Diperbaiki; validator sekarang mendeteksinya sendiri (AGENTS.md #15).
- **Verifikasi positif:** kosakata bab28 (54 entri) serta reibun bab46 & bab50 cocok 100% dengan PDF. Dugaan `訳` (bukan `詫`) pada `申し訳` **ditolak** — memang begitu cetakannya.

**Verifikasi akhir:**
```
validate  → 50 bab · 0 error · 0 warning ✅
typecheck → tsc --noEmit ✅
build     → ✓ built in 6.59s ✅ (warning chunk >500kB, pre-existing)
```

**Belum diaudit tuntas:** kunci `jawaban` renshuu A/B/C + mondai (PDF tidak menyediakan kunci → jawaban itu milik app), `penjelasan`/`contoh` bunpou dari section "IV. Keterangan Tata Bahasa", serta baseline "kanji tanpa furigana" 103 temuan (§16 — sebagian besar memang sesuai cetakan buku).

---

## 16. Sesi "lengkapi + dark mode + rapikan audit" (2026-10)

**Tujuan:** lengkapi yang kurang di UI, tambah dark mode, rapikan skrip audit, percepat siklus verifikasi.

**Temuan kelengkapan (jawaban "apakah minna sudah lengkap?"):**
- Data **SUDAH lengkap**: 50/50 bab, `validate` 0 error/0 warning, audio 162/162 mp3 (0 hilang).
- **Bukan data, tapi UI:** `HomePage` hardcode `const TOTAL = 25` → Home hanya menampilkan Bab 1–25 padahal data 26–50 ada. **Bug nyata, diperbaiki.**
- `tools/audit_kelengkapan.ts` melaporkan **55 false positive**: `konteks` (field OPSIONAL), `renshuuC` (memang belum ada di bab 1–13; 練習C baru sejak 第14課), `bunpou tanpa contoh` (pola catatan panjang). Setelah dirapikan → **0 anomali**.

**Yang dikerjakan:**
1. **HomePage 50 bab** — `TOTAL = babs.length` (dinamis dari registry), judul "Minna no Nihongo I & II", sub "Bab 1–50".
2. **Dark mode** (toggle manual + simpan):
   - `tokens.css`: dua lapis — nilai runtime di `:root` (terang) & `html[data-theme='dark']` (gelap, palet **kertas gelap hangat**), lalu `@theme` memetakan ke Tailwind. Kanal RGB (`--k-rgb-*`) untuk rgba yang bisa ditukar tema.
   - `useTheme.ts` (persist `mnn1_theme_v1`, **idempoten**), mode `light|dark|system`, `applyTheme()` set `data-theme` + `color-scheme` ke `<html>`.
   - **Anti-FOUC** inline script di `index.html` (baca localStorage + `prefers-color-scheme` sebelum React render).
   - `features/theme/ThemeToggle.tsx` (☀/☾, target ≥44px) dipasang di header Home & toolbar BabDetail; sinkron ke perubahan preferensi OS selama mode `system`.
   - `paper.css`: 91 rgba + 21 hex hardcode dialihkan ke token tema (mis. `rgb(var(--k-rgb-ink) / a)`, verdict/ok/no/info jadi token).
3. **Audit bersih** (`tools/audit_kelengkapan.ts`): `konteks` tak lagi dilaporkan, `renshuuC` hanya dicek bab ≥14, pola bunpou tanpa contoh hanya bila penjelasan pendek.
4. **Percepat verifikasi** (`package.json`): `npm run check` (validate+typecheck, tanpa build) untuk loop cepat; `npm run check:full` (validate+typecheck+vite build) untuk gerbang "selesai"; `npm run audit`.

**Verifikasi akhir:**
```
check:full → validate 50 bab 0 error ✅ · tsc --noEmit ✅ · vite build ✓ built ✅ (CSS 39.74 kB, chunk >500kB pre-existing)
audit      → 50 bab · 0 anomali ✅
screenshot → Home desktop (gelap & terang), Bab 1 desktop+mobile (gelap & terang) OK
toggle     → klik mengubah data-theme + persist localStorage; mode awal "Sistem" ikut prefers-color-scheme ✅
```

**Baseline waktu:** `validate` ~2.9s · `typecheck` ~3.9s · `vite build` ~5.4s (build penuh) — total `check` ~7s, `check:full` ~12s.

**Catatan:** tidak ada dependensi UI baru (patuh AGENTS §1). Semua animasi tetap di `motion.css`.

## 17. Sesi Toolbox — verifikasi cepat + perbaikan fidelity mondai MNN2

**Tujuan:** (1) alat agar AI/dev cepat menemukan & memperbaiki kode; (2) perbaiki temuan fidelity sesi sebelumnya.

**Temuan fidelity (diverifikasi visual, render 1800px + zoom 400dpi Honsatsu MNN2 idx 92–93 / 100):**
- **bab34/mondai.ts salah total:** 問題1 & 問題2 (ikon telinga, tanpa cetakan) diisi kalimat karangan (campuran 課長/出張/てんぷら yang bukan milik 第34課); isi 問題5 (latihan tertulis 〜ないで) dipasangi audio 問題2; 問題3/4/6/7 hilang. → Ditulis ulang jadi **7 item = 問題1–7 apa adanya**: 1–2 listening (baris kosong, `kunciTersedia:false`), 3–4 & 7 tertulis sesuai cetakan (gambar + instruksi, tanpa kunci karena buku tak mencetak), 5–6 kunci milik app (`kunciTersedia:true`).
- **bab35/mondai.ts 問題1–2** sama-sama memuat kalimat karangan → diganti meniru struktur cetakan (dikte 4 baris / ○× 1–5). Pola bersih sudah dipakai bab33/36.
- **Kunci 問題5 bab34 yang lama juga karangan** (「うえで 本を 読まないで…」) → jawaban baru diturunkan dari 例 cetak (「…休まないで、働きます。」).

**Toolbox baru (tanpa dependensi baru):**
- `npm run map` → `docs/AI-MAP.md`: daftar modul + deskripsi (komentar/ekspor), peta dependensi, ringkasan 50 bab.
- `npm run find <kata>` → cari terkelompok KODE/DATA/TOOLS/DOKUMEN, output `file:baris`, multi-kata AND.
- `npm run verify` → check:full + `tools/screenshot.mjs` (Chrome headless: Home + bab1 + bab34 × desktop/mobile + cek DOM `Unexpected Application Error` / `Maximum update depth`).
- `npm run guard` → validate + audit + cek aturan keras (dependensi baru, hex/rgba hardcode di paper.css, `transition:` di paper.css, `TOTAL = 25`, `\ufffd` di data, audio ter-track git).
- `npm run add:bab <N>` → scaffold 8 file berisi checklist BAB-TEMPLATE.
- `.serena/project.yml`: `initial_prompt` (ringkasan arsitektur + aturan keras) + `ignored_paths` (tmp/dist/cache/audio).

**Quick wins kode:**
- Tipe bersama `Konteks` di `src/types/bab.ts` (hilangkan 2 definisi inline); `bab01/konteks.ts` jadi array (sebelumnya skalar → `index.ts` membungkus `[konteks]`).
- `BabDetailPage.tsx:375` `id.replace("A","")…` → `id.replace(/[ABC]$/, '')` (rapuh untuk id lain).
- Heading "Contoh:" tidak lagi dirender saat `contoh: []` (bab8/14/18/20) — catatan tata bahasa memang tanpa heading; kunci jawaban baru tampil setelah "Lihat kunci" (sudah diverifikasi lewat DOM).

**Verifikasi akhir:**
```
check:full → validate 50 bab 0 error 0 warning ✅ · tsc ✅ · build ✅ (CSS 41.59 kB, chunk >500kB pre-existing)
guard      → 7/7 aturan keras PASS ✅ (termasuk: 0 dependensi baru, paper.css token-only, audio tidak di git)
map        → 17 modul + 18 edge + 50 bab ✅
verify     → DOM Home/bab01/bab34 bersih; 6 screenshot desktop+mobile ✅
fidelity   → bab34: 7 item 問題1–7 render (domain-checked: 問題1–7, 例, 親子, ボタン, "Gambar (hls. 74)") ✅
bab08/14   → heading "Contoh:" hanya muncul utk pola yang punya contoh ✅
```

## 18. Sesi UI/UX Overhaul — kritik & penyempurnaan (P0+P1)

**Tujuan:** kritik tajam tampilan/UX belajar → perbaiki yang rusak. Mode plan → user pilih "gas" → eksekusi P0+P1 (P2 ditunda).

**P0 — perbaiki yang rusak:**
- **KoreksiPanel** hilang saat 0 soal terjawab (sebelumnya menampilkan "Terisi 0 dari 19 · Skor 0" yang menakutkan) + tambah baris "Kualitas terjemahan rata-rata" (reibun+kaiwa, metrik Jaccard terpisah dari skor exact-match) + tombol "Koreksi semua" (scroll ke panel) di ringkasan bab.
- **SoalInteraktif** disederhanakan: buang input romaji per-baris (20 input → 10), kunci jawaban multi-line kini `<textarea>` (sebelumnya single-line → matchLevel mustahil "tepat"), buang duplikasi "Arti Keseluruhan".
- **Flashcard:** tampilkan kanji di bawah kana (data sudah punya), tampilkan `contoh`+`catatan` di sisi belakang, shortcut keyboard (Spasi balik · ←/→ navigasi · H hafal · U ulangi), simpan hafal/ulangi per-bab di localStorage, tambah progress bar.
- **AudioBar:** + tombol Ulang (loop) + pilihan kecepatan 0.75×/1×/1.25× (krusial untuk listening).
- **Home:** + pencarian (nomor/topik/judul kaiwa) + filter Semua/MNN I/MNN II.

**P1 — perbaiki alur latihan:**
- **LatihanList:** "Lihat kunci" kini tampil inline 2 kolom "Jawabanmu | Kunci" (bukan details di bawah yang bikin layout loncat), + hint "Koreksi otomatis saat kamu mengetik."
- **Kuis:** + progress bar (terisi/total), feedback per soal ("✓ Benar!" / "✗ Yang benar: X"), simpan jawaban per-bab, mode "Ulangi N salah" setelah selesai.
- **Tab keyboard nav:** arrow-key untuk tab Daftar/Flashcard/Kuis (pola ARIA tablist).

**Verifikasi akhir:**
```
check:full → validate 50 bab 0 error 0 warning ✅ · tsc ✅ · build ✅ (6.17s)
guard      → 7/7 PASS ✅
map        → 17 modul + 18 edge + 50 bab ✅
visual     → flashcard kanji (せんせい+先生) & progress bar ✅ · kuis progress+feedback "✓ Benar!" ✅
             latihan hint + kunci inline (Jawabanmu|Kunci) ✅ · audio Ulang+speed ✅
             home cari "34"→1 hasil, "敬語"→1 hasil, filter MNN II→25 hasil ✅
             KoreksiPanel hilang saat 0 jawaban ✅ · tombol "Koreksi semua" ada ✅
```

**Catatan:** skor ≥60 tetap auto-SELESAI (keputusan user: pertahankan); kualitas terjemahan ditampilkan terpisah agar skor exact-match tidak tercampur metrik Jaccard. P2 (search tabel kosakata, nav bawah mobile, review salah, backup JSON) ditunda.

**Catatan:** screenshot script versi ini menembak **tema terlang/tersimpan di profile** (bukan paksa dark/light lewat CLI) — cek tema gelap tetap lewat ThemeToggle. Render visual dicek manual (bab34 + bab08 sesuai kunci).

---

## 19. Sesi "Latihan Menyusun Kalimat" (bunpou mendalam) — 2026

**Tujuan:** tiap bab dapat latihan **menyusun kata → kalimat** (sentence building) yang fokus ke pola bunpou bab itu, **minimal 20 soal/bab**. Plus **halaman soal campuran** semua bab (acak, pilih jumlah 20/50/semua) supaya user "tinggal memasangkan JP-nya".

**Keputusan user:**
- Scope: **semua bab 1–50 sekaligus** (≈1000+ soal).
- Interaksi: **dua-duanya** — klik-urut (default) + drag & drop.
- Halaman campuran: **per pilihan jumlah** (20 / 50 / semua), soal diacak, progres + skor sesi.

**Skema data baru** (`src/types/bab.ts`):
```ts
export interface SusunItem {
  id: string            // unik dalam bab, mis. "s1"
  arti: string          // arti Indonesia (petunjuk)
  kata: string[]        // kata-kata diacak (termasuk partikel)
  jawaban: string       // kalimat JP lengkap & benar
  fokus?: string        // pola bunpou, mis. "～は ～です"
  penjelasan?: string   // mini-learning setelah dikoreksi
}
```
`Bab.susun?: SusunItem[]` (opsional → 50 bab lama tetap valid, validator aman).

**Struktur file:**
- `src/data/babNN/susun.ts` (BARU, ≥20 soal) + dipasang di `babNN/index.ts`.
- `src/features/susun/` → `SoalMenyusun.tsx` (kartu 1 soal), `MenyusunLatihan.tsx` (per bab), `index.ts` (barrel).
- `src/pages/SusunCampuranPage.tsx` (halaman campuran) + route `/latihan/susun` di `App.tsx`.
- Section "Menyusun Kalimat" di `BabDetailPage.tsx` + link masuk dari HomePage.
- `core/validation/schema.ts` → cek `susun` (id unik, kata ≥2, jawaban non-kosong).

**Penyimpanan:** reuse `useNotes.answers` (key `b{babNo}-susun-{id}`, `campur-{babNo}-{id}`) → tanpa store baru, tetap idempoten.

**Aturan konten:** soal diturunkan dari `reibun` + `contoh` bunpou + `renshuu` bab itu (pola & kalimat yang MEMANG ada di buku); `arti` dari PDF Indonesia. Tidak mengarang tata bahasa. Tidak menyentuh audio & fakta terverifikasi §4.

**Status:** 🟡 rencana → eksekusi (fondasi → bab 1–50 → campuran → verifikasi).

---

## 20. Sesi "Halaman Partikel (助詞)" — referensi + ujian — 2026

**Tujuan:** halaman `/partikel` berisi (1) penjelasan detail semua partikel + terjemahan Indonesia, (2) tiap partikel menautkan **bab berapa** (dari bunpou bab 1–50), (3) bank soal + **mode ujian** pilihan ganda.

**Struktur file (baru):**
- `src/data/partikel.ts` — 23 partikel (は・が・を・に・へ・で・と・も・の・や・から/まで・だけ・しか・より/ほど・ながら・ので・のに・し・ても・たら/ば/なら/と・ばかり・か・ね/よ). Field: `bentuk`, `romaji`, `fungsi`, `penjelasan`, `contoh[]` (jp+id), `bab[]`, `kelompok`. Plus `KELOMPOK` + `babTerkait()`.
- `src/data/partikel-soal.ts` — 30 soal pilihan ganda (isi rumpang `___` + arti Indonesia + kunci + bab).
- `src/pages/PartikelPage.tsx` — 2 mode: **Daftar & Penjelasan** (kartu partikel, search, filter kelompok & bab) dan **Ujian Partikel** (intro → soal → skor, ambang lulus 70%).
- Route `/partikel` di `App.tsx` + kartu link "Partikel (助詞)" di HomePage.
- `paper.css` → blok `.partikel-*` (token-only, tanpa `transition`). Deep-link `#ujian` / `#daftar` / `#ujian-mulai`.

**Aturan konten:** partikel `bab[]` dipetakan dari pola bunpou tiap bab (scan otomatis `pola:` → deteksi partikel). Tidak mengarang tata bahasa; terjemahan contoh wajar. Tidak menyentuh audio & fakta terverifikasi §4.

**Verifikasi akhir:**
```
check:full → validate 50 bab 0 error 0 warning ✅ · tsc ✅ · build ✓ ✅
visual     → Desktop mode Daftar (kartu 2 kolom + chip "Ada di bab") ✅
             Mode Ujian (intro + 30 soal pilihan ganda + progress) ✅
             DOM /partikel bersih (tanpa error boundary / loop) ✅
catatan    → screenshot mobile "terpotong" adalah keterbatasan metode window-size
             headless (halaman lama pun sama), bukan bug layout halaman ini.
```

**Catatan:** port dev server mnn1 di lingkungan ini = **5174** (5173 dipakai proyek lain).

---

## 21. Sesi "Partikel lanjutan + desktop lebar" — 2026

**Tujuan:** (1) tambah partikel & soal; (2) desktop layar lebar tidak menyisakan ruang kosong besar.

**Partikel & soal tambahan:**
- `src/data/partikel.ts` 23 → **38 partikel**. Tambahan: にも/でも (Partikel+も), では/には/とは, って, など, とか, くらい/ぐらい, しか～ない (Perhatian), こそ, かしら/かな, のに (akhir), までに, ば/たら (syarat), ところ, ながら (Perhatian), たり～たり.
- `src/data/partikel-soal.ts` 30 → **50 soal** (p31–p50: や・ぐらい・しか・までに・とか・にも・では・ば・ところ・たり・か・って・こそ・など・が (pertentangan)・から・て・に・で).

**Layout desktop (keputusan user: "cukup perlebar kontainer global"):**
- `PartikelPage` `max-w-3xl` → **`max-w-6xl`**; `HomePage` `max-w-4xl` → `max-w-6xl`; `SusunCampuranPage` `max-w-3xl` → `max-w-5xl`. Plus `lg:p-10`.
- `paper.css`: `.partikel-grid` kini **3 kolom** pada `min-width: 1100px` (sebelumnya maks 2).
- BabDetail tetap `max-w-3xl` (teks bacaan lebih nyaman).

**Verifikasi mobile (device emulation sungguhan via CDP `Emulation.setDeviceMetricsOverride`):**
```
/partikel (Daftar)  → vw 320/360/390/414: overflowX=false, 0 pelanggar ✅
/partikel (Ujian)   → vw 360/390: overflowX=false, 0 pelanggar, 50 soal, opsi 1 kolom ✅
Home                → vw 320/390: bersih ✅
/latihan/susun      → vw 390: bersih ✅
/bab/1              → overflowX=false (elemen TOC horizontal-scroll memang by design, §10) ✅
```
**Catatan metode:** screenshot Chrome headless `--window-size` TIDAK benar-benar mengecilkan viewport CSS → tampak "terpotong" (halaman lama pun sama). Untuk verifikasi mobile sebenarnya gunakan CDP device metrics. Skrip sementara `tmp/cek_mobile.mjs` (sudah dihapus setelah pakai).

**Verifikasi akhir:** `check:full` → validate 50 bab 0 error 0 warning ✅ · tsc ✅ · build ✅.

**Port dev server:** kini bisa berpindah (5173/5174) — cek `--dump-dom`/title untuk memastikan instance mnn1.

## 22. Sesi "Latihan Susun: mode Ahli + auto-check + panel bacaan" — 2026-10-17

**Keluhan user (dengan screenshot):** halaman /latihan/susun harus di-scroll "sepanjang ini" → tidak profesional. Plus permintaan: menyusun **partikel**, bisa **pilih bab**, **auto-check** (tanpa tekan tombol), dan **keterangan** kanji/cara baca/katakana/hiragana setelah selesai.

**Akar masalah (terukur):** halaman merender **1.000 soal sekaligus** → 3.440 chip, **21.919 node DOM**, tinggi dokumen **259.443 px**.

**Yang dikerjakan:**
1. **Bug (Sprint 0)** — 4 temuan nyata, semua diperbaiki & diuji ulang lewat CDP:
   - chip jawaban **hilang** saat digeser (onDrop tanpa stopPropagation) → sekarang bertukar posisi, dan bisa menerima drop dari bank;
   - **klik cepat berturut-turut** hanya menyisakan chip terakhir (closure basi) → state lokal + updater fungsional + sinkron idempoten ke store;
   - panah ←/→ di tab **Flashcard** malah pindah bab → navigasi bab hanya saat tab Daftar;
   - **8 mondai mendengarkan** tanpa instruksi → diisi + jadi invariant ERROR di schema.
2. **Halaman susun = sesi** — satu soal per layar, pemilih bab (Semua/MNN I/MNN II/1–50), mode Dasar/Ahli, jumlah 10/20/50, progress bar, Sebelumnya/Berikutnya, ringkasan akhir + "Ulangi yang salah"/"Sesi baru", deep-link ?bab=&mode=&n=.
   - Hasil: **171 node DOM**, tinggi **~1.066 px**, overflowX=false pada vw 390.
3. **Auto-check** — begitu semua chip terpasang, koreksi jalan sendiri (dibuktikan: set jawaban benar → verdict "Benar! ✓" tanpa menekan Cek, panel keterangan muncul otomatis).
4. **Panel Keterangan** — kalimat kanji + furigana (<ruby>), cara baca hiragana penuh, daftar kanji (kanji+baca+arti), daftar katakana (+arti), pola.
5. **Mode Ahli** (core/text/segmentPartikel.ts) — 1.000 soal → **7.112 token** (dari 3.440), partikel & akhiran verba terpisah. Prinsip konservatif; akhiran kata sifat dimatikan karena terbukti salah pecah (がくせいじゃ → がくせ + い + じゃ).
6. **Kamus bacaan** (src/data/kamus/) — dibangun dari 2.149 kosakata 50 bab dengan **penjajaran okurigana** + override.ts untuk yang tak ter-cover. Hasil: **0 kanji tanpa bacaan** dari 1.000 soal (awalnya 143 soal/68 kata).
7. **Validator** `npm run validate:susun` (masuk `check`/`check:full`/`guard`).

**Verifikasi:** `validate` 50 bab 0 error/0 warning · `validate:susun` 0 error · `typecheck` bersih · `check:full` build OK · `guard` 7/7 PASS · CDP: BUG-1, BUG-2, auto-check, mobile 390 px (0 pelanggar overflow). Screenshot: `tmp/mobile-susun-ahli.png`, `tmp/desktop-susun-ahli.png`.

**Catatan & batas diketahui:** bacaan kanji **tanpa konteks** — kanji ber-on/kun ganda bisa salah (mis. 汚れ → きたなれ); tambahkan entri di override.ts bila ketemu. Desain masih memakai identitas kertas; modernisasi token/shell belum dikerjakan (masih rencana).


## 23. Sesi "Rapikan semua: BUG-4, pengecoh, bilah navigasi" — 2026-10-17

**Permintaan user:** "baiki semua ya bro" (cepat) atas temuan cek-permintaan: BUG-4, pengecoh + umpan balik per-chip, modernisasi desain, + rapikan (map & verify).

**1. BUG-4 — `matchLevel` longgar (jawaban SALAH dianggap "tepat")**
- Sebelum: `いきます` dianggap benar untuk `きます`; `アメリカ` benar untuk `アメリカ人`; `ミラー` benar untuk `ミラーさん`.
- Penyebab: cabang `u.includes(e) || e.includes(u)` menerima subset apa pun.
- Fix: substring tak lagi otomatis "tepat". Selisih harus **murni partikel/akhiran** (`buangAkhiran()` + himpunan `BOLEH_BEDA`). 14/14 kasus uji lulus; 8 di antaranya dikunci permanen di `tools/validate_susun.ts`.
- Dampak sadar: skor latihan lama bisa **turun** — itu benar, dulu menaikkan skor palsu.

**2. Pengecoh + umpan balik per-chip (mode Ahli)**
- `bankAhliDenganPengecoh()`: +2 partikel pengecoh (dijamin tidak sama dengan token), acak deterministik. 1.000 soal → **2.000 pengecoh**, dijaga validator.
- Umpan balik: chip wajib hijau/merah (+ garis bawah), **posisi salah pertama** diberi outline, verdict "kata ke-N masih salah". Pengecoh netral (garis putus-putus).
- Fix bug ikutan: auto-check dulu menunggu **bank habis** → jawaban BENAR tak terdeteksi. Sekarang = "semua token WAJIB terpasang".

**3. Modernisasi shell (identitas kertas dipertahankan)**
- `src/components/TopNav.tsx` + `.topnav*` (`paper.css`): bilah **lengket** — brand, tautan Beranda/Bab/Susun/Partikel, progres ringkas %, toggle tema (satu titik).
- Menghapus pola "← Daftar Bab" berulang di 3 halaman + `ThemeToggle` ganda (nav + toolbar Bab + cover Home).

**Verifikasi:** `validate` 50 bab 0/0 · `validate:susun` 0 error (1.000 soal, 7.296 token, 2.000 pengecoh) · `typecheck` bersih · `guard` 7/7 PASS · `check:full` build OK · `map` → 33 modul / 51 edge.
**CDP:** 7 rute × {390px mobile, 1280px desktop}: `overflowX=false`, **0 pelanggar**, 0 error boundary; `/partikel` tetap utuh (77 blok). Skenario benar → "Benar! ✓" + keterangan otomatis; skenario salah → chip merah + "kata ke-1 masih salah".

**Belum dikerjakan (sisa Sprint 1):** kalibrasi kontras token & audit dark mode, komponen bersama `.card/.btn/.seg/.pill` (masih Tailwind + `.chip`/`.button` lama), tipografi serif-judul/Inter-body/Caveat-aksen belum seragam.

---

## 24. Sesi "mudah dikembangkan & diperbaiki" — 2026-10-17

**Tujuan:** kurangi rasa sakit saat mengembangkan/memperbaiki (permintaan user), 6 fase.

**Fase 0 — amankan & rapikan.** README → Bab 1–50 + tabel perintah; pindahkan `session-*.md` (635 KB) + `tmp_out*.txt` ke `docs/arsip/`; hapus dead code `src/lib/scoring.ts` (`hitungSkor`) + 6 folder kosong. Commit `3fd0e0d`.

**Fase 1 — pecah `BabDetailPage`.** 963 → **168 baris**; 10 komponen + 14 seksi pindah ke `src/features/bab/`. Nol perubahan perilaku. Commit `7079b77`.

**Fase 2 — pecah `paper.css`.** 1331 baris → entry `@import` + **16 modul** di `src/styles/paper/` (urutan = cascade). `guard.ts` diperbarui memindai `paper.css + paper/*` (uji negatif lolos). **CSS hasil build byte-for-byte IDENTIK** (SHA256 sama). Commit `0f286c8`.

**Fase 3 — Vitest.** devDependency **`vitest`** (disetujui user; dicatat AGENTS §1.2 + allowlist guard). **66 tes / 8 file**: `core/*` (normalize — kasus BUG-4 dikunci, terjemahan, susun, segmentPartikel, baca, audio/manifest) + snapshot data (50 bab, 2149 kosakata, 1000 soal susun) + invariant partikel. `check:full` menjalankan test; `map.ts` mengabaikan `*.test.ts`. Commit `cfcd09a`.

**Fase 4 — satu bahasa visual.** `PemilihBab` (partikel) → `.seg`/`.seg__item` (konsisten Home/Susun/BabDetail) + scoped override mobile; hapus CSS `.flash__seg` yang sudah dead code. Commit `9be4b90`.

**Fase 5 — peta "ubah X → sentuh Y".** Bagian §10 di `AGENTS.md` (tabel modul penting + prinsip pemeliharaan). Commit menyusul.

**Catatan:** sebagian Fase 4 sudah dikerjakan sesi paralel (commit `be55211`, migrasi `.card`/`.seg` + token). Verifikasi: `check:full` (validate 0/0, 66 tes, build) · `guard` 7/7 · CDP mobile 360/390 `overflowX=false`.


## 24. Sesi "Fondasi token: kontras, elevasi, komponen bersama" — 2026-10-17

**Lanjutan Sprint 1** (modernisasi). Prinsip: **ukur, jangan tebak**.

**Audit terukur (CDP, fungsi kontras WCAG di browser):**
- `--k-ink-faint` **GAGAL AA**: 2.99 (terang) / 3.29 (gelap) — padahal dipakai di teks 10–11px (eyebrow edisi, subjudul brand).
- Pasangan lain lolos: `ink-soft` 5.48/6.95, tombol primary 4.90/6.16.

**Perbaikan:**
1. Kontras: `--k-ink-faint` → `#7d7568` (terang) / `#a99f8d` (gelap) = **4.55 / 4.88**, lulus AA.
2. Token baru (semua lewat `@theme` → Tailwind): `--k-surface-1/2/3` (elevasi), `--k-border`/`--k-border-soft`, `--k-ring`, `--k-shadow-card`, `--radius-sm/md/lg/pill`, `--shadow-card`.
3. Komponen bersama (token-only, tanpa `transition`): `.card`(+--2/--3), `.seg`/`.seg__item`/`.seg__item--aktif`, dan **fokus ring global** `:focus-visible{outline:3px solid var(--k-ring)}`.
4. Migrasi nyata: pilihan tunggal mode Dasar/Ahli & jumlah soal di `MenyusunLatihan` + `SusunCampuranPage` dari `.flash__seg`+`.chip` → `.seg`; ringkasan sesi pakai `.card`.

**Verifikasi:** `typecheck` bersih · `guard` 7/7 PASS (termasuk "paper.css hanya token" & "tanpa transition") · `check:full` build OK · `map` 33 modul. CDP: 3 halaman × {desktop gelap, mobile terang} → `overflowX=false`, 0 pelanggar, 0 error boundary; `.seg__item` tinggi 32px, aktif benar; kontras diukur ulang & lulus.

**Sengaja TIDAK diubah:** identitas kertas, blok `.partikel-*` (77 kartu utuh), fakta §4, key localStorage.
**Sisa opsional:** menyamakan tipografi (serif judul / Inter body / Caveat aksen) & migrasi `.seg`/`.card` ke halaman Partikel/Kuis/Flashcard (belum perlu — tidak ada regresi).


## 25. Sesi "Tipografi + migrasi komponen bersama ke seluruh app" — 2026-10-17

**Sisa opsional Sprint 1, dikerjakan.**

**1. Tipografi — diaudit, ternyata SUDAH benar (tidak diubah, hanya ditegaskan).**
Diukur lewat CDP: h1/hero = serif (`--font-display`), h2/section = Kalam (`--font-title`), nomor bab + isian latihan = Caveat (`--font-hand`), semua teks isi/UI = Inter (`--font-sans`). Jadi **tidak** ada judul besar bertulis tangan — Caveat/Kalam memang hanya aksen (sesuai maksud awal). Peran ini ditulis sebagai komentar tegas di blok tipografi `paper.css` supaya tidak diacak-acak nanti. **Tidak ada perubahan visual** (dihindari ubah yang belum tentu lebih baik).

**2. Migrasi `.flash__seg`+`.chip` → `.seg`/`.seg__item` (5 tempat, kini 0 sisa):**
- `Flashcard` (arah kartu), `BabDetailPage` ×2 (tab kosakata; toolbar koreksi terjemahan → `.toolbar`), `HomePage` (filter fase), `PartikelPage` (tab Daftar/Ujian).
- CSS mobile `@media` ditambah untuk `.seg`/`.seg__item` (sebelumnya hanya `.flash__seg`) agar melebar penuh & rapi di 390px.
- Definisi `.flash__seg` **sengaja dibiarkan** di `paper.css` (matang, dan salah satu warnanya dipakai jalur bersama) — tapi **jangan** pakai lagi di komponen baru.

**Verifikasi:** `typecheck` bersih · `guard` 7/7 PASS · `check:full` build OK · `map` 32 modul · CDP **5 rute × {390px mobile terang, 1280px desktop gelap}: `overflowX=false`, 0 pelanggar, 0 error boundary**; `.seg__item` ≥32px; `/partikel` 38 kartu utuh.

**Status Sprint 1 (modernisasi): SELESAI.** Sisa sepenuhnya opsional: menyeragamkan `.partikel-card`/`.koreksi`/`flash__card` ke `.card`, dan code-split bundle (peringatan 500kB dari vite, sudah ada sebelum sesi ini).


## 26. Sesi "Nutup Sprint 1 + Vitest + pecah paper.css & BabDetailPage" — 2026-10-17

**Catatan penting:** pekerjaan besar ini **sudah dikerjakan** di 4 commit sebelum sesi ini ditutup, tapi `AGENTS.md` + `PLAN.md` belum ikut ter-commit (working tree kotor). Sesi ini: **verifikasi + tutup**.

**Yang sudah ada (dari commit):**
- `7079b77` — `BabDetailPage.tsx` dipecah **963 → 168 baris**, isinya jadi `src/features/bab/` (25 file: `Section`, `AudioBar`, `Ruby`, `KosakataSection`, `KoreksiPanel`, … + `sectionsOf.ts`).
- `0f286c8` — `paper.css` (1.400+ baris) dipecah jadi **16 modul** di `src/styles/paper/` (`00-fonts` … `90-partikel`); `paper.css` kini murni entry `@import` (**urutan = cascade**).
- `cfcd09a` — **Vitest** (devDependency disetujui) + **66 tes**: `core/*` (normalize, terjemahan, susun, segmentPartikel, baca, manifest) + snapshot data (registry 50 bab) + invariant partikel.
- `9be4b90` — pemilih bab partikel pakai `.seg`; CSS `.flash__seg` dihapus (dead code).

**Verifikasi sesi ini (semua lolos):**
- `npm run test` → **8 file, 66 tes, 0 gagal** (1.82s).
- `typecheck` bersih · `guard` **7/7 PASS** (guard sudah mengenali `paper/*`) · `check:full` build OK.
- CDP **6 rute × {390px mobile terang, 1280px desktop gelap}**: `overflowX=false`, **0 pelanggar**, 0 error boundary; `/partikel` 38 kartu utuh; `.seg__item` ≥32px; `/bab/*` hero + 20 soal susun utuh.

**Kesimpulan: Sprint 1 (modernisasi) SELESAI.** Sisa sepenuhnya opsional: penyeragaman `.partikel-card`/`.koreksi`/`flash__card` → `.card`, dan code-split bundle (peringatan 500kB Vite — sudah ada sebelum sesi ini, bukan regresi).

---

## 26. Sesi "percepat bundel: muat bab per-bab" — 2026-10-17

**Tujuan:** aplikasi lebih cepat (permintaan user), bukan sekadar enak dirawat.

**F1 — ukur dulu.** Bundle = **1.987 kB (gzip 524 kB) dalam SATU chunk**; Vite memperingatkan > 500 kB. `src/data` = **1,83 dari 2,00 MiB sumber (91%)**. Membuka Home pun mengunduh 50 bab + partikel.

**Akar masalah.** `src/data/index.ts` memakai `import.meta.glob(..., { eager: true })` → semua modul bab *terjangkau statis*, jadi Rollup menggabung modul yang juga diimpor dinamis menjadi satu chunk 1,49 MB. Dibuktikan dengan menonaktifkan eager glob: hasil `statis=0 dinamis=50` (chunk raksasa hilang).

**Perbaikan (F2–F5).**
- `src/data/load.ts` — `loadBab`/`loadSemuaBab` (dinamis → 1 chunk per bab).
- `src/data/meta.ts` (+`npm run gen:meta`) — ringkasan bab untuk Home & TopNav.
- `src/data/kamus/terbangun.ts` (+`npm run gen:kamus`) — kamus dibekukan (183 kB), tidak lagi dihitung dari `babs` saat runtime.
- `src/data/all.ts` — eager glob **khusus tes**; kode aplikasi dilarang impor (dijaga `guard`).
- `src/App.tsx` — rute `React.lazy` + `Suspense`; `BabDetailPage` memuat 1 bab dinamis; `SusunCampuranPage` pakai `loadSemuaBab()` + status "Memuat…".
- `vite.config.ts` — `manualChunks` per bab. Tes baru: sinkronisasi `meta` & kamus (total 74 tes).

**Hasil terukur (gzip, `vite preview` + CDP):**

| Halaman | Sebelum | Sesudah |
|---|---|---|
| Home `/` | 524 kB | **108 kB** (−79%) |
| `/bab/34` | 524 kB | **193 kB** (−63%) |
| `/partikel` | 524 kB | **131 kB** (−75%) |
| `/latihan/susun` | 524 kB | 588 kB (+12%; memang perlu 50 bab) |

1 chunk → **58 chunk**; chunk bab terbesar 43 kB; waktu build ~sama (5,4 s).

**Verifikasi:** `check:full` (validate 0/0 · 74 tes · build) · `guard` **8/8** · CDP 390 px: `overflowX=false` & tanpa error di `/`, `/bab/34`, `/latihan/susun`, `/partikel`, `/bab/999`. Commit `c6fdf01` (ikut memuat WIP sesi paralel yang tersambung agar pohon konsisten). Pelajaran dicatat di `AGENTS.md` §3 #30.

**Lanjutan (pangkas halaman latihan campuran).** Halaman itu ternyata memuat **bab penuh**, padahal hanya perlu `susun` + `mondai` (untuk tab Mendengarkan). Ditambahkan `src/data/latihan-campuran.ts` (`loadLatihanCampuran`, tipe `BabLatihan`) dan `vite.config.ts` memisah `susun.ts`/`mondai.ts` ke chunk `ringan-babNN` — sehingga yang penuh hanya diunduh saat membuka bab.

| Halaman | Sebelum | Selesai |
|---|---|---|
| `/latihan/susun` | 524 kB | **338 kB** (−35%) |

`/bab/34` 196 kB, `/partikel` 131 kB, Home 108 kB. Tes anti-drift baru (`latihan-campuran.test.ts`) memastikan data ringan **identik** dengan data bab penuh → **76 tes**. `check:full` ✅ · `guard` 8/8 ✅ · CDP 390 px tanpa error (susun 4 chip, `/bab/34` 20 soal).



## 27. Sesi "Audio Choukai 聴解 MNN II + latihan Mendengarkan" — 2026-10-17

**Temuan sumber audio (diverifikasi, bukan tebakan).** Folder
`D:\A_bahasa_jepang\MINNA NO NIHONGO` dibandingkan dengan `public/audio` pakai **MD5 payload**:
- `CD Minna No Nihongo 1` (87) + `CD Minna No Nihongo 2` (75) = **162/162 IDENTIK byte**
  dengan `public/audio` → app sudah punya **kaiwa + mondai lengkap**.
- Durasikan **menipu**: pencocokan durasi sempat memberi pasangan ngawur (`003 ≈ bab06_mondai1`).
  Pelajaran → AGENTS §3 #31.
- **Choukai (聴解) ADA**, hanya MNN II: `Minna 2 choukai\3E MNN II Choukai CD1-3`.
  Bab dari nama file (`第NN課`), pasti. 1 file tanpa bab dilewati, `._*` dibuang. MNN1 tidak punya choukai.

**Dikerjakan:**
1. Salin **107 track choukai** → `public/audio/babNN_choukaiM.mp3` (280 MB, lokal; tetap gitignored).
2. `manifest.ts`: `CHOUKAI_COUNT` (26-50, total 107), `BabAudio.choukai[]`, `adaChoukai(bab)`.
3. UI: `features/bab/ChoukaiSection.tsx` (seksi Choukai + nomor track + AudioBar) untuk Bab 26-50; masuk TOC.
4. `features/susun/DengarkanLatihan.tsx`: tab **Mendengarkan** di `/latihan/susun` — 219 track
   (112 mondai + 107 choukai), filter Semua/Mondai/Choukai, pemilih bab, deep-link `?t=dengar`.
5. `AudioBar`: `preload="none"` → **`metadata`** + status Memuat + **fallback "Audio belum tersedia"**
   (menyebut nama file) untuk kasus deploy/clone tanpa `public/audio`.
6. `audit_kelengkapan.ts` ikut menghitung choukai; `manifest.test.ts` +3 (total 74 tes).

**Verifikasi:** `audit` **269 mp3 / manifest 269, 0 hilang, 0 tak dirujuk** · `test` 74 hijau ·
`typecheck` bersih · `guard` 8/8 PASS · `check:full` build OK · CDP 390px mobile gelap + 1280px:
7 rute `overflowX=false`, 0 pelanggar, 0 error; Bab 26 = 4 track choukai (HTTP 200); Bab 1/25 = tanpa choukai;
fallback diuji nyata (file di-rename sementara → pesan muncul, lalu dikembalikan).

**CATATAN:** working tree saat itu juga memuat kerja agent paralel (code-split data bab, §3 #30) —
ikut terverifikasi hijau (guard/tests/build) dan disebut di pesan commit.

## 28. Sesi "Kuis Tata Bahasa — 5 soal per pola" (batch 1: bab 1-5) — 2026-10-17

**Permintaan user:** tiap bab punya beberapa bunpou; buat 5 soal untuk SETIAP pola,
dan tulis total keseluruhan pola semua bab. Keputusan user: cakupan = 文型 + Catatan
Tata Bahasa, bentuk = pilihan ganda, tempat = tab Kuis di seksi Bunpou, mulai batch 1.

**Hitungan (dari data, bukan perkiraan):** 176 pola 文型 + 161 catatan = **337 pola**
(bab 1-50) -> 5 soal/pola = **1.685 soal**. Sebaran pola/bab: min 2, maks 15 (bab 8).

**Batch 1 selesai (bab 1-5):** 36 pola -> **180 soal**.
- `src/types/bab.ts`: + `SoalBunpou` + field opsional `Bab.bunpouSoal`.
- `src/data/bab01..05/bunpouSoal.ts` (baru) + `index.ts` masing-masing.
- `src/features/bab/KuisBunpou.tsx` (baru) + tab `Pola / Kuis — 5 soal/pola` di `PolaSection.tsx`
  (dipakai seksi Bunpou `grup=bunpou` & Catatan Tata Bahasa `grup=catatan`).
- `BabDetailPage` kirim `babNo` + slice soal; `features/bab/index.ts` export baru.
- `tools/validate_bunpou.ts` + script `validate:bunpou` (masuk check, check:full, guard).
- `src/data/bunpouSoal.test.ts` (+3 tes) - `70-kuis.css` blok `.kuis-bunpou__*`.
- Docs: AGENTS §2 (aturan data), §3c-2 (detail, jangan diregresi), §6b, §10.

**Sumber soal:** `contoh`/`artiContoh`/`reibun` bab itu + kosakata bab yang sama; pola tidak
diubah. Jawaban "（なし）" dipakai bila pola memang tanpa partikel (mis. 「いつ」 tak pakai に).

**Verifikasi:** validate:bunpou 36 pola/180 soal 0 masalah (validator sempat menangkap 5 soal
"cara baca" tanpa rumpang `___` -> dibetulkan) · typecheck bersih · test 79 hijau (11 file) ·
guard 8/8 PASS termasuk step baru · CDP 1280px & 390px: tab Kuis muncul, 5 soal/pola, 4 opsi,
auto-check benar/salah (hijau/merah + kunci garis putus-putus), ganti pola memuat 5 soal baru,
bab 6 (belum ber-soal) tanpa tab, `overflowX=false` 0 pelanggar, 0 error.

**Menunggu penilaian user sebelum lanjut batch berikutnya (bab 6-10).**
## 29. Sesi "Kuis Tata Bahasa — selesai 50 bab / 337 pola / 1.685 soal" — 2026-10-17

**Permintaan user:** "lanjut sampai selesai" (lanjutkan batch berikutnya sampai semua bab selesai).

**Cara kerja (batch 5 bab, 9 batch):** tiap batch dikerjakan agent paralel (3 agent sekaligus)
dengan brief tertulis (`tmp/brief-bunpou.md`) + contoh acuan `src/data/bab01/bunpouSoal.ts`.
Tiap agent: baca `bunpou.ts` bab-nya → tulis `bunpouSoal.ts` (tepat 5 soal/pola) → daftarkan di
`index.ts` → jalankan `npx tsx tools/validate_bunpou.ts <bab...>` + `npm run typecheck`.
**Validator diberi argumen nomor bab** supaya beberapa agent bisa bekerja paralel tanpa saling ganggu.

**Hasil per batch:**
- bab 6-20 (141 pola → 705 soal), bab 21-35 (101 pola → 505), bab 36-50 (95 pola → 475).
- Total akhir: **50 bab · 337 pola · 1.685 soal** (MNN I bab 1-25 = 880 · MNN II bab 26-50 = 805).
- `src/data/bunpouSoal.test.ts` diperbarui: snapshot 337 pola/1.685 soal, 50 bab ber-soal,
  MNN I 880 / MNN II 805 (80 tes hijau).

**Dua temuan mutu saat pemeriksaan (keduanya diperbaiki + dijaga):**
1. **Jawaban tercetak di soal (giveaway)** — 36 soal (mis. `電話は ___です。……2階です.`), 27 di
   antaranya dipangkas (buang respons `……`) & 9 ditulis ulang (rumpang dipindah). Pangkasan
   membuat Bab 3 catatan 2 kembar persis dengan 文型 2 -> 8 soal Bab 3 ditulis ulang (kalimat unik
   per pola); Bab 8 catatan 2 & 6 kembar dengan 文型 1-4 -> 7 soal dibedakan. Skor akhir: sisa
   **7 kandidat giveaway** (drill ubah-kalimat + 1 false positive `ます` di `お願いします`).
   `validate:bunpou` sekarang **menghitung giveaway & GAGAL bila > baseline 8** (AGENTS §3 #32).
2. **Opsi jawaban selalu posisi A** — data ditulis "jawaban dulu" (1.685/1.685 di `pilihan[0]`),
   jadi kuis bisa dijawab selalu A. Fix: `acakOpsi(id, pilihan)` di `KuisBunpou` — FNV-1a +
   mulberry32, deterministik; sebaran terukur **25,3 / 24,5 / 24,0 / 26,2 %** (AGENTS §3 #33).
   Data TIDAK diacak manual (tetap jawaban-dulu = mudah di-review).

**Verifikasi:** `validate:bunpou` 337 pola/1.685 soal, giveaway 7 (baseline 8), 0 masalah ·
`typecheck` bersih · `test` **80 hijau** (11 file) · `guard` 8/8 PASS · `check:full` build OK ·
CDP 1280px & 390px gelap: tab Kuis di Bunpou & Catatan, chip = jumlah pola (bab 37/49 = 7 chip),
5 soal × 4 opsi, auto-check hijau/merah + kunci putus-putus, posisi jawaban bervariasi
(bab 6 = 1/1/2/1/0 · bab 49 = 0/3/3/3/2), `overflowX=false` 0 pelanggar, 0 error boundary.

**Docs:** AGENTS header + §3 #32/#33 + §6b (validate:bunpou: + giveaway & argumen bab) +
§3c-2 (LENGKAP 50 bab + catatan pengacakan opsi) + §2/§10; PLAN sesi ini.

**Tidak ada perubahan data bab**, tidak ada key localStorage baru (pakai `bunpou-*` yang sudah ada),
`public/audio` tetap tidak di-commit.
