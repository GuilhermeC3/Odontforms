document.getElementById('createAccountButton').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmSenha = document.getElementById('confirmsenha').value;
    var errorMessage = document.getElementById('error-message');

    if (nome === '' || email === '' || senha === '' || confirmSenha === '') {
        errorMessage.textContent = 'Preencha todos os campos.';
    } else if (senha !== confirmSenha) {
        errorMessage.textContent = 'As senhas não coincidem.';
    } else {
        document.getElementById('createAccountForm').submit();
    }
});