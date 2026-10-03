import { useState, useEffect, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getBab } from '../data'
import { useProgress } from '../store/useProgress'
import { useNotes } from '../store/useNotes'
import type { Bab, Furigana } from '../types/bab'
import { matchLevel, countCorrect, adaJawaban } from '../core/text/normalize'
import { nilaiTerjemahan } from '../core/text/terjemahan'
import { Flashcard } from '../features/flashcard/Flashcard'
import { Kuis } from '../features/kuis/Kuis'

export default function BabDetailPage() {
  const { no } = useParams()
  const num = Number(no)
  const bab = getBab(num)
  const p = useProgress((s) => s.items.find((x) => x.no === num))
  const setSelesai = useProgress((s) => s.setSelesai)
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)
  const catatan = useNotes((s) => s.catatan)
  const setCatatan = useNotes((s) => s.setCatatan)
  const [showRomaji, setShowRomaji] = useState(false)
  const [showFurigana, setShowFurigana] = useState(true)
  const [modeKosakata, setModeKosakata] = useState<'tabel' | 'flash' | 'kuis'>('tabel')

  if (!bab) {
    return (
      <div className="app max-w-3xl mx-auto p-4 md:p-8">
        <div className="book">
          <p>
            <Link to="/">← Kembali ke daftar bab</Link>
          </p>
          <h1>Bab {num}</h1>
          <p className="text-ink-soft">Materi bab ini belum tersedia.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app max-w-3xl mx-auto p-4 md:p-8">
      <main className="book">
        <span className="page-curl" aria-hidden />
        <nav aria-label="Navigasi bab" className="text-sm">
          <Link to="/" className="hover:text-ink">
            ← Daftar Bab
          </Link>
        </nav>

        <header className="bab-hero">
          <span className="bab-hero__no">{num}</span>
          <div className="bab-hero__body">
            <span className="bab-hero__label">Pelajaran</span>
            <h1 className="bab-hero__title">{bab.topik}</h1>
            <span className="bab-hero__sub" lang="ja">
              {bab.kaiwa?.judul ?? ''}
            </span>
          </div>
          <div className="bab-hero__stamp">
            {p?.selesai && <span className="stamp stamp--ok">SELESAI</span>}
            {typeof p?.skor === 'number' && (
              <span className="stamp stamp--skor">SKOR {p.skor}</span>
            )}
          </div>
        </header>

        <div className="bab-context" aria-label="Ringkasan materi bab">
          <span><strong>{bab.kosakata.length}</strong> kosakata</span>
          <span><strong>{bab.bunpou.length}</strong> pola bunpou</span>
          <span>{bab.renshuuA.length + bab.renshuuB.length + bab.renshuuC.length} latihan</span>
        </div>

        <div className="toolbar" aria-label="Pengaturan tampilan">
          <span className="toolbar__title">Tampilan teks</span>
          <label className="toolbar__toggle">
            <input
              type="checkbox"
              checked={showFurigana}
              onChange={(e) => setShowFurigana(e.target.checked)}
            />
            Furigana
          </label>
          <label className="toolbar__toggle">
            <input
              type="checkbox"
              checked={showRomaji}
              onChange={(e) => setShowRomaji(e.target.checked)}
            />
            Romaji
          </label>
        </div>

        {/* TOC */}
        <nav className="toc" aria-label="Daftar isi">
          {sectionsOf(bab).map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.short}
            </a>
          ))}
        </nav>

        {bab.kosakata.length > 0 && (
          <Section id="kosakata" title="Kosakata" defaultOpen>
            <div className="flash__seg" role="tablist" aria-label="Mode belajar kosakata" style={{ marginBottom: 10 }}>
              {([
                ['tabel', 'Daftar'],
                ['flash', 'Flashcard'],
                ['kuis', 'Kuis'],
              ] as const).map(([m, label]) => (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={modeKosakata === m}
                  aria-controls={`panel-kosakata-${m}`}
                  id={`tab-kosakata-${m}`}
                  tabIndex={modeKosakata === m ? 0 : -1}
                  className={`chip ${modeKosakata === m ? 'chip--aktif' : ''}`}
                  onClick={() => setModeKosakata(m)}
                >
                  {label}
                </button>
              ))}
            </div>
            {modeKosakata === 'tabel' && (
              <div id="panel-kosakata-tabel" role="tabpanel" aria-labelledby="tab-kosakata-tabel">
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
                  {bab.kosakata.map((k) => (
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
            {modeKosakata === 'flash' && <div id="panel-kosakata-flash" role="tabpanel" aria-labelledby="tab-kosakata-flash"><Flashcard kosakata={bab.kosakata} /></div>}
            {modeKosakata === 'kuis' && <div id="panel-kosakata-kuis" role="tabpanel" aria-labelledby="tab-kosakata-kuis"><Kuis kosakata={bab.kosakata} /></div>}
          </Section>
        )}

        {bab.bunpou.length > 0 && (
          <Section id="bunpou" title="Bunpou" defaultOpen>
            {bab.bunpou.map((b) => (
              <div key={b.no} className="mb-3">
                <h3 className="font-semibold">
                  {b.no}. <span lang="ja">{b.pola}</span>
                </h3>
                <p className="text-ink-soft" style={{ maxWidth: '68ch' }}>{b.penjelasan}</p>
                {b.sub && b.sub.map((s, i) => (
                  <p key={i} className="text-sm">
                    <strong>{s.judul}:</strong> {s.isi}
                  </p>
                ))}
                <div className="mt-1">
                  <strong>Contoh:</strong>
                  {b.contoh.map((c, i) => (
                    <p key={i} className="ml-2">
                      <span lang="ja">{c}</span>
                      <span className="block text-sm italic text-ink-soft">{b.artiContoh[i]}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Section>
        )}

        {bab.catatanTataBahasa && bab.catatanTataBahasa.length > 0 && (
          <Section id="catatan" title="Catatan Tata Bahasa">
            {bab.catatanTataBahasa.map((b) => (
              <div key={b.no} className="mb-3">
                <h3 className="font-semibold">{b.no}. <span lang="ja">{b.pola}</span></h3>
                <p className="text-ink-soft" style={{ maxWidth: '68ch' }}>{b.penjelasan}</p>
                {b.contoh.map((c, i) => (
                  <p key={i} className="ml-2">
                    <span lang="ja">{c}</span>
                    <span className="block text-sm italic text-ink-soft">{b.artiContoh[i]}</span>
                  </p>
                ))}
              </div>
            ))}
          </Section>
        )}

        {bab.reibun.length > 0 && (
          <Section id="reibun" title="Contoh Kalimat (Reibun)">
            <TerjemahanList
              items={bab.reibun.map((r, i) => ({
                key: `b${num}-terj-reibun-${i}`,
                judul: '(Reibun)',
                jp: r.kalimat,
                kunci: r.arti,
              }))}
            />
          </Section>
        )}

        {bab.kaiwa && (
          <Section id="kaiwa" title={`Kaiwa — ${bab.kaiwa.judul ?? ''}`}>
            {bab.kaiwa.audio && <AudioBar src={bab.kaiwa.audio} label="Dengarkan dialog Kaiwa" />}
            <div className="mt-2">
              {bab.kaiwa.dialog.map((d) => (
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
              items={bab.kaiwa.dialog
                .filter((d) => d.arti)
                .map((d) => ({
                  key: `b${num}-terj-kaiwa-${d.no}`,
                  judul: d.pembicara,
                  jp: d.teks,
                  kunci: d.arti as string,
                }))}
            />
          </Section>
        )}

        {/* konteks untuk renshuuB */}
        {bab.konteks && bab.konteks.length > 0 && (
          <Section id="konteks" title="Konteks Latihan B">
            {bab.konteks.map((k, i) => (
              <div key={i}>
                <h3 className="font-semibold">{k.judul}</h3>
                <TextWithNewlines text={k.teks ?? ''} />
              </div>
            ))}
          </Section>
        )}

        {bab.renshuuA.length > 0 && (
          <Section id="renshuuA" title="Renshuu A">
            <LatihanList items={bab.renshuuA} section="A" babNo={num} />
          </Section>
        )}
        {bab.renshuuB.length > 0 && (
          <Section id="renshuuB" title="Renshuu B">
            <LatihanList items={bab.renshuuB} section="B" babNo={num} />
          </Section>
        )}
        {bab.renshuuC.length > 0 && (
          <Section id="renshuuC" title="Renshuu C">
            <LatihanList items={bab.renshuuC} section="C" babNo={num} />
          </Section>
        )}

        {bab.mondai.length > 0 && (
          <Section id="mondai" title="Mondai">
            {bab.mondai.map((m) => (
              <div key={m.no} className="mb-3">
                <p className="font-medium">
                  {m.no}. <span lang="ja"><TextWithNewlines text={m.soal} inline /></span>
                </p>
                {m.instruksi && (
                  <p className="ml-3 text-sm italic text-ink-soft">
                    {m.instruksi}
                  </p>
                )}
                {m.audio && <AudioBar src={m.audio} label={`Dengarkan Mondai ${m.no}`} />}
                {m.kunciTersedia === false ? (
                  <p className="mt-1 text-sm italic text-ink-soft">(kunci jawaban tersedia di CD, tidak di buku)</p>
                ) : (
                  (() => {
                    const mkey = `b${num}-mondai-${m.no}`
                    const lvl = adaJawaban(answers[mkey])
                      ? matchLevel(answers[mkey], m.jawaban ?? '')
                      : null
                    return (
                      <>
                        {m.pilihan && m.pilihan.length > 0 && (
                          <ul className="mt-1 ml-4 list-disc text-sm">
                            {m.pilihan.map((p, i) => (
                              <li key={i} lang="ja">{p}</li>
                            ))}
                          </ul>
                        )}
                        <textarea
                          rows={2}
                          value={answers[mkey] ?? ''}
                          onChange={(e) => setAnswer(mkey, e.target.value)}
                          placeholder="Jawabanmu…"
                          aria-label={`Jawaban Mondai ${m.no}`}
                          className="jawab mt-1"
                        />
                        {lvl && (
                          <p className={`verdict ${lvl === 'tepat' ? 'verdict--ok' : lvl === 'dekat' ? 'verdict--hangat' : 'verdict--no'}`}>
                            {lvl === 'tepat' ? 'Benar' : lvl === 'dekat' ? 'Hampir — cek bagian yang kurang' : 'Belum cocok'}
                          </p>
                        )}
                        {m.jawaban && (
                          <details className="mt-1">
                            <summary className="cursor-pointer text-sm underline underline-offset-2">Lihat kunci</summary>
                            <pre className="whitespace-pre-wrap rounded-md bg-[rgba(67,56,43,0.05)] p-2 text-sm">
                              {m.jawaban}
                            </pre>
                          </details>
                        )}
                      </>
                    )
                  })()
                )}
              </div>
            ))}
          </Section>
        )}

        {bab.bunsho.length > 0 && (
          <Section id="bunsho" title="Bunsho">
            {bab.bunsho.map((b, i) => (
              <div key={i}>
                {b.judul && <h3 className="font-semibold">{b.judul}</h3>}
                <p lang="ja">{b.teks}</p>
                {b.arti && <p className="text-sm italic text-ink-soft">{b.arti}</p>}
              </div>
            ))}
          </Section>
        )}

        {bab.rangkuman && (
          <Section id="rangkuman" title="Rangkuman">
            <p>{bab.rangkuman}</p>
          </Section>
        )}

        <BagianProgress bab={bab} babNo={num} />

        <KoreksiPanel bab={bab} babNo={num} />

        <Section id="coretan" title="Coretan & Catatanku">
          <textarea
            rows={6}
            value={catatan[num] ?? ''}
            onChange={(e) => setCatatan(num, e.target.value)}
            placeholder="Tulis coretan, rangkuman, atau catatan penting bab ini di sini…"
            aria-label={`Coretan bab ${num}`}
            className="coretan"
          />
        </Section>

        <button
          type="button"
          className="mt-4 min-h-[44px] rounded border border-[rgba(67,56,43,0.3)] bg-paper px-4 focus-visible:outline-3 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          onClick={() => setSelesai(num, !(p?.selesai ?? false))}
        >
          {p?.selesai ? 'Batalkan selesai' : 'Tandai selesai'}
        </button>
      </main>
    </div>
  )
}

/* ---------- helpers ---------- */

type BabSection = { id: string; short: string; label: string }

function sectionsOf(bab: Bab): BabSection[] {
  const arr: BabSection[] = []
  if (bab.kosakata.length > 0) arr.push({ id: 'kosakata', short: 'Kosakata', label: 'Kosakata' })
  if (bab.bunpou.length > 0) arr.push({ id: 'bunpou', short: 'Bunpou', label: 'Bunpou' })
  if (bab.catatanTataBahasa?.length) arr.push({ id: 'catatan', short: 'Catatan', label: 'Catatan Tata Bahasa' })
  if (bab.reibun.length > 0) arr.push({ id: 'reibun', short: 'Reibun', label: 'Reibun' })
  if (bab.kaiwa) arr.push({ id: 'kaiwa', short: 'Kaiwa', label: 'Kaiwa' })
  if (bab.konteks?.length) arr.push({ id: 'konteks', short: 'Konteks', label: 'Konteks' })
  if (bab.renshuuA.length > 0) arr.push({ id: 'renshuuA', short: 'Latih A', label: 'Latih A' })
  if (bab.renshuuB.length > 0) arr.push({ id: 'renshuuB', short: 'Latih B', label: 'Latih B' })
  if (bab.renshuuC.length > 0) arr.push({ id: 'renshuuC', short: 'Latih C', label: 'Latih C' })
  if (bab.mondai.length > 0) arr.push({ id: 'mondai', short: 'Mondai', label: 'Mondai' })
  if (bab.bunsho.length > 0) arr.push({ id: 'bunsho', short: 'Bunsho', label: 'Bunsho' })
  if (bab.rangkuman) arr.push({ id: 'rangkuman', short: 'Rangkuman', label: 'Rangkuman' })
  arr.push({ id: 'bagian', short: 'Progress', label: 'Progress Per-Bagian' })
  arr.push({ id: 'coretan', short: 'Coretan', label: 'Coretan' })
  return arr
}

function Section({
  id,
  title,
  defaultOpen = false,
  children,
}: {
  id: string
  title: string
  defaultOpen?: boolean
  children: ReactNode
}) {
  return (
    <details id={id} open={defaultOpen ? true : undefined} className="section mb-2 scroll-mt-20">
      <summary className="cursor-pointer select-none text-xl" style={{ fontFamily: 'var(--font-hand)' }}>
        {title}
      </summary>
      <div className="mt-1">{children}</div>
    </details>
  )
}

function TextWithNewlines({ text, inline = false }: { text: string; inline?: boolean }) {
  const lines = text.split('\n')
  if (inline) {
    return (
      <>
        {lines.map((l, i) => (
          <span key={i}>
            {l}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </>
    )
  }
  return (
    <p>
      {lines.map((l, i) => (
        <span key={i}>
          {l}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  )
}

function KoreksiPanel({ bab, babNo }: { bab: Bab; babNo: number }) {
  const answers = useNotes((s) => s.answers)
  const setSkor = useProgress((s) => s.setSkor)

  const pairs: { user: string; expected: string }[] = []
  const push = (section: string, items: { no: number; jawaban?: string; kunciTersedia?: boolean }[]) => {
    items.forEach((r) => {
      if (r.jawaban && r.kunciTersedia !== false) {
        pairs.push({ user: answers[`b${babNo}-${section}-${r.no}`] ?? '', expected: r.jawaban })
      }
    })
  }
  push('A', bab.renshuuA)
  push('B', bab.renshuuB)
  push('C', bab.renshuuC)
  push('mondai', bab.mondai)

  const { benar, total } = countCorrect(pairs)
  const skor = total > 0 ? Math.round((benar / total) * 100) : 0
  const terisi = pairs.filter((p) => p.user.trim().length > 0).length

  useEffect(() => {
    if (terisi > 0) setSkor(babNo, skor)
  }, [terisi, skor, babNo, setSkor])

  if (total === 0) return null

  return (
    <div className="koreksi">
      <h2 className="mb-1 text-lg">Hasil Koreksi Bab {babNo}</h2>
      <p className="text-sm text-ink-soft">
        Terisi {terisi} dari {total} soal · <strong>{benar} benar</strong>
      </p>
      <div className="koreksi__bar">
        <div className="koreksi__fill" style={{ width: `${skor}%` }} />
      </div>
      <p className="mt-1 text-sm">
        Skor: <strong>{skor}</strong> / 100 <span className="score-note">{skor >= 60 ? 'Target tercapai' : 'Terus latihan'}</span>
      </p>
    </div>
  )
}

function BagianProgress({ bab, babNo }: { bab: Bab; babNo: number }) {
  const bagianSelesai = useProgress(
    (s) => s.items.find((x) => x.no === babNo)?.bagianSelesai,
  )
  const toggleBagian = useProgress((s) => s.toggleBagian)

  const daftar = sectionsOf(bab).filter((s) => s.id !== 'coretan' && s.id !== 'bagian')
  const done = bagianSelesai ?? []
  const selesaiCount = daftar.filter((s) => done.includes(s.id)).length

  return (
    <Section id="bagian" title={`Progress Per-Bagian (${selesaiCount}/${daftar.length})`}>
      <p className="text-sm text-ink-soft" style={{ marginTop: 0 }}>
        Centang bagian yang sudah kamu kuasai. Ini terpisah dari skor latihan.
      </p>
      <ul className="bagian">
        {daftar.map((s) => {
          const sudah = done.includes(s.id)
          return (
            <li key={s.id}>
              <label className={`bagian__item ${sudah ? 'bagian__item--selesai' : ''}`}>
                <input
                  type="checkbox"
                  checked={sudah}
                  onChange={() => toggleBagian(babNo, s.id)}
                />
                <span>{s.label}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

function TerjemahanList({
  items,
}: {
  items: { key: string; judul: string; jp: string; kunci: string }[]
}) {
  const answers = useNotes((s) => s.answers)
  const setAnswer = useNotes((s) => s.setAnswer)

  const hasil = items.map((it) => {
    const user = answers[it.key] ?? ''
    return { ...it, user, nilai: user.trim() ? nilaiTerjemahan(user, it.kunci) : null }
  })
  const terisi = hasil.filter((h) => h.user.trim()).length
  const rata = terisi
    ? Math.round(hasil.reduce((a, h) => a + (h.nilai?.skor ?? 0), 0) / terisi)
    : 0

  return (
    <div className="terj">
      <div className="flash__seg" style={{ marginBottom: 4 }}>
        <span className="toolbar__title">Koreksi terjemahan</span>
      </div>
      {terisi > 0 && (
        <>
          <div className="terj__bar" role="progressbar" aria-valuenow={rata} aria-valuemin={0} aria-valuemax={100}>
            <div className="terj__fill" style={{ width: `${rata}%` }} />
          </div>
          <p className="text-xs text-ink-soft" style={{ margin: '0 0 6px' }}>
            Kedekatan rata-rata {rata}% · {terisi}/{items.length} diterjemahkan
          </p>
        </>
      )}
      {hasil.map((h) => (
        <div key={h.key} className="terj__row">
          <span className="terj__jp" lang="ja">{h.jp}</span>
          <span className="terj__kuci">Kunci: {h.kunci}</span>
          <textarea
            rows={2}
            className="jawab terj__input"
            value={h.user}
            onChange={(e) => setAnswer(h.key, e.target.value)}
            placeholder={`Terjemahanmu untuk ${h.judul}…`}
            aria-label={`Terjemahan ${h.judul}`}
          />
          {h.nilai && (
            <span className={`terj__res terj__res--${h.nilai.level}`}>
              {h.nilai.level === 'tepat'
                ? `✅ Sangat dekat (${h.nilai.skor}%)`
                : h.nilai.level === 'dekat'
                  ? `🟡 Cukup dekat (${h.nilai.skor}%)`
                  : `❌ Belum dekat (${h.nilai.skor}%)`}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

function LatihanList({
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
  const pairs = items
    .filter((r) => r.jawaban)
    .map((r) => ({ user: answers[`b${babNo}-${section}-${r.no}`] ?? '', expected: r.jawaban as string }))
  const score = countCorrect(pairs)
  return (
    <>
      <ol className="list-decimal pl-5">
        {items.map((r) => {
          const key = `b${babNo}-${section}-${r.no}`
          const lvl = adaJawaban(answers[key]) && r.jawaban
            ? matchLevel(answers[key], r.jawaban)
            : null
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
              {lvl && (
                <p className={`verdict ${lvl === 'tepat' ? 'verdict--ok' : lvl === 'dekat' ? 'verdict--hangat' : 'verdict--no'}`}>
                  {lvl === 'tepat' ? '✅ Benar' : lvl === 'dekat' ? '🟡 Hampir — cek bagian yang kurang' : '❌ Belum cocok'}
                </p>
              )}
              {r.jawaban && (
                <details className="mt-1">
                  <summary className="cursor-pointer text-sm underline underline-offset-2">Lihat kunci</summary>
                  <pre className="whitespace-pre-wrap rounded-md bg-[rgba(67,56,43,0.05)] p-2 text-sm">
                    {r.jawaban}
                  </pre>
                </details>
              )}
            </li>
          )
        })}
      </ol>
      <p className="mt-2 text-sm font-medium text-ink-soft">
        Skor {section}: {score.benar} benar dari {score.total}
      </p>
    </>
  )
}

function AudioBar({ src, label }: { src: string; label: string }) {
  return (
    <audio
      controls
      preload="none"
      src={src}
      aria-label={label}
      className="my-2 block w-full max-w-md"
    />
  )
}

function Ruby({
  text,
  furigana,
  show,
}: {
  text: string
  furigana?: Furigana[]
  show: boolean
}) {
  if (!show || !furigana || furigana.length === 0) return <>{text}</>
  let parts: (string | { base: string; ruby: string })[] = [text]
  for (const f of furigana) {
    const next: typeof parts = []
    for (const part of parts) {
      if (typeof part === 'string') {
        const segs = part.split(f.base)
        segs.forEach((s, i) => {
          next.push(s)
          if (i < segs.length - 1) next.push(f)
        })
      } else {
        next.push(part)
      }
    }
    parts = next
  }
  return (
    <>
      {parts.map((p, i) =>
        typeof p === 'string' ? (
          p
        ) : (
          <ruby key={i}>
            {p.base}
            <rt className="text-[0.7em]">{p.ruby}</rt>
          </ruby>
        ),
      )}
    </>
  )
}
