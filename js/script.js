// *** strict mode for safer javascript code ***
"use strict";

// *** Select Elements ***
const formBtn = document.getElementById("form-btn");
const errorMessage = document.getElementById("error-message");
const errorIcon = document.getElementById("error-icon");
// *** End ofSelect Elements ***

formBtn.addEventListener("click", (e) => {
	e.preventDefault();

	// *** Email Input ***
	// *** Converts to lowercase and trims for whitespace and Email Regex for validation***
	const emailInput = document.getElementById("email");
	const emailValue = emailInput.value.trim().toLowerCase();

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	// *** End of Email Input ***

	// *** Check if the input is empty or invalid ***
	if (emailValue === "" || !emailRegex.test(emailValue)) {
		// *** Add error class/border/message/icon ***
		emailInput.classList.add("error-border");
		errorMessage.classList.add("active");
		errorIcon.classList.add("active");
	} else {
		// *** Remove error class/border/message/icon ***
		emailInput.classList.remove("error-border");
		errorMessage.classList.remove("active");
		errorIcon.classList.remove("active");

		// ------ Little Bonus ------
		// *** My idea for fun 😂 ***
		// *** Delays the success alert by 250ms for a smoother user experience ***

		setTimeout(() => {
			alert(
				`Thank you! We have received your email: ${emailValue}. We'll keep you updated! 😊`
			);
		}, 250);
	}
});
