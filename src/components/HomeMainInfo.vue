<template>
  <!-- <div class="meteor-sky"> -->
  <canvas id="canvas"></canvas>
  <div class="planets-holder">
    <Meteorite
      :url="'/'"
      :page-name="'About me'"
      :planet-color="'#A95C68'"
      :shadow-color="'#DB2C64'"
      :fit-planet-name="'max-content'"
    />
    <Meteorite
      :url="'/'"
      :page-name="'Projects'"
      :planet-color="'#A9A9A9'"
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
  <!-- </div> -->
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import Meteorite from "./Meteorite.vue";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D | null;

function drawCanvas() {
  canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  console.log(canvas);
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
    console.log(ctx);
    ctx.fillStyle = "#ffffff";
    ctx.globalAlpha = alpha;
    ctx.fillRect(xPos, yPos, size, size);
  }
}

function handleResize() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCanvas();
  }
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
