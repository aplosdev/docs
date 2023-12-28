import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'inter-ui/inter.css'
import 'inter-ui/inter-variable.css'
import 'inter-ui/inter-display.css'
import router from './router'


const app = createApp(App)

app.use(router)


app.mount('#app')
