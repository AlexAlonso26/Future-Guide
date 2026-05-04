import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages serve o site em /NOME-DO-REPO/ — sem isto os .js/.css ficam em / e a página fica em branco.
const repoBase = '/Future-Guide/'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? repoBase : '/',
}))
