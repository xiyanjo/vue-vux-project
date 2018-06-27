// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'
import {MyPlugin} from '@/assets/js/myPlugin.js'
import Vuex from 'vuex'
import {AlertPlugin, ToastPlugin} from 'vux'

Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(MyPlugin);
// Vue.use(vuexI18n.plugin, store)

// 全局注册基础组件时使用
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'


// 注册单个全局组件
Vue.component('my-component', {
  template: '<div>我是全局组件，在main.js中注册</div>'
})



// 全局注册基础组件时  webpack 3以上的版本才会生效
const requireComponent = require.context(
  // components 文件夹的相对路径
  './components',
  // 是否查找子文件夹
  false,
  // 用于匹配组件文件名的正则表达式
  /Base[A-Z]\w+\.(vue|js)$/
)
console.log('requireComponent',requireComponent)
requireComponent.keys().forEach(fileName => {
    console.log('fileName',fileName)
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 取得组件的 Pascal 式命名
  const componentName = upperFirst(
    camelCase(
      // 将文件名前面的 `'./` 和扩展名剥离
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // 以全局方式注册组件
  Vue.component(
    componentName,
    // 如果组件是通过 `export default` 导出，
    // 则在 `.default` 中，查找组件选项，
    // 否则回退至模块根对象中，查找组件选项
    componentConfig.default || componentConfig
  )
})


/*const routes = [{
    path: '/',
    component: Home
}];*/


/*const router = new VueRouter({
    routes
});*/

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
