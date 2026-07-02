<script setup lang="ts">
import { useMarkdown } from "@/data"
import Icon from "@/components/Icon.vue"

const research = useMarkdown("/data/research.md")
</script>

<template>
  <h4 class="title">
    <Icon name="like" />
    科研成果
  </h4>
  <div class="research content" v-html="research" />
</template>

<style scoped>
.research ol,
.research ol p {
  font-size: 0.75rem;
  margin-top: -0.5rem;
}
</style>