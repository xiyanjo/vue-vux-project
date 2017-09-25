<template>
    <div>
        <div style="padding:15px;" v-for="item in data">
            {{item}}
            <check-icon :value.sync="aa">Do you agree? ({{ item }})</check-icon>
            <br>
            <br>
            <!-- <div :class="item" @click="change(item)">
                 <input type="text" v-model="settings.item" :value="item">
             </div>-->

            <!--<check-icon :value.sync="demo2" type="plain">Do you agree?({{ demo2 }})</check-icon>-->
        </div>
        <table id="app">
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
        <div>
            <input type="text" :value="total">
            <input type="text" :value="scale">
        </div>
        <button @click="ajax()">提交</button>
    </div>
</template>

<script>
    import {CheckIcon} from 'vux'

    export default {
        components: {
            CheckIcon
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
                cc: true
            }
        },
        methods: {
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
            console.log('mounted', this.settings.runs);
        },
        created(){
            console.log('created', this.settings.runs);
        }
    }
</script>
<style>
    input {
        width: 40px;
        height: 30px;
        border: 1px solid #ccc;
    }
</style>