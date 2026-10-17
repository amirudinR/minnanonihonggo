import { defineConfig } from 'vitest/config'

/**
 * Konfigurasi Vitest. Dependensi dev yang DISETUJUI user (lihat AGENTS §1.2).
 * Alias '@' disamakan dengan vite.config.ts. environment 'node' — `src/core/*`
 * murni tanpa React/DOM.
 */
export default defineConfig({
  resolve: {
    alias: { '@': '/src' },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
