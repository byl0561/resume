<script setup lang="ts">
import basic from "/public/data/basic.yml"
</script>

<template>
  <div id="header">
    <div class="row">
      <div class="columns p_name">
        <h2>{{ basic.name }}</h2>
        <h6 class="title">{{ basic.jobTitle }}</h6>
      </div>
      <div class="columns p_info">
        <div class="columns p_info_item" v-for="item in basic.infoList" :key="item.title">
          <div class="row">
            <div class="columns content p_info_item_name">{{item.title}}</div>
            <div class="columns content border-left p_info_item_value">
              <ul class="no-bullet">
                <li v-for="(detail, index) in item.detailList" :key="index" v-html="detail"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header {
  padding-top: 3rem;
}
#header h2 {
  margin-top: -1.15rem;
}

.p_name {
  text-align:center; 
  margin-bottom: 15px;
}
.p_info {
  text-align:center;
}
@media (max-width: 64.0625em) {
  .p_info {
    width: 330px;
    margin-left: auto;
    margin-right: auto;
    float: none !important;
  }
}
@media (min-width: 82.5625em) {
  .p_name {
    width: 250px;
  }

  .p_info {
    width: 950px;
  }
}

.p_info_item {
  width:300px; 
  float:none !important;
  display:inline-block;
}
.p_info_item .row {
  float:none; 
  text-align:left;
}
.p_info_item_name {
  width:65px;
}
.p_info_item_value {
  width:235px;
}

.border-left {
  border-left: 1px solid;
}

.border-left ul {
  margin-bottom: 0;
}

ul.no-bullet {
  margin-left: 0;
  list-style: none;
}
</style>