import { useEffect, useRef, useState } from 'react'

/**
 * Pemutar audio Kaiwa/Mondai dengan tombol Ulang (loop) + pengatur kecepatan.
 * Kecepatan diterapkan ulang saat berubah (playbackRate).
 */
export function AudioBar({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLAudioElement>(null)
  const [ulang, setUlang] = useState(false)
  const [speed, setSpeed] = useState(1)
  useEffect(() => {
    if (ref.current) ref.current.playbackRate = speed
  }, [speed])
  return (
    <div className="audio-bar">
      <audio ref={ref} controls preload="none" src={src} aria-label={label} loop={ulang} />
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
