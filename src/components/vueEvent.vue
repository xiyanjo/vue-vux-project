<template>
    <div class="hello">
        <div @click="doThat">
            <!-- 阻止单击事件冒泡 父元素的点击事件不会执行-->
            <a @click.stop="doThis">stop</a>

            <!-- 提交事件不再重载页面 -->
            <form @submit.prevent="doThis">form prevent</form>

            <!-- 只有修饰符 --><!-- 修饰符可以串联  -->
            <form @submit.prevent> prevent</form>

            <!-- 添加事件侦听器时使用事件捕获模式 -->
            <div @click.capture="doThis"> capture</div>

            <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
            <div @click.self.stop="doThis"> self
                <a @click.stop="doThat">子元素stop</a>
            </div>

            <!-- click 事件至少触发一次，2.1.4版本新增 -->
            <a @click.once="doThis">once事件至少触发一次</a>
        </div>

        <!--按键修饰符-->
        <div>
            <!--Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：-->
            <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
            <input @keyup.13="doThat">
            <!--全部的按键别名：-->
            <!-- .enter  --13
             .tab
             .delete (捕获 "删除" 和 "退格" 键)
             .esc
             .space
             .up
             .down
             .left
             .right
             .ctrl
             .alt
             .shift
             .meta-->

            <p><!-- Alt + C -->
                <input @keyup.alt.67="doThis">
                <!-- Ctrl + Click -->
            <div @click.ctrl="doThis">Do something</div>
        </div>

        <template>  
            <!-- <input :value="selfValue" v-on:input="$emit('input', $event.target.value)"> -->
        </template>
            <custom-input v-model="searchText" @input="getChange">slot插槽插入内容</custom-input>

    </div>
</template>

<script>
    import Children from '@/components/faChildren/Children.vue'
    import Vue from 'vue'

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <div>
    <input placeholder="自定义事件"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
    <slot></slot>
    </div>
  `
})
    export default {
        name: 'hello',
        data () {
            return {
                // selfValue:'',
                searchText:''
            }
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
            getChange(val){
                console.log(val);
            }
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
    li {
        float: left;
        width: 200px;
    }

    .aa {
        margin-bottom: 30px;
    }
</style>
