
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
hour = (hour > 12) ? hour - 12: hour;

console.log(hour + ':' + minute + ':' + second);

var secondDelay = -(15 + second);
var minuteDelay = -(15 + minute) * 60 - second;
var hourDelay  = -(3 + hour) * 3600 - minute * 60 - second;
document.getElementById('second').style.animationDelay = secondDelay + 's';
document.getElementById('minute').style.animationDelay = minuteDelay + 's';
document.getElementById('hour').style.animationDelay = hourDelay + 's';
