import { adaChoukai, getAudio } from '../../core/audio/manifest'
import { Section } from './Section'
import { AudioBar } from './AudioBar'

/**
 * Seksi Choukai (聴解) — track dari buku terpisah「聴解タスク25」(MNN II).
 *
 * Hanya ada untuk Bab 26–50; Bab 1–25 (MNN1) tidak punya choukai. Teks tugas
 * TIDAK ditulis di sini karena bukunya bukan MNN Honsatsu — buka buku Choukai
 * lalu putar track sesuai tugas. Mengarang isi audio = pelanggaran aturan §1.
 */
export function ChoukaiSection({ num }: { num: number }) {
  if (!adaChoukai(num)) return null
  const a = getAudio(num)
  if (!a || a.choukai.length === 0) return null

  return (
    <Section id="choukai" title="Choukai (聴解)">
      <p className="choukai__catatan">
        Latihan mendengarkan dari buku <strong>聴解タスク25</strong>. Buka buku Choukai, lalu putar
        track di bawah sesuai tugas. Audio ini <em>terpisah</em> dari Mondai.
      </p>
      {a.choukai.map((src, i) => (
        <div key={src} className="choukai__baris">
          <span className="choukai__no" aria-hidden>
            {i + 1}
          </span>
          <AudioBar src={src} label={`Choukai Bab ${num} track ${i + 1}`} />
        </div>
      ))}
    </Section>
  )
}
