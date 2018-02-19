var Word = require("./Word.js");
var inquirer = require("inquirer");
// Array of words to use in game
var wordArray = ["United States of America", "Russia", "Canada", "Mexico", "Germany", "United Kingdom", "Argentina","Peru","Japan","China","South Korea","Hungary","Sweden","France","Spain"]
// picks a random word for every game
var randomWord=wordArray[Math.floor(Math.random() * wordArray.length)];
// use constructor to create the word object
var gameWord = new Word.Word(randomWord);
// user has 15 guesses
var numberOfGuesses = 15;

function play(){
	// Display current state of the word
	console.log(gameWord.toString());
	// if the user has made more guesses than allowed the lose an return out of the game
	if (gameWord.guessesMade.length >= numberOfGuesses){
		console.log("You lose! Loooohooohoooser!");
		return;
	}

	inquirer.prompt([{
		type: 'text',
		message: 'Guess a letter please.',
		name: 'letter',
		validate: function(str){
			// Make sure user only inputs a single letter character
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
		}
		}]).then(function(inquirerResponse){
				// take in user input
				var inputletter = inquirerResponse.letter; 
				// check to see if the guess corresponds to an appropriate letter in the desired word
				gameWord.compare(inputletter); 
					// if all the letters show true (have been guessed) congratulate and end game
				if(gameWord.done()){ 
					console.log("Good job in guessing " + gameWord.toString() + "! You feel smart don't ya?");
					return;
				}
				// if all letters do not show true, inform user of number of guesses left and run the game again
				console.log("******************\n");
				console.log((numberOfGuesses - gameWord.guessesMade.length) + " guesses left.")
				play();
				}
  );
}

// Run game
play();