'use strict';

var shoppingBag = [],
    catalog = JSON.parse(localStorage.getItem('catalog')),
    categories = [],
    promoCatalogWrapper = document.querySelector('.promo_block .catalog');

localStorage.setItem('total', JSON.stringify(0));
localStorage.setItem('shopping_bag', JSON.stringify(shoppingBag));

categories = catalog;

for (var i = 0; i < 4; i++) {
    fillTheCatalog(catalog[i], promoCatalogWrapper);
}
function fillTheCatalog(product, listTo) {
    var a = document.createElement('a'),
        catalogCard = document.createElement('div'),
        productImage = document.createElement('div'),
        img = document.createElement('img'),
        productName = document.createElement('div'),
        productPrice = document.createElement('div');

    a.setAttribute('href', 'product.html');

    catalogCard.setAttribute('class', 'catalog_card');
    catalogCard.setAttribute('id', product.id);

    productImage.setAttribute('class', 'product_image');
    img.setAttribute('src', 'img/' + product.thumbnail);

    productName.setAttribute('class', 'product_name');
    productPrice.setAttribute('class', 'product_price');

    productName.textContent = product.title;
    productPrice.textContent = '\xA3 ' + +product.price;

    catalogCard.appendChild(productImage);
    productImage.appendChild(img);

    catalogCard.appendChild(productName);
    catalogCard.appendChild(productPrice);

    a.appendChild(catalogCard);

    listTo.appendChild(a);

    catalogCard.click = function () {
        localStorage.setItem('idActiveItem', event.target.parentNode.getAttribute('id'));
    };
}
