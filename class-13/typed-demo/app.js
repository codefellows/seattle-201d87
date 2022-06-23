'use strict';

// localStorage is similar to document object, it's available in any js running in the browser.
console.log(localStorage);

// 3 methods that we can use to save to localStorage, allows us to CREATE / READ / UPDATE / DELETE values

// CREATE a value in localStorage
// localStorage.setItem('key', 'Jacob');

// READ values by key
console.log(localStorage.getItem('key'));

// UPDATE
localStorage.setItem('key', 'Kale');
localStorage.setItem('name', 'Jacob');

// DELETE
localStorage.removeItem('key');
localStorage.clear(); // nuke it all!


localStorage.getItem('key');


// Use as little keys as possible.
function addToKey(key, value) {
  let currentValue = localStorage.getItem(key);

  let newValue = currentValue + value;

  localStorage.setItem(key, newValue);
}
