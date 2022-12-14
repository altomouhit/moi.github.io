(function() {
	emailjs.init("Wl_wMODLnU4QKeUC5");
})();

(() => {
	'use strict'
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation');
	// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}
			form.classList.add('was-validated');
			if (form.checkValidity() === true) {
				event.preventDefault();
				event.stopPropagation();
				sendMail();
			}
		}, false)
	})
})();

function sendMail() {
	var params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
		phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
		reply_to: document.getElementById("email").value,
	};
	const serviceID = "service_o3yaeca";
	const templateID = "template_yvklucf";
	emailjs.send(serviceID, templateID, params).then(res => {
		$(".needs-validation, .getouch").hide();
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
		document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";
		console.log(res);
		$("#alert").show();
        //$("#alert").fadeTo(2000, 2000).slideUp(2000, function() {});
	}).catch(err => console.log(err));
}