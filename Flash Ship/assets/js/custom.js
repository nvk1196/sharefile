function nextForm(current_form) {
	if (current_form == "PickUpForm")
	{
		document.getElementById("pickup_form").style.display = "none";
		document.getElementById("question_form").style.display = "block";
	}
	else if (current_form == "QuestionForm_no")
	{
		document.getElementById("question_form").style.display = "none";
		document.getElementById("shipto_form").style.display = "block";		
	}	
	else if (current_form == "QuestionForm_yes")
	{
		document.getElementById("question_form").style.display = "none";
		document.getElementById("return_form").style.display = "block";
	}
	else if (current_form == "ReturnForm" || current_form =="ShipToForm")
	{
		document.getElementById("return_form").style.display = "none";
		document.getElementById("shipto_form").style.display = "none";
		document.getElementById("enter_phone_form").style.display = "block";
	}
	else if (current_form == "EnterPhoneForm")
	{
		document.getElementById("enter_phone_form").style.display = "none";
		document.getElementById("verify_phone_form").style.display = "block";

	}	
		else if (current_form == "VerifyPhoneForm")
	{
		document.getElementById("verify_phone_form").style.display = "none";
		document.getElementById("final_form").style.display = "block";
	}
	
}


