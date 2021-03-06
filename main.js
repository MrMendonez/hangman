var prompt = require('prompt');
var Word = require('./word');
var emoji = require('node-emoji');

prompt.start();

var game = {
  wordBank: ["black hawk down", "shaun of the dead", "zombieland", "safety not guaranteed", "sherlock holmes", "unstoppable", "fight club", "crimson tide", "bad boys"],
  guessesRemaining: 10,
  currentWrd: null,
  lettersChosen: [],

  startGame: function() {
    var randomNumber = Math.floor(Math.random() * this.wordBank.length);
    var word = new Word(this.wordBank[randomNumber]); // Choose a random word from wordBank array.
    this.currentWrd = word;
    this.currentWrd.getLets();
    console.log("\r\n" + "Lets play Hangman! " + emoji.get('grinning') + "\r\n\r\n");
    console.log("The category is movies." + emoji.get('tv') + "\r\n");
    this.keepPromptingUser();
  }, // End startGame()

  keepPromptingUser: function() {
    var self = this;
    var stickFigure = function() {
      switch (self.guessesRemaining) {
        case 10:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
            break;
        case 9:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" + "  " + emoji.get('hushed') + "      |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        case 8:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" +"  " + emoji.get('hushed') + "      |" + "\r\n" + "  |      |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        case 7:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" +"  " + emoji.get('hushed') + "      |" + "\r\n" + " \\|      |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        case 6:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" +"  " + emoji.get('hushed') + "      |" + "\r\n" + " \\|/     |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        case 5:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" +"  " + emoji.get('hushed') + "      |" + "\r\n" + " \\|/     |" + "\r\n" + "  |      |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        case 4:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" +"  " + emoji.get('hushed') + "      |" + "\r\n" + " \\|/     |" + "\r\n" + "  |      |" + "\r\n" + " /       |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        case 3:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" +"  " + emoji.get('hushed') + "      |" + "\r\n" + " \\|/     |" + "\r\n" + "  |      |" + "\r\n" + " / \\     |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        case 2:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" +"  " + emoji.get('sob') + "      |" + "\r\n" + " \\|/     |" + "\r\n" + "  |      |" + "\r\n" + " / \\     |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        case 1:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" +"  " + emoji.get('weary') + "      |" + "\r\n" + " \\|/     |" + "\r\n" + "  |      |" + "\r\n" + " / \\     |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        case 0:
          console.log("   ______" + "\r\n" + "  |      |" + "\r\n" +"  " + emoji.get('dizzy_face') + "      |" + "\r\n" + " \\|/     |" + "\r\n" + "  |      |" + "\r\n" + " / \\     |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "         |" + "\r\n" + "      -------");
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
          break;
        default:
          console.log("Error loading hangman pole.")
          console.log(self.currentWrd.wordRender());
          console.log("\r\nLetters chosen: " + self.lettersChosen + "\r");
          console.log("\r\nChoose a letter or space.")
      }
    }; // End stickFigure()
    stickFigure();
    prompt.get(['guessLetter'], function(err, result) {
      if(result.guessLetter === " ") {
        console.log("The letter or space you guessed is: space");
      }
      else {
        console.log("The letter or space you guessed is: " + result.guessLetter);
      };
      self.lettersChosen.push(result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
      var numberOfLettersMsg = function() {
        if(findHowManyOfUserGuess === 0) {
          console.log("There are no " + result.guessLetter + "'s.");
        } 
        else if(findHowManyOfUserGuess === 1) {
          console.log("There is 1 " + result.guessLetter + ".")
        }
        else {
          console.log("There are " + findHowManyOfUserGuess + " " + result.guessLetter + "'s.")
        }
      }; // End numberOfLetters()
      if(findHowManyOfUserGuess === 0) {
        console.log("You guessed wrong!" + emoji.get('dizzy_face'));
        numberOfLettersMsg();
        self.guessesRemaining--;
        console.log("Guesses remaining: " + self.guessesRemaining);
      }
      else {
        console.log("You guessed right!" + emoji.get('smiley'));
        numberOfLettersMsg();
        if(self.currentWrd.didWeFindTheWord() === true) {
          console.log ("The answer was " + self.currentWrd.word.toUpperCase());
          console.log("\r\n" +"  " + emoji.get('smiley') + "      " + "\r\n" + " \\|/     " + "\r\n" + "  |      " + "\r\n" + " / \\      " + "\r\n");
          console.log(emoji.get('fireworks') + " " + emoji.get('sparkler') + " " + emoji.get('fireworks') + "  " + "You won!" + " " + emoji.get('fireworks') + " " + emoji.get('sparkler') + " " + emoji.get('fireworks'));
          return 1; // This ends the game.
        }
        else {
          console.log("Guesses remaining: " + self.guessesRemaining);
        }
      } 
      if((self.guessesRemaining > 0) && (self.currentWrd.found === false)) {
        self.keepPromptingUser();
      }
      else if(self.guessesRemaining === 0) {
        stickFigure();
        console.log(emoji.get('dizzy_face') + " " + emoji.get('astonished') + " " + emoji.get('dizzy_face') + "  " + "Game over! You lose!" + " " + emoji.get('dizzy_face') + " " + emoji.get('astonished') + " " + emoji.get('dizzy_face'));
        console.log("The word was " + self.currentWrd.word.toUpperCase());
      }
      else {
        // console.log(self.currentWrd.wordRender());
      }
    });
  }
} // End game object

game.startGame();