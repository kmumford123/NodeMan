var Letters = require("./letters");

function Word(xword) {
    this.wordArray = xword.split("");
    console.log(this.wordArray);
}


module.exports = Word;