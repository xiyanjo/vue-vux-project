<template>
    <div>
        <template>

            <h3>依赖注入：非响应式</h3>
            <!-- <div>{{title}}</div> -->
            <inject >aaa</inject>
        </template>
       <!--  <template>
            <h3>程序化的事件侦听器 $on $once $off</h3>
        </template>
        <template>
            <h3>循环引用</h3>
            <div>
                <ul>
                    组件通过name调用
                    <li>1 递归调用组件--需要有条件的</li>
                    <li>2 组件间循环调用--1）等到生命周期钩子 beforeCreate 时去注册它
                                          2）在本地注册组件的时候，你可以使用 webpack 的异步 import</li>
                </ul>
                

            </div>
        </template> -->
    </div>
</template>
<script>
    import {Group, Checklist, Cell, Divider, XButton} from 'vux'
    export default{
        data(){
            return {
              title:'父中title（父组件provide中设置提供给子组件的方法，子--inject接受***' 
            }
        },
        components: {},
        computed:{
           
        },
        methods: {
            getMap(val){
                console.log('我是父组件中方法',this.title);
                this.title += val;
            }
        },
        provide: function () {
            return {
              getMap: this.getMap
            }
        }
    }
</script>
