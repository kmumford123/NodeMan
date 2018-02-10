var Letters = require("./letters");



function Word(xword) {

    this.wordArray = xword.split("");
    this.wordOutput = this.wordArray.join(" ");
    this.wordLogic = function() {
        this.wordArray.forEach(element => {
            var result = new Letters(element);
            console.log(result.rVal());
        });
        // console.log(wordLogic);
    };

    // console.log(wordLogic.rVal());
}



module.exports = Word;