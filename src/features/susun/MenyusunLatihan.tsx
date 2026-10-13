import { useMemo, useState } from 'react'
import type { SusunItem } from '../../types/bab'
import { useNotes } from '../../store/useNotes'
import { acak, hitungSkorSusun, sudahBenar } from '../../core/text/susun'
import { SoalMenyusun, urutanKeString, stringKeUrutan } from './SoalMenyusun'

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

  const urutan = useMemo(
    () => (seed === 0 ? items.map((_, i) => i) : acak(items.map((_, i) => i), seed)),
    [items, seed],
  )

  const key = (id: string) => `b${babNo}-susun-${id}`
  const skor = hitungSkorSusun(items, answers, (it) => key(it.id))

  const list = hanyaBelum
    ? urutan.filter((i) => !sudahBenar(items[i], answers[key(items[i].id)]))
    : urutan

  return (
    <div className="susun-latihan">
      <div className="susun-latihan__bar">
        <p className="text-sm font-medium text-ink-soft">
          Skor Susun: {skor.benar} benar dari {skor.total}
        </p>
        <div className="susun__aksi">
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
          <li key={items[idx].id}>
            <SoalMenyusun
              item={items[idx]}
              nomor={idx + 1}
              value={stringKeUrutan(answers[key(items[idx].id)] ?? '')}
              onChange={(v) => setAnswer(key(items[idx].id), urutanKeString(v))}
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
