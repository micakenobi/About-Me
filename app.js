'use strict';
function functionButton() {
  alert('Time to Play!');

  var counter = 0;
  var nameQuestion = 'What is your name?';
  var travelQuestion = 'Do I like to travel?';
  var dessertQuestion = 'Do I like to eat dessert?';
  var runQuestion = 'Do I like running?';
  var puppyQuestion = 'Do I like puppies?';
  var travelQuestionNegativeResponse = 'Incorrect, I love to travel.';
  var dessertQuestionNegativeResponse = 'Incorrect, I love dessert.';
  var runQuestionNegativeResponse = 'Incorrect, I love running.';
  var puppyQuestionNegativeResponse = 'Incorrect, I love puppies.';
  var travelQuestionPositiveResponse = 'Correct, let\'s plan a trip!';
  var dessertQuestionPositiveResponse = 'Correct, ready for cake!';
  var runQuestionPositiveResponse = 'Correct, grab your sneakers!';
  var puppyQuestionPositiveResponse = 'Correct, puppy time!';
  var invalidInput = 'You didn\'t put a proper answer. Try "yes", "y", "no", or "n".';

  var questions = [travelQuestion, dessertQuestion, runQuestion, puppyQuestion];
  var positiveResponses = [travelQuestionPositiveResponse, dessertQuestionPositiveResponse, runQuestionPositiveResponse, puppyQuestionPositiveResponse];
  var negativeResponses = [travelQuestionNegativeResponse, dessertQuestionNegativeResponse, runQuestionNegativeResponse, puppyQuestionNegativeResponse];

  var answerUserName = prompt(nameQuestion);
  console.log(nameQuestion + ': ' + answerUserName);
  var response1 = 'Well hello there, ' + answerUserName;
  alert(response1);

  function askUserQuestions(){
    for (var i = 0; i < questions.length; i++){
      while (true) {
        var answer = prompt(questions[i]);
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y'){
          alert (positiveResponses[i]);
          counter++;
          break;
        } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
          alert (negativeResponses[i]);
          break;
        } else {
          alert(invalidInput);
        }
      }
    }
  }

  askUserQuestions();

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
