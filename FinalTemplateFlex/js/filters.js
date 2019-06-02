
"use strict";

(function chooseFilter() {
	let filterCategories = document.querySelectorAll(".filters .filter");
	
	for(let i = 0; i < filterCategories.length; i++) {

 	let chosenOptionContainer = filterCategories[i].children[1];
 	let filterOptions = filterCategories[i].lastElementChild.children;
 	let	filterName = filterCategories[i].children[0];
 	let filtersTablet = document.querySelectorAll(".filters-tablet li span");
		
 	for (let j = 0; j < filterOptions.length; j++) {
 		filterOptions[j].addEventListener("click", changeFilter);
 		
		
 		 function changeFilter() {
 		 	if (filterOptions[j].innerText !== "Not selected") {
 	 			chosenOptionContainer.innerHTML = filterOptions[j].innerHTML;
				
 	 			filtersTablet[i].innerHTML = filterOptions[j].innerHTML; 
 	 			filtersTablet[i].style.color = "#f14a58"; 

 	 			filterName.classList.add("chosen-filter");
 	 			filterCategories[i].classList.add("chosen");

 				for (var k = 0; k < filterOptions.length; k++) {
 					filterOptions[k].style.color = "#000";
 				}
 				filterOptions[j].style.color = "#f14a58"; 
 		 	}
 		 	else if (filterOptions[j].innerText === "Not selected") {
 		 		chosenOptionContainer.innerHTML = ""; 
 		 		filterName.classList.remove("chosen-filter");
 		 		filterCategories[i].classList.remove("chosen");
				filtersTablet[i].innerHTML = filterOptions[j].innerHTML
 		 		filtersTablet[i].style.color = "#000";
 		 		for (var k = 0; k < filterOptions.length; k++) {
 				filterOptions[k].style.color = "#000";
 				}
 		 	}
		}
 	}
 }
})();


