var hour = 0;
var minute = 0;
var second = 0;
var milisecond = 0;
var getHours = document.getElementById('getHour');
var getMinutes = document.getElementById('getMinute');
var getSeconds = document.getElementById('getSecond');
var getMiliSeconds = document.getElementById('getMiliSecond');
var clear;

function stopWatch(){
    clear = setInterval(function(){

        milisecond++;
        getMiliSeconds.innerHTML = milisecond
        //console.log(milisecond)
    
        if(milisecond >= 1000){
            second++;
            getSeconds.innerHTML = second;
            milisecond = 0;
        }else if(second >= 60){
            minute++;
            getMinutes.innerHTML = minute;
            second = 0;
        }else if(minute >= 60){
            hour++;
            getHours.innerHTML = hour;
            second = 0;
        }

        document.querySelector('.start').disabled = true;
    
    },1);
}

function stop(){
    clearInterval(clear);
    document.querySelector('.start').disabled = false;
}

function reset(){
     hour = 0;
     minute = 0;
     second = 0;
     milisecond = 0;
     getHours.innerHTML = '00';
     getMinutes.innerHTML = '00';
     getSeconds.innerHTML = '00';
     getMiliSeconds.innerHTML = '00';
}