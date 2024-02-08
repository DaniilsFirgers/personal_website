<template>
  <div class="meteor-sky">
    <div class="planets-holder">
      <Meteorite
        :url="'/about'"
        :page-name="'About me'"
        :planet-color="'#B7164A'"
        :shadow-color="'#DB2C64'"
        :fit-planet-name="'max-content'"
      />
      <Meteorite
        :url="'/'"
        :page-name="'Projects'"
        :planet-color="'#C6BE43'"
        :shadow-color="'#D3CD65'"
        :fit-planet-name="'max-content'"
      />
      <Meteorite
        :url="'/'"
        :page-name="'Resume'"
        :planet-color="'#6F8FAF'"
        :shadow-color="'#6495ED'"
        :fit-planet-name="'max-content'"
      />
    </div>

    <!-- v-for="index in numMeteorites" :key="index" -->
  </div>
</template>

<script setup lang="ts">
import Meteorite from "./Meteorite.vue";
</script>

<style scoped>
.meteor-sky {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.planets-holder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 80px;
}
</style>
