var choosen = document.querySelectorAll(".car");

var readyStateCheckInterval2 = setInterval(function() {
    if(document.readyState == "complete"){
        document.querySelector(".description").style.animation = "flyFromLeft 3s";
        clearInterval(readyStateCheckInterval2);
    }
}, 10);

for (var i=0; i < choosen.length; i++) {
    choosen[i].setAttribute('onclick', 'accessURL()');
}
function accessURL(){window.location.assign("contact/index.html")};

window.addEventListener('scroll', function() {
    for(var i = 0; i < choosen.length; i++){
        const scrolledCar = choosen[i];
        var position = scrolledCar.getBoundingClientRect();
        // checking for partial visibility
        if(position.top >= 0 && position.bottom <= window.innerHeight){
            scrolledCar.style.animation = "flyFromLeft 1s";
            window.removeEventListener('scroll', function(){});
        }
    }
})