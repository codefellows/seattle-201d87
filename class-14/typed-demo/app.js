'use strict';

let images = read() || [];
console.log(images);

let fileNames = [
  'cruisin-goat.jpg',
  'float-your-goat.jpg',
  'goat-away.jpg',
  'goat-logo.png',
  'goat-out-of-hand.jpg',
  'kissing-goat.jpg',
  'sassy-goat.jpg',
  'smiling-goat.jpg',
  'sweater-goat.jpg'
];

function Image(fileName) {
  this.clicks = 0;
  this.views = 0;
  this.id = fileName;
  this.src = `./assets/${fileName}`;
}

// saves values important to our app
function save() {
  // state is just a key
  let data = JSON.stringify(images);
  // console.log(images, JSON.stringify(images));
  localStorage.setItem('state', data);
}

// retrieves application state
function read() {
  let valuesFromLocalStorage = JSON.parse(localStorage.getItem('state'));
  let results = [];

  // recreate our Images from the objects in localStorage.
  if (valuesFromLocalStorage) {
    for (let i = 0; i < valuesFromLocalStorage.length; i++) {
      let image = new Image(valuesFromLocalStorage[i].id);
      image.clicks = valuesFromLocalStorage[i].clicks;
      image.views = valuesFromLocalStorage[i].views;
      results.push(image);
    }
  }

  return results;
}
