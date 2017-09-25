<template>
    <div class="hello">
        <h1>hahahha</h1>
        <!--<h1>{{ msg }}</h1>-->
        <input type="text" v-model="myMsg">
        <input type="text" v-model="name">
        <!--需要转换为aa-bb-->
        <Children :my-msg.sync="myMsg" :name="name" @up="change"></Children>

    </div>
</template>

<script>
    import Children from '@/components/Children.vue'
    export default {
        name: 'hello',
        data () {
            return {
                msg: '6666',
                myMsg:'',
                name:'xiyanjo',
                childData:'',
            }
        },
        components:{Children},
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
