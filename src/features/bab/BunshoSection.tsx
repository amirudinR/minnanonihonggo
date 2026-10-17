import type { Bunsho } from '../../types/bab'
import { Section } from './Section'

/** Seksi Bunsho (bacaan) — judul opsional + teks + terjemahan opsional. */
export function BunshoSection({ items }: { items: Bunsho[] }) {
  return (
    <Section id="bunsho" title="Bunsho">
      {items.map((b, i) => (
        <div key={i}>
          {b.judul && <h3 className="font-semibold">{b.judul}</h3>}
          <p lang="ja">{b.teks}</p>
          {b.arti && <p className="text-sm italic text-ink-soft">{b.arti}</p>}
        </div>
      ))}
    </Section>
  )
}
