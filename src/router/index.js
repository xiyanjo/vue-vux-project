import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import alert from '@/components/alert'
// import Home from '@/components/Home'

import Home from '@/components/Home'
import Confirm from '@/components/Confirm'

import HelloFromVux from '@/components/HelloFromVux'
import hello from '@/components/Hello'
import Auditing from '@/components/Auditing'
import toast from '@/components/toast'
import actionsheet from '@/components/actionsheet'
import alert from '@/components/alert'
import checkList from '@/components/checkList'
import checkIcon from '@/components/checkIcon.vue'
import checker from '@/components/checker.vue'
import Parent from '@/components/Parent.vue'
import Children from '@/components/Children.vue'
import child from '@/components/child.vue'
import vueData from '@/components/vueData.vue'
import input from '@/components/input.vue'
import inputChecked from '@/components/inputChecked.vue'
import vueEvent from '@/components/vueEvent.vue'
import vueForm from '@/components/vueForm.vue'
import vuxForm from '@/components/vuxForm.vue'
import xdailog from '@/components/xDailog.vue'

import select from '@/components/select.vue'

import props from '@/view/props.vue'
import pdfPrewer from '@/components/pdfPrewer.vue'
import huadong from '@/components/handle/huadong.vue'

Vue.use(Router)

export default new Router({
  /*routes: [
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
  ]*/


  mode:'history',
  routes:[{
    path: '/',
    component: Home
},{
    path: '/confirm',
    component: Confirm
},{
    path: '/HelloFromVux',
    component: HelloFromVux
},{
    path: '/Auditing',
    component: Auditing
},{
    path: '/toast',
    component: toast
},{
    path: '/actionsheet',
    component: actionsheet
},{
    path: '/alert',
    component: alert
},{
    path: '/checkList',
    component: checkList
},{
    path: '/checkIcon',
    component: checkIcon
},{
    path: '/checker',
    component: checker
},{
    path: '/Parent',
    component: Parent
},{
    path: '/Children',
    component: Children
},{
    path: '/child',
    component: child
},{
    path: '/vueData',
    component: vueData
},{
    path: '/input',
    component: input
},{
    path: '/inputChecked',
    component: inputChecked
},{
    path: '/vueEvent',
    component: vueEvent
},{
    path: '/vueForm',
    component: vueForm
},{
    path: '/vuxForm',
    component: vuxForm
},{
    path: '/xdailog',
    component: xdailog
},{
    path: '/props',
    component: props
},{
    path: '/hello',
    component: hello
},{
    path: '/select',
    component: select
},{
    path: '/pdfPrewer',
    component: pdfPrewer
},{
    path: '/huadong',
    component: huadong
}]
})
