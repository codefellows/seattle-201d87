'use strict';

function Cat(name, age, color ){
    this.age = age;
    this.color = color;
    this.name = name;
}

Cat.prototype.harass = function(){
  console.log(this.name + " attacks you!");
};

let Miji = new Cat('Miji', 12, 'Brow');

Miji.harass();


function Dog(dogName, breed) {
  this.name = dogName;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return `${this.name} is barking. Bowow.`
};

let temp = Dog.prototype;
let temp2 = Cat.prototype;

Dog.prototype = temp2;
Cat.prototype = temp;

let Jacob = new Dog('jacob', 'golden retriever');
let Adrian = new Cat('Adrian', 7, 'calico');


Jacob.harass(temp2);
console.log(Adrian.bark());









