'use strict';
//Get Username
// write 5 questions, Must accepct y/n or Yes/No in ANY CASE
// User Username in the beginning and End when the user is done.
var score = 0;

var userName = prompt('Hey! Whats your name?');
alert('Hello, ' + userName + ' Nice to Meet you!');

// Question One
function timeOne(){
var answerOne = prompt('Am I Married?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  // console.log('Your correct');
  alert('You Are Correct');
  score++;
} if (answerOne === 'no' || answerOne === 'n') {
  // console.log('That isnt correct, Im sorry');
  alert('That isnt correct, Im sorry');
}
}

timeOne();

// Question Two

function timeTwo(){
var answerTwo = prompt('Do I like Beer?').toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
  // console.log('Your Correct!);
  alert('You Are Correct');
  score++;
} else if (answerTwo === 'no' || answerTwo === 'n') {
  // console.log('EHHHH, WRONG!');
  alert('EHHHH, WRONG!');
}
}

timeTwo();

// Question Three
function timeThree(){
var answerThree = prompt('Will I die young?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  // console.log('You only wish');
  alert('You only wish');
  score++;
} else if (answerThree === 'no' || answerThree === 'n') {
  // console.log('Duh');
  alert('Duh');
}
}

timeThree();

// Question four
function timeFour(){
var answerFour = prompt('Do I have 2 boys?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  // console.log('Your correct!');
  alert('correct!');
  score++;
} else if (answerFour === 'no' || answerFour === 'n') {
  //console.log('Incorrect');
  alert('Incorrect');
}
}

timeFour();

// Question Five
function timeFive(){
var answerFive = prompt('Would I like Snickers?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  // console.log('Your Correct');
  alert('Your Correct! ' + userName + ' I appreciate the time youve spent with me');
  score++;
} else if (answerFive === 'no' || answerFive === 'n') {
  // console.log('That is not correct');
  alert('That is not correct, Thanks for Trying anyway ' + userName + ', I appreciate the time youve spent with me!' + ' You Answered' + score + ' Great Job!');
}
}

timeFive();

function timeSix(){
var toLow = ['1', '2', '3', '4'];
var toHigh = ['6', '7', '8', '9', '10'];
for (var i = 0; i < 4; i++) {
  var answerSix = prompt('Guess a number! 1 - 10').toLowerCase();
  if (answerSix === '5' || answerSix === 'five') {
    alert('Wow, You had 1 and 10 chance to guess that correctly and you did! Congratulations!');
    break;
  } else {
    for (var j = 0; j < toHigh.length; j++) {
      if (toLow[j] === answerSix) {
        alert('To low try again.');
        break;
      } if (toHigh[j] === answerSix) {
        alert('To high, try again.');
        break;
      }
      if (j === toHigh.length - 1) {
        alert('Invalid Input, Please Input Number!');
      }
    }
  }
}
}

timeSix();

function timeSeven(){
// I is utilized for loop above.
var answerCorrectly = false;
var correctAnswers = ['blue', 'green', 'yellow'];
for (var i = 0; i < 6; i++) {
  var answerSeven = prompt('What is my favorite Color').toLowerCase();
  // if (answerSeven === correctAnswers) {
  //   alert('I\'m not quite sure how you knew that, but good job');
  // } else {
  for (var j = 0; j < correctAnswers.length; j++) {
    if (correctAnswers[j] === answerSeven) {
      alert('Correct! Good job.');
      answerCorrectly = true;
    }
    // if (j === correctAnswers.length - 1){
    //   alert('Input Proper Variable Please.');
    // }
    
  }
  if (answerCorrectly){
    break;
  }
}
}

timeSeven();