<template>
    <div class="parent">
        <template>
            <h3>JSX</h3>
            <p>h(tag,{},[])或h(tag,{},string) []和''二选一</p>
        </template>
        
        <template>
          <anchored-heading-all :level="4" :items="itemArrs" :inputVal="inputVal" @input="listenInput">
            <div>Hello world!</div>
          </anchored-heading-all>
        </template>

        <template>
            <!-- <com-outside>444</com-outside> -->
        </template>
        
    </div>
</template>

<script>

import Vue from 'vue';
// 格式化id
var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}
Vue.component('anchored-heading-all', {
  render: function (h) {
   
//    console.log('this.$slots.default',this.$slots.default)
    var headingId = getChildrenTextContent(this.$slots.default).toLowerCase().replace(/\W+/g, '-').replace(/(^\-|\-$)/g, ''); // 创建 kebabCase 风格的ID
    var self = this;
      // 根据数据选择渲染方式
    if (this.items.length) {
        return h('ul', this.items.map(function (item) {
          if(!item.name){
            return h('input', {
              domProps: {
                value: self.inputVal//将props中的inputVal绑定给input
              },
              on: {//事件监听 基于on
                input: function (event) {
                  self.$emit('input', event.target.value+'i love you')//子组件中emit事件，处理过的值传给父组件
                }
              }
            })
          }else{
            return h('li', item.name)                                                                            
          }
        }))
    } else {
        return h(
          'h' + this.level,// 'h' + this.level,this.$slots.default,//''和[]
          [
            h('a', {
              attrs: {
                name: headingId,
                href: '#' + headingId,
                id:'foo'
              },
              class:{aa:true},
              /*domProps: {  innerHTML: '<div>baz</div>'//标签内部HTML},*/
            }, 
            [h('span', {}, this.$slots.default),h('span', {}, '同个下级tag')])// 可以嵌套多个节点，添加多个同级节点
          ]
        )
    }
    
  },
  props: {
    level: {
      type: Number,
      required: true
    },
    items :{
      type:Array,
      required:true
    },
    inputVal:{
      type:String,
      required:true
    }
  }
})
// ???????????????????
/*Vue.component('com-outside', {
  functional: true,     //1
  // 为了弥补缺少的实例
  // 提供第二个参数作为上下文
  render: function (h, context) {   //2
    console.log(111,h, context);
    h('div','aaa')
  },
})*/




    export default {
        name: 'renderFun',
        components:{},
        data () {
            return {
               jsx:'fa jsx',
               itemArrs:[{name:'a'},{name:'b'},{name:''},{name:'d'}],
               inputVal:'6666',
            }
        },
        computed: {
          
        },
        methods:{
            listenInput(val){
                console.log('listen input event',val);
            }
        },
        created(){
        },
        mounted(){
          
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
