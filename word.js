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
    for(var i = 0; i < lets.length; i++) {
      if(Letter.charac === guessLetter) {
        Letter.appear = true;
        // HW says to add 1 to checkIfLetterFound. I'm thinking it should say 'add 1 to whatToReturn' since checkIfLetterFound is a function and whatToReturn is an integer. Need to verify.
      }
    }
  }
};