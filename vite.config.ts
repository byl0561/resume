import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import yaml from '@rollup/plugin-yaml'
import MarkdownIt from 'markdown-it'

// 轻量内联插件：把 .md 文件编译为导出渲染后 HTML 的模块，
// 保持 `import { html } from './foo.md'` 的用法，替代已停止维护的 vite-plugin-markdown。
function markdown(): Plugin {
  const md = new MarkdownIt({ html: true })
  return {
    name: 'inline-markdown-html',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md')) return
      const html = md.render(code)
      return {
        code: `export const html = ${JSON.stringify(html)};\nexport default { html };`,
        map: null,
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    yaml(),
    markdown(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
