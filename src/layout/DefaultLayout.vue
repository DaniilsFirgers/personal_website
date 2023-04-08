<script lang="ts" setup>
import { ref, onBeforeUnmount } from 'vue'
import moment from 'moment-timezone'

const brightnessValue = ref<string>("100")
const timeFormat: string = 'MMM D HH:mm'
const currentTime = ref(moment().format(timeFormat))


function currentDatetime() {

    const updateCurrentDatetime = ()=> {
        currentTime.value = moment().format(timeFormat)
        console.log(currentTime)
    }
    const updateDatetimeInterval = setInterval(updateCurrentDatetime, 60000)
    onBeforeUnmount(()=>{
        clearInterval(updateDatetimeInterval)
    })
    return {
        currentTime
    }
}
currentDatetime()


</script>


<template >
<header class="w-full h-6 bg-black flex flex-row justify-evenly">
    <v-container></v-container>
    <v-container class="py-0 px-0 flex justify-center"><h1 class="text-white">{{ currentTime.toLocaleLowerCase() }}</h1></v-container>
    <v-container class="py-0 px-0 flex justify-center">

    </v-container>
</header>
<div class="flex flex-row ">
   <div class="w-20 h-screen bg-dark-aubergine ">
    <div class="hover:bg-hover-aubergine rounded-lg m-1">
        <a href="https://github.com/DaniilsFirgers" target="_blank"><img src="/src/assets/github.png" alt="Github logo" class="h-15 w-15 p-1.5"></a>
    </div>
    

   </div>
       <div class="h-screen bg-mid-aubergine w-full">
        <slot></slot>
    </div>
</div>     
        
    
</template>