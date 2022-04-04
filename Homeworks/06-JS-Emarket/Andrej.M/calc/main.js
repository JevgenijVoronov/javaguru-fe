const calc = document.querySelector(".buttons"); //обращаемся к .buttons
const result = document.querySelector(".result"); //экран

calc.addEventListener("click", function (event) {   //вешаем функцию click

  if (!event.target.classList.contains("btn")) return; //проверка на .btn

  const value = event.target.innerText; //извлекаем текст кнопки


  switch (value) {
    case "C":
      result.innerText = ""; //кнопка сброса
      break;

    case "=":
      if (result.innerText.search(/[^0-9*/+-.)(]/im) != -1) return; //eval - проверка безопастности
      result.innerText = eval(result.innerText).toFixed(2);       // кнопка =
      break;

    default:
      result.innerText += value; //выводим значения на экран
  }
});
