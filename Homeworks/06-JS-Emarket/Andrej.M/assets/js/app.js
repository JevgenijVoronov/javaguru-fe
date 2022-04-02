//render products based on given categories
function renderProducts(data) {
	let productContainer = document.getElementById('product-container');
	productContainer.innerHTML = "";
	data.forEach( element => {
 productContainer.innerHTML += `
            <div class="product-item">
               <div class="prod-image">
                  <img src="${element.imageURL}" alt="">
               </div>
               <div class="prod-data" >
                  <span class="prod-title">${element.name}</span>
                  <span class="prod-price">$ ${element.price}</span>
                  <p class="prod-description">${element.description}</p>
                  <form action="javascript:addToCart('${element.id}')" class="cart-btn">
                     <button class="btn" id="add-to-cart" type="submit">Заказать</button>
                  </form>
               </div>
            </div>
            <div class="vertical-space"></div>
      `;
		}
	);
}
document.addEventListener("DOMContentLoaded", renderProducts(data) )

