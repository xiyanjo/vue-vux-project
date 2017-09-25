<template>
    <div class="hello">
        <p >我是{{myMsg}}</p>
        <ul>
            <!--props 时子组件中值改变后不会改变父组件的值-->
            <input type="text" :value="myMsg">
            <li>{{name}}</li>
            <li>{{ }}</li>
            <li @click="up">发给父组件</li>
        </ul>
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
        props:['size','myMsg','name'],
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
