# Class 10 - JS Debugging / Salmon Cookies Review

## Warm Up

I will be the navigator,  write the code that corresponds to my words:

```javascript
let john = {
    first: 'john', // key value pair || property
    last: 'cokos',
    lastName: 'cookoo',
    age: 50
}


console.log(john.first); // the "first" property on the 'john' object, the key "first"

let keyWord = 'last';
console.log(john[keyWord]); // =>  'cokos'

// define a variable called 'props' equal to an array with 4 elements => 'first', 'last', 'hairType', 'age'.
let props  = ['first', 'last', 'hairType', 'age'];

function loop(){
  for (let i = 0; i< props.length ; i++) {
    // refactor the loop, to read from the john object using bracket notation, using the values from the props array.
    let property = props[i];

    // props['john', 'cokocs', 'cookoo', 'age']; // invoking a function
    // console.log(props[i]); //
    console.log(john[property]]);
  }
}

loop();
```
