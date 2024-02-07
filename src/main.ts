import { createApp } from "vue";
import { createPinia } from "pinia";
import "./tailwind.css";
import "tailwindcss/tailwind.css";
import router from "./router";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(vuetify).use(pinia).mount("#app");
