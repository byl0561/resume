<script setup lang="ts">
import { html as information } from "/public/data/information.md"
</script>

<template>
  <h4 class="title">
    <i class="fi-torso" />
    个人简介
  </h4>
  <div class="content" v-html="information" />
</template>

<style scoped>

</style>