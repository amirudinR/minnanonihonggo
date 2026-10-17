import { useNotes } from '../../store/useNotes'
import { adaJawaban, matchLevel } from '../../core/text/normalize'
import { AudioBar } from './AudioBar'
import { TextWithNewlines } from './TextWithNewlines'

/**
 * Satu butir Mondai: baris soal + input per baris, opsional pilihan ganda,
 * audio, dan (bila ada kunci) input jawaban + verdict.
 */
export function SoalInteraktif({
  mkey,
  soal,
  audio,
  instruksi,
  pilihan,
  jawaban,
  kunciTersedia,
  no
}: {
  mkey: string
  soal: string
  audio?: string
  instruksi?: string
  pilihan?: string[]
  jawaban?: string
  kunciTersedia?: boolean
  no: number
}) {
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)
  const lines = soal.split('\n').filter(l => l.trim())

  const lvl = adaJawaban(answers[mkey]) ? matchLevel(answers[mkey], jawaban ?? '') : null
  const kunciMulti = (jawaban ?? '').includes('\n')

  return (
    <div className="mb-4">
      <div className="flex gap-2">
        <span className="font-medium text-accent">{no}.</span>
        <div className="flex-1 min-w-0">
          {lines.map((line, i) => (
            <div key={i} className="soal-baris">
              <span className="soal-baris__teks" lang="ja"><TextWithNewlines text={line} inline /></span>
              <div className="soal-baris__input-wrapper">
                <input
                  type="text"
                  className="book-input"
                  placeholder={pilihan ? 'Jawaban baris ini…' : 'Tulis / terjemahkan baris ini…'}
                  value={answers[`${mkey}-line-${i}`] || ''}
                  onChange={(e) => setAnswer(`${mkey}-line-${i}`, e.target.value)}
                />
              </div>
            </div>
          ))}
          {instruksi && <p className="text-sm italic text-ink-soft mb-2">{instruksi}</p>}
          {audio && <div className="mb-2"><AudioBar src={audio} label={`Dengarkan soal ${no}`} /></div>}

          {pilihan && pilihan.length > 0 && (
            <ul className="mt-1 ml-4 mb-2 list-disc text-sm">
              {pilihan.map((p, i) => (
                <li key={i} lang="ja">{p}</li>
              ))}
            </ul>
          )}

          {kunciTersedia !== false && jawaban && (
            <div className="mt-2 p-3 bg-paper-light border rounded-lg shadow-sm">
              <label className="text-xs uppercase font-bold text-ink-faint tracking-wider mb-1 block">
                Jawaban Soal
              </label>
              {kunciMulti ? (
                <textarea
                  rows={Math.min(6, (jawaban ?? '').split('\n').length + 1)}
                  className="book-input book-input--area w-full font-bold"
                  placeholder="Jawaban (mis. 1) ①… 2) ②…)"
                  value={answers[mkey] || ''}
                  onChange={(e) => setAnswer(mkey, e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  className="book-input font-bold"
                  placeholder="Jawaban (mis. ①…)"
                  value={answers[mkey] || ''}
                  onChange={(e) => setAnswer(mkey, e.target.value)}
                />
              )}
              {lvl && (
                <div className={`mt-1 text-sm ${
                  lvl === 'tepat' ? 'text-selesai' : lvl === 'dekat' ? 'text-accent' : 'text-salah'
                }`}>
                  {lvl === 'tepat' ? 'Benar!' : lvl === 'dekat' ? 'Hampir tepat (typo?)' : 'Kurang tepat'}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
