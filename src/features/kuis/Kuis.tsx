import { useMemo, useState } from 'react'
import type { KosaKata } from '@/types/bab'

interface SoalKuis {
  id: string
  pertanyaan: string
  jawaban: string
  pilihan: string[]
}

/** Bangun soal pilihan ganda: "Apa arti <kana>?" dengan 3 pengecoh. */
function buatSoal(kosakata: KosaKata[], jumlah: number): SoalKuis[] {
  const pool = kosakata.filter(
    (k) => k.arti && !k.kana.startsWith('～') && k.kana.length > 1,
  )
  const dipakai = new Set<string>()
  const soal: SoalKuis[] = []
  const kandidat = [...pool]
  for (let i = kandidat.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[kandidat[i], kandidat[j]] = [kandidat[j], kandidat[i]]
  }
  for (const k of kandidat) {
    if (soal.length >= jumlah) break
    if (dipakai.has(k.id)) continue
    dipakai.add(k.id)
    const pengecoh = kandidat
      .filter((x) => x.id !== k.id && !dipakai.has(x.id) && x.arti !== k.arti)
      .slice(0, 3)
      .map((x) => x.arti)
    const pilihan = [...pengecoh, k.arti].sort(() => Math.random() - 0.5)
    soal.push({
      id: k.id,
      pertanyaan: k.kanji ? `${k.kanji}（${k.kana}）` : k.kana,
      jawaban: k.arti,
      pilihan,
    })
  }
  return soal
}

export function Kuis({ kosakata, jumlah = 8 }: { kosakata: KosaKata[]; jumlah?: number }) {
  const [benih, setBenih] = useState(0)
  const soal = useMemo(() => buatSoal(kosakata, jumlah), [kosakata, jumlah, benih])
  const [jawab, setJawab] = useState<Record<string, string>>({})

  if (soal.length === 0) return null

  const terisi = soal.filter((s) => jawab[s.id]).length
  const benar = soal.filter((s) => jawab[s.id] === s.jawaban).length
  const selesai = terisi === soal.length

  return (
    <div className="kuis">
      <div className="kuis__head">
        <p className="kuis__skor" role="status">
          Benar <strong>{benar}</strong> / {soal.length}
        </p>
        <button
          type="button"
          className="chip"
          onClick={() => {
            setJawab({})
            setBenih((b) => b + 1)
          }}
        >
          ↻ Acak ulang
        </button>
      </div>

      <ol className="kuis__list">
        {soal.map((s, i) => {
          const dipilih = jawab[s.id]
          return (
            <li key={s.id} className="kuis__item">
              <p className="kuis__q">
                <span className="kuis__no">{i + 1}</span>
                <span lang="ja">{s.pertanyaan}</span>
              </p>
              <div className="kuis__opsi">
                {s.pilihan.map((p) => {
                  const kelas =
                    dipilih === p
                      ? p === s.jawaban
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
                      onClick={() => setJawab((j) => ({ ...j, [s.id]: p }))}
                    >
                      {p}
                    </button>
                  )
                })}
              </div>
            </li>
          )
        })}
      </ol>

      {selesai && (
        <p className={`kuis__hasil ${benar / soal.length >= 0.6 ? 'kuis__hasil--ok' : 'kuis__hasil--no'}`}>
          {benar / soal.length >= 0.6
            ? `Bagus! Kamu benar ${benar} dari ${soal.length}.`
            : `Terus latihan — benar ${benar} dari ${soal.length}.`}
        </p>
      )}
    </div>
  )
}
