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
const number1 = Number(prompt('Первое число: '));
const number2 = Number(prompt('Второе число: '));

let result;

// // using if...else if... else

if(operator === '+'){                // if (example)
    result = number1 + number2
}

if(operator === '-'){
    result = number1 - number2
}

if(operator === '*'){
    result = number1 * number2
}

if(operator === '/'){
    result = number1 / number2      // if (exaple)
}




// switch(operator) {                      // switch(example)
//     case '+':
//         result = number1 + number2
//         break;

//     case '-':
//         result = number1 - number2
//         break;

//     case '*':
//         result = number1 * number2
//         break;

//     case '/':
//         result = number1 / number2
//         break;
// }                                       // switch(example)



// display the result
alert(`${number1} ${operator} ${number2} = ${result}`);