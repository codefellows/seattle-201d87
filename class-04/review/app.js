'use strict';

// ask the user their name, display that back to the user?
let user = prompt('What is your name?');
while (!user) {
  user = prompt('We require a user name.');
}

// we can use the variable user
alert('Welcome ' + user + '!!');

// ask a multiple answer question, with set number of guesses.
let favoriteMovies = ['The Other Guys', 'Airplane', 'Starship Troopers', 'The Martian', 'Mars Attacks'];
let numberOfGuesses = 0;
let allowedAttempts = 5;
let correctAnswerFound = false;

// const gameShouldKeepGoing = (numberOfGuesses < allowedAttempts) && !correctAnswerFound;

while ((numberOfGuesses < allowedAttempts) && !correctAnswerFound) {
  let response = prompt('What is one of my favorite movies?');
  numberOfGuesses++;

  // does the response given match a value inside our favorite movies array. // the godfather
  for (let i = 0; i < favoriteMovies.length; i++) {
    alert(i);
    if (response.toLowerCase() === favoriteMovies[i].toLowerCase()) { // where are correct answers
      // correct answer!!!
      alert('Correct');
      correctAnswerFound = true;
      // stop asking questions
      break;
    }
  }

  if (!correctAnswerFound) {
    alert('you have ' + (allowedAttempts - numberOfGuesses) + ' left');
  }
}

alert('Your done');



// Guess a number between 0 - 100, must give feedback whether guess is high or low, user has 4 attempts