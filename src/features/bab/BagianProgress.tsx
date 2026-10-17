import type { Bab } from '../../types/bab'
import { useProgress } from '../../store/useProgress'
import { Section } from './Section'
import { sectionsOf } from './sectionsOf'

/**
 * Checklist "sudah dikuasai" per bagian bab (di luar 'coretan'/'bagian').
 * Tersimpan di useProgress.bagianSelesai.
 */
export function BagianProgress({ bab, babNo }: { bab: Bab; babNo: number }) {
  const bagianSelesai = useProgress(
    (s) => s.items.find((x) => x.no === babNo)?.bagianSelesai,
  )
  const toggleBagian = useProgress((s) => s.toggleBagian)

  const daftar = sectionsOf(bab).filter((s) => s.id !== 'coretan' && s.id !== 'bagian')
  const done = bagianSelesai ?? []
  const selesaiCount = daftar.filter((s) => done.includes(s.id)).length

  return (
    <Section id="bagian" title={`Progress Per-Bagian (${selesaiCount}/${daftar.length})`}>
      <p className="text-sm text-ink-soft" style={{ marginTop: 0 }}>
        Centang bagian yang sudah kamu kuasai. Ini terpisah dari skor latihan.
      </p>
      <ul className="bagian">
        {daftar.map((s) => {
          const sudah = done.includes(s.id)
          return (
            <li key={s.id}>
              <label className={`bagian__item ${sudah ? 'bagian__item--selesai' : ''}`}>
                <input
                  type="checkbox"
                  checked={sudah}
                  onChange={() => toggleBagian(babNo, s.id)}
                />
                <span>{s.label}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
