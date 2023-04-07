import { createApp } from 'vue'
import './tailwind.css'
import 'tailwindcss/tailwind.css'
import router from './router'
import App from './App.vue'


const app = createApp(App)

app.use(router).mount('#app')
