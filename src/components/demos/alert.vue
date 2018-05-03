<template>
    <div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>



<script>
    import { Toast, Group, XSwitch, XButton } from 'vux'
    export default {
        components: {
            Toast,
            Group,
            XSwitch,
            XButton
        },
        methods: {
            /*showPosition (position) {
             this.position = position
             this.showPositionValue = true
             },
             onHide () {
             console.log('on hide')
             },
             onChange (val) {
             const _this = this
             if (val) {
             this.$vux.toast.show({
             text: 'Hello World',
             onShow () {
             console.log('Plugin: I\'m showing')
             },
             onHide () {
             console.log('Plugin: I\'m hiding')
             _this.show9 = false
             }
             })
             } else {
             this.$vux.toast.hide()
             }
             }*/
        },
        data () {
            return {
                /*show1: false,
                 show2: false,
                 show3: false,
                 show4: false,
                 show5: false,
                 show6: false,
                 show7: true,
                 show8: false,
                 show9: false,
                 position: 'default',
                 showPositionValue: false*/
            }
        },
        created(){
            // 显示
            this.$vux.alert.show({
                title: 'Vux is Cool',
                content: 'Do you agree?',
                onShow () {
                    console.log('Plugin: I\'m showing')
                },
                onHide () {
                    console.log('Plugin: I\'m hiding')
                }
            });
            // 隐藏
            let vuePro = this;
            setTimeout(function () {
//                vuePro.$vux.alert.hide();
            },4000)
        }
    }
</script>
<style scoped>
    li{
        height: 100px;
        width: 100px;
        background: pink;
        border: 4px solid #ccc;
    }
</style>










