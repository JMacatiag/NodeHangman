var Letter = require("./Letter.js");

var Word=function(value){
	// sets the value of the object as the word
	this.value=value;
	// Hold an array of letter objects 
	this.letters=[];
	// hold user guesses as a string to count number of guesses used
	this.guessesMade = "";

	for(var i=0; i<this.value.length; i++){
		// create a letter object for each letter of the given word
		var add=new Letter.Letter(this.value[i]);
		// Push made objects into letters array
		this.letters.push(add);
	}

	this.done=function(){
		for(var i=0; i<this.letters.length; i++){
			// if any of the letters have not been guessed return false
			if(this.letters[i].show==false){ 
				return false;
			}
		}
		// return true if all letters have been guessed to end the game
		return true;
	}

	this.compare = function(input){
		// convert user input letter into uppercase for uniformity
		var upperCaseLetter = input.toUpperCase();
		// return if the user input is not the last character (user guessed the same letter)
		if (this.guessesMade.indexOf(upperCaseLetter) != -1) {
			return;
		} 
		// put user guess into guessesMade to keep track of what has or has not been guessed
		this.guessesMade += upperCaseLetter;
		for(var i=0; i<this.letters.length;i++){
			// compare user's guesses to the desired word and return true of those that are equal
			if(this.letters[i].value.toUpperCase() == upperCaseLetter){
			this.letters[i].show = true;
			}
		}
	}

	this.toString = function(){
		// holder for what the user will see in game
	 	var showToUser = "";
	 	// creates the word for the game
	 	for(var i=0; i<this.letters.length; i++){
	    	showToUser += this.letters[i].displayToScreen();
	  	}
  		return showToUser;
	}
}

exports.Word = Word;




