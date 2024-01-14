import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/louise-elliott-work/react-portfolio",
  plugins: [react()],
})
