import { ref, type Ref } from "vue"
import { parse } from "yaml"
import MarkdownIt from "markdown-it"

const md = new MarkdownIt({ html: true })

/**
 * 运行时拉取并解析 YAML，返回响应式 ref。
 * 数据未加载完成前先用 fallback 占位，避免首屏渲染访问 undefined 报错。
 * 改动 public/data 下的 yml 后无需 rebuild，刷新页面即可生效。
 */
export function useYaml<T>(path: string, fallback: T): Ref<T> {
  const data = ref(fallback) as Ref<T>
  fetch(path)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.text()
    })
    .then((text) => {
      data.value = parse(text) as T
    })
    .catch((err) => console.error(`加载数据失败：${path}`, err))
  return data
}

/** 运行时拉取 Markdown 并渲染为 HTML 字符串，配合 v-html 使用。 */
export function useMarkdown(path: string): Ref<string> {
  const html = ref("")
  fetch(path)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.text()
    })
    .then((text) => {
      html.value = md.render(text)
    })
    .catch((err) => console.error(`加载数据失败：${path}`, err))
  return html
}
