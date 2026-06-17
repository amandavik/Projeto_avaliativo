function cadastro() {
    window.location.href = "cadastro.html";
}

function voltar() {
    window.location.href = "index.html";
}

function entrar() {

    document.getElementById("erroEmail").innerHTML = "";
    document.getElementById("erroSenha").innerHTML = "";

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!email.includes("@")) {
        document.getElementById("erroEmail").innerHTML = "Email inválido";
        return;
    }

    if (senha.length < 8 || senha == senha.toLowerCase()) {
        document.getElementById("erroSenha").innerHTML =
            "Senha precisa de 8 caracteres e letra maiúscula";
        return;
    }

    alert("Login realizado com sucesso!");
}

function salvar() {

    document.getElementById("erroEmailCad").innerHTML = "";
    document.getElementById("erroSenhaCad").innerHTML = "";
    document.getElementById("erroConfirmar").innerHTML = "";

    let email = document.getElementById("emailCad").value;
    let senha = document.getElementById("senhaCad").value;
    let confirmar = document.getElementById("confirmar").value;

    if (!email.includes("@")) {
        document.getElementById("erroEmailCad").innerHTML =
            "Email inválido";
        return;
    }

    if (senha.length < 8) {
        document.getElementById("erroSenhaCad").innerHTML =
            "Senha muito curta";
        return;
    }

    if (senha != confirmar) {
        document.getElementById("erroConfirmar").innerHTML =
            "Senhas diferentes";
        return;
    }

    alert("Inscrição salva com sucesso!");
    window.location.href = "index.html";
}