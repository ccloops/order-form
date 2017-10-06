'use strict';

Cart.all = [];
Cart.selectedItems = [];
Cart.selectedQuantities = [];
Cart.selectedImages = [];
Cart.userInfo = [];
Cart.addItem = document.getElementById('order-form');
Cart.goToCart = document.getElementById('gotocart');
Cart.cartTable = document.getElementById('cart');

// +++++++++++++++++++++++++++++++++++++++++
// CONSTRUCTOR FUNCTION
// +++++++++++++++++++++++++++++++++++++++++

function Cart(item, filepath) {
  this.item = item;
  this.filepath = filepath;
  this.quantity = 0;
  Cart.all.push(this);

}

// +++++++++++++++++++++++++++++++++++++++++
// INSTANCES
// +++++++++++++++++++++++++++++++++++++++++

new Cart('bag', 'img/bag.jpg');
new Cart('banana', 'img/banana.jpg');
new Cart('bathroom', 'img/bathroom.jpg');
new Cart('boots', 'img/boots.jpg');
new Cart('breakfast', 'img/breakfast.jpg');
new Cart('bubblegum', 'img/bubblegum.jpg');
new Cart('chair', 'img/chair.jpg');
new Cart('cthulhu', 'img/cthulhu.jpg');
new Cart('dog-duck', 'img/dog-duck.jpg');
new Cart('dragon', 'img/dragon.jpg');
new Cart('pen', 'img/pen.jpg');
new Cart('pet-sweep', 'img/pet-sweep.jpg');
new Cart('scissors', 'img/scissors.jpg');
new Cart('shark', 'img/shark.jpg');
new Cart('sweep', 'img/sweep.png');
new Cart('tauntaun', 'img/tauntaun.jpg');
new Cart('unicorn', 'img/unicorn.jpg');
new Cart('usb', 'img/usb.gif');
new Cart('water-can', 'img/water-can.jpg');
new Cart('wine-glass', 'img/wine-glass.jpg');

// +++++++++++++++++++++++++++++++++++++++++
// ADD TO CART EVENT HANDLER
// +++++++++++++++++++++++++++++++++++++++++

Cart.addToCart = function (event) {
  event.preventDefault();
  var newItem = event.target.products.value;
  var newQuantity = parseInt(event.target.quantity.value);
  for(var i = 0; i < Cart.all.length; i++) {
    Cart.selectedImages.push(Cart.all[i].filepath);

  };
  Cart.selectedItems.push(newItem);
  Cart.selectedQuantities.push(newQuantity);

  // +++++++++++++++++++++++++++++++++++++++++
  // PUSH FORM FIELD INFORMATION TO USER INFO ARRAY
  // +++++++++++++++++++++++++++++++++++++++++

  var name = event.target.name.value;
  Cart.userInfo.push(name);
  var street = event.target.street.value;
  Cart.userInfo.push(street);
  var city = event.target.city.value;
  Cart.userInfo.push(city);
  var state = event.target.state.value;
  Cart.userInfo.push(state);
  var zipcode = event.target.zipcode.value;
  Cart.userInfo.push(zipcode);
  var phone = event.target.phone.value;
  Cart.userInfo.push(phone);
  var credit = event.target.credit.value;
  Cart.userInfo.push(credit);

  // +++++++++++++++++++++++++++++++++++++++++
  // CLEARS FORM FIELDS
  // +++++++++++++++++++++++++++++++++++++++++

  event.target.products.value = null;
  event.target.quantity.value = null;
  event.target.name.value = null;
  event.target.street.value = null;
  event.target.city.value = null;
  event.target.state.value = null;
  event.target.zipcode.value = null;
  event.target.phone.value = null;
  event.target.credit.value = null;
};

// +++++++++++++++++++++++++++++++++++++++++
// ADD INFORMATION TO LOCAL STORAGE AND SWITCH TO CART.HTML
// +++++++++++++++++++++++++++++++++++++++++

Cart.checkout = function() {
  localStorage.items = JSON.stringify(Cart.selectedItems);
  localStorage.quantity = JSON.stringify(Cart.selectedQuantities);
  localStorage.shippingInfo = JSON.stringify(Cart.userInfo);
  localStorage.filepath = JSON.stringify(Cart.selectedImages);
  window.location = './cart.html';
  // Cart.addItem.removeEventListener('submit', Cart.addToCart);
};

// +++++++++++++++++++++++++++++++++++++++++
// EVENT LISTENERS
// +++++++++++++++++++++++++++++++++++++++++

Cart.addItem.addEventListener('submit', Cart.addToCart);
Cart.goToCart.addEventListener('click', Cart.checkout);
