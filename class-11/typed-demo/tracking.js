'use strict';

// searches the HTML document for all img tags that are present.
let imageEls = document.querySelectorAll('img'); // [<img>]
console.log(imageEls);

let clicks = 0;
let views = 0;

// looping through imageEls
// for (let i = 0; i < imageEls.length; i++) {
//   let img = imageEls[i];
//   img.src = './assets/image.jpeg';
// }

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

const images = [];

// constructor for an image
function Image(fileName) {
  this.clicks = 0;
  this.views = 0;
  this.id = fileName;
  this.src = `./assets/images/${fileName}`;
}

// adding an ability to each Image object to run on click.
Image.prototype.handleClick = function() {

};


for (let i = 0; i < fileNames.length; i++) {
  images.push(new Image(fileNames[i]));
}

// rendering the image data and assigning id attribute in images onto the imageEls
imageEls[0].id = images[0].id;
imageEls[0].src = images[0].src;
images[0].views++;
imageEls[1].id = images[1].id;
imageEls[1].src = images[1].src;
images[1].views++;
// img.src = './assets/images/cruisin-goat.jpg';

function handleClick(event) {
  // check which image was clicked on.
  // event.target.src == some image in images, increment the clicks
  for (let i = 0; i < images.length; i++) { // array search

    console.log(event.target.id, images[i].id);
    if (event.target.id === images[i].id) {
      images[i].clicks++;
    }
  }
  renderImages();
  console.log(images);
}

// forEach method, that exists on every array.
// adds an event listener to every img tag in imageEls
imageEls.forEach(function (img) {
  img.addEventListener('click', handleClick);
}); //  provide a callback


// generating random non duplicate images to render.
//  new image each time one is clicked, and those images should not be the same.
function renderImages() {

  // generate 2 new images and if they are different render them.
  let image1 = generateRandomImage();
  let image2 = generateRandomImage();

  while (image1.id === image2.id) {
    image1 = generateRandomImage();
  }

  // render to the our imageEls
  imageEls[0].id = image1.id;
  imageEls[0].src = image1.src;
  imageEls[1].id = image2.id;
  imageEls[1].src = image2.src;
  image1.views++;
  image2.views++;
}

// return a random Image from images
function generateRandomImage() {
  let index = Math.floor(Math.random() * images.length);
  return images[index];
}

console.log(images);
