(function () {
	const queryString = window.location.search;
	const parameters = new URLSearchParams(queryString);
	const email = parameters.get("email");
	const domEmail = document.querySelector("[data-email]");

	if (email) {
		domEmail.textContent = `${domEmail.textContent} ${email}`;
	}
})();

(function () {
	let initialTime = 5;
	setInterval(() => {
		initialTime--;
		document.querySelector("[data-time]").textContent = initialTime;
		if (initialTime === 0) window.close();
	}, 1000);
})();

// setInterval(function, 1000)
