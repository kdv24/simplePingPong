$(document).ready(function() {
	$('#goButton').click(function() {
	var userInput = prompt('What number do you choose?', 'number');
	//alert('You chose the number ' + userInput);

	for (var counter=1; counter <= userInput; counter++){
		if ((counter%3 == 0) && (counter%5 == 0)) {
		  	console.log(counter + " ping-pong");
		}
		else if (counter%3 == 0) {
			console.log(counter + " ping");
		}
		else if (counter%5 == 0) {
			console.log(counter + " pong");
		}	
		else {
			console.log(counter);
		}
	};	


	});
});

	



	//	$(".resultsOutput").text(userInput);
	//  add response for just in case not integer
	//  (eg, if not integer, give new prompt)
	//	if (isNaN (userInput)) {
	//		alert("Oops, try again.  You need to enter a number.");	
	//	}		
	//	
	//	}



/*******CODE BELOW WORKS IN JS CONSOLE************/


//	$(".results").show();*/
