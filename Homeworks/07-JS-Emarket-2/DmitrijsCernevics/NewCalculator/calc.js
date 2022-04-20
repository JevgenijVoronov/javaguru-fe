let a = ''; // first number
let b = ''; // second number
let sign = ''; // знак операции
let finish = false;


// 2 Масива
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// переменная экрана вывода
const out = document.querySelector('.calc-screen p');

// function plusMinus() {
//     if (a === -a) {
//         a = "+" + a;
//     }
//     else if (a === +a) {
//         a = "-" + a;
//     }
//     finish = false;
//     out.textContent = a;
}
function clearAll() {
    a = ''; // first number and result
    b = ''; // second number
    sign = ''; // знак
    finish = false;
    out.textContent = 0;
}
// document.querySelector('.plus-minus').onclick = plusMinus;
document.querySelector('.ac').onclick = clearAll; // Добавляем через ДОМ функцию по клику на класс ac

document.querySelector('.buttons').onclick = (event) => { // Ловим нажатие в блоке .buttons
    if(!event.target.classList.contains ('btn')) return; // Первый предохранитель который выйдет, если не кликну по одной из кнопок
    if(event.target.classList.contains('ac')) return; // Второй предохранитель который выйдет, если нажата кнопка ac
    //Если не один из предохранителей не сработал, то продолжаем

    out.textContent = ''; // Теперь 0 заменён на пустую строку чтобы потом рисовать на неё нажатую кнопку
    const key = event.target.textContent; // получаем нажатую кнопку

    //Если нажата 0-9 или .
    if(digit.includes(key)) {
        if (b === "" && sign === "") {
            a += key;
            out.textContent = a;
        }
        else if (a !== "" && b !== "" & finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
    }

    //Если нажата '-', '+', 'X' или '/'
    if(action.includes(key)) {
        sign = key;
        // console.log(a, b, sign);
        out.textContent = sign;
        return;
    }

    //Нажата =
    if (key === "=") {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}