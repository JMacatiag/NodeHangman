function Letter(letter) {
	// sets the value of the character to the character itself
	this.value=letter;
	// false if the character given is a letter
	this.show=false;
	// if it is a space return true
	if(this.value===" "){
		this.show=true;
	}

	this.displayToScreen=function(){
		// if true return the value of the character
		if (this.show){
			return(this.value);
		}
		// if false return an underline
		else{
			return "_ ";
		}
	};
}

exports.Letter = Letter;
