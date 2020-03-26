// // Creating the loading screen
// var createDiv = document.createElement("div");
// createDiv.setAttribute("id", "loadingScreen");
// var createSvg = document.createElement("svg");
// createSvg.setAttribute("id", "loadingSvg");
// createSvg.setAttribute("height", "500");
// createSvg.setAttribute("width", "500");
// var createPath = document.createElement("path");
// createPath.setAttribute("d", "M50 180 q 200 -150 400 0, q70 50 0 120, q-10 10 -100 20, L380 420, L300 350, q-250 0 -260 -100, q-5 -60 15 -73");
// createPath.setAttribute("stroke", "black");
// createPath.setAttribute("stroke-width", "25");
// createSvg.appendChild(createPath);
// createDiv.appendChild(createSvg);
// document.body.appendChild(createDiv);

/*
createPath.setAttribute("fill", "none");
createSvg.appendChild(createPath);
createDiv.appendChild(createSvg); //possible problem
document.body.appendChild(createDiv);
document.getElementById("loadingScreen").style = "position:absolute; top:0; left:0; width: 100%; height: 100%;background-color: rgba(0, 0, 0, 0.9);";
document.getElementById("loadingSvg").style = "position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; stroke-dasharray: 1400;stroke-dashoffset: 2800;animation: dash 2s linear forwards infinite;";
document.styleSheets += "@keyframes dash {to {stroke-dashoffset: 0;}";
*/
if(window.innerWidth <= 500){
    var load = document.getElementById("loadingSvg");
    load.setAttribute("height", window.innerWidth);
    load.setAttribute("width", window.innerWidth);
}
var readyStateCheckInterval = setInterval(function() {
    if(document.readyState == "complete"){
        var loadingScreen = document.getElementById("loadingScreen");
        loadingScreen.parentNode.removeChild(loadingScreen);
        if(document.getElementById("sideBar")){
            document.getElementById("sideBar").style.display = "block";
        }else if(document.getElementById("centerBox")){
            document.getElementById("centerBox").style.display = "block";
        }
        clearInterval(readyStateCheckInterval);
    }
}, 10);