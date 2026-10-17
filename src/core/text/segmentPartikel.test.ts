import { describe, expect, it } from 'vitest'
import { adaKanji, pecahBagian, pecahUnit, segmentAhli, JANGAN_PECAH } from './segmentPartikel'

describe('pecahBagian — KONSERVATIF (kalau ragu, jangan pecah)', () => {
  it('ungkapan di JANGAN_PECAH dibiarkan utuh', () => {
    for (const k of ['あした', 'いい', 'よく', 'どのくらい', 'しばらく', 'はい']) {
      expect(JANGAN_PECAH.has(k)).toBe(true)
      expect(pecahBagian(k)).toEqual([k])
    }
  })

  it('satu huruf tidak dipecah', () => {
    expect(pecahBagian('は')).toEqual(['は'])
  })

  it('akhiran kata sifat SENGAJA dimatikan (mis. きれい)', () => {
    // Dulu salah: `きれい` -> `きれ + い`. Lihat catatan SIFAT_URUT.
    expect(pecahBagian('きれい')).toEqual(['きれい'])
  })

  it('がくせいじゃ tidak pecah `い` sebagai sifat (bug lama)', () => {
    expect(pecahBagian('がくせいじゃ')).toEqual(['がくせい', 'じゃ'])
  })

  it('memisah partikel & akhiran bila batang aman (kana >= 3)', () => {
    expect(pecahBagian('がくせいです')).toEqual(['がくせい', 'です'])
  })

  it('tanpa kataDikenal, batang kana pendek tidak dipotong (konservatif)', () => {
    expect(pecahBagian('いきます')).toEqual(['いきます'])
  })

  it('dengan kataDikenal, batang pendek yang dikenal boleh dipotong', () => {
    const opsi = { kataDikenal: new Set(['いき']) }
    expect(pecahBagian('いきます', opsi)).toEqual(['いき', 'ます'])
  })
})

describe('pecahUnit / segmentAhli', () => {
  it('pecahUnit menangani unit ber-spasi internal', () => {
    expect(pecahUnit('これは 本です')).toEqual(['これは', '本', 'です'])
  })
  it('segmentAhli menggabung ulang sama dengan masukan (kanonik)', () => {
    const units = ['これは 本です', 'あの 方は せんせいです']
    const token = segmentAhli(units)
    const gabung = token.join('').replace(/\s/g, '')
    expect(gabung).toBe(units.join('').replace(/\s/g, ''))
  })
})

describe('adaKanji', () => {
  it('mendeteksi kanji & 々', () => {
    expect(adaKanji('本')).toBe(true)
    expect(adaKanji('人々')).toBe(true)
    expect(adaKanji('ほん')).toBe(false)
  })
})
