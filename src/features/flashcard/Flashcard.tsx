import { useMemo, useState } from 'react'
import type { KosaKata } from '@/types/bab'

type Mode = 'jp-id' | 'id-jp'

/**
 * Flashcard kosakata: tampilkan sisi depan, klik untuk membalik, lalu tandai
 * "Hafal" / "Ulangi". Bisa dibalik arah (Jepang↔Indonesia) dan diacak.
 */
export function Flashcard({ kosakata }: { kosakata: KosaKata[] }) {
  const [mode, setMode] = useState<Mode>('jp-id')
  const [acak, setAcak] = useState(false)
  const [urut, setUrut] = useState(0)
  const [balik, setBalik] = useState(false)
  const [hafal, setHafal] = useState<Set<string>>(new Set())
  const [ulangi, setUlangi] = useState<Set<string>>(new Set())

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
  if (!kartuSkrg) return null

  const depan =
    mode === 'jp-id' ? kartuSkrg.kana : kartuSkrg.arti
  const belakang =
    mode === 'jp-id' ? kartuSkrg.arti : kartuSkrg.kana

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

      <button
        type="button"
        className={`flash__card ${balik ? 'flash__card--balik' : ''}`}
        onClick={() => setBalik((b) => !b)}
        aria-label="Balik kartu"
      >
        <span className="flash__label">{balik ? 'Jawaban' : 'Soal'}</span>
        <span className={`flash__text ${mode === 'jp-id' && !balik ? 'jp' : ''}`} lang={mode === 'jp-id' && !balik ? 'ja' : undefined}>
          {balik ? belakang : depan}
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
      </p>
    </div>
  )
}
