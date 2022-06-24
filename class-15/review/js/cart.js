/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

function clearCart() {
  // if there are row, remove rows in tbody
  // let rows = document.querySelectorAll('tbody > tr');
  // if (rows) {
  document.querySelector('tbody').innerHTML = '';
  // TODO: Remove all of the rows (tr) in the cart table (tbody)
  // tbody.innerHTML = '';
  // }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbodyEl = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    let row = document.createElement('tr');
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbodyEl.appendChild(row);

    let tdButton = document.createElement('td');
    let button = document.createElement('button');

    button.textContent = 'X';
    row.appendChild(tdButton);
    tdButton.appendChild(button);
    button.setAttribute('id', cart.items[i].product);
    button.setAttribute('class', 'delete');

    let tdQuantity = document.createElement('td');
    tdQuantity.textContent = cart.items[i].quantity;
    row.appendChild(tdQuantity);

    // TODO: Create a TD for the delete link, quantity,  and the item
    let tdProduct = document.createElement('td');
    tdProduct.textContent = cart.items[i].product;
    row.appendChild(tdProduct);
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
