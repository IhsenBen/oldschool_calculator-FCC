import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/oldschool_calculator-FCC/',
  // make run laways on port 3000
  server: {
    port: 3000,
  },
})
