'use strict';

let nameInput = document.getElementById('first-name');
let formElement = document.getElementById('person-form');
// console.log(nameInput);
// event listening
// 1st provide the name of an event (there is a big list: https://developer.mozilla.org/en-US/docs/Web/Events)
// 2nd provide a function to run WHEN the event happens

let people = [];

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

function logHello() {
  console.log('hello');
}

function handleClick(event) {
  let elementClickedOn = event.target;

  console.log(event.target.type);
  console.log(event.target.id);
  console.log(event.target.value);
}

nameInput.addEventListener('mouseover', logHello); // function being used as a value;
nameInput.addEventListener('click', handleClick);

formElement.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the refresh on submit
  console.log(event.target.first.value);
  console.log(event.target.last.value);
  console.log(event.target.age.value);

  let firstName = event.target.first.value;
  let lastName = event.target.last.value;
  let age = event.target.age.value;

  let person = new Person(firstName, lastName, age);

  people.push(person);
  renderPeople();
});

function renderPeople() {
  // perhaps render your people array to a list?
}
