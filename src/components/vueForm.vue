<template>
    <div class="form">
        后缀
        <div>
            <!-- 在 "change" 输入框值改变时才会绑定到data中的msg -->
            <!--trim  过滤用户输入的首尾空格-->
            <input v-model.lazy.trim="msg" >{{msg}}
            <!-- "input" 事件中更新-->
            <!--<input v-model="msg" >{{msg}}-->

            <input v-model.number="age" >{{age}}
            <!--在 type="number" 时 HTML 中输入的值也总是会返回字符串类型。-->
            <input v-model.number="age" type="number">

        </div>
        文本输入框
       <div>
           <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
           <p style="white-space: pre">{{ message2 }}</p>
       </div>

        <div>
            <p>单个复选框：</p>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>

            <!--<p>多个复选框：</p>
            <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
            <label for="runoob">Runoob</label>
            <input type="checkbox" id="google" value="Google" v-model="checkedNames">
            <label for="google">Google</label>
            <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
            <label for="taobao">taobao</label>
            <br>-->
        </div>
        <br>
        <div >
            <p>多个复选框：</p>
            <div v-for="item in checkData">
                <input type="checkbox" :id="item.name" value="item.name" @click="checking(item)">
                <label :for="item.name">{{item.name}}</label>
            </div>
            <div>
                <a href="javascript:;" @click="getChecked()">pass</a>
            </div>

            <br>
        </div>
        select
        <select v-model="selected" name="fruit">
            <option value="">选择一个网站</option>
            <option value="www.runoob.com">Runoob</option>
            <option value="www.google.com">Google</option>
        </select>
    </div>
</template>

<script>
    import Children from '@/components/Children.vue'
    import jquery from '@/assets/js/jquery-3.2.1.min.js'
    export default {
        name: 'hello',
        data () {
            return {
                message: '',
                message2: '',
                checked: false,
                checkedNames: [],
                checkData: [{name:'runoob'}, {name:'Google'}, {name:'taobao'}],
                selected:'',
                msg:'',
                age:'',
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
            checkedNames() {
                console.log('watch', this.checkedNames);
            },
            selected() {
                console.log('watch', this.selected);
            },
            age() {
                console.log('watch', this.age);
            },
            msg() {
                console.log('watch', this.msg.length);
            },

        },
        components: {Children},
        computed: {},
        methods: {
            doThis(){
                console.log(66666);
            },
            doThat(){
                console.log(8888);
            },
            checking(ele){
                if(typeof ele.ischecked == 'undefined'){
                    this.$set(ele,'ischecked',true);
                }else {
                    ele.ischecked = !ele.ischecked;
                }
            },
            getChecked(){
                let count = '',
                        indexArr = [];
                this.checkData.forEach((val,index)=>{
                    if(val.ischecked===true){
                    count ++;
                    indexArr.push(index);
                }
                })
                console.log('indexArr',indexArr);
            },

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
    input[type="checkbox"] {
        display: block;
    }

    li {
        float: left;
        width: 200px;
    }

    .aa {
        margin-bottom: 30px;
    }
</style>
