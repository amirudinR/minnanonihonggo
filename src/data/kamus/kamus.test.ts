/**
 * Menjaga agar `terbangun.ts` (di-generate) tetap SINKRON dengan data bab.
 * Kalau gagal → jalankan `npm run gen:kamus`.
 */
import { describe, expect, it } from 'vitest'
import { babs } from '../all'
import { bangunArti, bangunKamus, bangunKataDikenal } from './bangun'
import { BACA, KENAL } from './terbangun'
import { ARTI_KATA, KAMUS, KATA_DIKENAL } from './index'

describe('kamus terbangun sinkron dengan data bab', () => {
  it('BACA = bangunKamus(babs) — jalankan `npm run gen:kamus` bila gagal', () => {
    expect(Object.fromEntries(KAMUS)).toEqual(Object.fromEntries(bangunKamus(babs)))
    expect(Object.keys(BACA).length).toBeGreaterThan(0)
  })

  it('KENAL = bangunKataDikenal(babs)', () => {
    expect(new Set(KATA_DIKENAL)).toEqual(bangunKataDikenal(babs))
    expect(KENAL.length).toBeGreaterThan(0)
  })

  it('ARTI = bangunArti(babs)', () => {
    expect(Object.fromEntries(ARTI_KATA)).toEqual(Object.fromEntries(bangunArti(babs)))
  })
})
