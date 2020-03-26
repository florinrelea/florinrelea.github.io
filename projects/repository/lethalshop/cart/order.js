var order_products = document.getElementById("productName");
var order_quantities = document.getElementById("productQuantity");
var order_charge = document.getElementById("orderCharge");
function inputChecker(){
    let intitialTotal = getTotalCharge();
    document.getElementById("sendOrder").setAttribute("onsubmit", "return validation()");
    order_products.value = JSON.stringify(productsList);
    order_quantities.value = JSON.stringify(productsQuantity);
    order_charge.value = intitialTotal;
    realTimeChecker = setInterval(function(){
        //preventing the input checkboxes BUG
        let orderLocalCharge = Number(intitialTotal);
        let deliveryFalse = document.getElementById("deliveryFalse").checked;
        let deliveryTrue = document.getElementById("deliveryTrue").checked;
        let deliveryDetails = document.getElementById("deliveryAdress");
        let pickupDetails = document.getElementById("pickupInfo");
        let street = document.getElementById("street");
        let houseNumber = document.getElementById("houseNumber");
        if(deliveryFalse){
            if(deliveryTrue)
            {
                document.getElementById("deliveryTrue").checked = false;
            }
            pickupDetails.style.display = "block";
        }else if(!deliveryFalse){
            pickupDetails.style.display = "none";
        }
        if(deliveryTrue){
            if(deliveryFalse)
            {
                document.getElementById("deliveryFalse").checked = false;
            }
            deliveryDetails.style.display = "block";
            street.setAttribute("required", '');
            houseNumber.setAttribute("required", '');
            orderLocalCharge += 10;
        }else if(!deliveryTrue){
            deliveryDetails.style.display = "none";
            street.removeAttribute("required");
            houseNumber.removeAttribute("required");
        }
        document.getElementById("totalPrice").textContent = orderLocalCharge+" RON";
        order_charge = orderLocalCharge;
    }, 300);
}
function validation(){
    var preventDelivery = document.getElementById("deliveryTrue").checked;
    var preventDelivery2 = document.getElementById("deliveryFalse").checked;
    if(!preventDelivery && !preventDelivery2){
        return false;
    }
    return true;
}