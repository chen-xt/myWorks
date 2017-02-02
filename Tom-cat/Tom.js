

var isDoingAnimation = false; //用来记录当前是否正在做动画

function action(event){

  //任意尺寸下屏幕上的一个点
   var x = event.pageX;
   var y = event.pageY;

   var POINT = {
          x1:90, x2:130, x3:234, x4:264, y1:210, y2:294, //敲击 
          x5:134, x6:226, y3:261, y4:281, //吃
          x2:130, x7:220, y5:350, y6:430, //生气
          x2:130, x8:230, y7:460, y8:540, //胃疼
          x2:130, x9:165, y9:576, y10:613,//右脚疼 
          x10:182, x11:223, y11:574, y10:613, //左脚疼
          x12:5, x13:80, y7:460, y12:600, //喝 
          x14:243, x15:274, y13:484, y14:573, //放屁  
          x16:93, x17:125, y15:361, y16:414, //砸馅饼
          x18:205, x19:250, y17:339, y18:400, //敲锣 
          x20:133, x21:217, y19:114, y20:141  //抓爪子
   }

   //获取屏幕的宽和高
   var width = document.documentElement.clientWidth;
   var height = document.documentElement.clientHeight;

    x = x * 360 / width;
    y = y * 640 / height;

   //敲击
    if( ((x>POINT.x1 && x<POINT.x2 ) || ( x>POINT.x3 && x<POINT.x4)) && (y>POINT.y1 && y<POINT.y2 )){
       
       doAnimation('knockout',80);
    }
    //吃 
    if(x>POINT.x5 && x<POINT.x6 && y>POINT.y3 && y<POINT.y4){
        doAnimation('eat',39);
    }
    //生气 
    if(x>POINT.x2 && x<POINT.x7  && y>POINT.y5 && y<POINT.y6){
        doAnimation('angry',25);
    }
    //胃疼
    if(x>POINT.x2 && x<POINT.x8 && y>POINT.y7 && y<POINT.y8){
        doAnimation('stomach',33);
    }
    //右脚疼
    if(x>POINT.x2 && x<POINT.x9 && y>POINT.y9 && y<POINT.y10){
        doAnimation('foot_right',29);
    }
    //左脚疼 
    if(x>POINT.x10 && x<POINT.x11 && y>POINT.y11 && y<POINT.y10){
        doAnimation('foot_left',29);
    }
    //喝  
    if(x>POINT.x12 && x<POINT.x13 && y>POINT.y7 && y<POINT.y12){
        doAnimation('drink',80);
    }
    //放屁
    if(x>POINT.x14 && x<POINT.x15 && y>POINT.y13 && y<POINT.y14){
        doAnimation('fart',27);
    }
    //砸馅饼  
    if(x>POINT.x16 && x<POINT.x17 && y>POINT.y15 && y<POINT.y16){
        doAnimation('pie',23);
    }
    //敲锣  
    if(x>POINT.x18 && x<POINT.x19 && y>POINT.y17 && y<POINT.y18){
        doAnimation('cymbal',12);
    }
    //抓爪子  
    if(x>POINT.x20 && x<POINT.x21 && y>POINT.y19 && y<POINT.y20){
        doAnimation('scratch',55);
    }

}

   function doAnimation(name,count) {
        if(isDoingAnimation){
            return;
        }else{
            isDoingAnimation = true;
        }

       //播放声音
       var player = document.getElementById('sounds');
       player.src = 'image/sounds/'+ name + '.m4a';
       player.play();

       var tom = document.getElementById('Tom');
       var i = 0;
       showImage();

       function showImage() {
           tom.src = 'image/' + name + '/' + name + ((i<10) ? '_0' : '_') + i + '.jpg';
           i++;
           if(i <= count){
               setTimeout(showImage,100);
           }else{
               isDoingAnimation = false;
           }
       }
   }












