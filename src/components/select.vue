<template>
    <div id="Home">
        <select name="" id="" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
        </select>
    </div>
</template>

<script>
    import Confirm from '@/components/Confirm';
    import calendar from '@/components/calendar';

    export default {
        name:'home',
        data(){
            return {
                inputData:'',
            }
        },
        components:{
            Confirm,calendar
        },
        mounted(){
           
        },
        methods:{
        
         
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
