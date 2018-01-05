let util ={
    visitTime:new Date(),
    // 将时间划分为时间段
    countTime(min){
        var arrTime ={},
            step =min,
            keyTime = 0,
            h = 0, m=0 ,
            totalCount = 24*60,
            proTime = '';
        for (var i=0;i<totalCount/step;i++){
            proTime = this.formatSup(h)+':'+ this.formatSup(m);
            m +=step;
            if(m>=60){
                h +=1;
                m = m%60;
            }
            arrTime[keyTime] = (proTime +'~' +this.formatSup(h)+':'+ this.formatSup(m));
            keyTime +=step;
        }
        this.getPreDay( );
        console.log(arrTime);
    },
    formatSup(num){
        if(num ==0){
            num = '00';
        }else if(num <10){
            num ='0'+num;
        }
        return num;
    },
    // 获取前后一天
    getPreDay( ){
        var nowDay = new Date( );
        var preDayTime = nowDay.getTime()-24*60*60*1000;
        var nextDayTime = nowDay.getTime()+24*60*60*1000;
        var preDay = new Date(preDayTime);
        var nextDay = new Date(nextDayTime);
        console.log(preDay,nextDay);
        return  preDay;
    },
    // 获取页面停留事件
    pageStayed(second){
        var url = location.pathname.substring(1),
            leaveTime = new Date(),
            stayTime = leaveTime.getTime() - this.visitTime.getTime();
    },
    // 将时间戳转为日期
    timestampToDate(time){
         var date = new Date(time),
         y =date.getFullYear(),
         m = date.getMonth() +1,
         d = date.getDate();
         return y+'-'+m+'-'+d
    },
     /**
      * 去重思想
      * 建立一个空数组，将要去重的数组中的每一项作为key存到空数组中并赋值
      * 当空数组中有该key时，不对其操作，没有该key时，作为新的key加入到空数组中
      */
    deletCompeat(){
        Array.prototype.unique3 = function(){
            var res = [];
            var json = {};
                for(var i = 0; i < this.length; i++){
                    if(!json[this[i].date]){
                      res.push(this[i]);
                      json[this[i].date] = this[i];//json数组增加 this[i].date 属性并赋值
                    }else{
                      json[this[i].date].name = json[this[i].date].name + this[i].name;
                    }
                }
                 return res;
        }
        var arr = [
                {
                    date:"1",
                    name:"来歌"
                },
                {
                    date:"2",
                    name:"鹿晗"
                },
                {
                    date:"1",
                    name:"艳娇"
                },
            ];
        console.log(arr.unique3());
    },
    /**
     * 获取地址栏参数
     */
    getUrlParam(key){
        let url=location.href; //取得整个地址栏
        let params = {};
        let search = url.substring(url.indexOf('?')+1);
        if(!search){
            return '';
        }
        let s = search.split("&"); //各个参数放到数组里
        /*for(var i=0;i < arr.length;i++){ 
            num=arr[i].indexOf("="); 
            if(num>0){ 
                 name=arr[i].substring(0,num);
                 value=arr[i].substr(num+1);
                 this[name]=value;
            } 
        } */
        s.forEach(function (i){
            let k = i.substring(0,i.indexOf('='));
            let p = i.substring(i.indexOf('=')+1);
            params[k]=p;
        })
        return params[key] || '';
    } 
}   


export default util

