var prompt = require('prompt');
var Word = require('./word');

prompt.start();

var game = {
  wordBank: ["black hawk down", "shaun of the dead", "zombieland", "safety not guaranteed", "sherlock holmes", "unstoppable", "fight club", "crimson tide", "bad boys"],
  guessesRemaining: 10,
  currentWrd: null,

  startGame: function() {
    var randomNumber = Math.floor(Math.random() * this.wordBank.length);
    var word = new Word(this.wordBank[randomNumber]); // Choose a random word from wordBank array.
    this.currentWrd = word;
    this.currentWrd.getLets();
    console.log("\r\n" + "Lets play Hangman!" + "\r\n\r\n" + "The category is movies." + "\r");
    this.keepPromptingUser();
  }, // End startGame()

  keepPromptingUser: function() {
    var self = this;
    console.log(self.currentWrd.wordRender());
    console.log("\r")
    prompt.get(['guessLetter'], function(err, result) {
      if(result.guessLetter === " ") {
        console.log("The letter or space you guessed is: space");
      }
      else {
        console.log("The letter or space you guessed is: " + result.guessLetter);
      };
      
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
      console.log(self.currentWrd.checkIfLetterFound(result.guessLetter));
      if(findHowManyOfUserGuess === 0) {
        console.log("You guessed wrong!");
        self.guessesRemaining--;
        console.log("Guesses remaining: " + self.guessesRemaining);
        // console.log(self.currentWrd.wordRender());
      }
      else {
        console.log("You guessed right!");
        if(self.currentWrd.didWeFindTheWord() === true) {
          console.log ("The answer was " + self.currentWrd.wordRender())
          console.log("You won!");
          return 1; // This ends the game.
        }
        else {
          console.log("Guesses remaining: " + self.guessesRemaining);
          // console.log(self.currentWrd.wordRender());
        }
      } 
      if((self.guessesRemaining > 0) && (self.currentWrd.found === false)) {
        self.keepPromptingUser();
      }
      else if(self.guessesRemaining === 0) {
        console.log("Game Over. You lose.");
        console.log("The word was " + self.currentWrd.word);
      }
      else {
        console.log(self.currentWrd.wordRender());
      }
    });
  }
} // End game object

game.startGame();