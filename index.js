var Word = require("./Word.js");
var inquirer = require("inquirer");
var wordArray = ['United States of America', 'Russia', 'Canada', 'Mexico', 'Germany', 'United Kingdom', 'Argentina','Peru','Japan','China','South Korea','Hungary','Sweden','France','Spain']
var randomWord=wordArray[Math.floor(Math.random() * wordArray.length)];
var letterGuessed;
exports.letter;
console.log(randomWord);

var myWord = new Word.Word(randomWord);
var maxGuesses = 15;

function play(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('You have no more guesses. WOMP WOMP.');
	return; //Game over
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
//			if (str.length != 1) return false;
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(inquirerResponse){ //Game control
				var inputletter = inquirerResponse.letter; 
				myWord.findLetter(inputletter); //Check
					if(myWord.showLetter()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return; //Winner
					}
				console.log('-------------------\n'); //If we are here the game did not end. Next guess.
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				play(); //Recursive call
				}
  );
}

play(); //Start Game