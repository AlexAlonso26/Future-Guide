import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Em produção usamos base relativo (`./`): funciona em /Future-Guide/ no GitHub Pages e o `vite preview`
// local serve os assets em /assets/... em vez de devolver index.html para /Future-Guide/assets/... (página em branco).
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? './' : '/',
}))
