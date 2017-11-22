<template>
    <div class="hello">
        <p >我是父组件中传递的myMsg ： {{myMsg}}</p>

        <div>
             <!-- props 时 子组件中值改变后不会改变父组件的值 -->
             <label for="">父组件中传递  子组件可改变的值</label>
            <input type="text" :value="myMsg">
        </div>
        <ul>
            <li>{{name}}</li>
            <li>
                <input type="text" v-model='size'>
            </li>
            <button @click="up">发给父组件</button>
        </ul>
        <div>
            {{normalizedSize}}
        </div>
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
        props:['size','myMsg','name','todo'],
        computed: {
            normalizedSize: function () {
                 console.log(8888)
                return this.size.trim().toLowerCase()
            }
        },
        methods:{
            up() {
                console.log(666);
                this.$emit('up',this.total); //主动触发upup方法，'hehe'为向父组件传递的数据
            }
        }


    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
