let number1 = '';
let number2 = '';
let operator = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const buttons = ['-', '+', 'x', '/'];

const out = document.querySelector('.screen p');

function clearAll () {
    a = '';
    b = '';
    operator = '';
    finish = false;
    out.textContent = 0;

}

document.querySelector('.ce').onclick = clearAll;

document.querySelector('.numbers').onclick = (event) => {
    if(!event.target.classList.contains('.btn')) return;
    if(event.target.classList.contains('.ce')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        a += key;
        console.log (a, b, operator);
        out.textContent = a;
    }
} 