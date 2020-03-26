//var animation = anime({});
var backgroundURL = "images/background.png";
if(window.innerWidth <= 500){
    var title = document.getElementById("title");
    title.style="fill: none; stroke:white; stroke-width: 1px; font-size: 50px; font-family: 'Abril Fatface', cursive; translate(-50%, 0);"
}
function loginPage(){window.location.assign("login/index.html")}
function aboutPage(){window.location.assign("http://florinrelea.github.io/about")}
function joinPage(){alert("Contact owner ^ _ X");window.location.assign("http://florinrelea.github.io/about")};
bkgImageSync(backgroundURL);