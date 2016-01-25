var Letter = function(let) {
  this.charac = let;
  this.appear = false;
  this.letterRender = function() {
    if(this.appear === false) {
      return " _ ";
    }
    else {
      return this.charac;
    }
  }
};

module.exports = Letter;

// Summary: Letter(let) will take in a letter submitted by the user and check if this letter appears in the hangman word. If the letter does not appear it will output an underscore. Else it will show the characters.