var present = new Date();
var presentYear = present.getFullYear();
var loadingScreen = document.getElementById("loadingScreen"); 

var readyStateCheckInterval = setInterval(function() {
    if(document.readyState == "complete"){
        let images = document.getElementsByTagName("img");
        loadingScreen.parentNode.removeChild(loadingScreen);
        document.querySelector(".nav-bar").style.animation = "flyFromLeft 1s";
        document.getElementById("when").textContent = presentYear+"-"+(presentYear+1);
        for(let i = 0 ; i < images.length ; i++){
            images[i].setAttribute("loading", "lazy");
        }
        clearInterval(readyStateCheckInterval);
    }
}, 10);