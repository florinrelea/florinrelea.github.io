var loadingScreen;
var bodyObj;
var readyStateCheckInterval = setInterval(function() {
    if(document.readyState == "complete"){
        clearInterval(readyStateCheckInterval);
        mainLoad();
    }
}, 10);
//setTimeout(function(){mainLoad()}, 2000);
function mainLoad() {
    loadingBack = document.querySelector(".loading-background");
    loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.animation = "rotation 1s linear 1";
    setTimeout(function(){loadingScreen.style.animation = "borderExtend 0.5s alternate 4";},1000);
    setTimeout(function(){loadingBack.style.display = "none"; main(); }, 2500);
}
function main(){
    bodyObj = document.getElementById("mainContent");
    bodyObj.style.display = "block";
}
function tempClicked(){
    alert("Momentan in mentenanta :}");
}
function loading(){
    bodyObj.style.display = "none";
    loadingScreen.style.display = "block";
    loadingScreen.style.animation = "borderExtend 0 alternate 0";
    loadingScreen.style.animation = "rotation 1s alternate infinite";
}
function cineSunt(){
    loading();
    setTimeout(function(){location.assign("https://www.youtube.com/user/iRaphahell")},1000);
}