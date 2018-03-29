// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Confirm from './components/Confirm'

import HelloFromVux from './components/HelloFromVux'
import hello from './components/Hello'
import Auditing from './components/Auditing'
import toast from './components/toast'
import actionsheet from './components/actionsheet'
import alert from './components/alert'
import checkList from './components/checkList'
import checkIcon from './components/checkIcon.vue'
import checker from './components/checker.vue'
import Parent from './components/Parent.vue'
import vueData from './components/vueData.vue'
import input from './components/input.vue'
import vueEvent from './components/vueEvent.vue'
import vueForm from './components/vueForm.vue'
import vuxForm from './components/vuxForm.vue'
import xdailog from './components/xDailog.vue'

import select from './components/select.vue'

import props from './view/props.vue'
import pdfPrewer from './components/pdfPrewer.vue'
import huadong from './components/handle/huadong.vue'

import Vuex from 'vuex'


import {AlertPlugin, ToastPlugin} from 'vux'

Vue.use(AlertPlugin);
Vue.use(ToastPlugin);

Vue.use(VueRouter);
Vue.use(Vuex)




// Vue.use(vuexI18n.plugin, store)
const routes = [{
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
    path: '/vueData',
    component: vueData
},{
    path: '/input',
    component: input
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
}];


const router = new VueRouter({
    routes
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// 每个 Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例来启动的：
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box');

// 每个 Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例来启动的：
/*var data = { a: 1 }
 var vm = new Vue({
 el: '#example',
 data: data
 })
 每个 Vue 实例都会代理其 data 对象里所有的属性：
 // 设置属性也会影响到原始数据
 vm.a === data.a // -> true
 vm.a = 2   data.a // -> 2
 data.a = 3   vm.a // -> 3

 Vue 实例暴露了一些实例属性与方法。这些属性与方法都有前缀 $，以便与代理的 data 属性区分。
 vm.$data === data // -> true
 vm.$el === document.getElementById('example') // -> true
 // $watch 是一个实例方法
 vm.$watch('a', function (newVal, oldVal) {
 // 这个回调将在 `vm.a`  改变后调用
 })*/
