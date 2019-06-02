"use strict";

(function dropMenu() {
	var menu =  document.querySelector('nav.wrapper');
	var menuButton = document.querySelector('.mobile-menu');
	var menuIcon = document.querySelector('#mobile-icon');

	menuButton.onclick = function(event){
		menu.classList.toggle('active-menu')
		if(menu.classList.contains('active-menu')){
			menuIcon.innerHTML = '<i class="fas fa-times"></i>'
		}
		else{
			menuIcon.innerHTML = '<i class="fas fa-bars"></i>'
		}
		return false;
	}
})();
(function dropSearch(){
	var searchButton = document.querySelector('#search');
	var searchInput = document.querySelector('#search-input')
	
	searchButton.onclick = function (){
		
		if(document.body.offsetWidth < 1020 && document.body.offsetWidth > 768){
			searchInput.classList.toggle("open")
		}
	}
	
})();


(function updateHeader() {
	let bagTotalPrice = document.querySelector(".total-price"), 
		headerItemsCount = document.querySelector(".items-counter"); 

	bagTotalPrice.innerText = localStorage.totalPrice || "";
 	headerItemsCount.innerText = localStorage.numberOfItems || "0";
})();