import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/npconfig/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['./src/assets1/3d/*.glb']
})
