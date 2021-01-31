"use strict"

// Task 2


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

getNumbers(0,100);
console.log('Массив простых чисел: ');
console.log(arrayOfSimple);
console.log('Массив составных чисел: ');
console.log(arrayOfComposite);


// task 2

