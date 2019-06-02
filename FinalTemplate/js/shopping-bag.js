'use strict';

var shoppingBag = JSON.parse(localStorage.getItem('shopping_bag'));

var buysubmit = document.querySelector('.buy_submit');
var bagItems = document.querySelector('.bag_items');
var emptyBag = document.querySelector('.empty_bag');
var finalArray = void 0;

var ShoppingBagStuff = {};

shoppingBag.forEach(function (value) {
    if (typeof ShoppingBagStuff[JSON.stringify(value)] == 'undefined') ShoppingBagStuff[JSON.stringify(value)] = [];
    ShoppingBagStuff[JSON.stringify(value)].push(JSON.stringify(value));
});

finalArray = Object.keys(ShoppingBagStuff).map(function (key) {
    return ShoppingBagStuff[key];
});

fillTheBag();
function fillTheBag() {
    try {
        for (var i = 0; i < finalArray.length; i++) {
            if (JSON.parse(finalArray[i][0]).length = 0) {
                // document.location.href = 'catalog.html';
            }
            createBagItem(JSON.parse(finalArray[i][0]), i, finalArray[i].length);
        }
        getPrice();
    } catch (event) {
        // document.location.href = 'catalog.html';
    }
}

emptyBag.onclick = cleanBag;
buysubmit.onclick = purchase;

function cleanBag() {
    var totalCost = document.querySelector('#total_cost');
    console.log(totalCost)
    localStorage.removeItem('shopping_bag');
    localStorage.setItem('shopping_bag', JSON.stringify([]));
    checkItemsCount();
    localStorage.removeItem('total');
    localStorage.setItem('total', JSON.stringify(0));
}

function createBagItem(item, iterator, length) {
    var bagItem = document.createElement('div'),
        itemImage = document.createElement('div'),
        img = document.createElement('img'),
        itemText = document.createElement('div'),
        itemName = document.createElement('div'),
        itemPrice = document.createElement('div'),
        itemProps = document.createElement('div'),
        itemColor = document.createElement('div'),
        itemSize = document.createElement('div'),
        itemQuantity = document.createElement('div'),
        quantityMinus = document.createElement('span'),
        quantity = document.createElement('span'),
        quantityPlus = document.createElement('span'),
        itemRemove = document.createElement('button');

    bagItem.setAttribute('class', 'bag_item');
    itemImage.setAttribute('class', 'item_image');
    img.setAttribute('src', 'img/' + item.thumbnail);
    itemText.setAttribute('class', 'item_text');
    itemName.setAttribute('class', 'item_name');
    itemPrice.setAttribute('class', 'item_price');
    itemProps.setAttribute('class', 'item_props');
    itemColor.setAttribute('class', 'item_color');
    itemSize.setAttribute('class', 'item_size');
    itemQuantity.setAttribute('class', 'item_quantity');
    quantityMinus.setAttribute('class', 'quantity_minus');
    quantityPlus.setAttribute('class', 'quantity_plus');
    itemRemove.setAttribute('class', 'item_remove');
    itemRemove.setAttribute('name', iterator);
    quantityPlus.setAttribute('name', iterator);
    quantityMinus.setAttribute('name', iterator);
    itemRemove.addEventListener('click', removeFromBag);

    itemRemove.textContent = 'Remove item';
    itemName.textContent = item.title;
    itemPrice.textContent = '\xA3 ' + item.price;
    itemColor.textContent = 'Color: ' + item.colors[0];
    itemSize.textContent = 'Size: ' + item.sizes[0];
    itemQuantity.textContent = 'Quantity:';
    quantityMinus.textContent = '-';
    quantity.textContent = length;
    quantityPlus.textContent = '+';

    quantityPlus.onclick = addOneItem;
    quantityMinus.onclick = deleteOneItem;

    bagItems.appendChild(bagItem);
    bagItem.appendChild(itemImage);
    itemImage.appendChild(img);
    bagItem.appendChild(itemText);
    bagItem.appendChild(itemText);
    itemText.appendChild(itemName);
    itemText.appendChild(itemPrice);
    itemText.appendChild(itemProps);
    itemProps.appendChild(itemColor);
    itemProps.appendChild(itemSize);
    itemProps.appendChild(itemQuantity);
    itemQuantity.appendChild(quantityMinus);
    itemQuantity.appendChild(quantity);
    itemQuantity.appendChild(quantityPlus);
    itemProps.appendChild(itemRemove);
}

function removeFromBag(event) {
    var positionInArr = event.target.getAttribute('name');
    finalArray.splice(positionInArr, 1);
    rerun();
    refreshBag();
    fillTheBag();
}

function addOneItem(event) {
    var iterator = event.target.getAttribute('name');
    finalArray[iterator].push(finalArray[iterator][0]);
    getPrice();
    refreshBag();
    rerun();
    fillTheBag();
    checkItemsCount();
}

function deleteOneItem(event) {
    var iterator = event.target.getAttribute('name');
    finalArray[iterator].splice(finalArray[iterator][0], 1);
    getPrice();
    refreshBag();
    rerun();
    fillTheBag();
    checkItemsCount();
}

function rerun() {
    while (bagItems.children[0]) {
        bagItems.removeChild(bagItems.children[0]);
    }
}

function getPrice() {
    var finalPrice = 0;
    for (var i = 0; i < finalArray.length; i++) {
        for (var k = 0; k < finalArray[i].length; k++) {
            finalPrice += JSON.parse(finalArray[i][k]).price;
        }
    }
    document.querySelector('#total_cost').textContent = '\xA3 ' + finalPrice;
    document.querySelector('.cart_sum').textContent = '' + finalPrice;
    localStorage.removeItem('total');
    localStorage.setItem('total', JSON.stringify(finalPrice));
}

function refreshBag() {
    var newArr = [];
    for (var i = 0; i < finalArray.length; i++) {
        for (var k = 0; k < finalArray[i].length; k++) {
            newArr.push(JSON.parse(finalArray[i][k]));
        }
    }
    localStorage.removeItem('shopping_bag');
    localStorage.setItem('shopping_bag', JSON.stringify(newArr));
}

function checkItemsCount() {
    var bag = JSON.parse(localStorage.getItem('shopping_bag'));
    document.querySelector('.cart_amount').textContent = bag.length;
}

function purchase() {
    document.querySelector('.cart_sum').textContent = '0';
    document.querySelector('#total_cost').textContent = '£ 0';
    cleanBag();
    scrollTo(0, 0);
    bagItems.setAttribute('class', 'purchase_thank');
    bagItems.textContent = 'Thank you for your purchase';
}
