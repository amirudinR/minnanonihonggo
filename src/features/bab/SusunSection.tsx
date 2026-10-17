import type { SusunItem } from '../../types/bab'
import { Section } from './Section'
import { MenyusunLatihan } from '../susun'

/** Seksi latihan Menyusun Kalimat untuk satu bab. */
export function SusunSection({ items, num }: { items: SusunItem[]; num: number }) {
  return (
    <Section id="susun" title="Menyusun Kalimat">
      <MenyusunLatihan babNo={num} items={items} />
    </Section>
  )
}
