<script setup lang="ts">
import { useYaml } from "@/data"
import Icon from "@/components/Icon.vue"

interface Exp {
  type: string
  startYear: number
  highlights: string[]
}
const experience = useYaml<Exp[]>("/data/experience.yml", [])
const currentYear = new Date().getFullYear()
</script>

<template>
  <h4 class="title">
    <Icon name="lightbulb" />
    个人经验
  </h4>
  <div class="experience">
    <div class="item" v-for="item in experience" :key="item.type">
      <div class="year">{{ currentYear - item.startYear + 1 }}</div>
      <div class="exp_data">
        <div class="content">年{{ item.type }}</div>
        <div class="desc" v-for="(highlight, index) in item.highlights" :key="index">{{ highlight }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience {
  display: grid;
  gap: 2rem;
}
@media (min-width: 64em) {
  .experience {
    grid-template-columns: 1fr 1fr;
  }
}

.item {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
}

.year {
  font-size: 10rem;
  font-weight: 400;
  line-height: 1;
  color: #58585A;
}

.exp_data {
  padding-bottom: 0.5rem;
  white-space: nowrap;
}
</style>
