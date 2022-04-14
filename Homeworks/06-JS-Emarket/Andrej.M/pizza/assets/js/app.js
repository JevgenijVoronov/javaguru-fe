
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
  
  // document.getElementById(`cat-${filter}`).classList.add('active')

   }
//----------------Active Menu------------
   // Add active class to the current button / https://html5css.ru/howto/howto_js_active_element.php

   let btns = document.getElementsByClassName("nav-item"); // обащаемя к .nav-item

   for (let i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function() {
       let current = document.getElementsByClassName("active");
       current[0].className = current[0].className.replace(" active", "");
       this.className += " active";
     });
   }

document.addEventListener("DOMContentLoaded", renderProducts(data))

