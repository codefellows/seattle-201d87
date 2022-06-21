'use strict';

let chartEl = document.getElementById('myChart');
let ctx = chartEl.getContext('2d');

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

let clickData = null; /// ???? how can we get an array of just the clicks for each image?

let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: fileNames,
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      // backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
    }, {
      label: '# of Views',
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1]
    }]
  },
});
