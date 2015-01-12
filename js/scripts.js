
$(function() {
	$("#goButton").click(function() {
		$(".userForm").show();
		$("#userEntry").submit(function() {
			userInput = $("input#userEntry").val();
			$(".resultsOutput").text(userInput);
		});

	});

	//  add response for just in case not integer
	//  (eg, if not integer, give new prompt)
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