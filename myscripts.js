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