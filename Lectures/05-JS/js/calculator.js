// /* Создать калькулятор
//     создать директорию с ИмяФамилия создать index.html и подключить туда этот скрип
    
//     Дополнить скрипт
//     - добавить сложение, вычитание, умножение, деление
//     - вывести alert() при делении на ноль
//     - проверить типы 
//     - сделать преобразование типов
// */


// // take the operator input
// const operator = prompt('Оператор (  +, -, *, / ): ');

// // take the operand input
// const number1 = Number(prompt('Первое число: ')); 
// const number2 = Number(prompt('Второе число: ')); 

// let result;

// if (number1 !== NaN || number2 !== NaN) {
//    continue;
// } else {
//     alert('Не чесло')
// }

// // using if...else switch


// // display the result
// alert(`${number1} ${operator} ${number2} = ${result}`);





// take the operator input
const operator = prompt('Оператор (  +, -, *, / ): ');

// take the operand input

const number1 = prompt('Первое число: ')
if (isNaN(number1)) {
  alert('Нужно писать число!');
} 
const number2 = prompt('Второе число: ');
if (isNaN(number2)) {
    alert("Нужно писать число!");
  } 
//   let result 

    if(operator == "+"){
   // alert(parseInt(number1) + parseInt(number2))
   alert((+number1 + +number2).toFixed(1))
}
else if (operator == "-"){
   // alert(parseInt(number1) - parseInt(number2)) 
   alert((+number1 - +number2).toFixed(1))
}
else if (operator == "*"){
    // alert(parseInt(number1) * parseInt(number2))
    alert(+number1 * +number2)
}
else if(operator == "/" && parseInt(number2) === 0){
    alert("На 0 делить нельзя")  // Не выводит. 
}
else if (operator == "/"){
    alert((parseInt(number1) / parseInt(number2)).toFixed(1))  
}


// using if...else if... else


// display the result
//console.log(`${parseInt(number1)} ${operator} ${parseInt(number2)} = ${result}`);