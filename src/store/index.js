// console.log('es6',this);

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    count:1
}

// 改变store中数据的方法
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count-=1;
    }
}
export default new Vuex.Store({
    state,mutations
});