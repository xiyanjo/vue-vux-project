<template>
    <div class="children">
        <h2>children</h2>
        <template>
            <div>
                <!-- 引用类型重新赋值，防止影响父组件 -->
                <label for="">size----使用父组件中数据，传递时不变</label>
                <input type="text"  v-model='childSize'>
            </div> 
        </template>
        <!-- props 时 子组件中值改变后不会改变父组件的值 -->
        <template>
            <div>
                <label for="">使用父组件中数据，子组件可改变</label>
                <input type="text" :value="myMsg">
            </div>  
        </template>
        <template>
            <div>
                <span>子组件向父组件传递数据及事件</span>
                <button @click="up">发给父组件</button> 
            </div>
        </template>

        <template>
            <div class="strongDes">parent中传递数据，child在children中引用，在child内部调用作用域插槽--在child父级中处理child中数据</div>
            <child v-bind="$attrs" v-on="$listeners" name='b-c数据'>
                <!-- <template slot-scope="a">
                      为待办项自定义一个模板，通过 `slotProps` 定制每个待办项。
                      <span v-if="a.food.id==2">✓父组件中重新处理数据---</span>
                      {{ a.food.text }}
                </template> -->
                <!-- es6解构语法 -->
                <template slot-scope="{ food }">
                    <span v-if="food.id==1">✓</span>
                    {{ food.text }}
                </template>
            </child>
        </template>
    </div>
</template>

<script>
    import child from '@/components/faChildren/child.vue'

    export default {
        name: 'hello',
        components:{child},
        data () {
            return {
                msg: '4444',
                total:[{aa:111},{
                    bb:2222
                }],

            }
        },
        props:['myMsg','name','todo'],
        computed: {
            // 使用computed重新赋值，不会影响父元素
            childSize:{
                get:function (){
                    return this.todo.size;
                },
                set:function (){}
            }
        },
        methods:{
            up() {
                console.log('emit total in children');
                // this.$emit('up',this.total); //主动触发upup方法，'hehe'为向父组件传递的数据
                this.$emit('up',this.todo); //主动触发upup方法，'hehe'为向父组件传递的数据
            }
        },
        mounted(){
            this.$emit('childrenCom');
            console.log('this.$attrs 值为 childMsg',this.$attrs,this.$listeners);
        }


    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.children{
    padding-bottom: 30px;
}
</style>
