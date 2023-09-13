
'use strict';

let userName = prompt('What is your name?', 'Bob');

alert("Welcome to the site, " + userName);

document.write('Hello, ' + userName + '!');

function questionOne() {
    let answer = prompt('Was I born in the state of Iowa? y/n');
    if (answer.toLowerCase() === 'n') {
        // console.log("Correct!")
        alert("Correct!");
        questionTwo();
    } else {
        // console.log("Try again!")
        alert('Try again!')
    }
}

function questionTwo() {
    let answer = prompt('Do I play the piano? y/n');
    if (answer.toLowerCase() === 'y') {
        // console.log("Correct!")
        alert("Correct!");
        questionThree();
    } else {
        // console.log("Try again!")
        alert('Try again!')
    }
}

function questionThree() {
    let answer = prompt('Do I own pets? y/n');
    if (answer.toLowerCase() === 'y') {
        // console.log("Correct!")
        alert("Correct!");
        questionFour();
    } else {
        // console.log("Try again!")
        alert('Try again!')
    }
}

function questionFour() {
    let answer = prompt('Did I work for Iowa State University? y/n');
    if (answer.toLowerCase() === 'n') {
        // console.log("Correct!")
        alert('Correct!');
        questionFive();
    } else {
        // console.log("Try again!")
        alert('Try again!')
    }
}

function questionFive() {
    let answer = prompt('Did I attend Cornell College? y/n');
    if (answer.toLowerCase() === 'y') {
        // console.log("Good job!)
        alert('Correct!')
        questionSix();
    } else {
        // console.log("Try again!")
        alert('Try again!')
    }
}

let attemptsQ6 = 0;


function questionSix() {
    if (attemptsQ6 > 4) {
        alert('Too many attempts! The answer was 3.');
        attemptsQ6 = 0;
        return;
    }

    let answer6 = prompt('How many pets do I own?');

    if (answer6 == 3) {
        alert('Correct!');
        questionSeven();
    } else if (answer6 > 3) {
        alert('Too high!');
        attempts++;
        questionSix();
    } else if (answer6 < 3) {
        attempts++
        alert('Too low!');
        questionSix();
    } else {
        alert('what')
    };
};

let attemptsQ7 = 0
let arrOfGuesses = [];

function questionSeven() {
    if (attemptsQ7 > 6) {
        alert('Too many attempts! The answer was Daisy');
        attemptsQ7 = 0;
        return;
    }
    let answer7 = prompt('What is my cat\'s name? Hint: It\s a flower!')
    arrOfGuesses.push(answer7);
    if (answer7.toLowerCase() == 'Daisy') {
        alert('That\'s correct! Good job, ' + userName + '!');
    } else {
        alert('Guess again!');
        questionSeven();
    }
}

// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
