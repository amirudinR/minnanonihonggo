# AGENTS.md — Aturan Kerja untuk AI/Agent

> **Baca ini DULU sebelum mengubah apa pun.**
> File ini adalah sumber kebenaran aturan + daftar kesalahan yang **sudah pernah terjadi**.
> Tujuan: agent baru **tidak mengulang kesalahan yang sama**.
> Pelengkap: `PLAN.md` (rencana & keputusan), `docs/BAB-TEMPLATE.md` (checklist per bab), `README.md` (cara jalan).
>
> Terakhir diperbarui: sesi **„rapikan semua: BUG-4, pengecoh, bilah navigasi"** (§3 #28–#29, §3d) — `matchLevel` diperketat (jawaban salah tak lagi dianggap benar), mode Ahli dapat **2 partikel pengecoh** + **umpan balik per-chip** (hijau/merah + posisi salah), dan app kini punya **bilah navigasi lengket** menggantikan tombol "← Daftar Bab" per halaman. Semua dokumen (`AGENTS.md`, `PLAN.md`, `docs/AI-MAP.md`) disinkronkan.
> Sebelumnya: sesi **„latihan susun mode Ahli + auto-check + panel bacaan + sesi 20 soal"** (§3 #24–#27, §3c) — halaman `/latihan/susun` tidak lagi merender 1.000 soal, chip bisa digeser tanpa hilang, mode Ahli menyusun partikel & akhiran verba, dan tiap kanji punya cara baca (dijaga `validate:susun`).
> Sebelumnya: sesi **„keterangan partikel dari buku MNN 1 & 2 + refactor modular"** (§3 #20–#23, §3b) — data `partikel` dipecah jadi `src/data/partikel/`, invariant dijaga `validate:partikel`, +4 bab partikel dikoreksi dari buku.

---

## 0. Konteks proyek (ringkas)

Aplikasi belajar **Minna no Nihongo 1 (Bab 1–25)**, offline, bergaya buku catatan kertas. MNN2 (Bab 26–50) memakai skema sama dan **sudah lengkap** (50/50 bab).
Stack: **React 19 + TypeScript + Vite 6 + Tailwind CSS v4 (`@tailwindcss/vite`) + react-router v7 + Zustand**. Data per bab di `src/data/babNN/` (registry otomatis via `import.meta.glob`).

Perintah:
```bash
npm run dev        # port 5173
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + vite build
npm run validate   # validasi data bab (tsx tools/validate.ts)
npm run gen:meta   # regenerate src/data/meta.ts (ringkasan bab untuk Home/TopNav)
npm run gen:kamus  # regenerate src/data/kamus/terbangun.ts (kamus kanji)
npm run test       # tes unit Vitest (core/* + snapshot data) — cepat, tanpa build
npm run validate:susun # invariant data susun + kamus bacaan kanji
npm run audit      # audit kelengkapan data bab
npm run check      # validate (+partikel+susun) + typecheck (loop cepat, TANPA build)
npm run check:full # validate (+partikel+susun) + typecheck + vite build (gerbang "selesai")
npm run verify     # check:full + screenshot + cek error boundary (butuh dev server)
npm run guard      # validate + audit + cek aturan keras §1
npm run map        # regenerate docs/AI-MAP.md
npm run find <x>   # cari di kode/data/docs
npm run add:bab N  # scaffold bab baru
```

---

## 1. ATURAN KERAS (jangan dilanggar)

