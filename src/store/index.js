// console.log('es6',this);

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*const state = {
    count: 1,//getters例子
    exampComputed: 0,//mutations以及actions 例子
}*/

/** 用一个函数来声明模块状态-----重用
 * let state1 = state; //state1内的值不受state中值改变影响
 */
const state = ()=>{
    return {
        count: 1,//getters例子
        exampComputed: 0,//mutations以及actions 例子
    }
}
let state1 = state;
setTimeout(()=>{
    console.log(state1());
},6000)
// getters---store 的计算属性  --- 返回值被依赖缓存，依赖发生改变重新计算
const getters = {
    count: state=> {
        return state.count += 100;//原有基础上加100
    }
}

// 改变store中数据的方法--同步
const mutations = {
    add(state, n){
        state.exampComputed += n;
    },
    reduce(state, n){
        state.exampComputed -= n;
    },
    double(state){
        state.exampComputed *= 2;
    },
}

// 异步改变状态--调用mutations--改变状态
const actions = {
    addAction(context){
        console.log(context);//content和store具有相同的属性和方法
        context.commit('add', 10)
    },
    /*  reduceAction({commit}){
     setTimeout(()=>{
     commit('reduce');
     },1000)
     },*/
    doubleAction({commit}){
        commit('double');
    },
    reduceAction({commit}){
        return new Promise((resolve, reject) => {
            let reduceCount = 1;
            setTimeout(() => {
                commit('reduce', reduceCount);
                resolve(reduceCount);
            }, 1000)
        })
    },
    // 异步嵌套
    actionB ({dispatch, commit}) {
        return dispatch('reduceAction').then(() => {
            commit('double');
        })
    }
}

export default new Vuex.Store({
    // strict: true,//非mutations引起的改变都报错，深度监测状态树来检测不合规的状态变更 仅开发
    state, mutations, getters, actions
});