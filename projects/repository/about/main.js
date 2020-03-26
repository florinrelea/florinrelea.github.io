var socialFacebook = document.getElementById("facebookLogo");
var socialInstagram = document.getElementById("instagramLogo");
var mobileLoading = document.getElementById("mobileLoading");
var mainBox = document.getElementById("mainBox");
var logoLiceu = document.getElementById("logoLiceu");
var screenWidth = screen.width;
setTimeout(function(){
    logoLiceu.style.display = "block";
}, 4000);
if(screenWidth >= 700){
    function goToInstagram(){
        socialInstagram.style.transform = "rotate(360deg)";
        setTimeout(function(){location.assign("https://www.instagram.com/florin_relea/");},1500);
    }
    function goToFacebook(){
        socialFacebook.style.transform = "rotate(360deg)";
        setTimeout(function(){location.assign("https://www.facebook.com/florinrelea");},1500);
    }
    function goToVS(){
        logoLiceu.style.transform = "rotate(360deg)";
        setTimeout(function(){location.assign("http://www.vasilesav.ro");},1500);
    }
}else{
    function goToInstagram(){
        socialInstagram.style.transform = "rotate(360deg)";
        setTimeout(function(){
        mobileLoading.style.display = "block";
        mainBox.style.display = "none";
        }, 1500);
        setTimeout(function(){location.assign("https://www.instagram.com/florynrelea/");},1000);
    }
    function goToFacebook(){
        socialFacebook.style.transform = "rotate(360deg)";
        setTimeout(function(){
        mobileLoading.style.display = "block";
        mainBox.style.display = "none";
        }, 1500);
        setTimeout(function(){location.assign("https://www.facebook.com/florinrelea");},1000);
    }
    function goToVS(){
        logoLiceu.style.transform = "rotate(360deg)";
        setTimeout(function(){
        mobileLoading.style.display = "block";
        mainBox.style.display = "none";
        }, 1500);
        setTimeout(function(){location.assign("http://www.vasilesav.ro");},1500);
    }
}
