<template>
    <div >
        <div>设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效</div>
        <template>
            容器flex
            <div class="flex">
                <div class="cicle cicleDiv flexEnd">1flexEnd</div>
                <div class="cicle cicleDiv flexStart">2flexStart</div>
                <div class="cicle cicleDiv flexCenter">3flexCenter</div>
                <div class="cicle cicleDiv flexStart">4flexStart</div>
                <div class="cicle cicleDiv flexStart">5flexStart</div>
                <span class="cicle cicleSpan flexStart">6flexStart</span>

            </div>
        </template>

        <template>
            <span>行内元素flex</span>
            <span class="inlineFlex">
                <span class="cicle cicleSpan">1aa</span>
                <span class="cicle cicleSpan">2bb</span>
                <span class="cicle cicleSpan">3cc</span>
                <span class="cicle cicleSpan">4dd</span>
            </span>
        </template>

        <template>
            <body class="HolyGrail">
            <header>header</header>
            <div class="HolyGrail-body">
                <main class="HolyGrail-content" @mousestart="mouseStart">
                    <div>content</div>
                    <div class="InputAddOn">
                        <span class="InputAddOn-item">InputAddOn-item1</span>
                        <input class="InputAddOn-field">
                        <button class="InputAddOn-item">InputAddOn-item2</button>
                    </div>
                </main>
                <nav class="HolyGrail-nav">HolyGrail-nav</nav>
                <aside class="HolyGrail-ads">HolyGrail-ads</aside>
            </div>
            <footer>footer</footer>
            </body>
        </template>
        <template>
            <div class="Media">
                <img class="Media-figure" src="../../assets/img/1.jpg" style="width: 200px" alt="">
                <p class="Media-body">悬挂式布局</p>
            </div>
        </template>

    </div>
</template>
<script type="text/ecmascript-6">
    // 输出结果
    export default {
        name: 'flex',
        data(){
            return {}
        },
        components: {},
        methods: {
            mouseStart(){
                console.log(8888);
            }
        },
        mounted(){
        },
    }
</script>
<style scoped>
    .cicle{
        flex:0 0 20px;
        height: 20px;
        margin: 5px;
        background: pink;
        border-radius: 50%;
    }
    .cicleDiv{
        flex-basis:30%;
    }
    .cicleSpan{
    }
    .flexEnd{
        align-self: flex-end; /*项目交叉轴对齐方式*/
    }
    .flexStart{
        align-self:flex-start;
    }
    .flexCenter{
        align-self:center;
    }
    .flex {
        display: flex;
        background: #ccc;
        margin: 20px;
        padding: 20px;
        height: 200px;
        /*flex-wrap:nowrap;!*轴线换行方式*!*/
        flex-wrap:wrap;/*轴线换行方式*/
        /*flex-flow: <flex-direction> || <flex-wrap>;*/
        align-items:  baseline;
        justify-content: flex-start;

        flex-direction: column;
    }
    .inlineFlex {
        display: inline-flex;
        background: #ccc;
        padding: 20px;
        height: 100px;
        align-items:  center; /*容器交叉轴对齐方式*/
        justify-content: space-between;/*主轴对齐方向*/
    }
</style>
<style scoped>
    @media (max-width: 768px) {
        .HolyGrail-body {
            flex-direction: column;
            flex: 1;
        }
        .HolyGrail-nav,
        .HolyGrail-ads,
        .HolyGrail-content {
            flex: auto;
        }
    }
    .HolyGrail {
        display: flex;
        min-height: 40vh;
        flex-direction: column;
    }

    header,
    footer {
        flex: 1;
    }

    .HolyGrail-body {
        display: flex;
        flex: 1;
    }

    .HolyGrail-content {
        flex: 1;
        background: pink;
    }

    .HolyGrail-nav, .HolyGrail-ads {
        /* 两个边栏的宽度设为12em */
        flex: 0 0 12em;
        background: blue;
    }

    .HolyGrail-nav {
        /* 导航放到最左边 */
        order: -1;
        background: greenyellow;
    }
    /*input*/
    .InputAddOn {
        display: flex;
    }
    .InputAddOn-field {
        flex: 1;
    }
    /*悬挂式布局*/
    .Media {
        display: flex;
        align-items: flex-start;
        /*justify-content: flex-;*/
        /*flex-direction: column;*/
    }
    .Media-figure {
        margin-right: 1em;
    }
    .Media-body {
        flex: 1;
    }
</style>


