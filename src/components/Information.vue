<script setup lang="ts">
import { useMarkdown } from "@/data"
import Icon from "@/components/Icon.vue"

const information = useMarkdown("/data/information.md")
</script>

<template>
  <h4 class="title">
    <Icon name="torso" />
    个人简介
  </h4>
  <div class="content" v-html="information" />
</template>
