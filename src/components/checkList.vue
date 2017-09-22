<template>
    <div>
        <!--<checklist :title="('Basic Usage')" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></checklist>
        <div style="padding:15px;">
            <x-button @click.native="labelPosition = labelPosition === 'left' ? '' : 'left'" type="primary">切换 label 位置</x-button>
            <x-button @click.native="selectFirst" type="primary">选择第1个值</x-button>
            <x-button @click.native="selectFirstTwo" type="primary">选择前两个值</x-button>
            <x-button @click.native="selectLeft" type="primary">选择剩下值</x-button>
        </div>-->

        <!--<checklist :title="('preselect China and Japan(disabled)')" disabled label-position="left" :options="commonList" v-model="checklist002" @on-change="change"></checklist>-->

        <checklist  require :options="commonList" v-model="checklist001" :max=89 @on-change="change"></checklist>

        <!--<checklist :title="('set max=1(radio mode)')" :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>-->

        <!--<checklist :title="('set random order')" random-order :options="checklist005" v-model="checklist005Value" @on-change="change"></checklist>-->

        <!--<checklist :title="('Option Array with key and value(key must be string)')" :options="objectList" v-model="objectListValue" @on-change="change"></checklist>-->

        <!--<checklist :title="('Option is Object with InlineDesc')" :options="inlineDescList" v-model="inlineDescListValue" @on-change="change"></checklist>-->

        <!--<checklist :title="('Async list')" :max="3" :options="asyncList" v-model="asyncListValue" @on-change="change"></checklist>-->

    </div>
</template>



<script>
    import { Group, Checklist, Cell, Divider, XButton } from 'vux'
    import _ from 'lodash'

    export default {
        mounted () {
        },
        components: {
            Group,
            Checklist,
            Cell,
            Divider,
            XButton
        },
        methods: {
            change (val, label) {
                console.log('change', val, label)
            },

        },
        data () {
            return {
                commonList: [ 'China', 'Japan', 'America' ],
                checklist001: [],
            }
        }
    }
</script>

<style scoped>
    .error {
        padding-left: 15px;
        line-height: 28px;
        color: #888;
        font-size: 12px;
    }
</style>