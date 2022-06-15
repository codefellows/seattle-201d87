# Class 08 - CSS Wireframing / DOM and Constructor Review

## Warm Up / Review

* How do we put data in a table?
* How to create an empty cell?
  * Empty cell within a cell.

## Prototypal Inheritance

Constructor Functions

* A function that defines a template that you feed things into, and outputs and object.
  * Objects will have all the properties and methods defined in that template.
* An object (key value pairs) factory.

```javascript

let pokedex = [];

function Pokemon(value) {
  this.name = value;

  // pokedex.push(this);
}

// this is not a constructor function
Pokemon.prototype.speak = function() {
  // 'this' still refers to the this as within the constructor
}

function FlyingType(wingSpan) {
  this.wingSpan = wingSpan;
}

FlyingType.prototype = Pokemon.prototype;
FlyingType.prototype.weakness = 'rock';

// what values are different
function Employee(name, age, religion) {
  this.age = age;
  this.name = name;
  this.religion = religion;
  this.salary = 1000000;
  this.bankAccount = {
    id: 29736491278634,
    balance: 0,
  }
}

let jacob = new Employee('jacob', 32, 'atheist');

Employee.prototype.company = 'Code Fellows';
Employee.prototype.position = 'junior';
Employee.prototype.promotion = function (title) {
  this.position = title;
}
Employee.prototype.getPaid = function () {
  this.bankAccount.balance += this.bankAccount.salary;
}

function Contractor(name) {
  this.name = name
  this.bankAccount = {
    id: 12038709875,
    balance: 0,
  };
  this.hours = 40;
}

// inherit the prototype object from the Employee constructor
Contractor.prototype = Employee.prototype;


// using the constructor function
new Pokemon('Jacob');
new Pokemon('Adrian');

pokedex; // [Jacob, Adrian]
```

### Prototype Object

* Use it to create a function outside the constructor and will still apply to that object.
* We can expand the method set.
* This still refers to the object created by the constructor.
* Blueprint shared by all and future object coming from the constructor.

## CSS From a Wireframe

## Lab Prep - lab 08a??
