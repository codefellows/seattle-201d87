'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeFormEl = document.getElementById('store-form');

// I need something to happen when this storeFormEl is submitted
storeFormEl.addEventListener('submit', function(event) {
  // where are values stored
  event.preventDefault();
  let name = event.target.location.value;
  let minCust = parseInt(event.target.min.value);
  let maxCust = parseInt(event.target.max.value);
  let avgCookies = parseInt(event.target.avgCookies.value);

  let store = new Store(name, minCust, maxCust, avgCookies);
  store.generateCookiesPerHour();
  store.renderData();
});


function generateNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function Store(name, minCust, maxCust, avgCookiePerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlySales = [];
  this.totalSales = 0;
  this.avgCookiePerCust = avgCookiePerCust;

  // don't add a return statement here!  Constructors automatically return objects as values ;)
}


// what is the purpose, is to give all stores access to this function
Store.prototype.generateCookiesPerHour = function() {

  // we have a list of hours, lets loop through i

  // we have a range of potential customer at each hour?
  for (let i = 0; i < hours.length; i++) {
    //  generate a number between those values // 10 - 20 => number of customers at that time
    //  number of customers at that time multiply by the averageCookiesPerCust.
    let customersAtHour = generateNumberBetween(this.minCust, this.maxCust);
    let salesAtHour = Math.round(customersAtHour * this.avgCookiePerCust);
    this.hourlySales.push(salesAtHour);
    this.totalSales += salesAtHour;
  }
};

// render a single row in our table
Store.prototype.renderData = function() {
  let tableEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');

  // add the store name to the row
  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  rowEl.appendChild(nameCell);

  // what does a single store need to render in our HTML Document;
  for (let i = 0; i < this.hourlySales.length; i++) {
    let cellEl = document.createElement('td');
    cellEl.textContent = this.hourlySales[i];
    rowEl.appendChild(cellEl);
  }

  // add total sales
  let totalCell = document.createElement('td');
  totalCell.textContent = this.totalSales;
  rowEl.appendChild(totalCell);

  tableEl.appendChild(rowEl);
};

// A pure function that returns an array of hourly Sales values
// function generateCookiesPerHour(minCust, maxCust, avgCookiesPerCust) {
//   let hourlySales = [];

//   for (let i = 0; i < hours.length; i++) {
//     let customersAtHour = generateNumberBetween(minCust, maxCust);
//     let salesAtHour = customersAtHour * avgCookiesPerCust;
//     hourlySales.push(salesAtHour);
//   }
//   return hourlySales;
// }

let seattle = new Store('Seattle', 10, 20, 3);
let lima = new Store('Lima', 1, 50, 2.6);
let paris = new Store('Paris', 5, 25, 4);
let london = new Store('London', 13, 19, 6);
let newYork = new Store('New York', 2, 15, 3.5);

seattle.generateCookiesPerHour();
lima.generateCookiesPerHour();
paris.generateCookiesPerHour();
london.generateCookiesPerHour();
newYork.generateCookiesPerHour();

seattle.renderData();
lima.renderData();
paris.renderData();
london.renderData();
newYork.renderData();

