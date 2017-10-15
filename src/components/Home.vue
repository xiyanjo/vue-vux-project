<template>
    <div id="Home">
        <!--Vue.js 路由允许我们通过不同的 URL 访问不同的内容。
        通过 Vue.js 可以实现多视图的单页Web应用（single page web application，SPA）。
        Vue.js 路由需要载入 vue-router 库-->
        代码内有vue-router 相关简单配置信息
<!--
        // 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

        // 1. 定义（路由）组件。
        // 可以从其他文件 import 进来
        const Foo = { template: '<div>foo</div>' }
        const Bar = { template: '<div>bar</div>' }

        // 2. 定义路由
        // 每个路由应该映射一个组件。 其中"component" 可以是
        // 通过 Vue.extend() 创建的组件构造器，
        // 或者，只是一个组件配置对象。
        // 我们晚点再讨论嵌套路由。
        const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
        ]

        // 3. 创建 router 实例，然后传 `routes` 配置
        // 你还可以传别的配置参数, 不过先这么简单着吧。
        const router = new VueRouter({
        routes // （缩写）相当于 routes: routes
        })

        // 4. 创建和挂载根实例。
        // 记得要通过 router 配置参数注入路由，
        // 从而让整个应用都有路由功能
        const app = new Vue({
        router
        }).$mount('#app')

        // 现在，应用已经启动了！-->
        <router-link class="link" to="/confirm"> confirm</router-link>
        <router-link class="link" to="/HelloFromVux"> HelloFromVux</router-link>
        <router-link class="link" to="/Auditing"> Auditing</router-link>
        <router-link class="link" to="/toast"> toast</router-link>
        <router-link class="link" to="/actionsheet"> actionsheet</router-link>
        <router-link class="link" to="/alert"> alert</router-link>
        <router-link class="link" to="/checkList"> checkList</router-link>
        <router-link class="link" to="/checkIcon"> checkIcon</router-link>
        <router-link class="link" to="/Parent"> Parent</router-link>
        <router-link class="link" to="/vueData"> vueData</router-link>
        <router-link class="link" to="/input"> input</router-link>
        <router-link class="link" to="/vueEvent"> vueEvent</router-link>
        <router-link class="link" to="/vueForm"> vueForm</router-link>
        <router-link class="link" to="/vuxForm"> vuxForm</router-link>
        <router-link class="link" to="/xdailog"> xdailog</router-link>
    </div>
</template>

<script>
    import Confirm from '@/components/Confirm';

    export default {
        name:'home',
        data(){
            return {

            }
        },
        components:{
            Confirm,
        }
    }
</script>

<style lang="less">
.link{
    line-height: 24px;
    background: pink;
    padding: 0 5px;
    margin: 4px 0;
    display: block;
}
</style>
