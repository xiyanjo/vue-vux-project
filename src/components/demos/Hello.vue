<template>
  <div class="hello">
      {{ propMsg}}
      <div>888888</div>
    
  </div>
</template>

<script>
    import vm from 'Vue'
    var bus = new vm();

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      propMsg:''
    }
  },
  mounted(){
     this.onBus();
  },
  watch:{
      watchbus(){
          this.onBus();
      }
  },
  methods:{
      onBus(){
        console.log(5555)
          // 在组件 B 创建的钩子中监听事件
        bus.$on('id-selected', function (id) {
             console.log(id,77777);
            propMsg = id;
          
        })
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
