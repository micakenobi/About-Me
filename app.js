'use strict';

alert('Time to Play!');

var question1 = 'What is your name?';
var answerUserName = prompt(question1);
console.log(question1 + ': ' + answerUserName);
var response1 = 'Well hello there, ' + answerUserName;
alert(response1);

var question2 = 'Do you also like to travel?';
var answerTravel = prompt(question2);
if (answerTravel.toLowerCase() === 'yes' || answerTravel.toLowerCase() === 'y'){
  alert ('Let\'s plan a trip!');
} else if (answerTravel.toLowerCase() === 'no' || answerTravel.toLowerCase() === 'n') {
  alert ('You are dull...');
} else {
  alert('You didn\'t put a proper answer. Try "yes", "y", "no", or "n".');
}
console.log(question2 + ': ' + answerTravel);

var question3 = 'Do you like to eat dessert?';
var answerDessert = prompt(question3);
if (answerDessert.toLowerCase() === 'yes' || answerDessert.toLowerCase() === 'y'){
  alert ('Ready for cake!');
} else if (answerDessert.toLowerCase() === 'no' || answerDessert.toLowerCase() === 'n') {
  alert ('Live a little...');
} else {
  alert('You didn\'t put a proper answer. Try "yes", "y", "no", or "n".');
}
console.log(question3 + ': ' + answerDessert);

var question4 = 'Do you like running?';
var answerRun = prompt(question4);
if (answerRun.toLowerCase() === 'yes' || answerRun.toLowerCase() === 'y'){
  alert ('Grab your sneakers!');
} else if (answerRun.toLowerCase() === 'no' || answerRun.toLowerCase() === 'n') {
  alert ('Shucks...');
} else {
  alert('You didn\'t put a proper answer. Try "yes", "y", "no", or "n".');
}
console.log(question4 + ': ' + answerRun);

var question5 = 'Do you like puppies?';
var answerPup = prompt(question5);
if (answerPup.toLowerCase() === 'yes' || answerPup.toLowerCase() === 'y'){
  alert ('Puppy time!');
} else if (answerPup.toLowerCase() === 'no' || answerPup.toLowerCase() === 'n') {
  alert ('Don\'t tell me you like cats...');
} else {
  alert('You didn\'t put a proper answer. Try "yes", "y", "no", or "n".');
}
console.log(question5 + ': ' + answerPup);

var questionCoffee = 'How many cups of coffee do I drink per day?';
var solution = 2;
var msgLow = 'too low';
var msgHigh = 'too high';
var msgCorrect = 'correct';
var counter = 0;
for (var i = 0; i < 4; i++) {
  var userResponse = parseInt(prompt(questionCoffee));
  console.log(userResponse);
  if (userResponse === solution){
    alert (msgCorrect);
    counter += 1;
    break;
  }
  else if (userResponse > solution){
    console.log(userResponse);
    alert (msgHigh);
    //counter += 0;
  }
  else if (userResponse < solution) {
    console.log(userResponse);
    alert (msgLow);
    // counter += 0;
  }
}

var foodQuestion = 'What is my favorite breakfast food?';
var arrayFood = ['pancakes', 'eggs', 'yogurt'];
var arrayLength = arrayFood.length;
var msgYes = 'You got it';
var gameOver = false;
for (var i = 0; i < 6; i++){
  var userAnswer = prompt (foodQuestion);
  for (var x = 0; x < arrayLength; x++){
    if (userAnswer === arrayFood[x] ){
      alert (msgYes);
      gameOver = true; /*redefines gameOver from false to true because it is true that the game is now over*/
      counter += 1;
      break; /*breaks out of for loop on line 88 */
    }
  }
  if (gameOver) { /* game over is true so this breaks it out of the for loop on line 86*/
    var msgFinal = '';
    for (var y = 0; y < arrayLength; y++){
      msgFinal += arrayFood[y] + ' ';
    }
    alert ('My favoirte foods are ' + msgFinal);
    break;
  }
}
alert (answerUserName + ' you got ' + counter + ' out of two.');
