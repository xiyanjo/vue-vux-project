const MyPlugin={
    install(Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function (val) {
            console.log(val + '添加全局方法或属性i am beatufy!');
        }
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log(methodOptions + '添加实例方法i am beatufy!');
        }
        


        // 2. 添加全局资源
        Vue.directive('my-directive', {
            bind (el, binding, vnode, oldVnode) {
                // 逻辑...
            }
        })

        // 3. 注入组件；
        Vue.mixin({
            created: function () {
                // 逻辑...
            }
        })


    }
}
export{ MyPlugin}

