<template>
    <div>
        <!--<toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="Hello World" :position="position">{{ ('Basic Usage') }}</toast>-->
        <!--<group :title="('prop:text')">
            <x-switch :title="('type:success')" v-model="show7"></x-switch>
        </group>-->

        <!--<toast v-model="show7" text="提交成功" ></toast>-->
        <!--<toast v-model="show8" type="text" text="Hello World"></toast>-->

        <!--<group :title="('As a plugin(>=v0.1.3)')">
            <x-switch :title="('default')" v-model="show9" @on-change="onChange"></x-switch>
        </group>-->
    </div>
</template>



<script>
    import { Toast, Group, XSwitch, XButton } from 'vux'
    import util from '../assets/js/util.js'
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
            this.$vux.toast.show({
                text: '提交成功',
                time:'200000000',
                type:'warn'
            });
            let vuePro = this;
            setTimeout(function () {
                vuePro.$vux.toast.hide();
            },4000)

            util.countTime('30');
        }
    }
</script>