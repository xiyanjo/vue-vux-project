<template>
    <div class="parent">
        <!-- 只传一个数组 -->
        <Children :todo="todo" @up="change" :myMsg="myMsg"></Children>
        <!-- <child :foo.sync="bar"></child> -->
        <child @input="inputChild"></child>

        <my-component></my-component>    

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
                // console.log('listen child')
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
