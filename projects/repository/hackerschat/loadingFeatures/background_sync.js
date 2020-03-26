function bkgImageSync(bkgURL){
    let bigImage = document.createElement("img");
    let htmlBack = document.documentElement;
    let image = bkgURL;

    bigImage.onload = function(){
        htmlBack.style.backgroundImage = 'url('+this.src+')';
    }
    setTimeout(() => {
        bigImage.src = image;
    }, 50);
}
bkgImageSync(backgroundURL);