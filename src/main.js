import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/index.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App)
app.use(i18n)
app.use(autoAnimatePlugin)
app.use(router)


app.mount('#app')
