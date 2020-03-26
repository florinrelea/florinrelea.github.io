function assignPageIcon(iconURL){
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type= "image/ico";
    link.rel = "icon";
    link.href = iconURL;
    document.getElementsByTagName('head')[0].appendChild(link);
}
assignPageIcon('http://lethalshop.000webhostapp.com/images/cartIcon.ico');