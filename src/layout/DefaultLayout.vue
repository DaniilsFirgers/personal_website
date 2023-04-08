<script lang="ts" setup>
import { ref, onBeforeUnmount } from 'vue'
import moment from 'moment-timezone'


const timeFormat: string = 'MMM D HH:mm'
const currentTime = ref(moment().format(timeFormat))


function currentDatetime() {

    const updateCurrentDatetime = ()=> {
        currentTime.value = moment().format(timeFormat)
        console.log(currentTime)
    }
    const updateDatetimeInterval = setInterval(updateCurrentDatetime, 1000)
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
<header class="w-full h-6 bg-black flex flex-row justify-center">

    <h1 class="text-white">{{ currentTime.toLocaleLowerCase() }}</h1>

</header>
<div class="flex flex-row">
   <div class="w-16 h-screen bg-dark-aubergine"></div>
       <div class="h-screen bg-yellow-300 w-full">
        <slot></slot>
    </div>
</div>     
        
    
</template>