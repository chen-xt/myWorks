
var code;//记录生成的字母的ASCII码值
var okCount = 0;//正确的个数
var errorCount = 0;//错误的个数
var charDiv = document.getElementById('char');

function  showChar() {
    // 能够随机生成一个字母
    code = Math.random();
    code = code * 26;
    code = Math.floor(code);
    code = code + 65;
    var char = String.fromCharCode(code);//把ASCII码的值转换成字母,65-90转换成A-Z
    charDiv.innerText = char;
}
 showChar();

//给键盘添加监听事件
window.onkeyup = function(event){
    if(event.keyCode == code){
        okCount++;
        showChar();

        //把animate.css文件中 提前定义好的动画类型 添加给charDiv
        charDiv.className = 'animated zoomIn';

        setTimeout(function(){
            charDiv.className = '';
        },500);

    }else{
        errorCount++;
        charDiv.className = 'animated shake yellow';

        setTimeout(function(){
            charDiv.className = '';
        },500);

    }

    //正确率 = 正确的/总和
    var rate = (okCount/(okCount + errorCount))*100;
    var resultStr = '正确' + okCount + '个，错误' + errorCount + '个，正确率' + rate.toFixed(2) + '%';

    var result = document.getElementById('result');
    result.innerText = resultStr;

}