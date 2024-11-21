//Home Page - navigation menu
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("navigation").style.padding = "3px";
        document.getElementById("navigation").style.fontSize = "15px";
    }else{
        document.getElementById("navigation").style.padding = "10px";
        document.getElementById("navigation").style.fontSize = "16px";
    }
}

//Toggle dark/light mode
 function changeDisplay() {
    const wasLightmode = localStorage.getItem('lightmode') === 'true';
    localStorage.setItem('lightmode', !wasLightmode);
    const element = document.body;
    element.classList.toggle('light-mode', !wasLightmode);
 }
 function onload(){
    document.body.classList.toggle('light-mode', localStorage.getItem('lightmode') === 'true');
 }


//Show schedules of teams
function toggleSchedule(teamId) {
    var schedule = document.getElementById(teamId);
    // Toggle the display property between none and block
    if (schedule.style.display === "none") {
        schedule.style.display = "block";
    } else {
        schedule.style.display = "none";
    }
}

    //Initially hide all schedules
document.addEventListener('DOMContentLoaded', function () {
    var schedules = document.querySelectorAll('.schedule');
    schedules.forEach(function (schedule) {
        schedule.style.display = "none";
    });
});
