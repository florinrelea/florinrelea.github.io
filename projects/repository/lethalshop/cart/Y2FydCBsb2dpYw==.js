var myCart = JSON.parse(localStorage.getItem("myCart"));
var cartGrid = document.getElementById("cart-grid");
var displayTotal = document.getElementById("totalCharge");
var btnStartOrder = document.getElementById("complete-order");
var orderWindow = document.getElementById("order-window");
var realTimeChecker;
var productsList = [];
var productsQuantity = [];

btnStartOrder.addEventListener("click", () => {
    orderWindow.style.display = "block";
    inputChecker();
});
document.querySelector(".close-window").addEventListener("click", () => {
    orderWindow.style.display = "none";
    clearInterval(realTimeChecker);
});
if(!myCart || (myCart.length == 0)){
    alert("Cosul dumneavoastra este gol! ^_^");
    window.location.assign("../index.html");
}
function newCartItem(product_name, product_quantity, product_price){
    let container = document.createElement("div");
    let productTitle = document.createElement("li");
    let productQuantity = document.createElement("li");
    let productTotalPrice = document.createElement("li");
    let deleteBtn = document.createElement("IMG");
    deleteBtn.src = "../images/close.png";
    deleteBtn.className = "delete-item";
    deleteBtn.id = product_name;
    deleteBtn.setAttribute("onclick", "deleteCartItem(this.id)");
    container.className = "cart-item";
    productTotalPrice.className = "item-quantity-price";
    productTitle.innerHTML = product_name;
    productQuantity.innerHTML = product_quantity;
    productTotalPrice.innerHTML = product_quantity*product_price;
    container.appendChild(productTitle);
    container.appendChild(productQuantity);
    container.appendChild(productTotalPrice);
    //container.appendChild(deleteBtn);
    cartGrid.appendChild(container);
    cartGrid.appendChild(deleteBtn); // <--
    displayTotal.textContent = getTotalCharge()+" RON";
}
function getTotalCharge(){
    var total = 0;
    var prices = document.querySelectorAll(".item-quantity-price");
    for(let i = 0; i < prices.length; i++){
        total += Number(prices[i].textContent);
    }
    total = total.toFixed(2);
    return total;
}
for(let i=0; i < myCart.length; i++){
    let currentProduct = myCart[i].name;
    let currentQuantity = myCart[i].quantity;
    productsList[i] = currentProduct;
    productsQuantity[i] = currentQuantity;
    accesories_database.on('value', function(datasnapshot){
        datasnapshot.forEach(function(childNodes){
            if(childNodes.key == currentProduct){
                return newCartItem(currentProduct, currentQuantity, childNodes.val().price);
            }
        });
    });
    pyro_database.on('value', function(datasnapshot){
        datasnapshot.forEach(function(childNodes){
            if(childNodes.key == currentProduct){
                return newCartItem(currentProduct, currentQuantity, childNodes.val().price);
            }
        });
    });
}
function deleteCartItem(itemName){
    let finalCart = [];
    let helper = 0;
    for(let i = 0; i < myCart.length ; i++){
        if(myCart[i].name != itemName){
            finalCart[helper] = myCart[i];
            helper++;
        }
    }
    localStorage.setItem("myCart", JSON.stringify(finalCart));
    location.reload();
    return 0;
}