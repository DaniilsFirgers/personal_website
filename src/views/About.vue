<script lang="ts" setup>
let dateOfBirth = new Date(1999, 8, 6);
function calculateAge(dateOfBirth: Date) {
  const diff = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
</script>

<template>
  <div class="about">
    <div class="typewriter-holder">
      <h1 class="typewriter-name">Name: Daniils Firgers</h1>
      <h1 class="typewriter-age">Age: {{ calculateAge(dateOfBirth) }}</h1>
      <h1 class="typewriter-occupation">Occupation: software developer</h1>
    </div>
  </div>
</template>
<style scoped>
.about {
  height: 100vh;
  width: 100vw;
  background-color: rgb(8, 8, 8);
}

.typewriter-name,
.typewriter-age,
.typewriter-occupation {
  color: rgba(48, 46, 46, 0.9);
  margin-left: 5px;
  position: absolute;

  white-space: nowrap; /* keep text in one line */
  overflow: hidden; /* hide text behind the cursor */
  margin: 0.5rem auto;
  font-family: "Major Mono Display", monospace;
  font-size: 2rem;
  font-weight: bold;
}

.typewriter-name {
  width: 420px;
  top: 5px;
  border-right: 2px solid rgba(17, 17, 17, 0.9);
}

.typewriter-age {
  width: 100px;
  top: 55px;
  border-right: 2px solid rgba(17, 17, 17, 0.9);
}

.typewriter-occupation {
  width: 400px;
  top: 105px;
  border-right: 2px solid rgba(17, 17, 17, 0.9);
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgba(17, 17, 17, 0.9);
  }
}

@keyframes typewriter_name_kf {
  from {
    width: 0px;
  }
  to {
    width: 420px;
  }
}

@keyframes typewriter_age_kf {
  from {
    width: 0px;
  }
  to {
    width: 135px;
  }
}

@keyframes typewriter_occupation_kf {
  from {
    width: 0px;
  }
  to {
    width: 580px;
  }
}

.typewriter-name {
  border-right: 2px solid rgba(17, 17, 17, 0.9);
  /* define animation types for firstline  */
  animation: typewriter_name_kf 3s steps(20, end) 1 normal both,
    blink-caret 0.75s step-end 2.5s forwards;
}
.typewriter-age {
  border-right: 2px solid rgba(17, 17, 17, 0.9);
  /* define animation types for econd_line  */
  animation: typewriter_age_kf 3s steps(15, end) 3s 1 normal both,
    blink-caret 0.75s step-end 5.5s forwards;
}

.typewriter-occupation {
  border-right: 2px solid rgba(17, 17, 17, 0.9);
  /* define animation types for third_line  */
  animation: typewriter_occupation_kf 3s steps(38, end) 6s 1 normal both,
    blink-caret 0.75s step-end infinite 8s;
}
</style>
