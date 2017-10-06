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
// RETRIEVE LOCAL STORAGE
// +++++++++++++++++++++++++++++++++++++++++

if(localStorage) {
  Cart.selectedItems = JSON.parse(localStorage.items);
  Cart.selectedQuantities = JSON.parse(localStorage.quantity);
  Cart.selectedImages = localStorage.filepath;
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

    //Image
    var tdEl = document.createElement('td');
    tdEl.innerHTML = '<img src="img/' + Cart.selectedItems[i] + '.jpg">';
    // tdEl.innerHTML = '<p>help</p>';
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
    tdEl.innerHTML = '<button id="delete" type="submit" name="additem">Delete</button>';
    trEl.appendChild(tdEl);

    Cart.cartTable.appendChild(trEl);


    trEl.appendChild(tdEl);
  }

}
makeInnerRows();
