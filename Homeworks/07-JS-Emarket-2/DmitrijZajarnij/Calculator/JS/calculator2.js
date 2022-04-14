const numbers = document.querySelectorAll('.btn')
const result = document.querySelector('.screen')

for(number in numbers) {
    numbers[number].onclick = function (e) {
        const inputValue = e.target.innerText;
        printValue(inputValue);
    }
}

function printValue(dima) {
    result.innerHTML += dima;
}

for (ce in numbers){
    numbers[ce] = function () {
        if (result.innerHTML === ce) {
            result.innerHTML = '';
        }
    }
}

// window.onload = document.getElementsByClassName('.numbers');