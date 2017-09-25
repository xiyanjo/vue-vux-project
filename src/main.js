// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
// import Home from './components/Auditing'
// import Home from './components/toast'
// import Home from './components/actionsheet'
// import Home from './components/alert'
// import Home from './components/Confirm'
// import Home from './components/checkList'
// import Home from './components/checkIcon.vue'
import Home from './components/Parent.vue'


import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

Vue.use(VueRouter)
// Vue.use(vuexI18n.plugin, store)
const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
