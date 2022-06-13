'use strict';

let pokemon = {
  name: 'Charizard',
  speak: function () {
    console.log(this.name.toUpperCase());
  }, // methods
};

// let pokemonName = 'Charizard';
// let digimonName = 'Digital Monster';

// function attack(ap, name, hp) {

// }


let digimon = {
  name: 'Digital Monster',
  skill: 'digevolve',
  ap: 100,
  attack: function (hp) {

    let remainingHealth = hp - this.ap;

    console.log(this.name + ' used ' + this.skill);
    console.log(this.name + ' does ' + this.ap + ' damage. You have ' + remainingHealth + ' health left.');
    return remainingHealth;
  },
};

console.log(pokemon);
pokemon.speak();

let currentHp = 1000;

currentHp = digimon.attack(currentHp);
console.log(currentHp);

// DOM Stuff

let textElement = document.getElementById('banana'); // returns a element if found
console.log(textElement);

// property or method?
textElement.textContent = 'I am a p tag'; // puts this wherever text should go on an "element" object.

// create new elements
let headingEl = document.createElement('h2');

let sectionEl = document.getElementById('results');
headingEl.textContent = 'Results go here!!';

// adding a new element to our existing section.
sectionEl.appendChild(headingEl);

function render() {
  let newEl = document.createElement();

  let resultEl = document.getElementById();
  newEl.textContent = '';

  // adding a new element to our existing section.
  resultEl.appendChild(headingEl);
}


// Random number generation

// console.log(Math.floor(Math.random() * 10) + 1);

Math.random(); // some number between 0 and 1.

function generateRandom(num) {
  return Math.floor(Math.random() * num) + 1;
}

// console.log(generateRandom(1000));

function generateNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

console.log(generateNumberBetween(5,10));
