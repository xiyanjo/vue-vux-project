<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return {
  		appMsg:'app'
  	}
  },
  methods:{
  	rootMethod(){
              console.log('我是父组件中的方法，在子组件中调用')
            }
  }
}
</script>




<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
