/* Создать калькулятор
    создать директорию с ИмяФамилия создать index.html и подключить туда этот скрип
    
    Дополнить скрипт
    - добавить сложение, вычитание, умножение, деление
    - вывести alert() при делении на ноль
    - проверить типы 
    - сделать преобразование типов
*/


// take the operator input
const operator = prompt('Оператор (  +, -, *, / ): ');

// take the operand input
const number1 = prompt('Первое число: ');
const number2 = prompt('Второе число: ');

let result;

// using if...else if... else


// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);