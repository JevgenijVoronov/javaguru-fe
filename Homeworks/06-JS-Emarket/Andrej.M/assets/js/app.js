//render products based on given categories
document.addEventListener("DOMContentLoaded", function renderProducts(data) {
	let productContainer = document.getElementById('product-container');
	productContainer.innerHTML = "";
	data.forEach( element => {
 productContainer.innerHTML += `
            <div class="product-item">
               <div class="prod-image">
                  <img src="${element.imageURL}" alt="">
               </div>
               <div class="prod-data" >
                  <span id="prod-title">${element.name}</span>
                  <span id="prod-price">$ ${element.price}</span>
                  <p id="prod-description">${element.description}</p>
                  <form action="javascript:addToCart('${element.id}')" class="cart-btn">
                     <button class="btn" id="add-to-cart" type="submit">Заказать</button>
                  </form>
               </div>
            </div>
            <div class="vertical-space"></div>
      `;
		}
	);
})
console.log(data)
