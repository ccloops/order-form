'use strict';

Cart.all = [];
Cart.selectedItems = [];
Cart.tempItems = [];
Cart.selectedQuantities = [];
Cart.selectedImages = [];
Cart.userInfo = [];
Cart.addItem = document.getElementById('order-form');
Cart.goToCart = document.getElementById('gotocart');
Cart.cartTable = document.getElementById('cart');

// +++++++++++++++++++++++++++++++++++++++++
// RETRIEVE LOCAL STORAGE
// +++++++++++++++++++++++++++++++++++++++++

if(localStorage) {
  console.log('BEFORE LS LOADS ', Cart.selectedItems);

  console.log('LS ITEMS ', localStorage.items);
  Cart.selectedItems = JSON.parse(localStorage.items);
  Cart.selectedQuantities = JSON.parse(localStorage.quantity);
  Cart.selectedImages = localStorage.filepath;
}
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
// MAKE HEADER ROW
// +++++++++++++++++++++++++++++++++++++++++

function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Image';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Item';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Quantity';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Remove Item';
  trEl.appendChild(thEl);


  Cart.cartTable.appendChild(trEl);
};

makeHeaderRow();

// +++++++++++++++++++++++++++++++++++++++++
// MAKE INNER ROWS
// +++++++++++++++++++++++++++++++++++++++++

function makeInnerRows() {

  for(var i = 0; i < Cart.selectedItems.length; i++) {

    var trEl = document.createElement('tr');
    trEl.id = i;

    //Image
    var tdEl = document.createElement('td');
    tdEl.innerHTML = '<img src="img/' + Cart.selectedItems[i] + '.jpg">';
    trEl.appendChild(tdEl);

    //Item
    tdEl = document.createElement('td');
    tdEl.textContent = Cart.selectedItems[i];
    trEl.appendChild(tdEl);

    //quantity
    tdEl = document.createElement('td');
    tdEl.textContent = Cart.selectedQuantities[i];
    trEl.appendChild(tdEl);

    //Delete Button
    tdEl = document.createElement('td');
    tdEl.innerHTML = '<button id="' + i + '" type="submit" name="additem">Delete</button>';
    trEl.appendChild(tdEl);

    Cart.cartTable.appendChild(trEl);

    trEl.appendChild(tdEl);
  }

}
makeInnerRows();

Cart.deleteRow = function(e) {
  if(e.target.id) {
    var rowId = Number(e.target.id) + 1;
    console.log(rowId);
    document.getElementsByTagName('tr')[rowId].remove();
    Cart.carTable.innerHTML = '';
    makeInnerRows();
  }
};

Cart.cartTable.addEventListener('click', Cart.deleteRow);
