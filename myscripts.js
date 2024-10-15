//Home Page - navigation menu
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("navigation").style.padding = "3px";
    }else{
        document.getElementById("navigation").style.padding = "12px";
    }
}

//Photography Page
