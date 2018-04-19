<template>
    <div class="parent">

        <template >
            <div>以下为父组件原来数据</div>
            <div>{{todo}}</div>
        </template>

        <template>
            <div style="margin-top:30px">以下为组件内容</div>
            <!-- 只传一个数组 -->
            <div style="margin-top:30px">子组件改变引用类型数据 影响父组件中数据</div>
            <Children :todo="todo" @up="change" :myMsg="myMsg"></Children>

            <template>
                <div>以下为.sync  子组件中数据影响父组件中数据</div>
                <child @input="inputChild" :myMsg.sync="myMsg"></child>
                <div>{{myMsg}}</div>
            </template>
            

            <my-component></my-component>  
        </template>
          

    </div>
</template>

<script>
    import Children from '@/components/Children.vue'
    import child from '@/components/child.vue'
    import Vue from 'vue';
    // 注册全局组件
    Vue.component('my-component', {
      template: '<div>我是全局组件</div>'
    })
    export default {
        name: 'hello',
        data () {
            return {
                msg: '6666',
                myMsg:'P-msg',
                name:'xiyanjo',
                childData:'',
                size:'size',
                todo: {
                  name: 'Learn Vue',
                  size: 'Todo.size',
                  myMsg:'第二个'

                },
                bar:'  p-bar'
            }
        },
        components:{Children,child},
        created(){
        },
        methods:{
            // 监听children事件
            change(data) {
                this.childData = data;
                console.log('listen children event and get data',this.childData);
            },
            // 监听child事件
            inputChild(){
                console.log('listen child',this.myMsg);
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
