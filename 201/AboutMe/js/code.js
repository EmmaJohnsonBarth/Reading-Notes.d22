
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

let attempts = 0;


function questionSix() {
    if (attempts >= 4) {
        alert('Too many attempts!');
        attempts = 0;
        return;
    }

    let answer6 = prompt('How many pets do I own?');
    console.log(answer6)

    if (answer6 == 3) {
        alert('That\'s correct! Good job, ' + userName + '!')
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



// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.