<script setup lang="ts">
import { html as information } from "/public/data/information.md"
import Icon from "@/components/Icon.vue"
</script>

<template>
  <h4 class="title">
    <Icon name="torso" />
    个人简介
  </h4>
  <div class="content" v-html="information" />
</template>
