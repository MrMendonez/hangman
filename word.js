var Letter = require('./letter');

var Word = function(wrd) {
  this.word = wrd;
  this.lets = []; // This is where the collected letters are pushed into
  this.found = false;
  this.getLets = function() { // This will collect letter objects and store them in array this.lets
    for(var i = 0; i < this.word.length; i++) {
      this.lets.push(new Letter(this.word[i]));
    }
  }; // End getLets()

  this.checkIfLetterFound = function(guessLetter) {
    var whatToReturn = 0;
    for(var i = 0; i < this.lets.length; i++) {
      if(this.lets[i].charac === guessLetter) {
        this.lets[i].appear = true;
        whatToReturn++;
      }
    }
    return whatToReturn;
  } // End checkIfLetterFound()

  this.didWeFindTheWord = function() {
    this.found = this.lets.every(function(curLet) {
      return curLet.appear;
    });
    return this.found;
  }; // End didWeFindTheWord()

  this.wordRender = function() {
    this.str = "";
    for(var i = 0; i < this.let.length; i++) {
      str += this.lets[i].letterRender();// call the letterRender on that object and then string concatenate that to the varaible str
    }
    return str;
  }
}; // end var Word()

module.exports = Word;