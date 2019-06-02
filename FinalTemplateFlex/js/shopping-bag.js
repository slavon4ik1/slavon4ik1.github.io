(function() {


let itemsSection = document.querySelector(".bag-items"), 
	bagTotalCost = document.querySelector("#bag-cost"),
	emptyBagButton = document.querySelector("#empty-bag"),
 	buyNowButton = document.querySelector(".buy-now-button"),
 	emptyBagMessage = document.querySelector(".empty-bag"),
 	thankYouMessage = document.querySelector(".thanks");



/*Загрузка товара на страницу*/

document.addEventListener('DOMContentLoaded', displayItems);

function displayItems() {

	if (!localStorage.items || +localStorage.numberOfItems === 0){
		 emptyBagMessage.style.display = "block";
	}
	else if (localStorage.numberOfItems > 0) {

		let items = JSON.parse(localStorage.items);
	
		items.forEach(function(item){
			itemsSection.innerHTML +=
			'<div class="bag-item">'+'<a href="item.html"><p>View item</p></a>'+'<div class="set-background"></div>'+'<div class="description">'+'<h3 class="item-name">' + item.name + '</h3>'+
				'<p class="price">'+'£<span class="item-price">' + (item.price * item.quantity).toFixed(1) + '</span>'+'</p>' +'<ul>' +'<li>Color: <span id="item-color">' + item.color + '</span></li>' +'<li>Size: <span id="item-size">' + item.size + '</span></li>' +'<li>Quantity: '+'<span class="count minus"> - </span>' +'<span class="item-quantity">' + item.quantity + '</span>' +'<span class="count plus"> + </span>' +'</li>'+'</ul>'+'<button class="remove">Remove item</button>'+'<p class="id" >' + item.id +'</p>'+'</div>'+'</div>' ;
		})
		updateBagTotal();
	}
	let plusButtons = document.querySelectorAll(".count.plus");
	for(let i = 0; i < plusButtons.length; i++) {
		plusButtons[i].addEventListener("click", handlePlus);
	}
	let minusButtons = document.querySelectorAll(".count.minus");
	for(let i = 0; i < minusButtons.length; i++) {
		minusButtons[i].addEventListener("click", handleMinus);
	}
	let removeButtons = document.querySelectorAll(".remove");
	for(let i = 0; i < removeButtons.length; i++) {
		removeButtons[i].addEventListener("click", handleRemove)
	}
};

/*функции меняющие количество товара в корзине(плюс\минус)*/
	
function handlePlus(e) {
	let itemID = +e.target.parentNode.parentNode.parentNode.children[4].innerText,
		itemsArray = JSON.parse(localStorage.items),
		itemsQuantity = e.target.parentNode.children[1],
		itemPrice = e.target.parentNode.parentNode.parentNode.children[1].children[0];
	
	let currentObject = itemsArray.find((currentObject) => currentObject.id === itemID); 
	
	currentObject.quantity++;
	localStorage.setItem("items", JSON.stringify(itemsArray));
	localStorage.totalPrice = (+localStorage.totalPrice + +currentObject.price).toFixed(1); 
	
	localStorage.numberOfItems = +localStorage.numberOfItems + 1;
	itemsQuantity.innerText = currentObject.quantity;
	itemPrice.innerText = ((+currentObject.quantity) * (+currentObject.price)).toFixed(1);

	updateHeader();
	updateBagTotal();
}

function handleMinus(e) {
	let itemID = +e.target.parentNode.parentNode.parentNode.children[4].innerText,
		itemsArray = JSON.parse(localStorage.items),
		itemsQuantity = e.target.parentNode.children[1],
		itemPrice = e.target.parentNode.parentNode.parentNode.children[1].children[0];

	let currentObject = itemsArray.find((currentObject) => currentObject.id === itemID);
		
	if(currentObject.quantity == 1) {
		return;
	}	
	currentObject.quantity--;
	localStorage.setItem("items", JSON.stringify(itemsArray));
	localStorage.totalPrice = (localStorage.totalPrice - currentObject.price).toFixed(1); 
	
	localStorage.numberOfItems = +localStorage.numberOfItems  - 1;
	itemsQuantity.innerText = currentObject.quantity;
	itemPrice.innerText = ((+currentObject.quantity) * (+currentObject.price)).toFixed(1);	

	updateHeader();
	updateBagTotal();
}

/*функции удаления товара*/ 
	
function handleRemove(e) {
	let itemID = +e.target.parentNode.children[4].innerText,
		itemsArray = JSON.parse(localStorage.items),
		itemCard = e.target.parentNode.parentNode;
		
	let currentObject = itemsArray.find((currentObject) => currentObject.id === itemID);

	let newItemsArray = itemsArray.filter((obj) => obj.id != itemID );
	
	localStorage.setItem("items", JSON.stringify(newItemsArray));
	localStorage.totalPrice = (localStorage.totalPrice - (currentObject.price * currentObject.quantity)).toFixed(1);
	localStorage.numberOfItems = +localStorage.numberOfItems  - currentObject.quantity;
	
	itemCard.style.display = "none";
	
	if ( +localStorage.numberOfItems === 0){
		 emptyBagMessage.style.display = "block";
	}
	
	updateHeader();
	updateBagTotal();
	
}

/*Очистить корзину*/

emptyBagButton.addEventListener("click", clearBag);

function clearBag() {

	localStorage.items = [];
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("numberOfItems");
    itemsSection.style.display = "none";

    emptyBagMessage.style.display = "block";
    thankYouMessage.style.display = "none";

    updateHeader();
    updateBagTotal();
}

/*Кнопка покупки*/

buyNowButton.addEventListener("click", buyNow);

function buyNow() {

	localStorage.items = [];
    localStorage.removeItem("totalPrice");
    localStorage.removeItem("numberOfItems");
    emptyBagMessage.style.display = "none";
    itemsSection.style.display = "none";

    thankYouMessage.style.display = "block";

	updateHeader();
	updateBagTotal();
}

function updateHeader() {
	let bagTotalPrice = document.querySelector(".total-price"),
		headerItemsCount = document.querySelector(".items-counter"); 

	bagTotalPrice.innerText = localStorage.totalPrice || "";
 	headerItemsCount.innerText = localStorage.numberOfItems || "0";
}
function updateBagTotal() {
	bagTotalCost.innerText =  localStorage.totalPrice ? "£" + localStorage.totalPrice : "";
}

})();








