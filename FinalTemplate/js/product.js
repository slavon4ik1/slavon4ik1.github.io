'use strict';

var catalogParsed = JSON.parse(localStorage.getItem('catalog'));
var idActiveItem = localStorage.getItem('idActiveItem');

var activeProduct = void 0,
    submitItem = void 0;

for (var i = 0; i < catalogParsed.length; i++) {
    if (catalogParsed[i].id === idActiveItem) {
        activeProduct = catalogParsed[i];
    }
}

var mainImg = document.querySelector(".main_image"),
    size = document.querySelector(".thumbnails.size"),
    color = document.querySelector(".thumbnails.color"),
    ul = document.querySelector('.thumbnails_list'),
    addToBag = document.querySelector('.add_to_bag'),
    sizeArr = activeProduct.sizes,
    colorArr = activeProduct.colors;

submitItem = Object.assign({}, activeProduct);

ul.onclick = function (event) {
    var newSrc = event.target.getAttribute('src');
    mainImg.firstElementChild.setAttribute('src', newSrc);
};

addToBag.onclick = function () {
    totalCostRefresh();
    var shoppingBag = localStorage.getItem('shopping_bag'),
        arr = JSON.parse(shoppingBag);
    arr.push(submitItem);
    localStorage.setItem('shopping_bag', JSON.stringify(arr));
    var sBag = localStorage.getItem('shopping_bag'),
        items = JSON.parse(sBag).length;
    itemsCount.textContent = items;
};

mainImg.firstElementChild.setAttribute('src', 'img/' + activeProduct.preview[0] + '.png');

for (var _i = 0; _i < sizeArr.length; _i++) {
    filterSizes(sizeArr[_i], _i);
}

for (var _i2 = 0; _i2 < colorArr.length; _i2++) {
    filterColors(colorArr[_i2], _i2);
}

document.querySelector('.products_title').textContent = activeProduct.title;
document.querySelector('.product_description').textContent = activeProduct.description;
document.querySelector('.product_price').textContent = '£' + activeProduct.price;

for (var _i3 = 0; _i3 < activeProduct.preview.length; _i3++) {
    var li = document.createElement('li'),
        img = document.createElement('img');
    li.setAttribute('class', 'thumbnail_item');
    img.setAttribute('src', 'img/' + activeProduct.preview[_i3] + '.png');
    li.appendChild(img);
    ul.appendChild(li);
}

function filterSizes(item, iterator) {
    var label = document.createElement('label');
    label.setAttribute('for', 'size_' + iterator);
    var input = document.createElement('input');
    input.setAttribute('id', 'size_' + iterator);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'image_thumb_size');
    input.setAttribute('value', item);
    input.addEventListener('click', function (event) {
        submitSize(event.target.value);
    });
    label.textContent = item;
    size.appendChild(input);
    size.appendChild(label);
}

function filterColors(item, iterator) {
    var label = document.createElement('label');
    label.setAttribute('for', 'color_' + iterator);
    var input = document.createElement('input');
    input.setAttribute('id', 'color_' + iterator);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'image_thumb_color');
    input.setAttribute('value', item);
    input.addEventListener('click', function (event) {
        submitColor(event.target.value);
    });
    label.textContent = item;
    color.appendChild(input);
    color.appendChild(label);
}

function submitColor(value) {
    submitItem.colors = [];
    submitItem.colors.push(value);
}

function submitSize(value) {
    submitItem.sizes = [];
    submitItem.sizes.push(value);
}

function totalCostRefresh() {
    var total = JSON.parse(localStorage.getItem('total'));
    document.querySelector('.cart_sum').textContent = total += submitItem.price;
    localStorage.removeItem('total');
    localStorage.setItem('total', JSON.stringify(total));
}
