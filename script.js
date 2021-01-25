//

const button1 = document.getElementById("button1");
button1.onclick = calcTwoDigits;
resultElement = document.getElementById("result1");

function calcTwoDigits() {
    const a = Number(document.getElementById("digit1").value);
    const b = Number(document.getElementById("digit2").value);
    let result;
    let resString;
    if (a >= 0 && b >= 0) {
        result = a - b;
        resString = "a и b положительны. Вычитаем: a - b = "+ result;
    } else if (a <= 0 && b <= 0) {
        result = a * b;
        resString = "a и b отрицательны. Перемножаем: a * b = "+ result;
    } else {
        result = a + b;
        resString = "a и b разных знаков. Складываем: a + b = "+ result;
    }
    resultElement.innerHTML = "итоговый результат: " + resString;
    console.log(result);
}

