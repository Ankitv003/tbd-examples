import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

if (typeof window !== 'undefined') import('./pwa')

import App from '@/App.vue'
import { router } from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
