'use strict';

let chartEl = document.getElementById('survey-results');
let ctx = chartEl.getContext('2d');
// read all of the image results from localStorage
let clicks = [];
let views = [];

for (let i =0; i < images.length; i++) {
  // create our view and clicks
  clicks.push(images[i].clicks);
  views.push(images[i].views);
}

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: fileNames,
    datasets: [{
      label: '# of Votes',
      data: clicks,
      backgroundColor: 'yellow'
    }, {
      label: '# of Views',
      data: views,
      backgroundColor: 'purple'
    }]
  }
});
