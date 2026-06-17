<script setup lang="ts">
import skill from "/public/data/skill.yml"
import Icon from "@/components/Icon.vue"
</script>

<template>
  <h4 class="title">
    <Icon name="star" />
    专业技能
  </h4>
  <div class="skill">
    <div class="skill-types">
      <h6 class="title">类别</h6>
      <div class="type-row" v-for="item in skill.typeList" :key="item.name">
        <span class="type-name content">{{ item.name }}</span>
        <span class="dots">
          <span v-for="i in 6" :key="i" class="dot" :class="{ grey: i > item.level }" />
        </span>
      </div>
    </div>
    <div class="skill-details">
      <h6 class="title">详情</h6>
      <p class="content detail" v-for="(item, index) in skill.detailList" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<style scoped>
h6 {
  font-style: normal;
}

.skill {
  display: grid;
  gap: 1rem 1.5rem;
}
@media (min-width: 40em) {
  .skill {
    grid-template-columns: 1fr 1fr;
  }
}

.type-row {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.dots {
  display: flex;
  gap: 0.3rem;
}

.dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #58585A;
}
.dot.grey {
  background: #D1D2D4;
}

.detail {
  margin-bottom: 0 !important;
}
</style>
