'use strict';

//12Sep

console.log('test')

//take in user input
let userAnswer = prompt('Is my favorite food pizze? Please respond with yes or no.');

console.log("userAnswer: ", userAnswer);

//clean up the input
//toLowerCase for user input validation
let cleanUserAnswer = userAnswer.trim().toLowerCase();

//trim() removes spaces
//toLowerCase() puts into lower case
console.log("Clean user answer: ", cleanUserAnswer)

//use if elses conditions to determine a response to the user 

if (cleanUserAnswer === 'yes' || cleanUserAnswer === 'y') {
    alert('You\re right! Pizza is great!)
} else {
    alert('You\'re wrong, pizza is my favorite.)
}

//chaining functions
let userName = prompt('What is your user name?')
console.log(userName);
console.log(typeOf(userName));

//prompt returns a string. Can you typeOf() if you're not sure.


//short-circuiting if/else

//intro to arrays, some methods we can use on arrays - pop, push
//different data types can go into arrays

let emptyArray = [];
console.log(emptyArray)
let quizAnswers = ['c', 'a', 'd', 'c', 'e', 'c'];

//nested arrays:
//AKA matrixes

let createNested = [['a', [], [{}, 'a']], 'd'];

console.log(createNested)

//data persistance - storing user data

//nested arrays
//what goes in an array, how to access things in arrays

let myArrayOne = ['a', 'x', 'c']

//for example myArrayOne[0] is 'a'


//

let userPoints = 0;

console.log ('user points: ' userPoints);

alert('hello and welcome to my guessing game');


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

