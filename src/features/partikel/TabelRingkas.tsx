import type { Partikel } from '../../data/partikel'

/**
 * Rangkuman singkat: arti (fungsi) tiap partikel dalam tabel padat.
 * Ikut menyesuaikan daftar partikel yang sedang terfilter.
 */
export function TabelRingkas({ items }: { items: Partikel[] }) {
  return (
    <section className="partikel-ringkas" aria-labelledby="partikel-ringkas-judul">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Rangkuman</span>
          <h2 id="partikel-ringkas-judul">Arti Singkat Partikel</h2>
        </div>
        <span className="section-heading__count">{items.length} partikel</span>
      </div>
      <div className="partikel-ringkas__wrap">
        <table className="partikel-ringkas__tabel">
          <thead>
            <tr>
              <th scope="col">Partikel</th>
              <th scope="col">Arti / Fungsi</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.bentuk}>
                <th scope="row" className="partikel-ringkas__bentuk">
                  <span lang="ja">{p.bentuk}</span>
                  <span className="partikel-ringkas__romaji">{p.romaji}</span>
                </th>
                <td className="partikel-ringkas__arti">{p.fungsi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
