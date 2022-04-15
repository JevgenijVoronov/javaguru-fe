const data = [

	// Пицы
    {
		"id": "Pizza1",
		"name": "Аррива",
		"price": "10",
		"description": "30 см, 590 г, Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок",
		"imageURL": "./images/Аррива.jpeg",
		"category": "pizza"
	},
	{
		"id": "Pizza2",
		"name": "Гавайская",
		"price": "9",
		"description": "30 см, 650 г, Ветчина, ананасы, моцарелла, томатный соус",
		"imageURL": "./images/Гавайская.jpeg",
		"category": "pizza"
	},
	{
		"id": "Pizza3",
		"name": "Диабло",
		"price": "10",
		"description": "30 см, 740 г, Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
		"imageURL": "./images/Диабло.jpeg",
		"category": "pizza"
	},
	{
		"id": "Pizza4",
		"name": "Додо",
		"price": "11",
		"description": "30 см, 740 г, Бекон, митболы, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, томатный соус",
		"imageURL": "./images/Додо.jpeg",
		"category": "pizza"
	},
	{
		"id": "Pizza5",
		"name": "Пепперони",
		"price": "7",
		"description": "30 см, 580г, Пикантная пепперони, увеличенная порция моцареллы, томатный соус",
		"imageURL": "./images/Пепперони.jpeg",
		"category": "pizza"
	},

	// Напитки
	{
		"id": "Drink1",
		"name": "Вода",
		"price": "1.5",
		"description": "BonAqua, негазированная, 0,5 л",
		"imageURL": "./images/Вода.jpeg",
		"category": "pizza"
	},
	{
		"id": "Drink2",
		"name": "Кола",
		"price": "2",
		"description": "Газированный напиток Coca-cola, 0.5л",
		"imageURL": "./images/Кола.jpeg",
		"category": "pizza"
	},
	{
		"id": "Drink3",
		"name": "Спрайт",
		"price": "2",
		"description": "Газированный напиток Sprite, 0.5л",
		"imageURL": "./images/Спрайт.jpeg",
		"category": "pizza"
	},
	{
		"id": "Drink4",
		"name": "Фанта",
		"price": "2",
		"description": "Газированный напиток Fanta, 0.5л",
		"imageURL": "./images/Фанта.jpeg",
		"category": "pizza"
	},
	{
		"id": "Drink5",
		"name": "Чай",
		"price": "1.5",
		"description": "FuzeTea Черный с лимоном и лемонграссом, 0,5 л",
		"imageURL": "./images/Чай.jpeg",
		"category": "pizza"
	}
]
window.onload = renderProduct(data); // Команда которая вызывает функцию
function renderProduct (data) { //создаём функцию и указываем путь откуда берём данные и её можно будет вызвать
    let productContainer = document.getElementById('product-container'); //задаём переменную с путём куда именно вставлять данные
    productContainer.innerHTML = ""; //что именно передаём
    data.forEach(element => { //из данных получаем определённый элемент
        productContainer.innerHTML += `
        <div class="product-item">
            <div class="prod-image">
                <img src="${element.imageURL}" alt="">
            </div>
            <div class="prod-data">
                <span id="prod-title">${element.name}</span>
                <span id="prod-price">€ ${element.price}</span>
                <span id="prod-price">${element.description}</span>
                <form action="javascript:addToCart('${element.id}')" class="cart-btn">
				<button class="btn" id="add-to-cart" type="submit">Заказать</button>
			</form>
            </div>
        </div>
        ` //создаём элемент из данных data в блоке <div>, ести просто =, то каждый элемент будет перезаписывать следующий элемент. Поэтому даобавляется +.
    });
}


// debugger;