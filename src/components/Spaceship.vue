<template>
  <div class="spaceship" ref="myRef">
    <div class="window"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const myRef = ref<HTMLElement | null>(null);

defineExpose({
  myRef: myRef,
});
</script>

<style scoped>
.window {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: black;
  transform: translate(15px, 20px);
  border-radius: 50%;
}
.spaceship {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: absolute;
  width: 40px;
  height: 70px;
  top: 50px;
  left: 50px;
  background-color: yellow;
  position: absolute;
  z-index: 10;
}
</style>
