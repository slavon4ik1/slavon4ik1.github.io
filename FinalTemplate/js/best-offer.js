window.bestOffer = {
    discount: 15,
    left: [
        '8c061815-6a7d-4465-bb78-1bdc6c5adebf', // Only Skinny Jeans
        'e50a3153-7833-4b85-b412-1a39d215fd38', // Oversized Cardigan
        'bec71daa-d133-473d-bbb0-1ee0a427a17d' // Only Busted Knee Jean
    ],
    right: [
        '5677f851-1c4a-4e9b-80e9-16d1e6265257', // Levi's Jeans for women,
        '07cf6ce2-6eee-4e78-a441-f257fdea7ed6' // Boyfriend T-Shirt with Bohemian print
    ]
};
var catalog = JSON.parse(localStorage.getItem('catalog'))
var leftCat = _.filter(catalog , function(item){return item.id === '8c061815-6a7d-4465-bb78-1bdc6c5adebf' ||
                                                       item.id === 'e50a3153-7833-4b85-b412-1a39d215fd38' ||
                                                       item.id === 'bec71daa-d133-473d-bbb0-1ee0a427a17d' });

var rightCat = _.filter(catalog , function(item){return item.id === '07cf6ce2-6eee-4e78-a441-f257fdea7ed6' ||
                                                        item.id === '5677f851-1c4a-4e9b-80e9-16d1e6265257' });


var shoppingBag = [],
    discountCardLeft = document.querySelector('#slidesLeft');
    discountCardRight = document.querySelector('#slidesRight');
localStorage.setItem('total', JSON.stringify(0));
localStorage.setItem('shopping_bag', JSON.stringify(shoppingBag));


for (var i = 0; i < 3; i++) {
    fillTheCatalog(leftCat[i], discountCardLeft);
}
for (var i = 0; i < 2; i++) {
    fillTheCatalog(rightCat[i], discountCardRight);
}

function fillTheCatalog(product, listTo) {
    var li = document.createElement('li'),
        a = document.createElement('a'),
        catalogCard = document.createElement('div'),
        productImage = document.createElement('div'),
        img = document.createElement('img'),
        productName = document.createElement('div'),
        productPrice = document.createElement('div');

    li.setAttribute('class', 'slide');
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
    li.appendChild(a)

    listTo.appendChild(li);
    if(product.hasNew == true){
      li.classList.add("new");
    }
    catalogCard.click = function () {
        localStorage.setItem('idActiveItem', event.target.parentNode.getAttribute('id'));
    };
}


// SLIDER
var slidesLeft = document.querySelectorAll('#slidesLeft .slide');
var slidesRight = document.querySelectorAll('#slidesRight .slide');
slidesLeft[0].classList.add('showing')
slidesRight[0].classList.add('showing')
var currentSlide = 0;
var currentSlide1 = 0;

function nextSlide(){
    goToSlide(currentSlide+1);
}
function previousSlide(){
    goToSlide(currentSlide-1);
}
function nextSlide1(){
    goToSlide1(currentSlide1+1);
}
function previousSlide1(){
    goToSlide1(currentSlide1-1);
}
function goToSlide(n){
    slidesLeft[currentSlide].className = 'slide';
    currentSlide = (n+slidesLeft.length)%slidesLeft.length;
    slidesLeft[currentSlide].className = 'slide showing';
}
function goToSlide1(n) {
    slidesRight[currentSlide1].className = 'slide';
    currentSlide1 = (n+slidesRight.length)%slidesRight.length;
    slidesRight[currentSlide1].className = 'slide showing';
}
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var next1 = document.getElementById('next1');
var previous1 = document.getElementById('previous1');

next.onclick = function(){
    nextSlide();
};
previous.onclick = function(){
    previousSlide();
};
next1.onclick = function(){
    nextSlide1();
};
previous1.onclick = function(){
    previousSlide1();
};
// /SLIDER
