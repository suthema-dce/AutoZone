let tamanhoFonte = 16;

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}

const formCadastro = document.getElementById("formCadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("emailCadastro").value;
        const senha = document.getElementById("senhaCadastro").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        const mensagem = document.getElementById("mensagemCadastro");

        if (senha !== confirmarSenha) {
            mensagem.textContent = "As senhas não conferem.";
            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        localStorage.setItem("usuarioAutoZone", JSON.stringify(usuario));
        mensagem.textContent = "Cadastro realizado com sucesso!";

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1000);
    });
}

const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const mensagem = document.getElementById("mensagemLogin");

        const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioAutoZone"));

        if (!usuarioSalvo) {
            mensagem.textContent = "Nenhum usuário cadastrado.";
            return;
        }

        if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
            mensagem.textContent = "Login realizado com sucesso!";
            setTimeout(function () {
                window.location.href = "index.html";
            }, 1000);
        } else {
            mensagem.textContent = "E-mail ou senha incorretos.";
        }
    });
}