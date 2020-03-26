var itemInCart = document.getElementById("item-in-cart");
document.getElementById("buy-button").addEventListener("click", () => {
    itemInCart.style.display = "block";
});
document.querySelector(".close-window").addEventListener("click", () => {
    itemInCart.style.display = "none";
});
document.getElementById("submit-item-to-cart").addEventListener("submit", (e) =>{
    e.preventDefault();
    let product_quantity = document.getElementById("stock-quantity").value;
    //product = product name from the "product.js" script
    addNewItemToCart(product, product_quantity);
    document.getElementById("item-added").style.display = "block";
    setTimeout(() => window.location.assign("../index.html"), 1000);
});
function addNewItemToCart(tag, productQuantity){
    let localStorageCart = localStorage.getItem("myCart");
    let myCart = [];
    let verifyCart;
    if(localStorageCart){
        myCart = JSON.parse(localStorageCart);
    }
    verifyCart = isItemInCart(tag, myCart);
    let newItem = {
            name: tag,
            quantity: productQuantity
    };

    if(verifyCart == true){
        myCart.push(newItem);
    }else{
        myCart[verifyCart].quantity = productQuantity;
    }
    localStorage.setItem("myCart", JSON.stringify(myCart));
};
function isItemInCart(itemName, parsedCart){
    //let cart = JSON.parse(localStorage.getItem("myCart"));
    if(!parsedCart){
        return true;
    }
    for(let i = 0; i < parsedCart.length ; i++){
        if(parsedCart[i].name == itemName){
            return i;
        }
    }
    return true;
};