import { App } from '@vue/runtime-dom'
import Component from './index.vue'

// 例如：
export default {
  install (app: App) {
    app.component('Toast', Component)
  }
}
