let pomodoro = document.getElementById("pomodoro-timer");
let short = document.getElementById("short-timer");
let long = document.getElementById("long-timer");
let currentTimer =null;
function showDefaultTimer() {
    pomodoro.style.display = "block";
    short.style.display = "none";
    long.style.display = "none";
   }
   
 showDefaultTimer()

 document.getElementById("pomodoro-session").addEventListener("click", function(){
    hideAll();
    pomodoro.style.display = "block"
    currentTimer = pomodoro   
});
document.getElementById("short-break").addEventListener("click", function(){
    hideAll();
    short.style.display = "block"
    currentTimer =short
 
});
document.getElementById("long-break").addEventListener("click", function(){
    hideAll();
    
    long.style.display = "block"
    currentTimer =long
    
});