$(document).ready(function() {
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
	});
});

	





