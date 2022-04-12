const numbers = document.querySelectorAll('.btn')
const result = document.querySelector('.screen')
const action = document.querySelector('plus', 'minus', 'divide', 'multiply', 'equal', 'ce')

for(number in numbers) {
    numbers[number].onclick = function (e) {
        const inputValue = e.target.innerText;
        printValue(inputValue);
    }
}

function printValue(dima) {
    result.innerHTML += dima;
}


// window.onload = document.getElementsByClassName('.numbers');