# Paper Study Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Polish Home dan halaman detail bab agar terasa seperti dashboard belajar premium yang konsisten dengan tema kertas.

**Architecture:** Pertahankan halaman React dan store yang ada. Tambahkan struktur presentasi di `HomePage.tsx`, perkuat class visual di `paper.css`, dan rapikan token global di `tokens.css`; tidak ada perubahan domain atau data.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, CSS custom properties.

## Global Constraints

- Pertahankan tema kertas premium dan data offline dari `PLAN.md`.
- Jangan menambah dependensi.
- Pertahankan aksesibilitas keyboard, reduced-motion, dan layout mobile.
- Validasi dengan `npm run typecheck` dan `npm run build`.

### Task 1: Refresh visual tokens and paper surface

**Files:**
- Modify: `src/styles/tokens.css`
- Modify: `src/styles/paper.css`

- [ ] Perbarui token tipografi, shadow, dan warna pendukung tanpa mengubah warna kontras utama.
- [ ] Tambahkan style dashboard, progress summary, action panel, dan state list bab.
- [ ] Tambahkan breakpoint mobile dan reduced-motion untuk style baru.

### Task 2: Rebuild Home as study dashboard

**Files:**
- Modify: `src/pages/HomePage.tsx`

- [ ] Derive current/next available chapter from existing `items` and `getBab` data.
- [ ] Render summary metrics, continue-learning action, and grouped chapter index.
- [ ] Keep all existing links, completion state, score state, and locked chapters.

### Task 3: Polish chapter detail hierarchy

**Files:**
- Modify: `src/pages/BabDetailPage.tsx`

- [ ] Add a compact learning context row and clearer control grouping.
- [ ] Replace decorative emoji-only labels with calm text labels where touched.
- [ ] Keep all existing exercise inputs, correction behavior, audio, and notes intact.

### Task 4: Validate the finished UI code

- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Fix only errors caused by the UI changes.
