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

        <template>
            <button @click="toParent">跳转到组件</button>
        </template>

        <input type='date' v-model='inputData' @change='change'>
        <div>
            <router-link class="link" to="/form"> form</router-link>
        </div>

        <div>
            <router-link class="link" to="/layout"> layout</router-link>
        </div>

        <div>
            <router-link class="link" to="/jsInheritance"> jsInheritance</router-link>
        </div>

        <div>
            <router-link class="link" to="/vueData"> vueData</router-link>
            <router-link class="link" to="/vueEvent"> vueEvent</router-link>
        </div>

        <div>
            <router-link class="link" to="/Parent"> Parent</router-link>
            <router-link class="link" to="/Parent/Children"> Children</router-link>
            <router-link class="link" to="/props"> props</router-link>

        </div>
        <div>
            <router-link class="link" to="/pdfPrewer"> pdfPrewer</router-link>
            <router-link class="link" to="/huadong"> huadong</router-link>
        </div>
        <div>
            <router-link class="link" to="/boundaryTreatment"> boundaryTreatment边界处理</router-link>
        </div>
        <div>
            <router-link class="link" to="/reusable"> reusable可复用</router-link>
        </div>
        <div>
            <router-link class="link" to="/renderFun"> renderFun模版</router-link>
        </div>

        <div>
            <router-link class="link" to="/Auditing"> Auditing</router-link>
        </div>

        <div>
            <router-link class="link" to="/uploadImg"> uploadImg</router-link>
        </div>
        <div>
            <router-link class="link" to="/esVue"> esVue</router-link>
        </div>

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAQMAAADaX5RTAAAAA3NCSVQICAjb4U/gAAAABlBMVEX///+ZmZmOUEqyAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAACusAAArrAYKLDVoAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDkvMjAvMTIGkKG+AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAB1JREFUCJljONjA8LiBoZyBwY6BQQZMAtlAkYMNAF1fBs/zPvcnAAAAAElFTkSuQmCC"/>
        <template>
            <div>全局组件只注册一次即可在所有文件中使用</div>
            <my-component></my-component>
            <part-child></part-child>
        </template>

        <div>
            <h5>{{'全局自定义指令参数app.vue' | globFilter}}</h5>
            <!--v-color-swatch在bind 和update时触发-->
            <div v-glob-directive:foo.c.d="message" v-color-swatch="bgColor" @click="bgColor = 'gray'"></div>
        </div>

        <template>
            <div>
                <p :class="{ [$style.red]:true }">
                    CSS Modules
                </p>
                <p :class="[$style.red, $style.bold]">
                    Red and bold
                </p>
            </div>
        </template>


        <template>
            <div style="background: #ccc">
                <template>
                    <h3>{{'getters中---->' +count}}</h3>
                    <h3>{{$store.state.count+'<--$store | this.$store-->'+ storeCount
                        +'组件计算后值-->'+countPlusLocalState}}</h3>
                </template>
                <template>
                    <h3>{{'store中---->' +exampComputed}}</h3>
                    <div>
                        <button @click="add(2)">mutations.add 2</button>
                        <button @click="reduce(1)">mutations.reduce 1</button>
                    </div>

                    <div>
                        <button @click="addAction">addAction mutations.add 10</button>
                        <button @click="reduceActionHandle">reduceAction mutations.reduce</button>
                    </div>
                </template>

            </div>
        </template>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';//辅助函数帮助我们生成计算属性

    // 使用 Mock
    // var Mock = require('mockjs')
    // var data = Mock.mock({
    //     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    //     'list|1-10': [{
    //         // 属性 id 是一个自增数，起始值为 1，每次增 1
    //         'id|+1': 1
    //     }]
    // })
    var partChild = {
        template: '<div>我是局部组件，需要components引入</div>'
    }
    // 输出结果
    export default {
        name: 'home',
        data(){
            return {
                inputData: '',
                message: {aa: 'i am home'},
                bgColor: 'pink',
//                storeCount:this.$store.state.count,//直接在data中定义时，只有初始值，不会监听到变化
            }
        },
        computed: {
            /** 对象展开运算符----- 将此对象混入到外部对象中
             * 参数：数组/对象
             * 数组：当映射的计算属性的名称与 **相同时，我们也可以给 mapState 传一个字符串数组
             * 对象：state为参数
             */

            /**  mapState
             * 数组：...mapState(['count']) // 映射 this.count 为 store.state.count
             * 对象：如下
             */
//            store 在组件中使用
            ...mapState({
                storeCount: state=>state.count,  //理解为传入state对象，修改state.count属性
                exampComputed: state=>state.exampComputed,
                countPlusLocalState (state) {
                    return state.count + '对象展开运算符'
                }
            }),
            /** mapGetters
             * 每次count变化时都变化
             * 数组：...mapGetters(["count"]),同 // count(){return this.$store.getters.count;}
             */
//            store中getters在组件中使用
            ...mapGetters(["count"]),//map  getters同 // count(){return this.$store.getters.count;}
        },
        components: {
            partChild
        },
        mounted(){
            console.log('CSS Modules------', this.$style.red);//et6f0c2DdyEOjZNxUtAHT_0 基于文件名、类名的标识符
            this.setTimeoutCharacter();//settimeout 以及箭头函数this的影响

            let ua = navigator.userAgent.toLowerCase();
            let isWeixin = ua.indexOf('micromessenger') != -1;
            if (isWeixin)   this.returnClose();//微信返回按钮自动关闭网页
        },
        methods: {
            /*在vue中使用mutations中改变store的方法*/
            ...mapMutations([
                'add', 'reduce'
            ]),
            /*在vue中使用actions--调用mutations中的方法--改变状态--异步 ----- 组件中分发actions*/
            ...mapActions(['addAction', 'reduceAction']),
//            跳转到组件
            toParent(){

                const userId = '123';
                /**this.$router.push 参数
                 * this.$router.push({name: 'home', params: {id:userId,cord:'cord'}});// -> /home/123/cord
                 * 如果提供了 path，params 会被忽略   params 不生效
                 * 使用以下方法 ：this.$router.push({path: `/home/${userId}/cord`}); // -> /user/123
                 * query参数：可以一起添加
                 * repace方法：不会向history中添加新纪录，push方法：会添加新纪录
                 * router.go(1)// 在浏览器记录中前进一步，等同于 history.forward()
                 *  router.go(-1)// 后退一步记录，等同于 history.back()
                 */
                this.$router.push({
                    path: '/home/userid/cord',//如果提供了 path，params 会被忽略
                    params: {cord: 'cord', id: 'userid'},// 命名的路由 // 这里的 params 不生效
                    query: {plan: 'private'},// 带查询参数，变成 /register?plan=private
                });
            },
            /*处理actions异步*/
            reduceActionHandle(){
                /*//                一个异步
                 this.$store.dispatch('reduceAction').then(res => {
                 console.log(res);
                 })*/
//                两个异步，两种处理
                this.$store.dispatch('actionB').then(() => {
                    console.log('actionB over');
                })
            },
            /* rest参数 ??? */
            push(array, b, ...items){
                // arguments变量的写法
                /*function sortNumbers() {
                 return Array.prototype.slice.call(arguments).sort();
                 }*/
                items.forEach(function (item) {
                    array.push(item);
                    b.push(item + 1);
                });
            },
            /* rest参数 */
            sort2(...numbers){
                // numbers.sort();
                console.log(numbers.sort());
            },
            change(){
                console.log(this.inputData)
            },
            /*微信自动返回*/
            returnClose(){
                // pushHistory();  
                var bool = false;
                setTimeout(function () {
                    bool = true;
                }, 1500);
                window.addEventListener("popstate", function (e) {
                    if (bool) {
                        WeixinJSBridge.call('closeWindow');//本人是直接关闭微信页面;项目需要
                    }
                    // pushHistory();     
                }, false);

            },

            /**
             * vue-router 学习
             * 路由优先级--先定义优先级高
             * /user/foo 导航到 /user/bar --- 组件不刷新
             * this.$router---路由器,this.$route----当前路由
             */
            routeHandle(){
                console.log(this.$route.params.id);//获取路由参数
            },
            /*settimeout 以及箭头函数this的影响*/
            setTimeoutCharacter(){
                function Timer() {
                    this.s1 = 0;
                    this.s2 = 0;
                    // 箭头函数
                    /*setInterval(() => {
                     this.s1++
                     console.log('s1',this);
                     }, 1000);
                     // 普通函数
                     setInterval(function () {
                     console.log('s2',this);
                     this.s2++;
                     }, 1000);*/
                    // 箭头函数----绑定在定义所在的作用域内
                    setTimeout(() => {
                        this.s1++
                        console.log('s1', this);//timer
                    }, 1000);
                    // 普通函数----指向运行时所在的作用域
                    setTimeout(function () {
                        console.log('s2', this);//window
                        this.s2++;//window下没有s2
                    }, 1000);
                    // console.log(9999)
                };
                var timer = new Timer();
                // 初始值都为0
                console.log('s1: ', timer.s1, 's2: ', timer.s2);//0 //0
                setTimeout(() => console.log('s1: ', timer.s1), 3100);//3
                setTimeout(() => console.log('s2: ', timer.s2), 3100);//0
            },
            /*push函数参数学习*/
            pushParam(){
                let [a,b]=[[], []];
                this.sort2(1, 3, 4, 2, 7);
                // this.push(a,b,[ 4, 5, 6]);//将每个参数看为一位
                this.push(a, b, 1, 2, 3);//将每个参数看为一位
            },
        }
    }
</script>

<style module>
    .red {
        color: red;
    }

    .bold {
        font-weight: bold;
    }

</style>

<style lang="less">
    .link {
        line-height: 24px;
        background: pink;
        padding: 0 5px;
        margin: 4px 0;
        display: inline-block;
    }

    a.link {
        display: inline-block;
    }
</style>
