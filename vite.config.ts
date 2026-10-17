import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5173 },
  resolve: {
    alias: { '@': '/src' },
  },
  build: {
    rollupOptions: {
      output: {
        // Pisahkan data TIAP bab jadi chunk sendiri (jaring pengaman agar data
        // satu bab tak pernah tercampur jadi chunk raksasa).
        manualChunks(id) {
          const cocok = /src[\\/]data[\\/](bab\d+)[\\/]([^\\/]+\.ts)$/.exec(id)
          if (!cocok) return undefined
          const [, bab, nama] = cocok
          // `susun`/`mondai` dipakai halaman latihan campuran tanpa data bab penuh.
          if (nama === 'susun.ts' || nama === 'mondai.ts') return `ringan-${bab}`
          return `bab-${bab}`
        },
      },
    },
  },
})
