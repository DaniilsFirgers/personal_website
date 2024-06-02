<script lang="ts" setup>
import ResumeBlock from "../components/ResumeBlock.vue";
</script>

<template>
  <div class="resume-holder">
    <ResumeBlock :title="'Work experience'"> </ResumeBlock>
  </div>
</template>

<style scoped>
.resume-holder {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: rgb(39, 36, 36);
}
</style>
