var Letter = require('./letter');

var Word = function(wrd) {
  this.word = wrd;
  this.lets = []; // This is where the collected letters are pushed into
  this.found = false;
  this.getLets = function() { // This will collect letter objects and store them in array this.lets
    for(var i = 0; i < this.word.length; i++) {
      var letter = this.word.charAt(i);
      var let = new Letter(letter);
      this.lets.push(let);
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
    if(this.lets.every(function(curLet){
      return curLet.appear === true;
    }) === true) {
      return true;
    }
  };

  this.wordRender = function() {
    var str = "";
    for(var i = 0; i < this.lets.length; i++) {
      str += this.lets[i].letterRender(this.lets[i]); // call the letterRender on that object and then string concatenate that to the varaible str
    }
    return str;
  }
}; // end var Word()

module.exports = Word;