import { useEffect, useRef, useState } from 'react'

/**
 * Pemutar audio Kaiwa/Mondai dengan tombol Ulang (loop) + pengatur kecepatan.
 * Kecepatan diterapkan ulang saat berubah (playbackRate).
 *
 * Ketahanan (AGENTS §3 #30):
 *  - `preload="metadata"` → durasi siap tanpa mengunduh seluruh file (klik pertama
 *    tak terasa lambat); `preload="none"` dulu bikin jeda.
 *  - Bila file TIDAK ADA (mis. clone baru / deploy tanpa `public/audio/` yang
 *    341 MB & di-gitignore), tampilkan pesan + cara pasang — bukan pemutar rusak.
 *  - Status "memuat" ditampilkan agar user tahu ada proses.
 */
export function AudioBar({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLAudioElement>(null)
  const [ulang, setUlang] = useState(false)
  const [speed, setSpeed] = useState(1)
  /** idle → memuat → siap | hilang (file tidak ada) */
  const [status, setStatus] = useState<'idle' | 'memuat' | 'siap' | 'hilang'>('idle')

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = speed
  }, [speed])

  const nama = src.split('/').pop() ?? src

  if (status === 'hilang') {
    return (
      <div className="audio-bar audio-bar--hilang" role="note">
        <span className="audio-bar__hilang-ikon" aria-hidden>
          ♪
        </span>
        <span className="audio-bar__hilang-teks">
          <strong>Audio belum tersedia.</strong> Taruh file <code>{nama}</code> di{' '}
          <code>public/audio/</code> lalu muat ulang halaman.
        </span>
      </div>
    )
  }

  return (
    <div className="audio-bar">
      <audio
        ref={ref}
        controls
        preload="metadata"
        src={src}
        aria-label={label}
        loop={ulang}
        onLoadedMetadata={() => setStatus('siap')}
        onWaiting={() => setStatus('memuat')}
        onPlaying={() => setStatus('siap')}
        onError={() => setStatus('hilang')}
      />
      {status === 'memuat' && <span className="audio-bar__status">Memuat…</span>}
      {status === 'idle' && <span className="audio-bar__status audio-bar__status--halus">Siap diputar</span>}
      <label className="audio-bar__ctl">
        <input
          type="checkbox"
          checked={ulang}
          onChange={(e) => setUlang(e.target.checked)}
          aria-label="Ulangi audio terus-menerus"
        />
        Ulang
      </label>
      <label className="audio-bar__ctl">
        Kecepatan
        <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))} aria-label="Kecepatan audio">
          <option value={0.75}>0.75×</option>
          <option value={1}>1×</option>
          <option value={1.25}>1.25×</option>
        </select>
      </label>
    </div>
  )
}
