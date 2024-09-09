import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'
import { createRouter, createWebHashHistory } from "vue-router"
import { routes } from "./router/routes.js"

import '@quasar/extras/roboto-font/roboto-font.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const myApp = createApp(App)

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

myApp.use(Quasar, {
    plugins: {},
    lang: quasarLang,
})

myApp.use(router)
myApp.mount('#app')