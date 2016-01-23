var Letter = require('./letter');

function Word(wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function() {
    for(var i = 0; i < word.length; i++) {
      word.split(' ');
      this.lets = Letter(this.word[i]);
      console.log("lets = " + this.lets);
    }
  } // End getLets()
  this.checkIfLetterFound = function(guessLetter) {
    this.whatToReturn = 0;
    for(var i = 0; i < this.lets.length; i++) {
      if(this.lets[i].charac === guessLetter) {
        this.lets[i].appear = true;
        whatToReturn++;
      }
    }
    return whatToReturn;
  } // End checkIfLetterFound()
  this.didWeFindTheWord = function() {
    lets.every(function(curLet) {
      if() { // Unsure how to write an if conditional that checks if all letter objects have the true value set for their appear property.

        this.found = true;
      }
      return found;
    });
  } // End didWeFindTheWord()
  this.wordRender = function() {
    this.str = "";
    for(var i = 0; i < let.length; i++) {
      // call the letterRender on that object and then string concatenate that to the varaible str
    }
    return str;
  }
};

module.exports = Word;