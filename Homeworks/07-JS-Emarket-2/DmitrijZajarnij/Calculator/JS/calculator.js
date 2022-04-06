const operator = ['+', '-', 'x', '/'];
const one = ['1'];
const two = ['2'];
const three = ['3'];
const four = ['4'];
const five = ['5'];
const six = ['6'];
const seven = ['7'];
const eight = ['8'];
const nine = ['9'];

const number1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const number2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']


if(isNaN(one, two, three, four, five, six, seven, eight, nine)){
    alert('That is not a number!Please try again and input ONLY number!')
}

if(operator === '+'){                
    result = number1 + number2
}

if(operator === '-'){
    result = number1 - number2
}

if(operator === 'x'){
    result = number1 * number2
}

if(operator === '/'){
    result = number1 / number2      
}