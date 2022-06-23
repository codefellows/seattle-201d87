'use strict';

// const values = [
//   'name: Jacob',
//   'age: 31',
//   'role: Instructor'
// ];

const values = ['iphone', 'apple', 'facetime'];


// for loop over
for (let i = 0; i < values.length; i++) {
  let listItem = document.getElementById(values[i]);
  listItem.textContent = values[i];
}

// add an 'li' element
// let iphoneListItem = document.getElementById('iphone');
// iphoneListItem.textContent = values[0];

// let appleListItem = document.getElementById('apple');
// appleListItem.textContent = values[1];

// let facetimeListItem = document.getElementById('facetime');
// facetimeListItem.textContent = values[2];


values.push('microsoft');
// console.log(iphoneListItem);
// document.write(values[0]);
