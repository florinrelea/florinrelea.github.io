const randomChars = ["!","@","#","$","%","^","&","*","+","-"]; // 0-9
var price = false;
var imageURL = "../";
var videoURL;
const product = unpackingTransportedUrl(window.location.hash);
var iframeYT = document.createElement("iframe");
/*
//YouTube iframe optional attributes
iframeYT.setAttribute("frameholder", 0);
iframeYT.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
iframeYT.setAttribute("allowfullscreen", "");
//YouTube iframe
*/
function assignPageIcon(iconURL){
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.rel="icon";
    link.href=iconURL;
    document.getElementsByTagName('head')[0].appendChild(link);
}

accesories_database.on('value', function(datasnapshot){
    datasnapshot.forEach(function(childNodes){
        if(childNodes.key == product){
            imageURL += childNodes.val().imgURL;
            document.getElementById("img").src = imageURL;
            document.getElementById("description").innerText = childNodes.val().description;
            document.getElementById("price").textContent = childNodes.val().price+" RON";
            document.getElementById("stock-quantity").max = childNodes.val().stock;
            price = childNodes.val().price;
            assignPageIcon(imageURL);
            videoURL = childNodes.val().video;
        }
    })
},errData);

if(!price){
    pyro_database.on('value', function(datasnapshot){
        datasnapshot.forEach(function(childNodes){
            if(childNodes.key == product){
                imageURL += childNodes.val().imgURL;
                document.getElementById("img").src = imageURL;
                document.getElementById("description").innerText = childNodes.val().description;
                document.getElementById("price").textContent = childNodes.val().price+" RON";
                document.getElementById("stock-quantity").max = childNodes.val().stock;
                price = childNodes.val().price;
                assignPageIcon(imageURL);
                videoURL = childNodes.val().video;
            }
        })
    },errData);
}
setTimeout(() => {
    if(videoURL){
        iframeYT.src = videoURL;
        document.getElementById("container-3").appendChild(iframeYT);
    }
}, 1000);
function unpackingTransportedUrl(mainPackage){
    mainPackage = mainPackage.split('');
    const randomCharsLoop = randomChars.length-1;
    var decode = '';
    var check;
    var checkSpace = false;
    for(var i=0;i<=mainPackage.length-1;i++){
        check = true;
        for(var y=0;y<=randomCharsLoop;y++){
            if(mainPackage[i] == randomChars[y]){
                check = false;
                break
            }
        }
        if(check == true){
            //looking for white space; space = _;
            if(mainPackage[i] == '_'){mainPackage[i] = ' '}
            decode += mainPackage[i];
        }
    }
    return decode
}
document.title = product;
if(!product){
    window.location.assign("../index.html");
}
document.getElementById("myHead").textContent = product;
document.getElementById("h1").textContent = product;
document.getElementById("product-name").textContent = product;
// From old: order-window
/*
document.querySelector("#order-window h2 span").textContent = product;
document.getElementById("productName").setAttribute("value", product);
*/