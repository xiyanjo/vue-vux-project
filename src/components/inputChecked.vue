<template>
    <div>
        <group>
            <x-textarea> </x-textarea>
            <div v-for="(items,index) in list">
                <div class="inputBox" v-for="(item,key,ind) in items">
                    <label for="" v-if="ind==0">{{item}}</label>
                    <input type="tel" placeholder="6666" 
                        v-if="index==0 && ind!=0"
                        v-model="list[index][key]"
                        @textInput="preventNaN"
                        @focus="inputFocus(index,key)"
                        @blur="inputBlur"

                    >
                    <input type="tel" placeholder="6666" 
                        v-if="index==1 && ind!=0"
                        v-model="list[index][key]"
                        @textInput="preventNaN"
                        @focus="inputFocus(index,key)"
                        @blur="inputBlur"
                    >
                </div>
            </div>
            <div>
                <x-button @click.native="save">保存</x-button>    
            </div>
        </group>
 
    </div>
</template>
<script>
    import {Group, Checklist, Cell, Divider, XButton,XTextarea} from 'vux'
    export default{
        components: {Group, Checklist, Cell, Divider, XButton,XTextarea},
        data(){
            return {
                enIns:'',
                list: [{
                    val: '小可爱',
                    cla: ''
                }, {
                    val: '龅牙',
                    cla: ''
                }],
                des:'7777777'
            }
        },
        props:['add'],
        computed:{
            enTotal:{
                get:function() {
                    return this.enIns;
                }
            }
        },
        methods: {
            preventNaN(e){
                if(e.data.match(/[^\d]/g)) e.preventDefault();
            },
            inputFocus(index,key){
                this.$set(this.list[index],key,'');
            },
            inputBlur(e){
                let _this = this;
               let oldNum = e.target.value;
               e.target.value = oldNum.replace(/\b(0+)/g,'');
               this.list.forEach(function (item,index){
                    if(item.cla==0 && item.cla.length==1) return false;
                    let newNum = item.cla.replace(/\b(0+)/g,'');
                    _this.$set(_this.list[index],'cla',newNum);
               })
            },
            save(){
                this.des='999999';
                // this.add = '333333'//不能在子组件里改变父组件的数据
                this.$emit('saveEve',this.des);
            }
        }
    }
</script>
<style scope>

</style>
