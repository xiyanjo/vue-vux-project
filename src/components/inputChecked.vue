<template>
    <div>
        <template>
            关于多选，vue原生用法
        </template>
        <template v-if="false">
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
        </template>

        <template v-if="false">
            <div id="example-5">
                  <select v-model="selected1">
                    <option disabled value="">请选择</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                  <span>Selected1: {{ selected1 }}</span>
            </div>
            <div id="example-6">
              <select v-model="selected2" multiple style="width: 50px;">
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
              <br>
              <span>Selected2: {{ selected2 }}</span>
            </div>

            <select v-model="selected3">
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
            <span>Selected3: {{ selected3 }}</span>
        </template>


        <template>
            <template v-if="false">
                 <input style="display:block" type="checkbox" 
                    v-model="toggle" value="jack"  >
                <span>{{toggle}}</span>
            </template>
            <!-- <div id='example-3'>
              <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
              <label for="jack">Jack</label>
              <input type="checkbox" id="john" value="John" v-model="checkedNames">
              <label for="john">John</label>
              <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
              <label for="mike">Mike</label>
              <br>
              <span>Checked names: {{ checkedNames }}</span>
            </div> -->


           <template v-if="false">
                <select v-model="selected">
                <!-- 内联对象字面量 -->
                  <option :value="{ number: 345 }">123</option>
                </select>
                <span>{{selected}}</span>
           </template>
        </template>

        <template>
            <span>修饰符number--转为数字类型，.trim--首尾空格</span>
            <input type="number" v-model.number='num' placeholder="请输入数字">
        </template>
 
    </div>
</template>
<script>
    import {Group, Checklist, Cell, Divider, XButton,XTextarea} from 'vux'
    import vm from 'vue';
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
                des:'7777777',
                selected1:'',
                selected2:[],
                selected3:[],
                options: [
                  { text: 'One', value: 'A' },
                  { text: 'Two', value: 'B' },
                  { text: 'Three', value: 'C' }
                ],
                toggle:'',//当绑定的值为数组---值为选中项，绑定值为基本类型---值为布尔值
                checkedNames: [],
                selected:[],
                num:'',
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
        },
        created(){
            // 当选中时
            // vm.toggle === 'yes'
            // 当没有选中时
            // vm.toggle === 'no'
        }
    }

</script>
<style scope>

</style>
