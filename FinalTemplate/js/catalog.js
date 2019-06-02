'use strict';

document.querySelector('.cart_sum').textContent = JSON.parse(localStorage.getItem('total'));

var catalog = JSON.parse(localStorage.getItem('catalog')),
    cromoCatalogWrapper = document.querySelector('.promo_block .catalog'),
    catalogWrapper = document.querySelector('.main_catalog .catalog'),
    showMoreButton = document.querySelector('#show_more'),
    categories = [],
    state = false;

for (var i = 0; i < 8; i++) {
	fillTheCatalog(catalog[i], cromoCatalogWrapper);
}

function fillTheCatalog(product, listTo) {
	var catalogCard = document.createElement('div'),
	    productImage = document.createElement('div'),
	    productName = document.createElement('div'),
	    productPrice = document.createElement('div'),
	    img = document.createElement('img'),
	    a = document.createElement('a');

	catalogCard.setAttribute('class', 'catalog_card');
	catalogCard.setAttribute('id', product.id);

	catalogCard.appendChild(productImage);
	productImage.setAttribute('class', 'product_image');
	productImage.appendChild(img);
	img.setAttribute('src', 'img/' + product.thumbnail);

	catalogCard.appendChild(productName);
	productName.setAttribute('class', 'product_name');
	productName.textContent = product.title;

	catalogCard.appendChild(productPrice);
	productPrice.setAttribute('class', 'product_price');
	productPrice.textContent = '\xA3 ' + +product.price;

	listTo.appendChild(a);
	a.appendChild(catalogCard);
	a.setAttribute('href', 'product.html');
	  if(product.hasNew == true){
      a.classList.add("new");
    }
	catalogCard.onclick = function (event) {
		localStorage.setItem('idActiveItem', event.target.parentNode.getAttribute('id'));
	};
}

var filterItem = document.querySelectorAll('.filter_select input'),
    filterType = void 0,
    filterValue = void 0;

function handleFilterChange(event) {
	filterType = event.target.name;
	filterValue = event.target.value;

	var filterItem = document.querySelector('#' + event.target.name),
	    filterSpan = document.querySelector('#' + event.target.name + ' span');

	event.target.value == 'not_selected' ? filterItem.setAttribute('class', 'filter_item') : filterItem.setAttribute('class', 'filter_item selected');

	filterSpan.textContent = event.target.parentNode.textContent;
	refresh(filterType, filterValue);
};

for (var _i4 = 0; _i4 < filterItem.length; _i4++) {
	filterItem[_i4].onchange = handleFilterChange;
}

function refresh() {
	var filterType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fashion';
	var filterValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'not_selected';

	categories = [];
	while (catalogWrapper.children[0]) {
		catalogWrapper.removeChild(catalogWrapper.children[0]);
	}
	// filter(filterType, filterValue);
}

/*=== filter ===*/

var filterDropdown = document.querySelector('.adaptive_dropdown'),
    filterState = false;

filterDropdown.onclick = function () {
	if (filterState === false) {
		filterDropdown.setAttribute('class', 'adaptive_dropdown active');
		filterState = true;
	} else if (filterState = true) {
		filterDropdown.setAttribute('class', 'adaptive_dropdown');
		filterState = false;
	}
};
