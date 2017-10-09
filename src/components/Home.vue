<template>
    <div id="Home">
        <router-link class="link" to="/confirm"> confirm</router-link>
        <router-link class="link" to="/HelloFromVux"> HelloFromVux</router-link>
        <router-link class="link" to="/Auditing"> Auditing</router-link>
        <router-link class="link" to="/toast"> toast</router-link>
        <router-link class="link" to="/actionsheet"> actionsheet</router-link>
        <router-link class="link" to="/alert"> alert</router-link>
        <router-link class="link" to="/checkList"> checkList</router-link>
        <router-link class="link" to="/checkIcon"> checkIcon</router-link>
        <router-link class="link" to="/Parent"> Parent</router-link>
        <router-link class="link" to="/vueData"> vueData</router-link>
        <router-link class="link" to="/input"> input</router-link>
    </div>
</template>

<script>
    import Confirm from '@/components/Confirm';

    export default {
        name:'home',
        data(){
            return {

            }
        },
        components:{
            Confirm,
        }
    }
</script>

<style lang="less">
.link{
    line-height: 24px;
    background: pink;
    padding: 0 5px;
    margin: 4px 0;
    display: block;
}
</style>
