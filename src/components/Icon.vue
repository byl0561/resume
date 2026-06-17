<script setup lang="ts">
// 在构建期把 src/assets/icons 下的所有 SVG 以原始字符串内联进来，
// 渲染时按名字取用，跟随文字颜色（currentColor），无需额外图标依赖。
const modules = import.meta.glob<string>('../assets/icons/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const icons: Record<string, string> = {}
for (const path in modules) {
  const name = path.split('/').pop()!.replace(/\.svg$/, '')
  icons[name] = modules[path]
}

const props = defineProps<{ name: string }>()
const svg = icons[props.name] ?? ''
</script>

<template>
  <span class="icon" aria-hidden="true" v-html="svg" />
</template>

<style scoped>
.icon {
  display: inline-flex;
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
}
.icon :deep(svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
