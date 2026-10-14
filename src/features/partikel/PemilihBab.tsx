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
      <button
        type="button"
        className={`chip ${babAktif === 'semua' ? 'chip--aktif' : ''}`}
        aria-pressed={babAktif === 'semua'}
        onClick={() => onPilih('semua')}
      >
        Semua
      </button>
      {daftarBab.map((b) => (
        <button
          key={b}
          type="button"
          className={`chip ${babAktif === b ? 'chip--aktif' : ''}`}
          aria-pressed={babAktif === b}
          onClick={() => onPilih(b)}
        >
          Bab {b}
        </button>
      ))}
    </section>
  )
}
