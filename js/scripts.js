
$(function() {
	submitOK = "true";
	$("#goButton").click(function() {
		$(".userForm").show();
		$("#userEntry").submit(function() {
			var userInput = $("input#userEntry").parseInt();
			$(".resultsOutput").number(userInput);
	//  add response for just in case not integer
	//  (eg, if not integer, give new prompt)
	//	if (isNaN (userInput)) {
	//		alert("Oops, try again.  You need to enter a number.");
	//		submitOK = "false"	
	//	}		
	//	if (submitOK == "false") {
	//		return false;
	//	}

		});

	});



	//? var n = 0;
	//? var promptResponse = promptResponse;
	//	for (n=0; n <= promptResponse; n+=1){
		//  if ((response/3 % 0) && (response/5 % 0)) {
		//  	println("ping-pong");
		//		}
		//	if (response/3 % 0) {
		//		println("ping");
		//		}
		//	if (response/5 %0) {
		//		println("pong");
		//		}	
		//  else {
		//		println(n)
		//		}
	//	}	

//	$(".results").show();
});	