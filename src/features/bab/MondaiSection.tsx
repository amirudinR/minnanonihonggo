import type { MondaiItem } from '../../types/bab'
import { Section } from './Section'
import { SoalInteraktif } from './SoalInteraktif'

/** Seksi Mondai: daftar butir soal interaktif. */
export function MondaiSection({ items, num }: { items: MondaiItem[]; num: number }) {
  return (
    <Section id="mondai" title="Mondai">
      {items.map((m) => (
        <SoalInteraktif
          key={m.no}
          no={m.no}
          mkey={`b${num}-mondai-${m.no}`}
          soal={m.soal}
          audio={m.audio}
          instruksi={m.instruksi}
          pilihan={m.pilihan}
          jawaban={m.jawaban}
          kunciTersedia={m.kunciTersedia}
        />
      ))}
    </Section>
  )
}
