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

        <!--参数特性 lazy  number debounce-->
        <!-- 在 "change" 而不是 "input" 事件中更新 -->
        <input v-model="message1" lazy>
        <!--如果想自动将用户的输入保持为数字，可以添加一个特性 number：-->
        <input v-model="message1" number>
        <!--debounce 设置一个最小的延时，在每次敲击之后延时同步输入框的值与数据。如果每次更新都要进行高耗操作（例如在输入提示中 Ajax 请求），它较为有用。-->
        <input v-model="message1" debounce="500">
        <!--注意 debounce 参数不会延迟 input 事件：它延迟“写入”底层数据。因此在使用 debounce时应当用 vm.$watch() 响应数据的变化。若想延迟 DOM 事件，应当使用 debounce 过滤器。-->

        <!--js表达式支持-->
        <div class="aa">
            <div>{{ 'ooo' ? 'YES' : 'NO' }}</div>
            <div>{{ message.split('').reverse().join('') }}</div>
        </div>
        <!--一个指定以特殊方式绑定 .prevent-->
        <div class="aa">
            <!--event.preventDefault()-->
            <a @submit.prevent="onSubmit">指定的绑定方式</a>
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

<<<<<<< HEAD
        <button v-on:click="warn('Form cannot be submitted yet.', $event)">
             Submit
        </button>
=======

        <div>
            输入框1
            <input type="text" v-for="(item,index) in cou"
                   v-model='cou[index]'>
            <p>
                .$nextTick更新dom后执行的方法
            </p>
            <!-- 输入框2
             <input type="text" v-for="(item,index) in cou"
                    v-if="countData[index][1]"
                    v-model = 'countData[index][1]'>-->
        </div>
        <div>
            <p>
                过滤不符合条件的属性，通过数组变异属性 filter
            </p>
            <ul id="example-1">
                <li v-for="item in items" @click="exam1">
                    {{ item.message }}
                </li>
            </ul>
        </div>
        <div>
            <p>显示过滤和排序结果</p>
            <li v-for="n in evenNumbers">{{ n }}</li>

            <p>
                ***有报错***  在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 你可以使用一个 method 方法：
            </p>
            <!--<li v-for="n in even(numbers2)">{{ n }}</li>-->
        </div>
        <div id="todo-list-example">
            <input
                    v-model="newTodoText"
                    @keyup.enter="addNewTodo"
                    placeholder="Add a todo"
            >
            <ul>
                <input
                        v-for="(todo, index) in todos"
                        v-model="todos[index]"
                >
            </ul>
        </div>
>>>>>>> 01f1bce5b86d36785aab34c84c68eba721031fbe

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
                message1: '',
                id: 1,
                class1: false,
                type: 'd',
                sites: [
                    {name: 'Runoob'},
                    {name: 'Google'},
                    {name: 'Taobao'}
                ],
                cou: ['', '', ''],//循环数组
//                循环显示数据
                countData: [
                    ['0', '1'],
                    ['2', '3'],
                    ['4']
                ],
                items: [
                    {message: 'Foo'},
                    {message: 'Bar'}
                ],
                numbers: [ 1, 2, 3, 4, 5 ],
                numbers2: [ 1, 2, 3, 4, 5 ],
                todos: [
                    {
                        id: 1,
                        title: 'Do the dishes',
                    },
                    {
                        id: 2,
                        title: 'Take out the trash',
                    },
                    {
                        id: 3,
                        title: 'Mow the lawn'
                    }
                ],
                newTodoText: '',
            }
        },
        mounted(){
            document.title = 'vue全'
        },
        watch: {
//            校验
            cou(){
//                当为countData 或者cou中为对象时，无法绑定到view层
                /*for (var i=0;i<this.countData.length;i++){
                 this.$set(this.countData[i],0,this.countData[i][0].replace(/[^\d\.]/g, ''));
                 if( this.countData[i][1]){
                 this.$set(countData[i],1,this.countData[i][1].replace(/[^\d\.]/g, ''));
                 }
                 }*/
                for (var i = 0; i < this.cou.length; i++) {
//                    this.$set(this.cou,i,this.cou[i].replace(/[^\d\.]/g, ''));
                    this.cou[i] = this.cou[i].replace(/[^\d\.]/g, '');
                    this.$nextTick(function () {
                        console.log(this.$el.textContent) // => '更新完成'
                    })
                }
                console.log(77777, this.cou)
            },
            todos(){
                for (var i = 0; i < this.todos.length; i++) {
//                    this.$set(this.cou,i,this.cou[i].replace(/[^\d\.]/g, ''));
//                    console.log(this.todos[i].id);
                    console.log({id:(this.todos[i].id+'').replace(/[^\d\.]/g, '')});
                    this.todos[i] = {id:(this.todos[i].id+'').replace(/[^\d\.]/g, '')};
                }
                console.log(this.todos)
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
            },
            evenNumbers: function () {
                return this.numbers.filter(function (number) {
                    return number % 2 === 0
                })
            },
            even: function (numbers) {
               /* return numbers.filter(function (number) {
                    return number % 2 === 0
                })*/
            }
        },
        methods: {
             warn: function (message, event) {
                // 现在我们可以访问原生事件对象
                if (event) event.preventDefault()
                alert(message)
              },
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
            exam1(){
                this.items = this.items.filter(function (item) {
                    return item.message.match(/Foo/)
                })
            },
            addNewTodo: function () {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                })
                this.newTodoText = ''
            }
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
