<template>
    <div class="parent">
        <h5>JSX</h5>
        <anchored-heading-all :level="5">Hello world!Hello world</anchored-heading-all>

        <textRender >default</textRender>      
    </div>
</template>

<script>

import Vue from 'vue';
Vue.component('textRender', {
  render: function (createElement) {
    return createElement(
        // 一个 HTML 标签字符串，组件选项对象，或者// 解析上述任何一种的一个 async 异步函数，必要参数。
        'div',this.$slots.default//只有添加时才显示默认的值

        // {Object} // 一个包含模板相关属性的数据对象 // 这样，您可以在 template 中使用这些属性。可选参数。
      /*  {
          // (详情见下一节)
        },
        // {String | Array} // 子节点 (VNodes)，由 `createElement()` 构建而成， // 或使用字符串来生成“文本节点”。可选参数。
        [
          '先写一些文字1',
          createElement('h1', '一则头条'),
          // ?????????????????????????????????????????
          createElement(MyComponent, {
            props: {
              someProp: 'foobar'
            }
          })
        ]*/
      )
  },
  props: {
    level: {
      type: Number,
      required: false
    }
  }
})
// 格式化id
var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}
Vue.component('anchored-heading-all', {
  render: function (createElement) {
    // 创建 kebabCase 风格的ID
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^\-|\-$)/g, '')

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
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
        }, this.$slots.default)
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




    export default {
        name: 'renderFun',
        components:{},
        data () {
            return {
               
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
