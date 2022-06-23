'use strict';

let imageEls = document.querySelectorAll('img');

let totalClicks = 0;

// dependency injection
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

