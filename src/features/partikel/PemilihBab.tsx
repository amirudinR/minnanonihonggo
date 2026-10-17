import { babTerkait } from '../../data/partikel'

/**
 * Baris tombol pemilih bab. Berlaku untuk mode daftar (filter) & ujian (cakupan soal).
 */
export function PemilihBab({
  babAktif,
  onPilih,
}: {
  babAktif: number | 'semua'
  onPilih: (b: number | 'semua') => void
}) {
  const daftarBab = babTerkait()
  return (
    <section className="partikel-babbar" aria-label="Pilih bab">
      <span className="partikel-babbar__label">Bab:</span>
      <div className="seg" role="group" aria-label="Filter bab">
        <button
          type="button"
          className={`seg__item ${babAktif === 'semua' ? 'seg__item--aktif' : ''}`}
          aria-pressed={babAktif === 'semua'}
          onClick={() => onPilih('semua')}
        >
          Semua
        </button>
        {daftarBab.map((b) => (
          <button
            key={b}
            type="button"
            className={`seg__item ${babAktif === b ? 'seg__item--aktif' : ''}`}
            aria-pressed={babAktif === b}
            onClick={() => onPilih(b)}
          >
            Bab {b}
          </button>
        ))}
      </div>
    </section>
  )
}
