# Class 03 - HTML / CSS Box Model, Loops and how our Code Runs

## Warm Up

JavaScript expression: Anything that gets interpreted as a value.

```javascript

5 - 4 // an expression that is interpreted as the value 0, if we use it in an if statements it is falsey.

'Jacob' - true // 'Jacobtrue'

true && true // true
false && true // false
false && false // false
10 == 10 // true
10 == '10' // true
10 === '10' // false
10 === 10 && 2 <= 1 // false
2 !== 1 || 1 === 1 // true
!(false && true) // true

```

JavaScript statement: doing something, stating a variable.

## Code Review

Lab 02 - Thank you Rexie!

## Box Model

Every element that we create in HTML, has an invisible box with 3 layers:
  
  * Margin - the outer most box, seperates other elements from the current element.
  * Padding - the inner most box,  sets space between the border and the contents of the element.
  * Border - the second layer,  a box that sits between the padding and the margin.
  * (Actual size of the content)

* p tags are displayed as `block` elements, while spans are `inline`.

## How our JS runs / Looping code

3 types of loops:

* `for` loop - given some number, run the loop that many times.
* `while` loop - given some expression that evaluates to a boolean , run the code as long as the condition is true.
* `do while` - given some expression that evaluates to a boolean , run the code as long as the condition is true (this always runs at least once).

;) these work really well with array.
