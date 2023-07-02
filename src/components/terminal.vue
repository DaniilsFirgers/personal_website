<template>
  <div id="dragzone">
    <div
      id="dragable"
      class="absolute min-h-[33%] min-w-[33%] bg-dark-aubergine h-[33%] w-[33%]"
    >
      <div class="flex justify-start items-center">
        <div
          class="text-green-400 opacity-70 text-sm font-semibold"
          id="prompt-username"
        >
          daniils@daniils-UX3LAB:
        </div>
        <div
          class="text-blue-600 text-base font-semibold opacity-70"
          id="prompt-location"
        >
          <span>{{ currentUrl }} </span
          ><span class="text-white font-medium pr-1.5">$</span>
        </div>
        <input
          type="text"
          id="terminal-input"
          placeholder=""
          class="custom-input"
        />
        <div class="blink" :style="{ left: blinkInitialPosition + 'px' }"></div>
      </div>
      <div class="h-[calc(100%-20px)]"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, onBeforeUnmount, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useDragStore } from "../stores/drag";
import { useLocationStore } from "../stores/location";
import { useCommandsStore } from "../stores/executedCommands";

const dragStore = useDragStore();
const locationStore = useLocationStore();
const commandsStore = useCommandsStore();
const router = useRouter();

let currentUrl = locationStore.currentURL;
let dragable: HTMLElement | null;
let customTerminalInput: HTMLInputElement | null;
let promptLocation: HTMLElement | null;
let promtUsername: HTMLElement | null;
let blinkInitialPosition: Ref<number> = ref(0);
let handleMouseDown: (event: MouseEvent) => void;
let handleMouseUp: () => void;
let handleMouseMove: (event: MouseEvent) => void;
let inputControl = 0;

function onTerminalInput(event: Event) {
  var focusElement = document.activeElement!.className;

  var isTyping = focusElement == "custom-input";
  if (isTyping) {
    if ((event as KeyboardEvent).key === "Backspace") {
      if (inputControl > 0) {
        inputControl = inputControl - 1;
        (document.querySelector(".blink") as HTMLElement).style.transform =
          "translateX(" + (inputControl * 8).toString() + "px)";
      }
    } else if ((event as KeyboardEvent).key === "Enter") {
      let newInputCommand = customTerminalInput!.value;
      commandsStore.updateExecutedCommands(newInputCommand);
      handleInputActions(newInputCommand);
    } else {
      inputControl = inputControl + 1;
      (document.querySelector(".blink") as HTMLElement).style.transform =
        "translateX(" + (inputControl * 8).toString() + "px)";
    }
  }
}

onMounted(() => {
  dragable = document.getElementById("dragable");
  customTerminalInput = document.getElementById(
    "terminal-input"
  ) as HTMLInputElement | null;
  promptLocation = document.getElementById("prompt-location");
  promtUsername = document.getElementById("prompt-username");
  console.log(promptLocation!.offsetWidth, promtUsername!.offsetWidth);
  blinkInitialPosition.value =
    promptLocation!.offsetWidth + promtUsername!.offsetWidth;

  locationStore.updateCurrentURL();

  dragStore.setInitalPlacement(
    dragable!,
    window.innerWidth,
    window.innerHeight
  );

  handleMouseDown = (event: MouseEvent) => {
    dragStore.startDrag(event);
  };

  handleMouseUp = () => {
    dragStore.endDrag();
  };

  handleMouseMove = (event: MouseEvent) => {
    dragStore.moveDrag(event, dragable!);
  };

  dragable!.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mouseup", handleMouseUp);
  document.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", () => {
    dragStore.handleWindowResize(dragable!);
  });

  customTerminalInput?.addEventListener("keydown", onTerminalInput);
  customTerminalInput?.focus();
});

onBeforeUnmount(() => {
  dragable!.removeEventListener("mousedown", handleMouseDown);
  document.removeEventListener("mouseup", handleMouseUp);
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("keydown", onTerminalInput);

  window.removeEventListener("resize", () => {
    dragStore.handleWindowResize(dragable!);
  });
  customTerminalInput?.blur();
});

function handleInputActions(action: string) {
  switch (action) {
    case "cd /about":
      router.push("/about");
      break;
  }
}
</script>

<style scoped>
.dragzone {
  width: 40vw;
  height: 30vh;
  background-color: #000;
  color: #fff;
  font-family: monospace;
  font-size: 14px;
}

#command-line {
  margin-top: 10px;
}
input[type="text"] {
  border: none;
  background-color: transparent;
  color: #fff;
  width: 50%;
  outline: none;
  caret-color: #2c001e;
  /* caret-color: red;
  caret-shape: block; */
}
.previous-commands {
  height: calc(100% - 20px);
}

.input-promt {
  display: flex;
  justify-content: flex-start;
}

.blink {
  position: absolute;
  top: 3px;
  height: 20px;
  width: 12px;
  background-color: #fff;
  opacity: 1;
  z-index: 5;
  animation: blinkChange 1.5s infinite;
}

@keyframes blinkChange {
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #fff;
  }
  51% {
    background-color: #2c001e;
  }
  100% {
    background-color: #2c001e;
  }
}
</style>
