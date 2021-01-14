'use strict';
//Get Username
// write 5 questions, Must accepct y/n or Yes/No in ANY CASE
// User Username in the beginning and End when the user is done.
var Username = prompt('Hey! Whats your name?');
alert('Hello, ' + Username + ' Nice to Meet you!');


var questionOne = prompt('Am I Married?').toLowerCase();
if (questionOne === 'yes' || questionOne === 'y') {
  // console.log('Your correct');
  alert('You Are Correct');
}

var questionTwo = prompt('Do I like Beer?').toLowerCase();
if (questionTwo === 'yes' || questionTwo === 'y') {
  // console.log('Your Correct!);
  alert('You Are Correct');
} else if (questionTwo === 'no' || questionTwo === 'n') {
  // console.log('EHHHH, WRONG!');
  alert('EHHHH, WRONG!');
}

var questionThree = prompt('Will I die young?').toLowerCase();
if (questionThree === 'yes' || questionThree === 'y') {
  // console.log('Your Correct!);
  alert('You are Correct');
} else if (questionThree === 'no' || questionThree === 'n') {
  // console.log('Nope Good Try');
  alert('Nope Good Try');
}

var questionFour = prompt('Do I have 2 boys?').toLowerCase();
if (questionFour === 'yes' || questionFour === 'y') {
  // console.log('Your correct!');
} else if (questionFour === 'no' || questionFour === 'n') {
  //console.log('Incorrect');
  alert('Incorrect');
}

var questionFive = prompt('Would I like Snickers?').toLowerCase();
if (questionFive === 'yes' || questionFive === 'y') {
  // console.log('Your Correct');
  alert('Your Correct');
} else if (questionFive === 'no' || questionFive === 'n') {
  // console.log('That is not correct');
  alert('That is not correct');
}


