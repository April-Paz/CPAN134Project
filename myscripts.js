
//Home Page - navigation menu
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){ //If scrolled more than 20px
        document.getElementById("navigation").style.padding = "3px";
        document.getElementById("navigation").style.fontSize = "15px";
    }else{
        document.getElementById("navigation").style.padding = "14px";
        document.getElementById("navigation").style.fontSize = "18px";
    }
}

//Toggle dark/light mode
 function changeDisplay() {
    const wasLightmode = localStorage.getItem('lightmode') === 'true';
    localStorage.setItem('lightmode', !wasLightmode); //localStorage API that stores data upon page reloads or sessions
    const element = document.body;
    element.classList.toggle('light-mode', !wasLightmode);
 }
 function onload(){
    document.body.classList.toggle('light-mode', localStorage.getItem('lightmode') === 'true');
 }

//Photography Page
    //Select images
    const galleryImages = document.querySelectorAll(".photoGallery img");
    const displayImage = document.getElementById("displayImage");
    
        //Add click event listener to each image
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            //Set clicked image's source to the displayImage element
            displayImage.src = image.src;
            displayImage.alt = image.alt;
            displayImage.style.display = "block"; //Change display from "none" to "block" to show image
        });
    });

//Hobbies Page
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
