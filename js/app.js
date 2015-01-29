
$(document).ready(function(){	

	count = 0;

	function newGame () {		
	  	secretNumber = Math.floor(Math.random()*99+1);
  		count = 0;
  		guessCount(count);	  	
		console.log("secret number is " + secretNumber);
		$("#guessList li").remove();
		$("#feedback").text("Make your guess");
	}

  	newGame();		

  	// Changes temperature

  	function temperature (temp) {
  		$("#feedback").text(temp);
  	}

	 // Counter function

	function guessCount (count) {		
  		$("#count").text(count);
  	}


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);

  	});

  	// New Game Button

  	$("a.new").click(function() {  		
		newGame();		
  	});

  	// Guess interact Button

  	$("#guessButton").click(function(e) {
  		e.preventDefault(); 



  		// Gets, displays, and clears user guess
  				  		
  		guess = $("#userGuess").val();

  		if (guess > 100) {
  			temperature("Pick 100 or less");
  			$("#userGuess").val('');		
  			return ;
  		}

  		$("#guessList").append("<li>" + guess + "</li>");		
  				
		console.log("guessed " + guess);
		$("#userGuess").val('');		

		// Performs operation for temperature

		var difference = guess - secretNumber;
		var absDifference = Math.abs(difference);		

		// Gets temperature

		if (absDifference === 0) {
			temperature("You Win! New Game Started!");
			newGame();
		}

		else if (absDifference <= 10) {		
			temperature("Very hot!");	
	  					
		}

		else if (absDifference > 10 && absDifference <= 20) {
			temperature("Hot!");		
		}

		else if (absDifference > 20 && absDifference <= 30) {
			temperature("Warm!");
			
		}

		else if (absDifference > 30 && absDifference <= 50) {
			temperature("Cold!");		
		}

		else {
			temperature("Ice cold!");			
		}

		count++;
	  	guessCount(count);		
		
  	});

});














