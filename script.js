"use strict"

//Task 1

function rankNumber(val) {
    const obj = {};
    for (let rank = 100; rank >= 1; rank = rank / 10) {
        obj[`rank ${rank}`] = (val - (val % rank)) / rank;
        val -= obj[`rank ${rank}`] * rank;
    }
    return obj;
}
// вывод в консоль
console.log(`Task 1 Число 12:`);
console.log(rankNumber(12));

// Вывод на страницу

const input1 = document.getElementById("range");
const calc1 = document.getElementById("calcFirstTask");
const res1 = document.getElementById("res1");


calc1.onclick = () => {
    res1.innerHTML = "";
    const hundreds = document.createElement("p");
    const tens = document.createElement("p");
    const units = document.createElement("p");
    const resultObject = rankNumber(+input1.value);
    hundreds.innerHTML = `"rank 100": ${resultObject['rank 100']}`;
    tens.innerHTML = `"rank 10": ${resultObject['rank 10']}`;
    units.innerHTML = `"rank 1": ${resultObject['rank 1']}`;
    res1.appendChild(hundreds);
    res1.appendChild(tens);
    res1.appendChild(units);
}






// Task 2

// Реализация:
// 1. Корзину сделаем объектом
// 2. Каждый товар в корзине имеет свой идентификатор id
// 3. Если в предыдущем ДЗ мы делали три поля в массиве товара ([0] - Название,[1]-цена,[2]-количество),
// то в данном случае мы сделаем следующие поля (Название - name, цена - price, id), так как количество товара 
// не является свойством товара и товары могут иметь одинаковое название но разную цену. id - уникально
// 4.  
//      4.1 Каждый товар в корзине - это свойство отдельного объекта goods. 
//          имя этого свойства - id товара.
//      4.2 в качестве значения этого свойства выступает объект с двумя свойствами:
//          product: {объект товара},
//          quantity: количество товара в корзине
// goods {
//        '4561-0943': {product: {name: Носки, price: 100, id: '4561-0943'}, quantity: 1},
//        '4561-0944': {product: {name: Рубашка, price: 50, id: '4561-0944'}, quantity: 2}
// }
// 5. В корзине есть методы добавления товара, удаления товара, показа всех товаров


// Конструктор товара:
function Product(name, price, id) {
    this.name = name;
    this.price = price;
    this.id = id;
}

// Создание экземпляра товара
const product1 = new Product('Носки', 100, '000001');
const product2 = new Product('Рубашка', 50, '000002');
const product3 = new Product('Юбка', 230, '000003');

// Конструктор корзины

function Cart() {
    this.summ = 0;
    this.goods = {};
}

// Методы корзины выносим в ее прототип, чтобы не заполнять память (хотя вряд ли у нас будет больше одной корзины ;))


// Добавление товара в корзину
Cart.prototype.addToCart = function (productItem, q) {
    if (productItem.id in this.goods) {
        this[productItem.id].quantity += q;
    }
    this.goods[`${productItem.id}`] = {
        product: productItem,
        quantity: q
    };
};

// Удаление товаров из корзины: product - объект товара, q - количество котрое надо удалить
Cart.prototype.removeFromCart = function (product, q) {
    this.goods[product.id].quantity -= q;
    return `Товар ${product.name} удален в количестве ${q}`;
};

// Показ содержимого корзины
Cart.prototype.showCart = function () {
    for (let item in this.goods) {
        const currentGood = this.goods[item];
        const outputStr = `${currentGood.product.name} ценой ${currentGood.product.price}р. за 1 шт. в количестве ${currentGood.quantity} шт.`;
        console.log(outputStr);
    }
}

// подсчет стоимости корзины
Cart.prototype.getCartPrice = function () {
    this.summ = 0;
    let result = 0;
    for (let item in this.goods) {
        this.summ += this.goods[item].product.price * this.goods[item].quantity;

    }
    result = this.summ;
    return result;
}


const cart = new Cart;



cart.addToCart(product1, 1);
cart.addToCart(product2, 2);
cart.addToCart(product3, 8);
console.log(cart.showCart());
console.log(`В корзине товаров на ${cart.getCartPrice()} рублей`);

console.log(cart.removeFromCart(product3, 2));
console.log(cart.showCart());
console.log(`В корзине товаров на ${cart.getCartPrice()} рублей`);

// вывод на страницу
const task2Result = document.getElementById("task2Result");
const showBasket = document.getElementById("showBasket");
const hideBasket = document.getElementById("hideBasket");
hideBasket.onclick = () => {task2Result.innerHTML = ""};
showBasket.onclick = () => {
    task2Result.innerHTML = "";
    for(let item in cart.goods) {
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerHTML = cart.goods[item].product.name;
        p2.innerHTML = cart.goods[item].product.price;
        p3.innerHTML = cart.goods[item].quantity;
        task2Result.appendChild(p1);
        task2Result.appendChild(p2);
        task2Result.appendChild(p3);
    }

    
    const sum2 = document.createElement("p");
    sum2.innerHTML = "Стоимость товаров: " + cart.getCartPrice();
    task2Result.appendChild(sum2);
    
}