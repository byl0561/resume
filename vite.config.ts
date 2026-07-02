import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// yml / md 不再在构建期内联，改为运行时 fetch（见 src/data.ts），
// 因此这里不再需要 @rollup/plugin-yaml 和 markdown 内联插件。
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
