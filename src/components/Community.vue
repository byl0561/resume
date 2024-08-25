<script setup lang="ts">
import { html as community } from "/public/data/community.md"
</script>

<template>
  <h4 class="title">
    <i class="fi-social-github" />
    个人项目
  </h4>
  <div class="community content" v-html="community" />
</template>

<style scoped>
.community ol,
.community ol p {
  font-size: 0.75rem;
  margin-top: -0.5rem;
}
</style>