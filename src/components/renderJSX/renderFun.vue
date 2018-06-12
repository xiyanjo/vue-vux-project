<template>
    <div class="parent">
        <template>
            <h3>JSX</h3>
            <p>h(tag,{},[])或h(tag,{},string) []和''二选一</p>
        </template>
        
        <template>
          <anchored-heading-all :level="4">
            <div>Hello world!</div>
          </anchored-heading-all>
        </template>

        <template>
            <com-outside>444</com-outside>
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
    // 创建 kebabCase 风格的ID
     console.log('this.$slots.default',this.$slots.default)
    var headingId = getChildrenTextContent(this.$slots.default).toLowerCase().replace(/\W+/g, '-').replace(/(^\-|\-$)/g, '');

    return h(
      'h' + this.level,
      // 'h' + this.level,this.$slots.default,//''和[]
      [
        h('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId,
            id:'foo'
          },
          class:{
            aa:true
          },
          /*domProps: {
            innerHTML: '<div>baz</div>'//标签内部HTML
          },*/
        }, 
        [
          // 可以嵌套多个节点，添加多个同级节点
          h('span', {}, this.$slots.default),
          h('span', {}, '同个下级tag')
        ])
      ]
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

Vue.component('com-outside', {
  functional: true,     //1
  // 为了弥补缺少的实例
  // 提供第二个参数作为上下文
  render: function (h, context) {   //2
    console.log(111,h, context);
    h('div','aaa')
  },
})




    export default {
        name: 'renderFun',
        components:{},
        data () {
            return {
               jsx:'fa jsx'
            }
        },
        computed: {
          
        },
        methods:{
         
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
