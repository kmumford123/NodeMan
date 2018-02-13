var Letters = require("./letters");



function Word(xword) {

    this.wordArray = xword.split("").map(element => {
        return new Letters(element)
    });

    this.wordOutput = this.wordArray.join(" ");
    var dasharray = [];

    this.wordLogic = function(char) {
        return this.wordArray.map(letter => {
            // var result = new Letters(element);
            letter.check(char);
            return letter.rVal()
        });
        // console.log(dasharray.join(" "));
    };
}
module.exports = Word;