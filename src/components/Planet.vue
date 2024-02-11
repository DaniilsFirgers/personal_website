<script lang="ts" setup>
import { defineProps, ref } from "vue";

const planetRef = ref<HTMLElement | null>(null);

const emit = defineEmits(["mouseenter", "mouseleave"]);
function handleOnMouseEnter() {
  emit("mouseenter", planetRef.value);
}
function handleOnMouseLeave() {
  emit("mouseleave", planetRef.value);
}
const props = defineProps({
  url: String,
  pageName: String,
  planetColor: String,
  shadowColor: String,
  fitPlanetName: String,
});
</script>

<template>
  <div>
    <div
      class="planet-holder"
      ref="planetRef"
      @mouseenter="handleOnMouseEnter"
      @mouseleave="handleOnMouseLeave"
    >
      <div class="planet" :style="{ '--shadow-color': shadowColor }">
        <div class="crater"></div>
        <div class="crater"></div>
        <div class="crater"></div>
        <div class="surface" :style="{ backgroundColor: planetColor }"></div>
      </div>
      <div class="ring"></div>
      <a href="/" :style="{ '--name-fit': fitPlanetName }" class="page-name">{{
        pageName
      }}</a>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<style>
.ring {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-15%, -50%) rotate(-30deg);
  border: 5px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 220px;
  height: 20px;
  z-index: 3;
  clip-path: polygon(100% 0%, 110% 100%, 0% 110%, -10% 28%, 75% 64%);
  transition: transform 0.4s ease-in, rotate 0.4s ease;
}

.planet {
  box-sizing: border-box;
  position: relative;
  border-radius: 100%;
  height: 160px;
  width: 160px;
  overflow: hidden;
  z-index: 2;
}
.surface {
  position: relative;
  border-radius: 100%;
  height: 140%;
  width: 140%;
  top: -30%;
  right: 30%;
  box-sizing: border-box;
  border: 30px solid rgba(0, 0, 0, 0.15);
  z-index: 1;
}
.planet-holder:hover {
  box-shadow: 0px 0px 30px var(--shadow-color); /* Adjust the shadow properties as needed */
  transform: translate(0, -15%);
}

.planet-holder:hover + .shadow {
  width: 80px;
  background: rgba(34, 34, 34, 0.2);
}
.planet-holder:hover > .ring {
  left: 5%;
  transform: translate(-15%, -10%) rotate(0deg);
}

div.crater:nth-child(-n + 3) {
  position: absolute;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.15);
  box-shadow: inset 3px 3px 0 rgba(0, 0, 0, 0.2);
  z-index: 3;
}
div.crater:nth-child(1) {
  height: 20px;
  width: 20px;
  top: 32%;
  left: 17%;
}
div.crater:nth-child(2) {
  height: 10px;
  width: 10px;
  top: 26%;
  left: 55%;
  box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.2);
}
div.crater:nth-child(3) {
  height: 10px;
  width: 10px;
  top: 65%;
  left: 65%;
  box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.2);
}

.planet-holder {
  position: relative;
  width: 160px;
  transition: transform 0.4s ease-in;
}

.shadow {
  position: relative;
  border-radius: 50%;
  height: 20px;
  width: 100px;
  background: rgba(34, 34, 34, 0.2);
  box-shadow: 0px 0px 50px rgba(66, 65, 65, 0.5);
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  transition: width 0.5s ease;
}

.page-name {
  position: absolute;
  width: var(--name-fit);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.85;
  z-index: 5;
  text-decoration: none;
  text-align: center;
  color: #f3eaea;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 0 2px #383838, 0 0 5px #040427;
  font-family: "Times New Roman", Times, serif;
}
</style>
