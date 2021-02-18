"use strict"

document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');


const phone = new Product("0001", "Phone", 500, ["./img/0001_1.jpg","./img/0001_2.jpg","./img/0001_3.jpg","./img/0001_4.jpg"]);
const laptop = new Product("0002", "Laptop", 1500, ["./img/0002_1.jpg","./img/0002_2.jpg","./img/0002_3.jpg"]);
const pc = new Product("0003", "PC", 2000, ["./img/0003_1.jpg","./img/0003_2.jpg",]);



const productBlock = document.getElementById("productBlock");
const cartBlock = document.getElementById("cartBlock");

const products = new Products(productBlock);
const cart = new Cart(cartBlock);

products.addItem(phone, 3);
products.addItem(laptop,4);
products.addItem(pc,6);
products.showItems();
cart.showCart();

