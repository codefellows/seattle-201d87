/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart =  new Cart([]);
console.log(cart);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's "select" for each product
  const selectElement = document.getElementById('items');
  for (let i = 0; i < Product.allProducts.length; i++) {
    // what do we add to the options tag?
    //  <option value="value1">value1</option>
    // Product.allProducts[i].name
    let optionElement = document.createElement('option');
    optionElement.textContent = Product.allProducts[i].name;
    optionElement.value = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // let optionEls = document.querySelectorAll ('option');
  let productName = '';
  for (let i = 0; i < Product.allProducts.length; i++) {
    let selectEl = document.getElementById('items');
    if (selectEl.value === Product.allProducts[i].name) {
      productName = Product.allProducts[i].name;
    }
  }

  // TODO: get the quantity
  let quantityEl = document.getElementById('quantity');
  let quantity = parseInt(quantityEl.value);
  // TODO: using those, add one item to the Cart
  cart.addItem(productName, quantity);
  console.log(cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let span = document.getElementById('itemCount');
  span.textContent = cart.items.length;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let itemEl = document.getElementById('items');
  let quantityEl = document.getElementById('quantity');

  // parse int on quantity value
  let item = itemEl.value;
  let quantityInt = parseInt(quantityEl.value);
  // TODO: Add a new element to the cartContents div with that information
  let divEl = document.getElementById('cartContents');
  let pEl = document.createElement('p');
  pEl.textContent = item + ' : ' + quantityInt;
  divEl.appendChild(pEl);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
