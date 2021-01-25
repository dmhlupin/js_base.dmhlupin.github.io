// Task 3

const button1 = document.getElementById("button1");
button1.onclick = calcTwoDigits;
const resultElement = document.getElementById("result1");

function calcTwoDigits() {
    const a = Number(document.getElementById("digit1").value);
    const b = Number(document.getElementById("digit2").value);
    let result;
    let resString;
    if (a >= 0 && b >= 0) {
        result = a - b;
        resString = "a и b положительны. Вычитаем: a - b = " + result;
    } else if (a <= 0 && b <= 0) {
        result = a * b;
        resString = "a и b отрицательны. Перемножаем: a * b = " + result;
    } else {
        result = a + b;
        resString = "a и b разных знаков. Складываем: a + b = " + result;
    }
    resultElement.innerHTML = resString;
}

// Task 4
const button2 = document.getElementById("button2");
button2.onclick = calcTaskFourth;
const result2 = document.getElementById("result2");

function calcTaskFourth() {
    const a = Number(document.getElementById("digit3").value);
    let result = "";
    switch (a) {
        case 0:
            result += "0 ";
        case 1:
            result += "1 ";
        case 2:
            result += "2 ";
        case 3:
            result += "3 ";
        case 4:
            result += "4 ";
        case 5:
            result += "5 ";
        case 6:
            result += "6 ";
        case 7:
            result += "7 ";
        case 8:
            result += "8 ";
        case 9:
            result += "9 ";
        case 10:
            result += "10 ";
        case 11:
            result += "11 ";
        case 12:
            result += "12 ";
        case 13:
            result += "13 ";
        case 14:
            result += "14 ";
        case 15:
            result += "15 ";
            break;
    }
    result2.innerHTML = result;
}

// Task 5

const result3 = document.getElementById("result3");
const addBtn = document.getElementById("add");
const diffBtn = document.getElementById("diff");
const multiBtn = document.getElementById("multi");
const divBtn = document.getElementById("div");

function add(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operation(func) {
    const a = Number(document.getElementById("digit4").value);
    const b = Number(document.getElementById("digit5").value);
    result3.innerHTML = func(a, b);
}
addBtn.onclick = () => {
    operation(add)
}; // анонимная функция, внутри которой вызывается функция
// с переданной ей в качестве аргумента функцией нужной операции
diffBtn.onclick = () => {
    operation(diff)
};
multiBtn.onclick = () => {
    operation(multi)
};
divBtn.onclick = () => {
    operation(div)
};

// Task 6

const resultSix = document.getElementById("resultSix");
const calcBtnSix = document.getElementById("calcSix");


const a6 = document.getElementById("digit6");
const a7 = document.getElementById("digit7");
const opSelect = document.getElementById("opSelect");

function operationSix(arg1, arg2, optn) {
    switch (optn) {
        case "Сложить":
            return (arg1 + arg2);
        case "Вычесть":
            return (arg1 - arg2);
        case "Умножить":
            return (arg1 * arg2);
        case "Разделить":
            return (arg1 / arg2);
    }
}

calcBtnSix.onclick = () => {
    const selectedNumber = opSelect.options.selectedIndex;
    const opString = opSelect.options[selectedNumber].value;
    resultSix.innerHTML = operationSix(Number(a6.value), Number(a7.value), opString);
}

// Task 7

const resultSeven = document.getElementById("resultSeven");
const calcBtnSeven = document.getElementById("calcSeven");
const nullSelect = document.getElementById("nullSelect");

function compareNull(optn) {
    switch (optn) {
        case "==":
            return (null == 0);
        case "===":
            return (null === 0);
        case "a > b":
            return (null > 0);
        case "a < b":
            return (null < 0);
        case "a >= b":
            return (null >= 0);
        case "a <= b":
            return (null <= 0);
    }
}

calcBtnSeven.onclick = () => {
    const selectedNumber = nullSelect.options.selectedIndex;
    const selectString = nullSelect.options[selectedNumber].value;
    resultSeven.innerHTML = compareNull(selectString);
}



// Task 8 

const resultEight = document.getElementById("resultEight");
const valueEight = document.getElementById("digit8");
const powEight = document.getElementById("digit9");
const calcBtnEight = document.getElementById("calcEight");

function power(val, pow) {
    if (pow > 0) {
        return val * power(val, --pow);
    } else return 1;
}

calcBtnEight.onclick = () => {
    resultEight.innerHTML = power(Number(valueEight.value), Number(powEight.value));
}