# Class 07 - HTML Tables and Constructor Functions

## Review

Step 1:

* create your html (index.html and sales.html) and javascript(app.js).

## HTML Tables

Tabular data refers to data values organized by rows and columns.  Tables are 2 dimensional, we have to represent both dimensions in HTML.

```html

<table>
  <!-- Table Row -->
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr> 
</table>

```

## Constructor Functions

* Special type of function that automatically returns an object.

```javascript

let Charizard = {
  name: 'Charizard',
  speak: function() {
    console.log(this.name);
  }
}

let Blastoise = {
  name: 'Blastoise',
  speak: function() {
    console.log(this.name);
  }
}

// Pokemon Constructor
function Pokemon (name) {
  // adding this line of code that adds a property to 'this' makes this a constructor
  this.name = name;
}


let Charizard = new Pokemon('Charizard');

console.log(Charizard);

```
