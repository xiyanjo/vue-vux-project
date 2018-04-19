<!--
<template>
    <div>
        <div>我是滑动</div>
        <stack pages="pages"></stack>
    </div>
</template>
<script type="text/ecmascript-6">
    import stack from '@/components/handle/stack';
    export default{
        components:{
            stack:stack
        },
        data () {
            return {
                pages:[{
                    src:
                }]
            }
        },
        methods: {
        }
    }
</script>-->
<template>
    <div>
        <div class="stack-wrapper">
            <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
        </div>
        <div class="controls">
            <!--父组件中元素触发子组件的事件-->
            <button @click="prev" class="button"><i class="prev"></i><span class="text-hidden">prev</span></button>
            <button @click="next" class="button"><i class="next"></i><span class="text-hidden">next</span></button>
        </div>
        <!--<img :src="imgSrc4" alt="">-->
        <template>
            <blog-post>
              <h1 slot="header">
                h1
              </h1>
              <p slot="header">p2</p>

              <p slot="footer">
                    footer3
              </p>

              <p> p4 </p>.
            </blog-post>
        </template>
    </div>
</template>
<script>
    import stack from '@/components/handle/stack';
    import img1 from '@/assets/img/1.jpg';
    import img2 from '@/assets/img/2.jpg';
    import img3 from '@/assets/img/3.jpg';
    import img4 from '@/assets/img/4.jpg';
    import Vue from 'vue'
    Vue.component('blog-post', {
      render: function (createElement) {
        var header = this.$slots.header
        var body   = this.$slots.default
        var footer = this.$slots.footer
        return createElement('div', [
          createElement('header', header),
          createElement('main', body),
          createElement('footer', footer)
        ])
      }
    })
    export default {
        components: {
            stack
        },
        data () {
            return {
                someList: [],//可循环图片
                stackinit: {
                    visible: 3,//可以看见几个
                },
                imgSrc4:img4,
            }
        },
        mounted () {
            let that = this;
            setTimeout(function () {
                that.someList = [
                    {html: '<img src="/static/img/2.73cdf7e.jpg" alt="01">'},
                    {html: '<img src="/static/img/4.7d8a1e0.jpg" alt="02">'},
                    {html: '<img src="/static/img/2.73cdf7e.jpg" alt="03">'},
                    {html: '<img src="/static/img/4.7d8a1e0.jpg" alt="04">'}]
            }, 2000)
        },
        methods: {
//            子组件中监听，父组件中emit，父组件触发子组件事件
            prev () {
                this.$refs.stack.$emit('prev')
            },
            next () {
                this.$refs.stack.$emit('next')
            }
        }
    }
</script>
<style>
    .stack-wrapper {
        margin: 0 auto;
        position: relative;
        z-index: 1000;
        width: 320px;
        height: 320px;
        padding: 0;
        list-style: none;
        pointer-events: none;
    }

    .controls {
        position: relative;
        width: 200px;
        text-align: center;
        display: flex; /*Flex布局*/
        display: -webkit-flex; /* Safari */
        justify-content: space-around;
        margin: 0 auto;
        margin-top: 50px
    }

    .controls .button {
        border: none;
        background: none;
        position: relative;
        display: inline-block;
        cursor: pointer;
        font-size: 16px;
        width: 50px;
        height: 50px;
        z-index: 100;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        border-radius: 50%;
        background: #fff;
    }

    .button .next {
        display: inline-block;
        width: 10px;
        height: 5px;
        background: rgb(129, 212, 125);
        line-height: 0;
        font-size: 0;
        vertical-align: middle;
        -webkit-transform: rotate(45deg);
        left: -5px;
        top: 2px;
        position: relative;
    }

    .button .next:after {
        content: '/';
        display: block;
        width: 20px;
        height: 5px;
        background: rgb(129, 212, 125);
        -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
    }

    .button .prev {
        display: inline-block;
        width: 20px;
        height: 5px;
        background: rgb(230, 104, 104);
        line-height: 0;
        font-size: 0;
        vertical-align: middle;
        -webkit-transform: rotate(45deg);
    }

    .button .prev:after {
        content: '/';
        display: block;
        width: 20px;
        height: 5px;
        background: rgb(230, 104, 104);
        -webkit-transform: rotate(-90deg);
    }

    .controls .text-hidden {
        position: absolute;
        overflow: hidden;
        width: 0;
        height: 0;
        color: transparent;
        display: block;
    }
</style>
