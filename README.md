# NodeHangman

### Build an Hangman game that will be played through the terminal.

### Design Notes
	* Use several different files to hold differing constructors
	* Letter.js
		* Holds Letter consturctor to create letter objects to determine whether or not to show the letter
		* Exports Letter constructor out
	* Word.js
		* Holds Word consturctor to concatenate letter objects to give user a real time representation of the word
		* Imports Letter constructor
		* Exports Word constructor
	* Index.js
		* Imports Word constructor
		* Hold game logic and game code
 

### Stack Used
	* Javascript
	* Node Packages
		* Inquirer