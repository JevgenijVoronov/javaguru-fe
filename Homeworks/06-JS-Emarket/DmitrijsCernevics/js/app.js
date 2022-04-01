const data = [
    {
		"id": "Pizza1",
		"name": "Маргарита",
		"price": "10",
		"description": "тесто, сыр, мясо",
		"imageURL": "./images/Грибы.png",
		"category": "pizza"
	},
	{
		"id": "Pizza2",
		"name": "Салями",
		"price": "10",
		"description": "тесто, сыр, мясо",
		"imageURL": "./images/Грибы.png",
		"category": "pizza"
	},
	{
		"id": "Pizza3",
		"name": "С Море продуктами",
		"price": "10",
		"description": "тесто, сыр, мясо",
		"imageURL": "./images/Грибы.png",
		"category": "pizza"
	},
	{
		"id": "Pizza4",
		"name": "Грибы",
		"price": "10",
		"description": "тесто, сыр, мясо",
		"imageURL": "./images/Грибы.png",
		"category": "pizza"
	}
]
window.onload = renderProduct(data); // Команда которая запускает функцию
function renderProduct (data) { //создаём функцию и указываем путь откуда берём данные и потом её можно будет вызвать
    let productContainer = document.getElementById('product-container');  //задаём переменную с путём куда именно вставлять данные
    productContainer.innerHTML = ""; //что именно передаём
    data.forEach(element => { //из данных получаем определённый элемент
        productContainer.innerHTML += `<div><img src="${element.imageURL}" alt=""></div>` //создаём элемент name из данных data в блоке <div>, есть просто =, то каждый элемент name будет перезаписывать следующий элемент name. Поэтому даобавляется +.
    });
}


// debugger;