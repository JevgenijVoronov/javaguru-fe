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
const number1 = Number (prompt('First number: '));
const number2 = Number (prompt('Second number: '));

//variables set
let result;

// Calculation of sum +
switch(operator) {
    case '+':
         result = number1 + number2;
        break;

// Calculation of substraction -
    case '-':
         result = number1 - number2;
        break;

// Calculation of multiplication *
    case '*':
         result = number1 * number2;
        break;

// Calculation of devision /
    case '/':
         result = number1 / number2;

         //Alert that you deviding on 0
         case '0':
             alert("You deviding on 0");
        break;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);
window.alert(`${number1} ${operator} ${number2} = ${result}`);