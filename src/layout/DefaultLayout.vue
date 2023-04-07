<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "DefaultLayout",
});
</script>


<template>
<div class="w-full h-6 bg-green-200"></div>
<div class="flex flex-row">
   <div class="w-16 h-screen bg-red-300"></div>
       <div class="h-screen bg-yellow-300 w-full">
        <slot></slot>
    </div>
</div>     
        
    
</template>