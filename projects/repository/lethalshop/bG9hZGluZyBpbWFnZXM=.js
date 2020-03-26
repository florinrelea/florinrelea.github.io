window.onscroll = () => {lazyload()};
function lazyload(){
    let images = document.querySelectorAll(".lazy-image");
    for(let i = 0 ; i < images.length ; i++){
        if(elementInViewport(images[i])){
            images[i].setAttribute("src", images[i].getAttribute("data-src"));
        }
    }
}
function elementInViewport(element){
    let rect = element.getBoundingClientRect();
    return (rect.top >=0 && rect.left >=0 && rect.bottom <= (window.innerHeight || document.getElemement.clientHeight) && rect.right <= (window.innerWidth || document.getElementById.clientWidth))
}