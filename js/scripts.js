
$(document).ready(function() {
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
	});


	
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

//	$(".results").show();*/
