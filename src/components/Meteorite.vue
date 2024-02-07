<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  url: String,
  pageName: String,
});
</script>

<template>
  <div class="planet-holder">
    <div class="planet">
      <a href="/" class="page-name">{{ pageName }}</a>
      <div class="crater"></div>
      <div class="crater"></div>
      <div class="crater"></div>
      <div class="surface"></div>
    </div>

    <div class="shadow"></div>
  </div>
</template>

<style>
.planet {
  box-sizing: border-box;
  position: relative;
  border-radius: 100%;
  height: 160px;
  width: 160px;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.4s ease-in;
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
  background: #ff5f40;
  z-index: 1;
}
.planet:hover {
  box-shadow: 0px 0px 30px rgba(143, 13, 78, 0.5); /* Adjust the shadow properties as needed */
}

.planet:hover {
  transform: translate(0, -15px);
}
.planet:hover + .shadow {
  width: 80px;
  background: rgba(87, 86, 86, 0.2);
}

div.crater:nth-child(n + 2):nth-child(-n + 4) {
  position: absolute;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.15);
  box-shadow: inset 3px 3px 0 rgba(0, 0, 0, 0.2);
  z-index: 3;
}
div.crater:nth-child(2) {
  height: 20px;
  width: 20px;
  top: 32%;
  left: 17%;
}
div.crater:nth-child(3) {
  height: 10px;
  width: 10px;
  top: 26%;
  left: 55%;
  box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.2);
}
div.crater:nth-child(4) {
  height: 10px;
  width: 10px;
  top: 60%;
  left: 40%;
  box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.2);
}

.planet-holder {
  position: relative;
  top: 100px;
  left: 100px;
  width: 160px;
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
  transform: translate(25%, 170%);
  opacity: 0.7;
  z-index: 4;
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
