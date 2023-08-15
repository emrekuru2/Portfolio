import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = (mode === "production") ? "/Portfolio/" : "./";

  return {
    plugins: [react()],
    base: base
  }

})
