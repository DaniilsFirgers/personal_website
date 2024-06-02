<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="resume-card">
    <div class="title">{{ props.title }}</div>
    <slot />
  </div>
</template>

<style scoped>
.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.resume-card {
  width: calc(100% - 3rem);
  height: fit-content;
  border: 2px solid black;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  border-color: rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
}
</style>
