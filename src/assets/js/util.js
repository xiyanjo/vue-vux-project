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
    // 去重
    deletCompeat(){
        Array.prototype.unique3 = function(){
         var res = [];
         var json = {};
         for(var i = 0; i < this.length; i++){
          if(!json[this[i].date]){
            res.push(this[i]);
            json[this[i].date] = this[i];
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

        };
    }


export default util

