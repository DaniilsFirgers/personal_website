<script lang="ts" setup>
import Header from "../components/Header.vue";
</script>

<template>
  <div class="flex flex-col items-center bg-gray-200 h-screen w-screen">
    <Header />
    <slot />
  </div>
</template>
