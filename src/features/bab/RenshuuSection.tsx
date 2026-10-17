import type { RenshuuItem } from '../../types/bab'
import { Section } from './Section'
import { LatihanList } from './LatihanList'

/** Seksi latihan Renshuu (A / B / C). */
export function RenshuuSection({
  id,
  title,
  section,
  items,
  num,
}: {
  id: string
  title: string
  section: string
  items: RenshuuItem[]
  num: number
}) {
  return (
    <Section id={id} title={title}>
      <LatihanList items={items} section={section} babNo={num} />
    </Section>
  )
}
