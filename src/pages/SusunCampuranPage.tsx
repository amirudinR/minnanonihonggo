import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { babs } from '../data'
import type { SusunItem } from '../types/bab'
import { useNotes } from '../store/useNotes'
import { acak, sudahBenar, sudahBenarAhli } from '../core/text/susun'
import { KATA_DIKENAL } from '../data/kamus'
import {
  PemilihBabSusun,
  SoalMenyusun,
  stringKeUrutan,
  urutanKeString,
  type PilihBab,
  type SusunMode,
} from '../features/susun'

type ItemCampur = SusunItem & { babNo: number }

const JML = [10, 20, 50] as const

function bacaBab(p: string | null): PilihBab {
  if (!p || p === 'semua') return 'semua'
  if (p === 'I' || p === 'II') return p
  const n = Number(p)
  return Number.isInteger(n) && n >= 1 && n <= 50 ? n : 'semua'
}

export default function SusunCampuranPage() {
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)

  const [params, setParams] = useSearchParams()
  const bab = bacaBab(params.get('bab'))
  const mode: SusunMode = params.get('mode') === 'ahli' ? 'ahli' : 'dasar'
  const n = JML.includes(Number(params.get('n')) as (typeof JML)[number])
    ? Number(params.get('n'))
    : 20

  const [seed, setSeed] = useState(1)
  const [pos, setPos] = useState(0)
  const [autoCheck, setAutoCheck] = useState(true)
  const [ulang, setUlang] = useState<ItemCampur[] | null>(null)

  const semua = useMemo<ItemCampur[]>(
    () =>
      babs.flatMap((b) => (b.susun ?? []).map((s) => ({ ...s, babNo: b.no }))),
    [],
  )

  const jumlahPerBab = useMemo(() => {
    const peta: Record<number, number> = {}
    for (const it of semua) peta[it.babNo] = (peta[it.babNo] ?? 0) + 1
    return peta
  }, [semua])

  const pool = useMemo(() => {
    if (ulang) return ulang
    return semua.filter((it) => {
      if (bab === 'I') return it.babNo <= 25
      if (bab === 'II') return it.babNo > 25
      if (typeof bab === 'number') return it.babNo === bab
      return true
    })
  }, [semua, bab, ulang])

  const sesi = useMemo(() => acak(pool, seed).slice(0, n), [pool, seed, n])

  const key = (it: ItemCampur) =>
    mode === 'ahli' ? `campur-${it.babNo}-${it.id}-ahli` : `campur-${it.babNo}-${it.id}`
  const opsi = useMemo(() => ({ kataDikenal: KATA_DIKENAL }), [])
  const cekBenar = (it: ItemCampur) =>
    mode === 'ahli'
      ? sudahBenarAhli(it, answers[key(it)], opsi)
      : sudahBenar(it, answers[key(it)])

  const skor = sesi.filter(cekBenar).length
  const selesai = pos >= sesi.length
  const kini = selesai ? undefined : sesi[pos]

  const ganti = (p: Partial<Record<'bab' | 'mode' | 'n', string>>) => {
    const next = new URLSearchParams(params)
    for (const [k, v] of Object.entries(p)) next.set(k, v as string)
    setParams(next)
    setUlang(null)
    setSeed((s) => s + 1)
    setPos(0)
  }

  const sesiBaru = (dariSalah: boolean) => {
    setUlang(dariSalah ? sesi.filter((it) => !cekBenar(it)) : null)
    setSeed((s) => s + 1)
    setPos(0)
  }

  return (
    <div className="app mx-auto max-w-5xl p-4 md:p-8 lg:p-10">
      <main className="book">
        <span className="page-curl" aria-hidden />

        <header className="bab-hero">
          <span className="bab-hero__no">✎</span>
          <div className="bab-hero__body">
            <span className="bab-hero__label">Latihan</span>
            <h1 className="bab-hero__title">Menyusun Kalimat</h1>
            <span className="bab-hero__sub">
              {mode === 'ahli'
                ? 'Mode Ahli — partikel & akhiran kata kerja ikut disusun'
                : 'Satu soal per sesi, langsung dikoreksi begitu lengkap'}
            </span>
          </div>
        </header>

        <div className="susun-tools">
          <div className="flash__seg" role="group" aria-label="Tingkat kesulitan">
            <button
              type="button"
              className={`chip ${mode === 'dasar' ? 'chip--aktif' : ''}`}
              onClick={() => ganti({ mode: 'dasar' })}
            >
              Dasar
            </button>
            <button
              type="button"
              className={`chip ${mode === 'ahli' ? 'chip--aktif' : ''}`}
              onClick={() => ganti({ mode: 'ahli' })}
            >
              Ahli
            </button>
          </div>
          <div className="flash__seg" role="group" aria-label="Jumlah soal per sesi">
            {JML.map((j) => (
              <button
                key={j}
                type="button"
                className={`chip ${n === j ? 'chip--aktif' : ''}`}
                onClick={() => ganti({ n: String(j) })}
              >
                {j} soal
              </button>
            ))}
          </div>
          <button
            type="button"
            className={`chip ${autoCheck ? 'chip--aktif' : ''}`}
            onClick={() => setAutoCheck((v) => !v)}
            aria-pressed={autoCheck}
          >
            Auto-check
          </button>
        </div>

        <PemilihBabSusun
          nilai={bab}
          onPilih={(v) => ganti({ bab: String(v) })}
          daftar={babs.map((b) => ({ no: b.no, topik: b.topik }))}
          jumlah={jumlahPerBab}
        />

        {sesi.length === 0 ? (
          <p className="text-sm text-ink-soft">Belum ada soal menyusun di pilihan ini.</p>
        ) : (
          <>
            <div className="sesi">
              <div className="sesi__bar" aria-hidden>
                <span
                  className="sesi__isi"
                  style={{ width: `${Math.round((Math.min(pos, sesi.length) / sesi.length) * 100)}%` }}
                />
              </div>
              <div className="sesi__info">
                <span>
                  {selesai ? 'Selesai' : `Soal ${pos + 1} / ${sesi.length}`}
                </span>
                <span className="sesi__skor">
                  Benar {skor}/{sesi.length}
                </span>
              </div>
            </div>

            {kini ? (
              <>
                <SoalMenyusun
                  key={`${kini.id}-${mode}`}
                  item={kini}
                  nomor={pos + 1}
                  labelBab={`Bab ${kini.babNo}`}
                  mode={mode}
                  autoCheck={autoCheck}
                  value={stringKeUrutan(answers[key(kini)] ?? '')}
                  onChange={(v) => setAnswer(key(kini), urutanKeString(v))}
                />
                <div className="sesi__nav">
                  <button
                    type="button"
                    className="chip"
                    onClick={() => setPos((p) => Math.max(0, p - 1))}
                    disabled={pos === 0}
                  >
                    ← Sebelumnya
                  </button>
                  <button
                    type="button"
                    className="chip chip--aktif"
                    onClick={() => setPos((p) => p + 1)}
                  >
                    Berikutnya →
                  </button>
                </div>
              </>
            ) : (
              <div className="sesi__ringkas">
                <p className="sesi__ringkas-judul">
                  Sesi selesai — benar {skor} dari {sesi.length}
                </p>
                <ul className="sesi__daftar">
                  {sesi.map((it, i) => (
                    <li key={`${it.id}-${i}`} className={cekBenar(it) ? 'ok' : 'no'}>
                      <span className="sesi__daftar-no">{i + 1}</span>
                      <span lang="ja">{it.jawaban}</span>
                      <span className="sesi__daftar-arti">{it.arti}</span>
                    </li>
                  ))}
                </ul>
                <div className="sesi__nav">
                  {skor < sesi.length && (
                    <button type="button" className="chip" onClick={() => sesiBaru(true)}>
                      Ulangi yang salah ({sesi.length - skor})
                    </button>
                  )}
                  <button type="button" className="chip chip--aktif" onClick={() => sesiBaru(false)}>
                    Sesi baru
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
