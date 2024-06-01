<template>
  <canvas id="canvas"> </canvas>
  <div class="planets-holder" :class="{ transparent: overlayActive }">
    <Planet
      v-for="(planet, index) in planets"
      ref="planet.planetRef"
      :key="index"
      :url="planet.url"
      :page-name="planet.pageName"
      :planet-color="planet.planetColor"
      :shadow-color="planet.shadowColor"
      :fit-planet-name="planet.fitPlanetName"
      :planet-width="planet.planetWidth"
      @click="(url) => handlePlanetClick(url)"
    />
  </div>
  <div class="overlay" :class="{ active: overlayActive }"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import Planet from "./Planet.vue";
import router from "../router";
import { version } from "../../package.json";

const planets = ref([
  {
    url: "/about",
    pageName: "About me",
    planetColor: "#A95C68",
    shadowColor: "#DB2C64",
    fitPlanetName: "max-content",
    planetWidth: "160px",
    planetRef: ref(),
  },
  {
    url: "/projects",
    pageName: "Projects",
    planetColor: "#A9A9A9",
    shadowColor: "#D3CD65",
    fitPlanetName: "max-content",
    planetWidth: "160px",
    planetRef: ref(),
  },
  {
    url: "/resume",
    pageName: "Resume",
    planetColor: "#6F8FAF",
    shadowColor: "#6495ED",
    fitPlanetName: "max-content",
    planetWidth: "160px",
    planetRef: ref(),
  },
]);

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D | null;
let overlayActive = ref(false);

function drawCanvas() {
  canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStars();
}

function drawStars() {
  if (!canvas) return;
  //Add stars to a small fraction of the canvas
  const canvasSize = canvas.width * canvas.height;
  const starsFraction = canvasSize / 2750;

  for (let i = 0; i < starsFraction; i++) {
    //Set up random elements
    let xPos = random(2, canvas.width - 2);
    let yPos = random(2, canvas.height - 2);
    let alpha = random(0.5, 1);
    let size = random(0.25, 2);

    //Add stars
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = alpha;
    ctx.fillRect(xPos, yPos, size, size);
  }
}

function handleCanvasResize() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCanvas();
  }
}

function handlePlanetClick(url: string) {
  overlayActive.value = !overlayActive.value;
  setTimeout(() => {
    router.push(url);
  }, 700);
}

function handleResize() {
  handleCanvasResize();
}

function random(min: number, max: number) {
  return min + Math.random() * (max + 1 - min);
}

onMounted(() => {
  console.info(`Version: ${version}`);
  drawCanvas();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* Initially transparent */
  transition: background-color 0.6s ease; /* Transition effect */
  z-index: 999; /* Ensure the overlay appears on top of other content */
  pointer-events: none; /* Allow click events to pass through initially */
}

.overlay.active {
  background-color: rgba(0, 0, 0, 0.8); /* Darken the overlay */
  pointer-events: auto; /* Enable click events when active */
}

#canvas {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgb(19, 17, 17) 30%,
    rgba(2, 0, 3, 0.8) 75%,
    rgba(56, 7, 63, 0.85) 96%
  );
  overflow: hidden;
}
.planets-holder {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 80px;
}
.planets-holder.transparent {
  opacity: 0;
  transition: opacity 0.6s ease; /* Add a transition for smooth effect */
}
</style>
