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

        <input type='date'  v-model='inputData' @change='change'>
        <div>
            <router-link class="link" to="/inputList"> inputList</router-link>
            <router-link class="link" to="/input"> input</router-link>
            <router-link class="link" to="/select"> select</router-link>
            <router-link class="link" to="/seletMult"> seletMult</router-link>
            <router-link class="link" to="/vueForm"> vueForm</router-link>
            <router-link class="link" to="/vuxForm"> vuxForm</router-link>
        </div>
        
        <div>
            <router-link class="link" to="/vueData"> vueData</router-link>
            <router-link class="link" to="/vueEvent"> vueEvent</router-link>
        </div>

        <div>
            <router-link class="link" to="/Parent"> Parent</router-link>
            <router-link class="link" to="/Children"> Children</router-link>
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




        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAQMAAADaX5RTAAAAA3NCSVQICAjb4U/gAAAABlBMVEX///+ZmZmOUEqyAAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAACusAAArrAYKLDVoAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDkvMjAvMTIGkKG+AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAB1JREFUCJljONjA8LiBoZyBwY6BQQZMAtlAkYMNAF1fBs/zPvcnAAAAAElFTkSuQmCC" />
        <template>
            <div>全局组件只注册一次即可在所有文件中使用</div>
            <my-component></my-component>  
            <part-child></part-child>  
        </template>


        <div>
            <h5>全局自定义指令参数app.vue </h5>
            <div v-demo:foo.c.d="message"></div>
        </div>
    </div>
</template>

<script>
    // import Confirm from '@/components/Confirm';
    // import calendar from '@/components/calendar';
    // 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
var partChild = {
  template: '<div>我是局部组件，需要components引入</div>'
}
// 输出结果
//console.log(JSON.stringify(data, null, 4))
    export default {
        name:'home',
        data(){
            return {
                inputData:'',
            }
        },
        components:{
            // Confirm,calendar,
             partChild
        },
        mounted(){
           /* let [a,b]=[[],[]];
            this.sort2(1,3,4,2,7);
            // this.push(a,b,[ 4, 5, 6]);//将每个参数看为一位
            this.push(a,b,1, 2, 3);//将每个参数看为一位*/

            
            // 箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域
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
                    console.log('s1',this);//timer
                }, 1000);
                // 普通函数----指向运行时所在的作用域
                setTimeout(function () {
                    console.log('s2',this);//window
                    this.s2++;//window下没有s2
                }, 1000);
                // console.log(9999)
            };
            var timer = new Timer();
            // 初始值都为0
            console.log('s1: ', timer.s1);//0
            console.log('s2: ', timer.s2);//0
            setTimeout(() => console.log('s1: ', timer.s1), 3100);//3
            setTimeout(() => console.log('s2: ', timer.s2), 3100);//0

            this.returnClose();
        },
        methods:{
            push(array,b,...items){
                // arguments变量的写法
                /*function sortNumbers() {
                  return Array.prototype.slice.call(arguments).sort();
                }*/
                items.forEach(function(item) {
                  array.push(item);
                  b.push(item+1);
                });
            },
            // rest参数
            sort2(...numbers){
                // numbers.sort();
                console.log(numbers.sort());
            },
            change(){
                console.log(this.inputData)
            },
            returnClose(){
                // pushHistory();  
                var bool=false;  
                setTimeout(function(){  
                      bool=true;  
                },1500);  
                window.addEventListener("popstate", function(e) {  
                  if(bool){  
                        WeixinJSBridge.call('closeWindow');//本人是直接关闭微信页面;项目需要
                    }  
                    // pushHistory();     
                }, false);  
     
            }
            
        }
    }
</script>

<style lang="less">
.link{
    line-height: 24px;
    background: pink;
    padding: 0 5px;
    margin: 4px 0;
    display:inline-block;
}
a.link{
    display:inline-block;
}
</style>
