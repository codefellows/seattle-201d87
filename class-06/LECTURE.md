# Class 06 - Object Literals / DOM (Document Object Model)

## Warm Up / Review

* Rexie: got to problem 5 of lab-05-a.
* CSS selector: CSS Diner
  * Jacob recommends not trying to memorize, but know that you can look them up quickly, and can do a lot with selectors.  

### Concept Review

* Expressions and Statements
  * Anything that is evaluated to a value (numbers, strings, booleans, null, undefined).
* Arrays
  * list of values.
  * linear list of indices.
  * What is an Index?
    * A set of values (always a number / integer).
    * Tells you what position you are.

```javascript
let 2d = [
  [1,2,3]
];

let position = 2d[0][0];
// let number = position[0];
```

* JS Functions
  * a way to call in a block of code useable in multiple places.
  * Creating a tool / custom code block.
  * Parameters / Arguments
    * Parameters: the name / reference given to an input value. (very similar to a variable)
    * Argument: the value to be assigned to a given parameter.
  * return statements
    * ends the function.
    * provides a value to the outside context.

## Object Literals

A new Data Structure.  Similar to arrays in that they store values (strings, numbers, booleans, null, undefined). Instead of organizing by index, we use a key (either a number or a string).

```javascript
let array = ['Jacob'];
array[0];

let object = {
  name: 'Jacob',
};
console.log(name); // syntax error: name is undefined.
object.name; // dot notation -> Jacob
object["name"] // bracket notation -> Jacob
```

Arrays can hold object, object can also hold arrays.

### Contextual 'this'

"this" is a keyword it has a different depending on where it's written.  When used inside of an object literal, it references the same object that you are defining.

## DOM / Document APIs

Global object => `document`, let's you reference all properties and methods associated with the current HTML document being rendered in the Browser.

* Create HTML elements (CREATE)
* Select HTML elements (READ)
* Updating current elements with new elements (UPDATE)
  * `document.write()`

## Lab Prep: Domain Modeling