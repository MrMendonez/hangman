var prompt = require('prompt');
var Word = require('./word');

prompt.start();

var game = {
  wordBank: ["BLACK HAWK DOWN", "SHAUN OF THE DEAD", "ZOMBIELAND", "SAFETY NOT GUARANTEED", "SHERLOCK HOLMES", "UNSTOPPABLE", "FIGHT CLUB", "CRIMSON TIDE", "BAD BOYS"],
  guessesRemaining: 10,
  currentWrd: null,
  startGame: function(wrd) {
    var randomNumber = Math.floor(Math.random() * (9 - 1) + 1);
    currentWrd = new Word(wordBank[randomNumber]); // Choose a random word from wordBank array.
    Word.getlets(currentWrd); // Called .getLets() method on the currentWrd object.
    keepPropmtingUser();
  }, // End startGame
  keepPropmtingUser: function() {
    var self = this;
    prompt.get(guessLetter, function(err, result) {
      console.log("The letter or space you guessed is " + result.guessLetter)
      var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter);
      if(findHowManyOfUserGuess === 0) {
        console.log("You guessed wrong!");
        guessesRemaining--;
      }
      else {
        console.log("You guessed right!");
        if(currentWrd.didWeFindTheWord() === true) {
          console.log("You won!");
          return 1; // This ends the game.
        }
        else {
          console.log("Guesses remaining: " + guessesRemaining);
          console.log(Word.wordRender(currentWrd));
          if(guessesRemaining > 0 && currentWrd.found === false) {
            keepPropmtingUser();
          }
          else if(guessesRemaining === 0) {
            console.log("Game Over. You lose.");
            console.log("The word was " + currentWrd);
          }
          else {
            console.log(Word.wordRender(currentWrd));
          }
        }
      }
    });
  }
} // End game object

game.startGame();