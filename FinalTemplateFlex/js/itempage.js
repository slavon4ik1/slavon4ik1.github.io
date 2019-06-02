"use strict";

/*Фотомикшер*/

(function handleSwitcher() {
	let photoSwitchers = document.querySelectorAll(".switcher div"),
		activePhoto = document.querySelector(".item-large");

	for(let i = 0; i < photoSwitchers.length; i++) {
		photoSwitchers[i].addEventListener("click", function() {
			activePhoto.style.backgroundImage = getComputedStyle(photoSwitchers[i]).backgroundImage;
			
			for(let j = 0; j < photoSwitchers.length; j++) { 
				photoSwitchers[j].classList.remove("active");
			}
			photoSwitchers[i].classList.add("active"); 
		})
	}
})();


/* Цвет\Размер */


(function handleSize() {
	let sizeOptions = document.querySelectorAll(".size-list li");

	for (let i = 0; i < sizeOptions.length; i++) {
		sizeOptions[i].addEventListener("click", function() {
			for (let j = 0; j < sizeOptions.length; j++) {
				sizeOptions[j].classList.remove("checked");
			}
			sizeOptions[i].classList.add("checked");
		})
	}
})();


(function handleColor() {
	let colorOptions = document.querySelectorAll(".color-list li");

	for (let i = 0; i < colorOptions.length; i++) {
		colorOptions[i].addEventListener("click", function() {
			for(let j = 0; j < colorOptions.length; j++) {
				colorOptions[j].classList.remove("checked");
			}
			colorOptions[i].classList.add("checked");
		})
	}

})();



/*Добавление товара в корзину*/



let addToBagButton = document.querySelector(".button-add"),
	jsonItemsArray = localStorage.items ? JSON.parse(localStorage.items) : [],
	total = +localStorage.totalPrice || 0,
	itemsNumber = localStorage.numberOfItems || 0;

addToBagButton.addEventListener("click", addItem);

function addItem() {
	let name = document.querySelector("#item-name").innerText,
 		price = document.querySelector("#item-price").innerText,
 		size = document.querySelector(".size-list .checked").innerText,
 		color = document.querySelector(".color-list .checked").innerText,
 		photo = getComputedStyle(document.querySelector(".item-large")).backgroundImage,
 		quantity = 1;

 	let newItem = {
 		name: name,
 		price: price,
 		size: size,
 		color: color,
 		photo: photo,
 		quantity: 1,
 		id: Date.now()
 	}

 	total += parseFloat(price);
    localStorage.setItem('totalPrice', total.toFixed(1)); 
    itemsNumber++;
    localStorage.setItem("numberOfItems", itemsNumber); 
  
    let checkRepeat = jsonItemsArray.some(function(item) { 
    	if(item.name === name && item.size === size && item.color === color) { 
			
    		item.quantity ++;
    		return true;
    	}
    	else {
    		return false;
    	}
    })
    
   	if(!checkRepeat) {
   		jsonItemsArray.push(newItem);
   	}
 	localStorage.setItem("items", JSON.stringify(jsonItemsArray));
 	updateHeader();
}



function updateHeader() {
	let bagTotalPrice = document.querySelector(".total-price"),  
		headerItemsCount = document.querySelector(".items-counter");

	bagTotalPrice.innerText = localStorage.totalPrice || "";
 	headerItemsCount.innerText = localStorage.numberOfItems || "0";
}



