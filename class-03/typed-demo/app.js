'use strict';


// let timesToLoop = prompt('How long should our loop run?');

// our first for loop
// for (let number = 0; number < timesToLoop; number++) {
//   alert(number);
//   console.log('This loop has run ' + (number + 1) + ' times');
// } // presumptively this code block runs more than once


// let i = 10;
// while (i > 0) {
//   alert(i);
//   console.log('We have ' + i + ' many loops left');
//   i--;
// }

let user = prompt('Who are you?');
let loggedIn = true;

// while(!loggedIn) {

//   if (user !== 'admin') {
//     alert('Admin login required');
//     user = prompt('Who are you?');
//   } else {
//     loggedIn = true;
//   }

// }

console.log('Loop has ended');


// do {

//   if (user !== 'admin') {
//     alert('Admin login required');
//     user = prompt('Who are you?');
//   } else {
//     loggedIn = true;
//   }

// } while (!loggedIn);

let person = ['Jacob', 32, 'instructor', 'likes pokemon']; // person.length === 4

// for (let i = 0; i < person.length; i++) {
//   alert(person[i]);
//   console.log(person[i]);
// }

// write a for loop that runs 4 times
// each time the loop runs, log the intializer value plus 5.


let questions = [
  'how old are you?',
  'what is your favorite color?'
];
let responses = ['hello world'];
// console.log(questions + responses);

for (let i =0; i < questions.length; i++) {

  let response = prompt(questions[i]);
  responses.push(response);
}

console.log(responses);
