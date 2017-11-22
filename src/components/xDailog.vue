<template>
  <div style="height: 1000px">

    <group>
      <x-switch v-model="show" title="Toggle"></x-switch>
      <x-switch v-model="show2" title="use .sync"></x-switch>
      <x-switch v-model="showToast" title="show toast"></x-switch>
      <x-switch v-model="showHideOnBlur" title="$hide on clicking mask"></x-switch>
      <x-switch v-model="showDialogStyle" title="Toggle" inline-desc="custom dialog style"></x-switch>
    </group>

    <div v-transfer-dom>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div style="padding:15px;">
          <x-button @click.native="doShowToast" type="primary">show toast</x-button>
        </div>
        <div @click="showToast=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo">
        <div class="img-box">
            <div>11111111</div>
          <!-- <img src="../assets/demo/dialog/01.jpg" style="max-width:100%"> -->
        </div>
        <div @click="show=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog :show.sync="show2" class="dialog-demo">
        <div class="img-box">
            <div>2222222</div>
          <!-- <img src="../assets/demo/dialog/01.jpg" style="max-width:100%"> -->
        </div>
        <div @click="show2=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="img-box">
            <div>3333333看见覅睡觉地方睡觉地方祭祀的风景四点就覅上的飞机上的飞机上飞机圣诞节覅危机覅时间覅说手机发了睡觉地方历史的减肥了世界的覅类似的经历覅精神多了覅就是地方就是的立法精神低价覅说的减肥了四点就覅来说十分理解的是立法精神动力飞机上了对方就算了地方就是两地分居历史地减肥就算了覅就是地方就是领导发就算了地方就是独立飞机上的风景上帝就分手地方就是地方的时间覅说的减肥手机里的覅就是的立法精神多了附近水立方集散地时间地方的健身房里就是的立法精神地理附近及司法的降低首付是地方技术的几时放假代理商及法律上的就发生地理放假了啥地方几时来的时间fie睡觉了福建省地方集散地家斯蒂芬放假了说的附近设立的风景</div>
          <!-- <img src="../assets/demo/dialog/01.jpg" style="max-width:100%"> -->
        </div>
        
      </x-dialog>

    </div>
    <div @click="showHideOnBlur=false">
          <span class="vux-close"></span>
        </div>


    <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
        <p style="color:#fff;text-align:center;" @click="showDialogStyle = false">
          <span style="font-size:30px;">HELLO WORLD</span>
          <br>
          <br>
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </p>
      </x-dialog>
    </div>

    <group style="padding-top: 300px">
      <x-switch v-model="showScrollBox" title="long long content"></x-switch>
    </group>

    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox" class="dialog-demo">
        <p class="dialog-title">Long content</p>
        <div class="img-box" style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;">
          <p v-for="i in 20">{{i}}</p>
        </div>
        <div @click="showScrollBox=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

  </div>
</template>
<script>
import { XDialog, XButton, Group, XSwitch, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    XButton,
    Group,
    XSwitch
  },
  methods: {
    doShowToast () {
      this.$vux.toast.show({
        text: 'toast'
      })
    }
  },
  data () {
    return {
      show: false,
      show2: false,
      showToast: false,//提示绿框
      showHideOnBlur: true,//全文本
      showScrollBox: false,//带滚动条文本
      showDialogStyle: false//全屏
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/close';
.dialog-demo {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>