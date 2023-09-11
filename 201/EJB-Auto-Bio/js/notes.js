'use strict';

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