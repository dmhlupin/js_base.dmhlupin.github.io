"use strict"

// Task 1

console.log ('===== Задание 1 =======');

//  =========  Простое решение с выводом в консоль ==============

// function isSimple (num) {
//     if(num === 0) return false;
//     if (num === 1|| num === 2) return true;
//     for(let i = 2; i <= num/2; i++) {
//         if (num % i) continue;
//         else return false;
//     }
//     return true;
// }

// let num = 0;
// while(num <= 100) {
//     if(isSimple(num)) console.log(num); 
//     num++;
// }

// ============= Усложним задачу ============
//  Получим два массива с простыми и составными числами
//  Для составных чисел получим массив с их делителями

const arrayOfSimple = [];
const arrayOfComposite = [];

function isSimple(num) {
    const divs = [1];
    if (num === 1) return divs;
    if (num === 2) {
        divs.push(2);
        return divs;
    };
    for (let i = 2; i <= num / 2; i++) {
        if (num % i) continue;
        else {
            divs.push(i);

        };
    }
    divs.push(num);
    return divs;
}

function getNumbers(numStart, numEnd) {

    while (numStart <= numEnd) {
        const arrOfDivs = isSimple(numStart);
        if (arrOfDivs.length <= 2) {
            arrayOfSimple.push(numStart);
        } else {
            arrayOfComposite.push([numStart, arrOfDivs]);
        }
        numStart++;
    }
    return true;
}

getNumbers(0, 100);
console.log('Массив простых чисел: ');
console.log(arrayOfSimple);
console.log('Массив составных чисел: ');
console.log(arrayOfComposite);


// task 2

console.log ('===== Задание 2 =======');

// Для товаров в корзине нам будет нужен двумерный массив
// Каждый элемент в массиве корзины это один товар
// Каждый товар - это массив из трех элементов:
// 0 - Название товара; 1 - стоимость единицы; 2 - количество данного товара
// Реализуем также функцию добавления элемента товара в корзину с проверкой - есть ли он там

const cart = [];


function addToCart(product) {
    if (!cart.length) cart.push(product);
    else {
        let isProductInCart = false;
        cart.forEach((value) => {
            if (value[0] === product[0]) {
                value[2] += product[2];
                isProductInCart = true;
                return;
            }
        });
        if (!isProductInCart) cart.push(product);
        return;
    }
}

function countBasketPrice(cart) {
    let result = 0;
    if (!cart.length) return "Ваша корзина пуста";
    else {
        cart.forEach((value) => {
            result += (value[1] * value[2]);
        });
        return result;
    }
}

console.log(countBasketPrice(cart));

addToCart(['носки', 10, 1]);
addToCart(['носки', 10, 3]);
addToCart(['Рубашка', 50, 2]);
addToCart(['Юбка', 30, 4]);
console.log(cart);
console.log(countBasketPrice(cart));

// Task 3
console.log ('===== Задание 3 =======');
for(let i = 0; i < 10; console.log(i++)){};

// Task 4

console.log ('===== Задание 4 =======');
// Заполним массив

const arr4 = [];
for (let i = 0; i < 20; i++) {
    arr4.push('x');
}
console.log(arr4);

// Выведем пирамидоу в консоль с помощью свертки

arr4.reduce((sum, current) => {
            console.log(sum);
            return(sum + ' ' + current);
            }, arr4[0]);