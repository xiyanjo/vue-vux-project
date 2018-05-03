import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'


// 表单
import select from '@/components/form/select.vue'
import input from '@/components/form/input.vue'
import seletMult from '@/components/form/seletMult.vue'
import inputList from '@/components/form/inputList.vue'

import vueData from '@/components/vueData.vue'
import vueEvent from '@/components/vueEvent.vue'
import vueForm from '@/components/vueForm.vue'
import vuxForm from '@/components/vuxForm.vue'
import Auditing from '@/components/Auditing'

// 父子组件
import Parent from '@/components/faChildren/Parent.vue'
import Children from '@/components/faChildren/Children.vue'
import child from '@/components/faChildren/child.vue'







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
    }
  ]*/


  mode:'history',
  routes:[{
    path: '/',
    component: Home
},{
    path: '/Auditing',
    component: Auditing
},{
    path: '/inputList',
    component: inputList
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
    path: '/seletMult',
    component: seletMult
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
    path: '/props',
    component: props
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
