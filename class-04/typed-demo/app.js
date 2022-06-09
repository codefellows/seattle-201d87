'use strict';

// this is the global scope;
let user = 'Jacob';

// functions allow you to define code blocks that can be reused, think of these as variables that contain a JS code block

// function definition / function signature
// arguments and parameters
// scope
function sum(number1, number2, number3) {
  // locally scoped
  let user = 'Adrian';
  console.log('function running', user); // this will be the locally scoped.
  // return values to the context / scope to whatever has called the function
  // stops any other code from running;
  return number1 + number2 + number3;
}

// to use the function it must be invoked:
console.log(sum(5, 10, 15), user);

// refactored high score warm up
function calculateHighScores(scores) {

  let highScores = [];

  // use a loop, to read all numbers in the scores array, and put any number that is 75 or higher, into the high scores array.

  for (let i = 0; i < scores.length; i++) {

    if (scores[i] >= 75) {
      // alert('high score!! value of i: ' + i);
      // how do we put items into an array?
      highScores.push(scores[i]);
    }
  }

  return highScores;
}

let highScores = calculateHighScores([75, 10, 23, 76, 89, 31, 55, 87]);
console.log(highScores);


function myFirst(param) {
  console.log(param);
}

function loop(array) {
  // loop through and console.log values
}

console.log(sum(2, 3, 5) + sum(3, 4, 5));
