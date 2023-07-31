class Auth {
	constructor() {
		document.querySelector("body").style.display = "none";
		const auth = localStorage.getItem("auth");
		this.validateAuth(auth);
	}
	validateAuth(auth) {
		if (auth != "sri@altomouhit.com") {
			window.location.replace("../Landing_theme/index.html");
		} else {
			document.querySelector("body").style.display = "block";
		}
	}
	logOut() {
		localStorage.removeItem("auth");
		window.location.replace("../Landing_theme/index.html");
	}
}