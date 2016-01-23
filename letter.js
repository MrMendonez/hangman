function Letter(let) {
  this.charac = let;
  this.appear = false;
  this.letterRender = function() {
    if(appear === false) {
      console.log("_"); // Should this be return or console.log?
    }
    else {
      console.log(charac);
    }
  }
};

module.exports = Letter;

// Summary: Letter(let) will take in a letter submitted by the user and check if this letter appears in the hangman word.