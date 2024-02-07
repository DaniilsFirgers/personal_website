<template>
  <div class="meteor-sky">
    <Meteorite :url="'/about'" :page-name="'About me'" />
    <!-- v-for="index in numMeteorites" :key="index" -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Meteorite from "./Meteorite.vue";

const numMeteorites = ref(10);

const randomStyle = () => {
  const top = Math.floor(Math.random() * window.innerHeight) + "px";
  const left = Math.floor(Math.random() * window.innerWidth) + "px";
  const animationDuration = Math.random() * 5 + 3 + "s"; // Random duration between 3s and 8s
  const animationDelay = Math.random() * 0.2 + "s"; // Random delay up to 3s
  return {
    top,
    left,
    animationDuration,
    animationDelay,
  };
};
</script>

<style scoped>
.meteor-sky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* Add custom meteorite styles */
/* .meteorite {
  position: absolute;
  background-color: gray;
  border-radius: 50%;
  animation: meteoriteAnimation linear infinite;
} */

@keyframes meteoriteAnimation {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translate(100vw, 100vh) rotate(360deg);
    opacity: 1;
  }
}
</style>
