import { describe, expect, it } from 'vitest'
import {
  adaJawaban,
  canonical,
  countCorrect,
  isCorrect,
  matchLevel,
  stripEnumerators,
  tokens,
} from './normalize'

describe('stripEnumerators', () => {
  it('membuang penanda nomor butir umum', () => {
    expect(stripEnumerators('1) これは')).toContain('これは')
    expect(stripEnumerators('2. ほん')).not.toContain('2')
    expect(stripEnumerators('①テスト')).not.toContain('①')
  })
})

describe('canonical', () => {
  it('membuang tanda baca, spasi, dan menyamakan huruf besar/kecil', () => {
    expect(canonical('これは！')).toBe('これは')
    expect(canonical('A B')).toBe('ab')
    expect(canonical('テスト、です')).toBe('テストです')
  })
})

describe('tokens', () => {
  it('membuang isi tanda kurung & memecah per kata', () => {
    expect(tokens('あの人（あの方）')).toEqual(['あの人'])
    expect(tokens('ほん、ぺん')).toEqual(['ほん', 'ぺん'])
  })
})

/**
 * Kasus uji BUG-4 — DIKUNCI. Jangan longgarkan: dulu `いきます` dianggap benar
 * untuk `きます` (kata kerja salah lolos). Lihat AGENTS §3 #28.
 */
describe('matchLevel — kasus terkunci (BUG-4)', () => {
  const kasus: [string, string, 'tepat' | 'dekat' | 'belum'][] = [
    ['いきます', 'きます', 'belum'],
    ['アメリカ', 'アメリカ人', 'belum'],
    ['ミラー', 'ミラーさん', 'belum'],
    ['たべます', 'のみます', 'belum'],
    ['がくせい', 'がくせいです', 'tepat'],
    ['がっこうに', 'がっこう', 'tepat'],
    ['いきますか', 'いきます', 'tepat'],
    ['本です', '本です', 'tepat'],
  ]
  for (const [user, expected, harap] of kasus) {
    it(`"${user}" vs "${expected}" -> ${harap}`, () => {
      expect(matchLevel(user, expected)).toBe(harap)
    })
  }
})

describe('matchLevel — perilaku umum', () => {
  it('identik (setelah kanonik) = tepat', () => {
    expect(matchLevel('ほん。', 'ほん')).toBe('tepat')
  })
  it('kosong = belum', () => {
    expect(matchLevel('', 'ほん')).toBe('belum')
    expect(matchLevel('ほん', '')).toBe('belum')
  })
  it('selisih murni partikel = tepat', () => {
    expect(matchLevel('がっこう', 'がっこうに')).toBe('tepat')
  })
  it('beda kata = belum', () => {
    expect(matchLevel('ねこ', 'いぬ')).toBe('belum')
  })
})

describe('isCorrect / adaJawaban / countCorrect', () => {
  it('isCorrect hanya untuk level tepat', () => {
    expect(isCorrect('本です', '本です')).toBe(true)
    expect(isCorrect('いきます', 'きます')).toBe(false)
  })
  it('adaJawaban butuh isi yang tersisa setelah kanonik', () => {
    expect(adaJawaban('あ')).toBe(true)
    expect(adaJawaban('！')).toBe(false)
    expect(adaJawaban(undefined)).toBe(false)
  })
  it('countCorrect menghitung tepat', () => {
    expect(
      countCorrect([
        { user: 'ほん', expected: 'ほん' },
        { user: 'いきます', expected: 'きます' },
        { user: '', expected: 'ぺん' },
      ]),
    ).toEqual({ benar: 1, total: 3 })
  })
})
