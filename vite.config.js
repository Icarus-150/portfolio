import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(
  {resolve: {
    dedupe: ['react', 'react-dom']  // forces Vite to use only one copy
  },
  plugins: [react()],
  base: '/portfolio/',
});
