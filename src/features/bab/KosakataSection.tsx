import { useState } from 'react'
import type { Bab } from '../../types/bab'
import { Section } from './Section'
import { Flashcard } from '../flashcard/Flashcard'
import { Kuis } from '../kuis/Kuis'

export type KosakataMode = 'tabel' | 'flash' | 'kuis'

/**
 * Seksi Kosakata dengan 3 tab (Daftar / Flashcard / Kuis).
 * `mode` & `onTabKey` dikelola pemanggil karena terkait navigasi panah bab.
 */
export function KosakataSection({
  bab,
  num,
  mode,
  setMode,
  showRomaji,
  onTabKey,
}: {
  bab: Bab
  num: number
  mode: KosakataMode
  setMode: (m: KosakataMode) => void
  showRomaji: boolean
  onTabKey: (e: React.KeyboardEvent) => void
}) {
  const [cariKata, setCariKata] = useState('')

  return (
    <Section id="kosakata" title="Kosakata" defaultOpen>
      <div className="seg" role="tablist" aria-label="Mode belajar kosakata" style={{ marginBottom: 10 }} onKeyDown={onTabKey}>
        {([
          ['tabel', 'Daftar'],
          ['flash', 'Flashcard'],
          ['kuis', 'Kuis'],
        ] as const).map(([m, label]) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            aria-controls={`panel-kosakata-${m}`}
            id={`tab-kosakata-${m}`}
            tabIndex={mode === m ? 0 : -1}
            className={`seg__item ${mode === m ? 'seg__item--aktif' : ''}`}
            onClick={() => {
              setMode(m)
              window.location.hash = m
              document.getElementById(`panel-kosakata-${m}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {mode === 'tabel' && (
        <div id="panel-kosakata-tabel" role="tabpanel" aria-labelledby="tab-kosakata-tabel">
        <div className="kosakata-search" style={{ marginBottom: 8, maxWidth: 320 }}>
          <input
            type="search"
            className="home-search"
            style={{ width: '100%' }}
            placeholder="Cari kata…"
            value={cariKata}
            onChange={(e) => setCariKata(e.target.value)}
            aria-label="Cari kosakata"
          />
        </div>
        <table className="vokab">
          <caption className="sr-caption">Kosakata Bab {num}</caption>
          <thead>
            <tr>
              <th scope="col">Kana</th>
              <th scope="col">Kanji</th>
              {showRomaji && <th scope="col">Romaji</th>}
              <th scope="col">Arti</th>
            </tr>
          </thead>
          <tbody>
            {bab.kosakata
              .filter((k) => {
                if (!cariKata.trim()) return true
                const q = cariKata.toLowerCase()
                return (
                  k.kana.toLowerCase().includes(q) ||
                  k.kanji?.toLowerCase().includes(q) ||
                  k.arti.toLowerCase().includes(q)
                )
              })
              .map((k) => (
              <tr key={k.id}>
                <td data-label="Kana" lang="ja">{k.kana}</td>
                <td data-label="Kanji" lang="ja">
                  {k.kanji ? (
                    <span className="kanji">{k.kanji}</span>
                  ) : (
                    <span className="kosong">·</span>
                  )}
                </td>
                {showRomaji && <td data-label="Romaji" className="romaji">{k.romaji ?? '—'}</td>}
                <td data-label="Arti">
                  {k.arti}
                  {k.catatan && <span className="block text-xs italic text-ink-soft">{k.catatan}</span>}
                  {k.contoh && <span className="block text-xs text-ink-soft">contoh: {k.contoh}</span>}
                </td>
               </tr>
              ))}
          </tbody>
        </table>
        </div>
      )}
      {mode === 'flash' && <div id="panel-kosakata-flash" role="tabpanel" aria-labelledby="tab-kosakata-flash"><Flashcard kosakata={bab.kosakata} babNo={num} /></div>}
      {mode === 'kuis' && <div id="panel-kosakata-kuis" role="tabpanel" aria-labelledby="tab-kosakata-kuis"><Kuis kosakata={bab.kosakata} babNo={num} /></div>}
    </Section>
  )
}
