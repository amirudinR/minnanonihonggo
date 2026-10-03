// Manifest audio MNN1 — dipakai untuk validasi & pemutar kustom.
// Sumber kebenaran: file fisik di public/audio (lihat generate_manifest.py).
// INVARIAN: setiap bab punya tepat 1 kaiwa; jumlah mondai bervariasi (2-4).

export interface BabAudio {
  bab: number
  kaiwa: string | null
  mondai: string[]
}

function p(bab: number, nama: string): string {
  return `/audio/bab${String(bab).padStart(2, '0')}_${nama}.mp3`
}

// jumlah track mondai per bab (terverifikasi dari file fisik)
const MONDAI_COUNT: Record<number, number> = {
  1: 3, 2: 3, 3: 2, 4: 4, 5: 3, 6: 2, 7: 3, 8: 3, 9: 2, 10: 3,
  11: 3, 12: 2, 13: 2, 14: 3, 15: 2, 16: 3, 17: 2, 18: 2, 19: 2, 20: 2,
  21: 2, 22: 2, 23: 3, 24: 2, 25: 2,
}

export const audioManifest: BabAudio[] = Array.from({ length: 25 }, (_, i) => {
  const bab = i + 1
  const n = MONDAI_COUNT[bab] ?? 0
  return {
    bab,
    kaiwa: p(bab, 'kaiwa'),
    mondai: Array.from({ length: n }, (_, j) => p(bab, `mondai${j + 1}`)),
  }
})

export function getAudio(bab: number): BabAudio | undefined {
  return audioManifest.find((a) => a.bab === bab)
}

/** Cek konsistensi: jumlah mondai di data bab harus cocok dengan manifest. */
export function cekKonsistensiAudio(
  bab: number,
  jumlahMondaiData: number,
): string | null {
  const a = getAudio(bab)
  if (!a) return `Manifest audio bab ${bab} tidak ditemukan`
  if (a.mondai.length !== jumlahMondaiData) {
    return `Bab ${bab}: manifest punya ${a.mondai.length} track mondai, data punya ${jumlahMondaiData}`
  }
  return null
}
