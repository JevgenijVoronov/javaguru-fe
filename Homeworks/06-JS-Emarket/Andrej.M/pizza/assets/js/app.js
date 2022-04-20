
function renderProducts(data, filter) {
	let productContainer = document.getElementById('product-container');
	productContainer.innerHTML = "";
	data.forEach(element => {
     if (element.category === filter){
        tempate(element)
      }else if (filter === undefined || filter === 'all'){
         tempate(element)
      }
		});
   }
//--------ITEM TEMPLATE-----------
function tempate(item){
   let productContainer = document.getElementById('product-container');
   productContainer.innerHTML += `
   <div class="product-item">
      <div class="prod-image">
         <img src="${item.imageURL}" alt="">
      </div>
      <div class="prod-data" >
         <span class="prod-title">${item.name}</span>
         <span class="prod-price">$ ${item.price}</span>
         <p class="prod-description">${item.description !==undefined ? item.description :''}</p>
         <form action="javascript:addToCart('${item.id}')" class="cart-btn">
            <button class="btn" id="add-to-cart" type="submit">Заказать</button>
         </form>
      </div>
   </div>
   <div class="vertical-space"></div>`
}

// ---------FILTER-------------
function filter(filter){
   renderProducts (data, filter)
   //-------Active class---------
   
   document.getElementById(`cat-${filter}`).classList.add('active')
   }

document.addEventListener("DOMContentLoaded", renderProducts(data))

