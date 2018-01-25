<template>
    <div>
        <div style="padding:15px;" v-if=false 
            v-for="item in data">
            {{item}}
            <check-icon :value.sync="aa">Do you agree? ({{ item }})</check-icon>
            <br>
            <br>
            <!-- <div :class="item" @click="change(item)">
                 <input type="text" v-model="settings.item" :value="item">
             </div>-->

            <!--<check-icon :value.sync="demo2" type="plain">Do you agree?({{ demo2 }})</check-icon>-->
        </div>
        <table v-if=false id="app">
            <tr v-for="(run, index) in settings.runs">

                <td>
                    <input type="text" :class="'run'+index" v-model="settings.runs[index]" @input="inpNum(index)"/>
                </td>

                <td>
                    <button>X</button>
                </td>

                <td>
                    <input type="text" :value="run">
                </td>
            </tr>
        </table>

        <div v-if=false>
            我是总计
            <input type="text" :value="total">
            我是百分比
            <input type="text" :value="scale">
        </div>
        <button v-if=false @click="ajax()" >提交</button>


        <template v-if=false 
            v-for="(item,index) in list" >
            <div v-for="(val,key,ind) in item">
                <label for="input" v-if="ind==0">{{val}}</label>
                <input type="text" 
                    v-if="ind==1"
                    v-model="list[index][key]"
                    @textIput="preventNaN"
                    @focus ="inputFocus"
                    @blur = "inputBlur"
                >
            </div>
        </template>


        <template v-if=false>
                autocomplete 属性规定输入字段是否应该启用自动完成功能。适用于：form以及 input
            <form action="demo_form.asp" method="get" autocomplete="on">
                First name:<input type="text" name="fname" /><br />
                Last name: <input type="text" name="lname" autocomplete="off"/><br />
                E-mail: <input type="email" name="email" autocomplete="on" /><br />
                <input type="submit" />
            </form>
        </template>

        <template v-if=false>
            <table border="1">
                <tr>
                  <!-- <th>一月 <dialog close>关闭对话窗口</dialog></th> -->
                    <th>一月 
                        <dialog open style="width:200px;height:100px">
                            对话窗口
                            <input type="text" placeholder="请输入" style="width:150px;height:30px">
                        </dialog>
                    </th>
                    <th>二月</th>
                    <th>三月</th>
                </tr>
                <tr>
                  <td>31</td>
                  <td>28</td>
                  <td>31</td>
                </tr>
            </table>
        </template>
        <template v-if=false>
             <grid >
                  <grid-item :label="1" >
                    
                  </grid-item>
                  <grid-item :label="2">
                  
                  </grid-item>
                  <grid-item >
                
                    <span slot="label">{{'3'}}</span>
                  </grid-item>
            </grid>
        </template>

        <!-- 调用微信摄像头或照片 -->
        <template v-if=false>
            <input type="file" style="/* visibility: hidden */" capture="camera" accept="image/*,video/*" name="" value="" >
        </template>

    </div>
</template>

<script>
    import {CheckIcon, Grid, GridItem, GroupTitle} from 'vux'
    import util from '@/assets/js/util'

    export default {
        components: {
            CheckIcon,Grid,GridItem,GroupTitle
        },
        data () {
            return {
                settings: {
                    runs: ['', '', '']
//                    runs:{
//                        a1:'',
//                        a2:'',
//                        a3:'',
//                    }
                },
                data: ['aa', 'bb', 'cc'],
                aa: false,
                bb: true,
                cc: true,
                list:[{title:'一',day:''},{title:'二',day:''},{title:'三',day:''}]
            }
        },
        methods: {
            preventNaN(){
                if(e.data.match(/[^\d]/g)) e.preventDefault();
            },
            inputFocus(){

            },
            inputBlur(){

            },
            change(val){
                console.log(val);
            },
            inpNum(input){
//                console.log('input',this.settings.runs);
                console.log('9999', input, this.settings.runs);
                this.settings.runs[input] = this.settings.runs[input].replace(/[^\d]/g, '');
            },
            ajax(){
                console.log('ajax', this.settings.runs);
            }
        },
        computed: {
            total: {
                get: function () {
                    if (this.settings.runs[0] || this.settings.runs[1] || this.settings.runs[2]) {
                        return (this.settings.runs[0]*1000 + this.settings.runs[1]*1000 + this.settings.runs[2]*1000)/1000;
                    }
                },
                set: function () {

                }
            },
            scale: {
                get: function () {
                    if(this.settings.runs[0]){
                        return this.settings.runs[0]/this.total;
                    }
                },
                set:function () {

                }
            }
        },
        mounted(){
            let arr1 = [1,2,3];
            // let arr2 = [1,2,3];
            let arr2 = [1,3,2];
            console.log(44444,util.arrayEqual(arr1,arr2));            
        },
        created(){}
    }
</script>
<style>
    input {
        width: 40px;
        height: 30px;
        border: 1px solid #ccc;
    }
</style>