# Class 11 - HTML Media / CSS Grid / Odd Duck Product

## Warm Up / Review

Topics Covered (mostly)

```javascript
HTML elements / tags
HTML attributes
CSS Selectors
CSS properties / values
Git and Github
The Box Model
Variables
Expressions / Statements
Conditional Statements
Arrays
Functions
Object Literals
Constructor Functions
the DOM
Event Handling
```

Trevor:  nested for loops, general confusion on how it works.  How does a nested for loop
Tom: When to use constructor functions?
Github branching: How to avoid "Gituations"?
 * Merge Conflicts (2 people have written in the same file, and their changes need to be brought together).
 * Errors on Pull / Push.
  * Merge conflict on pull.
Matthew: File Paths on Github (linked js and CSS?).
 * <link rel='stylesheet' href='./style.css'>
  * github pages likes to publish projects from a sub-domain
  * `username.github.io/salmon-cookies`
Mandela: What is the DOM used for?
  * DOM is used for performing updates to the HTML document.
    * CREATE / READ / UPDATE / DELETE elements in the Browser.
Lucy: How to create a variable, modify in one function, and use in a second function?
Events:  AddEventListener, how to add inputs.
Isaiah: When do you use classes / ids / query Selectors.
  * Classes in CSS should be used when you want to reuse CSS Blocks for multiple elements / components.
  * ID: should be used for DOM selection, and finding 1 specific area of your HTML.
Hayden: General CSS usage, when to use pseudo selectors vs making a class or ID.

```javascript

let i = 0;
let j = 0;

while (i < 10) {
  console.log(i);
  i++;
  while(j < 10) {
    j++;
    console.log(j);
  }
}


let names = ['Jacob', 'Adrian']; // application state => state is something that can change over time.

// modifies the names array.
function addName(name) {
  names.push(name);
}

function findName(name) {
  for (let i = 0; i < names; i++) {
    // if name is found, we return the name
  }
}

let name = '';


// pass this off to the form element to be run on submit?
form.addEventListener('submit', function(event) { //  function currying

});

// function curry(name) {
//   return function (event) {
//     console.log(name);
//   }
// }

// const curriedFunction = curry('Jacob');


// scoping variables, name is globally scoped
let name = 'Jacob';

function function() {

  // this locally scoped name will be used instead of the globally scoped name.
  let name = 'adrian';

  // loopOne is available to all code block within line 97.
  for (let loopOne = 0; loopOne < 10; loopOne++) {
    for (let loopTwo = 0;) {


    }
  }
}
```

## HTML Media

## CSS Grid