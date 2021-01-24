'use strict';

var score = 0;

var userName = prompt('Hey! Whats your name?');
alert('Hello, ' + userName + ' Nice to Meet you!');


function timeOne() {
  var answerOne = prompt('Am I Married?').toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y') {
    alert('You Are Correct');
    score++;
  } if (answerOne === 'no' || answerOne === 'n') {
    alert('That isnt correct, Im sorry');
  }
}

timeOne();



function timeTwo() {
  var answerTwo = prompt('Do I like Beer?').toLowerCase();
  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('You Are Correct');
    score++;
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('EHHHH, WRONG!');
  }
}

timeTwo();

function timeThree() {
  var answerThree = prompt('Will I die young?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    alert('You only wish');
    score++;
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('Duh');
  }
}

timeThree();


function timeFour() {
  var answerFour = prompt('Do I have 2 boys?').toLowerCase();
  if (answerFour === 'yes' || answerFour === 'y') {
    alert('Correct!');
    score++;
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert('Incorrect');
  }
}

timeFour();

function timeFive() {
  var answerFive = prompt('Would I like Snickers?').toLowerCase();
  if (answerFive === 'yes' || answerFive === 'y') {
    alert('You\'re Correct! ' + userName + ' I appreciate the time you\'ve spent with me');
    score++;
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert('That is not correct, Thanks for Trying anyway ' + userName + ', I appreciate the time youve spent with me!' + ' You Answered' + score + ' Great Job!');
  }
}

timeFive();

function timeSix() {
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

function timeSeven() {
  var answerCorrectly = false;
  var correctAnswers = ['blue', 'green', 'yellow'];
  for (var i = 0; i < 6; i++) {
    var answerSeven = prompt('What is my favorite Color').toLowerCase();
    for (var j = 0; j < correctAnswers.length; j++) {
      if (correctAnswers[j] === answerSeven) {
        alert('Correct! Good job.');
        answerCorrectly = true;
      }
    }
    if (answerCorrectly) {
      break;
    }
  }
}
timeSeven();
{
  alert('congratulations!, you answered ' + score + ' correctly! Thanks for visiting. Here are the correct answers: 5, and Blue, Green, or Yellow. Thanks for playing!');
}
