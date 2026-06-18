function entrar(){

    let email =
    document.getElementById("email").value;

    let senha =
    document.getElementById("senha").value;

    document.getElementById("erroEmail").innerHTML="";
    document.getElementById("erroSenha").innerHTML="";

    if(email == ""){
        document.getElementById("erroEmail").innerHTML =
        "Informe o email";
        return;
    }

    if(senha.length < 4){
        document.getElementById("erroSenha").innerHTML =
        "Senha inválida";
        return;
    }

    window.location.href = "painel.html";
}

const cursos = [

["Engenharia Civil","Exatas"],
["Ciência da Computação","Exatas"],
["Matemática","Exatas"],

["Direito","Humanas"],
["História","Humanas"],
["Geografia","Humanas"],

["Medicina","Natureza"],
["Biologia","Natureza"],
["Enfermagem","Natureza"],

["Letras","Linguagens"],
["Jornalismo","Linguagens"],
["Publicidade","Linguagens"]

];