<script lang="ts" setup>
import { ref, onBeforeUnmount } from "vue";
import moment from "moment-timezone";
import { OnClickOutside } from "@vueuse/components";
import terminal from "../components/terminal.vue";

const beforeShutDownSecLimit: number = 10;
const brightnessValue = ref<string>("100");
const openHeaderSettingsModal = ref<Boolean>(false);
const showSwitchOffModal = ref<Boolean>(false);
const terminalIsOpen = ref<Boolean>(false);
const powerOff = ref<Boolean>(false);
const remainingTimeBeforePowerOff = ref<number>(beforeShutDownSecLimit);
const timeFormat: string = "MMM D HH:mm";
const currentTime = ref(moment().format(timeFormat));

const intervalCount = ref(0);
const intervalId = ref<number | null>(null);

function startSwitchOffInterval() {
  if (!intervalId.value) {
    intervalId.value = setInterval(() => {
      intervalCount.value++;
      remainingTimeBeforePowerOff.value--;

      if (intervalCount.value === 10 && intervalId.value) {
        clearInterval(intervalId.value);
        intervalId.value = null;
        onHandlePowerOff();
      }
    }, 1000);
  }
}

function currentDatetime() {
  const updateCurrentDatetime = () => {
    currentTime.value = moment().format(timeFormat);
  };
  const updateDatetimeInterval = setInterval(updateCurrentDatetime, 1000);
  onBeforeUnmount(() => {
    clearInterval(updateDatetimeInterval);
  });
  return {
    currentTime,
  };
}
currentDatetime();

function onHandleHeaderModal() {
  openHeaderSettingsModal.value = !openHeaderSettingsModal.value;
}
function onHandleOutsideModal() {
  openHeaderSettingsModal.value = false;
}

function onHandlePowerOff() {
  powerOff.value = true;
}

function openSwitchOffModal() {
  showSwitchOffModal.value = !showSwitchOffModal.value;
  startSwitchOffInterval();
  onHandleHeaderModal();
}

function closeSwitchOffModal() {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
    showSwitchOffModal.value = !showSwitchOffModal.value;
    remainingTimeBeforePowerOff.value = beforeShutDownSecLimit;
  }
}

function onHandleTerminalIcon() {
  terminalIsOpen.value = !terminalIsOpen.value;
}
</script>

<template>
  <header
    class="h-1.5rem bg-black flex flex-row justify-evenly"
    :class="{ 'brightness-0': powerOff }"
  >
    <v-container class="py-0 px-0 flex justify-start items-center"
      ><h1
        class="px-4 text-base m-0.5 hover:bg-cool-grey rounded-xl cursor-pointer"
      >
        Activities
      </h1>
    </v-container>
    <v-container class="py-0 px-0 flex justify-center items-center"
      ><h1
        class="text-white text-sm m-0.5 px-4 hover:bg-cool-grey rounded-xl cursor-pointer"
      >
        {{ currentTime.toLocaleLowerCase() }}
      </h1></v-container
    >
    <v-container class="py-0 px-0 flex justify-end">
      <button
        @click="onHandleHeaderModal"
        class="open-settings-modal m-0.5 hover:bg-cool-grey rounded-xl"
      >
        <v-icon
          end
          icon="mdi-wifi-strength-2"
          style="margin-right: 3px; margin-left: 10px"
        ></v-icon>
        <v-icon end icon="mdi-volume-high" style="margin: 0"></v-icon>
        <v-icon
          end
          icon="mdi-battery-90"
          style="margin-left: 0; margin-right: 10px"
        ></v-icon>
      </button>
    </v-container>
  </header>
  <div class="flex flex-row">
    <div
      class="relative h-[calc(100vh_-_1.5rem)] w-20 bg-dark-aubergine"
      :class="{ 'brightness-0': powerOff }"
    >
      <div class="hover:bg-hover-aubergine rounded-lg m-1">
        <a href="https://github.com/DaniilsFirgers" target="_blank"
          ><img
            src="/src/assets/github.png"
            alt="Github logo"
            class="h-15 w-15 p-1.5"
        /></a>
      </div>
      <div class="hover:bg-hover-aubergine rounded-lg m-1">
        <a
          href="https://lv.linkedin.com/in/daniils-firgers-1008881a4"
          target="_blank"
          ><img
            src="/src/assets/linkedin.png"
            alt="LinkedIn logo"
            class="h-15 w-15 p-1.5"
        /></a>
      </div>

      <div
        class:bg-hover-aubergine="{terminalIsOpen}"
        class="hover:bg-hover-aubergine rounded-lg m-1"
        @click="onHandleTerminalIcon"
      >
        <img
          src="/src/assets/terminal.png"
          alt="Ubuntu terminal logo"
          class="h-15 w-15 p-1.5"
        />
      </div>
    </div>

    <div
      class="relative h-[calc(100vh_-_1.5rem)] bg-mid-aubergine w-full"
      :class="{ 'brightness-0': powerOff }"
    >
      <OnClickOutside
        @trigger="onHandleOutsideModal"
        :options="{ ignore: ['.open-settings-modal'] }"
        v-if="openHeaderSettingsModal"
      >
        <div
          class="h-80 w-72 bg-header-pop-up rounded-lg absolute top-1.5 right-1.5"
        >
          <div @click="openSwitchOffModal">
            <span class="flex items-center cursor-pointer">
              <v-icon end icon="mdi-power"></v-icon>Power Off/Logout</span
            >
          </div>
        </div>
      </OnClickOutside>
      <div
        v-if="showSwitchOffModal"
        class="h-36 w-3/12 bg-header-pop-up rounded-t-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <section class="flex flex-col justify-center align-center items-center">
          <h1 class="mt-5 text-lg">Power Off</h1>
          <h2 class="mt-5 mx-auto">
            The system will power off automatically in
            {{ remainingTimeBeforePowerOff }} seconds.
          </h2>
        </section>
        <section class="mt-5">
          <div class="flex flex-row bg-warm-grey-40 h-11 rounded-b-lg">
            <div
              class="w-3/6 flex justify-center align-center items-center border-2 border-ubuntu-orange-80 rounded-bl-lg hover:bg-warm-grey-50 cursor-pointer"
              @click="closeSwitchOffModal"
            >
              Cancel
            </div>
            <div
              class="w-3/6 flex justify-center align-center items-center rounded-b-lg hover:bg-warm-grey-50 cursor-pointer"
              @click="onHandlePowerOff"
            >
              Power Off
            </div>
          </div>
        </section>
      </div>
      <div v-if="terminalIsOpen">
        <terminal></terminal>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
