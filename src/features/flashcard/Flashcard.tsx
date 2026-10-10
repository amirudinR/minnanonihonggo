import { useEffect, useMemo, useRef, useState } from 'react'
import type { KosaKata } from '@/types/bab'

type Mode = 'jp-id' | 'id-jp'

/** Baca set tersimpan dari localStorage (JSON). */
function bacaSet(kunci: string): Set<string> {
  try {
    const raw = localStorage.getItem(kunci)
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set()
  } catch {
    return new Set()
  }
}
function simpanSet(kunci: string, s: Set<string>) {
  localStorage.setItem(kunci, JSON.stringify([...s]))
}

/**
 * Flashcard kosakata: sisi depan = kata (kanji + furigana + kana), sisi
 * belakang = arti + contoh. Bisa dibalik arah (Jepang↔Indonesia) dan diacak.
 * Shortcut keyboard: Spasi = balik, ←/→ = navigasi, H = hafal, U = ulangi.
 * Tanda hafal/ulangi disimpan per bab di localStorage.
 */
export function Flashcard({ kosakata, babNo = 0 }: { kosakata: KosaKata[]; babNo?: number }) {
  const [mode, setMode] = useState<Mode>('jp-id')
  const [acak, setAcak] = useState(false)
  const [urut, setUrut] = useState(0)
  const [balik, setBalik] = useState(false)
  const [hafal, setHafal] = useState<Set<string>>(() => bacaSet(`mnn1_fc_v1_hafal_${babNo}`))
  const [ulangi, setUlangi] = useState<Set<string>>(() => bacaSet(`mnn1_fc_v1_ulangi_${babNo}`))

  useEffect(() => simpanSet(`mnn1_fc_v1_hafal_${babNo}`, hafal), [hafal, babNo])
  useEffect(() => simpanSet(`mnn1_fc_v1_ulangi_${babNo}`, ulangi), [ulangi, babNo])

  const kartu = useMemo(() => {
    const arr = [...kosakata]
    if (acak) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    return arr
  }, [kosakata, acak])

  const total = kartu.length
  const kartuSkrg = kartu[urut]
  if (!kartuSkrg) return <p className="text-sm text-ink-soft">Kosakata bab ini belum tersedia.</p>

  const tandai = (status: 'hafal' | 'ulangi') => {
    setHafal((s) => {
      const n = new Set(s)
      status === 'hafal' ? n.add(kartuSkrg.id) : n.delete(kartuSkrg.id)
      return n
    })
    setUlangi((s) => {
      const n = new Set(s)
      status === 'ulangi' ? n.add(kartuSkrg.id) : n.delete(kartuSkrg.id)
      return n
    })
    next()
  }

  const prev = () => {
    setBalik(false)
    setUrut((i) => (i - 1 + total) % total)
  }
  const next = () => {
    setBalik(false)
    setUrut((i) => (i + 1) % total)
  }

  // Shortcut keyboard (nonaktif saat fokus di input/select).
  const nextRef = useRef(next)
  const prevRef = useRef(prev)
  const tandaiRef = useRef(tandai)
  nextRef.current = next
  prevRef.current = prev
  tandaiRef.current = tandai

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return
      if (e.key === ' ') {
        if (e.repeat) return
        e.preventDefault()
        setBalik((b) => !b)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextRef.current()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevRef.current()
      } else if (e.key === 'h' || e.key === 'H') {
        tandaiRef.current('hafal')
      } else if (e.key === 'u' || e.key === 'U') {
        tandaiRef.current('ulangi')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const depan = mode === 'jp-id' ? kartuSkrg.kana : kartuSkrg.arti
  const belakang = mode === 'jp-id' ? kartuSkrg.arti : kartuSkrg.kana
  const sub =
    mode === 'jp-id'
      ? kartuSkrg.kanji
        ? kartuSkrg.kanji
        : kartuSkrg.catatan ?? ''
      : kartuSkrg.kanji
        ? `${kartuSkrg.kanji}（${kartuSkrg.kana}）`
        : kartuSkrg.kana
  const contoh = kartuSkrg.contoh
  const progres = Math.round(((urut + 1) / total) * 100)

  return (
    <div className="flash">
      <div className="flash__bar">
        <div className="flash__seg">
          <button
            type="button"
            className={`chip ${mode === 'jp-id' ? 'chip--aktif' : ''}`}
            onClick={() => setMode('jp-id')}
          >
            日本語 → Indonesia
          </button>
          <button
            type="button"
            className={`chip ${mode === 'id-jp' ? 'chip--aktif' : ''}`}
            onClick={() => setMode('id-jp')}
          >
            Indonesia → 日本語
          </button>
        </div>
        <label className="flash__acak">
          <input type="checkbox" checked={acak} onChange={(e) => { setAcak(e.target.checked); setUrut(0) }} />
          Acak
        </label>
      </div>

      <div className="flash__prog" role="progressbar" aria-label="Progres kartu" aria-valuenow={progres} aria-valuemin={0} aria-valuemax={100}>
        <div style={{ width: `${progres}%` }} />
      </div>

      <button
        type="button"
        className={`flash__card ${balik ? 'flash__card--balik' : ''}`}
        onClick={() => setBalik((b) => !b)}
        aria-label="Balik kartu"
      >
        <span className="flash__face flash__face--front">
          <span className="flash__label">Soal</span>
          <span className={`flash__text ${mode === 'jp-id' ? 'jp flash__text--jp' : ''}`} lang={mode === 'jp-id' ? 'ja' : undefined}>
            {depan}
          </span>
          {sub && (
            <span className="flash__sub" lang="ja">
              {sub}
            </span>
          )}
        </span>
        <span className="flash__face flash__face--back">
          <span className="flash__label">Jawaban</span>
          <span className="flash__text">{belakang}</span>
          {contoh && (
            <span className="flash__sub">
              {contoh}
              {kartuSkrg.catatan ? ` — ${kartuSkrg.catatan}` : ''}
            </span>
          )}
        </span>
        <span className="flash__hint">klik untuk {balik ? 'kembali' : 'lihat jawaban'}</span>
      </button>

      <div className="flash__aksi">
        <button type="button" className="chip" onClick={prev} aria-label="Kartu sebelumnya">‹ Mundur</button>
        <button type="button" className="chip chip--ulangi" onClick={() => tandai('ulangi')}>↻ Ulangi</button>
        <button type="button" className="chip chip--hafal" onClick={() => tandai('hafal')}>✓ Hafal</button>
        <button type="button" className="chip" onClick={next} aria-label="Kartu berikutnya">Maju ›</button>
      </div>

      <p className="flash__progres" role="status">
        Kartu {urut + 1} / {total}
        <span aria-hidden> · </span>
        ✓ {hafal.size} hafal
        <span aria-hidden> · </span>
        ↻ {ulangi.size} ulangi
        <span aria-hidden> · </span>
        <span className="text-ink-faint">Spasi balik · ←/→ navigasi · H hafal · U ulangi</span>
      </p>
    </div>
  )
}
