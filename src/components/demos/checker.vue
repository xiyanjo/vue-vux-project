<template>
  <div style="padding: 15px 0;">
    <div class="box">
      <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
      <checker-item value="1">'潘'</checker-item>
      <checker-item value="2">'闲'</checker-item>
      <checker-item value="3">'邓'</checker-item>
      <checker-item value="4">'小'</checker-item>
      <checker-item value="5">'驴'</checker-item>
      </checker>
      <br>
    </div>

    <divider>radioRequired</divider>
    <div class="box">
      <checker v-model="demo1Required" radio-required default-item-class="demo1-item" selected-item-class="demo1-item-selected">
      <checker-item value="1">潘</checker-item>
      <checker-item value="2">闲</checker-item>
      <checker-item value="3">邓</checker-item>
      <checker-item value="4">小</checker-item>
      <checker-item value="5">驴</checker-item>
      </checker>
      <br>
      <br>
    </div>

    <div class="box">
       <checker v-model="demo1Checkbox" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item :value="'1'">白</checker-item>
        <checker-item :value="'2'">富</checker-item>
        <checker-item :value="'3'">美</checker-item>
      </checker>
      <br>
      <br>
    </div>

   <!--  <div class="box">
     <checker v-model="demo1CheckboxMax" :max="2" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
       <checker-item value="1">1</checker-item>
       <checker-item value="2">2</checker-item>
       <checker-item value="3">3</checker-item>
     </checker>
     <br>
     <br>
   </div>
   
   <div class="box">
     <checker v-model="demo2" default-item-class="demo2-item" selected-item-class="demo2-item-selected">
       <checker-item value="1">1</checker-item>
       <checker-item value="2">2</checker-item>
       <checker-item value="3">3</checker-item>
     </checker>
     <br>
     <br>
   </div> -->

   <!--  <div class="box">
      <checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
       <checker-item value="one">
         <img src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff" alt="">
       </checker-item>
       <checker-item value="two">
         <img src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">
       </checker-item>
       <checker-item value="three">
         <img src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff" alt="">
       </checker-item>
     </checker>
     <br>
     <br>
   </div> -->

    <!-- <group>
      <cell :title="'Select color'" :value="demo4" is-link @click.native="showPopup=true"></cell>
    </group> -->
   <!--  <div v-transfer-dom>
     <popup v-model="showPopup" class="checker-popup">
       <div style="padding:10px 10px 40px 10px;">
         <p style="padding: 5px 5px 5px 2px;color:#888;">Colors</p>
         <checker
         v-model="demo4"
         default-item-class="demo4-item"
         selected-item-class="demo4-item-selected"
         disabled-item-class="demo4-item-disabled">
           <checker-item :value="$t('花跟叶')" @on-item-click="onItemClick"> {{ $t('花跟叶') }} </checker-item>
           <checker-item :value="$t('鸟与树')" @on-item-click="onItemClick"> {{ $t('鸟与树') }} </checker-item>
           <checker-item :value="$t('我和你')" @on-item-click="onItemClick"> {{ $t('我和你') }} </checker-item>
           <checker-item :value="$t('全套礼品装')" disabled @on-item-click="onItemClick"> {{ $t('全套礼品装') }} </checker-item>
         </checker>
       </div>
     </popup>
   </div> -->

   <!--  <checker
   v-model="demo5"
   default-item-class="demo5-item"
   selected-item-class="demo5-item-selected"
   >
     <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">￥{{i*300}}</checker-item>
   </checker>
   <br/>
   <checker
   v-model="demo6"
   type="checkbox"
   default-item-class="demo5-item"
   selected-item-class="demo5-item-selected"
   >
     <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">{{[$t('good'), $t('nice'),$t('awesome')][i - 1]}}</checker-item>
   </checker> -->
  </div>
</template>



<script>
import { Checker, CheckerItem, Divider, Group, Cell, Popup, TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Checker,
    CheckerItem,
    Divider,
    Group,
    Cell,
    Popup
  },
  methods: {
    onItemClick (value, disabled) {
      console.log(value, disabled)
      if (!this.disabled) {
        this.showPopup = false
      }
    }
  },
  data () {
    return {
      items1: [{
        key: '1',
        value: 'A'
      }, {
        key: '2',
        value: 'B'
      }, {
        key: '3',
        value: 'C'
      }],
      demo1: '',
      demo1Required: '',
      demo11: null,
      demo12: {key: '2', value: 'B'},
      demo21: null,
      demo22: [{key: '2', value: 'B'}],
      demo23: null,
      demo1Checkbox: ['2', '1'],
      // demo1Checkbox: [2, 1],
      demo1CheckboxMax: ['2', '3'],
      demo2: '2',
      demo3: '',
      showPopup: false,
      demo5: 1,
      demo6: [2, 3]
    }
  }
}
</script>

<style scoped>
.box {
  padding: 0 15px;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.demo2-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.demo2-item-selected {
  border-color: green;
}
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8B8AEE;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  /*background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;*/
  border-color: #ff4a00;
}
</style>