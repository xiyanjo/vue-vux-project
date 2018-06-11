<template>
    <div>
        <h3>混入--不同实例的同名方法会被覆盖，实例的属性可共享</h3>
    </div>
</template>
<script>
import Vue from 'vue';

// 定义一个混入对象
var myMixin = {
  data(){
    return {
        mix1:'mix1'
    }
  },
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!',this.mix1);
    }
  }
}
var myMixin2 = {
  created: function () {
    this.hello2()
  },
  methods: {
    hello2: function () {
      console.log('hello from mixin2!')
    }
  }
}
// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin,myMixin2]
})

var component = new Component() // => "hello from mixin!"
    export default{
        data(){
            return {
            }
        },
        components: {},
        computed:{
           
        },
        methods: {
        
        },
    }
</script>
