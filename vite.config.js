// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/aavrc/', // 👈 must match your repo name
  build: {
    outDir: 'docs' // 👈 ensures build goes directly into docs folder
  }
})
