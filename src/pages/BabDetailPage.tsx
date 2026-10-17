import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { Bab } from '../types/bab'
import { loadBab } from '../data/load'
import { useProgress } from '../store/useProgress'
import { useNotes } from '../store/useNotes'
import {
  BabHero,
  ToolbarTampilan,
  BabToc,
  KosakataSection,
  type KosakataMode,
  PolaSection,
  ReibunSection,
  KaiwaSection,
  KonteksSection,
  SusunSection,
  RenshuuSection,
  MondaiSection,
  ChoukaiSection,
  BunshoSection,
  RangkumanSection,
  CoretanSection,
  BagianProgress,
  KoreksiPanel,
} from '../features/bab'

export default function BabDetailPage() {
  const { no } = useParams()
  const num = Number(no)
  // Bab dimuat DINAMIS (code-split per bab) — lihat src/data/load.ts.
  // undefined = sedang dimuat · null = tidak ada.
  const [bab, setBab] = useState<Bab | null | undefined>(undefined)
  const p = useProgress((s) => s.items.find((x) => x.no === num))
  const setSelesai = useProgress((s) => s.setSelesai)
  const catatan = useNotes((s) => s.catatan)
  const setCatatan = useNotes((s) => s.setCatatan)
  const [showRomaji, setShowRomaji] = useState(false)
  const [showFurigana, setShowFurigana] = useState(true)
  const [modeKosakata, setModeKosakata] = useState<KosakataMode>('tabel')
  const [showTop, setShowTop] = useState(false)

  // Muat bab terpilih (dinamis). `batal` menjaga agar hasil yang sudah usang
  // (setelah pindah bab) tidak menimpa state.
  useEffect(() => {
    let batal = false
    setBab(undefined)
    loadBab(num).then((b) => {
      if (!batal) setBab(b ?? null)
    })
    return () => {
      batal = true
    }
  }, [num])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Navigasi bab dengan arrow key (←/→) — HANYA saat tab Daftar aktif.
  // Tab Flashcard/Kuis memakai ←/→ untuk dirinya sendiri (dulu saling bentrok →
  // menekan panah di Flashcard malah pindah bab).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (modeKosakata !== 'tabel') return
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return
      if (e.key === 'ArrowLeft' && num > 1) window.location.href = `/bab/${num - 1}`
      if (e.key === 'ArrowRight' && num < 50) window.location.href = `/bab/${num + 1}`
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [num, modeKosakata])

  // Navigasi tab Daftar/Flashcard/Kuis dengan arrow-key (pola ARIA tablist).
  const modeTab = ['tabel', 'flash', 'kuis'] as const
  const onTabKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const i = modeTab.indexOf(modeKosakata)
    const next = e.key === 'ArrowRight' ? (i + 1) % modeTab.length : (i + modeTab.length - 1) % modeTab.length
    setModeKosakata(modeTab[next])
    window.location.hash = modeTab[next]
    requestAnimationFrame(() => {
      document.getElementById(`tab-kosakata-${modeTab[next]}`)?.focus()
    })
  }

  // Deep-linking: sinkronisasi tab dengan URL hash (#flash, #kuis)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (modeTab.includes(hash as KosakataMode)) {
      setModeKosakata(hash as KosakataMode)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (bab === undefined) {
    return (
      <div className="app max-w-5xl mx-auto p-4 md:p-8 lg:p-10">
        <div className="book">
          <p className="text-ink-soft" role="status">
            Memuat bab {num}…
          </p>
        </div>
      </div>
    )
  }

  if (bab === null) {
    return (
      <div className="app max-w-5xl mx-auto p-4 md:p-8 lg:p-10">
        <div className="book">
          <p>
            <Link to="/">← Kembali ke daftar bab</Link>
          </p>
          <h1>Bab {num}</h1>
          <p className="text-ink-soft">Materi bab ini belum tersedia.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app max-w-5xl mx-auto p-4 md:p-8 lg:p-10">
      <main className="book">
        <span className="page-curl" aria-hidden />

        <BabHero num={num} bab={bab} selesai={p?.selesai} skor={p?.skor} />

        <div className="bab-context" aria-label="Ringkasan materi bab">
          <span><strong>{bab.kosakata.length}</strong> kosakata</span>
          <span><strong>{bab.bunpou.length}</strong> pola bunpou</span>
          <span>{bab.renshuuA.length + bab.renshuuB.length + bab.renshuuC.length} latihan</span>
          <button
            type="button"
            className="chip"
            onClick={() => document.getElementById('koreksi')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            Koreksi semua
          </button>
        </div>

        <ToolbarTampilan
          showFurigana={showFurigana}
          onFurigana={setShowFurigana}
          showRomaji={showRomaji}
          onRomaji={setShowRomaji}
        />

        <BabToc bab={bab} />

        {bab.kosakata.length > 0 && (
          <KosakataSection
            bab={bab}
            num={num}
            mode={modeKosakata}
            setMode={setModeKosakata}
            showRomaji={showRomaji}
            onTabKey={onTabKey}
          />
        )}

        {bab.bunpou.length > 0 && (
          <PolaSection
            id="bunpou"
            title="Bunpou"
            items={bab.bunpou}
            variant="bunpou"
            babNo={num}
            soal={bab.bunpouSoal?.filter((s) => s.grup === 'bunpou')}
            defaultOpen
          />
        )}

        {bab.catatanTataBahasa && bab.catatanTataBahasa.length > 0 && (
          <PolaSection
            id="catatan"
            title="Catatan Tata Bahasa"
            items={bab.catatanTataBahasa}
            variant="catatan"
            babNo={num}
            soal={bab.bunpouSoal?.filter((s) => s.grup === 'catatan')}
          />
        )}

        {bab.reibun.length > 0 && <ReibunSection items={bab.reibun} num={num} />}

        {bab.kaiwa && <KaiwaSection kaiwa={bab.kaiwa} num={num} showFurigana={showFurigana} />}

        {/* konteks untuk renshuuB */}
        {bab.konteks && bab.konteks.length > 0 && <KonteksSection items={bab.konteks} />}

        {bab.susun && bab.susun.length > 0 && <SusunSection items={bab.susun} num={num} />}

        {bab.renshuuA.length > 0 && <RenshuuSection id="renshuuA" title="Renshuu A" section="A" items={bab.renshuuA} num={num} />}
        {bab.renshuuB.length > 0 && <RenshuuSection id="renshuuB" title="Renshuu B" section="B" items={bab.renshuuB} num={num} />}
        {bab.renshuuC.length > 0 && <RenshuuSection id="renshuuC" title="Renshuu C" section="C" items={bab.renshuuC} num={num} />}

        {bab.mondai.length > 0 && <MondaiSection items={bab.mondai} num={num} />}

        <ChoukaiSection num={num} />

        {bab.bunsho.length > 0 && <BunshoSection items={bab.bunsho} />}

        {bab.rangkuman && <RangkumanSection teks={bab.rangkuman} />}

        <BagianProgress bab={bab} babNo={num} />

        <KoreksiPanel bab={bab} babNo={num} />

        <CoretanSection num={num} value={catatan[num] ?? ''} onChange={(v) => setCatatan(num, v)} />

        <button
          type="button"
          className="mt-4 min-h-[44px] rounded border border-[rgba(67,56,43,0.3)] bg-paper px-4 focus-visible:outline-3 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          onClick={() => {
            if (p?.selesai) {
              if (window.confirm('Batalkan status selesai? Progres akan dihapus.')) setSelesai(num, false)
            } else {
              setSelesai(num, true)
            }
          }}
        >
          {p?.selesai ? 'Batalkan selesai' : 'Tandai selesai'}
        </button>
      </main>

      <button
        type="button"
        className={`back-to-top ${showTop ? 'back-to-top--visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Kembali ke atas"
      >
        ↑
      </button>
    </div>
  )
}
