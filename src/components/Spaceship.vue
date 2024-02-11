<template>
  <div class="spaceship" ref="myRef"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const myRef = ref<HTMLElement | null>(null);

defineExpose({
  myRef: myRef,
});
</script>

<style scoped>
.spaceship {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50px;
  left: 50px;
  background-color: yellow;
  position: absolute;
  z-index: 10;
}
</style>
