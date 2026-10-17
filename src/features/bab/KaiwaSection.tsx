import type { Kaiwa } from '../../types/bab'
import { Section } from './Section'
import { AudioBar } from './AudioBar'
import { Ruby } from './Ruby'
import { TerjemahanList } from './TerjemahanList'

/** Seksi Kaiwa: audio + dialog (furigana) + latihan terjemahan. */
export function KaiwaSection({ kaiwa, num, showFurigana }: { kaiwa: Kaiwa; num: number; showFurigana: boolean }) {
  return (
    <Section id="kaiwa" title={`Kaiwa — ${kaiwa.judul ?? ''}`}>
      {kaiwa.audio && <AudioBar src={kaiwa.audio} label="Dengarkan dialog Kaiwa" />}
      <div className="mt-2">
        {kaiwa.dialog.map((d) => (
          <p key={d.no} className="mb-1">
            <strong>{d.pembicara}: </strong>
            <span lang="ja">
              <Ruby text={d.teks} furigana={d.furigana} show={showFurigana} />
            </span>
            {d.arti && <span className="block text-sm italic text-ink-soft">{d.arti}</span>}
          </p>
        ))}
      </div>
      <TerjemahanList
        items={kaiwa.dialog
          .filter((d) => d.arti)
          .map((d) => ({
            key: `b${num}-terj-kaiwa-${d.no}`,
            judul: d.pembicara,
            jp: d.teks,
            kunci: d.arti as string,
          }))}
      />
    </Section>
  )
}
