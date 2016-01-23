var prompt = require('prompt');
var Word = require('./word');

prompt.start();

var game = {
  wordBank: ["BLACK HAWK DOWN", "SHAUN OF THE DEAD", "ZOMBIELAND", "SAFETY NOT GUARANTEED", "SHERLOCK HOLMES", "UNSTOPPABLE", "FIGHT CLUB"];
  guessRemaining: 10;
  currentWrd: null;
  startGame: function(wrd) {
    currentWrd = new Word(wordBank[Math.floor(Math.random() * items.length)]); // Choose a random word from wordBank array.
    Word.getlets(currentWrd); // Called .getLets() method on the currentWrd object.
    keepPropmtingUser();
  } // End startGame
  keepPropmtingUser: function() {
    var self = this;
    prompt.get(guessLetter, function(err, result) {
      console.log(“The letter or space you guessed is ” + result.guessLetter)
      var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter);
      if(findHowManyOfUserGuess === 0) {
        console.log("You guessed wrong!");
        guessRemaining--;
      }
      else {
        console.log("You guessed right!");
        if(currentWrd.didWeFindTheWord() === true) {
          console.log("You won!");
          return 1; // This ends the game.
        }
        else {
          console.log("Guesses remaining: " = guessRemaining);
          console.log(Word.wordRender(currentWrd));
          if(guessRemaining > 0 && currentWrd.found === false) {
            keepPropmtingUser();
          }
          else if(guessRemaining === 0) {
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