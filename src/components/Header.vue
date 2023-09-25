<script setup lang="ts">
import { defineProps, ref, PropType } from "vue";
</script>

<template>
  <div class="w-screen h-12 flex justify-between items-center px-6">
    <div class="font-bold text-xl">Daniils Firgers</div>
    <div>
      <div class="flex gap-5">
        <div class="pr-4 border-r-2 border-gray-400">
          <router-link to="/about">About me</router-link>
        </div>
        <div class="">
          <router-link to="/projects">Projects</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
