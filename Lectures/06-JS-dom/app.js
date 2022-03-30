const data = [
   {
       "id": "pizza-1",
       "name": "Маргарита",
       "price": "10",
       "description": "Тесто, сыр, мясо",
       "image": "https://thumb.tildacdn.com/tild3630-3739-4630-b135-636564326335/-/resize/275x/-/format/webp/Margarita-removebg-p.png",
       "category": "pizza"
   },
   {
       "id": "drink-1",
       "name": "Pepsi",
       "price": "5",
       "description": "Pepsi",
       "image": "https://thumb.tildacdn.com/tild3630-3739-4630-b135-636564326335/-/resize/275x/-/format/webp/Margarita-removebg-p.png",
       "category": "dinks"
   },
   {
      "id": "drink-1",
      "name": "Pepsi",
      "price": "5",
      "description": "Pepsi",
      "image": "https://thumb.tildacdn.com/tild3630-3739-4630-b135-636564326335/-/resize/275x/-/format/webp/Margarita-removebg-p.png",
      "category": "dinks"
  }
]


function renderProducts(data) {
   let productContainer = document.getElementById('product-container');
   productContainer.innerHTML = "";
   data.forEach(element => {
      productContainer.innerHTML +=`
         <div class="product-item">
            <div class="prod-image">
               <img src="${element.image}" alt="">
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
      `
   }); 
}

debugger;











// render products based on given categories
// function renderProducts(data) {
// 	let productContainer = document.getElementById('product-container');
// 	productContainer.innerHTML = "";
// 	data.forEach(item => {
//       productContainer.innerHTML += `
//             <div class="product-item">
//                <div class="prod-image">
//                   <img src="${item.imageURL}" alt="">
//                </div>
//                <div class="prod-data" >
//                   <span id="prod-title">${item.name}</span>
//                   <span id="prod-price">$ ${item.price}</span>
//                   <p id="prod-description">${item.description}</p>
//                   <form action="javascript:addToCart('${item.id}')" class="cart-btn">
//                      <button class="btn" id="add-to-cart" type="submit">Заказать</button>
//                   </form>
//                </div>
//             </div>
//             <div class="vertical-space"></div>
//       `;
// 		}
// 	);
// }


// window.addEventListener("keydown", function (event) {
//    alert("Вы нажали на кнопку: " + event.key)
//  })