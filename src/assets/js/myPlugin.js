const MyPlugin = {
    install(Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function (val) {
            console.log(val + '添加全局方法或属性i am beatufy!');
        }
        // 2. 添加全局资源--指令/过滤器/过渡
        Vue.directive('glob-directive', {//定义全局指令
            // bind：只调用一次，指令第一次绑定到元素时调用。    在这里可以进行一次性的初始化设置。
            // inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
            // update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
            // 但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
            // componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
            // unbind：只调用一次，指令与元素解绑时调用。
            bind: function (el, binding, vnode) {
                /*
                 el：指令所绑定的元素，可以用来直接操作 DOM;
                 binding：一个对象，包含以下属性：
                 name：指令名，不包括 v- 前缀。
                 value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
                 oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
                 expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
                 arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
                 modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
                 vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
                 oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。*/
                console.log('自定义指令', el, binding, vnode);
                var s = JSON.stringify;
                el.innerHTML =
                    'name: ' + s(binding.name) + '<br>' +
                    'value: ' + s(binding.value.aa) + '<br>' //指令的绑定值, 参数---支持对象
                    // + 'expression: ' + s(binding.expression) + '<br>'
                    // + 'argument: ' + s(binding.arg) + '<br>' //参数
                    // + 'modifiers: ' + s(binding.modifiers) + '<br>' //修饰符
                    // + 'vnode keys: ' + Object.keys(vnode).join(', ')//Vue 编译生成的虚拟节点
            },
            inserted: function () {
            }
        })
        // 指令 在 bind 和 update 时触发相同行为，而不关心其它的钩子。
        Vue.directive('color-swatch', function (el, binding) {
            el.style.backgroundColor = binding.value
        })
        // 3. 注入组件；
        Vue.mixin({
            created: function () {}
        })
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log(methodOptions + '添加实例方法i am beatufy!');
        }
        // 5. 全局过滤器---必须在vue实例化之前
        Vue.filter('globFilter', function (value) {
            if (!value) return '';
            value = value.toString();
            return value.toUpperCase() + '---globFilter'
        })


    }
}
export{MyPlugin}

