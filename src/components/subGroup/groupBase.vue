<template>
    <div class="form">
       
    </div>
</template>

<script>
    import Children from '@/components/Children.vue'
    import jquery from '@/assets/js/jquery-3.2.1.min.js'
    export default {
        name: 'hello',
        data () {
            return {
               
            }
        },
        mounted(){
            console.log('mounted', this.checkedNames);
        },
        created(){
            console.log('created', this.checkedNames);
        },
//        watch监听数组变化
        watch: {
        },
        components: {Children},
        computed: {},
        methods: {
            
        },
//        过滤器
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
