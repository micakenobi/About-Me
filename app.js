'use strict';

function functionName(){
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
}
