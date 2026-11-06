import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match your GitHub repo name: '/<repo-name>/'
export default defineConfig({
  plugins: [react()],
  base: '/hotel-website/',
})
