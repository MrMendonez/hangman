var prompt = require('prompt');
var Word = require('./word');

prompt.start();

var game = {
  wordBank: ["BLACK HAWK DOWN", "SHAUN OF THE DEAD", "ZOMBIELAND", "SAFETY NOT GUARANTEED", "SHERLOCK HOLMES", "UNSTOPPABLE", "FIGHT CLUB", "CRIMSON TIDE", "BAD BOYS"],
  guessesRemaining: 10,
  resetGuessesRemaining: function() { // Reset guessesRemaining when game ends and user begins new game.
    guessesRemaining = 10;
  },
  currentWrd: null,

  startGame: function(wrd) {
    this.resetGuessesRemaining();
    var randomNumber = Math.floor(Math.random() * this.wordBank.length);
    this.currentWrd = new Word(this.wordBank[randomNumber]); // Choose a random word from wordBank array.
    this.currentWrd.getLets; // Called .getLets() method on the currentWrd object.
    this.keepPropmtingUser();
  }, // End startGame

  keepPropmtingUser: function() {
    var self = this;
    prompt.get(['guessLetter'], function(err, result) {
      console.log("The letter or space you guessed is: " + result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
      if(findHowManyOfUserGuess === 0) {
        console.log("You guessed wrong!");
        self.guessesRemaining--;
      }
      else {
        console.log("You guessed right!");
        if(currentWrd.didWeFindTheWord() === true) {
          console.log("You won!");
          return 1; // This ends the game.
        }
        else {
          console.log("Guesses remaining: " + self.guessesRemaining);
          console.log(self.currentWrd.wordRender());
          console.log("Letters you've chosen so far: ");
          if((self.guessesRemaining > 0) && (self.currentWrd.found === false)) {
            self.keepPropmtingUser();
          }
          else if(self.guessesRemaining === 0) {
            console.log("Game Over. You lose.");
            console.log("The word was " + currentWrd);
          }
          else {
            console.log(self.currentWrd.wordRender());
          }
        }
      }
    });
  }
} // End game object

game.startGame();