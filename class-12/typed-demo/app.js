'use strict';

let imageEls = document.querySelectorAll('img');
let chartEl = document.getElementById('myChart');
let ctx = chartEl.getContext('2d');

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
let images = [];

function Image(fileName) {
  this.clicks = 0;
  this.views = 0;
  this.id = fileName;
  this.src = `./assets/${fileName}`;
}

for (let i = 0; i < fileNames.length; i++) {
  images.push(new Image(fileNames[i]));
}

console.log(imageEls, images);

imageEls[0].id = images[0].id;
imageEls[0].src = images[0].src;
images[0].views++;
imageEls[1].id = images[1].id;
imageEls[1].src = images[1].src;
images[1].views++;


// parameters??
function handleClick(event) {
  totalClicks++;
  for (let i = 0; i < images.length; i++) {
    if (event.target.id === images[i].id) {
      images[i].clicks++;
    }
  }

  if (totalClicks > 5) {
    // alert('You are done voting');
    renderChart();
  } else {
    // render 2 more images
    renderImages();
  }
}

imageEls.forEach(function (img) {
  img.addEventListener('click', handleClick);
});

function renderImages() {
  let currentImage1 = imageEls[0];
  let currentImage2 = imageEls[2];
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

function renderChart() {
  // generate our click data, generate our view data
  // loop through our images
  let clicks = [];
  let views = [];

  for (let i = 0; i < images.length; i++) {
    clicks.push(images[i].clicks);
    views.push(images[i].views);
  }

  // pay attention to the properties on these objects.
  // be vigilant, since errors will not through a big red flag
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: fileNames,
      datasets: [{
        label: '# of Clicks',
        data: clicks,
        backgroundColor: 'yellow'
      }, {
        label: '# of Views',
        data: views,
        backgroundColor: 'purple'
      }],
    }
  });
}


let clickData = null; /// ???? how can we get an array of just the clicks for each image?

// let myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: fileNames,
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3, 3, 2, 4],
//       backgroundColor: ['Red']
//     }, {
//       label: '# of Views',
//       data: [1, 1, 1, 1, 1, 1, 1, 1, 1],
//       backgroundColor: ['Blue']
//     }]
//   },
// });
// myChart.data.datasets[0] = {};
// myChart.draw();

// <button>view results</button>

// on click => new Chart(click, views);