1. **Jangan gitignore `public/audio` dihapus.** Audio (164 MB, hak cipta) sengaja TIDAK di-commit. Jangan `git add -f` audio, jangan push mp3.
2. **Jangan menambah dependensi UI** (tanpa izin). Tema dibuat dengan CSS murni + token. `tsx` hanya untuk tooling validasi (devDependency). **`vitest` disetujui** sebagai devDependency untuk tes (jangan tambah runner lain tanpa izin).
3. **Tailwind v4 CSS-first** — TIDAK ADA `tailwind.config.js` / `postcss.config.js`. Token di `src/styles/tokens.css` (`@theme`). Jangan membuat file config Tailwind.
4. **Jangan "memperbaiki" fakta yang sudah diverifikasi** di §4 dan `docs/BAB-TEMPLATE.md` §5. Agent sebelumnya sudah beberapa kali salah dan "membetulkan" data yang sebenarnya benar.
5. **Setiap `setState` ke store Zustand harus idempoten** (lihat §3 kesalahan #1). Ini pernah menyebabkan *infinite render loop* yang mematikan halaman.
6. **Selalu jalankan `npm run typecheck` + `npm run build` + `npm run validate`** sebelum menyatakan selesai. Jangan mengklaim "beres" tanpa bukti. Untuk loop kerja cepat pakai `npm run check` (tanpa build); gerbang akhir tetap `npm run check:full`.
7. **Verifikasi visual nyata** untuk perubahan tampilan (screenshot), bukan sekadar "seharusnya tampil".
8. **Jangan commit kunci/rahasia.** Jangan `git config` global, jangan force-push ke `main`.

---

## 2. Aturan data (per bab)

- **Offset halaman PDF: `idx = halaman cetak + 21`.** Bab 1 = cetak 6–13 = idx 27–34.
- **Romaji TIDAK dicetak di buku.** Kolom romaji default tersembunyi; kalau diisi, itu *transliterasi app*, jangan anggap data buku.
- `bunpou` = pola 文型 buku (umumnya 4). Catatan tata bahasa (mis. `の`, `～さん`) masuk `catatanTataBahasa` **(penomoran mulai dari 1, TERPISAH dari bunpou)**.
- `kaiwa.dialog[].arti` **wajib** diisi dari PDF terjemahan Indonesia (1:1, bukan karangan).
- **Pola kalimat (`bunpou`)**: penjelasan `pola`/`contoh`/`arti` WAJIB diambil dari PDF Indonesia, section **"Terjemahan Pola Kalimat"** (pola Indonesia paling jelas di situ). Jangan mengandalkan terjemahan karangan dari buku JP.
- Audio: **1 kaiwa per bab (selalu tepat 1)**; mondai **bervariasi 2–4** (Bab 4 = 4). **JANGAN hardcode mondai1..3** — pakai `src/core/audio/manifest.ts`.
- Mondai mendengarkan (listening): `kunciTersedia:false` + `instruksi`, **bukan** `jawaban:''`.
- `bunsho` / `rangkuman`: hanya diisi bila buku punya; kalau tidak → `[]` / jangan ditaruh.
- Kalimat dengan kanji **wajib punya furigana** (validator akan memperingatkan).

---

## 3. Kesalahan yang SUDAH PERNAH TERJADI (jangan ulangi)

### #1 — Infinite render loop (KRITIS) 🔴
**Gejala:** layar putih + `Maximum update depth exceeded`.
**Sebab:** `KoreksiPanel` memanggil `setSkor()` di `useEffect`, dan `setSkor` **selalu** menulis `lastScoreAt` baru → state selalu berubah → re-render → effect jalan lagi → loop.
**Fix (jangan di-regresi):**
- `setSkor`/`setSelesai` di `src/store/useProgress.ts` **idempoten** — return state lama bila nilai tak berubah.
- **Selector Zustand tidak boleh mengembalikan literal baru tiap render**, mis. `(s) => ...?.bagianSelesai ?? []` ❌. Kembalikan `undefined`/referensi asli, fallback (`?? []`) dipindah ke dalam komponen.

### #2 — Font tidak ter-load (heading jatuh ke Comic Sans) 🔴
**Sebab:** `@font-face` ada tapi `--font-sans` tidak memuat `"Inter"`.
**Fix:** token WAJIB menyertakan font self-host. `--font-sans: "Inter", …`.

### #3 — Inter & Caveat adalah VARIABLE font 🔴
**Sebab:** `Inter-400/500/600/700.woff2` **byte-identik** (file sama disalin), begitu juga Caveat. Diverifikasi lewat `fontTools` (`fvar` axis `wght`; Inter 100–900, Caveat 400–700). Kalam memang static (400 & 700 beda).
**Fix:** satu `@font-face` per family variable dengan weight range penuh (`font-weight: 100 900` + format `woff2-variations`). Jangan bikin 4 deklarasi.

### #4 — Substring match terlalu longgar 🔴
**Sebab:** `isCorrect` lama = `e.includes(u)` → user mengetik 1 karakter ("あ") dianggap benar.
**Fix:** `matchLevel()` (tepat/dekat/belum) dengan ambang panjang minimum + kecocokan token. `isCorrect` = `matchLevel === 'tepat'`.

### #5 — Validator salah bandingkan audio 🔴
**Sebab:** membandingkan jumlah track manifest dengan `bab.mondai.length` (item), padahal hanya mondai tertentu yang punya audio.
**Fix:** hitung `bab.mondai.filter(m => m.audio).length`.

### #6 — Furigana hilang di satu baris kaiwa 🟡
**Gejala:** validator warning `初めまして` mengandung kanji tanpa furigana.
**Fix:** tambahkan furigana. Validator = alat andal menemukan ini; jangan abaikan warning.

### #7 — Penomoran `catatanTataBahasa` salah 🟡
Awalnya bernomor 5,6 (lanjutan bunpou). Harusnya **1,2** (section terpisah).

### #8 — Duplikat rule CSS 🟡
`.cover` didefinisikan 2x di `paper.css` → dead code. Cek sebelum menambah rule.

### #9 — Subagent audit SALAH "membetulkan" data yang BENAR 🟡
Beberapa subagent mengklaim salah dan mengubah data Bab 1 yang sebenarnya sudah benar. **Jangan percaya klaim agent tanpa verifikasi visual ke render halaman sumber** (`tmp/png/honsatsu_p0NN.png`). Lihat §4.

### #10 — Mobile: kolom kana terpotong & overflow horizontal 🟡
**Sebab:** `td:nth-child(1){width:30%}` masih berlaku di mobile.
**Fix:** reset width di media query + `html,body{overflow-x:hidden;max-width:100%}` + padding disesuaikan.

### #11 — Perintah shell (Windows/PowerShell) 🔴
- **Tidak ada `&&`, tidak ada `tail`, tidak ada heredoc (`<<'PY'`).** Gunakan `;`, `Select-Object`, tempah file.
- Bash tool = **PowerShell (pwsh)**. Jangan tulis perintah gaya bash.
- `python -c "..."` OK, tapi here-doc TIDAK.

### #12 — Teks Jepang TAMPIL `?` di terminal PowerShell 🔴 (FALSE ALARM!)
- `Get-Content -Encoding UTF8` **menampilkan kana/kanji sebagai `?`** karena codepage konsol (cp1252) tidak bisa merender huruf Jepang. **Ini BUKAN data rusak.**
- Akibatnya saya pernah salah menghapus `src/data/bab26` & `bab34` yang sebenarnya isinya baik. Verifikasi ulang selalu pakai Python, bukan `Get-Content`:
```powershell
python -c "import io,sys; sys.stdout.reconfigure(encoding='utf-8'); print(io.open(r'src\data\bab02\kosakata.ts',encoding='utf-8').read()[:300])"
```
- Deteksi data benar-benar rusak (hasil OCR): cari `\ufffd` atau rentset `??` (2+ tanda tanya berturut). Sudah jadi aturan otomatis di `src/core/validation/schema.ts` (`cekJp`).

### #13 — OCR (RapidOCR) TIDAK bisa baca kana/kanji 🔴
- `tools/extract_bab.py` (RapidOCR/onnx) **sudah DIHAPUS** — dia hanya bisa baca huruf Latin, sehingga kana/kanji jadi `??`. Semua isi PDF MNN itu berupa scan, jadi:
- **WAJIB baca visual** hasil `python tools/render_pdf.py <pdf> <out> <prefix> <start> <end>` (default 1800px grayscale quality 85, kana/kanji terbaca). Jangan pernah pakai OCR untuk PDF MNN.
- Render JANGAN turunkan width < 1500 atau kana/kanji pecah jadi tidak terbaca.
- Batas memo: baca **maksimal 6 gambar per pesan** (>32MB total akan men-*crash* agent).
- **`render_pdf.py` pakai `dpi=100` → hasil hanya ~656px dan kanji TIDAK terbaca** untuk PDF MNN2. Untukaudit butir yang samar, render sendiri dengan `fitz ... dpi=400` lalu crop pakai `tools/crop_zoom.py`.

### #14 — EDISI Indonesia ≠ EDISI Honsatsu (MNN2) 🔴
- **Jangan pernah menyalin `arti` menurut indeks.** Untuk Bab 28, 37, 41, 46 (dan kemungkinan bab lain) PDF Indonesia memakai *Contoh Kalimat*/*Percakapan* yang **beda isi** dari Honsatsu, walau nomor urut sama.
- Bukti (terverifikasi visual):
  - Bab 28: ID butir 2 = "belajar sambil mendengarkan musik" (JP: テレビ), ID 6 = "restoran sushi" (JP: 田中 旅行), ID 7 = "Universitas Fuji" (JP: さくら大学 = **Sakura**).
  - Bab 28 percakapan: ID 15 baris (punya "Homestay? Bagus."), Honsatsu 8 giliran. Sama persis hanya giliran 1, 2, 8.
  - Bab 37 percakapan: Honsatsu = Bandara Kansai; ID = 「金閣寺」. Total beda.
  - Bab 41 butir 5, Bab 46 butir 1b & 6: beda.
- Aturan main: `arti` harus **1:1 dari PDF Indonesia**. Kalau kalimat JP tidak ada di edisi Indonesia → tulis **terjemahan setia** dari JP + beri komentar `CATATAN EDISI` di header file.Jangan mengarang.

### #15 — Furigana hanya jalan kalau `base` ada LITERAL di teks 🔴
- `BabDetailPage.tsx` → `Ruby` memakai `teks.split(f.base)`. Jadi furigana yang tidak cocok persis **diam-diam tidak dirender**.
- Contoh bug nyata yang ketemu: `base: '申訳'` pada teks `申し訳` (jarak kana di tengah) → 申/訳 tanpa furigana; `base: '使方'` pada `使い方`; `base: '書方'` pada `書き方`; `建物` pada teks yang cuma `ビル`; `分/じ` untuk `時`; base sisa (`付`, `知`, `渡`, `今日`, `今年`, `間違`) untuk kalimat yang kana saja.
- `src/core/validation/schema.ts` **sudah** mendeteksi "furigana base tidak ada di teks" (base milik `pembicara` dikecualikan karena memang tak pernah dirender). Jalankan `npm run validate` dan **Jangan abaikan** warning baru ini.

### #17 — mondai listening diisi kalimat KARANGAN (bab34/bab35) 🔴
- Di buku MNN2, 問題1 = ikon telinga + baris kosong (dikte), 問題2 = ikon telinga + `1)( )…5)( )` — **tidak ada kalimat JP yang dicetak**. Isi audio CD tidak bisa diverifikasi tanpa transkrip.
- Sesi MNN2 pernah mengisi soal listening dengan kalimat karangan (bab34: campuran 〜とおりに/課長/出張 yang bahkan bukan milik pelajaran itu; bab35: 4 pertanyaan 〜ば yang tak tercetak di buku). **Sudah dibetulkan** mengikuti struktur cetakan: soal = tugas + baris kosong, `kunciTersedia:false`, tanpa kalimat JP buatan.
- Bab34 dulu juga memindahkan isi **問題5** (latihan tertulis 〜ないで) ke "mondai 2" lengkap dengan audio, sementara 問題3/4/6/7 hilang. Sekarang 7 item = 問題1–7 apa adanya (jawaban 5 & 6 milik app, ditandai `kunciTersedia:true`).
- Aturan main untuk soal listening: tulis ** APA YANG TERCETAK DI BUKU** (baris kosong, ikon telinga) + instruksi. Audio menyediakan isi; jangan pernah mengarang isi audio di data.

### #16 — Kanji tanpa furigana BUKAN otomatis bug 🟡
- Buku MNN sengaja tidak memberi furigana pada kanji yang dianggap sudah dikuasai. Karena itu cek "kanji tanpa furigana" hanya jalan bila `VALIDASI_STRICT=1` (PowerShell: `$env:VALIDASI_STRICT=1; npm run validate`). Angka baseline: **103 temuan**, mayoritas sesuai cetakan buku.

### #18 — Screenshot `--window-size` PALSU untuk cek mobile 🔴 (KRITIS, gampang bikin salah)
- **Gejala:** screenshot Chrome headless dengan `--window-size=390,...` menampilkan halaman **terpotong di kanan** (konten "meluber"). Terlihat seperti bug overflow.
- **Kenyataan:** `--window-size` **TIDAK** benar-benar mengecilkan viewport CSS. Headless tetap merender pada lebar default (mis. ~800) lalu **memotong** hasilnya. Bug ini juga muncul di halaman LAMA yang sudah pernah OK (Home, Susun, bab) → jadi **pasti artefak metode, bukan bug kode**.
- **Akibat nyata di sesi lalu:** hampir "memperbaiki" layout yang sebenarnya sudah benar, dan menyimpulkan mobile rusak padahal tidak.
- **Fix (jangan diulangi):** untuk menguji mobile dengan BENAR, pakai **CDP device emulation**:
  ```js
  // buka Chrome dengan --remote-debugging-port, lalu:
  Emulation.setDeviceMetricsOverride({ width, height, deviceScaleFactor:1, mobile:true })
  // lalu Runtime.evaluate untuk hitung overflow:
  // document.documentElement.scrollWidth > clientWidth  → overflowX
  // dan cek tiap elemen: el.getBoundingClientRect().right > vw+1
  ```
  Skrip sementara contoh: `tmp/cek_mobile.mjs` (hapus setelah pakai). Hasil yang benar: **`overflowX:false, 0 pelanggar`** = layout OK.
- Aturan: **JANGAN** menyatakan "mobile rusak" hanya dari screenshot `--window-size`. Bandingkan dengan halaman lama; kalau sama-sama nampak terpotong → itu metode, bukan kode.

### #19 — Port dev server bisa BERPINDAH (5173/5174/dst) 🔴
- **Gejala:** screenshot/DOM dari `localhost:5173` menampilkan **aplikasi lain** (mis. "Buku Hafalan Kanji"), bukan mnn1.
- **Sebab:** port 5173 bisa dipakai proyek lain; mnn1 naik ke 5174/5175.
- **Fix:** sebelum screenshot/eval, **pastikan instance = mnn1**: cek `(Invoke-WebRequest <url>).Content` cocokkan `<title>` = "Minna no Nihongo 1 - Belajar Bahasa Jepang", atau `--dump-dom` mengandung penanda app. Jangan asumsi port tetap.

### #20 — `bab[]` partikel tidak sinkron dgn `perBab[]` → panel per-bab HILANG 🔴
- **Gejala:** partikel `が` punya entri `perBab` Bab 22/23/24/25 (dari buku), tapi saat memilih Bab 22 **kartu `が` tak muncul** & panelnya tak pernah tampil.
- **Sebab:** `KartuPartikel` menampilkan panel dari `p.bab.map(...)`, dan filter halaman pakai `p.bab.includes(bab)`. Entri `perBab` yang `bab`-nya **tidak ada** di `bab[]` jadi "yatim" → tak terjangkau. Ditemukan **7 pelanggaran** (が 22/23/24/25, を 16, か 20/29).
- **Fix:** sinkronkan `bab[]` ⇄ `perBab[]` (dua arah). Sekarang **dijaga otomatis** `npm run validate:partikel`. Kalau menambah entri `perBab`, WAJIB tambah bab itu ke `bab[]`, dan sebaliknya.

### #21 — Soal ujian merujuk bab yang tak punya partikel („bab orphan") 🔴
- **Gejala:** pilih Bab 40/48/8 di mode **Ujian** → soal muncul, tapi di mode **Daftar** bab itu tak punya kartu partikel → bingung; plus ada soal `ところ` ber-`bab:40` padahal `ところ` di buku MNN2 = **Bab 46**.
- **Sebab:** `bab` soal diisi manual, tidak dicek terhadap data partikel; pernah salah label (40 vs 46).
- **Fix:** `validate:partikel` menolak soal yang `bab`-nya tak punya partikel terkait. Untuk kasus nyata: tambah partikel ke bab yang benar (は/が +Bab8, に +Bab48, か +Bab40) & koreksi ところ 40→46. **Selalu verifikasi bab dari render buku**, jangan menebak.

### #22 — Refactor file data gemuk: koma ganda `},,` dari script generate 🔴
- **Gejala:** setelah memecah `partikel.ts` (70 KB) jadi 6 file via script, `tsc` error `Type '... | undefined' is not assignable to 'Partikel[]'` di baris deklarasi array.
- **Sebab:** script menulis `objs.join(",\n") + ","` — tiap objek dari sumber sudah berakhir `},` sehingga hasilnya `},,` (koma ganda) di **setiap** batas objek → elemen `undefined` masuk array. Regex fix pertama hanya menambal yang terakhir.
- **Fix:** `replace(/\},,/g, "},")` (global). **Pelajaran:** setelah refactor/pecah file, WAJIB: (1) `npx tsc --noEmit`; (2) bandingkan jumlah & urutan elemen dengan versi lama (di sini 38 partikel, urutan IDENTIK); (3) diff nilai kunci (`bab`, `keterangan`, `contoh`) vs snapshot — beda harus PERSIS yang disengaja (di sesi ini cuma 4 partikel). Simpan snapshot ke `tmp/` sebelum memecah.

### #23 — Pola aman refactor data besar (resep) 🟢
1. Snapshot file lama ke `tmp/` (mis. `tmp/refactor/partikel.snapshot.ts`).
2. Ekstrak objek dgn script Node (jangan copy-tempel tangan) → tulis file per kelompok.
3. Buat `index.ts` re-export **agar import konsumen tak berubah** (satu pintu).
4. Verifikasi: `tsc --noEmit` + bandingkan urutan/isi vs snapshot (script, bukan mata).
5. Tambah validator invariant ke `guard` **sebelum** lanjut fitur lain.
6. Baru commit + push. Lihat §3b untuk struktur final partikel.

### #24 — Chip jawaban HILANG saat digeser (drag-drop) 🔴
- **Gejala:** di latihan susun, menggeser chip jawaban ke posisi chip lain membuat satu kata **hilang** (bukan bertukar posisi).
- **Sebab:** `SoalMenyusun` — `onDrop` chip tidak `stopPropagation()`, event naik ke container `.susun__jawab` yang `onDrop`-nya memanggil `hapusPada(from)`.
- **Fix:** `e.stopPropagation()` + `preventDefault()` pada `onDrop`/`onDragOver` chip; chip juga menerima drop dari bank (`text/susun-bank`) untuk menyisipkan di posisi itu. **Jangan hapus.** Uji ulang lewat CDP (dispatch `DragEvent` ber-`DataTransfer`).

### #25 — Klik cepat berturut-turut menimpa urutan (closure basi) 🔴
- **Gejala:** klik beberapa chip bank cepat berturut-turut → hanya chip terakhir yang terpasang.
- **Sebab:** handler memakai nilai `dipilih` dari render yang sama; semua `setState` dalam satu batch melihat nilai lama.
- **Fix:** state urutan disimpan **lokal** di komponen dengan updater fungsional (`setUrutan(prev => …)`), lalu disinkronkan ke store lewat `useEffect` **idempoten** (hanya menulis bila string urutan berbeda). Komponen diberi `key={id-mode}` di pemanggil supaya reset saat soal/mode berganti. Pola ini dipakai semua mutasi (tambah/hapus/pindah/sisipkan).

### #26 — Panah ←/→ di tab Flashcard malah PINDAH BAB 🔴
- **Gejala:** buka Bab 2 → tab Flashcard → tekan `→` → pindah ke `/bab/3`.
- **Sebab:** `BabDetailPage` dan `Flashcard` sama-sama memasang `window` keydown; `preventDefault()` tidak menghentikan listener lain.
- **Fix:** navigasi bab hanya aktif saat tab **Daftar** (`modeKosakata === 'tabel'`); effect ikut mendepend `modeKosakata`. Jangan kembalikan tanpa penjaga ini.

### #27 — Mondai mendengarkan tanpa `instruksi` 🟡
- **Gejala:** 8 entri `jenis: 'mendengarkan'` (bab02 no 2–3, bab04 no 2–4, bab05 no 2–3, bab06 no 2) tanpa `instruksi`.
- **Fix:** isi `instruksi` (kalimat tugas dalam bahasa Indonesia, **tanpa** mengarang isi audio) + invariant baru di `schema.ts`: `jenis === 'mendengarkan'` ⇒ wajib `kunciTersedia: false` **dan** `instruksi` non-kosong (sekarang ERROR, bukan warning).

### #28 — `matchLevel` longgar: jawaban SALAH dianggap "tepat" 🔴
- **Gejala:** `いきます` dianggap benar untuk `きます` (kata kerja salah lolos); `アメリカ` benar untuk `アメリカ人`; `ミラー` benar untuk `ミラーさん`.
- **Sebab:** `normalize.ts` — cabang `u.includes(e) || e.includes(u)` menerima subset apa pun.
- **Fix:** substring TIDAK lagi otomatis 'tepat'. Selisih harus **murni partikel/akhiran gramatikal** (`buangAkhiran()` dengan himpunan `BOLEH_BEDA` = partikel + `です/ます/か/…`). Kata kerja/imbuhan kata lain → **belum**. Kasus uji dikunci di `tools/validate_susun.ts` (8 kasus) — **jangan longgarkan kembali**.
- **Catatan:** `countCorrect`/`scoring` ikut memakai ini → skor lama bisa turun. Itu memang benar (dulu menaikkan skor palsu). Jangan "perbaiki" turunnya skor.

### #29 — Jawaban BENAR tidak terdeteksi saat ada pengecoh 🔴
- **Gejala:** mode Ahli + pengecoh → auto-check baru jalan setelah SEMUA chip (termasuk pengecoh) terpasang, padahal pengecoh tak perlu dipakai.
- **Fix:** auto-check = "semua token WAJIB terpasang" (`wajibTerpakai === jawaban.length`), bukan "bank habis". Benar/salah dinilai dari token wajib (`benarDari()`), pengecoh netral (kelas `--pengecoh`).

### #30 — `import.meta.glob(..., { eager: true })` untuk data bab = bundel raksasa 🔴
- **Gejala:** bundel awal **1.987 kB** (gzip 524 kB), Vite memperingatkan chunk > 500 kB. Membuka **satu bab** pun mengunduh data 50 bab.
- **Sebab:** `src/data/index.ts` memakai eager glob → semua modul bab **terjangkau statis**. Rollup menggabung modul yang juga diimpor dinamis (`loadBab`) jadi SATU chunk besar. Data = **91%** ukuran sumber (1,83 dari 2,00 MiB).
- **Fix (jangan di-regresi):**
  - Isi bab dimuat **dinamis** (`src/data/load.ts`: `loadBab`/`loadSemuaBab`).
  - Ringkasan (no, topik, jumlah) dari `src/data/meta.ts` (di-generate `npm run gen:meta`).
  - Kamus dari `src/data/kamus/terbangun.ts` (di-generate `npm run gen:kamus`) — **bukan** dihitung dari `babs` saat runtime.
  - Rute di-`lazy` (`src/App.tsx`).
  - Halaman latihan campuran TIDAK memuat bab penuh: `src/data/latihan-campuran.ts` (`loadLatihanCampuran`) hanya mengimpor `susun` + `mondai` per bab (tipe `BabLatihan`), dan `vite.config.ts` memisah chunk `susun.ts`/`mondai.ts` jadi `ringan-babNN`.
  - **JANGAN** impor `src/data/all` (eager; hanya untuk TES) dari kode aplikasi — dijaga `npm run guard`.
- **Hasil terukur (gzip):** bundel awal **108 kB** (dari 524 kB) · `/bab/34` **196 kB** (dari 524 kB) · `/partikel` **131 kB** · `/latihan/susun` **338 kB** (dari 588 kB setelah langkah pertama; semula 524 kB).
- **Pelajaran umum:** untuk data besar, `eager` membuat *semua* modulnya statis-terjangkau → sekali ada satu importer statis, code-splitting mati. Verifikasi dengan hitung byte nyata (`Performance.getEntriesByType('resource')`), jangan menebak.

### #31 — Identifikasi audio pakai DURASI = menipu 🔴
- **Gejala:** bandingkan 87 mp3 kandidat vs `public/audio` pakai durasi → "87/87 cocok (±1 dtk)", tapi pasangannya ngawur (`minna_shokyu_1_003 ≈ bab06_mondai1`, padahal tetangganya `002 ≈ bab01_mondai1`). Nyaris menyimpulkan "duplikat, aman dipasang".
- **Sebab:** banyak track punya durasi nyaris sama → pencocokan terdekat selalu "menemukan" pasangan. Durasi **bukan** identitas.
- **Fix/bukti:** pakai **MD5 payload** (byte setelah ID3v2). Hasil: `CD Minna No Nihongo 1` (87 file) & `CD Minna No Nihongo 2` (75 file) = **162/162 IDENTIK byte** dengan `public/audio` → app memang sudah punya kaiwa+mondai lengkap. Durasi hanya untuk sanity-check.
- **Sumber choukai:** `D:\A_bahasa_jepang\MINNA NO NIHONGO\Minna No Nihongo 2\Minna 2 choukai\` (CD1–3). Bab diambil dari nama file (`第NN課`) — **jangan menebak**; file tanpa bab (`01 CD A - 1.mp3`, 256 KB) dilewati. File `._*` = sampah macOS, dibuang. MNN1 **tidak punya** choukai.
- **Pelajaran umum:** identitas file audio = hash isi, bukan durasi/ukuran. Dan saat menyalin data orang lain, salin **hanya** yang bisa dipetakan pasti.

---

## 3d. Bilah navigasi lengket (shell) + fondasi token — JANGAN dihapus

- `src/components/TopNav.tsx` dipasang di `RootLayout` (`src/App.tsx`), di atas semua rute: brand + tautan **Beranda / Bab / Susun / Partikel** + progres ringkas (`%`, `tabular-nums`) + `ThemeToggle`.
- Menggantikan pola "**← Daftar Bab**" yang dulu diulang manual di tiap halaman (`BabDetailPage`, `PartikelPage`, `SusunCampuranPage`) — **dan** `ThemeToggle` ganda (dulu: nav + toolbar BabDetail + cover Home). Tema sekarang **satu titik** di nav.
- Gaya `.topnav*` di `paper.css` (token-only, **tanpa `transition`**). Di ≤640px: sembunyikan subjudul brand + bar progres, tautan tetap utuh → **tidak** overflow (diuji 390px, 0 pelanggar).
- Jangan kembali ke pola "← Daftar Bab" per halaman; cukup tambah tautan di `TopNav` bila ada halaman baru.

**Fondasi token (`tokens.css`) — jangan hardcode hex di `paper.css` (guard menolak):**
- **Kontras diukur, bukan ditebak.** `--k-ink-faint` dulu **gagal WCAG AA** (2.99 terang / 3.29 gelap) padahal dipakai teks 10–11px → dikoreksi jadi `#7d7568` / `#a99f8d` (**4.55 / 4.88**, lulus). Kalau mengubah warna teks, **ukur ulang** lewat CDP (fungsi kontras di dalam `evaluate_script`), minimal 4.5:1.
- Token baru: `--k-surface-1/2/3` (3 tingkat elevasi), `--k-border`, `--k-border-soft`, `--k-ring`, `--k-shadow-card`, `--radius-sm/md/lg/pill`, `--shadow-card`. Semuanya dipetakan ke Tailwind `--color-*` di `@theme`.
- **Komponen bersama** (di `paper.css`, token-only): `.card` / `.card--2` / `.card--3`, `.seg` + `.seg__item` / `.seg__item--aktif` (segmented control), dan **fokus ring global** `:focus-visible { outline: 3px solid var(--k-ring) }`.
- **Pakai `.seg` (bukan `.flash__seg` + `.chip`) untuk pilihan tunggal** (mode Dasar/Ahli, jumlah soal, fase). `.chip` tetap untuk aksi toggle. Migrasi sudah dilakukan di susun (Bab & Campuran); halaman lain boleh menyusul — **jangan** kembalikan `.flash__seg` di susun.

---

## 3b. Detail implementasi halaman Partikel (JANGAN di-regresi)

Halaman `/partikel` (fitur baru, sudah live). **Data sudah dipecah jadi modul** (sejak refactor „pecah data jadi modul", commit `374a494`):

- `src/data/partikel/` (BUKAN lagi file tunggal `partikel.ts`):
  - `tipe.ts` → interface `ContohPartikel`, `FungsiBab`, `Partikel`, `KelompokPartikel` + `KELOMPOK`.
  - `daftar/{dasar,tempat-arah,waktu,penghubung,akhir,lanjutan}.ts` → data partikel per kelompok.
  - `daftar/index.ts` → **gabungan 38 partikel**. Urutan tampil default = urutan di sini (disusun „dasar → lanjutan", dijaga lewat `pilih()` yang melempar bila nama partikel tak ditemukan).
  - `fungsi.ts` → `babTerkait()` & `fungsiUntukBab()`.
  - `index.ts` (root modul) → **re-export** (`partikel`, `KELOMPOK`, `babTerkait`, `fungsiUntukBab`, tipe). Import lama `from '../data/partikel'` tetap jalan — **jangan** pindahkan import konsumen ke path dalam, biar tetap satu pintu.
- **38 partikel**. `Partikel { bentuk, romaji, fungsi, penjelasan, contoh[], bab[], kelompok, perBab?[] }`. `kelompok`: `dasar | tempat-arah | waktu | penghubung | akhir | lanjutan`.
- **`perBab[]` (FungsiBab):** keterangan lengkap partikel **per bab** (`{ bab, fungsi, keterangan, contoh? }`), diturunkan dari „IV. Keterangan Tata Bahasa" buku MNN 1 & 2 Indonesia (bukan karangan). Aturan: `perBab[].bab ⊆ bab[]`, semua 38 partikel punya `perBab`. Helper `fungsiUntukBab(p, bab)` → `{ fungsi, keterangan, contoh, spesifik }`.
- **INVARIAN (dijaga otomatis `npm run validate:partikel`, masuk `check`/`check:full`/`guard`):** bentuk unik; `bab[]` & `perBab[]` terurut menaik tanpa duplikat; **setiap `bab` WAJIB punya entri `perBab`** (kalau tidak → „fallback"); **setiap `perBab[].bab` WAJIB ada di `bab[]`**; `fungsi`/`keterangan`/`contoh.jp`/`contoh.id` tidak kosong; bab 1..50. Untuk soal: id unik, `jawaban ∈ pilihan`, `pilihan` tanpa duplikat, soal memuat `___`, `bab` soal WAJIB punya partikel terkait.
- **Tombol pilih bab** di `/partikel` (`.partikel-babbar`): 1 tombol "Semua" + 1 tombol per bab dari `babTerkait()`. Berlaku untuk **daftar (filter) & ujian (cakupan soal)**.
- **Kartu akordeon per bab** (`.partikel-akordeon`): daftar panel diambil dari `p.bab.map(...)`, jadi **`bab[]` menentukan panel yang tampil**. Inilah sebab invarian „`perBab ⊆ bab`" penting: entri `perBab` yang bab-nya tidak ada di `bab[]` **tidak akan pernah tampil**. Label footer = **"Perilaku di tiap bab"**.
- **Header kartu tahan bentuk panjang** (`.partikel-card__bentuk`): `bentuk` dipecah per ` / ` jadi beberapa chip `.partikel-card__kanji`; teks dalam `(...)` dipindah ke badge `.partikel-card__catatan`; `romaji` selalu di baris bawah (`flex-basis: 100%`). **Jangan** kembalikan ke `split` tanpa pecah `/` — bentuk panjang (`だの / たり ～たり`, `たら / ば / なら / と`) akan membungkus liar.
- **Rangkuman arti** (`.partikel-ringkas`, komponen `TabelRingkas`): tabel padat Partikel | Arti/Fungsi di **bawah** daftar kartu, ikut menyesuaikan filter.
- **Kredit**: footer `.partikel-kredit` "Build by **amirsan**" di dasar halaman (kedua mode).
- `src/data/partikel-soal.ts` → **100 soal** pilihan ganda (`SoalPartikel { id, soal, arti, jawaban, pilihan[], bab }`). `soal` pakai rumpang `___`. **Pastikan `pilihan` tidak duplikat & memuat `jawaban`** (pernah salah: `['や','や']`). `bab` soal WAJIB merujuk bab yang punya partikel (dijaga validator).
- **Struktur modular** — halaman dipecah ke `src/features/partikel/`:
  - `PartikelPage.tsx` (di `pages/`) → orkestrasi saja (state, filter, layout, ~190 baris). **Jangan** tanam ulang sub-komponen besar di sini.
  - `features/partikel/KartuPartikel.tsx` → kartu + akordeon per bab.
  - `features/partikel/UjianPartikel.tsx` → mode ujian (+ `KUNCI_UJIAN`).
  - `features/partikel/PemilihBab.tsx` → baris tombol bab.
  - `features/partikel/TabelRingkas.tsx` → tabel rangkuman arti.
  - `features/partikel/index.ts` → re-export.
- Fitur halaman: 2 mode (Daftar & Penjelasan / Ujian Partikel), search, filter kelompok & bab, navigasi prev/next partikel + **keyboard ←/→**, sorot kartu (`.partikel-slot--aktif`), deep-link `#daftar/#ujian/#ujian-mulai`.
- **Simpan jawaban ujian:** reuse `useNotes.setAnswer` dengan key `partikel-ujian-{id}` (TANPA store baru). Idempoten. Reset = set tiap key ke `''` lalu acak ulang.
- `paper.css` → blok `.partikel-*` (token-only, tanpa `transition`).
- **Bug pernah terjadi — search melar:** `.partikel-tools` = flex **column**, jadi `.home-search` (`flex: 1 1 180px`) meregang jadi oval raksasa. Fix: `.partikel-tools .home-search { flex: 0 0 auto; width: 100% }`. Jangan hapus rule ini.
- Layout desktop: `PartikelPage` `max-w-6xl` + grid **3 kolom** (≥1100px). Home `max-w-6xl`, Susun `max-w-5xl`, BabDetail `max-w-5xl`.

**⚠️ CANGKANG `bentuk` WAJIB persis sama di 3 tempat** (kalau tidak, `daftar/index.ts` melempar error): nama array `pilih(sumber, '...')` di `daftar/index.ts`, nilai `bentuk:` di file kelompok, dan (bila dipakai) `jawaban` soal. Huruf spasi di sekitar `/` ikut dihitung (mis. `'から / まで'` ≠ `'から/まで'`).

**Favicon/app shell** (di luar partikel tapi satu sesi):
- `public/favicon.svg` → ikon tab bergaya hanko (kotak gradien aksen + karakter 助). Terpasang di `index.html` (`rel="icon" type="image/svg+xml"`) + `<meta name="theme-color" content="#a3562a">`. **Jangan hapus.**
- Git remote: `origin` → `https://github.com/amirudinR/minnanonihonggo.git` (branch `main`).

---

## 3c. Latihan Susun (mode Dasar/Ahli + auto-check + panel bacaan) — JANGAN di-regresi

Model: satu soal = `SusunItem { id, arti, kata[], jawaban, fokus?, penjelasan? }`. Jawaban user disimpan sebagai **index bank** ("2,0,1,5") di `useNotes.answers`, key `campur-{babNo}-{id}` (Dasar) / `campur-{babNo}-{id}-ahli` (Ahli). Key per-bab: `b{babNo}-susun-{id}` / `…-ahli`. **Key lama TIDAK diubah** (progres user aman).

- **Halaman `/latihan/susun`** = sesi **satu soal per layar**: pemilih bab (Semua / MNN I / MNN II / 1–50), mode, jumlah (10/20/50), progress bar, tombol Sebelumnya/Berikutnya, **ringkasan akhir sesi** + tombol "Ulangi yang salah" / "Sesi baru". Deep-link: `?bab=23&mode=ahli&n=20`.
  - Dulu halaman ini merender **1.000 soal sekaligus** (21.919 node DOM, tinggi halaman 259.443 px) — sekarang 171 node / ~1.066 px. **Jangan** kembalikan render massal.
- **Auto-check** (`autoCheck` default ON): begitu semua chip terpakai, koreksi jalan sendiri (verdict muncul tanpa menekan "Cek"). Tombol "Cek" tetap ada untuk a11y. Panel **Keterangan** muncul otomatis saat benar (atau saat "Lihat kunci").
- **Panel Keterangan** (`features/susun/KeteranganBacaan.tsx`): kalimat kanji + **furigana** (`<ruby>`), **cara baca hiragana penuh**, daftar **kanji** (kanji + baca + arti), daftar **katakana** (+ arti), dan `penjelasan` pola.
- **Mode Ahli** (`segmentPartikel.ts`): unit `kata` dipecah jadi partikel + akhiran verba (`これは 本です` → `これ|は|本|です`). Prinsip **KONSERVATIF: kalau ragu JANGAN pecah** — hasil lebih kasar boleh, salah pecah = bug. Akhiran kata sifat (`い`/`く`) **sengaja dimatikan** (pernah salah: `がくせいじゃ` → `がくせ + い + じゃ`). Daftar larangan ada di `JANGAN_PECAH` (mis. `あした`, `どうして`, `また`, `はい`, `いい`, `よく`, `だいたい`, `しばらく`, `どのくらい`).
- **Pengecoh (mode Ahli)**: `bankAhliDenganPengecoh()` menambah **2 partikel pengecoh** (dari `PENGECOH_PARTIKEL`, dijamin tidak sama dengan token mana pun) ke bank, lalu diacak deterministik. User **tidak wajib** memakai pengecoh. Kasus uji: 1.000 soal × 2 = **2.000 pengecoh**, dijaga `validate:susun`.
- **Umpan balik per-chip**: setelah dikoreksi, chip token wajib diwarnai hijau (`--ok`) / merah bergaris bawah (`--salah`), **posisi salah pertama** diberi outline (`--tunjuk`) + verdict menyebut "kata ke-N masih salah". Pengecoh netral (`--pengecoh`, garis putus-putus). Jangan hapus kelas-kelas ini.
- **Kamus bacaan** (`src/data/kamus/`): `bangun.ts` (`bangunKamus`/`bangunKataDikenal`/`bangunArti`, **impor relatif** agar jalan di tsx) + `override.ts` (entri manual: nama diri/tempat + kanji yang tak memberi bacaan lewat kosakata). Bacaan diambil dengan **penjajaran okurigana** (`行きます`+`いきます` → `行`→`い`), bukan memotong kanji mentah.
  - Batas diketahui: bacaan **tanpa konteks** — kanji ber-*on/kun* ganda bisa salah (mis. `汚れ` → `きたなれ`, seharusnya `よごれ`). Tambah entri di `override.ts` bila menemukan yang salah; jangan ganti arsitektur.
- **Validator `npm run validate:susun`** (masuk `check`/`check:full`/`guard`): (1) `canonical(tokenAhli.join('')) === canonical(jawaban)`, (2) bank ahli memuat token yang sama, (3) **setiap kanji di `jawaban` WAJIB punya bacaan**, (4) struktur item. Saat ini: **1.000 soal · 7.112 token ahli · 955 kamus · 0 error**.

---

## 4. FAKTA TERVERIFIKASI — JANGAN "DIPERBAIKI" (sudah benar!)

| Item | Sering salah diklaim | **Yang BENAR** |
|---|---|---|
| Rumah sakit | 神戸医院 (きんこ…) | **神戸病院 = こうべびょういん** |
| Nama | アット | **ワット** |
| Nama | サンダス | **サンタス** |
| Urutan dialog kaiwa | urutan diubah | **佐藤→山田(intro Miller)→ミラー 4 baris→佐藤 2 baris** |
| `k1-07/08` caveat | milik kosakata guru generik | caveat "tak menyebut pekerjaan sendiri" milik **先生** |
| `k1-38` | (perangkat lunak) | **dihapus** — hanya "perusahaan fiksi" |
| `reibun` no6 arti | "…bukan insinyur." | **"…bukan insinyur. Dia dokter."** |
| `renshuuB` no5 | 会社員 | **アメリカ人** |

---

## 5. Arsitektur & konvensi

```
src/
  core/        # domain murni, 0 React
    text/normalize.ts     # stripEnumerators, canonical, matchLevel, isCorrect, countCorrect, adaJawaban
    text/terjemahan.ts    # nilaiTerjemahan (soft-match Jaccard)
    text/susun.ts         # bank/jawaban/koreksi susun + varian MODE AHLI (bankAhli/tokenAhli)
    text/segmentPartikel.ts # pecah unit susun → partikel + akhiran verba (KONSERVATIF)
    text/baca.ts          # keHiragana, bagianBaca (furigana), uraiKata (kanji/katakana + arti)
    audio/manifest.ts     # MONDAI_COUNT per bab + getAudio + cekKonsistensiAudio
    validation/schema.ts  # validasiBab (pakai import RELATIF, bukan '@/')
  data/
    index.ts              # import.meta.glob('./bab*/index.ts') → auto registry
    kamus/                # bangun.ts (kamus kanji→kana dari kosakata) + override.ts + index.ts
    babNN/ index · kosakata · bunpou · reibun · kaiwa · renshuu · mondai · konteks
  features/               # vertical slice: flashcard/, kuis/, partikel/, susun/
  store/                  # useProgress (mnn1_progress_v1), useNotes (mnn1_notes_v1)
  pages/                  # HomePage, BabDetailPage, NotFoundPage
  styles/                 # tokens.css (@theme), paper.css (tema kertas)
tools/                    # extract_bab.py (OCR), validate.ts
```

- Alias `@/` → `src/` (di `vite.config.ts` & `tsconfig.json`).
- **`core/validation/schema.ts` pakai impor RELATIF** (`../../types/bab`) karena dijalankan Node/tsx (tanpa resolver alias Vite).
- Tambah bab: `mkdir src/data/babNN` + `index.ts` → registry otomatis. Lalu `npm run validate` + `npm run build`.
- File kecil, < ~200 baris, modular.

### Tema & aksesibilitas (jangan regresi)
- Palet hangat: `--color-paper #f5eddc`, `--color-ink #43382b`, aksen `--color-accent #8a5a2b`, hijau `#2f7d4f`, merah kalem `#b03030`.
- `:focus-visible` 3px, target sentuh ≥44px, hormati `prefers-reduced-motion`.
- Teks Jepang selalu `lang="ja"`.

### Audio — manifest, bukan hardcode
`MONDAI_COUNT` di `src/core/audio/manifest.ts` (terverifikasi dari file fisik):
```
1:3 2:3 3:2 4:4 5:3 6:2 7:3 8:3 9:2 10:3 11:3 12:2 13:2 14:3 15:2
16:3 17:2 18:2 19:2 20:2 21:2 22:2 23:3 24:2 25:2
```
Setiap bab: **1 kaiwa**. Nama file: `babNN_kaiwa.mp3`, `babNN_mondaiN.mp3`, `babNN_choukaiN.mp3`.

**Choukai (聴解)** — dari buku terpisah「聴解タスク25」, **hanya MNN II (Bab 26–50)**:
`CHOUKAI_COUNT` di manifest (terverifikasi dari 3 CD fisik `MNN II Choukai CD1–3`):
```
26:4 27:4 28:4 29:6 30:4 31:4 32:4 33:4 34:4 35:5
36:5 37:4 38:5 39:4 40:4 41:4 42:3 43:4 44:6 45:4
46:4 47:4 48:4 49:5 50:4   → total 107 track
```
Bab 1–25 (MNN1) **tidak punya choukai** (tidak ada audio di sumber). `adaChoukai(bab)`
+ `getAudio(bab).choukai[]`. UI: seksi **Choukai (聴解)** di halaman bab
(`features/bab/ChoukaiSection.tsx`) + filter Choukai di tab **Mendengarkan**
(`/latihan/susun?t=dengar`). Teks tugas TIDAK ditulis di data (bukunya bukan
Honsatsu) — audio saja + arahan "buka buku Choukai".

---

## 6. Verifikasi & tooling

### Screenshot (Chrome headless, CLI — MCP `chrome-devtools` sering gagal)
```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" `
  --headless=new --disable-gpu --no-sandbox --hide-scrollbars `
  --user-data-dir="C:\Users\Amir\AppData\Local\Temp\opencode\cr-prof" `
  --window-size=1200,3000 --virtual-time-budget=6000 `
  --screenshot="D:\LPK\mnn1\tmp\shot.png" "http://localhost:5173/bab/1"
```
Untuk cek runtime error/loop, `--dump-dom` ke file lalu cari `Unexpected Application Error` / `Maximum update depth`.

### Dev server sering mati
Nyalakan ulang: `Start-Process npm.cmd -ArgumentList "run","dev" -WorkingDirectory "D:\LPK\mnn1"; Start-Sleep 8`.

### Definisi "selesai"
- [ ] `npm run typecheck` ✅
- [ ] `npm run build` ✅
- [ ] `npm run validate` ✅ (0 error)
- [ ] `npm run test` ✅ (Vitest hijau)
- [ ] Tidak ada error boundary / loop di render nyata
- [ ] Screenshot desktop **dan** mobile diperiksa untuk perubahan UI
- [ ] Tidak menyentuh fakta terverifikasi §4

---

## 6b. Toolbox (alat untuk AI/dev)

| Perintah | Fungsi |
|---|---|
| `npm run verify` | **gerbang akhir sekali jalan**: check:full + screenshot desktop/mobile + cek DOM (`Unexpected Application Error` / `Maximum update depth`). Butuh dev server menyala. |
| `npm run guard` | validate + **validate:partikel** + audit kelengkapan + **cek aturan keras** (dependensi baru, hex hardcode di paper.css, `transition:` di paper.css, `TOTAL = 25`, karakter `\ufffd` di data, audio ter-track git). |
| `npm run validate:partikel` | jaga INVARIAN data `/partikel`: `bab[]` ⇄ `perBab[]` (dua arah, terurut, tanpa duplikat), isi tidak kosong, bab 1..50, + kualitas 100 soal (id unik, `jawaban ∈ pilihan`, ada `___`, bab soal punya partikel). Lihat §3b & §3 #20/#21. |
| `npm run validate:susun` | jaga INVARIAN data susun: gabungan token mode ahli == `jawaban`, bank konsisten, **semua kanji punya bacaan**, struktur item. Lihat §3c. |
| `npm run test` | tes unit Vitest: `core/*` (normalize, terjemahan, susun, segmentPartikel, baca, manifest) + snapshot data (50 bab, total kosakata/susun) + invariant partikel. Masuk `check:full`. |
| `npm run gen:meta` | regenerate `src/data/meta.ts` (ringkasan bab untuk Home/TopNav). Tes `registry.test.ts` gagal bila lupa. |
| `npm run gen:kamus` | regenerate `src/data/kamus/terbangun.ts` (kamus kanji siap-pakai). Tes `kamus.test.ts` gagal bila lupa. |
| `npm run map` | regenerate `docs/AI-MAP.md`: daftar modul + peta dependensi + ringkasan 50 bab. |
| `npm run find <kata>` | cari di KODE / DATA / TOOLS / DOKUMEN, output `file:baris`. Bisa multi-kata (AND). |
| `npm run add:bab <N>` | scaffold `src/data/babNN/` (8 file berisi checklist). Registry otomatis. |
| `npm run check` / `check:full` | validate + validate:partikel + validate:susun + typecheck (+ build). |

### Resep cepat (ripgrep / alat built-in)
```powershell
rg "kunciTersedia" src                    # siapa memakai satu field
rg "jenis: 'mendengarkan'" src/data       # 1 pola data di semua bab
npm run find 申し訳                        # cari di kode+data+docs
npm run find konteks bab01                 # cari multi-kata
npm run map; git diff docs/AI-MAP.md      # apa yang berubah sesi ini
```

### Screenshot manual (masih boleh)
Perintah Chrome headless seperti §6 di atas tetap valid. `tools/screenshot.mjs` hanya membungkusnya + menambah cek DOM.

---

## 7. Git & GitHub

- Remote: `https://github.com/amirudinR/minnanonihonggo` (branch `main`).
- `.gitignore` mengecualikan: `node_modules/`, `dist/`, `tmp/`, `.ruff_cache/`, `tmp_ocr.png`, **`public/audio/`**.
- Commit: pesan ringkas berisi *apa* + *mengapa*. Jangan commit `.env`, kunci, atau audio.
- Jangan force-push ke `main` tanpa izin eksplisit.

---

## 8. Checklist sebelum menyerahkan hasil ke user

1. Sudah baca §3 (kesalahan lampau) dan pastikan tidak mengulangi.
2. Sudah jalankan 3 perintah verifikasi (§6) dan tunjukkan hasilnya.
3. Perubahan UI → lampirkan/screenshot dan periksa nyata.
4. Tidak mengubah fakta terverifikasi (§4) atau konfigurasi kritis (§1).
5. Update `PLAN.md` (sesi/log) bila mengerjakan fitur baru.

---

## 9. Catatan perubahan yang sudah berlangsung (jangan di-regresi)

- **Animasi dipusatkan** di `src/styles/motion.css` (semua `transition` + blok `prefers-reduced-motion`). `index.css` meng-import `tokens.css` → `paper.css` → `motion.css`. Merombak animasi = edit `motion.css` saja.
- **Tema terang/gelap via token runtime** (jangan hardcode warna):
  - Nilai warna ada di `tokens.css` → `:root` (terang) & `html[data-theme='dark']` (gelap); `@theme` hanya **memetakan** `var(--k-*)` ke `--color-*` Tailwind.
  - **JANGAN hardcode hex/rgba** di `paper.css`. Pakai token. Untuk rgba ber-alpha → `rgb(var(--k-rgb-ink) / 0.1)` (kanal RGB di token, bisa ditukar tema). Pengecualian: bayangan hitam netral alpha rendah (`rgba(0,0,0,0.0x)`) boleh apa adanya.
  - `data-theme` diset ke `<html>` oleh `useTheme` (`mnn1_theme_v1`) + inline script anti-FOUC di `index.html`. Mode default `system` (ikut `prefers-color-scheme`).
- **Home menampilkan SEMUA bab** dari registry (`babs.length`), bukan angka hardcode. Jangan kembalikan `TOTAL = 25`.
- **`paper.css` tidak boleh berisi `transition:`** lagi (sudah dipindah); cek sebelum menambahkan rule agar tak ada dead code.
- **Inter & Caveat adalah variable font** → satu `@font-face` per family dengan `font-weight: 100 900` (Inter) / `400 700` (Caveat), format `woff2-variations`. Jangan buat 4 deklarasi (pernah bikin dead code).
- **Emoji verdict/terj hasil dihapus** oleh agent lain; pertahankan stripped kecuali user minta dikembalikan.
- **Offset halaman terverifikasi** (jangan ganti rumus tanpa bukti): Honsatsu `idx = printed + 21`, Indonesia `idx = printed + 20`, printed start Pelajaran N = 6N+4. **`printed start Bab N = 8N-2` SALAH** — bab 6, 13, 19, 22 masing-masing 10 halaman (bukan 8), sehingga rumus lama meleset +2/+4/+6/+8 untuk bab setelahnya. Peta yang BENAR (printed → idx Honsatsu): b6 46–55→67–76, b13 104–113→125–134, b19 154–163→175–184, b22 180–189→201–210. Batas lain: b1 6–13→27–34, b18 146–153→167–174, b20 164–171→185–192, b21 172–179→193–200, b23 190–197→211–218, b24 198–205→219–226, b25 206–213→227–234. **Sumber kebenaran: ToC Honsatsu** (render `tmp/tocmnn1/`).
- Bab 2 data lengkap (kosakata, bunpou, reibun, kaiwa, renshuu A/B/C, mondai) sudah ada di `src/data/bab02/` — jadi template kualitas untuk bab lain.
- **Halaman `/partikel` sudah ada** (38 partikel + 100 soal ujian). Detail di §3b. Jangan hapus/regresi route, kartu Home, atau `.partikel-*` di `paper.css`.
- **Data partikel SUDAH DIPECAH** jadi modul `src/data/partikel/` (commit `374a494`) — bukan lagi `partikel.ts` tunggal. `index.ts` re-export; konsumen tetap `from '../data/partikel'`. Invariant data dijaga `npm run validate:partikel` (masuk `guard`). Jangan menggabung balik jadi satu file. Lihat §3b + §3 #20–#23.
- **Kontainer desktop diperlebar** (keputusan user "cukup perlebar kontainer global"): Home `max-w-6xl`, Partikel `max-w-6xl`, Susun & BabDetail `max-w-5xl`. Jangan kembalikan ke `max-w-3xl/4xl` (dulu menyisakan ruang kosong besar di desktop).
- **Verifikasi mobile WAJIB pakai CDP device emulation** (§3 #18), bukan `--window-size`. Cek port dulu (§3 #19).
- GitHub `main` berisi: cb5789e (initial), 7f708b3 (AGENTS.md + polish mobile), 962b555 (Bab 2), a7b95d3 (motion.css).
- **Latihan susun dirombak** (lihat §3c): sesi satu-soal-per-layar (20 soal), pemilih bab, mode Dasar/Ahli, **auto-check**, panel keterangan bacaan. Key localStorage lama dipertahankan; mode ahli memakai key `…-ahli` terpisah. **Jangan** kembalikan render 1.000 soal sekaligus, jangan hapus auto-check/panel bacaan, dan jangan pecah kanji tanpa bacaan (dijaga `npm run validate:susun`).

---

## 10. Peta cepat — "mau mengubah X → sentuh Y"

> Supaya tak perlu menelusuri seluruh repo. Detail modul: `npm run map`.

| Mau mengubah… | Sentuh file/folder |
|---|---|
| isi materi 1 bab (kosakata/bunpou/reibun/kaiwa/renshuu/mondai/susun) | `src/data/babNN/*.ts` (+ `index.ts`) |
| menambah bab baru | `npm run add:bab NN` → isi; lalu `npm run gen:meta` + `npm run gen:kamus`; registry otomatis (`import.meta.glob`) |
| bundel awal / data per bab (code-split) | `src/data/load.ts` (loadBab) · `src/data/meta.ts` (ringkasan, di-generate) · `src/App.tsx` (rute lazy) |
| kamus kanji (baca/arti/ dikenal) | `src/data/kamus/terbangun.ts` (di-generate `npm run gen:kamus`) + `override.ts` |
| logika benar/salah jawaban | `src/core/text/normalize.ts` |
| koreksi terjemahan (soft-match) | `src/core/text/terjemahan.ts` |
| latihan menyusun (bank/koreksi/pengecoh) | `src/core/text/susun.ts` |
| pemecahan partikel mode Ahli | `src/core/text/segmentPartikel.ts` |
| bacaan kanji (panel keterangan) | `src/core/text/baca.ts` + `src/data/kamus/override.ts` |
| validasi data bab | `src/core/validation/schema.ts` + `tools/validate*.ts` |
| jumlah track audio | `src/core/audio/manifest.ts` |
| halaman detail bab (seksi/urutan) | `src/pages/BabDetailPage.tsx` + `src/features/bab/` |
| komponen/atom UI bersama (Section, AudioBar, Ruby, …) | `src/features/bab/` |
| gaya visual (warna/token/komponen) | `src/styles/tokens.css` + `src/styles/paper/*.css` |
| animasi | `src/styles/motion.css` (satu tempat) |
| navigasi atas | `src/components/TopNav.tsx` |
| data partikel & soal ujian | `src/data/partikel/`, `src/data/partikel-soal.ts` |
| halaman partikel | `src/pages/PartikelPage.tsx` + `src/features/partikel/` |
| halaman susun campuran | `src/pages/SusunCampuranPage.tsx` + `src/features/susun/` |
| tema terang/gelap | `src/store/useTheme.ts` + `index.html` (anti-FOUC) |
| tes | `src/**/*.test.ts` (`npm run test`) |

**Prinsip pemeliharaan:** file < ~200 baris, satu komponen/fungsi per file, vertical slice di `src/features/`; `src/core/*` murni (tanpa React) agar mudah diuji. `paper.css` = entry `@import` dan **urutan impor = cascade** (jangan diacak tanpa bukti CSS build identik). Menambah dependensi = **tanya dulu** (yang sudah disetujui: `tsx`, `vitest`).
