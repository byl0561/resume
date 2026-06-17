<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Information from "@/components/Information.vue";
import Skill from "@/components/Skill.vue";
import Education from "@/components/Education.vue";
import Research from "@/components/Research.vue";
import Experience from "@/components/Experience.vue";
import Job from "@/components/Job.vue";
import Community from "@/components/Community.vue";
</script>

<template>
  <div class="fade-in-down">
    <Header />
  </div>
  <div class="main curved-box fade-in-up">
    <div class="layout">
      <div class="column">
        <Information />
        <Skill />
        <Education />
        <Research />
      </div>
      <div class="column">
        <Experience />
        <Job />
        <Community />
      </div>
    </div>
  </div>
  <div class="fade-in delayed">
    <Footer />
  </div>
</template>

<style scoped>
.main {
  margin: 4rem auto 3rem;
  max-width: 75rem;
  padding: 0 0.9375rem;
}

.layout {
  display: grid;
  gap: 0 2rem;
}
@media (min-width: 64em) {
  .layout {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 82.5625em) {
  .curved-box {
    max-width: 80rem;
    padding: 2.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    background-color: #fff;
    border: 1px solid #eee;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    position: relative;
  }
}

/* 原 animate.css 的入场动画，改为原生实现 */
.fade-in-down {
  animation: fadeInDown 1s both;
}
.fade-in-up {
  animation: fadeInUp 1s both;
}
.fade-in {
  animation: fadeIn 1s both;
}
.delayed {
  animation-delay: 1s;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translate3d(0, -100%, 0); }
  to { opacity: 1; transform: none; }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translate3d(0, 100%, 0); }
  to { opacity: 1; transform: none; }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .fade-in-down,
  .fade-in-up,
  .fade-in {
    animation: none;
  }
}
</style>
