<template>
    <div class="children">
        <h2>children</h2>
        <template>
            <div>
                <input type="text" v-model='todo.size'>
            </div> 
        </template>
        <!-- props 时 子组件中值改变后不会改变父组件的值 -->
        <template>
            <div>
                <label for="">使用父组件中数据，子组件可改变</label>
                <input type="text" :value="myMsg">
                <span>{{normalizedSize}}</span>
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
                }]

            }
        },
        props:['myMsg','name','todo'],
        computed: {
            normalizedSize: function () {
                 console.log('formate data')
                return this.todo.size.trim().toLowerCase()
            }
        },
        methods:{
            up() {
                console.log('emit total in children');
                this.$emit('up',this.total); //主动触发upup方法，'hehe'为向父组件传递的数据
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
