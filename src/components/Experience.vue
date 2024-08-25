<script setup lang="ts">
import experience from "/public/data/experience.yml"
const currentYear = new Date().getFullYear()
</script>

<template>
  <h4 class="title">
    <i class="fi-lightbulb" />
    个人经验
  </h4>
  <div class="row experience">
    <div v-for="(item, index) in experience" :key="item.type"
         :class="['large-2', 'medium-2', 'columns', { end: index === experience.length - 1 }]">
      <div class="year">{{currentYear - item.startYear + 1}}</div>
      <div class="exp_data">
        <div class="content">年{{item.type}}</div>
        <div class="desc" v-for="(highlight, index) in item.highlights" :key="index">{{highlight}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience {
  position: relative;
}

.year {
  font-size: 10rem;
  font-weight: 400;
  color: #58585A;
  float: left;
  padding-right: 1rem;
}

.exp_data {
  margin-top: 7.2rem;
  white-space: nowrap;
}
</style>