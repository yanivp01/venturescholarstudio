// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/vss-site/', // EXACT repo name, with leading + trailing slashes
})
