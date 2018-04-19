<template>
    <div class="hello">
        <!--<h1>{{ msg }}</h1>-->
        <!-- <input type="text" v-model="myMsg"> -->
        <!-- <input type="text" v-model="name"> -->
        <!--需要转换为aa-bb-->
        <!-- <Children :my-msg.sync="myMsg" :name="name" :size='size' @up="change"></Children> -->


        <!-- 只传一个数组 -->
        <Children :todo="todo" @up="change"></Children>
        <!-- <div>{{todo.size}}</div> -->
        <!-- <child :foo.sync="bar"></child> -->
        <child :bar="bar"></child>

        <my-component></my-component>    

    </div>
</template>

<script>
    import Children from '@/components/Children.vue'
    import child from '@/components/child.vue'
    import Vue from 'vue';
    export default {
        name: 'hello',
        data () {
            return {
                msg: '6666',
                myMsg:'第一个',
                name:'xiyanjo',
                childData:'',
                size:'size',
                todo: {
                  name: 'Learn Vue',
                  size: 'FALSE',
                  myMsg:'第二个'

                },
                bar:'child1---66666'
            }
        },
        components:{Children,child},
        created(){
        },
        methods:{
            change(data) {
                this.childData = data;
                console.log(6666,this.childData);
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
