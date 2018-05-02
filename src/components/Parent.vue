<template>
    <div class="parent">

        <template >
            <div>以下为父组件原来数据</div>
            <div>{{todo}}</div>
        </template>

        <template>
            <div style="margin-top:30px">以下为组件内容</div>
            <!-- 只传一个数组 -->
            <div style="margin-top:30px">子组件改变引用类型数据 影响父组件中数据</div>
            <Children :todo="todo" @up="change" :myMsg="myMsg"></Children>

            <template>
                <div>以下为.sync  子组件中数据影响父组件中数据</div>
                <child @input="inputChild" :myMsg.sync="myMsg"></child>
                <div>{{myMsg}}</div>
            </template>
            
            <template>
                <div style="margin-top:30px">以下为自定义事件表单控件</div>  
                <currency-input v-model="price"></currency-input>
            </template>

            <my-component></my-component>  
        </template>
          

    </div>
</template>

<script>
    import Children from '@/components/Children.vue'
    import child from '@/components/child.vue'
    import Vue from 'vue';
    // 注册全局组件
    Vue.component('my-component', {
      template: '<div>我是全局组件</div>'
    })

    // 自定义事件的表单
    Vue.component('currency-input', {
      template: '\
        <span>\
          $\
          <input\
            ref="input"\
            v-bind:value="value"\
            v-on:input="updateValue($event.target.value)"\
          >\
        </span>\
      ',
      props: ['value'],
      methods: {
        // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
        updateValue: function (value) {
          var formattedValue = value
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
    })
    export default {
        name: 'hello',
        data () {
            return {
                myMsg:'P-msg',
                childData:'',
                size:'size',
                todo: {
                  name: 'Learn Vue',
                  size: 'Todo.size',
                  myMsg:'第二个'

                },
                price:'',
            }
        },
        components:{Children,child},
        created(){
        },
        methods:{
            // 监听children事件
            change(data) {
                this.childData = data;
                console.log('listen children event and get data',this.childData);
            },
            // 监听child事件
            inputChild(){
                console.log('listen child',this.myMsg);
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
