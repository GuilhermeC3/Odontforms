document.getElementById('login').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var errorMessage = document.getElementById('error-message');

    if (email === '' || senha === '') {
        errorMessage.textContent = 'Preencha todos os campos.';
    } else {
        document.getElementById('login-form').submit();
    }
});