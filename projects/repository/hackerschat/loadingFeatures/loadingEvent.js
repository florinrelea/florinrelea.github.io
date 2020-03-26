// Problems
// Creating the loading screen
var createDiv = document.createElement("div");
createDiv.setAttribute("id", "loadingScreen");
var createSvg = document.createElement("svg");
createSvg.setAttribute("id", "loadingSvg");
createSvg.setAttribute("height", "500");
createSvg.setAttribute("width", "500");
var createPath = document.createElement("path");
createPath.setAttribute("d", "M50 180 q 200 -150 400 0, q70 50 0 120, q-10 10 -100 20, L380 420, L300 350, q-250 0 -260 -100, q-5 -60 15 -73");
createPath.setAttribute("stroke", "black");
createPath.setAttribute("stroke-width", "25");
createSvg.appendChild(createPath);
createDiv.appendChild(createSvg);
document.body.appendChild(createDiv);

var readyStateCheckInterval = setInterval(function() {
    if(document.readyState == "complete"){
        var loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.parentNode.removeChild(loadingScreen);
        document.getElementById("mainContent").style.display = "block";
        clearInterval(readyStateCheckInterval);
    }
}, 10);

// You will need the loadingScreen styiling as well src="loadStyle.css";
// just use @import "file.css";