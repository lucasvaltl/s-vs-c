import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: '/consumption-vs-seat-based-diagram/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
  server: {
    allowedHosts: true
  }
})
