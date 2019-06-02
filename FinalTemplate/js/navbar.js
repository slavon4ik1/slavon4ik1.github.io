'use strict';

var itemsCount = document.querySelector('.cart_amount'),
    burger = document.querySelector('.header_bars_small'),
    burgerOpened = false;

document.querySelector('.cart_sum').textContent = localStorage.getItem('total') === null ? 0 : localStorage.getItem('total');

burger.onclick = function () {
    if (burgerOpened === false) {
        burger.setAttribute('class', 'header_bars_small active');
        burgerOpened = true;
    } else if (burgerOpened === true) {
        burger.setAttribute('class', 'header_bars_small');
        burgerOpened = false;
    }
};



(function () {
    var shoppingBag = localStorage.getItem('shopping_bag'),
        items = JSON.parse(shoppingBag).length;
    itemsCount.textContent = items;
})();
