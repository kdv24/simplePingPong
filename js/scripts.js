
$(document).ready(function() {
	//submitOK = "true";
	$(function() {
		$("#goButton").click(function() {
			$(".userForm").show();
		});
		$('#userEntry form').submit(function(event) {	
			var userInput = $('#userEntry').val();

			$('ul').text(userInput);
			$('.resultsOutput').show();
			event.preventDefault();
		});	
	});


	
	//	$(".resultsOutput").text(userInput);
	//  add response for just in case not integer
	//  (eg, if not integer, give new prompt)
	//	if (isNaN (userInput)) {
	//		alert("Oops, try again.  You need to enter a number.");
	//		submitOK = "false";	
	//	}		
	//	if (submitOK == "false") {
	//		return false;
	//	}
});



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
