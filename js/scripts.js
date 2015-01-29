$(document).ready(function() {
<<<<<<< HEAD
	$('#goButton').click(function() {
	var userInput = prompt('What number do you choose?', 'number');
	//alert('You chose the number ' + userInput);

	while (isNaN(userInput)) {
		if (isNaN(userInput)) {
				alert("Oops, try again.  You need to enter a number.");	
				userInput = prompt('What number do you choose?', 'number');
		}; 
	};			
			for (var counter=1; counter <= userInput; counter++){						
				if ((counter%3 == 0) && (counter%5 == 0)) {
				  	document.write(counter + " ping-pong" + "<br>");
				} else if (counter%3 == 0) {
					document.write(counter + " ping" + '<br>');
				} else if (counter%5 == 0) {
					document.write(counter + " pong" + '<br>');
				} else {
					document.write(counter + '<br>');
				}
			};	
=======
	$(function() {
		$("#goButton").click(function() {
			$(".userForm").show();
		});

//User enters number, which is then converted to variable
// I can't figure out how to capture the submitted number

		$('#userEntry').submit(function() {	
			var userInput = parseInt('#userEntry');
			alert(Math.round(userInput));
		});	
>>>>>>> FETCH_HEAD
	});
});

	
<<<<<<< HEAD



=======
	//	$(".resultsOutput").text(userInput);
	//  add response for just in case not integer
	//  (eg, if not integer, give new prompt)
	//	if (isNaN (userInput)) {
	//		alert("Oops, try again.  You need to enter a number.");	
	//	}		
	//	
	//	}
});


/*******CODE BELOW WORKS IN JS CONSOLE************/
/*	for (var n=0; n <= userInput; n++){
		if ((userInput%3 == 0) && (userInput%5 == 0)) {
		  	console.log("ping-pong");
		}
		if (userInput%3 == 0) {
			console.log("ping");
		}
		if (userInput%5 == 0) {
			console.log("pong");
		}	
		else {
			console.log(n)
		}
	}	
>>>>>>> FETCH_HEAD


