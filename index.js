var Word = require("./word");
var data = require("./data");


// var result = new Letters("a");
// console.log(result.rVal());
// result.check("a");
// console.log(result.rVal());
// console.log()

var randomWord = data[Math.floor(Math.random() * data.length)];
// console.log(randomWord);
// console.log(randomWord.split());
Word(randomWord)