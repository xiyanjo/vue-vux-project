import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('@/components/Home')
// 表单
const form=()=>import('@/components/form/form.vue')
const select=()=>import('@/components/form/select.vue')
const input=()=>import('@/components/form/input.vue')
const seletMult=()=>import('@/components/form/seletMult.vue')
const inputList=()=>import('@/components/form/inputList.vue')

const vueData=()=>import('@/components/vueData.vue')
const vueEvent=()=>import('@/components/vueEvent.vue')
const vueForm=()=>import('@/components/vueForm.vue')
const vuxForm=()=>import('@/components/vuxForm.vue')
const Auditing=()=>import('@/components/Auditing')

const uploadImg=()=>import('@/components/uploadImg')

// 父子组(件
const Parent=()=>import('@/components/faChildren/Parent.vue')

// 动态组(件
const isFeatures=()=>import('@/components/dynamicComponent/isFeatures.vue')
// 边界情(况
const boundaryTreatment=()=>import('@/components/boundaryTreatment.vue')

// 可复用(性及组合
const reusable=()=>import('@/components/reusable.vue')

// render函数模版
const renderFun =()=>import('@/components/renderJSX/renderFun.vue')

const props =()=>import('@/view/props.vue')
const pdfPrewer =()=>import('@/components/pdfPrewer.vue')
const huadong =()=>import('@/components/handle/huadong.vue')


Vue.use(VueRouter)

const router = new VueRouter({
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
            // 路由独享守卫
            beforeEnter: (to, from, next) => {
                console.log('form---beforeEnter');
                next();
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
        }],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
    console.log('beforeEach---全局路由守卫');
    next();//必填，进入下一个管道
})
// 全局解析守卫
router.beforeResolve((to, from, next) => {
    console.log('beforeResolve---全局解析守卫');
    next();
})
// 全局后置钩子
router.afterEach((to, from) => {
    console.log('afterEach---全局后置钩子');
})
export default router;