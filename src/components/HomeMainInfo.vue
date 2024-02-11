<template>
  <canvas id="canvas"> </canvas>
  <div class="planets-holder">
    <Planet
      v-for="(planet, index) in planets"
      :key="index"
      :url="planet.url"
      :page-name="planet.pageName"
      :planet-color="planet.planetColor"
      :shadow-color="planet.shadowColor"
      :fit-planet-name="planet.fitPlanetName"
      @mouseenter="(pageName: HTMLElement) => handleOnMouseEnter(pageName)"
      @mouseleave="(pageName: HTMLElement) => handleOnMouseLeave(pageName)"
    />
  </div>
  <Spaceship ref="spaceshipComponentContent" />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import Planet from "./Planet.vue";
import Spaceship from "./Spaceship.vue";

const planets = ref([
  {
    url: "/",
    pageName: "About me",
    planetColor: "#A95C68",
    shadowColor: "#DB2C64",
    fitPlanetName: "max-content",
  },
  {
    url: "/",
    pageName: "Projects",
    planetColor: "#A9A9A9",
    shadowColor: "#D3CD65",
    fitPlanetName: "max-content",
  },
  {
    url: "/",
    pageName: "Resume",
    planetColor: "#6F8FAF",
    shadowColor: "#6495ED",
    fitPlanetName: "max-content",
  },
]);

function handleOnMouseEnter(event: HTMLElement) {
  const planetPosition = event.getBoundingClientRect();
  console.log(planetPosition);
  moveSpaceShip(planetPosition.left, planetPosition.top);
}

function handleOnMouseLeave(event: HTMLElement) {
  const planetPosition = event.getBoundingClientRect();
  moveSpaceShip(planetPosition.left, planetPosition.top, true);
}

function moveSpaceShip(
  targetX: number,
  targetY: number,
  leave: boolean = false
) {
  const spaceship = spaceshipComponentContent.value.myRef;
  if (!spaceship) {
    console.error("Spaceship element is not yet available");
    return;
  }
  spaceship.style.transition = "transform 1.5s ease";
  if (leave) {
    spaceship.style.transform = `translate(${targetX}px, ${targetY - 50}px)`;
    lastSpaceShipPosition = { x: targetX, y: targetY - 50 };
    return;
  }
  spaceship.style.transform = `translate(${targetX}px, ${targetY - 100}px)`;
  lastSpaceShipPosition = { x: targetX, y: targetY - 100 };
}

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D | null;
let lastSpaceShipPosition = { x: 0, y: 0 };
const spaceshipComponentContent = ref();

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

function handleSpaceShipResize() {
  moveSpaceShip(lastSpaceShipPosition.x, lastSpaceShipPosition.y);
}

function handleResize() {
  handleCanvasResize();
  handleSpaceShipResize();
}

function random(min: number, max: number) {
  return min + Math.random() * (max + 1 - min);
}

onMounted(() => {
  drawCanvas();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
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
</style>
