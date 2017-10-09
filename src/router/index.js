import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import alert from '@/components/alert'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    // {
    //   path: '/alert',
    //   name: 'alert',
    //   component: alert
    // }
      {
          path: '/confirm',
          name: 'confirm',
          component: Confirm
      },
  ]
})
