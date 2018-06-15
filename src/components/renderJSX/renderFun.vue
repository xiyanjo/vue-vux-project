<template>
    <div class="parent">
        <template>
            <h3>JSX</h3>
            <p>模版：h(tag,{},[]) 或 h(tag,{},string)</p>
        </template>

        <!-- <template>
             <anchored-heading-all :level="4" :items="itemArrs" :inputVal="inputVal" @input="listenInput">
                 <span>Hello world!&#45;&#45;$slots.default</span>
             </anchored-heading-all>
         </template>-->
        <anchored-heading-all>
            <template slot-scope="scopedSlots"><!--<template scope="scopedSlots"  同前面的功能相同>-->
                <!--{{scopedSlots}}-->
                <div v-for="item in scopedSlots">{{item.text}}</div>
            </template>
        </anchored-heading-all>


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
        /*render: function (h) {

         //    console.log('this.$slots.default',this.$slots.default)
         var headingId = getChildrenTextContent(this.$slots.default).toLowerCase().replace(/\W+/g, '-').replace(/(^\-|\-$)/g, ''); // 创建 kebabCase 风格的ID
         var self = this;
         // 根据数据选择渲染方式
         if (this.items.length) {
         return h('ul', this.items.map(function (item) {
         if (!item.name) {
         return h('li',[
         h('input', {
         domProps: {
         value: self.inputVal//将props中的inputVal绑定给input
         },
         on: {//事件监听 基于on
         input: function (event) {
         self.$emit('input', event.target.value + 'i love you')//子组件中emit事件，处理过的值传给父组件
         },
         keyup: function (event) {
         //                                    console.log(9999,event);
         if (event.target !== event.currentTarget) return;// 如果触发事件的元素不是事件绑定的元素  则返回
         if (!event.shiftKey || event.keyCode !== 13) return; // 如果按下去的不是 enter 键或者 没有同时按下 shift 键 则返回
         event.stopPropagation();// 阻止 事件冒泡
         event.preventDefault();// 阻止该元素默认的 keyup 事件
         }
         }
         }
         ),
         h('span',/!* self.$slots.default*!/[
         self.$scopedSlots.default({
         text: self.message
         })
         ])
         ])


         } else {
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
         id: 'foo'
         },
         class: {aa: true},
         /!*domProps: {  innerHTML: '<div>baz</div>'//标签内部HTML},*!/
         },
         [h('span', {}, this.$slots.default), h('span', {}, '同个下级tag')])// 可以嵌套多个节点，添加多个同级节点
         ]
         )
         }

         },
         props: {
         level: {
         type: Number,
         required: true
         },
         items: {
         type: Array,
         required: true
         },
         inputVal: {
         type: String,
         required: true
         },
         message: {
         type: String,
         required: false
         }
         }*/
        render: function (createElement) {
//            console.log(2222, this.$scopedSlots.default);
            // `<div><slot :text="message"></slot></div>`
            return createElement('div', [
                this.$scopedSlots.default([{text: 'aaa'},{text: 'bbb'},{text: 'ccc'}])
            ])
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
        components: {},
        data () {
            return {
                jsx: 'fa jsx',
                itemArrs: [{name: 'a'}, {name: 'b'}, {name: ''}, {name: 'd'}],
                inputVal: '6666',
                scopedSlots: {
                    message: '作用域插槽'
                },
            }
        },
        computed: {},
        methods: {
            listenInput(val){
                console.log('listen input event', val);
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
