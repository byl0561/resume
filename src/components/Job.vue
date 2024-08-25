<script setup lang="ts">
import job from "/public/data/job.yml"
</script>

<template>
  <h4 class="title">
    <i class="fi-ticket" />
    工作经历
  </h4>
  <div class="row job">
    <div v-for="(item, index) in job" :key="item.company"
         :class="['columns', { end: index === job.length - 1 }]">
      <div class="row">
        <div class="columns logo">
          <img :src="`/images/${item.logo}`" :alt="item.company" class="ribbon gray" />
        </div>
        <div class="large-3-2 medium-3-2 columns">
          <div class="item">
            <div class="content">{{item.company}}</div>
            <div class="content">{{item.title}}</div>
            <div class="desc">
              <ul>
                <li v-for="(desc, index) in item.descriptions" :key="index">{{desc}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job {
  position: relative;
}

@media (min-width: 40.0625em) {
  .item {
    padding-top: 3rem;
  }
}
</style>