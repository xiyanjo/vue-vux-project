<template>
    <div class="children">
        <h2>children</h2>
        <template>
            <div>
                <!-- 引用类型重新赋值，防止影响父组件 -->
                <label for="">size----</label>
                <input type="text"  v-model='childSize'>
            </div> 
        </template>
        <!-- props 时 子组件中值改变后不会改变父组件的值 -->
        <template>
            <div>
                <label for="">使用父组件中数据，子组件可改变</label>
                <input type="text" :value="myMsg">
            </div>  
        </template>
        <template>
            <div>
                <span>子组件向父组件传递数据及事件</span>
                <button @click="up">发给父组件</button> 
            </div>
        </template>
    </div>
</template>

<script>

    export default {
        name: 'hello',
        data () {
            return {
                msg: '4444',
                total:[{aa:111},{
                    bb:2222
                }],

            }
        },
        props:['myMsg','name','todo'],
        computed: {
            // 使用computed重新赋值，不会影响父元素
            childSize:{
                get:function (){
                    return this.todo.size;
                },
                set:function (){}
            }
        },
        methods:{
            up() {
                console.log('emit total in children');
                // this.$emit('up',this.total); //主动触发upup方法，'hehe'为向父组件传递的数据
                this.$emit('up',this.todo); //主动触发upup方法，'hehe'为向父组件传递的数据
            }
        }


    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.children{
    padding-bottom: 30px;
}
</style>
