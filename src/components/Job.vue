<script setup lang="ts">
import { useYaml } from "@/data"
import Icon from "@/components/Icon.vue"

interface JobItem {
  company: string
  title: string
  descriptions: string[]
  logo: string
}
const job = useYaml<JobItem[]>("/data/job.yml", [])
</script>

<template>
  <h4 class="title">
    <Icon name="ticket" />
    工作经历
  </h4>
  <div class="job">
    <div class="item" v-for="item in job" :key="item.company">
      <div class="logo">
        <img :src="`/images/${item.logo}`" :alt="item.company" class="ribbon gray" />
      </div>
      <div class="text">
        <div class="content">{{ item.company }}</div>
        <div class="content">{{ item.title }}</div>
        <div class="desc">
          <ul>
            <li v-for="(desc, index) in item.descriptions" :key="index">{{ desc }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.text {
  padding-top: 1rem;
}
</style>
