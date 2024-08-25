<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="row">
    <div class="text-center">
      <div class="border text-center " />
      <p class="content">
        Copyright &copy; {{currentYear}} Lava
        <a href="https://github.com/byl0561/resume">Resume</a>
        -
        Based on Project: <a href="https://www.behance.net/gallery/15677411/FREE-Resume-Template">Fernando Báez</a>
        &
        <a href="https://github.com/izuolan/zresume">Zresume</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center !important;
}
.border {
  width: 2rem;
  height: 1px;
  background: #BDBEC0;
  margin: 0 auto 0.5rem;
}

p {
  font-size: 0.9rem;
}
</style>