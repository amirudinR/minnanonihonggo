# Paper Study Dashboard Design

## Goal

Menaikkan kualitas visual aplikasi belajar Minna no Nihongo menjadi dashboard belajar yang profesional tanpa meninggalkan identitas kertas premium dari `PLAN.md`.

## Direction

Gunakan arah **paper study dashboard**: latar kertas hangat, tinta cokelat gelap, aksen merah bata sebagai penanda progres, serta tipografi display bergaya catatan belajar untuk judul. Home menjadi halaman orientasi belajar; halaman bab menjadi lembar kerja yang mudah dipindai.

## Screen Design

- Home memiliki masthead, ringkasan progres, panel "lanjut belajar", dan indeks bab yang membedakan materi tersedia dari materi mendatang.
- Detail bab memiliki hero yang lebih tegas, kontrol tampilan yang jelas, TOC horizontal yang mudah dipindai, dan section latihan dengan hierarki soal/jawaban/kunci yang konsisten.
- Status selesai dan skor memakai label visual yang tenang, bukan dekorasi berlebihan.
- Mobile mempertahankan urutan informasi: konteks bab, progres, aksi utama, lalu materi.

## Constraints

- Tidak mengubah data bab, logika koreksi, atau persistence Zustand.
- Tidak menambah dependensi UI.
- Mempertahankan focus-visible, target sentuh minimum 44px, dan reduced-motion.
- Semua perubahan harus lolos `npm run typecheck` dan `npm run build`.
