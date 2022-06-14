'use strict';

let names = ['Charizard', "Charmeleon", 'Charmander'];
let pokedex = [];

// Constructors!
function Pokemon(name, hp) {
  // adding this line of code that adds a property to 'this' makes this a constructor
  this.name = name;
  this.hp = hp;

  // this works and should be used, when only when attached to a specific object.
  this.speak = function () {
    console.log(this.name.toUpperCase());
  };

  // inside of a constructor 'this' refers to the object that will be created.
  pokedex.push(this);
}

// Constructors have Prototypes. Think of this as the blueprint for values that shared.
Pokemon.prototype.attack = function() {
  console.log(this.name + ' performs an attack!');
};
Pokemon.prototype.type = 'Pocket Monster';

// new keyword activate constructor powers
let Charizard = new Pokemon('Charizard', 1000); // creates an instance of a Pokemon.
let Blastoise = new Pokemon('Blastoise', 900);
let Pikachu = new Pokemon('Pikachu', 500);
let Eevee = new Pokemon('Eevee', 200);

function render(pokemon) {

  // add a table row to our table element
  let tableEl = document.getElementById('my-pokemon');
  let tableRowEl = document.createElement('tr');
  let nameEl = document.createElement('td');
  let hpEl = document.createElement('td');

  tableEl.appendChild(tableRowEl);
  tableRowEl.appendChild(nameEl);
  tableRowEl.appendChild(hpEl);

  nameEl.textContent = pokemon.name;
  hpEl.textContent = pokemon.hp;
}

function renderFromTemplate(pokemon) {
  // let tableRow = document.getElementById('pokemon-row');
  let nameEl = document.getElementById('name-cell');
  let hpEl = document.getElementById('hp-cell');

  nameEl.textContent = pokemon.name;
  hpEl.textContent = pokemon.hp;
}

// render(Charizard);
renderFromTemplate(Charizard);
render(Blastoise);
render(Pikachu);
render(Eevee);

