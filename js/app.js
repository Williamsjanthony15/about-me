'use strict';
//Get Username
// write 5 questions, Must accepct y/n or Yes/No in ANY CASE
// User Username in the beginning and End when the user is done.
var userName = prompt('Hey! Whats your name?');
alert('Hello, ' + userName + ' Nice to Meet you!');


var answerOne = prompt('Am I Married?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  // console.log('Your correct');
  alert('You Are Correct');
} if (answerOne === 'no' || answerOne === 'n') {
  // console.log('That isnt correct, Im sorry');
  alert('That isnt correct, Im sorry');
}

var answerTwo = prompt('Do I like Beer?').toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
  // console.log('Your Correct!);
  alert('You Are Correct');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  // console.log('EHHHH, WRONG!');
  alert('EHHHH, WRONG!');
}

var answerThree = prompt('Will I die young?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  // console.log('You only wish');
  alert('You only wish');
} else if (answerThree === 'no' || answerThree === 'n') {
  // console.log('Duh');
  alert('Duh');
}

var answerFour = prompt('Do I have 2 boys?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  // console.log('Your correct!');
} else if (answerFour === 'no' || answerFour === 'n') {
  //console.log('Incorrect');
  alert('Incorrect');
}

var answerFive = prompt('Would I like Snickers?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  // console.log('Your Correct');
  alert('Your Correct! ' + userName + ' I appreciate the time youve spent with me');
} else if (answerFive === 'no' || answerFive === 'n') {
  // console.log('That is not correct');
  alert('That is not correct, Thanks for Trying anyway ' + userName + ', I appreciate the time youve spent with me!');
} else {
  //console.log('Thanks ' + userName + ' I appreciate the time youve spent with me!');
  alert('Thanks ' + userName + ' I appreciate the time youve spent with me!');
}
