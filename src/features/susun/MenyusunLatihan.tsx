import { useMemo, useState } from 'react'
import type { SusunItem } from '../../types/bab'
import { useNotes } from '../../store/useNotes'
import { acak, sudahBenar, sudahBenarAhli } from '../../core/text/susun'
import { KATA_DIKENAL } from '../../data/kamus'
import {
  SoalMenyusun,
  urutanKeString,
  stringKeUrutan,
  type SusunMode,
} from './index'

/**
 * Latihan menyusun kalimat untuk satu bab.
 * Judul + skor + daftar soal. Soal & bank diacak deterministik.
 */
export function MenyusunLatihan({
  babNo,
  items,
}: {
  babNo: number
  items: SusunItem[]
}) {
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)
  const [seed, setSeed] = useState(0)
  const [hanyaBelum, setHanyaBelum] = useState(false)
  const [mode, setMode] = useState<SusunMode>('dasar')
  const [autoCheck, setAutoCheck] = useState(true)

  const urutan = useMemo(
    () => (seed === 0 ? items.map((_, i) => i) : acak(items.map((_, i) => i), seed)),
    [items, seed],
  )

  // Mode dasar memakai key lama (progres user tidak hilang); mode ahli key sendiri.
  const key = (it: SusunItem) =>
    mode === 'ahli' ? `b${babNo}-susun-${it.id}-ahli` : `b${babNo}-susun-${it.id}`
  const opsi = useMemo(() => ({ kataDikenal: KATA_DIKENAL }), [])
  const cek = (it: SusunItem) =>
    mode === 'ahli' ? sudahBenarAhli(it, answers[key(it)], opsi) : sudahBenar(it, answers[key(it)])
  const list = hanyaBelum ? urutan.filter((i) => !cek(items[i])) : urutan
  const totalBenar = items.filter(cek).length

  return (
    <div className="susun-latihan">
      <div className="susun-latihan__bar">
        <p className="text-sm font-medium text-ink-soft">
          Skor Susun: {totalBenar} benar dari {items.length}
          {mode === 'ahli' && ' · mode ahli'}
        </p>
        <div className="susun__aksi">
          <div className="flash__seg" role="group" aria-label="Tingkat kesulitan">
            <button
              type="button"
              className={`chip ${mode === 'dasar' ? 'chip--aktif' : ''}`}
              onClick={() => setMode('dasar')}
            >
              Dasar
            </button>
            <button
              type="button"
              className={`chip ${mode === 'ahli' ? 'chip--aktif' : ''}`}
              onClick={() => setMode('ahli')}
            >
              Ahli
            </button>
          </div>
          <button
            type="button"
            className={`chip ${autoCheck ? 'chip--aktif' : ''}`}
            onClick={() => setAutoCheck((v) => !v)}
            aria-pressed={autoCheck}
          >
            Auto-check
          </button>
          <button type="button" className="chip" onClick={() => setSeed((s) => s + 1)}>
            Acak soal
          </button>
          <button
            type="button"
            className={`chip ${hanyaBelum ? 'chip--aktif' : ''}`}
            onClick={() => setHanyaBelum((v) => !v)}
            aria-pressed={hanyaBelum}
          >
            {hanyaBelum ? 'Tampilkan semua' : 'Hanya yang belum benar'}
          </button>
        </div>
      </div>

      <ol className="susun-latihan__list">
        {list.map((idx) => (
          <li key={`${items[idx].id}-${mode}`}>
            <SoalMenyusun
              item={items[idx]}
              nomor={idx + 1}
              mode={mode}
              autoCheck={autoCheck}
              value={stringKeUrutan(answers[key(items[idx])] ?? '')}
              onChange={(v) => setAnswer(key(items[idx]), urutanKeString(v))}
            />
          </li>
        ))}
      </ol>
      {list.length === 0 && (
        <p className="text-sm text-ink-soft">Semua soal sudah benar. 🎉</p>
      )}
    </div>
  )
}
