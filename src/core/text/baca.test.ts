import { describe, expect, it } from 'vitest'
import {
  bacaDeret,
  bagianBaca,
  katakanaDalam,
  kanjiTanpaBacaan,
  keHiragana,
  uraiKata,
  type Kamus,
} from './baca'

const kamus: Kamus = new Map([
  ['本', 'ほん'],
  ['日本', 'にほん'],
  ['学生', 'がくせい'],
])

describe('bacaDeret', () => {
  it('membaca deret kanji yang dikenal', () => {
    expect(bacaDeret('本', kamus)).toBe('ほん')
    expect(bacaDeret('学生', kamus)).toBe('がくせい')
  })
  it('null bila ada bagian tanpa bacaan', () => {
    expect(bacaDeret('本語', kamus)).toBeNull()
  })
})

describe('keHiragana', () => {
  it('menulis ulang kanji jadi kana, deret tak dikenal dibiarkan', () => {
    expect(keHiragana('本を 読みます', kamus)).toBe('ほんを 読みます')
  })
})

describe('kanjiTanpaBacaan', () => {
  it('melaporkan deret kanji yang belum punya bacaan (unik)', () => {
    expect(kanjiTanpaBacaan('本語と本語', kamus)).toEqual(['本語'])
    expect(kanjiTanpaBacaan('本です', kamus)).toEqual([])
  })
})

describe('katakanaDalam', () => {
  it('mendaftar katakana unik', () => {
    expect(katakanaDalam('テストとテスト')).toEqual(['テスト'])
  })
})

describe('uraiKata', () => {
  it('mengurai kanji + katakana beserta arti', () => {
    const arti = new Map([['本', 'buku']])
    const hasil = uraiKata('本とテスト', kamus, arti)
    expect(hasil).toContainEqual({ kata: '本', baca: 'ほん', arti: 'buku' })
    expect(hasil).toContainEqual({ kata: 'テスト', baca: 'テスト' })
  })
})

describe('bagianBaca', () => {
  it('memberi baca untuk bagian ber-kanji, teks lain apa adanya', () => {
    expect(bagianBaca('日本です', kamus)).toEqual([
      { teks: '日本', baca: 'にほん' },
      { teks: 'です' },
    ])
  })
})
