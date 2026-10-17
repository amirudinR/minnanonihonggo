import { useState } from 'react'
import { useNotes } from '../../store/useNotes'
import { adaJawaban, countCorrect, matchLevel } from '../../core/text/normalize'
import { TextWithNewlines } from './TextWithNewlines'

/**
 * Daftar latihan Renshuu (A/B/C): textarea jawaban per butir + verdict otomatis
 * + "Lihat kunci"/"Lihat semua kunci" (inline 2 kolom Jawabanmu | Kunci).
 */
export function LatihanList({
  items,
  section,
  babNo,
}: {
  items: { no: number; soal: string; jawaban?: string; arti?: string }[]
  section: string
  babNo: number
}) {
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)
  const [bukaKunci, setBukaKunci] = useState<Set<number>>(new Set())
  const [semuaKunci, setSemuaKunci] = useState(false)
  const pairs = items
    .filter((r) => r.jawaban)
    .map((r) => ({ user: answers[`b${babNo}-${section}-${r.no}`] ?? '', expected: r.jawaban as string }))
  const score = countCorrect(pairs)
  const nomorKunci = items.filter((r) => r.jawaban).map((r) => r.no)
  const toggleSemua = () => {
    setSemuaKunci((v) => {
      const next = !v
      setBukaKunci(next ? new Set(nomorKunci) : new Set())
      return next
    })
  }
  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium text-ink-soft">
          Skor {section}: {score.benar} benar dari {score.total}
        </p>
        <button
          type="button"
          className="text-sm underline underline-offset-2 text-ink-soft"
          onClick={toggleSemua}
          aria-expanded={semuaKunci}
        >
          {semuaKunci ? 'Tutup semua kunci' : 'Lihat semua kunci'}
        </button>
      </div>
      <ol className="list-decimal pl-5">
        {items.map((r) => {
          const key = `b${babNo}-${section}-${r.no}`
          const lvl = adaJawaban(answers[key]) && r.jawaban
            ? matchLevel(answers[key], r.jawaban)
            : null
          const terlihat = semuaKunci || bukaKunci.has(r.no)
          return (
            <li key={r.no} className="mb-3">
              <span lang="ja" className="block text-[15px] leading-relaxed">
                <TextWithNewlines text={r.soal} inline />
              </span>
              <textarea
                rows={2}
                value={answers[key] ?? ''}
                onChange={(e) => setAnswer(key, e.target.value)}
                placeholder="Jawabanmu…"
                aria-label={`Jawaban ${section} nomor ${r.no}`}
                className="jawab mt-1"
              />
              <p className="latih-hint">Koreksi otomatis saat kamu mengetik.</p>
              {lvl && (
                <p className={`verdict ${lvl === 'tepat' ? 'verdict--ok' : lvl === 'dekat' ? 'verdict--hangat' : 'verdict--no'}`}>
                  {lvl === 'tepat' ? 'Benar' : lvl === 'dekat' ? 'Hampir — cek bagian yang kurang' : 'Belum cocok'}
                </p>
              )}
              {r.jawaban && (
                <div className="mt-1">
                  <button
                    type="button"
                    className="text-sm underline underline-offset-2 text-ink-soft"
                    onClick={() =>
                      setBukaKunci((s) => {
                        const n = new Set(s)
                        if (n.has(r.no)) n.delete(r.no)
                        else n.add(r.no)
                        return n
                      })
                    }
                    aria-expanded={terlihat}
                  >
                    {terlihat ? 'Tutup kunci' : 'Lihat kunci'}
                  </button>
                  {terlihat && (
                    <div className="kunci-box">
                      <div className="kunci-box__col">
                        <span className="kunci-box__tag">Jawabanmu</span>
                        <span className="kunci-box__isi">{answers[key] || '—'}</span>
                      </div>
                      <div className="kunci-box__col kunci-box__col--kunci">
                        <span className="kunci-box__tag">Kunci</span>
                        <span className="kunci-box__isi">{r.jawaban}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </>
  )
}
