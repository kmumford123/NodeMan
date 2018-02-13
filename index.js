var inquirer = require("inquirer")

var Word = require("./word");
var data = require("./data");
var Letters = require("./letters")


// var result = new Letters("a");
// console.log(result.rVal());
// result.check("a");
// console.log(result.rVal());
// console.log()



var randomWord = data[Math.floor(Math.random() * data.length)];

function gameLogic() {
    inquirer.prompt([{
        type: "input",
        name: "theletter",
        message: "Guess a letter..."
    }]).then(function(WorkLetter) {
        console.log(WorkLetter.theletter);
        var newWord = new Word(randomWord);
        var chosenLetter = WorkLetter.theletter;
        console.log("\n");
        var answerArray = newWord.wordLogic(chosenLetter);
        console.log(answerArray.join(" "));
        gameLogic();
    });
}
gameLogic();
// var newWord = new Word(randomWord);
// newWord.wordLogic();
// Word(randomWord)