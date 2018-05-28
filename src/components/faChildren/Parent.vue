<template>
    <div class="parent">

        <template >
            <div class="strongDes">以下为父组件原来数据</div>
            <div>{{todo}}</div>
        </template>

        <template>
            <div style="margin-top:30px">以下为组件内容</div>
            <!-- 只传一个数组 -->
            <div class="strongDes" style="margin-top:30px">子组件改变引用类型数据 影响父组件中数据</div>
            <h3 class="strongDes">a-b-c 从a中传递数据到c，同时监听c中事件</h3>
            <Children :todo="todo"
                :myMsg="myMsg"
                :childMsg.sync="myMsg"
                :foods='faFoods'
                
                @childrenCom="childrenEve"
                @up="change" 
                @childCom="childEve"
                @input="inputChild"
                @update:childMsg="updateChild">
            </Children>

            <template>
                <div class="strongDes">.sync语法糖功能----子组件中数据改变，同步到父组件中数据</div>
                <child @input="inputChild" :childMsg.sync="myMsg"></child>
            </template>
            
            <template>
                <div class="strongDes" style="margin-top:30px">以下为自定义事件表单控件</div>  
                <currency-input v-model="price"></currency-input>
            </template>

            <my-component></my-component>  
        </template>
          
        <template>
          <base-input v-on:focus.native="onFocus" :value=true></base-input>
          <base-input-listener v-on:focus.native="onFocus" :value=false></base-input-listener>
        </template>

    </div>
</template>

<script>
    import Children from '@/components/faChildren/Children.vue'
    import child from '@/components/faChildren/child.vue'
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
    // 使用.native时 含input时有问题  
    Vue.component('base-input', {
      // template: `<label><input v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)"></label>`,
      template: `<label><input v-bind="$attrs" :value="value" @input=baseInput></label>`,
      props: ['value'],
      methods: {
        baseInput(event){
            console.log('base-input');
            this.$emit('input', event.target.value)
        }
      }
    })
    // 使用.native时 含input时有问题----$listener属性解决-----------------------------------------------？？？？？？
    Vue.component('base-input-listener', {
      inheritAttrs: false,
      props: ['label', 'value'],
      computed: {
        inputListeners: function () {
          var vm = this
          // `Object.assign` 将这些对象合并在一起，构成一个新的对象
          return Object.assign({},
            // 我们在父组件中添加的所有监听器
            this.$listeners,
            // 然后我们可以新增自定义的监听器，
            // 或覆盖掉一些监听器的行为。
            {
              // 这里确保组件能够正常运行 v-model 指令
              input: function (event) {
                console.log('base-input-listener');
                vm.$emit('input', event.target.value)
              }
            }
          )
        }
      },
      template: `
        <label>
          {{ label }}
          <input
            v-bind="$attrs"
            v-bind:value="value"
            v-on="inputListeners"
          >
        </label>
      `
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
                faFoods:[{'id':'1','text':'土豆丝'},{'id':'2','text':'黄瓜'},{'id':'3','text':'西红柿'}],//作用域插槽
            }
        },
        components:{Children,child},
        created(){
        },
        methods:{
            onFocus(){
                console.log('.native');
            },
            // children组件开始
            childrenEve(){
                 console.log('Children.vue')
            },
            change(data) {
                this.childData = data;
                console.log('children event and get data',this.childData);
            },
            // children组件结束
            // child组件开始
            childEve(){
                console.log('Child.vue')
            },
            // 监听child事件
            inputChild(){
                console.log('listen child',this.myMsg);
            },
            updateChild(data){
                console.log('update:childMsg 带冒号的事件监听',data);
            },
            // child组件结束
            

            
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .strongDes{
      color: pink;
    }
</style>
