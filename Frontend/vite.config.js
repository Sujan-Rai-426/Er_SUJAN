import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    host: true, // Allow external access for debugging
  },
  build: {
    outDir: 'dist', // Default output directory
  },
  base: '/', // Ensures correct asset paths in production
})
