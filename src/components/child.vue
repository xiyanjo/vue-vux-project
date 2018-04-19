<template>
    <div class="hello">
        我是child
        <div>{{bar}}</div>
        <input type="text" @input="updateValue" placeholder="你好">
    </div>
</template>

<script>

    export default {
        name: 'hello',
        data () {
            return {
                total:[{aa:111},{
                    bb:'child1.vue'
                }]

            }
        },
        props:['size','myMsg','name','todo','bar'],
        computed: {
            normalizedSize: function () {
                 console.log('child1.vue')
                return this.size.trim().toLowerCase()
            }
        },
        methods:{
            up() {
                console.log(666);
                this.$emit('up',this.total); //主动触发upup方法，'hehe'为向父组件传递的数据
            },
            foo(bar){
                console.log(bar);
                this.$emit('update:foo', newValue)
            },

            updateValue: function (e) {
                  var formattedValue = e.target.value
                    // 删除两侧的空格符
                    .trim()
                    // 保留 2 位小数
                    .slice(
                      0,
                      value.indexOf('.') === -1
                        ? value.length
                        : value.indexOf('.') + 3
                    )
                  // 如果值尚不合规，则手动覆盖为合规的值
                  if (formattedValue !== value) {
                    this.$refs.input.value = formattedValue
                  }
                  // 通过 input 事件带出数值
                  this.$emit('input', Number(formattedValue))
            }






        }


    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
