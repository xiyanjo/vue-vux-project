import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'


// 表单
import form from '@/components/form/form.vue'
import select from '@/components/form/select.vue'
import Input from '@/components/form/input.vue'
import seletMult from '@/components/form/seletMult.vue'
import inputList from '@/components/form/inputList.vue'

import vueData from '@/components/vueData.vue'
import vueEvent from '@/components/vueEvent.vue'
import vueForm from '@/components/vueForm.vue'
import vuxForm from '@/components/vuxForm.vue'
import Auditing from '@/components/Auditing'

import uploadImg from '@/components/uploadImg'

// 父子组件
import Parent from '@/components/faChildren/Parent.vue'
import Children from '@/components/faChildren/Children.vue'
import child from '@/components/faChildren/child.vue'


// 动态组件
import isFeatures from '@/components/dynamicComponent/isFeatures.vue'
// 边界情况
import boundaryTreatment from '@/components/boundaryTreatment.vue'

// 可复用性及组合
import reusable from '@/components/reusable.vue'

// render函数模版
import renderFun from '@/components/renderJSX/renderFun.vue'

import props from '@/view/props.vue'
import pdfPrewer from '@/components/pdfPrewer.vue'
import huadong from '@/components/handle/huadong.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {// 先定义先生效，匹配 /home/id/cord
                    path: '/home/:id/:cord',
                    name: 'home',
                    component: Home
                },
            ]
        },
        {
            path: '/form',
            name: 'form',
            component: form,
            children: [
                { // 匹配 /form/input
                    // path: '/input',//  '/'为根路径---'/input'访问此组件
                    path: 'input',
                    name: 'input',
                    component: Input
                }, {
                    path: 'inputList',
                    component: inputList
                }, {
                    path: 'select',
                    component: select
                }, {
                    path: 'seletMult',
                    component: seletMult
                }, {
                    path: 'vueForm',
                    component: vueForm
                }, {
                    path: 'vuxForm',
                    component: vuxForm
                }
            ]
        },
        {
            path: '/Auditing',
            component: Auditing
        }, {
            path: '/uploadImg',
            component: uploadImg
        }, {
            path: '/Parent',
            component: Parent,
        }, {
            path: '/vueData',
            component: vueData
        }, {
            path: '/vueEvent',
            component: vueEvent
        }, {
            path: '/props',
            component: props
        }, {
            path: '/pdfPrewer',
            component: pdfPrewer
        }, {
            path: '/huadong',
            component: huadong
        }, {
            path: '/isFeatures',
            component: isFeatures
        }, {
            path: '/boundaryTreatment',
            component: boundaryTreatment
        }, {
            path: '/reusable',
            component: reusable
        }, {
            path: '/renderFun',
            component: renderFun
        }]
})
