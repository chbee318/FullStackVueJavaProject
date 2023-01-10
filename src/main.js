import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const Vue = createApp(App) 
Vue.config.globalProperties.axios= axios
require('./mock.js')
Vue.use(ElementPlus)
Vue.use(store)
Vue.use(router)
Vue.mount('#app')
