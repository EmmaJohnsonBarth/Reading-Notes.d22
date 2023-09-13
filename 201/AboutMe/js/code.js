
'use strict';

// let userName = prompt('What is your name?', 'Bob');

// alert("Welcome to the site, " + userName);

// document.write('Hello, ' + userName + '!');

// function questionOne() {
//     let answer = prompt('Was I born in the state of Iowa? y/n');
//     if (answer.toLowerCase() === 'n') {
//         // console.log("Correct!")
//         alert("Correct!");
//         questionTwo();
//     } else {
//         // console.log("Try again!")
//         alert('Try again!')
//     }
// }

// function questionTwo() {
//     let answer = prompt('Do I play the piano? y/n');
//     if (answer.toLowerCase() === 'y') {
//         // console.log("Correct!")
//         alert("Correct!");
//         questionThree();
//     } else {
//         // console.log("Try again!")
//         alert('Try again!')
//     }
// }

// function questionThree() {
//     let answer = prompt('Do I own pets? y/n');
//     if (answer.toLowerCase() === 'y') {
//         // console.log("Correct!")
//         alert("Correct!");
//         questionFour();
//     } else {
//         // console.log("Try again!")
//         alert('Try again!')
//     }
// }

// function questionFour() {
//     let answer = prompt('Did I work for Iowa State University? y/n');
//     if (answer.toLowerCase() === 'n') {
//         // console.log("Correct!")
//         questionFive()
//     } else {
//         // console.log("Try again!")
//         alert('Try again!')
//     }
// }

// function questionFive() {
//     let answer = prompt('Did I attend Cornell College? y/n');
//     if (answer.toLowerCase() === 'y') {
//         // console.log("Good job!)
//         alert('Good job, ' + userName + '!')
//     } else {
//         // console.log("Try again!")
//         alert('Try again!')
//     }
// }


let userPoints = 0;

console.log ('user points: ', userPoints);

alert('hello and welcome to my guessing game');

//an empty string is falsy

let userName;

while (!userName) {
    userName = prompt('Welcome! What is your name?');
    console.log('user name: ', userName);
}

//lowercase input and remove extra spaces

let normalizedInputName = userName.toLowerCase().trim();

console.log('normalized name: ', normalizedInputName);

// if (normalizedInputName !== 'bob') {
//     console.log('bob?', normalizedInputName;)
// }

alert('Hello, ' + userName + ' let\'s play a game.');

let answer = prompt('Is popcorn my favorite food?').trim().toLowerCase();

console.log('answer: ', answer)

if (answer === 'no' || answer === 'n') {
    alert ('You\'re correct!')
    userPoints++;
} else if (answer === 'yes' || answer === 'y') {
    alert ('You\'re incorrect. I like pizza!')
} else {
    alert ('Please select yes or no');
    answer = prompt('Is popcorn my favorite food?')
}

//looping

let count = 50;

while (count >= 20) {
    console.log('50 - 20', count);
    count -= 2;
}

//do while loop

let newUser;

do {
    newUser = prompt('A new user name please?');
    console.log('A new user name: ' , newUser)
} while (!newUser);

console.log('we now have a new user', newUser)

const foodsILike = ['chips', 'pizza', 'cheese', 'lemon bars'];

for (let i = 0; i < foodsILike.length; i++) {
    console.log('foodsILike: ' foodsILike[i])
}

