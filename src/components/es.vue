<template>
    <div id="es6">
        <template>
            <div>arr --- map reduce filter forEach</div>
            <p>
                <span>map--返回个数不变</span>
            </p>
        </template>
    </div>
</template>

<script type="text/ecmascript-6">
    // 输出结果
    export default {
        name: 'es6',
        data(){
            return {}
        },
        components: {},
        mounted(){
            let arr = [1, 2, 4, 67, 23, 90];
//            console.log(this.LMap(arr));
//            console.log(this.LReduce(arr));
//            console.log(this.LFilter(arr));
            console.log(this.LForEach(arr));
        },
        methods: {
            LMap(arr){
                if (!arr instanceof Array)  return false;
                return arr.map((item)=> {
                    if (item > 10)  return item + '--new';
                    if (item <= 10) return item + '--old'
                })
            },
            LReduce(arr){
                return arr.reduce((total, num, key)=> {
//                    console.log(total,num,key);
                    return total + num;
                })
            },
            LFilter(arr){
                return arr.filter((item, key)=> {
//                    console.log(item,key);
                    if (item > 10) return item;
                })
            },
            LForEach(arr){
                let arrNew = [];
                arr.forEach((item)=> {
//                    console.log(item);
                    if (item > 10) arrNew.push(item);
                })
                return arrNew;
            }

        }
    }
</script>


