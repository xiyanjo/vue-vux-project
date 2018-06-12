<template>
    <div class="parent">

        <template >
            <div class="strongDes">以下为父组件原来数据</div>
            <div>{{todo}}</div>
        </template>

        <template>
            <div style="margin-top:30px">以下为组件内容</div>
            <!-- 只传一个数组 -->
            <div class="strongDes" style="margin-top:30px">子组件改变引用类型数据 影响父组件中数据</div>
            <h3 class="strongDes">a-b-c 从a中传递数据到c，同时监听c中事件</h3>
            <Children ref="children" :todo="todo"
                :myMsg="myMsg"
                :childMsg.sync="myMsg"
                :foods='faFoods'
                
                @childrenCom="childrenEve"
                @up="change" 
                @childCom="childEve"
                @input="inputChild"
                @update:childMsg="updateChild">
            </Children>

            <template>
                <div class="strongDes">.sync语法糖功能----子组件中数据改变，同步到父组件中数据</div>
                <div> ref和v-for 一起使用返回的是数组</div>
                <div v-for="refData in refDatas">  
                  <child  :ref="refData.ind" @input="inputChild" :childMsg.sync="myMsg">{{refData.ind}}</child>   
                </div>
            </template>
            
            <template>
                <div class="strongDes" style="margin-top:30px">以下为自定义事件表单控件</div>  
                <currency-input v-model="price"></currency-input>
            </template>

            <my-component></my-component>  
        </template>
          <!-- .native组件根上监听事件 -->
        <template>
          <base-input v-on:focus.native="onFocus" :value=true></base-input>
          <base-input-listener v-on:focus.native="onFocus" :value=false></base-input-listener>
        </template>

        <!-- is动态组件 -->
        <template>
          <div>
            <button
              v-for="tab in tabs"
              v-bind:key="tab"
              v-bind:class="['tab-button', { active: currentTab === tab }]"
              v-on:click="currentTab = tab"
            >{{ tab }}</button>
            <keep-alive>
              <component v-bind:is="currentTabComponent" class="tab"  keep-alive></component> 
            </keep-alive>
          </div>
        </template>

        <!-- 自定义指令 -->
        <template>
          <h5>自定义指令--插入dom前的事件</h5>
          <input v-focus>
        </template>

      

    </div>
</template>

<script>
    import Children from '@/components/faChildren/Children.vue'
    import child from '@/components/faChildren/child.vue'
    import Vue from 'vue';
  
    export default {
        name: 'hello',
        components:{Children,child},
        data () {
            return {
                myMsg:'P-msg',
                childData:'',
                size:'size',
                todo: {
                  name: 'Learn Vue',
                  size: 'Todo.size',
                  // myMsg:'第二个'
                },
                price:'',
                faFoods:[{'id':'1','text':'土豆丝'},{'id':'2','text':'黄瓜'},{'id':'3','text':'西红柿'}],//作用域插槽
                // tab切换
                currentTab: 'Home',
                tabs: ['Home', 'Posts', 'Archive'],
                refDatas:[{ind:'refFor1'},{ind:'refFor2'}]
            }
        },
        // 局部指令
        directives: {
          focus: {
            // 指令的定义--可选择钩子函数
            inserted: function (el) {
              el.focus()
            }
          }
        },
        computed: {
          currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
          }
        },
        methods:{
            onFocus(){
                console.log('.native');
            },
            // children组件开始
            childrenEve(){
                 console.log('Children.vue')
            },
            change(data) {
                this.childData = data;
                console.log('children event and get data',this.childData);
            },
            // children组件结束
            // child组件开始
            childEve(){
                console.log('Child.vue')
            },
            // 监听child事件
            inputChild(){
                console.log('listen child',this.myMsg);
            },
            updateChild(data){
                console.log('update:childMsg 带冒号的事件监听',data);
            },
            // child组件结束  
        },
        created(){
              // 在此处调用时未渲染，报错 // this.useChildrenEvent();// 调用子组件中事件
        },
        mounted(){
              console.log('我是子组件中的数据' ,this.$refs.children.msg)
                this.$refs.children.childrenEvent();// 调用子组件中事件
                this.$refs.refFor1.myMsg = '.refFor1';
                this.$refs.refFor2.myMsg = '.refFor2';
                console.log(3333,this.$refs.child,this.$refs.children,this.$refs.refFor1,this.$refs.refFor2);
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .strongDes{
      color: pink;
    }
    .tab-button {
      padding: 6px 10px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border: 1px solid #ccc;
      cursor: pointer;
      background: #f0f0f0;
      margin-bottom: -1px;
      margin-right: -1px;
    }
    .tab-button:hover {
      background: #e0e0e0;
    }
    .tab-button.active {
      background: #e0e0e0;
    }
    .tab {
      border: 1px solid #ccc;
      padding: 10px;
    }
</style>
