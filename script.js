function check(input) {
    if (input.value != document.getElementById('user_password').value) {
        input.setCustomValidity('The passwords must match');
    } else {
        // input is valid -- reset the error message
        input.setCustomValidity('');
    }
}