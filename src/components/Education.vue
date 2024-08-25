<script setup lang="ts">
import education from "/public/data/education.yml"
</script>

<template>
  <h4 class="title">
    <i class="fi-book" />
    教育经历
  </h4>
  <div class="surround">
    <div class="main">
      <div class="item row" v-for="item in education" :key="item.school">
        <div class="columns logo">
          <img :src="`/images/${item.logo}`" :alt="item.school" class="ribbon gray" />
        </div>
        <div class="large-3-2 medium-3-2 columns text">
          <div class="content">{{item.school}}</div>
          <div class="content">{{item.major}}</div>
          <div class="desc">
            <ul>
              <li v-for="(award, index) in item.awards" :key="index">{{award}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.surround {
  position: relative;
  margin-top: 2em;
}

.main {
  border-left: 3px solid;
  padding-left: 2rem;
}

.item {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.item:before {
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 3px solid #fff;
  background: #222;
  content: "";
  position: absolute;
  left: -0.4rem;
  margin-top: 3.5rem;
}

.text {
  padding-top: 1rem !important;
}
</style>