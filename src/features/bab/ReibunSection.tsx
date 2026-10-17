import type { ReibunItem } from '../../types/bab'
import { Section } from './Section'
import { TerjemahanList } from './TerjemahanList'

/** Seksi Contoh Kalimat (Reibun) — latihan terjemahan soft-match. */
export function ReibunSection({ items, num }: { items: ReibunItem[]; num: number }) {
  return (
    <Section id="reibun" title="Contoh Kalimat (Reibun)">
      <TerjemahanList
        items={items.map((r, i) => ({
          key: `b${num}-terj-reibun-${i}`,
          judul: '(Reibun)',
          jp: r.kalimat,
          kunci: r.arti,
        }))}
      />
    </Section>
  )
}
