<script setup lang="ts">
import skill from "/public/data/skill.yml"
</script>

<template>
  <h4 class="title">
    <i class="fi-star" />
    专业技能
  </h4>
  <div class="row">
    <div class="medium-2 columns">
      <h6 class="title">类别</h6>
      <ul class="small-block-grid-2 content" v-for="item in skill.typeList" :key="item.name">
        <li>{{item.name}}</li>
        <li>
          <ul class="small-block-grid-8 ellipses">
            <li v-for="i in 6" :key="i">
              <span :class="{grey: i > item.level}" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="medium-2 columns">
      <h6 class="title">详情</h6>
      <div>
        <p class="content detail" v-for="(item, index) in skill.detailList" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h6 {
  font-style: normal;
}

[class*="block-grid-"] {
  display: block;
  padding: 0;
  margin: 0 -0.625rem;
}
[class*="block-grid-"]:before,
[class*="block-grid-"]:after {
  content: " ";
  display: table;
}
[class*="block-grid-"]:after {
  clear: both;
}
[class*="block-grid-"] > li {
  display: block;
  float: left;
  height: auto;
  padding: 0 0.625rem 1.25rem;
}
.small-block-grid-2 > li:nth-of-type(1n),
.small-block-grid-8 > li:nth-of-type(1n) {
  clear: none;
}
.small-block-grid-2 > li:nth-of-type(2n+1),
.small-block-grid-8 > li:nth-of-type(8n+1) {
  clear: both;
}

.small-block-grid-2 li {
  padding-bottom: 0;
}
.small-block-grid-2 > li {
  list-style: none;
  width: 50%;
}
.small-block-grid-8 > li {
  list-style: none;
  width: 12.5%;
}

.detail {
  margin-bottom:0 !important;
}

.ellipses li span.grey {
  background: #D1D2D4 !important;
}

.ellipses li span {
  margin-left: -1.5rem;
  width: 1rem;
  height: 1rem;
  margin-right: 0.3rem;
  background: #58585A !important;
  border-radius: 100%;
  display: block;
  margin-top: 0.2rem;
}
</style>