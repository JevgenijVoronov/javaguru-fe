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
		"category": "drinks"
	},
	{
		"id": "Drink2",
		"name": "Кола",
		"price": "2",
		"description": "Газированный напиток Coca-cola, 0.5л",
		"imageURL": "./images/Кола.jpeg",
		"category": "drinks"
	},
	{
		"id": "Drink3",
		"name": "Спрайт",
		"price": "2",
		"description": "Газированный напиток Sprite, 0.5л",
		"imageURL": "./images/Спрайт.jpeg",
		"category": "drinks"
	},
	{
		"id": "Drink4",
		"name": "Фанта",
		"price": "2",
		"description": "Газированный напиток Fanta, 0.5л",
		"imageURL": "./images/Фанта.jpeg",
		"category": "drinks"
	},
	{
		"id": "Drink5",
		"name": "Чай",
		"price": "1.5",
		"description": "FuzeTea Черный с лимоном и лемонграссом, 0,5 л",
		"imageURL": "./images/Чай.jpeg",
		"category": "drinks"
	}
]

// window.onload = renderProduct(data); // Команда которая вызывает функцию

function renderProducts (data, filter) { //создаём функцию и указываем путь откуда берём данные и её можно будет вызвать
	console.log(filter);
    let productContainer = document.getElementById('product-container'); //задаём переменную с путём куда именно вставлять данные
    productContainer.innerHTML = ""; //что именно передаём
    data.forEach(element => { // данные каждого массива(их у нас 10) заливаются из переменной data в переменную element и пока массивы не закончатся, функция не остановится
		if (element.category === filter) { // сравниваем название категории из данных === с фильтром который был переназван вызовом одной из трёх функций
			template(element); // если if = true, то element в котором залиты данные передаётся в новую функцию template
		} else if (filter === undefined || filter === 'all') {
			template(element); // если if = true, то element в котором залиты данные передаётся в новую функцию template
		}
    });
}

function template(item) { // новая функция tamplate переназывает переменную element в item
	let productContainer = document.getElementById('product-container'); // заново задаём переменную с путём куда именно вставлять данные
	productContainer.innerHTML += `
        <div class="product-item">
            <div class="prod-image">
                <img src="${item.imageURL}" alt="">
            </div>
            <div class="prod-data">
                <span id="prod-title">${item.name}</span>
                <span id="prod-price">€ ${item.price}</span>
                <span id="prod-price">${item.description}</span>
                <form action="javascript:addToCart('${item.id}')" class="cart-btn">
				<button class="btn" id="add-to-cart" type="submit">Заказать</button>
			</form>
            </div>
        </div>
        `
}

function getAll() {
	renderProducts(data, 'all'); // при вызове этой функции getAll = filter
}

function getPizza() {
	renderProducts(data, 'pizza'); // при вызове этой функции pizza = filter
}

function getDrinks() {
	renderProducts(data, 'drinks'); // при вызове этой функции drinks = filter
}

// debugger;
document.addEventListener("DOMContentLoaded", renderProducts(data));