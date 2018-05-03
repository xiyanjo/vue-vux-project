<template>
    <div class="child">
        <h2>child</h2>
        <input type="text" :value="myMsg" @input="updateValue"  @blur="update" placeholder="请输入">
    </div>
</template>

<script>

    export default {
        name: 'hello',
        data () {
            return {

            }
        },
        props:['size','myMsg','name','todo'],
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
            // 子组件中现实的声明update方法，子组件数据改变时父组件数据也改变
            update:function (e){
                this.$emit('update:myMsg', e.target.value);
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
