<template>
    <div class="hello">
        <!--for循环-->
        <!--<div>
            <ul>
                <li v-for="item in citys"> {{item}}</li>
                <br>
                <li v-for="item in cityData.citys"> {{item}}</li>
                <br>
                <li v-for="(item,key,index) in country"> {{key}}:{{index}}:{{item}}</li>
            </ul>
            <button @click="eachCitys">添加城市</button>

            <ul>
                <li>{{a1}}</li>
                <li>{{a2}}</li>
            </ul>
        </div>-->

        <!--三层计算-->
        <!--<div>
            <div>
                总计人数
                <input type="text">
            </div>
            <div>
                <div>
                    fal人数
                    <input type="text" v-model="fal1">
                </div>
                <div>
                    vip人数
                    <input type="text" :value="vip1">
                </div>
            </div>
            <div>
                <div>
                    fal百分比
                    <input type="text">
                </div>
                <div>
                    vip百分比
                    <input type="text">
                </div>
            </div>
            <div>
                vip详情
                &lt;!&ndash;<input type="text" v-model="in1">
                <input type="text" v-model="in2">
                <input type="text" v-model="in3">
                <input type="text" v-model="in4">
                <input type="text" v-model="in5">&ndash;&gt;
                <input type="text" v-for="(item,index,key) in inLists" :value="item">
            </div>
        </div>-->
        <!--属性id绑定-->
        <div class="aa">
            <div :id="'list-' + id">前缀一致后缀变化的id</div>
            <label for="r1">修改颜色</label><input type="checkbox" v-model="class1" id="r1">
            <br><br>
            <div :class="{'class1': class1}">动态添加类名</div>
        </div>
        <!--js表达式支持-->
        <div class="aa">
            <div>{{ 'ooo' ? 'YES' : 'NO' }}</div>
            <div>{{ message.split('').reverse().join('') }}</div>
        </div>
        <!--一个指定以特殊方式绑定 .prevent-->
        <div class="aa">
            <!--event.preventDefault()-->
            <a @submit.prevent="onSubmit"></a>
        </div>
        <!--过滤器-->
        <div class="aa">
            <!-- 在两个大括号中 -->
            <div>{{ message | capitalize }}</div>
            <!-- 在 v-bind 指令中 -->
            <div :id="message | capitalize">bind中使用过滤器</div>
            <div>过滤器可以串联：{{ message | filterA | filterB }}</div>
            <div>
                <span>{{ message | filterA('arg1', arg2) }}</span>
                <span>message-第一个参数，'arg1'-第二个参数， arg2 表达式的值将被求值-第三个参数</span>
            </div>

        </div>
        <!--IF else-->
        <div class="aa">
            <div v-if="Math.random() > 0.5">
                Sorry
            </div>
            <div v-else>
                Not sorry
            </div>
            <!--if else if-->
            <div v-if="type === 'A'">
                A
            </div>
            <div v-else-if="type === 'B'">
                B
            </div>
            <div v-else-if="type === 'C'">
                C
            </div>
            <div v-else>
                Not A/B/C
            </div>
        </div>
        <!--v-for-->
        <div>
            <ul>
                <li v-for="site in sites">
                    <span>{{ site.name }}</span>
                    <span>--------------</span>
                </li>
                <li v-for="site in sites">
                    {{ site.name }}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import Children from '@/components/Children.vue'
    export default {
        name: 'hello',
        data () {
            return {
                citys: ['china', 'usa', 'japan'],
                cityData: {
                    citys: ['biubiu', 'lalala', 'heiehi']
                },
                country: {
                    china: 'great',
                    usa: 'big',
                    japan: 'small'
                },
                in1: '', in2: '', in3: '', in4: '', in5: '',
                fal1: '',
                inLists: [
                    ['in1', 'in2', 'in3', 'in4', 'in5']
                ],
                message: 'RUNOOB',
                id: 1,
                class1: false,
                type:'d',
                sites: [
                    { name: 'Runoob' },
                    { name: 'Google' },
                    { name: 'Taobao' }
                ]
            }
        },
        components: {Children},
        computed: {
            a1: {
                get: function () {
                    return this.citys[0] + '-' + this.citys[1]
                },
                set: function () {
                }
            },
            a2: {
                get: function () {
                    return this.country.china + '-' + this.country.usa
                },
                set: function () {
                }
            },
            vip1: {
                get: function () {
                    return this.in1 + this.in2 + this.in3 + this.in4 + this.in5;
                },
                set: function () {
                }
            }
        },
        methods: {
            change(data) {
                this.childData = data;
                console.log(6666, this.childData);
            },
            eachCitys(){
                let items = ['shanghai', 'beijing', 'heilongjiang'],
                        that = this;
//                that.cityData.citys =[];
//                 that.cityData.citys[1] ='6666';
                /* items.forEach(function (val) {
                 that.cityData.citys.push(val);
                 })*/

                /**
                 * 数组长度不变，单独改变其中某个值时，值改变，页面监听未改变
                 */
//                that.citys[1] ='6666';
//                that.cityData.citys[1] ='6666';

//                that.country ={};
                /**
                 * 对象直接改变对应属性的值， 页面监听也改变
                 * 对象直接改变整体， 页面监听也改变
                 */
                that.country.china = '6666';
                /*that.country ={
                 aa:'1111',
                 bb:'6666'
                 }*/
//                console.log(that.cityData,that.cityData.citys);
            },
            formNum(inp){
                this[inp] = this[inp].replace(/[^\d\.]/g, '')
            },
            arg2(){
            },
        },
//        过滤器
        filters: {
            capitalize: function (value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            filterA: function () {

            },
            filterB: function () {

            },

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li {
        float: left;
        width: 200px;
    }

    .aa {
        margin-bottom: 30px;
    }
</style>
