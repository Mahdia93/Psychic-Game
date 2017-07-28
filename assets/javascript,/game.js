

		var wins = 0;
		var loses = 0;
		var guessesLeft = 9;
		var yourGuessesSoFar = [];

		var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		
		document.onkeyup = function(event) {



			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			var randomComputerChoice = computerChoices [(Math.floor(computerChoices.length*Math.random()))];

			yourGuessesSoFar.push(userGuess);

			if(userGuess == randomComputerChoice){
				document.getElementById('wins').innerHTML = "wins = " + wins;
				wins++;
				guessesLeft = 9;
				yourGuessesSoFar = [];

				alert("You won!");


			}

			else if (userGuess !== randomComputerChoice) {

				guessesLeft--;
				document.getElementById('guessesLeft').innerHTML = "guessesLeft = " + guessesLeft;
			}


			else  if(guessesLeft==0){
				document.getElementById('loses').innerHTML = loses;
				loses++;
				alert('you lost sucka');
				guessesLeft = 9;
				yourGuessesSoFar = [];
			}

			


				




		} //document.onkeyup 