import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/aavrc/', // 👈 must match repo name
  build: {
    outDir: 'docs' // 👈 output folder changed to docs
  }
})
