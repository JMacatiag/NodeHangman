var Letter = require("./Letter.js");
var addArray=[];


var Word=function(value){
	// sets the value of the object as the word
	this.value=value;
	this.letters=[];
	this.guessesMade = "";

	for(var i=0; i<this.value.length; i++){
		var add=new Letter.Letter(this.value[i]);
		this.letters.push(add);
		// console.log(add);
		// console.log(add[i]);
		
	}


	this.showLetter=function(){
		var letterUpperCase=letter.toUpperCase(); 
		for(var i=0; i<this.letters.length; i++){
			if(this.letters[i].show==true){
				return true;
			}
			else{
				return false;
			}

		}

	// 	for(var i = 0; i < this.letters.length; i++){
	// 	if(!this.letters[i].show) return false;
	// }
	// return true;


	}

	this.findLetter = function(input){
		var upperCaseLetter = input.toUpperCase();
		if (this.guessesMade.indexOf(upperCaseLetter) != -1) {
			return "Duplicate";
		} 
		this.guessesMade += upperCaseLetter; //Record the guess
		for(var i=0; i<this.letters.length;i++){
			if(this.letters[i].value.toUpperCase() == upperCaseLetter){
			this.letters[i].show = true;
			}
		}
	}

	this.toString = function(){
	  var output = "";
	  for(var i=0; i<this.letters.length; i++){
	    output += this.letters[i].displayToScreen();
	  }
  	return output;
}

}

// var word="today is monday";
// var randomWord=new Word(word);
// console.log(randomWord.value);
// console.log(randomWord.guessesMade);
exports.Word = Word;


