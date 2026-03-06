let cart = [];
let total = 0;

function addToCart(name, price){

cart.push({name, price});
updateCart();

}

function updateCart(){

let cartList = document.getElementById("cart");
cartList.innerHTML = "";

total = 0;

cart.forEach(item => {

let li = document.createElement("li");
li.textContent = item.name + " - ₹" + item.price;

cartList.appendChild(li);

total += item.price;

});

document.getElementById("total").textContent = total;

}

function clearCart(){

cart = [];
updateCart();

}