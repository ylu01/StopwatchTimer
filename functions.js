/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    countdownStop = document.getElementById('countdownStop'),
    clear = document.getElementById('clear'),
    countdown = document.getElementById("countdown"),
    seconds = 0, minutes = 0, hours = 0,
    t, tm;
    var countDown = document.getElementById("countdown");

function setDropdownHours(x){
    var hourNode = document.createElement("a");
    hourNode.setAttribute("href", "#");
    hourNode.setAttribute("id","h"+ x);
    hourNode.setAttribute("onclick", "setTimeText('h',"+x + ")");
    var text = document.createTextNode(x);
    hourNode.appendChild(text);
    document.getElementById("hourSelectWrapper").appendChild(hourNode);
}
function setDropdownMinutes(x){
    var hourNode = document.createElement("a");
    hourNode.setAttribute("href", "#");
    hourNode.setAttribute("id","m"+ x);
    hourNode.setAttribute("onclick", "setTimeText('m',"+x + ")");
    var text = document.createTextNode(x);
    hourNode.appendChild(text);
    document.getElementById("minutesSelectWrapper").appendChild(hourNode);
}
function setDropdownSeconds(x){
    var hourNode = document.createElement("a");
    hourNode.setAttribute("href", "#");
    hourNode.setAttribute("id","s"+ x);
    hourNode.setAttribute("onclick", "setTimeText('s',"+x + ")");
    var text = document.createTextNode(x);
    hourNode.appendChild(text);
    document.getElementById("secondsSelectWrapper").appendChild(hourNode);
}


function set(value){
    if(value === "h"){
        for(var count = 0; count <= 60; count++){
        setDropdownHours(count);
    }
        
    }
    else if(value === "m"){
        for(var count1 = 0; count1 <= 60; count1++){
        setDropdownMinutes(count1);
    }
    }
    else if(value === "s"){
        for(var count2 = 0; count2 <= 60; count2++){
        setDropdownSeconds(count2);
    }
    }
    
}
set("h");
set("m");
set("s");


function setTimeText(timeUnit, value){ //pass in h,m or s
    //document.getElementbyId("timeText").innerHTML
    var originalText = document.getElementById("timeText").innerHTML;//should be "00:00:00"
    var tempValue = value.toString();
    if(timeUnit === "h"){
        
        if(tempValue.length === 1){
            tempValue = "0" + value;
            originalText = originalText.substr(2);
            originalText = tempValue + originalText;
            
            document.getElementById("timeText").innerHTML = originalText;
            hours = "0" + value;
        }
        else if(tempValue.length === 2){
            originalText = originalText.substr(2);
            originalText = tempValue + originalText;
            document.getElementById("timeText").innerHTML = originalText;
            hours = value;
            
        }
        
    }
    
    else if(timeUnit === "m"){
        var tempSeconds = originalText.substr(6,8);
        var tempHours = originalText.substr(0,2);
        if(tempValue.length === 1){
            tempValue = "0" + value;
            originalText = tempHours +":" +  tempValue + ":" + tempSeconds;
            
            document.getElementById("timeText").innerHTML = originalText;
            minutes = "0" + value;
        }
        else if(tempValue.length === 2){
            originalText = tempHours +":" +  tempValue + ":" + tempSeconds;
            document.getElementById("timeText").innerHTML = originalText;
            minutes = value;
        }
        
    }
    
    else if(timeUnit === "s"){
        var tempTime = originalText.substr(0,6);
        if(tempValue.length === 1){
            tempValue = "0" + value;
            originalText = tempTime + tempValue;
            
            document.getElementById("timeText").innerHTML = originalText;
            seconds = "0" + value;
        }
        else if(tempValue.length === 2){
            originalText = tempTime + tempValue;
            document.getElementById("timeText").innerHTML = originalText;
            seconds = value;
        }
        
    }
}












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
        if(document.getElementById("time").innerHTML === "00:00:00"){
            alert("please set a time first.");
        }
        else{
            document.getElementById("countdown").disabled = true;
            document.getElementById("countdownStop").disabled=false;
            tm = setTimeout(minus, 1000);
        }
        
    //document.getElementById("countdown").disabled = true;
    //document.getElementById("stop").disabled = false;
    //document.getElementById("start").disabled = true;
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
countdownStop.onclick = function(){
    clearTimeout(t);
    clearTimeout(tm);
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("countdown").disabled = false;
    document.getElementById("countdownStop").disabled = true;
};

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
};

function setTime(){
    if(document.getElementById("timeText").innerHTML === "00:00:00"){
        alert("Please set a time first.");
    }
    else{
        document.getElementById("time").innerHTML = document.getElementById("timeText").innerHTML;
    }
    
}
