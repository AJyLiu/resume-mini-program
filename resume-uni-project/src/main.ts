import { createSSRApp } from 'vue'
import App from './App.vue'
import { i18n } from './locale/index'
import store, { key } from './store'

export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n)
  app.use(store, key)
  return {
    app,
  }
}
