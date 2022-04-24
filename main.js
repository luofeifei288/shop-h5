import App from './App'
import messages from './locale/index'
var lag = ""
if(lang=='cn'){
	lag = 'zh-Hans'
}else{
	lag = lang
}
let i18nConfig = {
  locale: lag,
  messages,
}
// #ifndef VUE3
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import 'font_hwuvlfwexbg/iconfont.css'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
Vue.config.productionTip = false
App.mpType = 'app'

import api from '@/pages/api/api.js'
Vue.prototype.$api = api

const app = new Vue({
  i18n,
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'
const i18n = createI18n(i18nConfig)

export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n)
  return {
    app
  }
}
// #endif