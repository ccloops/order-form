'use strict';

Cart.all = [];

function Cart(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.quantity = 0;
  Cart.all.push(this);

}

new Pics('bag', 'img/bag.jpg');
new Pics('banana', 'img/banana.jpg');
new Pics('bathroom', 'img/bathroom.jpg');
new Pics('boots', 'img/boots.jpg');
new Pics('breakfast', 'img/breakfast.jpg');
new Pics('bubblegum', 'img/bubblegum.jpg');
new Pics('chair', 'img/chair.jpg');
new Pics('cthulhu', 'img/cthulhu.jpg');
new Pics('dog-duck', 'img/dog-duck.jpg');
new Pics('dragon', 'img/dragon.jpg');
new Pics('pen', 'img/pen.jpg');
new Pics('pet-sweep', 'img/pet-sweep.jpg');
new Pics('scissors', 'img/scissors.jpg');
new Pics('shark', 'img/shark.jpg');
new Pics('sweep', 'img/sweep.png');
new Pics('tauntaun', 'img/tauntaun.jpg');
new Pics('unicorn', 'img/unicorn.jpg');
new Pics('usb', 'img/usb.gif');
new Pics('water-can', 'img/water-can.jpg');
new Pics('wine-glass', 'img/wine-glass.jpg');


function addToCart(event) {
  var newItem = event.target.name.value;
  var newQuantity = parseInt(event.target.quantity.value);

  for (var i = 0; i < Cart.all.length; i++) {
    if(newItem === Cart.all[i].name) {
      // Cart.all[i].name = newItem;
      Cart.all[i].quantity = newQuantity;
    }
  }
}

  addToCart();

// +++++++++++++++++++++++++++++++++++++++++
// TRACK NUMBER OF TOTAL CLICKS
// +++++++++++++++++++++++++++++++++++++++++

  Pics.totalClicksCounter--;

// +++++++++++++++++++++++++++++++++++++++++
// COUNT VOTES FOR EACH IMAGE
// +++++++++++++++++++++++++++++++++++++++++

  for(var i = 0; i < Pics.all.length; i++) {
    if(event.target.alt === Pics.all[i].altText) {
      Pics.all[i].clicks ++;
    }
  }

// +++++++++++++++++++++++++++++++++++++++++
// REMOVES EVENT LISTENER AFTER 25 CLICKS,
// CALLS RANDOM IMAGE FUNCTION AGAIN,
// AND SETS LOCAL STORAGE
// +++++++++++++++++++++++++++++++++++++++++

  if(Pics.totalClicksCounter === 0) {
    Pics.section.removeEventListener('click', handleClick);
    Pics.drawChart();
    localStorage.picsAll = JSON.stringify(Pics.all);
    localStorage.memory = true;
  }
  randomImage();
}

handleClick();

var cartTable = document.getElementById('cart');


function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Item';
  trEl.appendChild(thEl);

  for(var i in Pics.all) {
    thEl = document.createElement('th');
    thEl.textContent = Pics.all[i].name;
    trEl.appendChild(thEl);
  }
  cartTable.appendChild(trEl);
};

makeHeaderRow();

function makeViewsRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Views';
  trEl.appendChild(thEl);

  for(var i = 0; i < Pics.all.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = JSON.parse(localStorage.picsAll)[i].views;
    trEl.appendChild(tdEl);
  }
  cartTable.appendChild(trEl);
}

makeViewsRow();

function makeClicksRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Clicks';
  trEl.appendChild(thEl);

  for(var i in Pics.all) {
    var tdEl = document.createElement('td');
    tdEl.textContent = JSON.parse(localStorage.picsAll)[i].clicks;
    trEl.appendChild(tdEl);
  }
  cartTable.appendChild(trEl);
}

makeClicksRow();

function makePercentageRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Percentage of Clicks When Viewed';
  trEl.appendChild(thEl);

  for(var i in Pics.all) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Math.floor(((JSON.parse(localStorage.picsAll)[i].clicks) / (JSON.parse(localStorage.picsAll)[i].views)) * 100) + '%';
    trEl.appendChild(tdEl);
  }
  cartTable.appendChild(trEl);
}

makePercentageRow();
