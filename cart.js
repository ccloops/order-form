'use strict';

Cart.all = [];
Cart.selectedItems = [];
Cart.selectedQuantities = [];
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

// new Cart('bag', 'img/bag.jpg');
// new Cart('banana', 'img/banana.jpg');
// new Cart('bathroom', 'img/bathroom.jpg');
// new Cart('boots', 'img/boots.jpg');
// new Cart('breakfast', 'img/breakfast.jpg');
// new Cart('bubblegum', 'img/bubblegum.jpg');
// new Cart('chair', 'img/chair.jpg');
// new Cart('cthulhu', 'img/cthulhu.jpg');
// new Cart('dog-duck', 'img/dog-duck.jpg');
// new Cart('dragon', 'img/dragon.jpg');
// new Cart('pen', 'img/pen.jpg');
// new Cart('pet-sweep', 'img/pet-sweep.jpg');
// new Cart('scissors', 'img/scissors.jpg');
// new Cart('shark', 'img/shark.jpg');
// new Cart('sweep', 'img/sweep.png');
// new Cart('tauntaun', 'img/tauntaun.jpg');
// new Cart('unicorn', 'img/unicorn.jpg');
// new Cart('usb', 'img/usb.gif');
// new Cart('water-can', 'img/water-can.jpg');
// new Cart('wine-glass', 'img/wine-glass.jpg');


// +++++++++++++++++++++++++++++++++++++++++
// RENDER TABLE
// +++++++++++++++++++++++++++++++++++++++++

if(localStorage) {
  Cart.selectedItems = JSON.parse(localStorage.item);
  Cart.selectedQuantities = JSON.parse(localStorage.quantity);
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Image';
  trEl.appendChild(thEl);

  for(var i = 0; i < Cart.all.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = JSON.parse(localStorage.Cart.all)[i].filepath;
    trEl.appendChild(tdEl);
  }

  Cart.cartTable.appendChild(trEl);
};

makeHeaderRow();

// function makeInnerRows() {
//
//   var trEl = document.createElement('tr');
// for(var i = 0; i < Cart.selectedItems.length; i++) {
//   var tdEl = document.createElement('td');
//   tdEl.textContent = Cart.selectedItems[i];
//   trEl.appendChild(tdEl);
//
//   tdEl = document.createElement('td');
//   tdEl.textContent = Cart.selectedQuantities[i];
//   Cart.cartTable.appendChild(trEl);

  // tdEl = document.createElement('td');
  // tdEl.textContent = Cart.all[i].quantity;
  // trEl.appendChild(tdEl);
// }
// trEl.appendChild(tdEl);
//
// }
// makeInnerRows();

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
