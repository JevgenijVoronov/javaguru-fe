const display = document.querySelector(".result")     //экран
//const buttons = document.querySelector(".container");    //обращаемся к .buttons (предыдущий код)

function insert(num) {
  display.textContent = display.textContent + num     // вывод значения кнопок

}

function reset() {
  display.textContent = ""                            // сброс
}

function back() {                                    // сброс на 1 символ
  let exp = display.textContent
  display.textContent = exp.substring(0, exp.length - 1)
}

function equals() {                                 // равно
  let exp = display.textContent
  if (exp) {
    display.textContent = eval(exp)
  }
}
// function percent(){
//   display.innerText = eval(display.innerText)/100    //проценты
//}


//---------------------------// Этот код тормозил!

// buttons.addEventListener("click", function (event) {   //вешаем функцию click

//    if (!event.target.classList.contains("btn")) return;   //проверка на .btn

//   const btnText = event.target.innerText;               //извлекаем текст кнопки


//   switch (btnText) {
//     // case "C":
//     //   display.innerText = "";                                //кнопка сброса
//     //   break;

//       case "Del":
//       display.innerText = display.innerText.slice(0, -1);
//       break;

//     case "=":
//        // if (result.innerText.search(/[^0-9*/+-.)(]/im) != -1) return;   //eval - проверка безопастности
//       display.innerText = eval(display.innerText).toFixed(2);       // кнопка =
//       break;

//     default:
//       display.innerText += btnText;                          //выводим значения на экран
//   }
// });
