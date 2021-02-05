"use strict"

// Task 1

console.log('===== Задание 1 =======');

// //  =========  Простое решение с выводом в консоль ==============

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
// ========================================


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

function getNumbers(arrayOfSimple, arrayOfComposite, numStart, numEnd) {

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

function putToConsole() {
    const arrayOfSimple = [];
    const arrayOfComposite = [];
    getNumbers(arrayOfSimple, arrayOfComposite, 0, 100);
    console.log('Массив простых чисел: ');
    console.log(arrayOfSimple);
    console.log('Массив составных чисел: ');
    console.log(arrayOfComposite);
    return;
}
putToConsole();



// Далее подключим этот функционал к html (это факультатив!)


const range1 = document.getElementById("range");
const calc1 = document.getElementById("calcFirstTask");
const resultField = document.getElementById("result1");

calc1.onclick = () => {
    resultField.innerHTML = "";
    if (+range1.value > 100) {
        resultField.innerHTML = "Слишком большое число!";
        return;
    }

    const arr1 = [];
    const arr2 = [];
    getNumbers(arr1, arr2, 0, +range1.value);
    //  Вывод на страницу:
    // Простые числа, формируем из массива строку через свертку
    const stringOfSimple = document.createElement("p");
    stringOfSimple.innerHTML = arr1.reduce((sum, current) => {
        return `${sum} ${current}`
    }, 'Простые числа: ');
    resultField.appendChild(stringOfSimple);

    // Составные числа. Здесь выводим каждое число в отдельную строку и в ней же его делители
    const compositeTitle = document.createElement("p");
    compositeTitle.innerHTML = "Составные числа:";
    resultField.appendChild(compositeTitle);
    arr2.forEach((value) => {
        const stringOfDivs = document.createElement("p");
        stringOfDivs.innerHTML = value[0] + ': его делители: ' + value[1].reduce((sum, current) => {
            return `${sum} ${current}`
        }, '');
        resultField.appendChild(stringOfDivs);
    });

}


// task 2

console.log('===== Задание 2 =======');

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



addToCart(['носки', 10, 1]); // Добавим одну пару носков
addToCart(['носки', 10, 3]);    // Добавим ище носков
addToCart(['Рубашка', 50, 2]);  // Добавим рубашку
addToCart(['Юбка', 30, 4]);     // Добавим юбку
console.log(cart);              
console.log(countBasketPrice(cart));

// Вывод корзины на страницу

const task2Result = document.getElementById("task2Result");
const showBasket = document.getElementById("showBasket");
const hideBasket = document.getElementById("hideBasket");
hideBasket.onclick = () => {task2Result.innerHTML = ""};
showBasket.onclick = () => {
    task2Result.innerHTML = "";
    cart.forEach((value) => {
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerHTML = value[0];
        p2.innerHTML = value[1];
        p3.innerHTML = value[2];
        task2Result.appendChild(p1);
        task2Result.appendChild(p2);
        task2Result.appendChild(p3);
    });
    const sum2 = document.createElement("p");
    sum2.innerHTML = "Стоимость товаров: " + countBasketPrice(cart);
    task2Result.appendChild(sum2);
    
}


// Task 3
console.log('===== Задание 3 =======');
for (let i = 0; i < 10; console.log(i++)) {};

// На страницу

const calc3 = document.getElementById("calc3");
const result3 = document.getElementById("result3");

calc3.onclick = () => {
    result3.innerHTML = "";
    for( let i = 0; i < 10; result3.innerHTML += (' ' + i++)){};
}

// Task 4

console.log('===== Задание 4 =======');
// Заполним массив

function addX(count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push('x');
    }
    console.log(arr);
    return arr;
}
// Выведем пирамиду в консоль с помощью свертки

function taskFourToConsole() {
    const arr4 = addX(20); // addX заполняет массив 20ю иксами
    arr4.reduce((sum, current) => {
        console.log(sum);
        return (sum + ' ' + current);
    }, arr4[0]);
}

taskFourToConsole();
// Выведем на страницу

const range4 = document.getElementById("range4");
const calc4 = document.getElementById("calcFourTask");
const resultFieldFour = document.getElementById("result4");

calc4.onclick = () => {
    resultFieldFour.innerHTML = "";
    if (+range4.value > 50) resultFieldFour.innerHTML = "Слишком большое число";
    const arr4 = addX(+range4.value);
    arr4.reduce((sum, current) => {
        const str4 = document.createElement("p");
        str4.innerHTML = sum;
        resultFieldFour.appendChild(str4);
        return (sum + ' ' + current);
    }, arr4[0]);
}