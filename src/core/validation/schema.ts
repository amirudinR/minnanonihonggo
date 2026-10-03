import type { Bab } from '../../types/bab'
import { cekKonsistensiAudio } from '../audio/manifest'

export interface ValidasiHasil {
  bab: number
  errors: string[]
  warnings: string[]
}

/**
 * Validasi konsistensi data satu bab. Dipakai lewat script `npm run validate` / dev.
 * Error = data rusak (harus diperbaiki). Warning = mencurigakan tapi tidak fatal.
 */
export function validasiBab(bab: Bab): ValidasiHasil {
  const errors: string[] = []
  const warnings: string[] = []

if (!bab.no) errors.push('bab.no kosong')
    if (!bab.topik?.trim()) errors.push('bab.topik kosong')

    // WAJIB: OCR (RapidOCR) tidak bisa baca kana/kanji -> teks JP jadi '??' / '\ufffd'.
    // Hanya deteksi 2+ '?' bertumpuk supaya tanda tanya biasa di kalimat Indonesia tidak kena.
    const rusak = (s?: string) => !!s && (/\?{2,}/.test(s) || s.includes('\ufffd'))
    const cekJp = (label: string, s?: string) => {
      if (rusak(s)) errors.push(`${label} berisi '??' — teks JP gagal dibaca (jangan pakai OCR)`)
    }
    bab.kosakata.forEach((k) => {
      cekJp(`kosakata ${k.id} kana`, k.kana)
      cekJp(`kosakata ${k.id} kanji`, k.kanji)
    })
    ;[...bab.bunpou, ...(bab.catatanTataBahasa ?? [])].forEach((b) => {
      cekJp(`bunpou ${b.no} pola`, b.pola)
      b.contoh?.forEach((c, i) => cekJp(`bunpou ${b.no} contoh[${i}]`, c))
    })
    bab.reibun.forEach((r) => {
      cekJp(`reibun ${r.no} jp`, r.jp)
      cekJp(`reibun ${r.no} kunci`, r.kunci)
    })
    bab.kaiwa?.dialog.forEach((d, i) => cekJp(`kaiwa dialog[${i}]`, d.jp))
    ;[...bab.renshuuA, ...bab.renshuuB, ...bab.renshuuC].forEach((r) => {
      cekJp(`renshuu ${r.no} soal`, r.soal)
      cekJp(`renshuu ${r.no} jawaban`, r.jawaban)
    })
    bab.mondai.forEach((m) => {
      cekJp(`mondai ${m.no} soal`, m.soal)
      cekJp(`mondai ${m.no} jawaban`, m.jawaban)
    })

  // kosakata
  const ids = new Set<string>()
  bab.kosakata.forEach((k) => {
    if (!k.id) errors.push(`kosakata tanpa id: ${k.kana}`)
    if (ids.has(k.id)) errors.push(`kosakata id duplikat: ${k.id}`)
    ids.add(k.id)
    if (!k.kana?.trim()) errors.push(`kosakata ${k.id} tanpa kana`)
    if (!k.arti?.trim()) errors.push(`kosakata ${k.id} (${k.kana}) tanpa arti`)
  })

  // bunpou
  bab.bunpou.forEach((b, i) => {
    if (b.contoh.length !== b.artiContoh.length) {
      errors.push(`bunpou ${b.no}: contoh (${b.contoh.length}) != artiContoh (${b.artiContoh.length})`)
    }
    if (!b.pola?.trim()) errors.push(`bunpou #${i + 1} tanpa pola`)
  })
  ;(bab.catatanTataBahasa ?? []).forEach((b) => {
    if (b.contoh.length !== b.artiContoh.length) {
      errors.push(`catatan #${b.no}: contoh != artiContoh`)
    }
  })

  // reibun
  bab.reibun.forEach((r, i) => {
    if (!r.kalimat?.trim()) errors.push(`reibun #${i + 1} tanpa kalimat`)
    if (!r.arti?.trim()) warnings.push(`reibun #${i + 1} tanpa arti`)
  })

  // kaiwa
  if (bab.kaiwa) {
    if (bab.kaiwa.dialog.length === 0) errors.push('kaiwa tanpa dialog')
    bab.kaiwa.dialog.forEach((d) => {
      const adaKanji = /[\u4e00-\u9faf]/.test(d.teks)
      if (adaKanji && (!d.furigana || d.furigana.length === 0)) {
        warnings.push(`kaiwa baris ${d.no} mengandung kanji tanpa furigana`)
      }
    })
  } else {
    warnings.push('bab tanpa kaiwa')
  }

  // renshuu: soal wajib, jawaban opsional tapi beri warning
  ;([
    ['A', bab.renshuuA],
    ['B', bab.renshuuB],
    ['C', bab.renshuuC],
  ] as const).forEach(([sec, arr]) => {
    const nos = new Set<number>()
    arr.forEach((r) => {
      if (!r.soal?.trim()) errors.push(`renshuu${sec} no ${r.no}: soal kosong`)
      if (nos.has(r.no)) errors.push(`renshuu${sec}: no duplikat ${r.no}`)
      nos.add(r.no)
      if (!r.jawaban?.trim()) warnings.push(`renshuu${sec} no ${r.no}: tanpa kunci jawaban`)
    })
  })

  // mondai
  const nosM = new Set<number>()
  bab.mondai.forEach((m) => {
    if (!m.soal?.trim()) errors.push(`mondai no ${m.no}: soal kosong`)
    if (nosM.has(m.no)) errors.push(`mondai: no duplikat ${m.no}`)
    nosM.add(m.no)
    if (m.jenis === 'pilihan_ganda' && (!m.pilihan || m.pilihan.length === 0)) {
      errors.push(`mondai no ${m.no}: pilihan_ganda tanpa pilihan`)
    }
    if (m.kunciTersedia !== false && !m.jawaban?.trim()) {
      warnings.push(`mondai no ${m.no}: kunciTersedia true tapi jawaban kosong`)
    }
  })

  // audio: bandingkan jumlah track manifest dengan jumlah mondai yang punya audio
  const mondaiBerAudio = bab.mondai.filter((m) => m.audio).length
  const audioErr = cekKonsistensiAudio(bab.no, mondaiBerAudio)
  if (audioErr) warnings.push(audioErr)

  return { bab: bab.no, errors, warnings }
}

export function validasiSemua(babs: Bab[]): ValidasiHasil[] {
  return babs.map(validasiBab)
}
