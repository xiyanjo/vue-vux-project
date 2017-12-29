<template>
    <div>
        <input-checked 
        :add="add"  @saveEve="clickEve"></input-checked>   
        <button @click="change">发送给hello</button>



        <!-- <vux-cells></vux-cells> -->
    </div>
        
</template>
<script>
    import {Group, Checklist, Cell, Divider, XButton, CellBox, CellFormPreview, Badge } from 'vux'
    import inputChecked from '@/components/inputChecked.vue'
    import vuxCells from '@/components/cells.vue'
    import vm from 'Vue'
    var bus = new vm();
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
        components: {Group, Checklist, Cell, Divider, XButton,Cell, CellBox, CellFormPreview, Group, Badge,
            inputChecked,vuxCells},
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
            },
                // 触发组件 A 中的事件
            change(){
                 console.log(bus,99999)
                bus.$emit('id-selected', 1);
            }
        }
    }
</script>
<style>
    
</style>
