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