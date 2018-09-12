<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    window.addEventListener('hashchange',function () {
        console.log('hash--',window.location.hash);
    })

    import Vue from 'vue';

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
        template: `<label>{{ label }}<input v-bind="$attrs" v-bind:value="value" v-on="inputListeners"></label>`
    })
    /*// 注册一个全局自定义指令 `v-focus`
     Vue.directive('focus', {
     // 当被绑定的元素插入到 DOM 中时……
     inserted: function (el) {
     // 聚焦元素
     el.focus()
     }
     })*/
    // 注册全局组件
    Vue.component('my-component', {
        template: '<div>我是全局组件</div>'
    })
    // tab组件开始
    Vue.component('tab-home', {
        template: `<div>
      <div>Home component</div>
      <div>
        <div style="float:left;width:50px">
          <span @click='currentTabVal="1"'>111 </span>
          <span @click='currentTabVal="2"'>222</span>
        </div>
        <div v-if="currentTabVal" >{{currentTabVal}}</div>
      </div>
     </div>`,
        data(){
            return {
                currentTabVal: '6666',
            }
        }
    })
    Vue.component('tab-posts', {
        template: '<div>Posts component</div>'
    })
    Vue.component('tab-archive', {
        template: '<div>Archive component</div>'
    })
    // tab组件结束
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
                        .trim() // 删除两侧的空格符
                        // 保留 2 位小数
                        .slice(0, value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3)
                // 如果值尚不合规，则手动覆盖为合规的值
                if (formattedValue !== value) {
                    this.$refs.input.value = formattedValue
                }
                // 通过 input 事件带出数值
                this.$emit('input', Number(formattedValue))
            }
        }
    })
    // 父组件中事件子组件中可用，this指向父组件
    Vue.component('inject', {
        template: `<div>
      <div>我是子中的title{{title}}</div>
     </div>`,
        data(){
            return {
                title: '6666',
            }
        },
        inject: ['getMap'],//接受父组件中传的方法
        mounted(){
            this.getMap('inject组件中可以改变父中的数据');
        },
    })

    export default {
        name: 'app',
        data(){
            return {
                appMsg: 'app',
                message: 'hello!'
            }
        },
        methods: {
            rootMethod(){
                console.log('我是父组件中的方法，在子组件中调用')
            }
        }
    }
</script>


<style lang="less">
    @import '~vux/src/styles/reset.less';

    body {
        background-color: #fbf9fe;
    }
</style>
