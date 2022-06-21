'use strict';

// let trackEl = document.getElementById('counter');

let trackEl = document.querySelector('#counter'); // query selection "scrapes" you HTML document and returns the first element that matches the "query"

let clicks = 0;
trackEl.addEventListener('click', clicker);
function clicker(event) {
  clicks++;
  console.log(clicks);
}

// How could we display the clicks variable in the Document.
// create a P element
// set the text content
// append to the DOM somehow