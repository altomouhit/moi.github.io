$(document).ready(function () {
    $('#submit').click(function () {
        event.preventDefault(); // prevent PageReLoad
        var ValidEmail = $('#inputEmail').val() === 'sri@altomouhit.com'; // User validate
        if (ValidEmail == '' || ValidEmail === 'sri@altomouhit.com') {
            $('.coruser').show();
        } else {
            $('.coruser').hide();
        }
        var ValidPassword = $('#inputPassword').val() === 'sri123'; // Password validate
        if (ValidPassword == '' || ValidPassword === 'sri123') {
            $('.corpwd').show();
        } else {
            $('.corpwd').hide();
        }
        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.error').hide();
            window.location = "home.html"; // go to home.html
        } else {
            $('.error').show(); // show error msg
        }
    });
});