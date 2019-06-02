let cartCounter = 0,
    cartPrice = 0,
    cartCounterLabel = document.querySelector('#cart-counter'),
    buttonsContainer = document.querySelector('.page-content');

let fnPriceCounter = (elem) => {
  let tempPrice = elem.parentElement.previousElementSibling.innerHTML;
  cartPrice += +tempPrice.replace(/^\$(\d+)\s\D+(\d+).*$/g, '$1.$2');
  buttonsContainer.removeEventListener('click', btnClickHandler);
  return 'Added ' + cartPrice.toFixed(2) + ' $';
};

let fnRestore = (elem, restore) => {
  elem.innerHTML = restore;
  buttonsContainer.addEventListener('click', btnClickHandler);
};

let btnClickHandler = (e) => {
  let target = e.target;

  if (target.classList.contains('item-actions__cart')) {

    cartCounterLabel.innerHTML = ++cartCounter + '';

    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    let restoreHTML = target.innerHTML;
    target.innerHTML = fnPriceCounter(target);

    setTimeout(fnRestore, 2000, target, restoreHTML);
  }
};

buttonsContainer.addEventListener('click', btnClickHandler);