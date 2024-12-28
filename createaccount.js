document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmSenha = document.getElementById('confirmsenha').value;
    var errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; 

    if (nome === '' || email === '' || senha === '' || confirmSenha === '') {
        errorMessage.textContent = 'Preencha todos os campos.';
        event.preventDefault(); 
    } else if (senha !== confirmSenha) {
        errorMessage.textContent = 'As senhas não coincidem.';
        event.preventDefault(); 
    }
});
