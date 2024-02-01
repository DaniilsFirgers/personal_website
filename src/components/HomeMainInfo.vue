<script lang="ts" setup></script>

<template>
  <div class="flex h-full items-cenPter">
    <div class="flex gap-5 justify-center items-center h-fit">
      <img
        src="/src/assets/me.jpg"
        alt="my profile pic"
        class="h-[550px] rounded-full"
      />
      <div class="flex flex-col gap-6 w-1/3 justify-between">
        <h1 class="grow font-bold text-7xl">Hello1</h1>
        <div>
          <h2 class="font-semibold text-xl">
            A bit about mefsdfsd TEST TEST aaaa
          </h2>
          <p>
            I am a software developer based in Riga with interest in both
            Frontend and Backend technologies.
          </p>
        </div>
        <div class="flex gap-10 justofy">
          <router-link
            class="flex items-center border h-20 w-20 rounded-full justify-center bg-gray-300"
            to="/about"
            >About me</router-link
          >

          <router-link
            class="flex items-center border h-20 w-20 rounded-full justify-center bg-gray-300"
            to="/projects"
            >Projects</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
