

function renderProducts(data, filter) {
	let productContainer = document.getElementById('product-container');
	productContainer.innerHTML = "";
	data.forEach(element => {
		if (element.category === filter) {
			 template(element);

		} else if (element.description === filter) {
			template(element);

		} else  if (element.ingredients === filter) {
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


function getAll() {
	renderProducts(data, "all")
}

function getPizza() {
	renderProducts(data, "pizza")
}

function getDrinks() {
	renderProducts(data, "drinks")
}

function getDescription() {
	renderProducts(data, "description")
}

function getIngredients() {
	renderProducts(data, "ingredients")
}


// document.addEventListener("DOMContentLoaded", function() {        // Example 1 (display menu)
//    renderProducts(data);
// });
 
//  window.onload = renderProducts(data);                            // Example 2 (display menu)

document.addEventListener("DOMContentLoaded", renderProducts(data,))  // Example 3 (display menu)