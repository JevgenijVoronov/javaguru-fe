const data = [
	{
		"id": "pizza_1",
		"name": "Маргарита",
		"price": "5,99",
		"description": "Соус для пиццы, сыр, помидоры, орегано",
		"image": "https://thumb.tildacdn.com/tild3630-3739-4630-b135-636564326335/-/resize/275x/-/format/webp/Margarita-removebg-p.png",
		"category": "pizza"
	},
	{
		"id": "pizza_2",
		"name": "Грибная",
		"price": "6,99",
		"description": "Соус для пиццы, сыр, шампиньоны",
		"image": "https://thumb.tildacdn.com/tild3564-6533-4635-b461-656362303536/-/resize/275x/-/format/webp/senu_pica-removebg-p.png",
		"category": "pizza"
	},
	{
		"id": "pizza_3",
		"name": "Салями",
		"price": "7,99",
		"description": "Соус для пиццы, сыр, салями",
		"image": "https://thumb.tildacdn.com/tild3663-6334-4561-a135-373236643866/-/resize/275x/-/format/webp/Salami-removebg-prev.png",
		"category": "pizza"
	},
	{
		"id": "drink_1",
		"name": "Pepsi",
		"price": "1,50",
		"image": "https://static.tildacdn.com/tild3462-6262-4839-b536-326434643236/pepsi-15.png",
		"category": "drinks"
	},
	{
		"id": "drink_2",
		"name": "Mirinda",
		"price": "2,20",
		"image": "https://static.tildacdn.com/tild3362-6534-4033-b861-366330303864/mirinda-15.png",
		"category": "drinks"
	},
	{
		"id": "drink_3",
		"name": "Pepsi",
		"price": "7,99",
		"image": "https://static.tildacdn.com/tild6337-3138-4265-b066-313238353835/pepsi-033.png",
		"category": "drinks"
	},
]


function renderProducts(data, filter) {
   let productContainer = document.getElementById('product-container');
   productContainer.innerHTML = "";
   data.forEach(element => {
	   if (element.category === filter) {
			template(element);
	   } else if (filter === undefined || filter === 'all') {
			template(element);
	   }
   }); 
}

function template(item) {
	let productContainer = document.getElementById('product-container');
	productContainer.innerHTML +=`
		<div class="product-item">
		<div class="prod-image">
			<img src="${item.image}" alt="">
		</div>
		<div class="prod-data">
			<span id="prod-title">${item.name}</span>
			<span id="prod-price">$ ${item.price}</span>
			<p id="prod-description">${item.description !== undefined ? item.description : ''}</p>
			<form action="javascript:addToCart('${item.id}')" class="cart-btn">
				<button class="btn" id="add-to-cart" type="submit">Заказать</button>
			</form>
		</div>
		</div>
		<div class="vertical-space"></div>
 	`
}


function filter(filter) {
	renderProducts(data, filter);

	// document.getElementsByClassName('nav-item').classList.remove('active');
	document.getElementById(`cat-${filter}`).classList.add('active');
	
}

document.addEventListener("DOMContentLoaded", renderProducts(data));