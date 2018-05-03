<template>
  <div>
    <!--checkList-->
    <checklist :title="('Basic Usage')" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></checklist>
   
    <checklist :title="('handle errors')" required :options="commonList" show-error v-model="checklist0011" @on-change="change" @on-error="onError" @on-clear-error="onNoError" name="demo1" :max="2">
      <p slot="footer" v-show="error" class="error">{{error}}</p>
    </checklist>
    <checklist :title="('preselect China and Japan(disabled)')" disabled label-position="left" :options="commonList" v-model="checklist002" @on-change="change"></checklist>

    <checklist :title="('set max=2')" :options="commonList" v-model="checklist003" :max=2 @on-change="change"></checklist>

    <checklist :title="('set random order')" random-order :options="checklist005" v-model="checklist005Value" @on-change="change"></checklist>

    <checklist :title="('Option Array with key and value(key must be string)')" :options="objectList" v-model="objectListValue" @on-change="change"></checklist>

    <checklist :title="('Option is Object with InlineDesc')" :options="inlineDescList" v-model="inlineDescListValue" @on-change="change"></checklist>

    <checklist :title="('Async list')" :max="3" :options="asyncList" v-model="asyncListValue" @on-change="change"></checklist>

    <divider>Reference</divider>
    <group title="See also">
      <cell title="Checker" value="with which you can custom any style" is-link link="/component/checker"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Checklist, Cell, Divider, XButton } from 'vux'
import _ from 'lodash'

export default {
  mounted () {
    setTimeout(() => {
      this.asyncList = ['A', 'B', 'C', 'D']
    }, 3000)
  },
  components: {
    Group,
    Checklist,
    Cell,
    Divider,
    XButton
  },
  methods: {
    change (val) {
      console.log('change', val)
    },
    onError (errors) {
      console.log(errors)
      this.error = errors
    },
    onNoError () {
      this.error = null
    },
    selectFirst () {
      this.checklist001 = ['China']
    },
    selectFirstTwo () {
      this.checklist001 = ['China', 'Japan']
    },
    selectLeft () {
      const left = _.without.apply(_, [this.commonList].concat(this.checklist001))
      this.checklist001 = left
    }
  },
  data () {
    return {
      labelPosition: '',
      error: '',
      commonList: [ 'China', 'Japan', 'America' ],
      checklist001: [],
      checklist0011: [],
      checklist002: [ 'China', 'Japan' ],
      checklist003: [ 'China', 'Japan' ],
      checklist005: [ '01', '02', '03' ],
      checklist005Value: [],
      objectList: [{key: '1', value: '001 value'}, {key: '2', value: '002 value'}, {key: '3', value: '003 value'}],
      objectListValue: ['1', '2'],
      inlineDescList: [
        {key: '1', value: 'tiger is good', inlineDesc: 'Tiger is the king of mountain'},
        {key: '2', value: 'lion is better', inlineDesc: 'Lion is the king of woods'},
        {key: '3', value: 'camel is best, no inline-desc'}
      ],
      inlineDescListValue: [1],
      asyncList: [],
      asyncListValue: []
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
