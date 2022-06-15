'use strict';

const seattle = {
  name: 'seattle',
  cookiesPerHour: [100, 200, 500],
};

let tableSpace = document.getElementById('table');
let row1 = document.createElement('tr');

// add a column;
let column = document.createElement('td'); // created a column
console.log(column, row1, tableSpace);

column.textContent = seattle.name;

// append column to row
row1.appendChild(column);
tableSpace.appendChild(row1);


// textContent = '';
// appendChild(); 