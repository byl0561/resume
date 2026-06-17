<script setup lang="ts">
import basic from "/public/data/basic.yml"
</script>

<template>
  <header id="header">
    <div class="p_name">
      <h2>{{ basic.name }}</h2>
      <h6 class="title">{{ basic.jobTitle }}</h6>
    </div>
    <div class="p_info">
      <div class="p_info_item" v-for="item in basic.infoList" :key="item.title">
        <div class="p_info_item_name content">{{ item.title }}</div>
        <ul class="p_info_item_value content">
          <li v-for="(detail, index) in item.detailList" :key="index" v-html="detail" />
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
#header {
  padding-top: 3rem;
  text-align: center;
}
#header h2 {
  margin-top: -1.15rem;
}

.p_name {
  margin-bottom: 1rem;
}

.p_info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem 2rem;
}

.p_info_item {
  display: flex;
  gap: 1rem;
  text-align: left;
}

.p_info_item_name {
  flex: 0 0 4rem;
}

.p_info_item_value {
  margin: 0;
  padding-left: 1rem;
  list-style: none;
  border-left: 1px solid;
}
</style>
