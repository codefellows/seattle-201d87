'use strict';

// searches the HTML document for all img tags that are present.
let imageEls = document.querySelectorAll('img');
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

// after the break, we will refactor to use a loop
imageEls[0].id = images[0].id;
imageEls[0].src = images[0].src;
imageEls[1].id = images[1].id;
imageEls[1].src = images[1].src;

// method, that exists on every array.


imageEls.forEach(function (img) {
  // img.src = './assets/images/cruisin-goat.jpg';

  img.addEventListener('click', function (event){
    // check which image was clicked on.
    // event.target.src == some image in images, increment the clicks
    for (let i = 0; i < images.length; i++) {

      console.log(event.target.id, images[i].id);
      if (event.target.id === images[i].id) {
        images[i].clicks++;
      }
    }
    console.log(images);
  });
}); //  provide a callback


// generating random non duplicate images to render.
//  new image each time one is clicked, and those images should not be the same.

console.log(images);
