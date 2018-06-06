<template>
    <div class="child">
        <h2>child</h2>
        <input type="text" :value="childMsg" @input="updateValue"  @blur="update" placeholder="请输入">
        <p>{{name}}</p>
        <template>
        <div class="strongDes">作用域插槽</div>
          <ul>
            <li v-for="food in foods" :key="food.id">
              <!-- 我们为每个 todo 准备了一个插槽，--><!-- 将 `todo` 对象作为一个插槽的 prop 传入。-->
              <slot :food="food"><!-- 回退的内容 -->{{ food.text }}</slot>
            </li>
          </ul>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {

            }
        },
        props:['size','childMsg','name','foods'],
        computed: {
            normalizedSize: function () {
                 console.log('child1.vue')
                return this.size.trim().toLowerCase()
            }
        },
        methods:{
            foo(bar){
                console.log(bar);
                this.$emit('update:foo', newValue)
            },
            updateValue: function (e) {
                  var formattedValue = e.target.value;

                    // 删除两侧的空格符
                   /* formattedValue.trim()
                    // 保留 2 位小数
                    .slice(
                      0,
                      formattedValue.indexOf('.') === -1
                        ? formattedValue.length
                        : formattedValue.indexOf('.') + 3
                    )*/
                  // 如果值尚不合规，则手动覆盖为合规的值
                  /*if (formattedValue !== value) {
                    this.$refs.input.value = formattedValue
                  }*/
                  // 通过 input 事件带出数值
                  this.$emit('input', formattedValue);
            },
            // .sync语法糖功能：子组件中现实的声明update方法，子组件数据改变时父组件数据也改变
            update:function (e){
                this.$emit('update:childMsg', e.target.value);
            }
        },
        mounted(){
            this.$emit('childCom');
            // this.$root.faMethod();
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
