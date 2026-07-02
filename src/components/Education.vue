<script setup lang="ts">
import { useYaml } from "@/data"
import Icon from "@/components/Icon.vue"

interface EduItem {
  school: string
  major: string
  awards: string[]
  logo: string
}
const education = useYaml<EduItem[]>("/data/education.yml", [])
</script>

<template>
  <h4 class="title">
    <Icon name="book" />
    教育经历
  </h4>
  <div class="timeline">
    <div class="item" v-for="item in education" :key="item.school">
      <div class="logo">
        <img :src="`/images/${item.logo}`" :alt="item.school" class="ribbon gray" />
      </div>
      <div class="text">
        <div class="content">{{ item.school }}</div>
        <div class="content">{{ item.major }}</div>
        <div class="desc">
          <ul>
            <li v-for="(award, index) in item.awards" :key="index">{{ award }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  margin-top: 2rem;
  padding-left: 2rem;
  border-left: 3px solid;
}

.item {
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  align-items: flex-start;
}

.item::before {
  content: "";
  position: absolute;
  left: -2.4rem;
  top: 2.75rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 3px solid #fff;
  background: #222;
}

.text {
  padding-top: 1rem;
}
</style>
