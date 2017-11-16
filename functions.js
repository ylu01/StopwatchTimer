/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t, tm;
    var countDown = document.getElementById("countdown");

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    
    var shownTime;
    var sh, sm, ss;
    if(hours.toString().length === 1){
        sh = "0" + hours;
    }
    else if(hours.toString().length === 0){
        sh = "00";
    }
    else{
        sh = hours;
    }
    
    if(minutes.toString().length === 1){
        sm = "0" + minutes;
    }
    else if(minutes.toString().length === 0){
        sm = "00";
    }
    else{
        sm = minutes;
    }
    
    if(seconds.toString().length === 1){
        ss = "0" + seconds;
    }
    else{
        ss = seconds;
    }
    shownTime = sh + ":" + sm + ":" + ss;
    h1.textContent = shownTime;
    timer();
}

function minus() {
    seconds--;
    if (seconds < 0) {
        if(hours >= 0 && minutes !== 0){
            seconds = 59;
            minutes--;
            if(minutes === -1){
                if(hours !== 0){
                    hours--;
                }
                minutes = 59;
            }
        }
        if(minutes === 0){
            if(hours > 0){
                minutes = 60;
                hours--;
            }
        }
        
        
    }
    var shownTime;
    var sh, sm, ss;
    if(hours.toString().length === 1){
        sh = "0" + hours;
    }
    else if(hours.toString().length === 0){
        sh = "00";
    }
    else{
        sh = hours;
    }
    
    if(minutes.toString().length === 1){
        sm = "0" + minutes;
    }
    else if(minutes.toString().length === 0){
        sm = "00";
    }
    else{
        sm = minutes;
    }
    
    if(seconds.toString().length === 1){
        ss = "0" + seconds;
    }
    else{
        ss = seconds;
    }
    shownTime = sh + ":" + sm + ":" + ss;
    h1.textContent = shownTime;
    //h1.textContent = (hours) + ":" + (minutes ? (minutes  > 9 ? minutes  : "0" + minutes ) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    //alert(minutes);
    timerMinus();
    }
    function timerMinus() {
        //alert(seconds);
    tm = setTimeout(minus, 1000);
    document.getElementById("countdown").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
}
    
function timer() {
    t = setTimeout(add, 1000);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}


/* Start button */
document.getElementById("stop").disabled = true;
start.onclick = timer;
//countDown.onclick=timerMinus;




/* Stop button */
stop.onclick = function(){
    clearTimeout(t);
    clearTimeout(tm);
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("countdown").disabled = false;
};

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
};

function setTime(){
    var cdTime;
    alert("wtf");
    if((document.getElementById("hours").value).toString().length === 1){
        hours = "0" + document.getElementById("hours").value;
    }
    else if((document.getElementById("hours").value).toString().length === 0){
        hours = "00";
    }
    else{
        hours = document.getElementById("hours").value;
    }
    
    
   if((document.getElementById("minutes").value).toString().length === 1){
        minutes = "0" + document.getElementById("minutes").value;
    }
    else if((document.getElementById("minutes").value).toString().length === 0){
        minutes = "00";
    }
    else{
        minutes = document.getElementById("minutes").value;
    }
    
     if((document.getElementById("seconds").value).toString().length === 1){
        seconds = "0" + document.getElementById("seconds").value;
    }
    else if((document.getElementById("seconds").value).toString().length === 0){
        seconds = "00";
    }
    else{
        seconds = document.getElementById("seconds").value;
    }
    cdTime = hours + ":" + minutes + ":" + seconds;
    h1.textContent = cdTime;
    //alert(cdTime);
    //alert(cdTime);
}
