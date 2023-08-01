import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'itsyourap.local',
    https: {
      key: 'D:\\Ankan Pal\\KeyStores\\Certificates\\Localhost\\server.key',
      cert: 'D:\\Ankan Pal\\KeyStores\\Certificates\\Localhost\\server.crt'
    }
  }
})
