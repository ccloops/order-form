'use strict';

Cart.all = [];
Cart.userInfo = [];
Cart.addItem = document.getElementById('order-form');
Cart.goToCart = document.getElementById('gotocart');

function Cart(item, filepath) {
  this.item = item;
  this.filepath = filepath;
  this.quantity = 0;
  Cart.all.push(this);

}

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


Cart.addToCart = function (event) {
  event.preventDefault();
  var newItem = event.target.products.value;
  var newQuantity = parseInt(event.target.quantity.value);
  console.log('new quantity:', newQuantity);

  for (var i = 0; i < Cart.all.length; i++) {
    if(newItem === Cart.all[i].item) {
      Cart.all[i].item = newItem;
      Cart.all[i].quantity = newQuantity;
    }
  }
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

  event.target.products.value = null;
  event.target.quantity.value = null;
  event.target.name.value = null;
  event.target.street.value = null;
  event.target.city.value = null;
  event.target.state.value = null;
  event.target.zipcode.value = null;
  event.target.phone.value = null;
};

Cart.checkout = function() {
  localStorage.cartTotal = JSON.stringify(Cart.all);
  localStorage.shippingInfo = JSON.stringify(Cart.userInfo);
  //go to cart PAGE
  console.log('booyah');
  window.location = './cart.html';
  // var a = document.createElement('a');
  // a.href = 'cart.html';
  // a.innerHTML = '<br / > Cart Total';
  // Pics.resultsList.appendChild(a);
};

Cart.addItem.addEventListener('submit', Cart.addToCart);
Cart.goToCart.addEventListener('click', Cart.checkout);




// +++++++++++++++++++++++++++++++++++++++++
// REMOVES EVENT LISTENER AFTER 25 CLICKS,
// CALLS RANDOM IMAGE FUNCTION AGAIN,
// AND SETS LOCAL STORAGE
// +++++++++++++++++++++++++++++++++++++++++

//   if(Pics.totalClicksCounter === 0) {
//     Pics.section.removeEventListener('click', handleClick);
//     Pics.drawChart();
//     localStorage.picsAll = JSON.stringify(Pics.all);
//     localStorage.memory = true;
//   }
//   randomImage();
// }
//
// handleClick();
//
// var cartTable = document.getElementById('cart');
//
//
// function makeHeaderRow() {
//   var trEl = document.createElement('tr');
//
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Item';
//   trEl.appendChild(thEl);
//
//   for(var i in Pics.all) {
//     thEl = document.createElement('th');
//     thEl.textContent = Pics.all[i].name;
//     trEl.appendChild(thEl);
//   }
//   cartTable.appendChild(trEl);
// };
//
// makeHeaderRow();
//
// function makeViewsRow() {
//   var trEl = document.createElement('tr');
//
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Views';
//   trEl.appendChild(thEl);
//
//   for(var i = 0; i < Pics.all.length; i++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = JSON.parse(localStorage.picsAll)[i].views;
//     trEl.appendChild(tdEl);
//   }
//   cartTable.appendChild(trEl);
// }
//
// makeViewsRow();
//
// function makeClicksRow() {
//   var trEl = document.createElement('tr');
//
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Clicks';
//   trEl.appendChild(thEl);
//
//   for(var i in Pics.all) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = JSON.parse(localStorage.picsAll)[i].clicks;
//     trEl.appendChild(tdEl);
//   }
//   cartTable.appendChild(trEl);
// }
//
// makeClicksRow();
//
// function makePercentageRow() {
//   var trEl = document.createElement('tr');
//
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Percentage of Clicks When Viewed';
//   trEl.appendChild(thEl);
//
//   for(var i in Pics.all) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = Math.floor(((JSON.parse(localStorage.picsAll)[i].clicks) / (JSON.parse(localStorage.picsAll)[i].views)) * 100) + '%';
//     trEl.appendChild(tdEl);
//   }
//   cartTable.appendChild(trEl);
// }
//
// makePercentageRow();
