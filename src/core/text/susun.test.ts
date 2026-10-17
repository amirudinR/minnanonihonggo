import { describe, expect, it } from 'vitest'
import type { SusunItem } from '../../types/bab'
import { canonical } from './normalize'
import {
  acak,
  bankAhli,
  bankAhliDenganPengecoh,
  bankUntuk,
  JUMLAH_PENGECOH,
  koreksiSusun,
  sudahBenar,
  tokenAhli,
  urutanBenar,
} from './susun'

const item: SusunItem = {
  id: 's1',
  arti: 'Ini buku.',
  kata: ['これは', '本', 'です'],
  jawaban: 'これは 本 です',
}

describe('acak — deterministik', () => {
  it('seed sama -> hasil sama, isi sama (Fisher–Yates)', () => {
    const a = acak([1, 2, 3, 4, 5], 42)
    const b = acak([1, 2, 3, 4, 5], 42)
    expect(a).toEqual(b)
    expect([...a].sort()).toEqual([1, 2, 3, 4, 5])
  })
})

describe('bank & urutan', () => {
  it('bankUntuk mempertahankan isi & deterministik', () => {
    const a = bankUntuk(item)
    const b = bankUntuk(item)
    expect(a).toEqual(b)
    expect([...a].sort()).toEqual([...item.kata].sort())
  })
  it('urutanBenar merekonstruksi unit sesuai jawaban', () => {
    expect(urutanBenar(item)).toEqual(['これは', '本', 'です'])
  })
  it('koreksiSusun tepat saat urutan sama, belum saat beda', () => {
    expect(koreksiSusun(['これは', '本', 'です'], urutanBenar(item))).toBe('tepat')
    expect(koreksiSusun(['本', 'これは', 'です'], urutanBenar(item))).toBe('belum')
    expect(koreksiSusun([], urutanBenar(item))).toBe('belum')
  })
  it('sudahBenar menerima index bank yang benar', () => {
    const bank = bankUntuk(item)
    const idx = urutanBenar(item).map((u) => bank.indexOf(u)).join(',')
    expect(sudahBenar(item, idx)).toBe(true)
    expect(sudahBenar(item, '9,9,9')).toBe(false)
    expect(sudahBenar(item, '')).toBe(false)
  })
})

describe('mode ahli', () => {
  it('tokenAhli menggabung ulang persis seperti jawaban (kanonik)', () => {
    expect(canonical(tokenAhli(item).join(''))).toBe(canonical(item.jawaban))
  })
  it('bankAhli berisi token yang sama & deterministik', () => {
    const a = bankAhli(item)
    const b = bankAhli(item)
    expect(a).toEqual(b)
    expect([...a].sort()).toEqual([...tokenAhli(item)].sort())
  })
})

describe('pengecoh mode ahli', () => {
  it('menambah tepat JUMLAH_PENGECOH partikel, tidak ada yang sama dengan token', () => {
    const token = tokenAhli(item)
    const set = new Set(token.map((t) => canonical(t)))
    const bank = bankAhliDenganPengecoh(item)
    const pengecoh = bank.filter((t) => !set.has(canonical(t)))
    expect(pengecoh).toHaveLength(JUMLAH_PENGECOH)
    expect(bank).toHaveLength(token.length + JUMLAH_PENGECOH)
    expect(new Set(pengecoh.map((t) => canonical(t))).size).toBe(pengecoh.length)
  })
  it('deterministik', () => {
    expect(bankAhliDenganPengecoh(item)).toEqual(bankAhliDenganPengecoh(item))
  })
})
