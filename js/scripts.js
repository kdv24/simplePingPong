
$(document).ready(function() {
	//submitOK = "true";
	$("#goButton").click(function() {
		$(".userForm").show();
	});	

	$("#userEntry").submit();
		var userInput = ("input#userEntry");
		console.log(userInput);


	
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




	//? var n = 0;
	//	for (n=0; n <= promptResponse; n+=1){
		//  if ((userInput/3 % 0) && (userInput/5 % 0)) {
		//  	println("ping-pong");
		//		}
		//	if (userInput/3 % 0) {
		//		println("ping");
		//		}
		//	if (userInput/5 % 0) {
		//		println("pong");
		//		}	
		//  else {
		//		println(n)
		//		}
	//	}	

//	$(".results").show();
