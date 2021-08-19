// src\main.ts
import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './styles/index.scss'

const app = createApp(App)
app.use(store)
  .use(router)
  .use(ElementPlus)

// 下面是全局组件的注入，全局组件都放在component下面～会自动注入到全局
const modules = import.meta.globEager('./components/**/index.ts')

for (const path in modules) {
  app.use(modules[path].default)
}

app.mount('#app')
