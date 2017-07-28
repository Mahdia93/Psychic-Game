

		var wins = 0;
		var loses = 0;
		var guessesLeft = 9;
		var yourGuessesSoFar = [];

		var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
		'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		var randomComputerChoice = computerChoices [(Math.floor(computerChoices.length*Math.random()))];

		
		document.onkeyup = function(event) {



			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			yourGuessesSoFar.push(userGuess);



			yourGuessesSoFar.toString();
			document.getElementById('yourGuessesSoFar').innerHTML = "Your guesses so far: "+yourGuessesSoFar;




			if(userGuess == randomComputerChoice){
				wins++;
				yourGuessesSoFar = [];
				document.getElementById('wins').innerHTML = "Wins: " + wins;
				guessesLeft = 9;
				alert("You won!");
				document.getElementById('guessesLeft').innerHTML = "Guesses Left: 9";
				document.getElementById('yourGuessesSoFar').innerHTML = "Your guesses so far: ";



			}

			if (userGuess !== randomComputerChoice) {

				guessesLeft--;
				document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
			}


			if(guessesLeft==0){
				loses++;
				yourGuessesSoFar = [];
				document.getElementById('losses').innerHTML = "Losses: " + loses;
				alert('you lost sucka');
				guessesLeft = 9;
				document.getElementById('guessesLeft').innerHTML = "Guesses Left: "+guessesLeft;
				document.getElementById('yourGuessesSoFar').innerHTML = "Your guesses so far: ";


			}

			


				




		} //document.onkeyup 