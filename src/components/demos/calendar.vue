<template>
  <div>
    <!-- <group>
      <calendar :readonly="readonly" v-model="demo1"  disable-past placeholder="placeholder" @on-show="log('show')" @on-hide="log('hide')"></calendar>
    </group>
    
    <div style="padding:15px;">
      <x-button type="primary" @click.native="readonly = !readonly">343434</x-button>
    </div>
    
    <group>
      <calendar v-model="demo2"  disable-past></calendar>
    </group>
    
    <group>
      <calendar @on-change="onChange" v-model="demo3" disable-future></calendar>
    </group>
    
    <group>
      <calendar @on-change="onChange" v-model="demo4"  show-popup-header  disable-future></calendar>
    </group>
    
    <group>
      <calendar placeholder="placeholder" @on-change="onChange" v-model="demo5"   disable-future></calendar>
    </group> -->

     <group>
      <calendar disable-weekend is-disabled :display-format="displayFormat" title='99999' @on-change="onChange" v-model="demo6" ></calendar></calendar>
      <cell-box align-items="flex-start">
        <span class="selected-days">value:</span>
        <div>
          <badge v-for="day in demo6" :text="day" :key="day" style="margin-right:10px;"></badge>
        </div>
      </cell-box>
    </group>

     <group>
      <calendar disable-weekend :display-format="displayFormat" :placeholder="'0000'" @on-change="onChange" v-model="demo6" :title="'禁止使用未来'" 
      :popup-header-title="'3232'"></calendar>
      <cell-box align-items="flex-start">
        <span class="selected-days">value:</span>
        <div>
          <badge v-for="day in demo6" :text="day" :key="day" style="margin-right:10px;"></badge>
        </div>
      </cell-box>
    </group>
    <div style="padding:15px;">
      <x-button type="primary" @click.native="demo6 = []">89898</x-button>
    </div>
  </div>
</template>


<script>
import { Group, Calendar, Cell, Badge, CellBox, XButton } from 'vux'
export default {
  components: {
    Calendar,
    Group,
    Cell,
    Badge,
    CellBox,
    XButton
  },
  data () {
    return {
      readonly: false,
      demo1: '',
      demo2: 'TODAY',
      demo3: 'TODAY',
      demo4: 'TODAY',
      demo5: [],
      demo6: [],
      displayFormat (value, type) {
         console.log(66666,value);
        if (type === 'string') {
          return value
        } else {
          return value.length ? (value.length + ' days') : ''
        }
      }
    }
  },
  methods: {
    log (str) {
      console.log(str)
    },
    onChange (val) {
      console.log('on change', val)
      const tmpl = addrs => 
      `<table> ${addrs.map(addr => `<tr><td>${addr.first}</td></tr><tr><td>${addr.last}</td></tr>`).join('')}
      </table>`;
      const data = [
          { first: '<Jane>', last: 'Bond' },
          { first: 'Lars', last: '<Croft>' },
      ];

      console.log(tmpl(data));
    }
  }
}
</script>

<style scoped>
.selected-days {
  color: #999;
  width: 90px;
}
</style>