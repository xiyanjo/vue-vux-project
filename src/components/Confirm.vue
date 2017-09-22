<template>
  <div>
    <Group>
      <x-switch :title="'你说几点开始'" v-model="show5" ></x-switch>
    </Group>
    <br>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show5"
      show-input
      placeholder="请填写审批意见"
      ref="confirm5"
      :title="('请填写审批意见')"
      @on-cancel="onCancel"
      @on-confirm="onConfirm5"
      @on-show="onShow5"
      @on-hide="onHide">
      </confirm>
    </div>
    <br>
    
  </div>
</template>


<script>
import { Confirm, Group, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    Confirm,
    Group,
    XSwitch,
    XButton
  },
  data () {
    return {
      // show: false,
      // show2: false,
      // show3: false,
      // show4: false,
      show5: false
    }
  },
  methods: {
    onCancel () {
      console.log('on cancel')
    },
    // onConfirm (msg) {
    //   console.log('on confirm')
    //   if (msg) {
    //     alert(msg)
    //   }
    // },
    // onConfirm4 () {
    //   console.log('on confirm')
    //   this.$vux.loading.show({
    //     transition: '',
    //     text: 'processing'
    //   })
    //   setTimeout(() => {
    //     this.$vux.loading.hide()
    //     this.show4 = false
    //   }, 1000)
    // },
    onHide () {
      console.log('on hide')
    },
    // onShow () {
    //   console.log('on show')
    // },
    onShow5 () {
      this.$refs.confirm5.setInputValue('')
    },


    onConfirm5 (value) {
      this.$refs.confirm5.setInputValue('')
      this.$vux.toast.text('input value: ' + value)
    },
    // showPlugin () {
    //   this.$vux.confirm.show({
    //     title: 'Title',
    //     content: 'Content',
    //     onShow () {
    //       console.log('plugin show')
    //     },
    //     onHide () {
    //       console.log('plugin hide')
    //     },
    //     onCancel () {
    //       console.log('plugin cancel')
    //     },
    //     onConfirm () {
    //       console.log('plugin confirm')
    //     }
    //   })
    // },
    // showPlugin2 () {
    //   this.showPlugin()
    // },
    // showPlugin3 () {
    //   const _this = this
    //   this.$vux.confirm.prompt('123', {
    //     title: 'Title',
    //     onShow () {
    //       console.log('promt show')
    //       _this.$vux.confirm.setInputValue('set input value')
    //     },
    //     onHide () {
    //       console.log('prompt hide')
    //     },
    //     onCancel () {
    //       console.log('prompt cancel')
    //     },
    //     onConfirm (msg) {
    //       alert(msg)
    //     }
    //   })
    // }
  }
}
</script>