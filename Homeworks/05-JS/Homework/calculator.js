/* Создать калькулятор
    + создать директорию с ИмяФамилия создать index.html и подключить туда этот скрип
    
    Дополнить скрипт
    + добавить сложение, вычитание, умножение, деление
    + вывести alert() при делении на ноль
    ? проверить типы 
    + сделать преобразование типов
*/


// Operator choice
const operator = prompt('Operator (  +, -, *, / ): ');

// First and second number choice
const number1 = prompt('First number: ');
const number2 = prompt('Second number: ');

//Change data type and variables set
let num1 = Number(number1);
let num2 = Number(number2);
let result;

// Calculation of sum +
if (operator == '+') {
    result = num1 + num2;
}

// Calculation of substraction -
else if (operator == '-') {
    result = num1 - num2;
}

// Calculation of multiplication *
else if (operator == '*') {
    result = num1 * num2;
}

// Calculation of devision /
else if (operator == '/') {
    //Alert when deviding on 0
    if(num2 == 0)
    { alert("You deviding on 0") }
    result = num1 / num2;
}

// display the result
console.log(`${num1} ${operator} ${num2} = ${result}`);
window.alert(`${num1} ${operator} ${num2} = ${result}`);