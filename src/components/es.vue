<template>
    <div id="es6">
        <template>
            <div>arr --- map reduce filter forEach</div>
            <p>
                <span>map--返回个数不变</span>
            </p>
            <div> class 构造函数</div>
        </template>


        <template>
            <button ref="btn" >我是按钮</button>
            <input type="text" ref="inp" value="inpppp">
        </template>
    </div>
</template>

<script type="text/ecmascript-6">
    import promiseEvent from '@/assets/js/promiseJo.js'
    /**
     * 老的继承
     /*
     function OldUser(name) {
        this.name = name;
    }
     OldUser.prototype.say =()=>{
        console.log(this.name);
    }
     function VipUser(name,level) {
        OldUser.call(this,name);
        this.level = level;
        console.log(this,this.name,this.level);
    }
     VipUser.prototype = new OldUser();
     VipUser.prototype.constructor = VipUser;
     VipUser.prototype.sayLevel = ()=>{
//        箭头函数的this为vue
//        console.log(this,this.level);
    };
     let v1 = new VipUser('v1','1000');
     v1.say();
     v1.sayLevel();
     setTimeout(function () {
//        this为window
    },500)
     setTimeout(()=> {
//            `this为vue`
    },1000)*/
    /**
     * class关键字，构造器和类分开
     * class里直接添加方法
     */
    class User{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        showName(){
            console.log(`${this.name}--${this.age}`);
        }
    }
    export default {
        name: 'es6',
        data(){
            return {}
        },
        components: {},
        created(){
            this.Lpromise();
            let arr = [1, 2, 4, 67, 23, 90];
//            console.log(this.LMap(arr));
//            console.log(this.LReduce(arr));
//            console.log(this.LFilter(arr));
//            console.log(this.LForEach(arr));
//            this.LClass();
        },
        mounted(){
//            console.log('refs3--',this.$refs.btn);//挂载的时候才能使用在vue中取dom元素
//            console.log('####',this.$refs.inp.value);

        },
        methods: {

            /* Array attr*/
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
            },

            /* class-toObject*/
            LClass(){
                let users = new User('aaclass',18);
                users.showName();
            },


            /* promise-start*/
            resolveEve(res){
                console.log('aaa',res);
            },
            rejectEve(res){
                console.log(2,res);
            },
            Lpromise(){
//                可以传递参数，有判断条件的promise
                promiseEvent(1).then((res)=>{
                    this.resolveEve(res);
                })
                /*Promise.all([Promise.reject('ff'),promiseEvent(11)])
                    .then((res)=>{
                        console.log('all-success',res);
                    },()=>{
                        console.log('fail','error');
                    })
                    .catch((error)=>{
                        console.log('error-all',error);
                    })*/

            },
            /* promise-end*/

        }
    }
</script>


