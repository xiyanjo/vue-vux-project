<template>
    <input-checked 
        :add="add"  @saveEve="clickEve"></input-checked>       
</template>
<script>
    import {Group, Checklist, Cell, Divider, XButton} from 'vux'
    import inputChecked from '@/components/inputChecked.vue'
    export default{
        data(){
            return {
                enIns:'',
                add:[{
                    source:'source',
                    other:'other'
                },{
                    source:'source',
                    other:'other'
                }]
            }
        },
        components: {inputChecked},
        computed:{
            enTotal:{
                get:function() {
                    console.log(6666);
                    return this.enIns;
                }
            }
        },
        methods: {
            clickEve(des){
                console.log('我是子组件事件传递过来的',des);
            }
        }
    }
</script>
<style>
    
</style>
