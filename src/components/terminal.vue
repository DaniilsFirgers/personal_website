<template>
  <div class="terminal">
    <textarea id="terminal" readonly></textarea>
    <form id="command-line">
      <input type="text" id="input" placeholder="Enter command here..." />
    </form>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.terminal {
  background-color: #000;
  color: #fff;
  font-family: monospace;
  font-size: 14px;
}
#terminal {
  width: 40vw;
  height: 20vh;
  border: none;
  background-color: #000;
  color: #fff;
  font-family: monospace;
  font-size: 14px;
  resize: none;
}
#command-line {
  margin-top: 10px;
}
input[type="text"] {
  border: none;
  background-color: transparent;
  color: #fff;
  font-family: monospace;
  font-size: 14px;
  width: 100%;
  outline: none;
}
</style>
