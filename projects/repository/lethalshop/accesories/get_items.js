// database.ref('Inventory/Accesories/' + 'Bracelte22213').set({
//     imgURL: "/images/bracelet_1.jpg",
//     description: "A nice bracelet v2",
//     price: 5.99
//   });
function creatingButton(container, identify_button){
    const buy_button = document.createElement("button");
    buy_button.id = "buy-button";
    buy_button.textContent = "Cumpara";
    buy_button.className = identify_button;
    container.appendChild(buy_button);
    clickedButton(buy_button);
}
accesories_database.on('value', function(datasnapshot){
    datasnapshot.forEach(function(childNodes){
        let discount = 0;
        product_name =  childNodes.key;
        product_imageUrl = childNodes.val().imgURL;
        product_description = childNodes.val().description;
        product_price = childNodes.val().price;
        const product_stock = childNodes.val().stock;
        var product = {
            name: product_name,
            imgURL: "../"+product_imageUrl,
            description: product_description,
            price: product_price+" RON",
            stock: product_stock
        }
        if(childNodes.val().discount){
            discount = childNodes.val().discount+" RON";
            product.price = "<span style='text-decoration: line-through; color: red;font-weight: 800;'>"+discount+"</span> | "+product_price+" RON";
        }
        setTimeout( () =>{
            const creatingContainer = new Promise(function(resolve, reject) {
                create_container(product.name, product.imgURL, product.price, product.stock, discount);
            });
            creatingContainer.then( () => {
                delete window.product_name; 
                delete window.product_imageUrl; 
                delete window.product_description;
                delete window.price;
                delete window.product_stock;
            });
        }, 10);
    })
},errData);
function create_container(title, photoUrl, price, stock, discount){
    var container = document.createElement("div");
    var header = document.createElement("header");
    var par = document.createElement("p");
    var item_image = document.createElement("img");
    var productsGrid = document.getElementById("items-grid");
    item_image.id = "item-photo";
    item_image.className = "lazy-image";
    container.id = "container-item";
    header.textContent = title;
    item_image.src = "../images/loader.gif";
    item_image.setAttribute("data-src", photoUrl);
    par.innerHTML = price;
    par.id = "price";
    container.appendChild(header);
    container.appendChild(item_image);
    container.appendChild(par);
    productsGrid.appendChild(container);
    if(stock<=0){
        // var overlay_image = document.createElement("img");
        // overlay_image.src = "../images/sold.png";
        // overlay_image.className = "overlay";
        // container.appendChild(overlay_image);
        container.style.backgroundImage = "url('../images/sold.png')";
        item_image.style.opacity = "0.5";

    }else{
        if(discount != 0){
            container.style.backgroundImage = "url('../images/discount.png')";
            item_image.style.opacity = 0.5;
        }
        creatingButton(container, title);
    }
}