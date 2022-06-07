'use strict';

// building a bouncer?

// we need the user id
let id = prompt('Who are you?');

if (id) {

  let age = prompt('How old are you?');
  
  // From the id, what is their legal age?
  if (age >= 21) {

    // what is bar Capacity?
    const currentOccupency = prompt('How many are in the bar?');
    const maxCapacity = 100;

    if (currentOccupency < maxCapacity) {
    
      // is the user armed?
      // is the user drunk?
      // Do you have any booze / bag check?
      // let status = confirm('Are you drunk?') || confirm('Are you armed?') || confirm('Do you have any booze?');
      if (confirm('Are you drunk?') || confirm('Are you armed?') || confirm('Do you have any booze?')) {
        alert('Sorry come back later');
      } else {
        alert('Welcome to my bar!');
      }
    } else {
      alert('No room in my bar');
    }
  } else {
    alert('Not old enough');
  }
  

} else {
  alert('You need id');
  console.log('no entry');
}