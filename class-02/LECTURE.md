# Class 02

## Warm Up

## Code Review

Liking the console.log!
using Prompt / console.log / alert was a little challenging.

## JS Expressions / Conditions

Recall from yesterday, we mentioned 3 data types:

* String : "here is a string"
* Number : 1/2 | 0.5 | 100 != "100"
* Boolean : True | False
* Null : The conscious lack of value.
* Undefined : The lack of set value.

Expression: any line of code that can be interpreted as a value.
Statement: performs an action.

```javascript
let name = 'Jacob'; // statement - creates a variable.
let likesProgramming = true;

name + likesProgramming // => "Jacobundefined"
```

Conditional Logic: Code Blocks that are executed or ignored based on the evaluation of an expression.

```javascript

let likesProgramming = true; // this is a statement.

// if statement
// states with the 'if' keyword, and takes an expression within the parentheses.
if (likesProgramming) {
 //this line of code runs
} else {
  // this runs when our expression in the if statement is evaluated as falsey
}

```

### truthiness vs falsey

Truthy

* any number that is not 0.
* Any String that is not empty.
* Empty arrays, and objects.
* The boolean true.

Falsey

* The number 0
* The Boolean false
* Empty String.
* The values null and undefined.

## Arrays

Arrays are data structure that group values together in one spot.
* Organized by index (number from 0 to infinity);
* Index represents the distance from the beginning of the structure.

## Lab Prep / Git and Github