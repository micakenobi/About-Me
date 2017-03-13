'use strict';
function functionButton() {
  alert('Time to Play!');

  var counter = 0;
  var question1 = 'What is your name?';
  var question2 = 'Do you also like to travel?';
  var question3 = 'Do you like to eat dessert?';
  var question4 = 'Do you like running?';
  var question5 = 'Do you like puppies?';
  var question2NegativeResponse = 'You are dull...';
  var question3NegativeResponse = 'Live a little...';
  var question4NegativeResponse = 'Shucks...';
  var question5NegativeResponse = 'Don\'t tell me you like cats...';
  var question2PositiveResponse = 'Let\'s plan a trip!';
  var question3PositiveResponse = 'Ready for cake!';
  var question4PositiveResponse = 'Grab your sneakers!';
  var question5PositiveResponse = 'Puppy time!';
  var invalidInput = 'You didn\'t put a proper answer. Try "yes", "y", "no", or "n".';

  var questions = [question2, question3, question4, question5];
  var positiveResponse = [question2PositiveResponse, question3PositiveResponse, question4PositiveResponse, question5PositiveResponse];
  var negativeResponse = [question2NegativeResponse, question3NegativeResponse, question4NegativeResponse, question5NegativeResponse];

  var answerUserName = prompt(question1);
  console.log(question1 + ': ' + answerUserName);
  var response1 = 'Well hello there, ' + answerUserName;
  alert(response1);

  function questionForLoop(){
    for (var i = 0; i < questions.length; i++){
      while (true) {
        var answer = prompt(questions[i]);
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y'){
          alert (positiveResponse[i]);
          counter++;
          break;
        } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
          alert (negativeResponse[i]);
          break;
        } else {
          alert(invalidInput);
        }
      }
    }
  }

  questionForLoop();

  var questionCoffee = 'How many cups of coffee do I drink per day?';
  var solution = 2;
  var msgLow = 'too low';
  var msgHigh = 'too high';
  var msgCorrect = 'correct';

  function guessCoffee(coffeeSol) {
    for (var i = 0; i < 4; i++) {
      var userResponse = parseInt(prompt(questionCoffee));
      console.log(userResponse);
      if (userResponse === coffeeSol){
        alert (msgCorrect);
        counter++;
        break;
      }
      else if (userResponse > coffeeSol){
        console.log(userResponse);
        alert (msgHigh);
        //counter += 0;
      }
      else if (userResponse < coffeeSol) {
        console.log(userResponse);
        alert (msgLow);
        // counter += 0;
      }
      else {
        alert('Please enter a number, between 0 and 10.');
      }
    }
  }
  guessCoffee(solution);

  var foodQuestion = 'What is my favorite breakfast food?';
  var arrayFood = ['pancakes', 'eggs', 'yogurt'];
  var msgYes = 'You got it';
  var gameOver = false;

  function guessFood(foodArr) {
    var arrayLength = foodArr.length;
    for (var i = 0; i < 6; i++) {
      var userAnswer = prompt (foodQuestion);
      for (var x = 0; x < arrayLength; x++) {
        if (userAnswer === foodArr[x] ){
          alert (msgYes);
          gameOver = true; /*redefines gameOver from false to true because it is true that the game is now over*/
          counter++;
          break; /*breaks out of for loop on line 88 */
        }
      }
      if (gameOver) { /* game over is true so this breaks it out of the for loop on line 86*/
        var msgFinal = '';
        for (var y = 0; y < arrayLength; y++) {
          msgFinal += foodArr[y] + ' ';
        }
        alert ('My favorite foods are ' + msgFinal);
        break;
      }
    }
  }
  guessFood(arrayFood);

  alert (answerUserName + ' you got ' + counter + ' out of six.');
}
