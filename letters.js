function Letters(letter) {
    this.letter = letter;
    this.guessed = false;
    this.rVal = function() {
        if (this.guessed === false) {
            return ("-");
        } else {
            return this.letter;
        }
    };
    this.check = function(char) {
        if (char === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letters