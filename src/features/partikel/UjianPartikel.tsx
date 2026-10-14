import { useEffect, useMemo, useState } from 'react'
import { soalPartikel } from '../../data/partikel-soal'
import { useNotes } from '../../store/useNotes'

/** Kunci localStorage untuk jawaban ujian partikel (per id soal). */
export const KUNCI_UJIAN = 'partikel-ujian'

/** Mode ujian: pilihan ganda isi partikel + arti. Jawaban disimpan di localStorage. */
export function UjianPartikel({
  bab,
  onPilihBab,
}: {
  bab: number | 'semua'
  onPilihBab: (b: number | 'semua') => void
}) {
  const [mulai, setMulai] = useState(false)
  const [benih, setBenih] = useState(0)
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)

  // Deep-link langsung memulai: #ujian-mulai
  useEffect(() => {
    if (window.location.hash === '#ujian-mulai') setMulai(true)
  }, [])

  // Soal sesuai bab terpilih (acak ringan agar urutan berbeda tiap mulai).
  const soal = useMemo(() => {
    const list = soalPartikel.filter((s) => bab === 'semua' || s.bab === bab)
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[list[i], list[j]] = [list[j], list[i]]
    }
    return list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [benih, bab])

  const key = (s: { id: string }) => `${KUNCI_UJIAN}-${s.id}`
  const terisi = soal.filter((s) => answers[key(s)]).length
  const benar = soal.filter((s) => answers[key(s)] === s.jawaban).length
  const selesai = terisi === soal.length
  const progres = Math.round((terisi / soal.length) * 100)
  const lulus = selesai && benar / soal.length >= 0.7

  const reset = () => {
    if (window.confirm('Semua jawaban ujian akan dihapus. Lanjutkan?')) {
      for (const s of soal) setAnswer(key(s), '')
      setBenih((b) => b + 1)
    }
  }

  if (!mulai) {
    const adaJawaban = soal.some((s) => answers[key(s)])
    return (
      <div className="partikel-ujian__intro">
        <p>
          Uji pemahaman partikel: <strong>{soal.length} soal pilihan ganda</strong>
          {bab === 'semua' ? '' : ` (Bab ${bab})`}.
          Isi bagian rumpang <code>___</code> dengan partikel yang tepat, lalu lihat
          skor di akhir.
        </p>
        <p className="text-sm text-ink-soft">
          Ambang kelulusan: 70% benar. Jawaban otomatis tersimpan di perangkat ini.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            type="button"
            className="button button--primary"
            onClick={() => setMulai(true)}
            disabled={soal.length === 0}
          >
            {adaJawaban ? 'Lanjutkan ujian' : 'Mulai ujian'} <span aria-hidden>→</span>
          </button>
          {adaJawaban && (
            <button type="button" className="chip" onClick={reset}>
              ↻ Mulai dari nol
            </button>
          )}
        </div>
      </div>
    )
  }

  if (soal.length === 0) {
    return (
      <p className="text-sm text-ink-soft">
        Belum ada soal untuk Bab {bab}. Pilih bab lain atau "Semua bab".{' '}
        <button type="button" className="chip" onClick={() => { onPilihBab('semua'); setMulai(false) }}>
          Semua bab
        </button>
      </p>
    )
  }

  return (
    <div className="kuis">
      <div className="kuis__head">
        <p className="kuis__skor" role="status">
          Benar <strong>{benar}</strong> / {soal.length}
          <span aria-hidden> · </span>terisi {terisi}/{soal.length}
        </p>
        <button type="button" className="chip" onClick={reset}>
          ↻ Reset & acak ulang
        </button>
      </div>

      <div
        className="kuis__prog"
        role="progressbar"
        aria-label="Progres ujian"
        aria-valuenow={progres}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div style={{ width: `${progres}%` }} />
      </div>

      <ol className="kuis__list">
        {soal.map((s, i) => {
          const dipilih = answers[key(s)]
          const benarIni = dipilih === s.jawaban
          return (
            <li key={s.id} className="kuis__item">
              <p className="kuis__q">
                <span className="kuis__no">{i + 1}</span>
                <span lang="ja">{s.soal}</span>
              </p>
              <p className="text-sm text-ink-soft" style={{ margin: '0 0 8px', paddingLeft: 34 }}>
                {s.arti}
              </p>
              <div className="kuis__opsi">
                {s.pilihan.map((p) => {
                  const kelas =
                    dipilih === p
                      ? benarIni
                        ? 'opsi opsi--benar'
                        : 'opsi opsi--salah'
                      : dipilih && p === s.jawaban
                        ? 'opsi opsi--kunci'
                        : 'opsi'
                  return (
                    <button
                      key={p}
                      type="button"
                      className={kelas}
                      disabled={Boolean(dipilih)}
                      lang="ja"
                      onClick={() => setAnswer(key(s), p)}
                    >
                      {p}
                    </button>
                  )
                })}
              </div>
              {dipilih && (
                <p className={`kuis__fb ${benarIni ? 'kuis__fb--ok' : 'kuis__fb--no'}`}>
                  {benarIni
                    ? `✓ Benar — partikel ${s.jawaban} (Bab ${s.bab})`
                    : `✗ Yang benar: ${s.jawaban} (Bab ${s.bab})`}
                </p>
              )}
            </li>
          )
        })}
      </ol>

      {selesai && (
        <p className={`kuis__hasil ${lulus ? 'kuis__hasil--ok' : 'kuis__hasil--no'}`}>
          {lulus
            ? `Lulus! Benar ${benar} dari ${soal.length} (${Math.round((benar / soal.length) * 100)}%).`
            : `Belum lulus — benar ${benar} dari ${soal.length} (${Math.round((benar / soal.length) * 100)}%). Coba ulangi.`}
        </p>
      )}
    </div>
  )
}
