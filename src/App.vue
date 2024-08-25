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
  <div class="animated fadeInDown">
    <Header />
  </div>
  <div class="row main curved-box animated fadeInUp">
    <div class="large-2 columns">
      <Information />
      <Skill />
      <Education />
      <Research />
    </div>
    <div class="large-2 columns">
      <Experience />
      <Job />
      <Community />
    </div>
  </div>
  <div class="animated delayed fadeIn">
    <Footer />
  </div>
</template>

<style scoped>
.main {
  margin-top: 4rem;
  margin-bottom: 3rem;
}
@media only screen and (min-width: 82.5625em) {
  .curved-box {
    max-width: 80rem;
    padding: 2.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    background-color: #fff;
    border: 1px solid #eee;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 60px rgba(0, 0, 0, 0.06) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.06) inset;
    position: relative;
  }
}
</style>
