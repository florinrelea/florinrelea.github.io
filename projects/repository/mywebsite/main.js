var divLoading = document.getElementById("loading");
var mainContent = document.getElementById("mainContent");
//temp
if(screen.width <= 700){
    divLoading.parentNode.removeChild(divLoading);
    mainContent.parentNode.removeChild(mainContent);
}
//temp
var ls = localStorage.getItem("seenPage");
if (ls == null) {
    localStorage.setItem("seenPage", true);
    setTimeout(function(){
    websiteStart();
    }, 7000);
    console.log("Unasigned local variable from localStorage.");
    console.log("If you are not the developer, get the hell out of here!");
}else if(ls != null){
    websiteStart();
}
function websiteStart(){
    mainContent = document.getElementById("mainContent");
    divLoading.parentNode.removeChild(divLoading);
    mainContent.style.display = "block";
    documentScript();
}
function documentScript(){

}
// onclick websites
function buttonAnimation(btnNumber){
    var button1 = document.getElementById(btnNumber);
    button1.style.animation = "clicked 1s infinite";
    button1.style.backgroundImage =  "linear-gradient(to bottom right, red, blue)";
}
function email(){
    buttonAnimation("b1");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/email")}, 1000);
}
function apple(){
    buttonAnimation("b2");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/appleman")}, 1000);
}
function know(){
    buttonAnimation("b3");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/knowledge")}, 1000);
}
function knowAdv(){
    buttonAnimation("b4");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/knowledge/indexAdvanced.html")}, 1000);
}
function addData(){
    buttonAnimation("b5");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/knowledge/addinfo.html")}, 1000);
}
function grade(){
    buttonAnimation("b6");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/grademe")}, 1000);
}
function gShop(){
    buttonAnimation("b7");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/gameshop")}, 1000);
}
function windows(){
    buttonAnimation("b8");
    alert("Username: admin, Password: admin");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/windows")}, 1000);
}
function highschool(){
    buttonAnimation("b9");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/ltvs")}, 1000);
}
function about(){
    buttonAnimation("b10");
    setTimeout(function(){location.assign("http://florinrelea.000webhostapp.com/about")}, 1000);
}