// for user story #12 --> pupunta sa dynamic page
// ipapakita talaga yung ininput the e-mail
// Lagay mo thank you for subscribing
// basta magawa yung pagpasa sa data papunta sa ibang page

(function () {
	var queryString = widnow.location.search;
	var href = window.location.href;
	var parameters = new URLSearchParams(queryString);
	var age = parameters.get("age");
	var name = parameters.get("name");
	var gender = parameters.get("gender");

	console.log("age", age, "name", name, "gender", gender);

	var domName = document.querySelector("[data-name]");
	var domAge = document.querySelector("[data-age]");
	var domGender = document.querySelector("[data-gender");

	currentUrl.textContent = "current URL: " + href;

	if (name && age && gender) {
		domName.textContent = "Name: " + name;
		domAge.textContent = "Age: " + age;
		domGender.textContent = "Gender: " + gender;
	}
});

// email is submitted to a dynamic page (challenge for the improvement)
// I guess lagay tayo na E-mail submitted, redirecting to previous page in 5 4 3 2 1 seconds (?)
// send to another repo, another folder
