<template>
    <div id="form">

        <template>
            <div style="color: mediumvioletred;">我是vue的form操作</div>
            <router-link class="link" to="/form/input"> input</router-link>
            <router-link class="link" to="/form/inputList"> inputList</router-link>
            <router-link class="link" to="/form/select"> select</router-link>
            <router-link class="link" to="/form/seletMult"> seletMult</router-link>
            <router-link class="link" to="/form/vueForm"> vueForm</router-link>
            <router-link class="link" to="/form/vuxForm"> vuxForm</router-link>
        </template>
        <template>
            <router-view></router-view>
            <router-view style="width: 200px;float: left" name="a"></router-view>
            <router-view style="width: 200px;float: right" name="b"></router-view>
        </template>


    </div>
</template>

<script type="text/ecmascript-6">

    // 输出结果
    export default {
        name: 'form',
        data(){
            return {}
        },
        components: {},
        mounted(){

        },
        methods: {}
    }
</script>


