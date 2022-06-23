'use strict';

let imageEls = document.querySelectorAll('img');

let totalClicks = 0;

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
// read data from persistent storate, if that data is falsey create an empty array;
let images = read() || [];
console.log(images);

function Image(fileName) {
  this.clicks = 0;
  this.views = 0;
  this.id = fileName;
  this.src = `./assets/${fileName}`;
}

if (!images.length) {
  for (let i = 0; i < fileNames.length; i++) {
    images.push(new Image(fileNames[i]));
  }
}

imageEls[0].id = images[0].id;
imageEls[0].src = images[0].src;
images[0].views++;
imageEls[1].id = images[1].id;
imageEls[1].src = images[1].src;
images[1].views++;

// find the elements clicked, and adds a click to an Image in images.
function handleClick(event) {
  totalClicks++;
  for (let i = 0; i < images.length; i++) {
    if (event.target.id === images[i].id) {
      images[i].clicks++;
    }
  }

  if (totalClicks >= 5) {
    alert('You are done voting');
    save();
  } else {
    // render 2 more images
    renderImages();
  }
}

imageEls.forEach(function (img) {
  img.addEventListener('click', handleClick);
});

function renderImages() {
  let image1 = generateRandomImage();
  let image2 = generateRandomImage();

  // how can we also gaurantee fresh images from the previous round.
  while (image1.id === image2.id) {
    image2 = generateRandomImage();
  }
  console.log(read());
  // these lines will paint the images onto the document.
  imageEls[0].id = image1.id;
  imageEls[0].src = image1.src;
  image1.views++;
  imageEls[1].id = image2.id;
  imageEls[1].src = image2.src;
  image2.views++;
  console.log(images);
}

function generateRandomImage() {
  let index = Math.floor(Math.random() * images.length);
  return images[index];
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
  for (let i =0; i < valuesFromLocalStorage.length; i++) {
    let image = new Image(valuesFromLocalStorage[i].id);
    image.clicks = valuesFromLocalStorage[i].clicks;
    image.views = valuesFromLocalStorage[i].views;
    results.push(image);
  }

  return results;
}


// maybe convert to it's own function
function remakeImages(json) {

}
