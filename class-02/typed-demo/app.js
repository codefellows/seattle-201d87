'use strict';

console.log('my javascript is running');

let user = prompt('What is your name?');
let likesProgramming = confirm('Do you like Programming');

console.log('Your name is: ' + user);

if (user) {
  console.log('hello ' +  user + "!!");
} 

if (likesProgramming) {
  alert('Great, so do I');
} else {
  alert('Aww :(');
}

let names = [];

names.push('Jacob'); // ['Jacob']
names.push('Adrian'); // ['Jacob', 'Adrian']
names[0]; // 'Jacob'
names[1]; // 'Adrian'

let lastName = names.pop(); // removes the last thing that was added; => Adrian
console.log(lastName, names);