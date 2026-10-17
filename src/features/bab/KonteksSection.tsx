import type { Konteks } from '../../types/bab'
import { Section } from './Section'
import { TextWithNewlines } from './TextWithNewlines'

/** Seksi Konteks Latihan B (teks pendukung renshuuB). */
export function KonteksSection({ items }: { items: Konteks[] }) {
  return (
    <Section id="konteks" title="Konteks Latihan B">
      {items.map((k, i) => (
        <div key={i}>
          <h3 className="font-semibold">{k.judul}</h3>
          <TextWithNewlines text={k.teks ?? ''} />
        </div>
      ))}
    </Section>
  )
}
