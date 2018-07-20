import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'


// 表单
import form from '@/components/form/form.vue'
import select from '@/components/form/select.vue'
import input from '@/components/form/input.vue'
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
            redirect: '/home',//路由重定向   // redirect with params redirect: '/with-params/:id'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {// 先定义先生效，匹配 /home/id/cord
                    path: '/home/:id/:cord',
                    name: 'home',
                    component: Home,
                },
            ]
        },
        // dynamic redirect, note that the target route `to` is available for the redirect function
        { path: '/dynamic-redirect/:id',
            redirect: to => {   //动态路由重定向
                const { hash, params, query } = to;
                /** to整体对象
                 * hash---锚点
                 * params----路径参数---obj
                 * query-----?后参数---obj
                 */
                if (query.to === 'form') {
                    return { path: '/form', query: null }
                }
                if (hash === '#input') {
                    return { name: 'input', hash: '#input' }
                }
                if (params.id) {
                    return '/form/select'
                } else {
                    return '/home'
                }
            }
        },
        {
            path: '/form',
            name: 'form',
            components: {//命名视图--------------------？？？？？？？不生效？？？？？？？？？
                default: form,
                a: select,
                b: seletMult
            },
            // 路由组件传参
            // props: { a: true, b: false },//包含命名视图的路由---每个命名视图添加 `props` 选项：
            alias: '/b',//别名---将 UI 结构映射到任意的 URL
            // menuShow: true,
            children: [
                { // 匹配 /form/input
                    // path: '/input',//  '/'为根路径---'/input'访问此组件
                    path: 'input',
                    name: 'input',
                    component: input
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
                }, {
                    path: '*',//任意路径在加载form,先定义优先级高
                    component: form
                },
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
