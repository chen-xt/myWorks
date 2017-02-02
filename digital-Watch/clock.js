
   setInterval(function(){
        //获取当前的时间日期对象
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
      
        hour = (hour <10) ? '0'+hour : hour;
        second = (second <10) ? '0'+second : second;
        minute = (minute <10) ? '0'+minute : minute;

        var year = now.getFullYear();
        var month = now.getMonth()+1;//0-11
        var date = now.getDate();
        var week = now.getDay(); //0-6

        //对week的显示格式进行处理，用数组
        var weekArray = ['日','一','二','三','四','五','六'];
        week = weekArray[week];

        var time1 = document.getElementById('time1');
        time1.innerText = hour + ':'+ minute + ':'+second;
        var time2 = document.getElementById('time2');
        time2.innerText = year + '年'+ month + '月' + date + '日' + ' ' + '星期'+ week;
    },1000);

     //for循环，让代码执行有限的次数
     for(var i=0;i<10;i++){
         console.log(i);
     }


