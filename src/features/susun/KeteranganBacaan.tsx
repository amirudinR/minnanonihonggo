import type { SusunItem } from '../../types/bab'
import { KAMUS, ARTI_KATA } from '../../data/kamus'
import { bagianBaca, keHiragana, uraiKata } from '../../core/text/baca'

const ADA_KANJI = /[\u3400-\u9fff\u3005]/

/**
 * Panel keterangan setelah kalimat selesai/benar:
 * kalimat kanji + furigana, cara baca hiragana penuh, daftar kanji, daftar katakana.
 */
export function KeteranganBacaan({ item }: { item: SusunItem }) {
  const bagian = bagianBaca(item.jawaban, KAMUS)
  const hiragana = keHiragana(item.jawaban, KAMUS)
  const kata = uraiKata(item.jawaban, KAMUS, ARTI_KATA)
  const kanji = kata.filter((k) => ADA_KANJI.test(k.kata))
  const katakana = kata.filter((k) => !ADA_KANJI.test(k.kata))

  return (
    <div className="baca" lang="id">
      <p className="baca__judul">Keterangan</p>

      <dl className="baca__daftar">
        <dt>Kalimat (kanji + furigana)</dt>
        <dd lang="ja">
          {bagian.map((b, i) =>
            b.baca ? (
              <ruby key={i}>
                {b.teks}
                <rt>{b.baca}</rt>
              </ruby>
            ) : (
              <span key={i}>{b.teks}</span>
            ),
          )}
        </dd>

        <dt>Cara baca (hiragana)</dt>
        <dd lang="ja">{hiragana}</dd>

        {kanji.length > 0 && (
          <>
            <dt>Kanji</dt>
            <dd>
              <ul className="baca__kata">
                {kanji.map((k) => (
                  <li key={k.kata}>
                    <span lang="ja" className="baca__kanji">{k.kata}</span>
                    <span lang="ja" className="baca__kana">{k.baca}</span>
                    {k.arti && <span className="baca__arti">{k.arti}</span>}
                  </li>
                ))}
              </ul>
            </dd>
          </>
        )}

        {katakana.length > 0 && (
          <>
            <dt>Katakana</dt>
            <dd>
              <ul className="baca__kata">
                {katakana.map((k) => (
                  <li key={k.kata}>
                    <span lang="ja" className="baca__kanji">{k.kata}</span>
                    {k.arti && <span className="baca__arti">{k.arti}</span>}
                  </li>
                ))}
              </ul>
            </dd>
          </>
        )}

        {item.penjelasan && (
          <>
            <dt>Pola</dt>
            <dd>{item.penjelasan}</dd>
          </>
        )}
      </dl>
    </div>
  )
}
