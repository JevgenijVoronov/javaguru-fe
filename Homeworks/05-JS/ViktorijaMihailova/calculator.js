// take the operator input
const operator = prompt('Оператор (  +, -, *, / ): ');

// take the operand input
const number1 = Number(prompt('Первое число: '));
const number2 = Number(prompt('Второе число: '));
let result;


if (operator== '+') {
    result = number1 + number2
}

else if (operator == '-') {
    result = number1 - number2
}
else if (operator == '*') {
    result = number1 * number2
}

else if(operator == '/') {
    if(number2 !==0) {
        result = number1 / number2
   } else {
    alert("на ноль делить нельзя")
   }
}else {
    alert("неправильный оператор")
}
 

/*второй вариант*/

/*switch (operator) {
    case '+':
        alert (number1 + number2);
        break;
    case '-':
        alert (number1 - number2);
        break;
    case '/':
        alert (number1 / number2);
        break;
    case '*':
        alert (number1 * number2);
}*/






// using if...else if... else


// display the result
alert(`${number1} ${operator} ${number2} = ${result}`);